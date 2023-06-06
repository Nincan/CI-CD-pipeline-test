import { useMemo, useState, useEffect, useCallback, ReactElement } from 'react';
import DateHelpers from 'baseui/datepicker/utils/date-helpers';
import cx from '../classNames';

import { Box } from '../box';
import RangeSelector from './RangeSelector';
import { Typography } from '../typography';
import { Button } from '../button';
import { StyledHeader } from './styled-component';
import { Stack, StackItem } from '../stack';
import DefaultTimezonePicker from './TimezonePicker';
import ErrorIcon from '../icon/components/error';
import { StyledFooter, StyledFooterBeforeEnhancer } from '../date-picker/styled-components';

import { useLocale } from '../locale';
import { RangeSelectorContainerProps } from './types';
import { getRangeError, getSelectedTimeRange } from './utils';
import { useOverrides } from '../overrides';

const getPresetId = (selectedPreset?: string, selectedValue?: string | Date[]): string | undefined => {
  if (selectedPreset) {
    return selectedPreset;
  }
  if (Array.isArray(selectedValue)) {
    return 'CUSTOM';
  }
  return selectedValue;
};

const RangeSelectorContainer = ({
  adapter,
  timeRangePresets,
  onChange,
  onSubmit,
  timezone: selectedTimezone,
  value: selectedValue,
  timeRange: selectedTimeRange,
  preset: selectedPreset,
  minDate,
  maxDate,
  monthsShown,
  disableTimezone,
  ...props
}: RangeSelectorContainerProps): ReactElement => {
  const dateHelpers = useMemo(() => new DateHelpers<Date>(adapter), [adapter]);
  const locale = useLocale();

  const [timeRange, setTimeRange] = useState<Date[]>(selectedTimeRange);
  const [preset, setPreset] = useState<string | undefined>(getPresetId(selectedPreset, selectedValue));
  const [timezone, setTimezone] = useState(selectedTimezone);

  useEffect(() => {
    setTimeRange(selectedTimeRange);
    setPreset(getPresetId(selectedPreset, selectedValue));
  }, [selectedTimeRange, selectedValue, selectedPreset]);

  const [Header, headerProps] = useOverrides(props.overrides?.Header, StyledHeader);
  const [HeaderBeforeEnhancer, headerBeforeEnhancerProps] = useOverrides(
    props.overrides?.HeaderBeforeEnhancer,
    Typography
  );
  const [Footer, footerProps] = useOverrides(props.overrides?.Footer, StyledFooter);
  const [FooterBeforeEnhancer, footerBeforeEnhancerProps] = useOverrides(
    props.overrides?.FooterBeforeEnhancer,
    StyledFooterBeforeEnhancer
  );
  const [TimezonePicker, timezonePickerProps] = useOverrides(props.overrides?.TimezonePicker, DefaultTimezonePicker);

  const { hasError, errMsg } = useMemo(
    () =>
      getRangeError({
        dateHelpers,
        timeRange,
        maxDate,
        minDate,
        locale,
        preset,
      }),
    [timeRange, minDate, maxDate, dateHelpers, locale, preset]
  );

  const onDateChange = useCallback(
    ({ date, preset: _preset }) => {
      // if preset is passed then we have to get the time range limits else date is array
      if (_preset) {
        let nextDate = getSelectedTimeRange(_preset, timeRangePresets)?.getTimeRangeLimits?.() ?? [];
        /* Here we have to manually set 0 ms on startDate and 999ms on endDate, becuase baseui internally clamps day to start of the day.
        But in this function they only set hours, minutes and seconds to 0 and ms remains as it is. So, isDayInRange check fails, where
        they checks (startDate<=endDate). As milliseconds of end Date may be greater then start Date, it leads to failure of presets like
        Last 1 Hour, Last 2 to 1 Hours, Last 12 Hours, etc...
        */
        nextDate = [
          ...(nextDate[0] ? [new Date(nextDate[0].setMilliseconds(0))] : []),
          ...(nextDate[1] ? [new Date(nextDate[1].setMilliseconds(999))] : []),
        ] as [Date, Date] | [];
        setPreset(_preset);
        setTimeRange(nextDate);
        onChange?.({
          value: _preset,
          date: nextDate,
          preset: _preset,
          ...(disableTimezone ? {} : { timezone }),
        });
      } else {
        let nextDate = date;
        if (nextDate.length === 2) {
          // handles the case when user selects the end time which is less then start time
          const [start, end] = nextDate;
          if (dateHelpers.isAfter(start, end)) {
            nextDate = [start, start];
          }
        }
        setTimeRange(nextDate);
        setPreset('CUSTOM');
        onChange?.({
          value: nextDate,
          date: nextDate,
          preset: 'CUSTOM',
          ...(disableTimezone ? {} : { timezone }),
        });
      }
    },
    [setTimeRange, dateHelpers, timeRangePresets, onChange, timezone, disableTimezone]
  );

  const handleSubmit = useCallback(
    () =>
      onSubmit({
        timeRange,
        preset,
        ...(disableTimezone ? {} : { timezone }),
      }),
    [timeRange, preset, timezone, onSubmit, disableTimezone]
  );

  // show error message only when it is present, hasError can be true when user has not selected any date,
  // but we are showing any error message for that scenario.
  const errorEl = errMsg ? (
    <Stack direction="horizontal" gap={1} className={cx('mr-1', { 'items-center': monthsShown !== 1 })} shrink>
      <ErrorIcon
        size={14}
        className={[
          'block',
          ({ theme }) => ({
            fill: theme.spr.clrRed,
          }),
        ]}
      />
      <Typography className="my-0" variant="bs3">
        {errMsg}
      </Typography>
    </Stack>
  ) : null;

  return (
    <Box className="spr-ui-01 rounded-8">
      <Header $setTimezone={setTimezone} $onClose={props.onClose} {...headerProps}>
        <HeaderBeforeEnhancer
          variant="bs1"
          $as="span"
          weight="medium"
          className="flex items-center"
          {...headerBeforeEnhancerProps}
        >
          {locale.timeRangePicker.headerLabel}
        </HeaderBeforeEnhancer>
        {disableTimezone ? null : (
          <TimezonePicker setTimezone={setTimezone} timezone={timezone} {...timezonePickerProps} />
        )}
      </Header>

      <RangeSelector
        overrides={props.overrides}
        timeSelect={props.timeSelect}
        timeRangePresets={timeRangePresets}
        timezone={timezone}
        timeRange={timeRange}
        preset={preset}
        onChange={onDateChange}
        adapter={adapter}
        peekNextMonth={props.peekNextMonth}
        excludeDates={props.excludeDates}
        filterDate={props.filterDate}
        minDate={minDate}
        maxDate={maxDate}
        formatString={props.formatString}
        locale={props.locale}
        fixedHeight={props.fixedHeight}
        monthsShown={monthsShown}
      />

      <Footer $hasError={hasError} $onSubmit={handleSubmit} $onClose={props.onClose} {...footerProps}>
        <Box className="justify-between w-0 flex-grow flex">
          <FooterBeforeEnhancer {...footerBeforeEnhancerProps} />
          <Stack
            direction={monthsShown === 1 ? 'vertical' : 'horizontal'}
            gap={3}
            className={[cx({ 'items-center': monthsShown !== 1 }), { maxWidth: 'fit-content' }]}
          >
            {monthsShown === 1 ? null : errorEl}
            <StackItem className="flex self-end">
              <Button size="sm" onClick={props.onClose} variant="secondary" data-testid="cancel">
                {locale.timeRangePicker.cancelBtnLabel}
              </Button>
              <Button size="sm" className="ml-3" onClick={handleSubmit} disabled={hasError} data-testid="save">
                {locale.timeRangePicker.saveBtnLabel}
              </Button>
            </StackItem>
            {monthsShown === 1 ? errorEl : null}
          </Stack>
        </Box>
      </Footer>
    </Box>
  );
};

RangeSelectorContainer.displayName = 'RangeSelectorContainer';

export default RangeSelectorContainer;
