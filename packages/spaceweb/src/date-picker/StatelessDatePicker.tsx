import * as React from 'react';
import { ReactElement } from 'react';
import _noop from 'lodash/noop';
import _compact from 'lodash/compact';

import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import dateFnsAdapter from 'baseui/datepicker/utils/date-fns-adapter';
import { PLACEMENT } from 'baseui/popover';

import { Popover } from '../popover';
import { SharedStyleProps, StatelessDatePickerProps } from './types';
import { StyledInputWrapper } from './styled-components';
import { Typography } from '../typography';
import DatePickerInput from './DatePickerInput';

import { useLocale } from '../locale';
import useUniqueId from '../hooks/useUniqueId';
import { useContextualFormProps } from '../form-control/context';
import { mergeOverrides, useOverrides } from '../overrides';
import { DEFAULT_FORMAT_STRING } from './constants';
import { formatDate, getAriaLabel, isTimeInRange, normalizeDashes, prepareLocale } from './utils';
import { Styles } from '../types';
import { DatePickerContent } from './DatePickerContent';
import { convertDateFromSystemTzToTargetTz, getSystemTzName } from '../time-range-picker/utils';
import { getDefaultSize } from '../helpers/themeHelpers';
import { useStyle } from '../style';

const accessibilityStyles: Styles = {
  position: 'fixed',
  width: '0px',
  height: '0px',
  borderLeftWidth: 0,
  borderRightWidth: 0,
  borderTopWidth: 0,
  borderBottomWidth: 0,
  padding: 0,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  clipPath: 'inset(100%)',
};

// eslint-disable-next-line max-statements
export const StatelessDatePicker = (_props: StatelessDatePickerProps): ReactElement => {
  const { theme } = useStyle();
  const {
    onChange,
    onBlur,
    adapter = dateFnsAdapter,
    size = getDefaultSize(theme),
    formatString = DEFAULT_FORMAT_STRING,
    isOpen = false,
    onFocus,
    clearable,
    displayValueAtRangeIndex,
    variant = 'default',
    overrides,
    intent,
    value: _value,
    formatDisplayValue,
    autoSizeInput = false,
    weekStartsOn,
    timezone = getSystemTzName(),
    showTimezone = false,
    ...props
  } = useContextualFormProps(_props);
  const locale = useLocale();
  const dateHelpers = React.useMemo(() => new DateHelpers<Date>(adapter), [adapter]);
  const dateFnsLocale = React.useMemo(
    () => prepareLocale(props.locale, { weekStartsOn }),
    [weekStartsOn, props.locale]
  );

  const value = React.useMemo(() => {
    if (Array.isArray(_value)) {
      return _compact(_value).map(date => new Date(convertDateFromSystemTzToTargetTz(date, timezone)));
    }
    if (_value) {
      return new Date(convertDateFromSystemTzToTargetTz(_value, timezone));
    }
    return undefined;
  }, [_value, timezone]);

  // this state is required for a11y of calendar, this will be set to true when user first press down arrow key on opened calendar
  // and we will set this to false when calendar will be closed.
  const [autoFocusCalendar, setAutoFocusCalendar] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (isTimeInRange(value, { minDate: props.minDate, maxDate: props.maxDate, dateHelpers })) {
      setError(false);
    } else {
      setError(true);
    }
  }, [value, props.minDate, props.maxDate, dateHelpers]);
  const screenReaderMsgId = useUniqueId();

  const { 'aria-describedby': ariaDescribedBy = `datepicker--screenreader--message--input-${screenReaderMsgId}` } =
    props;

  const defaultFormatDisplayValue = React.useCallback(
    (date?: Date | Date[]): string => {
      const normalizedFormatString = normalizeDashes(formatString);

      if (formatDisplayValue) {
        if (!date) {
          return '';
        }
        return formatDisplayValue(date, normalizedFormatString);
      }

      return formatDate({
        date,
        dateHelpers,
        formatString: normalizedFormatString,
        locale: dateFnsLocale,
        timezone,
        showTimezone,
      });
    },
    [formatString, formatDisplayValue, dateHelpers, dateFnsLocale, timezone, showTimezone]
  );

  const mergedOverrides = React.useMemo(
    () =>
      mergeOverrides<Record<string, any>>(
        {
          Popover: {
            props: {
              overrides: {
                Body: {
                  props: {
                    role: 'dialog',
                    'aria-label': locale.datePicker.popoverAriaLabel,
                  },
                },
              },
            },
          },
          TimePickerFormControl: {
            props: {
              label: null,
            },
          },
          DateInputFormControl: {
            props: {
              label: null,
            },
          },
          Root: {
            style: 'rounded-8',
          },
          CalendarHeader: {
            style: 'rounded-8',
          },
        },
        overrides
      ),
    [locale.datePicker.popoverAriaLabel, overrides]
  );

  const displayValue = React.useMemo(() => defaultFormatDisplayValue(value) || '', [value, defaultFormatDisplayValue]);

  const handleDateChange = React.useCallback(
    (data: { date?: Date | Array<Date | undefined | null> | null; timezone?: string }): void => {
      onChange?.(showTimezone ? { value: data.date, timezone: data.timezone } : { value: data.date });
    },
    [onChange, showTimezone]
  );

  const onClose = React.useCallback(() => {
    onBlur?.();
    setAutoFocusCalendar(false);
  }, [onBlur, setAutoFocusCalendar]);

  React.useEffect(() => {
    if (!isOpen) {
      setAutoFocusCalendar(false);
    }
  }, [isOpen]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (!isOpen && (event.key === 'Enter' || event.key === 'ArrowDown')) {
        onFocus?.();
        event.preventDefault();
      } else if (isOpen && event.key === 'ArrowDown') {
        // next line prevents the page jump on the initial arrowDown
        event.preventDefault();
        setAutoFocusCalendar(true);
      } else if (isOpen && event.key === 'Tab') {
        onClose();
      }
    },
    [isOpen, onFocus, onClose]
  );

  const handleInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const inputValue = e.currentTarget.value;
      if (clearable && inputValue.length === 0) {
        onChange?.(showTimezone ? { value: undefined, timezone } : { value: undefined });
      }
    },
    [clearable, onChange, timezone, showTimezone]
  );

  const dateAriaLabel = React.useMemo(
    () => getAriaLabel(value, defaultFormatDisplayValue, locale),
    [value, defaultFormatDisplayValue, locale]
  );

  const [InputComponent, inputProps] = useOverrides(mergedOverrides?.Input, DatePickerInput);
  const [PopoverComponent, popoverProps] = useOverrides(mergedOverrides?.Popover, Popover);
  const [InputWrapper, inputWrapperProps] = useOverrides(mergedOverrides?.InputWrapper, StyledInputWrapper);

  const placeholder = props.placeholder ?? 'MM/DD/YYYY';

  return (
    <>
      <PopoverComponent
        accessibilityType="none"
        focusLock
        returnFocus
        mountNode={props.mountNode}
        placement={PLACEMENT.auto}
        isOpen={isOpen}
        onClickOutside={onClose}
        onEsc={onClose}
        showArrow={false}
        triggerType="click"
        onClick={props.disabled ? _noop : onFocus}
        content={
          <DatePickerContent
            {...props}
            value={value}
            onChange={handleDateChange}
            overrides={mergedOverrides}
            autoFocusCalendar={autoFocusCalendar}
            onClose={onClose}
            formatString={formatString}
            adapter={adapter}
            locale={dateFnsLocale}
            showTimezone={showTimezone}
            timezone={timezone}
          />
        }
        {...popoverProps}
      >
        <InputWrapper {...inputWrapperProps}>
          <InputComponent
            id={props.id}
            aria-disabled={props.disabled}
            aria-label={props['aria-label'] ?? locale.timeRangePicker.ariaLabel}
            aria-describedby={ariaDescribedBy as string}
            aria-labelledby={props['aria-labelledby']}
            aria-required={props.required || null}
            disabled={props.disabled}
            size={size}
            variant={variant}
            intent={error ? 'error' : intent}
            value={displayValue}
            // onFocus={onFocus}
            onKeyDown={handleKeyDown}
            onChange={handleInputChange}
            placeholder={placeholder}
            required={props.required}
            clearable={clearable}
            isOpen={isOpen}
            autoSizeInput={autoSizeInput}
            {...inputProps}
          />
        </InputWrapper>
      </PopoverComponent>
      <Typography id={ariaDescribedBy as string} style={accessibilityStyles}>
        {locale.timeRangePicker.screenReaderMessageInput}
      </Typography>
      <Typography aria-live="assertive" style={accessibilityStyles}>
        {dateAriaLabel}
      </Typography>
    </>
  );
};
