import { useState } from 'react';
import { DatePicker } from 'spaceweb/date-picker';

export default () => {
  const [value, setValue] = useState();
  const [timezone, setTimezone] = useState();
  const handleValueChange = ({ value: date, timezone: _timezone }) => {
    setValue(date);
    setTimezone(timezone);
  };
  return (
    <DatePicker autoSizeInput timeSelect showTimezone timezone={timezone} value={value} onChange={handleValueChange} />
  );
};
