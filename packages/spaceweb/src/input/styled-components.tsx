import { ADJOINED } from 'baseui/input';
import { getComponentSizeTheme, getDefaultSize } from '../helpers/themeHelpers';
import { StyleFn, Styles, StyleObject } from '../types';
import { SharedProps } from './types';
import { borderWidth, borderColor, borderStyle, borderRadius } from '../helpers/longHandHelpers';
import { intentColor } from '../helpers/intentHelper';

const inputBorderRadius: StyleFn = ({ theme }, { $variant = 'default', $adjoined, $size }) => {
  if ($variant === 'line') {
    return borderRadius(0);
  }
  const styles = borderRadius(
    getComponentSizeTheme(theme, 'input', $size, getDefaultSize(theme))?.borderRadius || theme.input.borderRadius
  );
  switch ($adjoined) {
    case ADJOINED.left:
      return { ...styles, borderTopLeftRadius: 0, borderBottomLeftRadius: 0 };
    case ADJOINED.right:
      return { ...styles, borderTopRightRadius: 0, borderBottomRightRadius: 0 };
    case ADJOINED.both:
      return borderRadius(0);
    case ADJOINED.none:
    default:
      return styles;
  }
};

const inputBorderColor = (utils, props) => {
  const { theme } = utils;
  const { $intent, $isFocused, $disabled } = props;
  switch ($intent) {
    case 'default':
    default: {
      if ($isFocused) {
        return borderColor(theme.spr.interactive01);
      }
      return {
        ...borderColor(theme.spr.field),
        ...($disabled && borderColor(theme.input.disabledBorderColor)),
        ':hover': $disabled ? {} : borderColor(theme.spr.border06),
      };
    }
    case 'success':
    case 'warning':
    case 'error':
      return borderColor(intentColor(utils, props));
  }
};

const inputBorderWidth = (utils, { $variant }) =>
  $variant === 'line' ? { ...borderWidth(0), borderBottomWidth: '1px' } : borderWidth('1px');

const inputBackgroundColor = ({ theme }, { $disabled }) =>
  $disabled ? { backgroundColor: theme.spr.ui02 } : { backgroundColor: theme.spr.ui01 };

export const getInputContainerStyles: Styles = [
  borderStyle('solid'),
  inputBorderWidth,
  inputBorderColor,
  inputBackgroundColor,
  inputBorderRadius,
  {
    outline: 'none',
    boxSizing: 'border-box',
    transitionProperty: undefined,
    transitionDuration: undefined,
    transitionTimingFunction: undefined,
  },
];

const enhancerBorderRadius: StyleFn<SharedProps> = (utils, { $isStart, $variant, $size }) => {
  const { theme } = utils;

  if ($variant === 'line') {
    return 'rounded-0';
  }

  return $isStart
    ? {
        ...borderRadius(
          getComponentSizeTheme(theme, 'input', $size, getDefaultSize(theme))?.borderRadius || theme.input.borderRadius
        ),
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      }
    : {
        ...borderRadius(
          getComponentSizeTheme(theme, 'input', $size, getDefaultSize(theme))?.borderRadius || theme.input.borderRadius
        ),
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      };
};

const enhancerBorderWidth: StyleFn<SharedProps> = ({ theme }, { $variant, $isStart }) =>
  $variant === 'line'
    ? { ...borderWidth(0), borderBottomWidth: '1px' }
    : {
        ...borderWidth(theme.borderWidth['1']),
        [$isStart ? 'borderRightWidth' : 'borderLeftWidth']: theme.borderWidth['0'],
      };

const enhancerBorderColor: StyleFn<SharedProps> = (utils, props) =>
  borderColor(intentColor(utils, props, utils.theme.spr.field));

export const getEnhancerStyles: Styles = [
  borderStyle('solid'),
  inputBackgroundColor,
  enhancerBorderColor,
  enhancerBorderWidth,
  enhancerBorderRadius,
  'spr-text-01 pl-4 pr-4',
  { outline: 'none' },
];

export const getPlaceholderTypography: Styles = ({ theme }): StyleObject => ({
  color: theme.spr.textPlaceholder,
  fontWeight: theme.fontWeight.regular,
});

export const getInputStyles: StyleFn<Partial<Pick<SharedProps, '$size' | '$disabled' | '$variant'>>> = (
  utils,
  props
): StyleObject => {
  const { theme } = utils;
  const { $disabled, $variant = 'default', $size } = props;
  const styles = {
    //todo: need clean up
    lineHeight: '',
    paddingLeft: '',
    paddingRight: '',
    paddingTop: '',
    paddingBottom: '',
    fontSize: '',
    color: theme.spr.text01,
    fontWeight: theme.fontWeight.medium,
    '::placeholder': getPlaceholderTypography(utils, props),
  };

  if ($disabled) {
    styles.color = theme.spr.text02;
    // baseweb applies this style in order to support style in safari
    styles['-webkit-text-fill-color'] = theme.spr.text02;
  }

  const inputSizeTheme = getComponentSizeTheme(theme, 'input', $size, getDefaultSize(theme));
  styles.lineHeight = inputSizeTheme.lineHeight;
  styles.paddingLeft = styles.paddingRight = inputSizeTheme.paddingX;
  styles.paddingTop = styles.paddingBottom = inputSizeTheme.paddingY;
  styles.fontSize = inputSizeTheme.fontSize;

  if ($variant === 'line') {
    styles.paddingLeft = styles.paddingRight = '0';
  }

  return styles;
};
