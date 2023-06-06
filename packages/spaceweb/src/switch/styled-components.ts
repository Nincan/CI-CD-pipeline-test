import { hex2rgb } from '../helpers';
import { StyleFn, StyleObject, StyleUtils } from '../types';
import { SharedProps } from './types';
import { borderRadius, margin } from '../helpers/longHandHelpers';
import { intentColor } from '../helpers/intentHelper';
import { getOutlineStyles } from '../helpers/commonStyles';

const getTrackBackgroundColor = (utils: StyleUtils, props: SharedProps) => {
  const { theme } = utils;
  const { $disabled, $checked } = props;

  if ($disabled) {
    if ($checked) {
      return hex2rgb(intentColor(utils, props), '0.5');
    }
    return theme.spr.ui05;
  }

  if ($checked) {
    return intentColor(utils, props);
  }

  return theme.spr.icon03;
};

export const getToggleTrackOverrides: StyleFn<SharedProps> = (utils, props) => {
  const { px2rem, getStyle } = utils;
  const { $size, $isFocusVisible, $isHovered, $checked, $disabled } = props;

  const styles: StyleObject = {
    height: px2rem(16),
    width: px2rem(28),
    backgroundColor: getTrackBackgroundColor(utils, props),
    ...borderRadius(px2rem(27)),
    boxShadow: 'none',
  };

  switch ($size) {
    case 'lg':
      styles.height = px2rem(20);
      styles.width = px2rem(36);
      break;

    case 'sm':
      styles.height = px2rem(14);
      styles.width = px2rem(24);
      break;

    default:
      break;
  }

  return getStyle([
    'box-border border-1 m-0 border-transparent border-solid flex-none',
    ($isHovered || $isFocusVisible) && !$checked && !$disabled ? 'spr-border-06' : '',
    $isFocusVisible ? 'outline-01' : '',
    styles,
  ]);
};

export const getToggleOverrides: StyleFn<SharedProps> = (utils, props) => {
  const { px2rem, theme, getStyle } = utils;
  const { $size, $checked, $disabled, $isFocusVisible } = props;

  const styles: StyleObject = {
    backgroundColor: $disabled ? theme.spr.ui03 : theme.spr.ui01,
    height: px2rem(12),
    width: px2rem(12),
    ...margin(px2rem(1)),
    ...borderRadius('50%'),
    transform: $checked ? 'translateX(100%)' : '',
    transition: 'transform 200ms',
    boxShadow: 'none',
  };

  switch ($size) {
    case 'lg':
      styles.height = styles.width = px2rem(16);
      break;

    case 'sm':
      styles.height = styles.width = px2rem(10);
      break;

    default:
      break;
  }

  return getStyle(['flex items-center box-border', styles]);
};

export const getLabelOverrides: StyleFn<SharedProps> = ({ px2rem, theme }, { $disabled, $size }) => {
  const styles = {
    fontSize: px2rem(13),
    color: $disabled ? theme.spr.text02 : theme.spr.text01,
    paddingLeft: px2rem(8),
    wordBreak: 'break-word',
  };

  if ($size === 'lg') {
    styles.fontSize = px2rem(14);
    styles.paddingLeft = px2rem(10);
  }

  if ($size === 'sm') {
    styles.fontSize = px2rem(12);
  }

  return styles as StyleObject;
};
