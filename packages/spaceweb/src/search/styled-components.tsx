import { borderColor as borderColorLongHand, borderRadius, borderStyle, borderWidth } from '../helpers/longHandHelpers';
import { StyleObject, Styles } from '../types';
import { SharedProps, Size, Variant } from './types';
import { useStyle } from '../style';
import { getComponentSizeTheme, getDefaultSize } from '../helpers/themeHelpers';

type VariantTokenMap = {
  backgroundColor: string;
  disabledBackgroundColor: string;

  borderColor?: string;
  hoverBorderColor?: string;
  focusBorderColor?: string;
};
const VARIANTS_TOKENS_MAP: Record<Variant, VariantTokenMap> = {
  default: {
    backgroundColor: 'ui02',
    disabledBackgroundColor: 'ui02',
    hoverBorderColor: 'border06',
    focusBorderColor: 'interactive01',
  },
  light: {
    backgroundColor: 'ui01',
    disabledBackgroundColor: 'ui02',
    hoverBorderColor: 'border06',
    focusBorderColor: 'interactive01',
    borderColor: 'border03',
  },
};

const getSearchComponentTokens = (variant: Variant) => VARIANTS_TOKENS_MAP[variant ?? 'default'] ?? {};

type SizeStyle = {
  paddingX: string;
  searchIconMarginX: string;
  height: string;
  fontSize: string;
  iconSize: number;
  borderRadius: string;
  lineHeight?: string;
};
const SIZES_STYLES_MAP: Record<Size, SizeStyle> = {
  xxxs: {
    paddingX: '2px',
    searchIconMarginX: '4px',
    height: '24px',
    fontSize: '13px',
    iconSize: 10,
    borderRadius: '5px',
    lineHeight: '16px',
  },
  xxs: {
    paddingX: '5px',
    searchIconMarginX: '4px',
    height: '28px',
    fontSize: '14px',
    iconSize: 10,
    borderRadius: '6px',
  },
  xs: {
    paddingX: '5px',
    searchIconMarginX: '5px',
    height: '32px',
    fontSize: '14px',
    iconSize: 12,
    borderRadius: '7px',
  },
  sm: {
    paddingX: '6px',
    searchIconMarginX: '7px',
    height: '36px',
    fontSize: '14px',
    iconSize: 12,
    borderRadius: '8px',
  },
  md: {
    paddingX: '6px',
    searchIconMarginX: '7px',
    height: '40px',
    fontSize: '14px',
    iconSize: 12,
    borderRadius: '8px',
  },
  lg: {
    paddingX: '6px',
    searchIconMarginX: '7px',
    height: '40px',
    fontSize: '14px',
    iconSize: 12,
    borderRadius: '8px',
  },
};

export const getSearchSizeTheme = (theme, size, prop) =>
  getComponentSizeTheme(theme, 'search', size, getDefaultSize(theme))?.[prop] || SIZES_STYLES_MAP[size][prop];

const rootBackgroundColor = ({ theme }, { $isFocused, $disabled, $variant = 'default' }: SharedProps): StyleObject => {
  const { backgroundColor, disabledBackgroundColor, borderColor } = getSearchComponentTokens($variant);
  return {
    backgroundColor: $disabled ? theme.spr[disabledBackgroundColor] : theme.spr[backgroundColor],
  };
};

const rootBorderColor = (utils, props: SharedProps) => {
  const { theme } = utils;
  const { $isFocused, $disabled, $variant } = props;
  const { hoverBorderColor, focusBorderColor, borderColor } = getSearchComponentTokens($variant);

  if ($disabled) {
    return borderColorLongHand(theme.input.disabledBorderColor);
  }

  if ($isFocused) {
    return borderColorLongHand(theme.spr[focusBorderColor!]);
  }

  return {
    ...borderColorLongHand(borderColor ? theme.spr[borderColor] : 'transparent'),
    ':hover': borderColorLongHand(theme.spr[hoverBorderColor!]),
  };
};

export const getInputContainerStyles: Styles = {
  outline: 'none',
  boxSizing: 'border-box',
  ...borderColorLongHand('transparent'),
  backgroundColor: 'transparent',
  ':hover': { backgroundColor: 'transparent' },
  ...borderStyle('none'),
  ...borderRadius('0'),
};

export const getRootStyles: Styles = [
  borderStyle('solid'),
  borderWidth('1px'),
  rootBorderColor,
  rootBackgroundColor,
  ({ theme }, { $size }: SharedProps): StyleObject => {
    const paddingX = getSearchSizeTheme(theme, $size, 'paddingX');
    const height = getSearchSizeTheme(theme, $size, 'height');
    const _borderRadius = getSearchSizeTheme(theme, $size, 'borderRadius');
    return { height, paddingLeft: paddingX, paddingRight: paddingX, ...borderRadius(_borderRadius) };
  },
  { outline: 'none', boxSizing: 'border-box' },
];
