import { ReactElement, useState } from 'react';

import { DatePicker } from 'spaceweb/date-picker';

export default (): ReactElement => {
  const [value, setValue] = useState<Date | undefined>();
  const [timezone, setTimezone] = useState<string | undefined>();

  const handleValueChange = ({ value: date, timezone: _timezone }: { value?: Date; timezone?: string }): void => {
    setValue(date);
    setTimezone(timezone);
  };

  return (
    <DatePicker autoSizeInput timeSelect showTimezone timezone={timezone} value={value} onChange={handleValueChange} />
  );
};
