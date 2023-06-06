import plugin from 'tailwindcss/plugin';

/**
 * theme.fontVariantNumeric: { 'tabular-nums': 'tabular-nums' }
 *
 * converts to
 *
 * .tabular-nums: { fontVariantNumeric: 'tabular-nums' }
 */
export default plugin(({ addUtilities, e, theme, variants }): void => {
  const fontVariantNumericStyle: Record<string, string> = theme('fontVariantNumeric') || {};
  const utilities = Object.entries(fontVariantNumericStyle).reduce(
    (rules, [key, val]) => ({
      ...rules,
      [`.${e(`${key}`)}`]: {
        fontVariantNumeric: val,
      },
    }),
    {}
  );

  addUtilities(utilities, variants('fontVariantNumeric'));
});
