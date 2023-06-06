import { styled } from '../style';
import { StyleObject } from '../types';
import {
  WEIGHT as WeightAlias,
  TYPOGRAPHY_VARIANT_MAP,
  DEFAULT_BODY_WEIGHT,
  DEFAULT_DISPLAY_WEIGHT,
} from './constants';

const getTypographyWeight = $variant => {
  return $variant.includes('body')
    ? DEFAULT_BODY_WEIGHT
    : $variant.includes('display')
    ? DEFAULT_DISPLAY_WEIGHT
    : WeightAlias.regular;
};
export const StyledTypography = styled('span', ({ theme, classes }, { $variant, $weight }) => {
  const variantStyles = TYPOGRAPHY_VARIANT_MAP[$variant] ?? theme.typography[$variant] ?? theme.typography['l1'];
  const { fontSize, lineHeight, fontWeight: variantFontWeight } = variantStyles;
  const fontWeight = $weight ? `${WeightAlias[$weight]}` : variantFontWeight ?? getTypographyWeight($variant);
  return { fontSize, lineHeight, fontWeight } as StyleObject;
});
