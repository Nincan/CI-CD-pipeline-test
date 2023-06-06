import { useState } from 'react';
import * as React from 'react';
import { TimeRangePicker } from 'spaceweb/time-range-picker';
import { Select } from 'spaceweb/select';
import { Col, Grid } from 'spaceweb/grid';

export default () => {
  const [formatString, setFormatString] = React.useState([]);
  const [value, setValue] = useState([new Date(new Date().getTime() - 6 * 24 * 60 * 60 * 1000), new Date()]);
  const [timezone, setTimezone] = React.useState('Asia/Kolkata');
  const handleSubmit = data => {
    setValue(data.value);
    setTimezone(data.timezone);
  };
  return (
    <Grid cols={2} gap={4}>
      <Col>
        <Select
          options={[
            { id: 'MMM dd, yyyy', label: 'MMM dd, yyyy (Jan 01, 1970)' },
            { id: 'MMM dd, yyyy hh:mm a', label: 'MMM dd, yyyy hh:mm a (Jan 01, 1970 12:59 AM)' },
            { id: 'dd MMM, yyyy', label: 'dd MMM, yyyy (01 Jan, 1970)' },
            { id: 'MM/dd/yyyy', label: 'MM/dd/yyyy (01/01/1970)' },
            { id: 'MM/dd/yy', label: 'MM/dd/yy (01/01/70)' },
            { id: 'dd-MM-yy', label: 'dd-MM-yy (01-01-70)' },
            { id: 'dd-MM-yyyy', label: 'dd-MM-yyyy (01-01-1970)' },
            { id: 'dd-MMM-yy', label: 'dd-MMM-yy (01-01-70)' },
            { id: 'dd-MMM-yyyy', label: 'dd-MMM-yyyy (01-Jan-1970)' },
            { id: 'MM-dd-yy', label: 'MM-dd-yy (01-01-70)' },
            { id: 'MM-dd-yyyy', label: 'MM-dd-yyyy (01-01-1970)' },
            { id: 'MMM-dd-yy', label: 'MMM-dd-yy (Jan-01-70)' },
            { id: 'MMM-dd-yyyy', label: 'MMM-dd-yyyy (Jan-01-1970)' },
            { id: 'yyyy-dd-MM', label: 'yyyy-dd-MM (1970-01-01)' },
          ]}
          valueKey="label"
          onChange={({ value: _value }) => setFormatString(_value)}
          value={formatString}
        />
      </Col>
      <Col>
        <TimeRangePicker
          formatString={formatString[0]?.id}
          value={value}
          timezone={timezone}
          onSubmit={handleSubmit}
          timeSelect
        />
      </Col>
    </Grid>
  );
};
