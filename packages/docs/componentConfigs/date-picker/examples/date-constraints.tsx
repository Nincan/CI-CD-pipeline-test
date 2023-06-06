import { ReactElement, useState } from 'react';

import { Typography } from 'spaceweb/typography';
import { DatePicker } from 'spaceweb/date-picker';
import { Col, Grid } from 'spaceweb/grid';

export default (): ReactElement => {
  const [date, setDate] = useState<Date | undefined>();

  const handleDateChange = (value: { value?: Date }): void => {
    setDate(value.value);
  };

  return (
    <Grid cols={2} gap={4}>
      <Col>
        <Typography variant="l1">Min Date</Typography>
      </Col>
      <Col>
        <Typography variant="l1">Max Date</Typography>
      </Col>
      <Col>
        <DatePicker value={date} onChange={handleDateChange} minDate={new Date()} />
      </Col>
      <Col>
        <DatePicker value={date} onChange={handleDateChange} maxDate={new Date()} />
      </Col>
    </Grid>
  );
};
