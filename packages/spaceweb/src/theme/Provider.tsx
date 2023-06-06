import { PropsWithChildren, ReactElement, useMemo, useState } from 'react';
import _merge from 'lodash/merge';
import { ThemeProvider as BaseUIThemProvider } from 'baseui';

import usePrevious from '../hooks/usePrevious';
import useMemoizedStyletron from '../style/useMemoizedStyletron';
import SPACEWEB_THEME_VS_BASEUI_THEME from '../themes';
import { ThemeContext } from '../types';
import { ThemeProviderT } from './types';
import { useIsomorphicLayoutEffect } from '../hooks/useIsomorphicLayoutEffect';
import type { Density } from '@sprinklr/spaceweb-themes/types';
import { themeContext, useTheme } from './context';
import { Theme } from 'baseui/theme';

const THEME_NAMES = ['hyperspace-light', 'space-light', 'space-dark', 'hyperspace-dark'];

const addDensityToTheme = (theme: ThemeContext, density: Density | undefined): ThemeContext => ({
  ...theme,
  theme: { ...theme.theme, density: density || theme.theme?.density },
});

type Props = PropsWithChildren<{
  theme?: ThemeProviderT;
  containerElement?: HTMLElement | null;
  density?: Density;
}>;
export const ThemeProvider = (props: Props): ReactElement => {
  const { theme, children, containerElement: elementToApplyClass, density } = props;
  const [containerElementRef, setContainerElementRef] = useState<HTMLDivElement | null>(null);
  const outerTheme = useTheme();
  const [, baseUITheme] = useMemoizedStyletron();

  if (typeof outerTheme === 'undefined' && typeof theme === 'undefined') {
    throw new Error('No Theme present in context & props');
  }
  const { Provider } = themeContext;
  const value = useMemo<ThemeContext>(() => {
    if (theme) {
      let newTheme: ThemeContext;
      if (typeof theme === 'function') {
        newTheme = theme(outerTheme);
      } else {
        const newThemeName = theme.theme?.name,
          outerThemeName = outerTheme?.theme?.name,
          // theme should be merged if both the outerTheme & themeToOverride has same name
          shouldMergeThemes = !newThemeName || !outerThemeName || newThemeName === outerThemeName;
        if (shouldMergeThemes) {
          newTheme = _merge({}, outerTheme, theme);
        } else {
          newTheme = {
            direction: outerTheme?.direction,
            ...(theme as ThemeContext),
          };
        }
      }

      if (typeof newTheme !== 'object') {
        throw new Error('theme has to be an object of shape {theme : {}, classes : {}}');
      }
      return addDensityToTheme(newTheme, density);
    }
    return addDensityToTheme(outerTheme, density);
  }, [theme, outerTheme, density]);

  const themeName = value.theme.name,
    prevThemName = usePrevious(themeName),
    containerElement = elementToApplyClass ?? containerElementRef,
    prevContainerElement = usePrevious(containerElement);
  useIsomorphicLayoutEffect(() => {
    prevThemName && prevContainerElement?.classList.remove(prevThemName);
    THEME_NAMES.forEach(name => containerElement?.classList.remove(name));
    containerElement?.classList.add(themeName);
  }, [themeName, prevThemName, containerElement, prevContainerElement]);

  const baseuiThemeWithDirection: Theme = useMemo(
    () => ({
      ...SPACEWEB_THEME_VS_BASEUI_THEME[themeName],
      direction: value.direction || 'ltr',
    }),
    [value.direction, themeName]
  );
  /**
   * Box component/styled cannot be used here as styletron might not be initialized when ThemeProvider renders for the first time.
   */
  return (
    <div data-testid="theme-provider-container" style={{ display: 'contents' }} ref={setContainerElementRef}>
      <BaseUIThemProvider theme={baseuiThemeWithDirection ?? baseUITheme}>
        <Provider value={value}>{children}</Provider>
      </BaseUIThemProvider>
    </div>
  );
};
