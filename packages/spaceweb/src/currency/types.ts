import { NumberVariant } from '../utils/intlNumberFormatUtils/types';

export type CurrencyProps = {
  value: number;
  variant?: NumberVariant;
  currency?: string;
  currencyOptions?: Intl.NumberFormatOptions;
};
