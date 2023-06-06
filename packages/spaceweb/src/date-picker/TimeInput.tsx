import { useState, useEffect, useMemo } from 'react';
import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import { DateIOAdapter } from 'baseui/datepicker/utils/types';
import { TimePicker as DefaultTimePicker } from '../time-picker';

import { mergeOverrides, useOverrides } from '../overrides';

import { isTimeInRange } from './utils';

type TimeInputProps = {
  time?: Date | null;
  overrides?: any;
  onChange: (date: Date) => void;
  dateHelpers: DateHelpers<Date>;
  minTime?: Date;
  maxTime?: Date;
  disabled?: boolean;
  adapter: DateIOAdapter<Date>;
};

const MS_IN_5_MINUTES = 60 * 1000 * 5;

const roundUpTime = (minTime: Date): Date => new Date(Math.ceil(minTime.getTime() / MS_IN_5_MINUTES) * MS_IN_5_MINUTES);

export const TimeInput = ({
  overrides,
  time,
  onChange,
  dateHelpers,
  minTime,
  maxTime,
  disabled,
  adapter,
}: TimeInputProps): JSX.Element => {
  const [value, setValue] = useState(time);
  const [error, setError] = useState(false);

  useEffect(() => {
    setValue(time);
    if (isTimeInRange(time, { minDate: minTime, maxDate: maxTime, dateHelpers })) {
      setError(false);
    } else {
      setError(true);
    }
  }, [time, minTime, maxTime, dateHelpers]);

  const handleChange = (nextTime: Date): void => {
    setValue(nextTime);
    if (nextTime) {
      setError(false);
      onChange(nextTime);
    } else {
      setError(true);
    }
  };

  const mergedOverrides = useMemo(
    () =>
      mergeOverrides(
        {
          TimePicker: {
            props: {
              overrides: {
                Select: {
                  props: {
                    clearable: false,
                    intent: error ? 'error' : 'default',
                    backspaceRemoves: true,
                    // time picker sends null to select when value is not present This cause error because select internally
                    // tries to spread the value. So we overriding the value prop when it is null.
                    ...(!value && { value: [] }),
                    onBlur: (): void => {
                      setValue(time);
                      if (isTimeInRange(time, { minDate: minTime, maxDate: maxTime, dateHelpers })) {
                        setError(false);
                      } else {
                        setError(true);
                      }
                    },
                    overrides: {
                      Root: {
                        props: {
                          'data-testid': 'time-input-container',
                        },
                      },
                      Input: {
                        props: {
                          'data-testid': 'time-input',
                        },
                      },
                      ValueContainer: {
                        style: {
                          fontVariantNumeric: 'tabular-nums',
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
        overrides
      ),
    [error, value, overrides, time, minTime, maxTime, dateHelpers]
  );
  const [TimePicker, timeSelectProps] = useOverrides(mergedOverrides?.TimePicker, DefaultTimePicker);

  return (
    <TimePicker
      adapter={adapter}
      size="sm"
      value={value}
      onChange={handleChange}
      creatable
      clearable
      disabled={disabled}
      minTime={minTime && dateHelpers.isSameDay(value, minTime) ? roundUpTime(minTime) : undefined}
      maxTime={dateHelpers.isSameDay(value, maxTime) ? maxTime : undefined}
      {...timeSelectProps}
    />
  );
};
