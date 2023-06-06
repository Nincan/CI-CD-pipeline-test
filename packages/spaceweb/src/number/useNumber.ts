import { useLocale } from '../locale';

import { getFormattedNumber } from '../utils/intlNumberFormatUtils';

import { DEFAULT_VARIANT } from './constants';
import { NumberProps } from './types';

export const useNumber = ({ value, variant = DEFAULT_VARIANT, numberOptions }: NumberProps) => {
  const { langCode } = useLocale();

  return getFormattedNumber({ value, locale: langCode, variant, numberOptions });
};
