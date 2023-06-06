import { Property } from 'csstype';
import {
  borderRadius as borderRadiusLonghand,
  borderStyle,
  borderColor,
  borderWidth,
  margin,
} from '../helpers/longHandHelpers';
import { getFocusVisibleStyles } from '../helpers/commonStyles';
import { styled } from '../style';
import { getIntentStyles } from './intentStyles';
import { getTagSizeTheme } from './utils';

export const StyledStartEnhancer = styled('div', 'inline-flex items-center', ({ px2rem, theme }, { $size }) => {
  const { startEnhancerMarginLeft, startEnhancerMarginRight } = getTagSizeTheme(theme, $size);
  return {
    marginRight: startEnhancerMarginRight,
    marginLeft: startEnhancerMarginLeft,
  };
});

export const StyledRoot = styled(
  'span',
  'inline-flex items-center box-border',
  (utils, { $withStartEnhancer, $size, $closeable, $intent, $variant, $clickable, $isFocusVisible }) => {
    const { theme } = utils;
    const paddingStartDir = 'paddingLeft';
    const paddingEndDir = 'paddingRight';
    const { height, borderRadius, paddingX, paddingY } = getTagSizeTheme(theme, $size);
    const paddingStart = $withStartEnhancer ? '0' : paddingX;
    const paddingEnd = $closeable ? '0' : paddingX;
    const typographyStyles =
      $intent === 'default'
        ? { ...theme.typography.l2, fontWeight: theme.fontWeight.normal as Property.FontWeight }
        : { ...theme.typography.l2, fontWeight: theme.fontWeight.semibold as Property.FontWeight };
    const hoverStyles = {
      boxShadow: 'inset 0px 0px 100px rgba(0, 0, 0, 0.08)',
      ...borderColor(theme.spr.border06),
    };

    const activeStyles = {
      ...borderColor(theme.spr.interactive01),
    };
    return {
      height,
      [paddingStartDir]: paddingStart,
      [paddingEndDir]: paddingEnd,
      paddingTop: paddingY,
      paddingBottom: paddingY,
      maxWidth: 'none',
      ...typographyStyles,
      ...margin(0),
      ...borderStyle('solid'),
      ...borderColor(theme.borderColor.transparent),
      ...borderWidth('1px'),
      ...borderRadiusLonghand(borderRadius),
      ...getIntentStyles(theme, $intent!, $variant!),
      ...($clickable && {
        cursor: 'pointer',
        // temporary boxShadow onHover
        ':hover': hoverStyles,
        ':active': activeStyles,
        ...getFocusVisibleStyles(utils),
      }),
      ':focus': {
        ...($isFocusVisible && hoverStyles),
      },
    };
  }
);

export const StyledAction = styled(
  'span',
  'cursor-pointer inline-flex items-center justify-center',
  ({ theme }, { $size }) => {
    const { clearableIconMarginX } = getTagSizeTheme(theme, $size);
    return {
      marginRight: clearableIconMarginX,
      marginLeft: clearableIconMarginX,
    };
  }
);

export const StyledText = styled('span', 'truncate', ({ px2rem, theme }, { $size }) => {
  const { fontSize, lineHeight } = getTagSizeTheme(theme, $size);
  return {
    maxWidth: px2rem(128),
    fontSize,
    lineHeight,
  };
});
