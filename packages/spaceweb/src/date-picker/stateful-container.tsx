import * as React from 'react';
import { ReactElement } from 'react';
import dateFnsAdapter from 'baseui/datepicker/utils/date-fns-adapter';

import { StatefulContainerProps } from './types';
import { useDatePickerState } from './useDatePickerState';
import { getSystemTzName } from '../time-range-picker/utils';

const StatefulContainer = ({
  adapter,
  onChange,
  value,
  startOpen = false,
  ...props
}: StatefulContainerProps): ReactElement => {
  const [date, setDate] = React.useState<Date | undefined>(value);
  const [timezone, setTimezone] = React.useState<string | undefined>(props.timezone ?? getSystemTzName());
  const { isOpen, handleOpen, handleClose, setIsOpen } = useDatePickerState({ startOpen });

  React.useEffect(() => {
    setDate(value);
  }, [value]);

  const handleDateChange = React.useCallback(
    ({ value: _value, timezone: _timezone }: { value?: Date; timezone?: string }) => {
      const prevValue = date;
      setDate(_value);
      setTimezone(_timezone);
      onChange?.(props.showTimezone ? { value: _value, timezone: _timezone } : { value: _value });

      setIsOpen(false);
    },
    [setDate, setIsOpen, onChange, date, props.showTimezone]
  );

  const { children, ...restProps } = props;
  return props.children?.({
    ...restProps,
    value: date,
    adapter,
    onChange: handleDateChange,
    onFocus: handleOpen,
    onBlur: handleClose,
    isOpen,
    range: false,
    timezone,
  });
};

StatefulContainer.defaultProps = {
  adapter: dateFnsAdapter,
};

export default StatefulContainer;
