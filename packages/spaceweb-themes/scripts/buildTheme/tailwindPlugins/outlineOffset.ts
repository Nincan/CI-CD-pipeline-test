import plugin from 'tailwindcss/plugin';

/**
 * theme.outlineOffset: { '1': '1px' }
 *
 * converts to
 *
 * .outline-offset-1: { outlineOffset: '1px' }
 */
export default plugin(({ addUtilities, e, theme, variants }): void => {
  const outlineOffset: Record<string, string> = theme('outlineOffset') || {};
  const utilities = Object.entries(outlineOffset).reduce((rules, [key, val]) => {
    const prefix = key.startsWith('-') ? '-' : '';
    const modifier = key.startsWith('-') ? key.slice(1) : key;
    return {
      ...rules,
      [`.${e(`${prefix}outline-offset-${modifier}`)}`]: {
        outlineOffset: val,
      },
    };
  }, {});

  addUtilities(utilities, variants('outlineOffset'));
});
