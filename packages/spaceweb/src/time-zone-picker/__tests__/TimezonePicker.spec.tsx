import React from 'react';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { TimezonePicker } from '../TimezonePicker';

describe('time zone picker', function () {
  afterEach(cleanup);
  test('renders the time zone picker', () => {
    render(<TimezonePicker value="Asia/Kolkata" />);
    screen.getByRole('combobox');
  });

  test('renders the timezoneOptions passed', () => {
    render(
      <TimezonePicker
        value="Asia/Kolkata"
        timezoneOptions={[
          {
            label: 'Asia/Kolkata',
            id: 'Asia/Kolkata',
            offset: 330,
          },
          {
            label: 'Asia/Kabul',
            id: 'Asia/Kabul',
            offset: 270,
          },
        ]}
      />
    );
    screen.getByText('Asia/Kolkata');
    fireEvent.click(screen.getByText('Asia/Kolkata'));
    expect(screen.getAllByText('Asia/Kolkata')).toHaveLength(2);
    screen.getByText('Asia/Kabul');
  });
});
