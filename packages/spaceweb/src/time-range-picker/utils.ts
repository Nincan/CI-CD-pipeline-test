import { DEFAULT_FORMAT_STRING } from '../date-picker/constants';
import { findTimeZone, getZonedTime } from 'timezone-support/dist/index-1900-2050';
import dateFnsAdapter from 'baseui/datepicker/utils/date-fns-adapter';
import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import getInterpolatedString from 'baseui/helpers/i18n-interpolation';
import { subDays, addDays } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz';

import { Locale } from '../locale';

import { FormatSummaryValueOptions, TimeRangePreset } from './types';
import { isTimeInRange, normalizeDashes } from '../date-picker/utils';
import { CALENDAR_HEIGHT, CUSTOM_OPTION, TIME_SELECT_ROW_HEIGHT } from './constants';

export const getSelectedTimeRange = (
  selectedTimeRange: string | undefined,
  timeRangeOptions: Array<TimeRangePreset>
): TimeRangePreset | undefined => timeRangeOptions.find(({ id }) => id === selectedTimeRange);

let SYSTEM_TIMEZONE: string;

export const getSystemTzName = (): string => {
  if (!SYSTEM_TIMEZONE) {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const TZ_ALIASES: Record<string, string> = {
      //Intl return Asia/Calcutta in chrome and safari, while firefox returns Asia/Kolkata
      'Asia/Calcutta': 'Asia/Kolkata',
      'America/Buenos_Aires': 'America/Argentina/Buenos_Aires',
    };
    SYSTEM_TIMEZONE = TZ_ALIASES[timezone] || timezone;
  }
  return SYSTEM_TIMEZONE;
};

/**
  @param date: Date object or epoch in source timezone
  @param srcTz: source timezone
  @param targetTz: target timezone
  This function is used to convert the time from one timezone to another timezone.
  Example use-case of this function
  Lets say you want to find out what time it will be in New York when it is 6th Nov, 2022 00:00 in Los Angeles.
  then you can call like:
  convertDateFromSrcTzToTargetTz(new Date('6 Nov 2022, 00:00'), "America/Los_Angeles", "America/New_York")
  this function will return 6 Nov 2022, 2:00 because generally NY is 3 hours ahead of LA but at 2:00AM NY will switch to DST
  and hence it will be not 3:00AM but 2:00AM.
*/
export const convertDateFromSrcTzToTargetTz = (
  date: Date | number,
  srcTz = getSystemTzName(),
  targetTz = getSystemTzName()
): number => +utcToZonedTime(zonedTimeToUtc(date, srcTz), targetTz);

/**
 * @param date Date object or epoch representing the date in particular timezone
 * @param timezone timezone of the date
 * @returns epoch of the same time in system timezone
 * Use case:
 * Lets say user selects 6 Nov 2022, 00:00 from Time range picker and selects New York timezone.
 * Now we want to find out what that time represents in our system timezone(Los Angeles) which in given case is 5 Nov 2022, 21:00
 */
export const convertDateFromTargetTzToSystemTz = (date: Date | number, timezone = getSystemTzName()): number =>
  convertDateFromSrcTzToTargetTz(date, timezone, getSystemTzName());

/**
 * @param date date in system timezone
 * @param timezone timezone in which you want to convert this date to
 * @returns date in that timezone
 * Use case:
 * User will come back with 5 Nov 2022, 21:00 but has selected new york timezone so we want to find out
 * what time it will be in new york when it is 5 Nov 2022, 21:00 in system timezone(Los Angeles), which is
 * 6 Nov 2022, 00:00
 */
export const convertDateFromSystemTzToTargetTz = (date: Date | number, timezone = getSystemTzName()): number =>
  convertDateFromSrcTzToTargetTz(date, getSystemTzName(), timezone);

/**
 * returns milliseconds offset from timezone name
 */
export const getTzOffset = (timezone: string, date?: Date | number): number => {
  const timezoneObject = findTimeZone(timezone);
  const zonedTime = getZonedTime(date ?? new Date(), timezoneObject);
  return (zonedTime.zone?.offset ?? 0) * 60 * 1000;
};

/**
 * @deprecated use convertDateFromTargetTzToSystemTz function to make sure you account for DST cases too
 * convert epoch from one timezone to another
 */
export const switchEpochTimezone = (
  date: Date | number,
  tzFrom = getSystemTzName(),
  tzTo = getSystemTzName()
): number => {
  const tzFromOffset = getTzOffset(tzFrom, date);
  const tzToOffset = getTzOffset(tzTo, date);
  const offset = tzToOffset - tzFromOffset;
  return +date + offset;
};

/**
 * Adds or subtract the offset according to timezone passed so that we can get correct start date and end date in that timezone.
 * ex. Lets say we are in Asia/Kolakata timezone on 19th Feb and time is 12:30 AM, and selected Asia/Kabul timezone and preset as Today.
 * Now in Asia/Kolkata timezone today implies 19th Feb. But for Asia/Kabul which is one hour behind Asia/Kolkata Today still implies 18th Feb.
 * So, this function will subtract that offset of 1 hour from current date so new time 11:30PM, with this time we can get correct value
 * of today, this week, etc preset.
 */
export const getDateForGivenTimezone = (timezone?: string): Date => {
  const nativeDate = new Date();
  if (!timezone) {
    return nativeDate;
  }
  const timezoneObject = findTimeZone(timezone);
  const { year, month, day, hours, minutes, seconds, milliseconds } = getZonedTime(nativeDate, timezoneObject);
  return new Date(year, month - 1, day, hours, minutes, seconds, milliseconds);
};

export const getDefaultTimeRangePresets = (locale: Locale): TimeRangePreset[] => {
  const switchTimezoneOfRange = (startDate: Date, endDate: Date, timezone?: string): [Date, Date] => [
    new Date(convertDateFromTargetTzToSystemTz(startDate, timezone)),
    new Date(convertDateFromTargetTzToSystemTz(endDate, timezone)),
  ];

  return [
    {
      id: 'TODAY',
      label: locale.timeRangePicker.today,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'YESTERDAY',
      label: locale.timeRangePicker.yesterday,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(startDate.getDate() - 1);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setHours(23, 59, 59, 999);
        endDate.setDate(endDate.getDate() - 1);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_1_HOUR',
      label: locale.timeRangePicker.lastOneHour,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(startDate.getHours() - 1);

        const endDate = getDateForGivenTimezone(timezone);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_12_HOURS',
      label: locale.timeRangePicker.lastTwelveHour,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(startDate.getHours() - 12);

        const endDate = getDateForGivenTimezone(timezone);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_24_HOURS',
      label: locale.timeRangePicker.lastTwentyFourHour,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(startDate.getHours() - 24);

        const endDate = getDateForGivenTimezone(timezone);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'THIS_WEEK',
      label: locale.timeRangePicker.thisWeek,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const date = getDateForGivenTimezone(timezone);
        // subtract day number from today's date will get us to Monday, subtract one more to get Sunday
        const firstday = date.getDate() - (date.getDay() - 1) - 1;
        const startDate = new Date(date.setDate(firstday));
        startDate.setHours(0, 0, 0, 0);

        const endDate = addDays(startDate, 6);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_WEEK',
      label: locale.timeRangePicker.lastWeek,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const date = getDateForGivenTimezone(timezone);
        // first get to monday and then subtract two more days to get the Saturday of previous week
        const lastday = date.getDate() - (date.getDay() - 1) - 2;
        const endDate = new Date(date.setDate(lastday));
        endDate.setHours(23, 59, 59, 999);

        const startDate = subDays(endDate, 6);
        startDate.setHours(0, 0, 0, 0);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_7_DAYS',
      label: locale.timeRangePicker.lastSevenDays,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(startDate.getDate() - 6);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'THIS_MONTH',
      label: locale.timeRangePicker.thisMonth,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const date = getDateForGivenTimezone(timezone);
        const startDate = new Date(date.getFullYear(), date.getMonth(), 1);
        startDate.setHours(0, 0, 0, 0);

        const zonedEndDate = getDateForGivenTimezone(timezone);
        const endDate = new Date(zonedEndDate.getFullYear(), zonedEndDate.getMonth() + 1, 0);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_MONTH',
      label: locale.timeRangePicker.lastMonth,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setDate(1);
        startDate.setMonth(startDate.getMonth() - 1);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_28_DAYS',
      label: locale.timeRangePicker.lastTwentyEightDays,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(startDate.getDate() - 27);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_30_DAYS',
      label: locale.timeRangePicker.lastThirtyDays,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(startDate.getDate() - 29);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_60_DAYS',
      label: locale.timeRangePicker.lastSixtyDays,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(startDate.getDate() - 59);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_90_DAYS',
      label: locale.timeRangePicker.lastNinetyDays,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(startDate.getDate() - 89);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_120_DAYS',
      label: locale.timeRangePicker.lastOneTwentyDays,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(startDate.getDate() - 119);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_180_DAYS',
      label: locale.timeRangePicker.lastOneEightyDays,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(startDate.getDate() - 179);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'THIS_YEAR',
      label: locale.timeRangePicker.thisYear,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const date = getDateForGivenTimezone(timezone);

        const startDate = new Date(date.getFullYear(), 0, 1);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(date.getFullYear(), 12, 0);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_YEAR',
      label: locale.timeRangePicker.lastYear,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const date = getDateForGivenTimezone(timezone);

        const startDate = new Date(date.getFullYear() - 1, 0, 1);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(date.getFullYear() - 1, 12, 0);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'LAST_365_DAYS',
      label: locale.timeRangePicker.lastThreeSixtyFiveDays,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);
        startDate.setDate(startDate.getDate() - 364);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'NEXT_7_DAYS',
      label: locale.timeRangePicker.nextSevenDays,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setDate(endDate.getDate() + 6);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'NEXT_14_DAYS',
      label: locale.timeRangePicker.nextFourteenDays,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setHours(0, 0, 0, 0);

        const endDate = getDateForGivenTimezone(timezone);
        endDate.setDate(endDate.getDate() + 13);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
    {
      id: 'NEXT_MONTH',
      label: locale.timeRangePicker.nextMonth,
      getTimeRangeLimits: (timezone): [Date, Date] => {
        const startDate = getDateForGivenTimezone(timezone);
        startDate.setDate(1);
        startDate.setMonth(startDate.getMonth() + 1);
        startDate.setHours(0, 0, 0, 0);

        const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
        endDate.setHours(23, 59, 59, 999);
        return switchTimezoneOfRange(startDate, endDate, timezone);
      },
    },
  ];
};

const formatSummaryForCompactVariant = ({
  isTimeRangeCustom,
  presetLabel,
  locale,
  date,
  adapter,
}: {
  isTimeRangeCustom: boolean;
  presetLabel: string;
  locale?: any;
  date: Date[];
  adapter: any;
}): string => {
  const dateHelpers = new DateHelpers(adapter);
  if (!isTimeRangeCustom) {
    return presetLabel;
  }
  if (date.length === 0) {
    return '';
  }
  if (date.length === 1) {
    return `${dateHelpers.formatDate(date[0], 'dd MMM ‘yy', locale)}`;
  }
  const startMonth = dateHelpers.getMonth(date[0]);
  const endMonth = dateHelpers.getMonth(date[1]);
  const startYear = dateHelpers.getYear(date[0]);
  const endYear = dateHelpers.getYear(date[1]);

  if (startYear !== endYear) {
    // Dec ‘21 - Feb ‘22
    return `${dateHelpers.formatDate(date[0], 'MMM ‘yy', locale)} – ${dateHelpers.formatDate(
      date[1],
      'MMM ‘yy',
      locale
    )}`;
  }
  if (startMonth === endMonth) {
    // if selected range is from 15-20 may of 2022, then
    // 15 - 20 May
    return `${dateHelpers.formatDate(date[0], 'dd')} – ${dateHelpers.formatDate(
      date[1],
      'dd'
    )} ${dateHelpers.formatDate(date[0], 'MMM', locale)}`;
  }

  // year and month both different
  // 13 Apr - 15 May
  return `${dateHelpers.formatDate(date[0], 'dd MMM', locale)} – ${dateHelpers.formatDate(date[1], 'dd MMM', locale)}`;
};

// eslint-disable-next-line max-statements
export const formatSummaryValue = ({
  date,
  presetId,
  presetLabel,
  timezone = getSystemTzName(),
  formatString = DEFAULT_FORMAT_STRING,
  showFullDateInSummary = false,
  showTimezoneInSummary = false,
  adapter = dateFnsAdapter,
  locale,
  hidePresetLabel = false,
  displayVariant = 'default',
}: FormatSummaryValueOptions): string => {
  const dateHelpers = new DateHelpers(adapter);
  const normalizedFormatString = normalizeDashes(formatString);

  const dateString = date.map(day => dateHelpers.formatDate(day, normalizedFormatString, locale)).join(' – ');

  const isTimeRangeCustom = presetId === CUSTOM_OPTION.id;

  // case to handle clearable, where date is empty array
  if (!dateString && isTimeRangeCustom) {
    return '';
  }

  let label = hidePresetLabel ? '' : presetLabel;

  if (displayVariant === 'compact') {
    return formatSummaryForCompactVariant({
      adapter,
      date,
      isTimeRangeCustom,
      presetLabel,
      locale,
    });
  }

  if ((isTimeRangeCustom || showFullDateInSummary) && dateString) {
    label = hidePresetLabel ? dateString : `${label}: ${dateString}`;
  }

  if (showTimezoneInSummary) {
    label = `${label} | ${timezone}`;
  }
  return label;
};

export const getHeight = ({ monthsShown, timeSelect }: { monthsShown?: number; timeSelect?: boolean }): number => {
  if (timeSelect && monthsShown === 1) {
    return CALENDAR_HEIGHT + 2 * TIME_SELECT_ROW_HEIGHT;
  }
  if (timeSelect) {
    return CALENDAR_HEIGHT + TIME_SELECT_ROW_HEIGHT;
  }
  return CALENDAR_HEIGHT;
};

const ERROR_FORMATE_DATE = 'dd MMM, yyyy hh:mm a';

export const getRangeError = ({
  maxDate,
  minDate,
  dateHelpers,
  timeRange,
  locale,
  preset,
}: {
  minDate?: Date | null;
  maxDate?: Date | null;
  dateHelpers: DateHelpers<Date>;
  timeRange: Date[];
  locale: Locale;
  preset?: string;
}): {
  hasError: boolean;
  errMsg?: string;
} => {
  if ((preset === 'CUSTOM' && timeRange.length !== 2) || typeof preset !== 'string') {
    return {
      hasError: true,
    };
  }
  const isValidTimeRange = isTimeInRange(timeRange, { minDate, maxDate, dateHelpers });
  if (isValidTimeRange) {
    return {
      hasError: false,
    };
  }

  if (minDate && maxDate) {
    return {
      hasError: true,
      errMsg: getInterpolatedString(locale.timeRangePicker.minMaxDateErrorMessage, {
        minDate: dateHelpers.formatDate(minDate, ERROR_FORMATE_DATE),
        maxDate: dateHelpers.formatDate(maxDate, ERROR_FORMATE_DATE),
      }),
    };
  }
  if (minDate) {
    return {
      hasError: true,
      errMsg: getInterpolatedString(locale.timeRangePicker.minDateErrorMessage, {
        minDate: dateHelpers.formatDate(minDate, ERROR_FORMATE_DATE),
      }),
    };
  }
  if (maxDate) {
    return {
      hasError: true,
      errMsg: getInterpolatedString(locale.timeRangePicker.maxDateErrorMessage, {
        maxDate: dateHelpers.formatDate(maxDate, ERROR_FORMATE_DATE),
      }),
    };
  }
  return {
    hasError: false,
  };
};
