import _ from 'lodash';

/**
 * Removes dot from utility class names.
 * @param utilities utility classes.
 */
export const removeDotFromKeys = (utilities: Record<string, any>): Record<string, any> =>
  Object.entries(utilities).reduce((utils, [key, val]) => ({ ...utils, [key.replace(/^\./, '')]: val }), {});

export const unEscapeKeys = (utilities: Record<string, any>): Record<string, any> =>
  Object.entries(utilities).reduce((utils, [key, val]) => ({ ...utils, [key.replace(/\\/g, '')]: val }), {});

/**
 * Replaces cssFloat -> float
 * @param utilities utility classes.
 */
export const replaceCssFloat = (utilities: Record<string, any>): Record<string, any> =>
  Object.entries(utilities).reduce(
    (utils, [key, val]) => ({
      ...utils,
      [key === 'cssFloat' ? 'float' : key]: _.isObject(val) ? replaceCssFloat(val) : val,
    }),
    {}
  );

/**
 * Formats theme attributes to `camelCase`.
 * @param config theme config.
 * @param theme output theme.
 */
export const convertKeysToCamelCase = (
  theme: Record<string, any> | string[] | string | number
): Record<string, any> | string[] | string | number => {
  const isNumber = /^-?[0-9]+$/;
  if (Array.isArray(theme) || typeof theme === 'string' || typeof theme === 'number' || !theme) return theme;
  return Object.entries(theme).reduce<Record<string, any>>(
    (formattedTheme, [key, val]) => ({
      ...formattedTheme,
      [isNumber.test(key) ? key : _.camelCase(key)]: convertKeysToCamelCase(val),
    }),
    {}
  );
};

/**
 * Replaces the vlaues of shorthand classes with function call that expands it.
 * like replace {'m-0': {margin: 0}} with  {'m-0': "margin('0')"}
 * @param utilities utility classes.
 */
export const replaceShorthandWithFunctionCall = (utilities: Record<string, any>): Record<string, any> => {
  const shortHandMatcher = [
    { fnName: 'margin', regex: /^-?m-(\w+)/ },
    { fnName: 'padding', regex: /^-?p-(\w+)/ },
    { fnName: 'borderRadius', regex: /^(rounded-(\d+)|^(rounded-(sm|md|lg|none|full)))|^rounded$/ },
    { fnName: 'borderWidth', regex: /^border-(\d+)|^border$/ },
  ];
  return Object.entries(utilities).reduce((utils, [className, val]) => {
    for (let i = 0; i < shortHandMatcher.length; i += 1) {
      const { regex, fnName } = shortHandMatcher[i];
      const match = regex.exec(className);
      if (match) {
        return {
          ...utils,
          [className]: `${fnName}('${val[fnName]}')`,
        };
      }
    }

    return { ...utils, [className]: val };
  }, {});
};

/**
 * identifies the function call that we made to expand the short hand properties and removes
 * the quotes around it. e.g. { "m-0": "margin('0')' } => { 'm-0": margin('0') }
 * @param jssString stringified version of utilities.
 */
export const removeFunctionQuotes = (jssString: string): string => {
  const marginOrPadding = /"(margin|padding|borderRadius|borderWidth)\('([%-.\w+]+)'\)"/gm;
  return jssString.replace(marginOrPadding, (_, cssKey, cssValue) => `${cssKey}('${cssValue}')`);
};
