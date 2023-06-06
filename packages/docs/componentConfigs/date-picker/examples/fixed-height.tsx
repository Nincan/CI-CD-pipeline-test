import { ReactElement, useState } from 'react';

import { DatePicker } from 'spaceweb/date-picker';

export default (): ReactElement => {
  const [value, setValue] = useState<Date | undefined>();

  const handleValueChange = ({ value: date }: { value?: Date }): void => {
    setValue(date);
  };

  return <DatePicker value={value} onChange={handleValueChange} fixedHeight peekNextMonth />;
};
