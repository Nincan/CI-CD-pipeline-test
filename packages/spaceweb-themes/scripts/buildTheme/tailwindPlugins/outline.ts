import plugin from 'tailwindcss/plugin';

/**
 * theme.outline: { '01': { color: '#4B8AFC', width: '2px', offset: '2px', style: 'solid' } }
 * converts to
 *
 * .outline-01: { outlineStyle: 'solid', outlineWidth: '2px', outlineColor: '#4B8AFC', outlineOffset: '2px' }
 */
export default plugin(({ addUtilities, e, theme, variants }): void => {
  const outline: Record<string, { [key: string]: string | number }> = theme('outline') || {};
  const utilities = Object.entries(outline).reduce(
    (rules, [key, value]) => ({
      ...rules,
      [`.${e(`outline-${key}`)}`]: {
        outlineStyle: value.style,
        outlineWidth: value.width,
        outlineColor: value.color,
        outlineOffset: value.offset,
      },
    }),
    {}
  );

  addUtilities(utilities, variants('outline'));
});
