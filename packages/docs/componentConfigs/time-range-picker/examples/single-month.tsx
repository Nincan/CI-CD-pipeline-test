import { ReactElement, useState } from 'react';
import * as React from 'react';

import { TimeRangePicker } from 'spaceweb/time-range-picker';

export default (): ReactElement => {
  const [value, setValue] = useState<Date[] | string>([
    new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000),
    new Date(),
  ]);
  const [timezone, setTimezone] = React.useState('Asia/Kolkata');

  const handleSubmit = data => {
    setValue(data.value);
    setTimezone(data.timezone);
  };

  return (
    <TimeRangePicker
      monthsShown={1}
      timeRangePresets={[]}
      value={value}
      timezone={timezone}
      onSubmit={handleSubmit}
      timeSelect
    />
  );
};
