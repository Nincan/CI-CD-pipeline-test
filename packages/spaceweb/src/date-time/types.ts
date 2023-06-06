import { ValueOf } from '../utility-types';

export const DATE_TIME_VARIANTS = {
  SHORT_DATE: 'shortDate',
  MEDIUM_DATE: 'mediumDate',
  LONG_DATE: 'longDate',
  FULL_DATE: 'fullDate',
  SHORT_TIME: 'shortTime',
  MEDIUM_TIME: 'mediumTime',
  LONG_TIME: 'longTime',
  FULL_TIME: 'fullTime',
  SHORT_DATE_TIME: 'shortDateTime',
  MEDIUM_DATE_TIME: 'mediumDateTime',
  LONG_DATE_TIME: 'longDateTime',
  FULL_DATE_TIME: 'fullDateTime',
  CUSTOM: 'custom',
} as const;

export type DateTimeProps = {
  date: Date | number;
  variant: ValueOf<typeof DATE_TIME_VARIANTS>;
  dateTimeOptions?: Intl.DateTimeFormatOptions;
};
