/**
 * @author Ivan Torres
 */

/* eslint @typescript-eslint/no-use-before-define: 0, @typescript-eslint/no-explicit-any: 0 */
import _flattenDeep from 'lodash/flattenDeep';
import _merge from 'lodash/merge';
import { Styles, StyleAtom, StyleUtils, StyleObject } from '../types';

export const PSEUDO_SELECTORS = {
  hover: ':hover',
  focus: ':focus',
  active: ':active',
  disabled: ':disabled',
  visited: ':visited',
  'first-child': ':first-child',
  'last-child': ':last-child',
  'odd-child': ':nth-child(odd)',
  'even-child': ':nth-child(2n)',
  'focus-within': ':focus-within',
  'focus-visible': ':focus-visible',
};

// @ts-ignore Array.prototype.flat - will always be defined
const flattenDeep: (arr: any[]) => any[] = Array.prototype.flat ? arr => arr.flat(Infinity) : _flattenDeep;

const _parseStyle = (utils: StyleUtils, props: any, ...args: Styles[]): [StyleObject, string[]] => {
  let invalidArgs: string[] = [],
    directionStyleObject: StyleObject | undefined;
  if (!args.length) return [{}, invalidArgs];
  const styleObject = flattenDeep(args).reduce<StyleObject>((mergedStyleObject, arg: StyleAtom) => {
    if (!arg) return mergedStyleObject;

    if (typeof arg === 'string') {
      arg.split(' ').forEach(className => {
        let isInvalidClassName = true;
        if (className.indexOf(':') >= 0) {
          const [prefix, prefixedClassName] = className.split(':');

          if (utils.theme.screens[prefix]) {
            const mediaQuery = `@media screen and (min-width: ${utils.theme.screens[prefix]})`;
            mergedStyleObject[mediaQuery] = Object.assign(
              mergedStyleObject[mediaQuery] || {},
              utils.classes[prefixedClassName]
            );
            isInvalidClassName = false;
          }

          if (PSEUDO_SELECTORS[prefix]) {
            const prefixKey = PSEUDO_SELECTORS[prefix];
            mergedStyleObject[prefixKey] = Object.assign(
              mergedStyleObject[prefixKey] || {},
              utils.classes[prefixedClassName]
            );
            isInvalidClassName = false;
          }
        }
        const utilityStyle = utils.classes[className];
        if (utilityStyle) {
          Object.assign(mergedStyleObject, utilityStyle);
        } else if (isInvalidClassName) invalidArgs.push(className);
      });
      return mergedStyleObject;
    }

    if (typeof arg === 'function') {
      const [_styleObject, _invalidArgs] = _parseStyle(utils, props, arg(utils, props));
      invalidArgs = invalidArgs.concat(_invalidArgs);
      return _merge(mergedStyleObject, _styleObject);
    }

    return _merge(mergedStyleObject, arg);
  }, {});

  /**
   * merging directionStyles at last to make sure priority of styles with ltr/rtl pseudo selector is more.
   * e.g. `rtl:ml-2 ml-3` -> ml-2 should be applied when direction is rtl
   */

  const styleObjectWithRtlStyles = directionStyleObject ? _merge(styleObject, directionStyleObject) : styleObject;
  return [styleObjectWithRtlStyles, invalidArgs];
};

export default _parseStyle;
