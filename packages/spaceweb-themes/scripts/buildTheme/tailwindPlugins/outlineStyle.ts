import plugin from 'tailwindcss/plugin';

/**
 * theme.outlineStyle: { solid: 'solid' }
 *
 * converts to
 *
 * .outline-solid: { outlineStyle: 'solid' }
 */
export default plugin(({ addUtilities, e, theme, variants }): void => {
  const outlineStyle: Record<string, string> = theme('outlineStyle') || {};
  const utilities = Object.entries(outlineStyle).reduce(
    (rules, [key, val]) => ({
      ...rules,
      [`.${e(`outline-${key}`)}`]: {
        outlineStyle: val,
      },
    }),
    {}
  );

  addUtilities(utilities, variants('outlineStyle'));
});
