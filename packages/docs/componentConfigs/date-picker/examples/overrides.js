import { useState } from 'react';
import { DatePicker } from 'spaceweb/date-picker';

export default () => {
  const [date, setDate] = useState(new Date());
  const handleDateChange = value => {
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
