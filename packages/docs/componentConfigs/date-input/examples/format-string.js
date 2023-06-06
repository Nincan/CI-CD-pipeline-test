import { useState } from 'react';
import * as React from 'react';
import { DateInput } from 'spaceweb/date-input';

export default () => {
  const [value, setValue] = useState(new Date());
  const onChange = date => {
    setValue(date);
  };
  return (
    <DateInput
      value={value}
      onChange={onChange}
      clearable
      formatString="dd MMM, yyyy"
      mask="99 aaa, 9999"
      placeholder="15 Apr, 2022"
    />
  );
};
