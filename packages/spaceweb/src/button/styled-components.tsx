import { Theme } from '@sprinklr/spaceweb-themes/types';

import { StyleFn, StyleObject, Styles, StyleUtils } from '../types';
import { ButtonSharedProps, Size } from './types';

import { getComponentSizeTheme } from '../helpers/themeHelpers';
import { borderColor as borderColorLonghand, borderRadius, borderWidth } from '../helpers/longHandHelpers';

import { styled } from '../style';
import { Property } from 'csstype';

const getButtonSizeTheme = (theme: Theme, size?: Size) => getComponentSizeTheme(theme, 'button', size, 'lg');

const getIntentTextColor = ({ theme }: StyleUtils, { $intent }: ButtonSharedProps): string => {
  switch ($intent) {
    case 'default':
    default:
      return theme.spr.text04;
    case 'success':
      return theme.spr.supportSuccessText;
    case 'warning':
      return theme.spr.supportWarning;
    case 'error':
      return theme.spr.supportErrorText;
  }
};

const getIntentColor = ({ theme }: StyleUtils, { $intent }: ButtonSharedProps): string => {
  switch ($intent) {
    case 'default':
    default:
      return theme.spr.interactive01;
    case 'success':
      return theme.spr.supportSuccess;
    case 'warning':
      return theme.spr.supportWarning;
    case 'error':
      return theme.spr.supportError;
  }
};

const getIntentHighlightColor = ({ theme }: StyleUtils, { $intent }: ButtonSharedProps): string => {
  switch ($intent) {
    case 'default':
    default:
      return theme.spr.interactiveFocus;
    case 'success':
      return theme.spr.supportSuccessHighlight;
    case 'warning':
      return theme.spr.supportWarningHighlight;
    case 'error':
      return theme.spr.supportErrorHighlight;
  }
};

const getPrimaryHighlightColor = (utils: StyleUtils, props: ButtonSharedProps): StyleObject => ({
  backgroundColor: getIntentHighlightColor(utils, props),
  borderColor: getIntentHighlightColor(utils, props),
});

const getPrimaryHoverColor = ({ theme }: StyleUtils): StyleObject => ({
  backgroundColor: theme.spr.interactiveHover,
  borderColor: theme.spr.interactiveHover,
});

const getBorderRadiiStyles: StyleFn<ButtonSharedProps> = ({ px2rem, theme }, { $shape, $size }) => {
  switch ($shape) {
    case 'round':
      return borderRadius(theme.borderRadius.full);
    case 'square':
      return borderRadius(theme.borderRadius['0']);
    case 'pill':
      return borderRadius(px2rem(theme.borderRadius['16']));
    default:
  }

  return borderRadius(getButtonSizeTheme(theme, $size)?.borderRadius || theme.button.borderRadius);
};

const getDimension: StyleFn<ButtonSharedProps> = ({ theme, px2rem }, { $size, $fullWidth }) => {
  if ($fullWidth) {
    return { width: '100%' };
  }

  return {
    minWidth: getButtonSizeTheme(theme, $size).minWidth,
  };
};

const getFontStyles: StyleFn<ButtonSharedProps> = ({ theme }, { $size }) => getButtonSizeTheme(theme, $size).fontStyles;

const getPaddingStyles: StyleFn<ButtonSharedProps> = ({ px2rem, theme }, { $size, $shape }) => {
  if ($shape === 'round') {
    return {
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
    };
  }

  const buttonPadding = getButtonSizeTheme(theme, $size);

  return {
    paddingTop: buttonPadding.paddingY,
    paddingBottom: buttonPadding.paddingY,
    paddingLeft: buttonPadding.paddingX,
    paddingRight: buttonPadding.paddingX,
  };
};

type ButtonStyleParams = {
  color: string;
  hoverColor?: string;
  activeColor?: string;
  disabledColor?: string;

  backgroundColor: string;
  disabledBackgroundColor?: string;
  hoverBackgroundColor?: string;
  activeBackgroundColor?: string;

  borderColor: string;
  hoverBorderColor?: string;
  activeBorderColor?: string;
  disabledBorderColor?: string;
};
export const createButtonStyles = (
  {
    color,
    hoverColor,
    activeColor,
    disabledColor,
    backgroundColor,
    disabledBackgroundColor,
    hoverBackgroundColor,
    activeBackgroundColor,
    borderColor,
    hoverBorderColor,
    activeBorderColor,
    disabledBorderColor,
  }: ButtonStyleParams,
  { $disabled, $isSelected, $isFocusVisible }: ButtonSharedProps
): StyleObject => {
  if ($disabled) {
    return {
      ':disabled': {
        color: disabledColor ?? color,
        backgroundColor: disabledBackgroundColor ?? backgroundColor,
        ...borderColorLonghand(disabledBorderColor ?? borderColor),
      },
    };
  }
  const hoverStyles = {
    ...(hoverColor && { color: hoverColor }),
    ...(hoverBackgroundColor && { backgroundColor: hoverBackgroundColor }),
    ...(hoverBorderColor && borderColorLonghand(hoverBorderColor)),
  };
  const activeStyles = {
    ...(activeColor && { color: activeColor }),
    ...(activeBackgroundColor && { backgroundColor: activeBackgroundColor }),
    ...(activeBorderColor && borderColorLonghand(activeBorderColor)),
  };
  return {
    color,
    backgroundColor,
    ...borderColorLonghand(borderColor),
    ...($isSelected && activeStyles),
    ':hover': hoverStyles,
    ...($isFocusVisible
      ? {
          ':focus': hoverStyles,
        }
      : {}),
    ':active': activeStyles,
  };
};

const getVariantStyles: StyleFn<ButtonSharedProps> = (utils, props) => {
  const { theme } = utils;
  const { $variant, $isFocusVisible, $intent, $isSelected } = props;

  switch ($variant) {
    case 'primary':
    default: {
      const { backgroundColor: activeBackgroundColor, borderColor: activeBorderColor } = getPrimaryHighlightColor(
          utils,
          props
        ),
        { backgroundColor: hoverBackgroundColor, borderColor: hoverBorderColor } = getPrimaryHoverColor(utils);
      const backgroundColor = getIntentColor(utils, props),
        color = theme.spr.text05,
        borderColor = getIntentColor(utils, props);

      const primaryButtonTheme = theme.button?.primary || {};

      const defaultIntentStyles = createButtonStyles(
        {
          color: primaryButtonTheme.color ?? color,

          backgroundColor: primaryButtonTheme.backgroundColor ?? backgroundColor,
          hoverBackgroundColor: primaryButtonTheme.hoverBackgroundColor ?? hoverBackgroundColor,
          activeBackgroundColor: primaryButtonTheme.activeBackgroundColor ?? activeBackgroundColor,

          borderColor: primaryButtonTheme.borderColor ?? borderColor,
          hoverBorderColor: primaryButtonTheme.hoverBorderColor ?? hoverBorderColor,
          activeBorderColor: primaryButtonTheme.activeBorderColor ?? activeBorderColor,
        },
        props
      );
      const intentStyles = createButtonStyles(
        {
          color,
          backgroundColor,
          borderColor,
          hoverBorderColor,
          activeBorderColor,
        },
        props
      );
      return $intent === 'default'
        ? defaultIntentStyles
        : {
            ...intentStyles,
            ':hover': { opacity: '0.8' },
            ':active': { opacity: '0.8' },
            ...($isFocusVisible && { ':focus': { opacity: '0.8' } }),
          };
    }
    case 'secondary': {
      const { color, hoverBackgroundColor, activeBackgroundColor } = theme.button.variantSecondary;
      const secondaryButtonTheme = theme.button?.secondary || {};
      return createButtonStyles(
        {
          color: secondaryButtonTheme.color ?? color,
          disabledColor: secondaryButtonTheme.disabledColor ?? theme.spr.text03,

          backgroundColor: secondaryButtonTheme.backgroundColor ?? theme.spr.ui01,
          hoverBackgroundColor: secondaryButtonTheme.hoverBackgroundColor ?? hoverBackgroundColor,
          activeBackgroundColor: secondaryButtonTheme.activeBackgroundColor ?? activeBackgroundColor,
          disabledBackgroundColor: secondaryButtonTheme.disabledBackgroundColor ?? theme.spr.ui05,

          borderColor: secondaryButtonTheme.borderColor ?? theme.spr.interactive02,
          hoverBorderColor: secondaryButtonTheme.hoverBorderColor ?? theme.spr.border06,
          activeBorderColor: secondaryButtonTheme.activeBorderColor ?? theme.spr.interactive01,
          disabledBorderColor: secondaryButtonTheme.disabledBorderColor ?? theme.spr.border02,
        },
        props
      );
    }
    case 'tertiary': {
      const tertiaryButtonTheme = theme.button?.tertiary || {};
      return createButtonStyles(
        {
          color: tertiaryButtonTheme.color ?? getIntentTextColor(utils, props),

          backgroundColor: tertiaryButtonTheme.backgroundColor ?? theme.spr.ui01,
          hoverBackgroundColor: tertiaryButtonTheme.hoverBackgroundColor ?? theme.spr.uiHover,
          activeBackgroundColor: tertiaryButtonTheme.activeBackgroundColor ?? theme.spr.uiFocus,

          borderColor: tertiaryButtonTheme.borderColor ?? getIntentColor(utils, props),
        },
        props
      );
    }
    case 'minimal': {
      const minimalButtonTheme = theme.button?.minimal || {};
      const styles = createButtonStyles(
        {
          color: minimalButtonTheme.color ?? getIntentTextColor(utils, props),

          backgroundColor: minimalButtonTheme.backgroundColor ?? 'transparent',
          hoverBackgroundColor: minimalButtonTheme.hoverBackgroundColor ?? theme.spr.uiHover,
          activeBackgroundColor: minimalButtonTheme.activeBackgroundColor ?? theme.spr.uiFocus,

          borderColor: minimalButtonTheme.borderColor ?? 'transparent',
        },
        props
      );
      styles.fontWeight = theme.fontWeight.normal as Property.FontWeight;
      return styles;
    }
  }
};

const getBaseStyles = ({ theme }, { $isLoading = false }) => ({
  ...borderWidth(theme.borderWidth.default),
  borderStyle: 'solid',
  flexDirection: $isLoading ? ('column' as const) : ('row' as const),
});

export const getButtonStyles: Styles = [
  (utils, props) => {
    const { $disabled, $variant } = props;
    const { theme } = utils;

    return {
      cursor: $disabled ? 'not-allowed' : 'pointer',
      // for secondary variant disabled state, we are using correct tokens instead of relying on opacity
      opacity: $disabled && $variant !== 'secondary' ? '0.6' : '1',
      boxSizing: 'border-box',
      outlineWidth: theme.borderWidth['0'],
    };
  },
  getBaseStyles,
  getDimension,
  getFontStyles,
  getPaddingStyles,
  getVariantStyles,
  getBorderRadiiStyles,
];

export const StyledLoadingSpinnerContainer = styled('div', (utils, props) => {
  const { lineHeight } = getFontStyles(utils, props) as StyleObject;
  return {
    height: lineHeight as string,
    width: lineHeight as string,
  };
});
