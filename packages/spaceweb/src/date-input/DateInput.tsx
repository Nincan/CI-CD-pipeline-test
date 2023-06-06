import { useMemo, ReactElement, useState, useCallback, useEffect, ComponentType } from 'react';
import InputMask from 'react-input-mask';
import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import dateFnsAdapter from 'baseui/datepicker/utils/date-fns-adapter';
import { SharedProps } from 'baseui/input';

import { Input } from '../input';
import { Before } from './Before';

import { DateInputProps } from './types';
import { mergeOverrides, Overrides } from '../overrides';
import { DEFAULT_FORMAT_STRING } from '../date-picker/constants';
import { prepareLocale, formatDate, normalizeDashes, isDayInRange } from '../date-picker/utils';
import { inputStyles } from './styled-components';
import {
  convertDateFromSystemTzToTargetTz,
  getSystemTzName,
  convertDateFromTargetTzToSystemTz,
} from '../time-range-picker/utils';
import { useContextualFormProps } from '../form-control/context';

export const DateInput = ({
  adapter = dateFnsAdapter,
  formatString = DEFAULT_FORMAT_STRING,
  mask,
  onChange,
  value,
  locale,
  weekStartsOn,
  maskChar = '_',
  overrides,
  minDate,
  maxDate,
  timeSelect,
  showTimezone = false,
  timezone = getSystemTzName(),
  ...restProps
}: DateInputProps): ReactElement => {
  const { intent } = useContextualFormProps(restProps);
  const dateFnsLocale = useMemo(() => prepareLocale(locale, { weekStartsOn }), [weekStartsOn, locale]);
  const dateHelpers = useMemo(() => new DateHelpers<Date>(adapter), [adapter]);

  const timezoneAdaptedValue = useMemo(
    () => (value ? new Date(convertDateFromSystemTzToTargetTz(value, timezone)) : undefined),
    [value, timezone]
  );

  const [date, setDate] = useState(() =>
    formatDate({ date: timezoneAdaptedValue, locale: dateFnsLocale, dateHelpers, formatString })
  );
  const [error, setError] = useState(() => !isDayInRange(timezoneAdaptedValue, { minDate, maxDate, dateHelpers }));

  const getMask = useCallback(() => {
    if (!mask && formatString !== DEFAULT_FORMAT_STRING) {
      return null;
    }

    if (mask) {
      return normalizeDashes(mask);
    }

    return '99/99/9999';
  }, [formatString, mask]);

  const handleInputChange = useCallback(
    e => {
      const inputValue = e.target.value;
      setDate(inputValue);

      const dateString = normalizeDashes(inputValue);
      const _mask = getMask();
      let _date: Date | null = dateHelpers.date(dateString);

      // to check the clearable cases
      if (
        (typeof _mask === 'string' &&
          inputValue.replace(new RegExp(maskChar, 'g'), ' ') === _mask.replace(/[9|a|*]/g, ' ')) ||
        inputValue.length === 0
      ) {
        setError(false);
        onChange(null);
        return;
      }

      if (dateString.replace(/(\s)*/g, '').length < formatString.replace(/(\s)*/g, '').length) {
        _date = null;
      } else {
        _date = dateHelpers.parseString(dateString, formatString, dateFnsLocale);
      }
      const isValidDate = _date && dateHelpers.isValid(_date);
      if (isValidDate && _date) {
        setError(!isDayInRange(_date, { minDate, maxDate, dateHelpers }));
        setDate(formatDate({ date: _date, locale: dateFnsLocale, dateHelpers, formatString }));
        onChange?.(new Date(convertDateFromTargetTzToSystemTz(_date, timezone)), timezone);
      } else {
        onChange?.(null);
        setError(true);
      }
    },
    [onChange, dateFnsLocale, dateHelpers, formatString, getMask, timezone, maskChar, maxDate, minDate]
  );

  const onCalendarDateChange = useCallback(
    (_date, _timezone) => {
      // _date is timezone adapted date, original date is what user actually selected from calendar
      const originalDate = new Date(convertDateFromSystemTzToTargetTz(_date, _timezone));
      setDate(
        formatDate({
          date: originalDate,
          locale: dateFnsLocale,
          dateHelpers,
          formatString,
        })
      );
      setError(!isDayInRange(originalDate, { minDate, maxDate, dateHelpers }));
      onChange(_date, _timezone);
    },
    [onChange, dateFnsLocale, dateHelpers, formatString, minDate, maxDate]
  );

  const mergedOverrides = useMemo(
    () =>
      mergeOverrides(
        {
          Before: {
            component: Before as ComponentType<SharedProps & Record<string, any>>,
            props: {
              adapter,
              locale,
              onChange: onCalendarDateChange,
              weekStartsOn,
              // passing value as it is as date picker will adapt this with timezone
              value,
              minDate,
              maxDate,
              timeSelect,
              showTimezone,
              timezone,
            },
          },
          Input: {
            style: inputStyles,
          },
        },
        overrides as Overrides<SharedProps>
      ),
    [
      adapter,
      onCalendarDateChange,
      locale,
      overrides,
      value,
      weekStartsOn,
      minDate,
      maxDate,
      timeSelect,
      showTimezone,
      timezone,
    ]
  );

  return (
    <InputMask
      mask={getMask()}
      value={date}
      maskChar={maskChar}
      onChange={handleInputChange}
      disabled={restProps.disabled}
      onBlur={restProps.onBlur}
    >
      {props => <Input {...restProps} {...props} intent={error ? 'error' : intent} overrides={mergedOverrides} />}
    </InputMask>
  );
};
