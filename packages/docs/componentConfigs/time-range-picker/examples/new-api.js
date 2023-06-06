import { useState } from 'react';
import * as React from 'react';
import { TimeRangePicker } from 'spaceweb/time-range-picker';

export default () => {
  const [dates, setDates] = useState([new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000), new Date()]);
  const [preset, setPreset] = React.useState('CUSTOM');
  const [timezone, setTimezone] = React.useState();
  const handleSubmit = ({ date, preset: selectedPreset, timezone: selectedTimezone }) => {
    setTimezone(selectedTimezone);
    setDates(date);
    setPreset(selectedPreset);
  };
  return (
    <TimeRangePicker
      formatString="dd MMM,yyyy hh:mm a"
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
