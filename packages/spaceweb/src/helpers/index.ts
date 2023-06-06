/**
 * Omits properties that starts with `$` (Styletron)
 * @param $props properties
 */
export const omit$props = ($props: Record<string, unknown>): Record<string, unknown> =>
  Object.entries($props).reduce((props, [key, val]) => {
    if (key[0] !== '$') props[key] = val;
    return props;
  }, {});

/**
 * Prefixes property names with `$` (Styletron)
 * @param props properties
 */
export const add$props = (props: Record<string, unknown>): Record<string, unknown> =>
  Object.entries(props).reduce(($props, [key, val]) => ({ ...$props, [key[0] === '$' ? key : `$${key}`]: val }), {});

/**
 * Recursively extract css value from css variable value
 * { ui01: 'var(--spr-ui-01, #FFF)' } -> { ui01: '#FFF' }
 *
 * Jest does not recognize css variables, this utility can help convert theme object.
 *
 * @param value
 */
export const covertCSSVariablesToValue = <T extends string | object>(value: T): T => {
  if (typeof value === 'string' && value.indexOf('var(') >= 0) {
    const startIndex = value.indexOf(',');
    return value.slice(startIndex + 1, value.length - 1).trim() as T;
  }
  if (value && typeof value === 'object') {
    let newValue = {} as T;
    Object.keys(value).forEach(key => {
      newValue[key] = covertCSSVariablesToValue(value[key]);
    });
    return newValue;
  }
  return value;
};

export const themeTokenToHex = (token: string): string | null => {
  const hex = covertCSSVariablesToValue(token);
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  const parsed = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  return parsed;
};

/**
 * Converts hexadecimal color to RGB or RGBA (if alpha is provided)
 * @param hex hexadecimal color
 * @param alpha opacity
 */
export const hex2rgb = (_hex: string, alpha?: string): string | null => {
  const hex = covertCSSVariablesToValue(_hex);
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;

  const parsed = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(parsed);

  if (result) {
    return alpha
      ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${alpha})`
      : `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`;
  }

  return null;
};
