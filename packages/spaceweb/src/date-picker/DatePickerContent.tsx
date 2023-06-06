import * as React from 'react';
import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import dateFnsAdapter from 'baseui/datepicker/utils/date-fns-adapter';
import _compact from 'lodash/compact';
import _isEmpty from 'lodash/isEmpty';

import BaseCalendar from './Calendar';
import { Box } from '../box';
import { Stack } from '../stack';
import { Button } from '../button';
import { StyledFooter } from './styled-components';
import { TimezonePicker } from '../time-zone-picker';
import { FormControl } from '../form-control';

import { useOverrides } from '../overrides';
import { useLocale } from '../locale';

import { isTimeInRange } from './utils';

import { DatepickerOverrides, CalendarProps, Nullable } from './types';
import { convertDateFromTargetTzToSystemTz } from '../time-range-picker/utils';

type DatePickerContentProps = Omit<CalendarProps, 'timeSelectEnd' | 'timeSelectStart' | 'onChange'> & {
  overrides?: DatepickerOverrides;
  timeSelect?: boolean;
  onClose: () => void;
  showTimezone?: boolean;
  timezone: string;
  onChange: (params: { date?: Nullable<Date>[] | Nullable<Date>; timezone?: string }) => void;
};

const MONTH_WIDTH = 284;

const TIMEZONE_PICKER_OVERRIDES = {
  Select: {
    props: {
      overrides: {
        Input: {
          props: {
            'data-testid': 'timezone-selector',
          },
        },
      },
    },
  },
};

export const DatePickerContent = ({
  value: _value,
  onChange,
  overrides,
  autoFocusCalendar,
  onClose,
  adapter = dateFnsAdapter,
  showTimezone,
  timezone: _timezone,
  ...props
}: DatePickerContentProps): React.ReactElement => {
  const dateHelpers = React.useMemo(() => new DateHelpers<Date>(adapter), [adapter]);
  const [value, setValue] = React.useState(_value);
  const [hasError, setHasError] = React.useState(false);
  const [timezone, setTimezone] = React.useState(_timezone);

  React.useEffect(() => {
    if (isTimeInRange(value, { minDate: props.minDate, maxDate: props.maxDate, dateHelpers })) {
      setHasError(false);
    } else {
      setHasError(true);
    }
  }, [dateHelpers, props.maxDate, props.minDate, value]);

  const [Footer, footerProps] = useOverrides(overrides?.Footer, StyledFooter);
  const [Calendar, calendarProps] = useOverrides(overrides?.Calendar, BaseCalendar);
  const locale = useLocale();

  const handleChange = React.useCallback(
    data => {
      setValue(data.date);
      if (!props.timeSelect) {
        if (Array.isArray(data.date)) {
          onChange?.({
            date: _compact(data.date).map((date: Date) => new Date(convertDateFromTargetTzToSystemTz(date, timezone))),
            timezone,
          });
        } else {
          const startMillis = convertDateFromTargetTzToSystemTz(data.date, timezone);
          onChange?.({
            date: new Date(startMillis),
            timezone,
          });
        }
      }
    },
    [onChange, props.timeSelect, timezone]
  );

  const handleSubmit = React.useCallback(() => {
    if (value && !Array.isArray(value)) {
      const startMillis = convertDateFromTargetTzToSystemTz(value, timezone);
      onChange?.({ date: new Date(startMillis), timezone });
    } else {
      onChange?.({
        date: value
          ? _compact(value).map((date: Date) => new Date(convertDateFromTargetTzToSystemTz(date, timezone)))
          : undefined,
        timezone,
      });
    }
  }, [onChange, timezone, value]);

  return (
    <Box
      className={({ px2rem }) => ({
        maxWidth: px2rem((props.monthsShown || 1) * MONTH_WIDTH),
      })}
    >
      <Calendar
        trapTabbing={!props.timeSelect}
        {...props}
        value={value}
        onChange={handleChange}
        // @ts-ignore
        overrides={overrides}
        autoFocusCalendar={autoFocusCalendar}
        timeSelectEnd={props.timeSelect}
        timeSelectStart={props.timeSelect}
        adapter={adapter}
        {...calendarProps}
      />
      {showTimezone ? (
        <Box className="px-4 mb-4">
          <FormControl label={locale.datePicker.timezonePickerLabel}>
            <TimezonePicker
              clearable={false}
              placeholder={locale.datePicker.timezonePickerPlaceholder}
              value={timezone}
              size="sm"
              onChange={({ id }) => setTimezone(id)}
              overrides={TIMEZONE_PICKER_OVERRIDES}
            />
          </FormControl>
        </Box>
      ) : null}
      {props.timeSelect ? (
        <Footer $onSubmit={handleSubmit} $onClose={onClose} className="justify-end" {...footerProps}>
          <Stack direction="horizontal" gap={3} className="items-center">
            <Button size="xs" onClick={onClose} variant="secondary" data-testid="cancel">
              {locale.timeRangePicker.cancelBtnLabel}
            </Button>
            <Button size="xs" onClick={handleSubmit} data-testid="save" disabled={hasError || !value}>
              {locale.timeRangePicker.saveBtnLabel}
            </Button>
          </Stack>
        </Footer>
      ) : null}
    </Box>
  );
};
