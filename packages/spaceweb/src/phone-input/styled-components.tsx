import { styled } from '../style';
import { InputSize } from '../input';
import { Px2Rem } from '../types';
import { getComponentSizeTheme, getDefaultSize } from '../helpers/themeHelpers';

const dialCodeSizeConfig = (px2rem): Record<InputSize, Record<string, any>> => ({
  xxxs: { fontSize: px2rem(10) },
  xs: { fontSize: px2rem(12) },
  sm: { fontSize: px2rem(14) },
  md: { fontSize: px2rem(16) },
  lg: { fontSize: px2rem(16) },
});

const getSizeConfig = (px2rem: Px2Rem, size: InputSize) =>
  dialCodeSizeConfig(px2rem)[size] ?? dialCodeSizeConfig(px2rem).lg;

export const getFlagContainerStyles = [
  'min-w-0 spr-ui-05 px-2 py-0.5 text-16 rounded-4',
  ({ theme, px2rem }, { $inputSize, $isFocusVisible }) => {
    const inputSizeTheme = getComponentSizeTheme(theme, 'input', $inputSize, getDefaultSize(theme));
    return {
      marginLeft: inputSizeTheme.paddingX,
      marginRight: '0 /* @noflip */',
      ...($isFocusVisible && {
        ':focus': {
          outline: `1px solid ${theme.spr.focus01}`,
        },
      }),
    };
  },
];

export const getRootStyles = ({}, { $disabled }) => ($disabled ? 'cursor-not-allowed' : undefined);

export const getInputStyles = ({ theme, px2rem }, { $size }) => {
  const inputSizeTheme = getComponentSizeTheme(theme, 'input', $size, getDefaultSize(theme));
  return {
    paddingLeft: `${px2rem(4)} /* @noflip */`,
    paddingRight: `${inputSizeTheme.paddingX} /* @noflip */`,
  };
};

export const StyledCountrySelectContainer = styled('div', 'flex items-center');

export const StyledDialCode = styled('div', 'flex items-center font-medium', ({ px2rem }, { $size }) => {
  const sizeTheme = getSizeConfig(px2rem, $size);
  const styles = {
    fontSize: sizeTheme.fontSize,
    marginLeft: `${px2rem(4)} /* @noflip */`,
    marginRight: '0 /* @noflip */',
  };
  return styles;
});
