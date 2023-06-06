import { createContext, useContext, useMemo, useState } from 'react';
import sprLight from '@sprinklr/spaceweb-themes/space/light';
import sprDark from '@sprinklr/spaceweb-themes/space/dark';
import hyperspaceLight from '@sprinklr/spaceweb-themes/hyperspace/light';
import hyperspaceDark from '@sprinklr/spaceweb-themes/hyperspace/dark';

import SpacewebProvider from 'spaceweb/spacewebProvider';

export type DocsThemeContextShape = {
  direction: 'ltr' | 'rtl' | undefined;
  isDarkMode: boolean | undefined;
  themeName: 'space' | 'hyperspace' | undefined;
  density: 'COMPACT' | 'COMFORTABLE' | 'SPACIOUS' | 'DEFAULT' | undefined;
  setThemeName: (themeName: DocsThemeContextShape['themeName']) => void;
  toggleDarkMode: () => void;
  toggleDirection: () => void;
  setDensityName: (densityName: DocsThemeContextShape['density']) => void;
};

const DocsThemeContext = createContext<DocsThemeContextShape>({
  direction: undefined,
  isDarkMode: undefined,
  themeName: 'hyperspace',
  density: undefined,
  setThemeName: () => {},
  toggleDarkMode: () => {},
  toggleDirection: () => {},
  setDensityName: () => {},
});

export const useThemeContext = () => useContext(DocsThemeContext);

const THEME_MAP = {
  space: sprLight,
  space_dark: sprDark,
  hyperspace: hyperspaceLight,
  hyperspace_dark: hyperspaceDark,
};

const DocsThemeProperties = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState<DocsThemeContextShape['isDarkMode']>(false);
  const [direction, setDirection] = useState<DocsThemeContextShape['direction']>('ltr');
  const [themeName, _setThemeName] = useState<DocsThemeContextShape['themeName']>('hyperspace');
  const [density, _setDensity] = useState<DocsThemeContextShape['density']>('DEFAULT');
  const toggleDarkMode = (): void => setDarkMode(!isDarkMode);

  const setThemeName = (themeName: DocsThemeContextShape['themeName']): void => {
    _setThemeName(themeName);
  };

  const toggleDirection = (): void => {
    if (direction === 'rtl') {
      document.body && (document.body.dir = 'ltr');
      setDirection('ltr');
    } else {
      document.body && (document.body.dir = 'rtl');
      setDirection('rtl');
    }
  };

  const setDensityName = (densityName: DocsThemeContextShape['density']): void => {
    _setDensity(densityName);
  };
  const themeContextValue = useMemo(
    () => ({
      isDarkMode,
      themeName,
      direction,
      density,
      setThemeName,
      toggleDarkMode,
      toggleDirection,
      setDensityName,
    }),
    [isDarkMode, direction, themeName, density]
  );

  const theme = THEME_MAP[`${themeName}${isDarkMode ? '_dark' : ''}`] || THEME_MAP.space;

  return (
    <>
      <DocsThemeContext.Provider value={themeContextValue}>
        <SpacewebProvider theme={theme} direction={direction} debug density={density}>
          {children}
        </SpacewebProvider>
      </DocsThemeContext.Provider>
    </>
  );
};

export default DocsThemeProperties;
