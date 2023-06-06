import { CompactDecimalFormat, ExpandedDecimalFormat, NUMBER_VARIANTS, NumberVariant } from './types';

export const getFormattedNumber = ({
  value,
  locale,
  variant,
  numberOptions,
}: {
  value: number;
  locale: string;
  variant: NumberVariant;
  numberOptions?: Intl.NumberFormatOptions;
}): string => {
  const absValue = Math.abs(value);
  const betweenZeroAndOne = absValue > 0 && absValue < 1;
  let maximumFractionDigits, notation;
  switch (variant.type) {
    case NUMBER_VARIANTS.EXPANDED_AUTO_FORMAT: {
      const decimalDigits = betweenZeroAndOne ? 4 : 2;
      maximumFractionDigits = decimalDigits;
      notation = 'standard';
      break;
    }
    case NUMBER_VARIANTS.EXPANDED_DECIMAL_FORMAT: {
      maximumFractionDigits = (variant as ExpandedDecimalFormat).decimalDigits;
      notation = 'standard';
      break;
    }
    case NUMBER_VARIANTS.COMPACT_AUTO_FORMAT: {
      const decimalDigits = betweenZeroAndOne ? 4 : 2;
      maximumFractionDigits = decimalDigits;
      notation = 'compact';
      break;
    }
    case NUMBER_VARIANTS.COMPACT_DECIMAL_FORMAT: {
      maximumFractionDigits = (variant as CompactDecimalFormat).decimalDigits;
      notation = 'compact';
      break;
    }
    default: {
      break;
    }
  }
  return Intl.NumberFormat(locale, {
    minimumFractionDigits: 0,
    maximumFractionDigits,
    notation,
    ...numberOptions,
  }).format(value);
};
