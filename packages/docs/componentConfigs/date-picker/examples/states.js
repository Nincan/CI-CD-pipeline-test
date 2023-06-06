import { useState } from 'react';
import { Typography } from 'spaceweb/typography';
import { DatePicker } from 'spaceweb/date-picker';
import { Col, Grid } from 'spaceweb/grid';

export default () => {
  const [date, setDate] = useState();
  const handleDateChange = value => {
    setDate(value.value);
  };
  return (
    <Grid cols={3} gap={4}>
      <Col>
        <Typography variant="l1">Clearable</Typography>
      </Col>
      <Col>
        <Typography variant="l1">Disabled</Typography>
      </Col>
      <Col>
        <Typography variant="l1">Error</Typography>
      </Col>
      <Col>
        <DatePicker value={date} onChange={handleDateChange} clearable />
      </Col>
      <Col>
        <DatePicker value={date} onChange={handleDateChange} disabled />
      </Col>
      <Col>
        <DatePicker value={date} onChange={handleDateChange} intent="error" />
      </Col>
      <Col>
        <DatePicker value={date} onChange={handleDateChange} clearable variant="line" />
      </Col>
      <Col>
        <DatePicker value={date} onChange={handleDateChange} disabled variant="line" />
      </Col>
      <Col>
        <DatePicker value={date} onChange={handleDateChange} intent="error" variant="line" />
      </Col>
    </Grid>
  );
};
