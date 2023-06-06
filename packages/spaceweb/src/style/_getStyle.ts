/**
 * @author Ivan Torres
 */

import { Styles, StyleUtils, StyleObject } from '../types';
import _parseStyle from './_parseStyle';

const EMPTY_OBJECT = {};
const _getStyle = (utils: StyleUtils, ...args: Styles[]): StyleObject => {
  const [styleObject] = _parseStyle(utils, EMPTY_OBJECT, args);
  return styleObject;
};

export default _getStyle;
