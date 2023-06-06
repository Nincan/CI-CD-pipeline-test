import { useState } from 'react';
import * as React from 'react';
import { TimeRangePicker } from 'spaceweb/time-range-picker';

export default () => {
  const [value, setValue] = useState([new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000), new Date()]);
  const [timezone, setTimezone] = React.useState('Asia/Kolkata');
  const handleSubmit = data => {
    setValue(data.value);
    setTimezone(data.timezone);
  };
  return <TimeRangePicker value={value} timezone={timezone} onSubmit={handleSubmit} timeSelect />;
};
