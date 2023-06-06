import { useState } from 'react';
import { DatePicker } from 'spaceweb/date-picker';

export default () => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = value => {
    setDate(value.value);
  };
  return <DatePicker value={date} onChange={handleDateChange} monthsShown={2} timeSelect />;
};
