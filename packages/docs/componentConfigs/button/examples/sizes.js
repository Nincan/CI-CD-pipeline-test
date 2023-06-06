import { Button } from 'spaceweb/button';
import { Grid, Col } from 'spaceweb/grid';
import * as React from 'react';

export default () => (
  <Grid cols={3} colGap={0} rowGap={2}>
    <Col>
      <Button size="xxs">XXS</Button>
    </Col>
    <Col>
      <Button size="xs">XS</Button>
    </Col>
    <Col>
      <Button size="sm">SM</Button>
    </Col>
    <Col>
      <Button size="md">MD</Button>
    </Col>
    <Col>
      <Button size="lg">Large</Button>
    </Col>
  </Grid>
);
