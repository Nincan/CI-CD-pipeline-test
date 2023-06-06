import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import { formatDate, getAriaLabel, normalizeDashes, isTimeInRange, isDayInRange } from '../utils';

const minDate = new Date(1547490600000); //Jan 15 2019 00:00:00 GMT+0530 (India Standard Time)
const maxDate = new Date(1549737000000); //Feb 10 2019 00:00:00 GMT+0530 (India Standard Time)

describe('normalizeDashes', () => {
  it('repalces all em-dashes with en-dashes', () => {
    expect(normalizeDashes('yyyy-MM-dd')).toEqual('yyyy–MM–dd');
  });
});

describe('getAriaLabel', () => {
  const formatDisplayValue = jest.fn(date => `${date.getFullYear()} ${date.getMonth()} ${date.getDate()}`);
  beforeEach(() => jest.clearAllMocks());
  it('returns aria label for no date selected', () => {
    // date picker when no date is selected
    expect(getAriaLabel(undefined, formatDisplayValue, {} as any)).toEqual('');

    // in case of range picker where no date is selected
    expect(getAriaLabel([], formatDisplayValue, {} as any)).toEqual('');
  });

  it('returns aria label for date selected in non-range picker', () => {
    expect(
      getAriaLabel(new Date(2000, 11, 10), formatDisplayValue, {
        // eslint-disable-next-line no-template-curly-in-string
        timeRangePicker: { selectedDate: 'Selected date is ${date}.' },
      } as any)
    ).toEqual('Selected date is 2000 11 10.');

    expect(formatDisplayValue).toHaveBeenCalledTimes(1);
  });

  it('returns aria label when start and end date is selected in range picker', () => {
    expect(
      getAriaLabel([new Date(2000, 11, 10), new Date(2000, 11, 10)], formatDisplayValue, {
        // eslint-disable-next-line no-template-curly-in-string
        timeRangePicker: { selectedDateRange: 'Selected date range is from ${startDate} to ${endDate}.' },
      } as any)
    ).toEqual('Selected date range is from 2000 11 10 to 2000 11 10.');

    expect(formatDisplayValue).toHaveBeenCalledTimes(2);
  });

  it('returns aria-label when only start date is selected for range picker', () => {
    expect(
      getAriaLabel([new Date(2000, 11, 10)], formatDisplayValue, {
        timeRangePicker: {
          // eslint-disable-next-line no-template-curly-in-string
          selectedDate: 'Selected date is ${date}.',
          selectSecondDatePrompt: 'Select the second date.',
        },
      } as any)
    ).toEqual('Selected date is 2000 11 10. Select the second date.');

    expect(formatDisplayValue).toHaveBeenCalledTimes(1);
  });
});

describe('formatDate', () => {
  const formatString = 'dd/MM/yy';
  const dateHelpers: DateHelpers<Date> = {
    format: jest.fn(
      dateToFormat => `${dateToFormat.getFullYear()} ${dateToFormat.getMonth()} ${dateToFormat.getDate()}`
    ),
    formatDate: jest.fn(
      dateToFormat => `${dateToFormat.getFullYear()} ${dateToFormat.getMonth()} ${dateToFormat.getDate()}`
    ),
  } as unknown as DateHelpers<Date>;
  const locale = {};

  beforeEach(() => jest.clearAllMocks());
  it('returns empty date when no date is passed', () => {
    expect(formatDate({ date: undefined, formatString, locale, dateHelpers })).toEqual('');
  });

  it('return empty date when empty array is passed', () => {
    expect(formatDate({ date: [], formatString, locale, dateHelpers })).toEqual('');
  });

  it('returns formatted date when array is passed as date', () => {
    expect(
      formatDate({ date: [new Date(2000, 11, 11), new Date(2000, 11, 12)], formatString, locale, dateHelpers })
    ).toEqual('2000 11 11 – 2000 11 12');
    expect(dateHelpers.formatDate).toHaveBeenCalledTimes(2);
    expect(dateHelpers.formatDate).toHaveBeenNthCalledWith(1, expect.any(Date), formatString, {});
    expect(dateHelpers.formatDate).toHaveBeenNthCalledWith(2, expect.any(Date), formatString, {});
  });

  it('returns formatted date when direct date is not array', () => {
    expect(formatDate({ date: new Date(2000, 11, 11), formatString, locale, dateHelpers })).toEqual('2000 11 11');

    expect(dateHelpers.formatDate).toHaveBeenCalledTimes(1);
    expect(dateHelpers.formatDate).toHaveBeenCalledWith(expect.any(Date), formatString, {});
  });
});

describe('isTimeInRange', () => {
  it('returns true when date is undefined', () => {
    expect(isTimeInRange(undefined, { minDate, maxDate })).toBe(true);
  });

  it('returns true when minDate, maxDate are undefined', () => {
    const date = new Date((minDate.getTime() + maxDate.getTime()) / 2);
    expect(isTimeInRange(date, {})).toBe(true);
  });

  it('returns true when date(both day & time) is in [minDate, maxDate]', () => {
    const date = new Date((minDate.getTime() + maxDate.getTime()) / 2);
    expect(isTimeInRange(date, { minDate, maxDate })).toBe(true);
  });

  it('returns false when date(either day or time) violates [minDate, maxDate]', () => {
    const date = new Date(maxDate.getTime() + 100);
    expect(isTimeInRange(date, { minDate, maxDate })).toBe(false);
  });

  it('returns true when all dates in date array are in [minDate, maxDate]', () => {
    const dates = [
      new Date(minDate.getTime() + (maxDate.getTime() - minDate.getTime()) / 3),
      new Date(minDate.getTime() + (2 * (maxDate.getTime() - minDate.getTime())) / 3),
    ];
    expect(isTimeInRange(dates, { minDate, maxDate })).toBe(true);
  });

  it('returns false if any of the dates in date array violate [minDate, maxDate]', () => {
    const dates = [
      new Date(maxDate.getTime() + 100),
      new Date(minDate.getTime() + (maxDate.getTime() - minDate.getTime()) / 3),
    ];
    expect(isTimeInRange(dates, { minDate, maxDate })).toBe(false);
  });
});

describe('isDayInRange', () => {
  it('returns true when date is undefined', () => {
    expect(isDayInRange(undefined, { minDate, maxDate })).toBe(true);
  });

  it('returns true when minDate, maxDate are undefined', () => {
    const date = new Date((minDate.getTime() + maxDate.getTime()) / 2);
    expect(isDayInRange(date, {})).toBe(true);
  });

  it('returns true when date(only day, not time) is in [minDate, maxDate]', () => {
    const date = new Date(maxDate.getTime() + 100);
    expect(isDayInRange(date, { minDate, maxDate })).toBe(true);
  });

  it('returns false when date(only day) violates [minDate, maxDate]', () => {
    const date = new Date(maxDate.getTime() + 24 * 60 * 60 * 1000);
    expect(isDayInRange(date, { minDate, maxDate })).toBe(false);
  });

  it('returns true when all dates(only day) in date array are in [minDate, maxDate]', () => {
    const dates = [new Date((minDate.getTime() + maxDate.getTime()) / 2), new Date(maxDate.getTime() + 100)];
    expect(isDayInRange(dates, { minDate, maxDate })).toBe(true);
  });

  it('returns false if any of the dates(only day) in date array violate [minDate, maxDate]', () => {
    const dates = [new Date(maxDate.getTime() + 24 * 60 * 60 * 1000), new Date(maxDate.getTime() + 100)];
    expect(isDayInRange(dates, { minDate, maxDate })).toBe(false);
  });
});
