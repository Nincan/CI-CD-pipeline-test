import en from 'date-fns/locale/en-US';
import getInterpolatedString from 'baseui/helpers/i18n-interpolation';
import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import dateFnsAdapter from 'baseui/datepicker/utils/date-fns-adapter';

import { Locale } from '../locale';
import { DEFAULT_FORMAT_STRING } from './constants';

interface FormatDateParams {
  date: Date | Date[] | undefined;
  formatString?: string;
  locale: any;
  dateHelpers?: DateHelpers<Date>;
  timezone?: string;
  showTimezone?: boolean;
}

// replacing both hyphens and em-dashes with en-dashes
export const normalizeDashes = (formatString: string) => formatString.replace(/-/g, '–').replace(/—/g, '–');

export const formatDate = ({ showTimezone = false, ...params }: FormatDateParams): string => {
  const date = params.date;
  const formatString = params.formatString || normalizeDashes(DEFAULT_FORMAT_STRING);
  const dateHelpers = params.dateHelpers || new DateHelpers(dateFnsAdapter);
  const locale = params.locale;

  const format = (dateToFormat: Date): string => dateHelpers.formatDate(dateToFormat, formatString, locale);

  if (!date) {
    return '';
  }
  if (Array.isArray(date) && !date[0] && !date[1]) {
    return '';
  }

  let formattedDate: string;
  if (Array.isArray(date)) {
    formattedDate = date.map(day => format(day)).join(' – ');
  } else {
    formattedDate = format(date);
  }
  return `${formattedDate}${params.timezone && showTimezone ? ` | ${params.timezone}` : ''}`;
};

export const getAriaLabel = (
  value: Date | Date[] | undefined,
  formatDisplayValue: (date?: Date | Date[]) => string,
  locale: Locale
): string => {
  // No date selected
  if (!value || (Array.isArray(value) && !value.length)) {
    return '';
  }

  // Date selected in a non-range picker
  if (!Array.isArray(value)) {
    return getInterpolatedString(locale.timeRangePicker.selectedDate, {
      date: formatDisplayValue(value) || '',
    });
  }

  // Start and end dates are selected in a range picker
  if (value.length > 1) {
    return getInterpolatedString(locale.timeRangePicker.selectedDateRange, {
      startDate: formatDisplayValue(value[0]),
      endDate: formatDisplayValue(value[1]),
    });
  }

  // A single date selected in a range picker
  return `${getInterpolatedString(locale.timeRangePicker.selectedDate, {
    date: formatDisplayValue(value[0]),
  })} ${locale.timeRangePicker.selectSecondDatePrompt}`;
};

export const prepareLocale = (
  locale = en,
  options?: {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  }
): any => ({
  ...locale,
  options: {
    ...locale.options,
    ...(options?.weekStartsOn !== undefined && { weekStartsOn: options.weekStartsOn }),
  },
});

// checks whether given date(both day & time) is in [minDate, maxDate] range.
export const isTimeInRange = (
  date: Date | Array<Date | undefined | null> | null | undefined,
  {
    minDate,
    maxDate,
    dateHelpers = new DateHelpers(dateFnsAdapter),
  }: { minDate?: Date | null; maxDate?: Date | null; dateHelpers?: DateHelpers<Date> }
): boolean => {
  if (!date) {
    return true;
  }
  if (Array.isArray(date)) {
    return date.every(
      _date =>
        (!minDate || !_date || !dateHelpers.isBefore(_date, minDate)) &&
        (!maxDate || !_date || !dateHelpers.isAfter(_date, maxDate))
    );
  }
  return (!minDate || !dateHelpers.isBefore(date, minDate)) && (!maxDate || !dateHelpers.isAfter(date, maxDate));
};

// checks whether given date(only day) is in [minDate, maxDate] range.
export const isDayInRange = (
  date: Date | Date[] | null | undefined,
  {
    minDate,
    maxDate,
    dateHelpers = new DateHelpers(dateFnsAdapter),
  }: { minDate?: Date; maxDate?: Date; dateHelpers?: any }
): boolean => {
  if (!date) {
    return true;
  }
  if (Array.isArray(date)) {
    return date.every(_date => !dateHelpers.isDayDisabled(_date, { minDate, maxDate }));
  }
  return !dateHelpers.isDayDisabled(date, { minDate, maxDate });
};
