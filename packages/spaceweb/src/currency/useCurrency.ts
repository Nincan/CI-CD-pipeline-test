import { useLocale } from '../locale';

import { getFormattedCurrency } from './utils';
import { DEFAULT_CURRENCY, DEFAULT_VARIANT } from './constants';

import { CurrencyProps } from './types';

export const useCurrency = ({
  value,
  currency = DEFAULT_CURRENCY,
  variant = DEFAULT_VARIANT,
  currencyOptions,
}: CurrencyProps): string => {
  const { langCode } = useLocale();

  return getFormattedCurrency({ value, locale: langCode, variant, currencyOptions, currency });
};
