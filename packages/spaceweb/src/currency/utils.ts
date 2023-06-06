import { getFormattedNumber } from '../utils/intlNumberFormatUtils';
import { NumberVariant } from '../utils/intlNumberFormatUtils/types';

export const getFormattedCurrency = ({
  value,
  locale,
  variant,
  currencyOptions,
  currency,
}: {
  value: number;
  locale: string;
  variant: NumberVariant;
  currency: string;
  currencyOptions?: Intl.NumberFormatOptions;
}) => {
  const intlNumberFormatterOptions = {
    style: 'currency',
    currency,
    ...currencyOptions,
  };

  return getFormattedNumber({ value, locale, variant, numberOptions: intlNumberFormatterOptions });
};
