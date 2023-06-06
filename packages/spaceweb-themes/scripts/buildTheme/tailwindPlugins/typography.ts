/**
 * @author Harsh Vyas
 * @author Ivan Torres
 */

import plugin from 'tailwindcss/plugin';

/**
 * theme.typography: {h1: { fontSize: '4.2rem', lineHeight: '4.8rem', fontWeight: 600 } }
 *
 * converts to
 *
 * .typography-h1: { fontSize: '4.2rem', lineHeight: '4.8rem', fontWeight: 600 }
 */
export default plugin(({ addUtilities, e, theme, variants }): void => {
  const typography = theme('typography') || {};
  const utilities = Object.entries(typography).reduce(
    (rules, [key, val]) => ({
      ...rules,
      [`.${e(`typography-${key}`)}`]: val,
    }),
    {}
  );

  addUtilities(utilities, variants('typography'));
});
