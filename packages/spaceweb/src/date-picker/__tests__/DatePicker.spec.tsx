import React from 'react';
import { cleanup, render, fireEvent, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TestProvider } from '../../test-utils/test-provider';
import { DatePicker } from '../DatePicker';
import { DatePickerProps } from '../types';
import { getSelectedOptions } from '../../select/utils/test-utils';

const windowMatchMediaMock = jest.fn(() => ({
  matches: false,
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
}));
// @ts-ignore
window.matchMedia = windowMatchMediaMock;

const onChangeMock = jest.fn();

const JAN_15_2019_SOD = new Date(1547490600000); //Jan 15 2019 00:00:00 GMT+0530 (India Standard Time)
const JAN_15_2019_1_AM = new Date(1547494200000); //Jan 15 2019 01:00:00 GMT+0530 (India Standard Time)
const JAN_15_2019_SOD_DHAKA_ADAPTED = new Date(1547488800000);

const setup = (props: DatePickerProps = {}): void => {
  render(
    <TestProvider>
      <DatePicker timezone="Asia/Kolkata" onChange={onChangeMock} timeSelect {...props} />
    </TestProvider>
  );
  const input = screen.getByRole('textbox', {
    name: /select a date\./i,
  });
  userEvent.click(input);
};

describe('#DatePicker with timezone', () => {
  test('shows timezone picker and adapts the date for selected timezone', async () => {
    setup({ showTimezone: true, value: JAN_15_2019_SOD, timeSelect: false });
    const timezoneInput = screen.getByTestId('timezone-selector');
    userEvent.type(timezoneInput, 'dhaka');
    userEvent.click(screen.getByText(/asia\/dhaka \(gmt \+06:00\)/i));

    // click on date 15
    userEvent.click(screen.getByText('15'));
    expect(onChangeMock).toBeCalledWith({
      value: JAN_15_2019_SOD_DHAKA_ADAPTED,
      timezone: 'Asia/Dhaka',
    });
  });
});

test('shows timezone picker and adapts the date for selected timezone on pressing save button', () => {
  setup({ showTimezone: true, value: JAN_15_2019_SOD });
  const timezoneInput = screen.getByTestId('timezone-selector');
  userEvent.type(timezoneInput, 'dhaka');
  userEvent.click(screen.getByText(/asia\/dhaka \(gmt \+06:00\)/i));
  userEvent.click(screen.getByText('Save'));

  expect(onChangeMock).toBeCalledWith({
    value: JAN_15_2019_SOD_DHAKA_ADAPTED,
    timezone: 'Asia/Dhaka',
  });
});

describe('DatePicker', () => {
  afterEach(cleanup);
  it('opens calendar on down arrow press', () => {
    render(
      <TestProvider>
        <DatePicker overrides={{ CalendarContainer: { props: { 'data-testid': 'calendar' } } }} />
      </TestProvider>
    );
    const before = screen.queryByTestId('calendar');
    expect(before).toBeNull();

    const input = screen.getByRole('textbox', {
      name: /select a date\./i,
    });
    fireEvent.keyDown(input, { keyCode: 40 });

    const after = screen.queryByTestId('calendar');
    expect(after).not.toBeNull();
  });

  it('opens calendar on pressing enter key in input', () => {
    render(
      <TestProvider>
        <DatePicker overrides={{ CalendarContainer: { props: { 'data-testid': 'calendar' } } }} />
      </TestProvider>
    );
    const before = screen.queryByTestId('calendar');
    expect(before).toBeNull();

    const input = screen.getByRole('textbox', {
      name: /select a date\./i,
    });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    const after = screen.queryByTestId('calendar');
    expect(after).not.toBeNull();
  });

  it('Calls provided onChange handler whenever we select a date in datepicker', () => {
    const onChange = jest.fn();
    render(
      <TestProvider>
        <DatePicker onChange={onChange} />
      </TestProvider>
    );

    const input = screen.getByRole('textbox', {
      name: /select a date\./i,
    });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    // click on date 15
    userEvent.click(screen.getByText('15'));
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({ value: expect.any(Date) });
  });

  it('renders updates value when the component renderer again with different value', () => {
    const onChange = jest.fn();
    const formatDisplayValue = (date: Date | Date[], formatString: string): string => `${(date as Date).getFullYear()}`;
    const { rerender } = render(
      <TestProvider>
        <DatePicker onChange={onChange} value={new Date(2021, 0, 1)} formatDisplayValue={formatDisplayValue} />
      </TestProvider>
    );

    const beforeInput = screen.getByRole('textbox', {
      name: /select a date\./i,
    });
    expect((beforeInput as HTMLInputElement).value).toBe('2021');

    rerender(
      <TestProvider>
        <DatePicker onChange={onChange} value={new Date(2020, 0, 1)} formatDisplayValue={formatDisplayValue} />
      </TestProvider>
    );
    const afterInput = screen.getByRole('textbox', {
      name: /select a date\./i,
    });
    expect((afterInput as HTMLInputElement).value).toBe('2020');
  });

  it('Opens calendar on mounts, when startOpen is true', () => {
    const { queryByTestId } = render(
      <TestProvider>
        <DatePicker startOpen overrides={{ CalendarContainer: { props: { 'data-testid': 'calendar' } } }} />
      </TestProvider>
    );

    expect(queryByTestId('calendar')).not.toBeNull();
  });

  it('retains selected time on changing date', () => {
    render(
      <TestProvider>
        <DatePicker startOpen value={JAN_15_2019_SOD} timeSelect />
      </TestProvider>
    );
    const timeContainer = screen.getByTestId('time-input-container');
    const timeInput = screen.getByTestId('time-input');
    userEvent.type(timeInput, '11:45');
    userEvent.click(screen.getByText(/11:45 pm/i));

    userEvent.click(screen.getByText('5'));

    expect(getSelectedOptions(timeContainer)).toEqual(['11:45 PM']);
  });
});
