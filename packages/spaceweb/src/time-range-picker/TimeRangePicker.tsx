import { useMemo, useCallback, ReactElement } from 'react';
import dateFnsAdapter from 'baseui/datepicker/utils/date-fns-adapter';
import DateHelpers from 'baseui/datepicker/utils/date-helpers';

import RangeSelectorContainer from './RangeSelectorContainer';

import {
  getSelectedTimeRange,
  getSystemTzName,
  getDefaultTimeRangePresets,
  convertDateFromTargetTzToSystemTz,
  convertDateFromSystemTzToTargetTz,
  formatSummaryValue,
} from './utils';
import { useDatePickerState, StatelessDatePicker } from '../date-picker';

import { TimeRangePickerProps, TimeRangePreset } from './types';
import { useLocale } from '../locale';
import { DEFAULT_FORMAT_STRING } from '../date-picker/constants';
import { mergeOverrides } from '../overrides';
import { normalizeDashes, prepareLocale } from '../date-picker/utils';
import { CUSTOM_OPTION } from './constants';
import { IconButton } from '../button';
import BaseCalendarIcon from '../icon/components/calendar-solid';

const __DEV__ = process.env.NODE_ENV !== 'production';

export const TimeRangePicker = ({
  adapter = dateFnsAdapter,
  onSubmit,
  timezone: _timezone,
  value,
  formatDisplayValue,
  timeRangePresets,
  overrides,
  timeSelect,
  peekNextMonth,
  excludeDates,
  filterDate,
  minDate,
  maxDate,
  placeholder = `${DEFAULT_FORMAT_STRING}-${DEFAULT_FORMAT_STRING}`,
  formatString = DEFAULT_FORMAT_STRING,
  onClose,
  onChange,
  showTimezoneInSummary,
  clearable,
  onClear,
  showFullDateInSummary,
  autoSizeInput,
  preset,
  startOpen = false,
  fixedHeight,
  monthsShown = 2,
  weekStartsOn,
  disableTimezone = false,
  displayVariant = 'default',
  ...props
}: TimeRangePickerProps): ReactElement => {
  if (__DEV__) {
    if (disableTimezone && _timezone) {
      console.warn('[spaceweb] timezone can not be passed to the TimeRangePicker when disableTimezone is true');
    }
  }

  const timezone = useMemo(() => {
    if (disableTimezone) {
      return getSystemTzName();
    }
    return _timezone ?? getSystemTzName();
  }, [_timezone, disableTimezone]);

  const dateFnsLocale = useMemo(() => prepareLocale(props.locale, { weekStartsOn }), [weekStartsOn, props.locale]);
  const dateHelpers = useMemo(() => new DateHelpers(adapter), [adapter]);
  const locale = useLocale();

  const { isOpen, handleOpen, handleClose, setIsOpen } = useDatePickerState({
    onClose,
    startOpen,
  });

  // Composing the time range presets. If user passes then use that else use default presets and at last add custom range.
  const timeRangeList = useMemo(
    () => [
      ...(timeRangePresets ?? getDefaultTimeRangePresets(locale)),
      {
        id: CUSTOM_OPTION.id,
        label: locale.timeRangePicker.customRange,
      },
    ],
    [timeRangePresets, locale]
  );

  const formatDate = useCallback(
    (date: Date, normalizedFormatString = normalizeDashes(formatString)): string =>
      dateHelpers.formatDate(date, normalizedFormatString, dateFnsLocale),
    [formatString, dateHelpers, dateFnsLocale]
  );

  const defaultFormatDisplayValue = useCallback(
    (date: Date | Date[], normalizedFormatString = normalizeDashes(formatString)) => {
      // case to handle a11y, where date is individually passed to format, else Date[] is passed as range is true.
      if (!Array.isArray(date) && date) {
        return formatDate(date);
      }

      let timeRangePreset: TimeRangePreset | undefined;
      if (typeof preset === 'string') {
        timeRangePreset = getSelectedTimeRange(preset, timeRangeList);
      } else if (typeof value === 'string') {
        timeRangePreset = getSelectedTimeRange(value, timeRangeList);
      }
      const options = {
        date,
        presetId: timeRangePreset?.id ?? CUSTOM_OPTION.id,
        presetLabel: timeRangePreset?.label ?? locale.timeRangePicker.customRange,
        hidePresetLabel: timeRangeList.length === 1,
        timezone,
        formatString,
        showTimezoneInSummary,
        showFullDateInSummary,
        adapter,
        locale: dateFnsLocale,
        displayVariant,
      };
      if (formatDisplayValue) {
        return formatDisplayValue(date, normalizedFormatString, options);
      }

      return formatSummaryValue(options);
    },
    [
      timezone,
      value,
      timeRangeList,
      formatDisplayValue,
      showTimezoneInSummary,
      formatString,
      formatDate,
      showFullDateInSummary,
      adapter,
      preset,
      dateFnsLocale,
      locale.timeRangePicker.customRange,
      displayVariant,
    ]
  );

  const handleSubmit = useCallback(
    // eslint-disable-next-line no-shadow
    ({ timeRange, preset, timezone }: { timeRange: Date[]; preset?: string; timezone?: string }) => {
      // value is returned only for backward compatibility will be removed in future version.
      if (preset === 'CUSTOM') {
        const startMillis = convertDateFromTargetTzToSystemTz(timeRange[0], timezone);
        const endMillis = convertDateFromTargetTzToSystemTz(timeRange[1], timezone);
        const dates = [new Date(startMillis), new Date(endMillis)];
        onSubmit({
          value: dates,
          preset,
          date: dates,
          ...(disableTimezone ? {} : { timezone }),
        });
      } else {
        const timeRangeLimit = getSelectedTimeRange(preset, timeRangeList)?.getTimeRangeLimits?.(timezone) ?? [];
        onSubmit({
          value: preset as string,
          preset: preset as string,
          date: timeRangeLimit,
          ...(disableTimezone ? {} : { timezone }),
        });
      }
      setIsOpen(false);
    },
    [setIsOpen, onSubmit, timeRangeList, disableTimezone]
  );

  const timeRange = useMemo(() => {
    let dates: Date[];
    if (Array.isArray(value)) {
      dates = value;
    } else {
      dates = getSelectedTimeRange(preset ?? value, timeRangeList)?.getTimeRangeLimits?.(timezone) ?? [];
    }

    return [
      ...(dates[0] ? [new Date(convertDateFromSystemTzToTargetTz(dates[0], timezone))] : []),
      ...(dates[1] ? [new Date(convertDateFromSystemTzToTargetTz(dates[1], timezone))] : []),
    ];
  }, [value, timeRangeList, timezone, preset]);

  const mergedOverrides = useMemo(
    () =>
      mergeOverrides(
        {
          Input: {
            ...(displayVariant === 'iconButton'
              ? {
                  component: (): ReactElement => (
                    <IconButton
                      tooltipContent={locale.calendar.calendarButtonAriaLabel}
                      size={props.size}
                      bordered
                      shape="square"
                    >
                      <BaseCalendarIcon />
                    </IconButton>
                  ),
                  Before: {
                    component: (): ReactElement | null => null,
                  },
                }
              : {}),
            props: {
              overrides: {
                ...(displayVariant === 'compact'
                  ? {
                      Before: {
                        component: (): ReactElement | null => null,
                      },
                    }
                  : {}),
              },
            },
          },
          InputWrapper: {
            props: {
              'data-testid': 'time-range',
            },
          },
          Popover: {
            props: {
              overrides: {
                Body: {
                  props: {
                    'aria-label': locale.timeRangePicker.popoverAriaLabel,
                  },
                },
              },
              content: (
                <RangeSelectorContainer
                  onClose={handleClose}
                  value={value}
                  timeRange={timeRange}
                  onSubmit={handleSubmit}
                  adapter={adapter}
                  timezone={timezone}
                  timeSelect={timeSelect}
                  overrides={overrides}
                  timeRangePresets={timeRangeList}
                  peekNextMonth={peekNextMonth}
                  excludeDates={excludeDates}
                  filterDate={filterDate}
                  minDate={minDate}
                  maxDate={maxDate}
                  placeholder={placeholder}
                  formatString={formatString}
                  onChange={onChange}
                  preset={preset}
                  locale={dateFnsLocale}
                  fixedHeight={fixedHeight}
                  monthsShown={monthsShown}
                  disableTimezone={disableTimezone}
                />
              ),
            },
          },
        },
        overrides
      ),
    [
      overrides,
      handleClose,
      value,
      handleSubmit,
      adapter,
      timezone,
      timeSelect,
      peekNextMonth,
      excludeDates,
      filterDate,
      minDate,
      maxDate,
      placeholder,
      formatString,
      timeRangeList,
      onChange,
      timeRange,
      preset,
      dateFnsLocale,
      monthsShown,
      fixedHeight,
      disableTimezone,
      locale.timeRangePicker.popoverAriaLabel,
      displayVariant,
      locale.calendar.calendarButtonAriaLabel,
      props.size,
    ]
  );

  const handleInputChange = useCallback(
    ({ value: _value = [] }) => {
      // Both of these call will be in if condition once we add support to directly edit the input, as of now
      // this function will be only called when user will press clear icon so directly calling these two functions.
      onSubmit({
        value: _value,
        preset: 'CUSTOM',
        date: _value,
        ...(disableTimezone ? {} : { timezone }),
      });
      onClear?.();
    },
    [onSubmit, timezone, onClear, disableTimezone]
  );

  return (
    <StatelessDatePicker
      value={timeRange}
      isOpen={isOpen}
      onFocus={handleOpen}
      onBlur={handleClose}
      formatDisplayValue={defaultFormatDisplayValue}
      trapTabbing={false}
      intent={props.intent}
      variant={props.variant}
      size={props.size}
      disabled={props.disabled}
      formatString={formatString}
      placeholder={placeholder}
      aria-label={locale.timeRangePicker.ariaLabelRange}
      overrides={mergedOverrides}
      clearable={clearable}
      onChange={handleInputChange}
      autoSizeInput={autoSizeInput}
      locale={dateFnsLocale}
      mountNode={props.mountNode}
      minDate={minDate}
      maxDate={maxDate}
      aria-describedby={props['aria-describedby']}
      aria-labelledby={props['aria-labelledby']}
      required={props.required}
      id={props.id}
    />
  );
};
