/**
 * @author Ivan Torres
 */

import { Styles, StyleUtils, StyleObject } from '../types';
import _parseStyle from './_parseStyle';

/* eslint @typescript-eslint/no-explicit-any: 0 */

const _getStyleWithProps = (utils: StyleUtils, props: any, ...args: Styles[]): StyleObject => {
  const [styleObject] = _parseStyle(utils, props, args);
  return styleObject;
};

export default _getStyleWithProps;
