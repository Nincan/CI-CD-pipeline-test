import { ReactElement, useState } from 'react';
import * as React from 'react';

import { TimeRangePicker, TimeRangePickerValue } from 'spaceweb/time-range-picker';
import { FormatString } from 'spaceweb/date-picker';

export default (): ReactElement => {
  const [dates, setDates] = useState<Date[]>([new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000), new Date()]);
  const [preset, setPreset] = React.useState('CUSTOM');
  const [timezone, setTimezone] = React.useState<string | undefined>();

  const handleSubmit = ({ date, preset: selectedPreset, timezone: selectedTimezone }: TimeRangePickerValue): void => {
    setTimezone(selectedTimezone);
    setDates(date);
    setPreset(selectedPreset);
  };

  return (
    <TimeRangePicker
      formatString={'dd MMM,yyyy hh:mm a' as FormatString}
      value={dates}
      timezone={timezone}
      preset={preset}
      onSubmit={handleSubmit}
      timeSelect
      autoSizeInput
      clearable
      showFullDateInSummary
      showTimezoneInSummary
    />
  );
};
