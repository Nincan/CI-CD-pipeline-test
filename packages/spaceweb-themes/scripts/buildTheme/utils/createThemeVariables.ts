import _ from 'lodash';
import path from 'path';
import { getAbsPath, load } from './files';
import { getResolvedThemeObject } from './getResolvedThemeObject';
import { ThemeConfig, ThemeFileInfo } from '../types';
import { convertTokensToTheme } from './convertTokensToTheme';

const THEME_CATEGORIES_FOR_CSS_VARIABLES = ['spr', 'app', 'cht', 'nav'];

export const getThemeObjectForThemeVariables = async ({ input }: ThemeFileInfo) => {
  const { theme: lightTheme, ...restLightThemeConfig }: ThemeConfig = load(getAbsPath(path.join(input, 'light')));
  const { theme: darkTheme, ...restDarkThemeConfig }: ThemeConfig = load(getAbsPath(path.join(input, 'dark')));
  const lightThemeObject = await getResolvedThemeObject({
    theme: convertTokensToTheme(lightTheme),
    ...restLightThemeConfig,
  });
  const darkThemeObject = await getResolvedThemeObject({
    theme: convertTokensToTheme(darkTheme),
    ...restDarkThemeConfig,
  });
  return { lightThemeObject, darkThemeObject };
};
/**
 * Return css text for given object of css variables and their values.
 */
export const createThemeVariables = theme => {
  const scopedThemeMap = _.pick(theme, THEME_CATEGORIES_FOR_CSS_VARIABLES);
  return _.reduce(
    scopedThemeMap,
    (cssStyleString, scopedThemeTokens, themeScope) =>
      cssStyleString +
      _.reduce(
        scopedThemeTokens,
        (acc, tokenValue, themeToken) => {
          /**
           * themeToken -> iconHover01 will be converted to ['icon', 'Hover', '01']
           * https://regexr.com/5j9nd
           */
          const brokenTokens = themeToken.match(/[A-Za-z][a-z]*|\w[0-9]*/g) || [];
          // convert sprIconHover01 to spr-icon-hover-01
          const dashifiedToken = brokenTokens.map(str => str.toLowerCase()).join('-');
          return `${acc}--${themeScope}-${dashifiedToken}:${tokenValue};`;
        },
        ''
      ),
    ''
  );
};
