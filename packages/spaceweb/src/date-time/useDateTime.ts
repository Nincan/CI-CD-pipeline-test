import { useLocale } from '../locale';

import { VARIANTS_DATE_FORMAT_OPTIONS } from './variants';

import { DateTimeProps } from './types';

export const useDateTime = ({ date, variant, dateTimeOptions }: DateTimeProps): string => {
  const variantOptions = VARIANTS_DATE_FORMAT_OPTIONS[variant];

  const { langCode } = useLocale();

  return Intl.DateTimeFormat(langCode, {
    ...variantOptions,
    ...dateTimeOptions,
  }).format(date);
};
