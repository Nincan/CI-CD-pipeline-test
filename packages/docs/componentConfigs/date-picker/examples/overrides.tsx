import { ReactElement, useState } from 'react';

import { DatePicker } from 'spaceweb/date-picker';

export default (): ReactElement => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const handleDateChange = (value: { value?: Date }): void => {
    setDate(value.value);
  };

  return (
    <DatePicker
      value={date}
      onChange={handleDateChange}
      overrides={{
        CalendarHeader: {
          style: ({ theme }) => ({
            backgroundColor: theme.spr.ui04,
          }),
        },
        MonthHeader: {
          style: ({ theme }) => ({
            backgroundColor: theme.spr.ui04,
          }),
        },
        MonthYearSelectButton: {
          style: ({ theme }) => ({
            ':focus': {
              backgroundColor: theme.spr.focus01,
            },
          }),
        },
        PrevButton: {
          style: ({ theme }) => ({
            ':focus': {
              backgroundColor: theme.spr.focus01,
            },
          }),
        },
        NextButton: {
          style: ({ theme }) => ({
            ':focus': {
              backgroundColor: theme.spr.focus01,
            },
          }),
        },
      }}
    />
  );
};
