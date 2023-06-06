import { ThemeConfig } from '../types';

/**
 * theme: {
 *   popover: {borderRadius: '8px'},
 *   __tokens: {spr: {'ui-01': { value: '#FFFFFF', cssProperty: 'backgroundColor' }}}
 * }
 *
 * ^^this will be converted to
 *
 * theme: {
 *   popover: {borderRadius: '8px'},
 *   spr: {'ui-01': '#FFFFFF'}
 * }
 *
 * if shouldUseCssVariables -> true
 * theme: {
 *   popover: {borderRadius: '8px'},
 *   spr: {'ui-01': 'var(--spr-ui-01, #FFFFFF)'}
 * }
 */
type Token = Record<string, Record<string, { value: string | number; cssProperty: string }>>;

export const convertTokensToTheme = (
  theme: ThemeConfig['theme'],
  shouldUseCssVariables = false
): ThemeConfig['theme'] => {
  const themeTokens = (theme.__tokens as Token) || {};
  let newTheme = { ...theme };
  Object.entries(themeTokens).forEach(([namespace, tokenObject]) => {
    Object.entries(tokenObject).forEach(([tokenName, { value }]) => {
      const className = `${namespace}-${tokenName}`;
      const valueWithCSSVariable = `var(--${className}, ${value})`;
      if (typeof newTheme[namespace] !== 'object') {
        newTheme[namespace] = {};
      }
      newTheme[namespace][tokenName] = shouldUseCssVariables ? valueWithCSSVariable : value;
    });
  });
  return newTheme;
};
