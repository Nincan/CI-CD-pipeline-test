/**
 * @author Ivan Torres
 */

import cx from '../classNames';
import { Styles, StyleUtils, StyleObject } from '../types';
import _parseStyle from './_parseStyle';

const _css = (utils: StyleUtils, styletronCSS: (arg: StyleObject) => string, ...args: Styles[]): string => {
  // NOTE: prepend previously generated classes by styletron, this can happen
  // when re-styling a component built with `styled` or `className` added
  // on top of it:
  const [styleObject, invalidArgs] = _parseStyle(utils, {}, args);
  return cx(invalidArgs, styletronCSS(styleObject));
};

export default _css;
