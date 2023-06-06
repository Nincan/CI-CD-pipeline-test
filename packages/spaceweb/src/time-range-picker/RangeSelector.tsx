import { memo, ReactElement } from 'react';

import { Box } from '../box';
import DefaultTimeRangeList from './TimeRangeList';
import BaseCalendar from '../date-picker/Calendar';

import { RangeSelectorProps } from './types';
import { useOverrides } from '../overrides';
import { getHeight } from './utils';

const RangeSelector = ({ timeRange, preset, onChange, formatString, ...props }: RangeSelectorProps): ReactElement => {
  const [TimeRangeList, timeRangeListProps] = useOverrides(props.overrides?.TimeRangeList, DefaultTimeRangeList);
  const [Calendar, calendarProps] = useOverrides(props.overrides?.Calendar, BaseCalendar);

  const height = getHeight({
    monthsShown: props.monthsShown,
    timeSelect: props.timeSelect,
  });

  return (
    <Box
      className={[
        'flex border-t-1 border-b-1 border-r-0 border-l-0 border-solid spr-border-01',
        { height: `${height}px` },
      ]}
    >
      {props.timeRangePresets.length !== 1 ? (
        <TimeRangeList
          onChange={onChange}
          timeRange={timeRange}
          preset={preset}
          timeRangePresets={props.timeRangePresets}
          {...timeRangeListProps}
        />
      ) : null}
      <Box className="overflow-y-auto">
        <Calendar
          timeSelectEnd={props.timeSelect}
          timeSelectStart={props.timeSelect}
          value={timeRange}
          onChange={onChange}
          peekNextMonth={props.peekNextMonth}
          excludeDates={props.excludeDates}
          filterDate={props.filterDate}
          minDate={props.minDate}
          maxDate={props.maxDate}
          range
          monthsShown={props.monthsShown}
          locale={props.locale}
          formatString={formatString}
          // @ts-ignore
          overrides={props.overrides}
          fixedHeight={props.fixedHeight}
          {...calendarProps}
        />
      </Box>
    </Box>
  );
};

RangeSelector.displayName = 'RangeSelector';

export default memo(RangeSelector);
