import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import dateFnsAdapter from 'baseui/datepicker/utils/date-fns-adapter';
import { DEFAULT_LOCALE } from '../../locale';
import {
  formatSummaryValue,
  getRangeError,
  getTzOffset,
  convertDateFromSrcTzToTargetTz,
  convertDateFromSystemTzToTargetTz,
} from '../utils';

const JAN_15_2019 = new Date('Jan 15 2019');
const FEB_10_2019 = new Date('Feb 10 2019');
const DEFAULT_VALUE = [JAN_15_2019, FEB_10_2019];
const DEFAULT_FORMAT_STRING = 'dd MMM, yyyy';

describe('#convertDateFromSystemTzToTargetTz', () => {
  it('handles DST edge cases', () => {
    const dateInNY = convertDateFromSrcTzToTargetTz(
      new Date('6 Nov 2022, 00:00'),
      'America/Los_Angeles',
      'America/New_York'
    );
    expect(convertDateFromSystemTzToTargetTz(dateInNY, 'America/New_York')).toEqual(
      convertDateFromSystemTzToTargetTz(new Date('6 Nov 2022, 2:00'), 'America/New_York')
    );
  });
});

describe('#getTzOffset', () => {
  // https://greenwichmeantime.com/uk/london/time/
  // London is on Greenwich Mean Time (GMT) only during winter months.
  // When Daylight Saving Time starts, London and the whole of UK are on British Summer Time (BST), which is GMT+1.

  // Daylight Saving Time began: 28 March 2021 01:00 GMT. Clocks went forward one hour.
  // Daylight Saving Time ends: 31 October 2021 01:00 GMT. Clocks go back one hour.
  it('Returns GMT time with Europe/London timezone and in winter months', () => {
    expect(getTzOffset('Europe/London', new Date(2020, 1, 11))).toEqual(0);
  });
  it('Returns GMT+1 time with Europe/London timezone between 28 Mar to 31 Oct', () => {
    expect(getTzOffset('Europe/London', new Date(2020, 5, 11))).toEqual(-3600000);
  });
});

describe('#formatSummaryValue', () => {
  it('formats custom range correctly', () => {
    expect(
      formatSummaryValue({
        date: DEFAULT_VALUE,
        presetId: 'CUSTOM',
        presetLabel: 'Custom Range',
        formatString: DEFAULT_FORMAT_STRING,
      })
    ).toEqual('Custom Range: 15 Jan, 2019 – 10 Feb, 2019');
  });

  it('hides the preset label if hidePresetLabel is true', () => {
    expect(
      formatSummaryValue({
        date: DEFAULT_VALUE,
        presetId: 'CUSTOM',
        presetLabel: 'Custom Range',
        formatString: DEFAULT_FORMAT_STRING,
        hidePresetLabel: true,
      })
    ).toEqual('15 Jan, 2019 – 10 Feb, 2019');
  });

  it('formats today without date summary', () => {
    expect(
      formatSummaryValue({
        date: DEFAULT_VALUE,
        presetId: 'TODAY',
        presetLabel: 'Today',
        formatString: DEFAULT_FORMAT_STRING,
      })
    ).toEqual('Today');
  });

  it('formats today with date summary and timezone', () => {
    expect(
      formatSummaryValue({
        date: DEFAULT_VALUE,
        presetId: 'TODAY',
        presetLabel: 'Today',
        formatString: DEFAULT_FORMAT_STRING,
        showFullDateInSummary: true,
        showTimezoneInSummary: true,
        timezone: 'Asia/Kolkata',
      })
    ).toEqual('Today: 15 Jan, 2019 – 10 Feb, 2019 | Asia/Kolkata');
  });

  it('returns lifetime string if date is empty array and range is not custom', () => {
    expect(
      formatSummaryValue({
        date: [],
        presetId: 'LIFETIME',
        presetLabel: 'Lifetime',
        formatString: DEFAULT_FORMAT_STRING,
        showFullDateInSummary: true,
        showTimezoneInSummary: true,
        timezone: 'Asia/Kolkata',
      })
    ).toEqual('Lifetime | Asia/Kolkata');
  });

  it('returns empty string if date is empty array and range is not custom (edge case of clearable)', () => {
    expect(
      formatSummaryValue({
        date: [],
        presetId: 'CUSTOM',
        presetLabel: 'Custom Range',
        formatString: DEFAULT_FORMAT_STRING,
        showFullDateInSummary: true,
        showTimezoneInSummary: true,
      })
    ).toEqual('');
  });

  it('returns preset if variant is compact and preset is selected', () => {
    expect(
      formatSummaryValue({
        date: DEFAULT_VALUE,
        presetId: 'TODAY',
        presetLabel: 'Today',
        displayVariant: 'compact',
      })
    ).toEqual('Today');
  });

  it('formats the custom date with different year', () => {
    expect(
      formatSummaryValue({
        date: [new Date('12 Dec 21'), new Date('1 Jan 22')],
        presetId: 'CUSTOM',
        presetLabel: 'Custom Range',
        displayVariant: 'compact',
      })
    ).toEqual('Dec ‘21 – Jan ‘22');
  });

  it('formats the custom date with same year, different month', () => {
    expect(
      formatSummaryValue({
        date: [new Date('4 Apr 22'), new Date('13 may 22')],
        presetId: 'CUSTOM',
        presetLabel: 'Custom Range',
        displayVariant: 'compact',
      })
    ).toEqual('04 Apr – 13 May');
  });

  it('formats the custom date with same year and same month', () => {
    expect(
      formatSummaryValue({
        date: [new Date('4 Apr 22'), new Date('13 apr 22')],
        presetId: 'CUSTOM',
        presetLabel: 'Custom Range',
        displayVariant: 'compact',
      })
    ).toEqual('04 – 13 Apr');
  });
});

describe('#getRangeError', () => {
  const dateHelpers = new DateHelpers<Date>(dateFnsAdapter);
  test('error message with both min and max date violation', () => {
    expect(
      getRangeError({
        dateHelpers,
        minDate: new Date('1 Aug, 2022'),
        maxDate: new Date('31 Aug, 2022'),
        timeRange: [new Date('1 July 2022'), new Date('16 Aug 2022')],
        locale: DEFAULT_LOCALE,
        preset: 'CUSTOM',
      })
    ).toMatchInlineSnapshot(`
      Object {
        "errMsg": "Please select a date range between 01 Aug, 2022 12:00 AM & 31 Aug, 2022 12:00 AM",
        "hasError": true,
      }
    `);
  });
  test('error message with min date violation', () => {
    expect(
      getRangeError({
        dateHelpers,
        minDate: new Date('1 Aug, 2022'),
        timeRange: [new Date('1 July 2022'), new Date('16 Aug 2022')],
        locale: DEFAULT_LOCALE,
        preset: 'CUSTOM',
      })
    ).toMatchInlineSnapshot(`
      Object {
        "errMsg": "Please select a date later than 01 Aug, 2022 12:00 AM",
        "hasError": true,
      }
      `);
  });
  test('error message with max date violation', () => {
    expect(
      getRangeError({
        dateHelpers,
        maxDate: new Date('1 Aug, 2022'),
        timeRange: [new Date('1 July 2022'), new Date('16 Aug 2022')],
        locale: DEFAULT_LOCALE,
        preset: 'CUSTOM',
      })
    ).toMatchInlineSnapshot(`
      Object {
        "errMsg": "Please select a date earlier than 01 Aug, 2022 12:00 AM",
        "hasError": true,
      }
    `);
  });
  test('does not return message when time range is not selected yet', () => {
    expect(
      getRangeError({
        dateHelpers,
        maxDate: new Date('1 Aug, 2022'),
        timeRange: [new Date('1 July 2022')],
        locale: DEFAULT_LOCALE,
      })
    ).toMatchInlineSnapshot(`
      Object {
        "hasError": true,
      }
    `);
  });
  test('return has error false when all conditions are met', () => {
    expect(
      getRangeError({
        dateHelpers,
        maxDate: new Date('1 Aug, 2022'),
        minDate: new Date('1 Jun, 2022'),
        timeRange: [new Date('1 July 2022'), new Date('12 July, 2022')],
        locale: DEFAULT_LOCALE,
        preset: 'CUSTOM',
      })
    ).toMatchInlineSnapshot(`
      Object {
        "hasError": false,
      }
    `);
  });
  test('return has error false when no constrains are provided', () => {
    expect(
      getRangeError({
        dateHelpers,
        timeRange: [new Date('1 July 2022'), new Date('12 July, 2022')],
        locale: DEFAULT_LOCALE,
        preset: 'CUSTOM',
      })
    ).toMatchInlineSnapshot(`
      Object {
        "hasError": false,
      }
      `);
  });
  test('return has error false when preset is not custom and two dates are not selected', () => {
    expect(
      getRangeError({
        dateHelpers,
        maxDate: new Date('1 Aug, 2022'),
        minDate: new Date('1 Jun, 2022'),
        timeRange: [],
        locale: DEFAULT_LOCALE,
        preset: 'LIFETIME',
      })
    ).toMatchInlineSnapshot(`
      Object {
        "hasError": false,
      }
    `);
  });
  test('return has error true when preset is custom and two dates are not selected', () => {
    expect(
      getRangeError({
        dateHelpers,
        maxDate: new Date('1 Aug, 2022'),
        minDate: new Date('1 Jun, 2022'),
        timeRange: [],
        locale: DEFAULT_LOCALE,
        preset: 'CUSTOM',
      })
    ).toMatchInlineSnapshot(`
      Object {
        "hasError": true,
      }
    `);
  });
});
