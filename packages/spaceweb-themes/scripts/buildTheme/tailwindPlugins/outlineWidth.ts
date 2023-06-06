import plugin from 'tailwindcss/plugin';

/**
 * theme.outlineWidth: { '1': '1px' }
 *
 * converts to
 *
 * .outline-width-1: { outlineWidth: '1px' }
 */
export default plugin(({ addUtilities, e, theme, variants }): void => {
  const outlineWidth: Record<string, string> = theme('outlineWidth') || {};
  const utilities = Object.entries(outlineWidth).reduce(
    (rules, [key, val]) => ({
      ...rules,
      [`.${e(`outline-width-${key}`)}`]: {
        outlineWidth: val,
      },
    }),
    {}
  );

  addUtilities(utilities, variants('outlineWidth'));
});
