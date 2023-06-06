import { StyleFn, StyleObject, StyleUtils } from '../types';
import { SharedProps } from './types';
import { borderColor, borderWidth } from '../helpers/longHandHelpers';
import { getOutlineStyles } from '../helpers/commonStyles';
import { hex2rgb } from '../helpers';

const intentColor = ({ theme }, { $intent = 'default' }, defaultColor = theme.spr.focus01) => {
  switch ($intent) {
    case 'default':
    default: {
      return defaultColor;
    }
    case 'success':
      return theme.spr.supportSuccess;
    case 'warning':
      return theme.spr.supportWarning;
    case 'error':
      return theme.spr.supportError;
  }
};

const getBorderColor = (utils: StyleUtils, props: SharedProps): string => {
  const { theme } = utils;
  const { $disabled, $checked, $isIndeterminate, $isHovered, $isFocusVisible } = props;
  if ($checked || $isIndeterminate) {
    return 'transparent';
  }

  if ($disabled) {
    return hex2rgb(intentColor(utils, props, theme.spr.iconDisable), '0.5') as string;
  }

  if ($isHovered || $isFocusVisible) {
    return intentColor(utils, props, theme.spr.border06);
  }

  return intentColor(utils, props, theme.spr.border04);
};

const getBackgroundColor = (utils: StyleUtils, props: SharedProps): string => {
  const { $disabled, $checked, $isIndeterminate } = props;
  if ($disabled) {
    if ($checked || $isIndeterminate) {
      return hex2rgb(intentColor(utils, props), '0.5') as string;
    }

    return 'transparent';
  }

  if ($checked || $isIndeterminate) {
    return intentColor(utils, props);
  }

  return 'transparent';
};

export const getLabelOverrides: StyleFn<SharedProps> = ({ px2rem, theme }, { $disabled, $size }) => {
  const styles = {
    fontSize: theme.typography.bs2.fontSize,
    lineHeight: theme.typography.bs2.lineHeight,
    color: $disabled ? theme.spr.text02 : theme.spr.text01,
    paddingLeft: px2rem(8),
    wordBreak: 'break-word',
  };

  if ($size === 'lg') {
    styles.fontSize = theme.typography.bs1.fontSize;
    styles.lineHeight = theme.typography.bs1.lineHeight;
    styles.paddingLeft = px2rem(10);
  }

  if ($size === 'sm') {
    styles.fontSize = theme.typography.bs3.fontSize;
    styles.lineHeight = theme.typography.bs3.lineHeight;
  }

  return styles as StyleObject;
};

export const getCheckmarkOverrides: StyleFn<SharedProps> = (utils, props) => {
  const { px2rem } = utils;
  const { $size, $isFocusVisible, $outlineStyle, $outlineColor, $outlineOffset, $outlineWidth } = props;

  const styles: StyleObject = {
    boxSizing: 'border-box',
    backgroundColor: getBackgroundColor(utils, props),
    ...borderColor(getBorderColor(utils, props)),
    ...borderWidth(px2rem(1)),
    height: px2rem(14),
    width: px2rem(14),
    marginTop: px2rem(2),
    marginBottom: px2rem(2),
    marginLeft: '0',
    marginRight: '0',
    borderTopLeftRadius: px2rem(2),
    borderBottomLeftRadius: px2rem(2),
    borderBottomRightRadius: px2rem(2),
    borderTopRightRadius: px2rem(2),
    backgroundSize: `${px2rem(8)} ${px2rem(6)}`,
    alignSelf: 'flex-start',
    ...($isFocusVisible
      ? getOutlineStyles(utils, { $outlineStyle, $outlineColor, $outlineOffset, $outlineWidth })
      : {}),
  };

  switch ($size) {
    case 'lg':
      styles.height = styles.width = px2rem(16);
      styles.backgroundSize = `${px2rem(9)} ${px2rem(7)}`;
      break;

    case 'sm':
      styles.height = styles.width = px2rem(12);
      break;

    default:
      break;
  }

  return styles;
};

export const getRootOverrides = (): StyleObject => ({
  alignItems: 'center',
  userSelect: undefined,
});
