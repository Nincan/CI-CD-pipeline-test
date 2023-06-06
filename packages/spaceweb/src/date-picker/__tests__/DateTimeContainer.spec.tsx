import { DateTimeRangeInputs } from '..';

import { waitFor, render, fireEvent, screen } from '@testing-library/react';

import { TestProvider } from '../../test-utils/test-provider';
import { getSelectedOptions } from '../../select/utils/test-utils';

const JAN_15_2019_SOD = new Date('Jan 15 2019, 00:00'); //Jan 15 2019 00:00:00 GMT+0530 (India Standard Time)

const JAN_15_2019_1_AM = new Date(+JAN_15_2019_SOD + 60 * 60 * 1000);

const onChangeFn = jest.fn();

const setup = (props = {}): void => {
  render(
    <TestProvider>
      <DateTimeRangeInputs monthsShown={2} onChange={onChangeFn} range timeSelectStart timeSelectEnd {...props} />
    </TestProvider>
  );
};

describe('DateTimeContainer', () => {
  test('should only render timeSelectStart when timeSelectEnd is false or range is set to false', () => {
    setup({ timeSelectEnd: false });
    const timeInput = screen.getAllByTestId('time-input');

    expect(timeInput.length).toBe(1);
  });

  test('should render timeSelectStart and timeSelectEnd when timeSelectStart, range and timeSelectEnd is set to true', () => {
    setup();
    const timeInput = screen.getAllByTestId('time-input');

    expect(timeInput.length).toBe(2);
  });

  test('should set Time in TimeInput when time is changed', async () => {
    setup({ value: JAN_15_2019_SOD, timeSelectEnd: false });

    const timeContainer = screen.getByTestId('time-input-container');
    const timeInput = screen.getByTestId('time-input');

    fireEvent.click(timeInput);

    await waitFor(() => fireEvent.click(screen.getAllByText(/12:15 AM/i)[0]));

    await waitFor(() => expect(getSelectedOptions(timeContainer)).toEqual(['12:15 AM']));
  });

  test('onChange should be called with correct timestamp when time changes', async () => {
    setup({ value: JAN_15_2019_SOD, timeSelectEnd: false });

    const timeInput = screen.getByTestId('time-input');

    fireEvent.click(timeInput);

    await waitFor(() => fireEvent.click(screen.getAllByText(/1:00 AM/i)[0]));

    expect(onChangeFn).toBeCalledWith({ date: JAN_15_2019_1_AM });
  });

  test('should be disabled when disabled is set to true', () => {
    setup({ disabled: true });

    // There will be 2 elements for start and end Date therefore taking 0th element
    const timeInput = screen.getAllByTestId('time-input')[0];

    expect(timeInput).toHaveAttribute('disabled');
  });
});
