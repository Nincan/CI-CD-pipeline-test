import { NumberVariant } from '../utils/intlNumberFormatUtils/types';

export type NumberProps = {
  value: number;
  variant?: NumberVariant;
  numberOptions?: Intl.NumberFormatOptions;
};
