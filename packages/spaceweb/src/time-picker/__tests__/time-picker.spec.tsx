import React from 'react';

import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { TestProvider } from '../../test-utils/test-provider';
import '@testing-library/jest-dom/extend-expect';

import { TimePicker } from '../TimePicker';

describe('time picker', function () {
  afterEach(cleanup);
  test('renders the timepicker with plaveholder when clearable is passed', () => {
    render(
      <TestProvider>
        <TimePicker clearable />
      </TestProvider>
    );
    screen.getByText(/hh:mm/i);
  });

  test('Opens the selectbox and call onChange on selecting option', () => {
    const onChange = jest.fn();
    render(
      <TestProvider>
        <TimePicker onChange={onChange} />
      </TestProvider>
    );
    fireEvent.click(screen.getByRole('combobox'));

    // click the first option
    fireEvent.click(screen.getAllByRole('option')[0]);
    // one for click event and one because we have not passed value to TimePicker
    expect(onChange).toBeCalledTimes(2);
  });
});
