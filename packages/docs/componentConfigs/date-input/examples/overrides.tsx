import { ReactElement, useState } from 'react';
import * as React from 'react';

import { DateInput } from 'spaceweb/date-input';

export default (): ReactElement => {
  const [value, setValue] = useState<Date | undefined>(new Date());

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
      overrides={{
        Before: {
          props: {
            overrides: {
              DatePicker: {
                props: {
                  overrides: {
                    CalendarHeader: {
                      style: ({ theme }) => ({
                        outline: `1px solid ${theme.spr.focus01}`,
                        backgroundColor: theme.spr.highlight,
                      }),
                    },
                  },
                },
              },
            },
          },
        },
        Input: {
          style: ({ theme }, {}) => ({
            outline: `1px solid ${theme.spr.focus01}`,
            backgroundColor: theme.spr.highlight,
          }),
        },
      }}
    />
  );
};
