import * as React from 'react';
import dateFnsAdapter from 'baseui/datepicker/utils/date-fns-adapter';
import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import { CalendarProps as BaseCalendarProps } from 'baseui/datepicker';
import { DateIOAdapter } from 'baseui/datepicker/utils/types';

import { Stack, StackItem } from '../stack';
import { DateInput } from './DateInput';
import { TimeInput } from './TimeInput';
import { FormControl } from '../form-control';

import { useOverrides } from '../overrides';
import { useLocale } from '../locale';
import { DatepickerOverrides } from './types';

const DateAndTimeSelect = ({
  time,
  onTimeChange,
  onDateChange,
  dateInputLabel,
  timePickerLabel,
  overrides,
  locale,
  minDate,
  maxDate,
  adapter,
  disabled,
}: {
  time: Date | undefined | null;
  onTimeChange: (args: Date) => void;
  onDateChange: (date: Date) => void;
  timePickerLabel: string;
  dateInputLabel: string;
  overrides?: DatepickerOverrides;
  locale?: any;
  minDate?: Date;
  maxDate?: Date;
  adapter: DateIOAdapter<Date>;
  disabled?: boolean;
}): JSX.Element => {
  const dateHelpers = React.useMemo(() => new DateHelpers<Date>(adapter), [adapter]);

  const [TimePickerFormControl, timePickerFormControlProps] = useOverrides(
    overrides?.TimePickerFormControl,
    FormControl
  );
  const [DateInputFormControl, dateInputFormControlProps] = useOverrides(overrides?.DateInputFormControl, FormControl);

  return (
    <Stack direction="horizontal" gap={2} className="items-center">
      <StackItem className={['flex-1', ({ px2rem }) => ({ width: px2rem(120) })]}>
        <DateInputFormControl className="mb-0" label={dateInputLabel} {...dateInputFormControlProps}>
          <DateInput
            disabled={disabled}
            dateHelpers={dateHelpers}
            date={time}
            onChange={onDateChange}
            minDate={minDate}
            maxDate={maxDate}
            locale={locale}
          />
        </DateInputFormControl>
      </StackItem>
      <StackItem className={['flex-1', ({ px2rem }) => ({ width: px2rem(120) })]}>
        <TimePickerFormControl className="mb-0" label={timePickerLabel} {...timePickerFormControlProps}>
          <TimeInput
            disabled={disabled}
            time={time}
            dateHelpers={dateHelpers}
            onChange={onTimeChange}
            overrides={overrides as any}
            minTime={minDate}
            maxTime={maxDate}
            adapter={adapter}
          />
        </TimePickerFormControl>
      </StackItem>
    </Stack>
  );
};

type Props = {
  range?: boolean;
  adapter?: DateIOAdapter<Date>;
  timeSelectStart?: boolean;
  timeSelectEnd?: boolean;
  value?: Date | Date[] | null;
  monthsShown: number;
  onChange: BaseCalendarProps['onChange'];
  overrides?: DatepickerOverrides;
  locale?: any;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
};

export const DateTimeContainer = React.memo(
  ({
    range,
    adapter = dateFnsAdapter,
    timeSelectStart,
    timeSelectEnd,
    value,
    monthsShown,
    onChange,
    overrides,
    locale: dateFnsLocale,
    minDate,
    maxDate,
    disabled,
  }: Props): JSX.Element => {
    const [startDate, endDate] = ([] as (Date | undefined | null)[]).concat(value);
    const dateHelpers = React.useMemo(() => new DateHelpers<Date>(adapter), [adapter]);
    const locale = useLocale();

    const [DateTimeSelectContainer, dateTimeSelectContainerProps] = useOverrides(overrides?.DateTimeSelect, StackItem);

    const handleTimeChange = React.useCallback(
      (time, index: number) => {
        const epoch = new Date().setMilliseconds(0);
        const dateWithZeroMs = new Date(epoch);
        if (Array.isArray(value)) {
          const dates = value.map((date, i) => {
            if (index === i) {
              return dateHelpers.applyTimeToDate(date, time);
            }
            return date;
          });

          if (index === 0 && !value[0]) {
            dates[0] = dateHelpers.applyTimeToDate(dateWithZeroMs, time);
          }
          if (index === 1) {
            if (!value[0]) {
              dates[0] = adapter.startOfDay(dateWithZeroMs);
              dates[1] = dateHelpers.applyTimeToDate(dates[0], time);
            } else if (!value[1]) {
              dates[1] = dateHelpers.applyTimeToDate(dates[0], time);
            }
          }

          /*
          Here we have to manually set 0 ms on endDate, because we set 999 ms in endTime when user selects preset like for preset `TODAY` endTime is 11:59:59:999.
          But when user selects time from TimeInput we want to have 0 ms, for example when user select 8:15 as endTime, we want to send 8:15:00:000, instead of 8:15:00:999
        */
          if (index === 1) {
            dates[1]?.setMilliseconds(999);
            dates[1]?.setSeconds(59);
          }

          // if user selects the time such that made the time range invalid, then make it valid by setting the range equal to what user is editing
          // For example - if selected range is 8 march, 2020 12:00AM to 8 march, 2020 11:59PM. Now user selects start time 2:00PM, and end time
          // 1:00PM, then make the range valid by setting new range as 1:00PM in both start and end date. Similarly when user selects
          // starttime greater then end time then set start time in both start and end date
          if (dateHelpers.isAfter(dates[0], dates[1])) {
            onChange?.({ date: index === 0 ? [dates[0], dates[0]] : [dates[1], dates[1]] });
          } else {
            onChange?.({ date: dates });
          }
        } else if (!value) {
          onChange?.({ date: dateHelpers.applyTimeToDate(dateWithZeroMs, time) });
        } else {
          onChange?.({ date: dateHelpers.applyTimeToDate(value, time) });
        }
      },
      [onChange, dateHelpers, value, adapter]
    );

    const handleDateInputChange = React.useCallback(
      (date: Date, index: number) => {
        if (range && Array.isArray(value)) {
          const nextStartDate =
            // eslint-disable-next-line no-nested-ternary
            index === 0
              ? value[0]
                ? dateHelpers.applyTimeToDate(date, value[0])
                : adapter.startOfDay(date)
              : value[0];
          const nextEndDate =
            // if user is editing already selected endDate then we don't want to change the selected time, else set endtime as end of the day
            // eslint-disable-next-line no-nested-ternary
            index === 1 ? (value[1] ? dateHelpers.applyTimeToDate(date, value[1]) : adapter.endOfDay(date)) : value[1];

          if (index === 1) {
            nextEndDate.setMilliseconds(999);
            nextEndDate.setSeconds(59);
          }
          // if startdate is not selected yet then set the endDate as valid range.
          if (!nextStartDate) {
            onChange?.({ date: [adapter.startOfDay(nextEndDate), nextEndDate] });
          }
          // if end date is not selected yet then set the startDate as valid range.
          else if (!nextEndDate) {
            onChange?.({ date: [nextStartDate, adapter.endOfDay(nextStartDate)] });
          } else if (dateHelpers.isAfter(nextStartDate, nextEndDate)) {
            onChange?.({
              date:
                index === 0
                  ? [nextStartDate, adapter.endOfDay(nextStartDate)]
                  : [adapter.startOfDay(nextEndDate), nextEndDate],
            });
          } else {
            onChange?.({ date: [nextStartDate, nextEndDate] });
          }
        } else {
          onChange?.({ date });
        }
      },
      [dateHelpers, onChange, range, adapter, value]
    );

    return (
      <Stack gap={4} className="px-4 pb-4" direction={monthsShown === 1 ? 'vertical' : 'horizontal'}>
        {timeSelectStart && (
          <DateTimeSelectContainer className="flex-1" $timeSelect="start" {...dateTimeSelectContainerProps}>
            <DateAndTimeSelect
              time={startDate}
              onTimeChange={(date: Date) => handleTimeChange(date, 0)}
              onDateChange={(date: Date) => handleDateInputChange(date, 0)}
              dateInputLabel={locale.calendar.dateInputStartLabel}
              timePickerLabel={locale.calendar.timePickerStartLabel}
              adapter={adapter}
              locale={locale}
              maxDate={maxDate}
              minDate={minDate}
              overrides={overrides}
              disabled={disabled}
            />
          </DateTimeSelectContainer>
        )}
        {range && timeSelectEnd && (
          <DateTimeSelectContainer className="flex-1" $timeSelect="end" {...dateTimeSelectContainerProps}>
            <DateAndTimeSelect
              time={endDate}
              onTimeChange={(date: Date) => handleTimeChange(date, 1)}
              onDateChange={(date: Date) => handleDateInputChange(date, 1)}
              dateInputLabel={locale.calendar.dateInputEndLabel}
              timePickerLabel={locale.calendar.timePickerEndLabel}
              adapter={adapter}
              locale={locale}
              maxDate={maxDate}
              minDate={minDate}
              overrides={overrides}
              disabled={disabled}
            />
          </DateTimeSelectContainer>
        )}
      </Stack>
    );
  }
);
