import { StyleUtils, ThemeContext, StyleObject } from '../types';

import _getStyle from './_getStyle';
import _css from './_css';
import _px2rem from './_px2rem';

type StyletronCSS = (arg: StyleObject) => string;

export default (_ctx: ThemeContext, styletronCSS: StyletronCSS): StyleUtils => {
  // console.log('theme', _ctx.theme);
  const ctx = { ..._ctx, isRTL: _ctx.direction === 'rtl' };
  const css = _css.bind(null, ctx, styletronCSS);
  const getStyle = _getStyle.bind(null, ctx);
  const px2rem = _px2rem.bind(null, ctx);

  return { ...ctx, css, getStyle, px2rem };
};
