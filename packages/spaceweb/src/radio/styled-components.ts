import { StyleFn, StyleObject, StyleUtils } from '../types';
import { SharedProps } from './types';
import { intentColor } from '../helpers/intentHelper';
import { getOutlineStyles, OutlineProps } from '../helpers/commonStyles';
import { hex2rgb } from '../helpers';

const getBorderColor = (utils: StyleUtils, props: SharedProps): string => {
  const { theme } = utils;
  const { $disabled, $intent, $checked, $isHovered, $isFocusVisible } = props;
  if ($disabled && $intent !== 'default') return hex2rgb(intentColor(utils, props), '0.5') as string;

  if (!$checked) {
    if ($disabled) return theme.spr.icon03;
    if ($intent !== 'default') return intentColor(utils, props);
    if ($isHovered || $isFocusVisible) return theme.spr.border06;
    return theme.spr.border04;
  }

  if ($disabled) {
    return hex2rgb(theme.spr.focus01, '0.5') as string;
  }

  return intentColor(utils, props);
};

const getInnerColor = (utils: StyleUtils, props: SharedProps): string => {
  const { $disabled, $checked } = props;
  if (!$checked) return 'transparent';

  if ($disabled) {
    if ($checked) return hex2rgb(intentColor(utils, props), '0.5') as string;
    return 'transparent';
  }

  return intentColor(utils, props);
};

export const getRadioMarkInnerStyles: StyleFn<SharedProps> = (utils, props) => {
  const { px2rem } = utils;
  const { $size } = props;
  const styles = {
    backgroundColor: getInnerColor(utils, props),
    height: px2rem(8),
    width: px2rem(8),
  };

  switch ($size) {
    case 'sm':
      styles.height = styles.width = px2rem(6);
      break;
    case 'lg':
      styles.height = styles.width = px2rem(10);
      break;
    default:
      break;
  }

  return styles;
};

export const getRadioMarkOuterStyles: StyleFn<SharedProps & OutlineProps> = (utils, props) => {
  const { px2rem, theme } = utils;
  const { $checked, $size, $isFocusVisible, $outlineStyle, $outlineColor, $outlineOffset, $outlineWidth } = props;
  const styles: StyleObject = {
    boxSizing: 'border-box',
    borderWidth: $checked ? px2rem(2) : px2rem(1),
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderColor: getBorderColor(utils, props),
    height: px2rem(16),
    width: px2rem(16),
    ...($isFocusVisible
      ? {
          boxShadow: 'none',
          transitionDuration: '0ms',
          ...getOutlineStyles(utils, { $outlineStyle, $outlineColor, $outlineOffset, $outlineWidth }),
        }
      : {}),
  };

  switch ($size) {
    case 'sm':
      styles.height = styles.width = px2rem(14);
      break;
    case 'lg':
      styles.height = styles.width = px2rem(18);
      break;
    default:
      break;
  }

  return styles;
};

export const getRadioLabelStyles: StyleFn<SharedProps> = ({ px2rem }, { $labelPosition, $size }) => {
  let paddingDirection;
  switch ($labelPosition) {
    case 'top':
      paddingDirection = 'Bottom';
      break;
    case 'bottom':
      paddingDirection = 'Top';
      break;
    case 'left':
      paddingDirection = 'Right';
      break;
    default:
    case 'right':
      paddingDirection = 'Left';
      break;
  }

  const styles = {
    fontSize: px2rem(13),
    [`padding${paddingDirection}`]: px2rem(6),
    wordBreak: 'break-word',
  };

  switch ($size) {
    case 'sm':
      styles.fontSize = px2rem(12);
      styles[`padding${paddingDirection}`] = px2rem(6);
      break;
    case 'lg':
      styles.fontSize = px2rem(14);
      styles[`padding${paddingDirection}`] = px2rem(8);
      break;
    default:
      break;
  }

  return styles as StyleObject;
};

export const getRootStyles: StyleFn<SharedProps> = ({ px2rem }, { $align, $hasDescription, $size }) => {
  const isHorizontal = $align === 'horizontal';
  const directionMargin = 'Right';

  const styles = {
    [`margin${directionMargin}`]: isHorizontal ? px2rem(30) : undefined,
    marginTop: '0px',
    marginBottom: isHorizontal || $hasDescription ? undefined : px2rem(6),
  };

  switch ($size) {
    case 'md':
      styles[`margin${directionMargin}`] = isHorizontal ? px2rem(38) : undefined;
      styles.marginBottom = isHorizontal || $hasDescription ? undefined : px2rem(8);
      break;
    case 'lg':
      styles[`margin${directionMargin}`] = isHorizontal ? px2rem(46) : undefined;
      styles.marginBottom = isHorizontal || $hasDescription ? undefined : px2rem(10);
      break;
    default:
      break;
  }

  return styles;
};
