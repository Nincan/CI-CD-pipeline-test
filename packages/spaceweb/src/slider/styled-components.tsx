import styled from '../style/styled';
import { borderRadius, borderColor } from '../helpers/longHandHelpers';
import { intentColor } from '../helpers/intentHelper';
import { hex2rgb } from '../helpers';
import { Styles } from '../types';

const addOpacity = (token: string, opacity: string): string | null =>
  token.includes('rgb') ? `${token.split(')')[0] + opacity})` : hex2rgb(token, opacity);

const secondaryIntentColor = ({ theme }, { $intent }) => {
  switch ($intent) {
    case 'error':
      return theme.spr.supportErrorHighlight;
    case 'success':
      return theme.spr.supportSuccessHighlight;
    case 'warning':
      return theme.spr.supportWarningHighlight;
    default:
      return addOpacity(theme.spr.ui04, '0.1');
  }
};

export const getInnerTrackStyles: Styles = [
  'w-full self-center',
  ({ theme, px2rem }, { $disabled, $value, $min, $max, $intent }) => {
    const intentPrimary = intentColor({ theme }, { $intent });
    const intentSecondary = secondaryIntentColor({ theme }, { $intent });
    const scaledValue = $value.map(value => ((value - $min) / ($max - $min)) * 100);
    const gradientDirection = 'to right';
    return {
      background:
        scaledValue.length === 1
          ? `linear-gradient(${gradientDirection}, 
          ${intentPrimary} ${scaledValue[0]}%, 
            ${intentSecondary} ${scaledValue[0]}%)`
          : `linear-gradient(${gradientDirection}, 
          ${intentSecondary} ${scaledValue[0]}%,
            ${intentPrimary} ${scaledValue[0]}% ${scaledValue[1]}%, 
              ${intentSecondary} ${scaledValue[1]}%)`,
      opacity: $disabled ? '0.6' : '1',
      height: px2rem('6px'),
      cursor: $disabled ? 'not-allowed' : 'inherit',
      ...borderRadius('6px'),
    };
  },
];

export const getThumbStyles: Styles = [
  'flex items-center justify-center h-4 w-4',
  ({ theme }, { $disabled, $isFocusVisible, $intent }) => {
    const intentPrimary = intentColor({ theme }, { $intent });
    const intentSecondary = secondaryIntentColor({ theme }, { $intent });
    const hoverStyles = {
      boxShadow: `0px 0px 0px 6px ${intentSecondary}`,
    };
    return {
      backgroundColor: intentPrimary,
      ...borderRadius('16px'),
      cursor: $disabled ? 'not-allowed' : 'inherit',
      ...(!$disabled && {
        ':hover': hoverStyles,
        ':focus': {
          outline: 'none',
          ...($isFocusVisible && hoverStyles),
        },
      }),
    };
  },
];

export const getInnerThumbStyles: Styles = [
  'h-0 w-0 absolute border-l-8 border-t-8 border-b-8 border-r-8 border-solid',
  ({ theme, px2rem }) => ({
    ...borderColor('transparent'),
    borderTopColor: theme.spr.tooltip01,
    backgroundColor: 'transparent',
    top: px2rem('-16px'),
  }),
];

export const getThumbValueStyles: Styles = [
  'py-2 px-3 spr-tooltip-01 typography-l3 spr-text-06 absolute',
  ({ px2rem }) => ({
    ...borderRadius('4px'),
    top: px2rem('-47px'),
  }),
];

export const StyledMark = styled(
  'div',
  'ml-4 spr-ui-01 w-px relative opacity-50',
  ({ px2rem, theme }, { $markIndex, $intent, $value, $min, $max, $step }) => {
    const intentPrimary = intentColor({ theme }, { $intent });

    const markValue = $min + $markIndex * $step;
    let backgroundColor;
    if ($markIndex === 0 || $markIndex === ($max - $min) / $step) backgroundColor = 'transparent';
    else if ($value.length === 1) backgroundColor = $value[0] > markValue ? theme.spr.ui01 : intentPrimary;
    else backgroundColor = $value[0] < markValue && markValue < $value[1] ? theme.spr.ui01 : intentPrimary;

    return {
      height: px2rem('6px'),
      backgroundColor,
    };
  }
);

export const StyledMarkLabel = styled('div', 'absolute typography-l3', ({ px2rem }) => ({
  top: px2rem('15px'),
  transform: 'translateX(-50%)',
}));
