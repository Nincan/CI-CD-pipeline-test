import * as React from 'react';
import { ThemeProvider } from 'baseui';
import { Theme as StyletronTheme } from 'baseui/theme';

import { Theme } from '@sprinklr/spaceweb-themes/types';
import useMemoizedStyletron from '../../style/useMemoizedStyletron';

import useStyle from '../../style/useStyle';
import { createTheme } from '../../themes';

/* To update baseui theme object
 * 2nd arg provides callback to map Theme to Baseweb Theme
 * */
const withThemeOverride = <P, FR>(
  Component: React.ComponentType<P>,
  mapSpaceThemeToBaseTheme: ThemeOverrideFunction
) => {
  const ThemeOverridenComponent = React.forwardRef<FR, P>(function ThemeOverride(props, ref) {
    const { theme } = useStyle();
    const [, styletronTheme] = useMemoizedStyletron();
    const updatedTheme = React.useMemo(
      () => createTheme(styletronTheme, mapSpaceThemeToBaseTheme(theme)),
      [styletronTheme, theme]
    );
    return (
      <ThemeProvider theme={updatedTheme}>
        <Component ref={ref} {...props} />
      </ThemeProvider>
    );
  });
  ThemeOverridenComponent.displayName = `withThemeOverride(${Component.displayName || Component.name})`;
  return ThemeOverridenComponent;
};

export default withThemeOverride;

// https://stackoverflow.com/a/49936686/12232334
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>;
};

type ThemeOverrideFunction = (theme: Theme) => DeepPartial<StyletronTheme>;
