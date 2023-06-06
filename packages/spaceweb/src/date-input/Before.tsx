import { useMemo, ReactElement, useCallback } from 'react';
import { SharedProps } from 'baseui/input';

import { DatePicker as DefaultDatePicker, DatepickerOverrides, WeekStartsOn } from '../date-picker';
import { CalendarIconButton } from './CalendarIconButton';

import { mergeOverrides, Override, useOverrides } from '../overrides';

export const Before = ({
  weekStartsOn,
  adapter,
  locale,
  overrides,
  onChange: _onChange,
  minDate,
  maxDate,
  value,
  timeSelect,
  showTimezone = false,
  timezone,
  ...props
}: SharedProps & {
  adapter?: any;
  locale?: any;
  overrides?: {
    DatePicker?: Override<Record<string, any>>;
  };
  onChange: (value?: Date, timezone?: string) => void;
  weekStartsOn?: WeekStartsOn;
  minDate?: Date;
  maxDate?: Date;
  value?: Date;
  timeSelect?: boolean;
  showTimezone?: boolean;
  timezone?: string;
}): ReactElement => {
  const onChange = useCallback(
    data => {
      _onChange(data.value, data.timezone);
    },
    [_onChange]
  );

  const [DatePicker, datePickerProps] = useOverrides(overrides?.DatePicker, DefaultDatePicker);

  const mergedOverrides = useMemo(
    () =>
      mergeOverrides(
        {
          Input: {
            component: CalendarIconButton,
            props: props as SharedProps,
          },
        },
        (datePickerProps as Record<string, any>)?.overrides
      ),
    [datePickerProps, props]
  );

  return (
    <DatePicker
      weekStartsOn={weekStartsOn}
      adapter={adapter}
      locale={locale}
      onChange={onChange}
      disabled={props.$disabled}
      timeSelect={timeSelect}
      minDate={minDate}
      maxDate={maxDate}
      value={value}
      showTimezone={showTimezone}
      timezone={timezone}
      {...datePickerProps}
      overrides={mergedOverrides}
    />
  );
};
