import { DATE_TIME_VARIANTS } from './types';

export const DEFAULT_VARIANT = DATE_TIME_VARIANTS.SHORT_DATE; //dd/mm/yyyy in en_US

export const VARIANTS_DATE_FORMAT_OPTIONS: { [key: string]: Intl.DateTimeFormatOptions } = {
  [DATE_TIME_VARIANTS.SHORT_DATE]: { year: 'numeric', month: 'numeric', day: 'numeric' },
  [DATE_TIME_VARIANTS.MEDIUM_DATE]: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  [DATE_TIME_VARIANTS.LONG_DATE]: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  [DATE_TIME_VARIANTS.FULL_DATE]: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  },
  [DATE_TIME_VARIANTS.SHORT_TIME]: {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  },
  [DATE_TIME_VARIANTS.MEDIUM_TIME]: {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  },
  [DATE_TIME_VARIANTS.LONG_TIME]: {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZoneName: 'short',
  },
  [DATE_TIME_VARIANTS.FULL_TIME]: {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZoneName: 'long',
  },
  [DATE_TIME_VARIANTS.SHORT_DATE_TIME]: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  },
  [DATE_TIME_VARIANTS.MEDIUM_DATE_TIME]: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  },
  [DATE_TIME_VARIANTS.LONG_DATE_TIME]: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
    timeZoneName: 'short',
  },
  [DATE_TIME_VARIANTS.FULL_DATE_TIME]: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZoneName: 'long',
  },
};
