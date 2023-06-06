/* eslint-disable max-statements  */
import React from 'react';
import { cleanup, render, screen, fireEvent, getByLabelText } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { fr } from 'date-fns/locale/index';
import userEvent from '@testing-library/user-event';

import { TestProvider } from '../../test-utils/test-provider';
import { TimeRangePicker } from '../TimeRangePicker';
import { getSelectedOptions } from '../../select/utils/test-utils';

const onChangeMock = jest.fn();
const onSubmitMock = jest.fn();
const windowMatchMediaMock = jest.fn(() => ({
  matches: false,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));
// @ts-ignore
window.matchMedia = windowMatchMediaMock;

const JAN_15_2019_SOD = new Date(1547490600000); //Jan 15 2019 00:00:00 GMT+0530 (India Standard Time)
const JAN_15_2019_1_AM = new Date(1547494200000); //Jan 15 2019 01:00:00 GMT+0530 (India Standard Time)
const FEB_10_2019_EOD = new Date(1549823399999); //Feb 10 2019 23:59:59 GMT+0530 (India Standard Time
const JAN_15_2019_SOD_DHAKA_ADAPTED = new Date(1547488800000);
const FEB_10_2019_EOD_DHAKA_ADAPTED = new Date(1549821599999);
const JAN_15_2019_EOD = new Date(1547576999999);
const DEFAULT_VALUE = [JAN_15_2019_SOD, FEB_10_2019_EOD];

// DST Edge case checking
const NOV_6_2022_4_30_AM = new Date(1667689200000); // Nov 6 2022 04:30:00 GMT+0530 (India Standard Time)
const NOV_6_2022_5_30_AM = new Date(1667692800000); // Nov 6 2022 05:30:00 GMT+0530 (India Standard Time)
const NOV_6_2022_4_30_AM_NY_ADAPTED = new Date(1667727000000);
const NOV_6_2022_5_30_AM_NY_ADAPTED = new Date(1667730600000);

const getTimeRangeLimits = jest.fn(() => DEFAULT_VALUE);
const timeRangePresets = [
  {
    id: 'TODAY',
    label: 'Today',
    getTimeRangeLimits,
  },
];

const checkDates = (startDateString: string, endDateString: string): void => {
  const startDate = startDateString.split(' ');
  const endDate = endDateString.split(' ');

  const startDateInput = screen.getAllByTestId('date-spin-input')[0];
  const startMonthInput = screen.getAllByTestId('month-spin-input')[0];
  const startYearInput = screen.getAllByTestId('year-spin-input')[0];
  const endDateInput = screen.getAllByTestId('date-spin-input')[1];
  const endMonthInput = screen.getAllByTestId('month-spin-input')[1];
  const endYearInput = screen.getAllByTestId('year-spin-input')[1];
  expect((startDateInput as HTMLInputElement).value).toEqual(startDate[0]);
  expect((startMonthInput as HTMLInputElement).value).toEqual(startDate[1]);
  expect((startYearInput as HTMLInputElement).value).toEqual(startDate[2]);
  expect((endDateInput as HTMLInputElement).value).toEqual(endDate[0]);
  expect((endMonthInput as HTMLInputElement).value).toEqual(endDate[1]);
  expect((endYearInput as HTMLInputElement).value).toEqual(endDate[2]);
};

const setup = (props = {}): void => {
  render(
    <TestProvider>
      <TimeRangePicker timezone="Asia/Kolkata" onChange={onChangeMock} onSubmit={onSubmitMock} timeSelect {...props} />
    </TestProvider>
  );
  const timeRangePickerInput = screen.getByLabelText(/select a time range./i);
  const randomInteger = Math.random();
  // this is to make sure that it is possible to open time range picker by all three means,
  // pressing down arrow key, enter key or by directly clicking on input
  if (randomInteger < 0.33) {
    fireEvent.keyDown(timeRangePickerInput, { key: 'ArrowDown', code: 'ArrowDown' });
  } else if (randomInteger < 0.66) {
    fireEvent.keyDown(timeRangePickerInput, { key: 'Enter', code: 'Enter' });
  } else {
    userEvent.click(timeRangePickerInput);
  }
};

const searchTimezone = (timezone: string): void => {
  userEvent.type(screen.getByPlaceholderText(/Search/), timezone);
};

describe('Time Range Picker', function () {
  afterEach(cleanup);
  beforeEach(() => jest.clearAllMocks());

  test('handles DST cases', () => {
    const oldTimezone = /asia\/kolkata/i;
    const newTimezone = /america\/new york/i;
    setup({ value: [NOV_6_2022_4_30_AM, NOV_6_2022_5_30_AM] });

    const selectedTimezone = screen.getByText(oldTimezone);
    userEvent.click(selectedTimezone);

    // should render new timezone
    searchTimezone('america/new york');
    userEvent.click(screen.getByText(newTimezone));
    expect(screen.queryByText(oldTimezone)).toBeNull();
    // screen.logTestingPlaygroundURL();

    userEvent.click(screen.getByText(/save/i));

    expect(onSubmitMock).toBeCalledTimes(1);
    expect(onSubmitMock).toBeCalledWith({
      preset: 'CUSTOM',
      date: [new Date(NOV_6_2022_4_30_AM_NY_ADAPTED), new Date(NOV_6_2022_5_30_AM_NY_ADAPTED)],
      value: [new Date(NOV_6_2022_4_30_AM_NY_ADAPTED), new Date(NOV_6_2022_5_30_AM_NY_ADAPTED)],
      timezone: 'America/New_York',
    });
  });

  test('renders the week from weekStartsOn prop', () => {
    setup({ weekStartsOn: 1, value: DEFAULT_VALUE, monthsShown: 1 });
    const weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const renderedWeekDayHeaders = screen.getAllByTestId('week-day-header');

    renderedWeekDayHeaders.forEach((weekDayHeaderNode, index) => {
      expect(weekDayHeaderNode.textContent).toBe(weekDays[index]);
    });
  });

  test('retains time on changing start date', () => {
    setup({ value: DEFAULT_VALUE });

    // select start time
    const startTimeContainer = screen.getAllByTestId('time-input-container')[0];
    const startTime = screen.getAllByTestId('time-input')[0];
    userEvent.type(startTime, '11:45');
    userEvent.click(screen.getByText(/11:45 PM/i));

    expect(getSelectedOptions(startTimeContainer)).toEqual(['11:45 PM']);
    // change date from calendar
    userEvent.click(screen.getAllByText('5')[0]);
    userEvent.click(screen.getAllByText('25')[0]);

    // should retain start date selected earlier
    expect(getSelectedOptions(startTimeContainer)).toEqual(['11:45 PM']);
  });

  test('does not pass timezone when disable timezone is true', () => {
    setup({ value: DEFAULT_VALUE, disableTimezone: true, timezone: undefined });

    expect(screen.queryByTestId('time-zone-picker')).toBeNull();

    // select start date
    userEvent.click(screen.getAllByText('15')[0]);
    expect(onChangeMock).toBeCalledWith({
      value: [expect.any(Date)],
      preset: 'CUSTOM',
      date: [expect.any(Date)],
    });

    // select end date
    userEvent.click(screen.getAllByText('10')[1]);
    expect(onChangeMock).toBeCalledWith({
      value: [expect.any(Date), expect.any(Date)],
      preset: 'CUSTOM',
      date: [expect.any(Date), expect.any(Date)],
    });

    // save the range
    userEvent.click(screen.getByText(/save/i));
    expect(onSubmitMock).toHaveBeenCalledWith({
      preset: 'CUSTOM',
      date: [expect.any(Date), expect.any(Date)],
      value: [expect.any(Date), expect.any(Date)],
    });
  });

  test('retains start time when start time is changed after selecting start date and before end date', () => {
    const NEW_START_TIME = new Date(JAN_15_2019_EOD.getTime() - 14 * 60 * 1000 - 59 * 1000 - 999);
    setup({ value: DEFAULT_VALUE });

    // select start date
    userEvent.click(screen.getAllByText('15')[0]);

    // select start time
    const startTimeContainer = screen.getAllByTestId('time-input-container')[0];
    const startTime = screen.getAllByTestId('time-input')[0];
    userEvent.type(startTime, '11:45');
    userEvent.click(screen.getByText(/11:45 pm/i));

    expect(getSelectedOptions(startTimeContainer)).toEqual(['11:45 PM']);

    // select end date
    userEvent.click(screen.getAllByText('10')[1]);

    // should retain start date selected earlier
    expect(getSelectedOptions(startTimeContainer)).toEqual(['11:45 PM']);

    userEvent.click(screen.getByText(/save/i));

    expect(onSubmitMock).toHaveBeenCalledWith({
      timezone: 'Asia/Kolkata',
      preset: 'CUSTOM',
      date: [NEW_START_TIME, FEB_10_2019_EOD],
      value: [NEW_START_TIME, FEB_10_2019_EOD],
    });
  });

  test('resets time on changing start date when time select is false', () => {
    setup({ value: [JAN_15_2019_1_AM, FEB_10_2019_EOD], timeSelect: false });

    // change date from calendar
    userEvent.click(screen.getAllByText('15')[0]);
    userEvent.click(screen.getAllByText('10')[1]);

    userEvent.click(screen.getByText(/save/i));

    expect(onSubmitMock).toHaveBeenCalledWith({
      timezone: 'Asia/Kolkata',
      preset: 'CUSTOM',
      date: [JAN_15_2019_SOD, FEB_10_2019_EOD],
      value: [JAN_15_2019_SOD, FEB_10_2019_EOD],
    });
  });

  test('selects end date same as start date and applies selected time to that date on selecting end time without selecting end date', () => {
    const NEW_END_TIME = new Date(JAN_15_2019_EOD.getTime() - 14 * 60 * 1000);
    setup({ value: [JAN_15_2019_SOD] });

    const endTimeContainer = screen.getAllByTestId('time-input-container')[1];
    const endTime = screen.getAllByTestId('time-input')[1];

    userEvent.type(endTime, '11:45');
    userEvent.click(screen.getByText(/11:45 pm/i));

    checkDates('15 Jan 2019', '15 Jan 2019');
    expect(getSelectedOptions(endTimeContainer)).toEqual(['11:45 PM']);

    userEvent.click(screen.getByText(/save/i));

    expect(onSubmitMock).toHaveBeenCalledWith({
      timezone: 'Asia/Kolkata',
      preset: 'CUSTOM',
      date: [JAN_15_2019_SOD, NEW_END_TIME],
      value: [JAN_15_2019_SOD, NEW_END_TIME],
    });
  });

  test('selects start of day as start time and selected time as end time on directly selecting end time without selecting start date', () => {
    setup({ value: [] });

    const startTimeContainer = screen.getAllByTestId('time-input-container')[0];
    const endTimeContainer = screen.getAllByTestId('time-input-container')[1];
    const endTime = screen.getAllByTestId('time-input')[1];

    userEvent.type(endTime, '11:45');
    userEvent.click(screen.getByText(/11:45 pm/i));

    expect(getSelectedOptions(endTimeContainer)).toEqual(['11:45 PM']);
    expect(getSelectedOptions(startTimeContainer)).toEqual(['12:00 AM']);
  });

  test('on selecting date from calendar we should get end date with 59s, 999ms', () => {
    setup({ value: DEFAULT_VALUE });

    // click 15 date from calendar
    userEvent.click(screen.getAllByText('15')[0]);
    userEvent.click(screen.getAllByText('15')[0]);

    expect(onChangeMock).toBeCalledTimes(2);

    userEvent.click(screen.getByText(/save/i));

    expect(onSubmitMock).toHaveBeenCalledWith({
      timezone: 'Asia/Kolkata',
      preset: 'CUSTOM',
      date: [JAN_15_2019_SOD, JAN_15_2019_EOD],
      value: [JAN_15_2019_SOD, JAN_15_2019_EOD],
    });
  });

  test('on selecting time from time picker , we should get end date with 59s, 999ms', () => {
    setup({ value: DEFAULT_VALUE });
    const NEW_END_TIME = new Date(FEB_10_2019_EOD.getTime() - 14 * 60 * 1000);

    const endTime = screen.getAllByTestId('time-input')[1];

    userEvent.type(endTime, '11:45');
    userEvent.click(screen.getByText(/11:45 pm/i));

    userEvent.click(screen.getByText(/save/i));

    expect(onSubmitMock).toHaveBeenCalledWith({
      timezone: 'Asia/Kolkata',
      preset: 'CUSTOM',
      date: [JAN_15_2019_SOD, NEW_END_TIME],
      value: [JAN_15_2019_SOD, NEW_END_TIME],
    });
  });

  test('Allows to select time such that start date becomes greater than end date and adapts the corresponding dates accordingly', () => {
    setup({ value: [JAN_15_2019_SOD, JAN_15_2019_SOD] });

    const END_TIME_OFFSET = 11 * 60 * 60 * 1000 + 59 * 1000 + 999; // start time is 12:00 am and we are selecting 11:00AM so adding that ms
    const NEW_END_TIME = new Date(JAN_15_2019_SOD.getTime() + END_TIME_OFFSET);

    const startTimeContainer = screen.getAllByTestId('time-input-container')[0];
    const endTimeContainer = screen.getAllByTestId('time-input-container')[1];
    const startTimeInput = screen.getAllByTestId('time-input')[0];

    // selecting start time greater then end time so, should make end time===start time
    userEvent.type(startTimeInput, '11:15');
    userEvent.click(screen.getByText(/11:15 am/i));
    expect(getSelectedOptions(startTimeContainer)).toEqual(['11:15 AM']);
    expect(getSelectedOptions(endTimeContainer)).toEqual(['11:15 AM']);

    // now selecting end time less then start time, so it should make start time===end time
    const endTimeInput = screen.getAllByTestId('time-input')[1];
    userEvent.type(endTimeInput, '11:00');
    userEvent.click(screen.getByText(/11:00 am/i));
    expect(getSelectedOptions(startTimeContainer)).toEqual(['11:00 AM']);
    expect(getSelectedOptions(endTimeContainer)).toEqual(['11:00 AM']);

    expect(onChangeMock).toBeCalledTimes(2);

    userEvent.click(screen.getByText(/save/i));
    expect(onSubmitMock).toBeCalledWith({
      preset: 'CUSTOM',
      timezone: 'Asia/Kolkata',
      date: [NEW_END_TIME, NEW_END_TIME],
      value: [NEW_END_TIME, NEW_END_TIME],
    });
  });

  test('Does not call onChange function when selecting date less then min date or greater then max date', () => {
    setup({ value: DEFAULT_VALUE, minDate: new Date(2019, 0, 10), maxDate: new Date(2019, 1, 15) });
    userEvent.click(screen.getAllByText('9')[0]);
    expect(onChangeMock).not.toBeCalled();

    userEvent.click(screen.getAllByText('16')[1]);
    expect(onChangeMock).not.toBeCalled();
  });

  test('shows error on selecting preset that violates the minmax condition', () => {
    setup({ value: DEFAULT_VALUE, minDate: new Date(2019, 0, 20), timeRangePresets });
    userEvent.click(screen.getByText('Today'));

    expect(
      screen
        .getByRole('option', {
          name: 'Today',
        })
        .getAttribute('aria-selected')
    ).toBeTruthy();
    expect(screen.getByText('Save').getAttribute('disabled')).not.toBeNull();
  });

  test('Does not fail when start date and end date is from the same date with milliseconds of start date greater then end date', () => {
    //start date - Jan, 15 2019 00:00:00:20
    // end date- Jan, 15 2019 00:03:00:00
    // So, range is valid but ms of start date(20ms) is greater then end date(0ms).
    const hourLimit = jest.fn(() => [new Date(1547490600020), new Date(1547490780000)]);
    setup({
      value: DEFAULT_VALUE,
      timeRangePresets: [
        {
          id: 'LAST_1_HOUR',
          label: 'Last 1 Hour',
          getTimeRangeLimits: hourLimit,
        },
      ],
    });

    userEvent.click(screen.getByText('Last 1 Hour'));
    // make sure that presets with limits on the same day but differing only in milliseconds does not break our picker
    expect(hourLimit).toBeCalledTimes(1);
    expect(
      screen
        .getByRole('option', {
          name: 'Last 1 Hour',
        })
        .getAttribute('aria-selected')
    ).toBeTruthy();
  });

  test('Shows timezone in summary when showTimezoneInSummary flag is true', () => {
    setup({ showTimezoneInSummary: true, value: DEFAULT_VALUE });
    const timeRangePickerInput = screen.getByRole('textbox', {
      name: /select a time range\./i,
    });
    expect((timeRangePickerInput as HTMLInputElement).value).toEqual(
      'Custom Range: 01/15/2019 – 02/10/2019 | Asia/Kolkata'
    );
  });

  test('handles space replacement correctly in formatString', () => {
    setup({ showTimezoneInSummary: true, value: DEFAULT_VALUE, formatString: 'dd MM yyyy' });
    const timeRangePickerInput = screen.getByRole('textbox', {
      name: /select a time range\./i,
    });
    expect((timeRangePickerInput as HTMLInputElement).value).toEqual(
      'Custom Range: 15 01 2019 – 10 02 2019 | Asia/Kolkata'
    );
  });

  test('returns correct date on submitting without switching timezone', () => {
    setup({ value: DEFAULT_VALUE });

    userEvent.click(screen.getAllByText('15')[0]);
    userEvent.click(screen.getAllByText('10')[1]);
    userEvent.click(screen.getByText(/save/i));
    expect(onSubmitMock).toBeCalledWith({
      preset: 'CUSTOM',
      date: DEFAULT_VALUE,
      value: DEFAULT_VALUE,
      timezone: 'Asia/Kolkata',
    });
  });

  test('Updates timezone in header on selecting new timezone and returns timezone adapted date', async () => {
    setup({ value: DEFAULT_VALUE });
    const oldTimezone = /asia\/kolkata/i;
    const newTimezone = /asia\/dhaka/i;

    // check that passed timezone is rendered and click it
    const selectedTimezone = screen.getByText(oldTimezone);
    userEvent.click(selectedTimezone);

    // should render new timezone
    searchTimezone('asia/dhaka');
    userEvent.click(screen.getByText(newTimezone));
    expect(screen.queryByText(oldTimezone)).toBeNull();
    screen.getByText(newTimezone);

    // press submit
    userEvent.click(screen.getByText(/save/i));
    expect(onSubmitMock).toBeCalledTimes(1);
    expect(onSubmitMock).toBeCalledWith({
      preset: 'CUSTOM',
      date: [new Date(JAN_15_2019_SOD_DHAKA_ADAPTED), new Date(FEB_10_2019_EOD_DHAKA_ADAPTED)],
      value: [new Date(JAN_15_2019_SOD_DHAKA_ADAPTED), new Date(FEB_10_2019_EOD_DHAKA_ADAPTED)],
      timezone: 'Asia/Dhaka',
    });
  });

  test('calls onChange function on selecting date from calendar', () => {
    setup({ value: DEFAULT_VALUE });

    userEvent.click(screen.getAllByText('15')[0]);
    expect(onChangeMock).toBeCalledTimes(1);
    expect(onChangeMock).toBeCalledWith({
      value: [expect.any(Date)],
      preset: 'CUSTOM',
      date: [expect.any(Date)],
      timezone: 'Asia/Kolkata',
    });
  });

  test('calls getimeRangeLimit of the selected preset with passed timezone', () => {
    setup({ value: DEFAULT_VALUE, timeRangePresets });

    // Checks that preset is renderer
    screen.getByText('Today');

    // click Today from timeRangePresets
    userEvent.click(screen.getByText('Today'));
    expect(onChangeMock).toBeCalledTimes(1);

    // click save button
    userEvent.click(screen.getByText(/save/i));

    // first when we select the preset and 2nd time when we save the time range.
    expect(getTimeRangeLimits).toBeCalledTimes(2);
    expect(getTimeRangeLimits).toHaveBeenNthCalledWith(1);
    expect(getTimeRangeLimits).toHaveBeenNthCalledWith(2, 'Asia/Kolkata');
    expect(onSubmitMock).toBeCalledTimes(1);
    expect(onSubmitMock).toBeCalledWith({
      value: 'TODAY',
      timezone: 'Asia/Kolkata',
      preset: 'TODAY',
      date: DEFAULT_VALUE,
    });
  });

  test('calls getimeRangeLimit of the selected preset with changed timezone', async () => {
    setup({ value: 'TODAY', timeRangePresets });

    // Checks that preset is renderer
    expect(screen.getAllByText('Today')).toHaveLength(2);

    // select new timezone
    userEvent.click(screen.getByText(/asia\/kolkata/i));
    searchTimezone('america/chicago');
    userEvent.click(screen.getByText(/america\/chicago/i));

    // click save button
    userEvent.click(screen.getByText(/save/i));

    // 1st time to findout timerange from preset, 2nd time when we save
    expect(getTimeRangeLimits).toBeCalledTimes(2);
    expect(getTimeRangeLimits).toHaveBeenNthCalledWith(1, 'Asia/Kolkata');
    expect(getTimeRangeLimits).toHaveBeenNthCalledWith(2, 'America/Chicago');
    expect(onSubmitMock).toBeCalledTimes(1);
    expect(onSubmitMock).toBeCalledWith({
      value: 'TODAY',
      timezone: 'America/Chicago',
      preset: 'TODAY',
      date: DEFAULT_VALUE,
    });
  });

  test('calls onChange function on selecting from default presets list and mark Today preset as selected', () => {
    setup();
    userEvent.click(screen.getByText('Today'));
    expect(
      screen
        .getByRole('option', {
          name: 'Today',
        })
        .getAttribute('aria-selected')
    ).toBeTruthy();
    expect(onChangeMock).toBeCalledTimes(1);
    expect(onChangeMock).toBeCalledWith({
      value: 'TODAY',
      preset: 'TODAY',
      date: [expect.any(Date), expect.any(Date)],
      timezone: 'Asia/Kolkata',
    });
  });

  test('renders time range picker', () => {
    setup({ value: 'TODAY' });
    screen.getByText('Date Range');

    // Today should be already selected
    expect(
      screen
        .getByRole('option', {
          name: 'Today',
        })
        .getAttribute('aria-selected')
    ).toBeTruthy();

    // switch the time range preset
    userEvent.click(screen.getByText('Yesterday'));

    // click save
    userEvent.click(screen.getByText(/save/i));
    expect(onSubmitMock).toBeCalledTimes(1);
    expect(onSubmitMock).toBeCalledWith({
      timezone: 'Asia/Kolkata',
      value: 'YESTERDAY',
      date: [expect.any(Date), expect.any(Date)],
      preset: 'YESTERDAY',
    });

    // popover should be closed after submitting
    expect(screen.queryByText('Date Range')).toBeNull();
  });

  test('Selects the custom date range on clicking custom', () => {
    setup({ value: 'TODAY' });

    // clicking custom range from time range list should select it
    userEvent.click(screen.getByText('Custom Range'));

    expect(
      screen
        .getByRole('option', {
          name: 'Custom Range',
        })
        .getAttribute('aria-selected')
    ).toBeTruthy();

    userEvent.click(screen.getByText(/save/i));
    expect(onSubmitMock).toBeCalledTimes(1);
    expect(onSubmitMock).toBeCalledWith({
      timezone: 'Asia/Kolkata',
      value: [expect.any(Date), expect.any(Date)],
      date: [expect.any(Date), expect.any(Date)],
      preset: 'CUSTOM',
    });
  });

  test('Selects the custom date range on manually selecting any date from calendar', () => {
    setup({ value: DEFAULT_VALUE });

    // click 15 date from calendar
    userEvent.click(screen.getAllByText('15')[0]);

    // clicking on any date from calendar should mark Custom Range as selected in Time Range List
    expect(
      screen
        .getByRole('option', {
          name: 'Custom Range',
        })
        .getAttribute('aria-selected')
    ).toBeTruthy();
  });

  test('Clicking on Cancel button closes the calendar', () => {
    setup({ value: 'TODAY' });
    //clicks the cancel button
    userEvent.click(screen.getByText('Cancel'));
    expect(screen.queryByText('Date Range')).toBeNull();
  });

  test('shows correct date in time select box', () => {
    setup({ value: DEFAULT_VALUE });

    checkDates('15 Jan 2019', '10 Feb 2019');
  });

  test('Calls onClear on clicking clear icon', () => {
    const onClearMock = jest.fn();
    render(
      <TestProvider>
        <TimeRangePicker
          timezone="Asia/Kolkata"
          onChange={onChangeMock}
          onSubmit={onSubmitMock}
          timeSelect
          value={DEFAULT_VALUE}
          clearable
          onClear={onClearMock}
        />
      </TestProvider>
    );

    // click clear icon
    userEvent.click(
      screen.getByRole('button', {
        name: /clear value/i,
      })
    );

    expect(onSubmitMock).toBeCalledTimes(1);
    expect(onSubmitMock).toBeCalledWith({
      value: [],
      date: [],
      preset: 'CUSTOM',
      timezone: 'Asia/Kolkata',
    });

    expect(onClearMock).toBeCalledTimes(1);
    expect(onClearMock).toBeCalledWith();
  });

  test('Changes the month on selecting different month from select month dropdown', () => {
    setup({ value: DEFAULT_VALUE });

    // click month selector button
    userEvent.click(screen.getByText('January'));

    // select different month from the dropdown
    userEvent.click(screen.getByText('March'));

    // make sure that calendar displays new month
    screen.getByText('March');
    screen.getByText('April');
    expect(screen.queryByText('January')).toBeNull();
    expect(screen.queryByText('February')).toBeNull();
  });

  test('Changes the year on selecting different year from select year dropdown', async () => {
    setup({ value: DEFAULT_VALUE });

    // click year selector button
    const yearSelectorButton = await screen.getAllByText('2019');
    userEvent.click(yearSelectorButton[0]);

    // select different month from the dropdown
    userEvent.click(screen.getByText('2021'));

    // make sure that calendar displays newly selected year
    expect(screen.queryByText('2019')).toBeNull();
    expect(screen.queryAllByText('2021')).toBeTruthy();
  });

  test('renders correct date and preset when preset is passed as string', () => {
    setup({ value: DEFAULT_VALUE, preset: 'TODAY' });
    expect(
      screen
        .getByRole('option', {
          name: 'Today',
        })
        .getAttribute('aria-selected')
    ).toBeTruthy();
    expect(
      screen.getByLabelText("Selected start date. Tuesday, January 15th 2019. It's available.").getAttribute('tabindex')
    ).toEqual('0');
  });

  test('renders time range picker with locale', () => {
    setup({ value: DEFAULT_VALUE, locale: fr });
    // month selector dropdown
    screen.getByRole('button', { name: /janvier/i });
  });

  test('Should not open time rang picker when disabled', () => {
    render(
      <TestProvider>
        <TimeRangePicker timezone="Asia/Kolkata" onChange={onChangeMock} onSubmit={onSubmitMock} timeSelect disabled />
      </TestProvider>
    );
    const timeRangePickerInput = screen.getByLabelText(/select a time range./i);
    userEvent.click(timeRangePickerInput);
    expect(screen.queryByText('Date Range')).toBeNull();
  });

  test('Should override Calendar when external Calendar component is passed', () => {
    const timePickerOverrides = {
      Calendar: {
        component: () => <div>Hello World</div>,
        props: {},
      },
    };
    setup({ overrides: timePickerOverrides });

    expect(screen.getByText('Hello World')).toBeTruthy();
  });
});
