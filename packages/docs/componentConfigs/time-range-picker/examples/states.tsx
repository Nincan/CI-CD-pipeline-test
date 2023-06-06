import { ReactElement, useState } from 'react';
import * as React from 'react';

import { Typography } from 'spaceweb/typography';
import { TimeRangePicker } from 'spaceweb/time-range-picker';
import { Col, Grid } from 'spaceweb/grid';

export default (): ReactElement => {
  const [value, setValue] = useState<Date[] | string>();
  const [timezone, setTimezone] = React.useState('Asia/Kolkata');

  const handleSubmit = data => {
    setValue(data.value);
    setTimezone(data.timezone);
  };

  return (
    <Grid cols={3} gap={4}>
      <Col>
        <Typography variant="l1">Time Select</Typography>
      </Col>
      <Col>
        <Typography variant="l1">Disabled</Typography>
      </Col>
      <Col>
        <Typography variant="l1">Error</Typography>
      </Col>
      <Col>
        <TimeRangePicker value={value} timezone={timezone} onSubmit={handleSubmit} timeSelect />
      </Col>
      <Col>
        <TimeRangePicker value={value} timezone={timezone} onSubmit={handleSubmit} timeSelect disabled />
      </Col>
      <Col>
        <TimeRangePicker value={value} timezone={timezone} onSubmit={handleSubmit} timeSelect intent="error" />
      </Col>
      <Col>
        <TimeRangePicker value={value} timezone={timezone} onSubmit={handleSubmit} timeSelect={false} variant="line" />
      </Col>
      <Col>
        <TimeRangePicker value={value} timezone={timezone} onSubmit={handleSubmit} timeSelect disabled variant="line" />
      </Col>
      <Col>
        <TimeRangePicker
          value={value}
          timezone={timezone}
          onSubmit={handleSubmit}
          timeSelect
          intent="error"
          variant="line"
        />
      </Col>
    </Grid>
  );
};
