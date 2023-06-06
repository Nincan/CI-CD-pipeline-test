import * as React from 'react';
import { TimeRangePicker } from 'spaceweb/time-range-picker';

export default (): React.ReactElement => {
  const [value, setValue] = React.useState<Date[] | string>([
    new Date('2021-11-22T08:00:00.000Z'),
    new Date('2021-12-03T10:00:00.000Z'),
  ]);
  const [timezone, setTimezone] = React.useState('Asia/Kolkata');

  const handleSubmit = data => {
    setValue(data.value);
    setTimezone(data.timezone);
  };

  return (
    <TimeRangePicker
      value={value}
      timezone={timezone}
      onSubmit={handleSubmit}
      timeSelect
      minDate={new Date('2021-11-16T00:00:00.000Z')} // Nov 16 2021 05:30:00 GMT+0530 (India Standard Time)
      maxDate={new Date('2021-12-10T07:00:00.000Z')} // Dec 10 2021 12:30:00 GMT+0530 (India Standard Time)
    />
  );
};
