/**
 * @author Ivan Torres
 */

// TODO: The commented plugins are disabled since the
// output CSS is not supported by Styletron.
import container from 'tailwindcss/lib/plugins/container';
import lineClamp from '@tailwindcss/line-clamp';
// import space from 'tailwindcss/lib/plugins/space';
// import divideWidth from 'tailwindcss/lib/plugins/divideWidth';
// import divideColor from 'tailwindcss/lib/plugins/divideColor';
import accessibility from 'tailwindcss/lib/plugins/accessibility';
import appearance from 'tailwindcss/lib/plugins/appearance';
import backgroundAttachment from 'tailwindcss/lib/plugins/backgroundAttachment';
import backgroundColor from 'tailwindcss/lib/plugins/backgroundColor';
import backgroundPosition from 'tailwindcss/lib/plugins/backgroundPosition';
import backgroundRepeat from 'tailwindcss/lib/plugins/backgroundRepeat';
import backgroundSize from 'tailwindcss/lib/plugins/backgroundSize';
import borderCollapse from 'tailwindcss/lib/plugins/borderCollapse';
import borderColor from 'tailwindcss/lib/plugins/borderColor';
import borderRadius from 'tailwindcss/lib/plugins/borderRadius';
import borderStyle from 'tailwindcss/lib/plugins/borderStyle';
import borderWidth from 'tailwindcss/lib/plugins/borderWidth';
import boxSizing from 'tailwindcss/lib/plugins/boxSizing';
import cursor from 'tailwindcss/lib/plugins/cursor';
import display from 'tailwindcss/lib/plugins/display';
import flexDirection from 'tailwindcss/lib/plugins/flexDirection';
import flexWrap from 'tailwindcss/lib/plugins/flexWrap';
import alignItems from 'tailwindcss/lib/plugins/alignItems';
import alignSelf from 'tailwindcss/lib/plugins/alignSelf';
import justifyContent from 'tailwindcss/lib/plugins/justifyContent';
import alignContent from 'tailwindcss/lib/plugins/alignContent';
import flexGrow from 'tailwindcss/lib/plugins/flexGrow';
import flexShrink from 'tailwindcss/lib/plugins/flexShrink';
import order from 'tailwindcss/lib/plugins/order';
import float from 'tailwindcss/lib/plugins/float';
import clear from 'tailwindcss/lib/plugins/clear';
import fontFamily from 'tailwindcss/lib/plugins/fontFamily';
import fontWeight from 'tailwindcss/lib/plugins/fontWeight';
import height from 'tailwindcss/lib/plugins/height';
import lineHeight from 'tailwindcss/lib/plugins/lineHeight';
import listStylePosition from 'tailwindcss/lib/plugins/listStylePosition';
import listStyleType from 'tailwindcss/lib/plugins/listStyleType';
import margin from 'tailwindcss/lib/plugins/margin';
import maxHeight from 'tailwindcss/lib/plugins/maxHeight';
import maxWidth from 'tailwindcss/lib/plugins/maxWidth';
import minHeight from 'tailwindcss/lib/plugins/minHeight';
import minWidth from 'tailwindcss/lib/plugins/minWidth';
import objectFit from 'tailwindcss/lib/plugins/objectFit';
import objectPosition from 'tailwindcss/lib/plugins/objectPosition';
import opacity from 'tailwindcss/lib/plugins/opacity';
import overflow from 'tailwindcss/lib/plugins/overflow';
import padding from 'tailwindcss/lib/plugins/padding';
import placeholderColor from 'tailwindcss/lib/plugins/placeholderColor';
import pointerEvents from 'tailwindcss/lib/plugins/pointerEvents';
import position from 'tailwindcss/lib/plugins/position';
import inset from 'tailwindcss/lib/plugins/inset';
import resize from 'tailwindcss/lib/plugins/resize';
import boxShadow from 'tailwindcss/lib/plugins/boxShadow';
import fill from 'tailwindcss/lib/plugins/fill';
import stroke from 'tailwindcss/lib/plugins/stroke';
import strokeWidth from 'tailwindcss/lib/plugins/strokeWidth';
import tableLayout from 'tailwindcss/lib/plugins/tableLayout';
import textAlign from 'tailwindcss/lib/plugins/textAlign';
import textColor from 'tailwindcss/lib/plugins/textColor';
import fontSize from 'tailwindcss/lib/plugins/fontSize';
import fontStyle from 'tailwindcss/lib/plugins/fontStyle';
import textTransform from 'tailwindcss/lib/plugins/textTransform';
import textDecoration from 'tailwindcss/lib/plugins/textDecoration';
import fontSmoothing from 'tailwindcss/lib/plugins/fontSmoothing';
import letterSpacing from 'tailwindcss/lib/plugins/letterSpacing';
import userSelect from 'tailwindcss/lib/plugins/userSelect';
import verticalAlign from 'tailwindcss/lib/plugins/verticalAlign';
import visibility from 'tailwindcss/lib/plugins/visibility';
import whitespace from 'tailwindcss/lib/plugins/whitespace';
import wordBreak from 'tailwindcss/lib/plugins/wordBreak';
import width from 'tailwindcss/lib/plugins/width';
import zIndex from 'tailwindcss/lib/plugins/zIndex';
import gap from 'tailwindcss/lib/plugins/gap';
import gridAutoFlow from 'tailwindcss/lib/plugins/gridAutoFlow';
import gridTemplateColumns from 'tailwindcss/lib/plugins/gridTemplateColumns';
import gridColumn from 'tailwindcss/lib/plugins/gridColumn';
import gridColumnStart from 'tailwindcss/lib/plugins/gridColumnStart';
import gridColumnEnd from 'tailwindcss/lib/plugins/gridColumnEnd';
import gridTemplateRows from 'tailwindcss/lib/plugins/gridTemplateRows';
import gridRow from 'tailwindcss/lib/plugins/gridRow';
import gridRowStart from 'tailwindcss/lib/plugins/gridRowStart';
import gridRowEnd from 'tailwindcss/lib/plugins/gridRowEnd';
import transform from 'tailwindcss/lib/plugins/transform';
import transformOrigin from 'tailwindcss/lib/plugins/transformOrigin';
import scale from 'tailwindcss/lib/plugins/scale';
import rotate from 'tailwindcss/lib/plugins/rotate';
import translate from 'tailwindcss/lib/plugins/translate';
import skew from 'tailwindcss/lib/plugins/skew';
import transitionProperty from 'tailwindcss/lib/plugins/transitionProperty';
import transitionTimingFunction from 'tailwindcss/lib/plugins/transitionTimingFunction';
import transitionDuration from 'tailwindcss/lib/plugins/transitionDuration';
import transitionDelay from 'tailwindcss/lib/plugins/transitionDelay';
// import divideOpacity from 'tailwindcss/lib/plugins/divideOpacity';
import backgroundOpacity from 'tailwindcss/lib/plugins/backgroundOpacity';
import borderOpacity from 'tailwindcss/lib/plugins/borderOpacity';
import textOpacity from 'tailwindcss/lib/plugins/textOpacity';
import placeholderOpacity from 'tailwindcss/lib/plugins/placeholderOpacity';

import flex from './flex';

import { TailwindPlugin } from '../types';
import themeTokensUtility from './themeTokensUtility';
import typography from './typography';
import outline from './outline';
import outlineOffset from './outlineOffset';
import outlineWidth from './outlineWidth';
import fontVariantNumeric from './fontVariantNumeric';
import outlineStyle from './outlineStyle';

const plugins = [
  backgroundColor(),
  backgroundPosition(),
  backgroundSize(),
  borderRadius(),
  borderWidth(),
  container(),
  cursor(),
  fill(),
  flex(),
  flexGrow(),
  flexShrink(),
  fontFamily(),
  fontWeight(),
  height(),
  inset(),
  letterSpacing(),
  lineHeight(),
  listStyleType(),
  margin(),
  maxHeight(),
  maxWidth(),
  minHeight(),
  minWidth(),
  objectPosition(),
  opacity(),
  order(),
  padding(),
  stroke(),
  strokeWidth(),
  width(),
  zIndex(),
  gap(),
  gridTemplateColumns(),
  gridColumn(),
  gridColumnStart(),
  gridColumnEnd(),
  gridTemplateRows(),
  gridRow(),
  gridRowStart(),
  gridRowEnd(),
  transformOrigin(),
  scale(),
  rotate(),
  translate(),
  skew(),
  transitionProperty(),
  transitionTimingFunction(),
  transitionDuration(),
  borderColor(),
  borderOpacity(),
  placeholderColor(),
  placeholderOpacity(),
  textColor(),
  transitionDelay(),
  fontSize(),
  accessibility(),
  alignContent(),
  alignItems(),
  alignSelf(),
  appearance(),
  borderStyle(),
  boxSizing(),
  backgroundAttachment(),
  backgroundRepeat(),
  borderCollapse(),
  borderStyle(),
  boxSizing(),
  clear(),
  display(),
  flexDirection(),
  flexWrap(),
  float(),
  fontSmoothing(),
  fontStyle(),
  gridAutoFlow(),
  justifyContent(),
  listStylePosition(),
  objectFit(),
  overflow(),
  pointerEvents(),
  position(),
  resize(),
  tableLayout(),
  textAlign(),
  textDecoration(),
  textTransform(),
  transform(),
  userSelect(),
  verticalAlign(),
  visibility(),
  whitespace(),
  wordBreak(),
  transitionDelay(),
];

export const corePlugins = {
  container,
  // space,
  // divideWidth,
  // divideColor,
  accessibility,
  appearance,
  backgroundAttachment,
  backgroundColor,
  backgroundPosition,
  backgroundRepeat,
  backgroundSize,
  borderCollapse,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  boxSizing,
  cursor,
  display,
  flexDirection,
  flexWrap,
  alignItems,
  alignSelf,
  justifyContent,
  alignContent,
  flex,
  flexGrow,
  flexShrink,
  order,
  float,
  clear,
  fontFamily,
  fontWeight,
  height,
  lineHeight,
  listStylePosition,
  listStyleType,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  objectFit,
  objectPosition,
  opacity,
  overflow,
  padding,
  placeholderColor,
  pointerEvents,
  position,
  inset,
  resize,
  boxShadow,
  fill,
  stroke,
  strokeWidth,
  tableLayout,
  textAlign,
  textColor,
  fontSize,
  fontStyle,
  textTransform,
  textDecoration,
  fontSmoothing,
  letterSpacing,
  userSelect,
  verticalAlign,
  visibility,
  whitespace,
  wordBreak,
  width,
  zIndex,
  gap,
  gridAutoFlow,
  gridTemplateColumns,
  gridColumn,
  gridColumnStart,
  gridColumnEnd,
  gridTemplateRows,
  gridRow,
  gridRowStart,
  gridRowEnd,
  transform,
  transformOrigin,
  scale,
  rotate,
  translate,
  skew,
  transitionProperty,
  transitionTimingFunction,
  transitionDuration,
  transitionDelay,
  // divideOpacity,
  backgroundOpacity,
  borderOpacity,
  textOpacity,
  placeholderOpacity,
  lineClamp: () => lineClamp.handler,
  __tokens: () => themeTokensUtility,
  typography: () => typography,
  outline: () => outline,
  outlineOffset: () => outlineOffset,
  outlineWidth: () => outlineWidth,
  fontVariantNumeric: () => fontVariantNumeric,
  outlineStyle: () => outlineStyle,
};

/**
 * get an array of plugins based on themeConfig
 */
export const getRequiredPluginsFromTheme = (theme): TailwindPlugin[] => {
  const themePlugins: TailwindPlugin[] = [];
  Object.keys(theme).forEach(key => {
    const found: (() => TailwindPlugin) | undefined = corePlugins[key];
    if (found) themePlugins.push(found());
  });
  return themePlugins;
};

export const getCorePlugins = (): TailwindPlugin[] => plugins;
