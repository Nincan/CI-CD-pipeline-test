import { useState } from 'react';
import { DatePicker } from 'spaceweb/date-picker';

export default () => {
  const [value, setValue] = useState();
  const handleValueChange = ({ value: date }) => {
    setValue(date);
  };
  return <DatePicker value={value} onChange={handleValueChange} fixedHeight peekNextMonth />;
};
