//hooks
import { useCurrency } from './useCurrency';

//constants
import { DEFAULT_VARIANT, DEFAULT_CURRENCY } from './constants';

//types
import { CurrencyProps } from './types';

export const Currency = ({
  value,
  variant = DEFAULT_VARIANT,
  currency = DEFAULT_CURRENCY,
  currencyOptions,
}: CurrencyProps): JSX.Element => {
  const formattedCurrency = useCurrency({ value, variant, currency, currencyOptions });

  return <>{formattedCurrency}</>;
};
