import { ReactElement, useState } from 'react';

import { DatePicker } from 'spaceweb/date-picker';

export default (): ReactElement => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleDateChange = (value: { value?: Date }): void => {
    setDate(value.value);
  };

  return <DatePicker value={date} onChange={handleDateChange} monthsShown={2} timeSelect />;
};
