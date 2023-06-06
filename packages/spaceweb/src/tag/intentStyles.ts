import { Theme } from '@sprinklr/spaceweb-themes/types';
import { StyleObject } from '../types';
import { Intent, Variant } from './types';

type ColorMap = Record<'bg' | 'bgHover' | 'font' | 'fontHover', string>;
type VariantColorMap = Record<Variant, ColorMap>;
type IntentColorMap = Partial<Record<Intent, VariantColorMap>>;
const getColorMap = (theme: Theme): IntentColorMap => ({
  default: {
    solid: {
      bg: theme.spr.ui05,
      bgHover: theme.spr.uiHover,
      font: theme.spr.text01,
      fontHover: theme.spr.text01,
    },
    light: {
      bg: theme.spr.ui05,
      bgHover: theme.spr.uiHover,
      font: theme.spr.text01,
      fontHover: theme.spr.text01,
    },
  },
  error: {
    solid: {
      bg: theme.spr.clrRed,
      bgHover: theme.spr.clrRed,
      font: theme.spr.text05,
      fontHover: theme.spr.text05,
    },
    light: {
      bg: theme.spr.supportErrorHighlight,
      bgHover: theme.spr.supportErrorHighlight,
      font: theme.spr.supportErrorText,
      fontHover: theme.spr.supportErrorText,
    },
  },
  info: {
    solid: {
      bg: theme.spr.clrSea,
      bgHover: theme.spr.clrSea,
      font: theme.spr.text05,
      fontHover: theme.spr.text05,
    },
    light: {
      bg: theme.spr.clrSea,
      bgHover: theme.spr.clrSea,
      font: theme.spr.text05,
      fontHover: theme.spr.text05,
    },
  },
  success: {
    solid: {
      bg: theme.spr.clrGreen,
      bgHover: theme.spr.clrGreen,
      font: theme.spr.text05,
      fontHover: theme.spr.text05,
    },
    light: {
      bg: theme.spr.supportSuccessHighlight,
      bgHover: theme.spr.supportSuccessHighlight,
      font: theme.spr.supportSuccessText,
      fontHover: theme.spr.supportSuccessText,
    },
  },
  warning: {
    solid: {
      bg: theme.spr.clrOrange,
      bgHover: theme.spr.clrOrange,
      font: theme.spr.text05,
      fontHover: theme.spr.text05,
    },
    light: {
      bg: theme.spr.supportWarningHighlight,
      bgHover: theme.spr.supportWarningHighlight,
      font: theme.spr.clrOrange,
      fontHover: theme.spr.clrOrange,
    },
  },
});

export const getIntentStyles = (theme: Theme, intent: Intent, variant: Variant): StyleObject => {
  const colorMap = getColorMap(theme);
  const variantStyles = colorMap[intent]?.[variant];
  return {
    backgroundColor: variantStyles?.bg,
    color: variantStyles?.font,
    '&:hover': {
      backgroundColor: variantStyles?.bgHover,
      color: variantStyles?.fontHover,
    },
  };
};
