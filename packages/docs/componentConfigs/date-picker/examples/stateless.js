import { useState } from 'react';
import * as React from 'react';
import { StatelessDatePicker } from 'spaceweb/date-picker';

export default () => {
  const [date, setDate] = useState();
  const [isOpen, setIsOpen] = React.useState(false);
  const onFocus = () => {
    setIsOpen(true);
  };
  const onBlur = () => {
    setIsOpen(false);
  };
  const handleDateChange = value => {
    setDate(value.value);
  };
  return (
    <StatelessDatePicker
      isOpen={isOpen}
      onFocus={onFocus}
      onBlur={onBlur}
      value={date}
      onChange={handleDateChange}
      timeSelect
    />
  );
};
