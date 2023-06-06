import { ReactElement, useState } from 'react';
import * as React from 'react';

import { StatelessDatePicker } from 'spaceweb/date-picker';

export default (): ReactElement => {
  const [date, setDate] = useState<Date | undefined>();
  const [isOpen, setIsOpen] = React.useState(false);

  const onFocus = () => {
    setIsOpen(true);
  };

  const onBlur = () => {
    setIsOpen(false);
  };

  const handleDateChange = (value: { value?: Date }): void => {
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
