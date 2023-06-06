import plugin from 'tailwindcss/plugin';

/**
 * theme.__tokens: {
      spr: { 'ui-01': { value: '#fff', cssProperty: 'backgroundColor' } },
    },
 *
 * converts to
 *
 * .spr-ui-01: { backgroundColor: '#fff' }
 */
type Token = Record<string, Record<string, { value: string | number; cssProperty: string }>>;
export default plugin(({ addUtilities, e, theme, variants }): void => {
  const tokens = (theme('__tokens') as Token) || {};
  const utilities = Object.entries(tokens).reduce((namespaceRules, [namespace, tokenObject]) => {
    const namespaceTokens = Object.entries(tokenObject).reduce((rules, [tokenName, { cssProperty, value }]) => {
      const className = `${namespace}-${tokenName}`;
      const valueWithCSSVariable = `var(--${className}, ${value})`;
      return { ...rules, [`.${e(className)}`]: { [cssProperty]: valueWithCSSVariable } };
    }, {});
    return {
      ...namespaceRules,
      ...namespaceTokens,
    };
  }, {});

  addUtilities(utilities, variants('__tokens'));
});
