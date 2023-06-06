import { ReactElement } from 'react';
import { Grid, Col as SpaceCol } from 'spaceweb/grid';

const Col = (props): ReactElement => (
  <SpaceCol {...props} className={['p-4 spr-text-02 text-center spr-ui-focus', props.className]} />
);

export default (): ReactElement | null => (
  <Grid rows={3} gap={4}>
    <Col rowSpan={3}>1</Col>
    <Col colSpan={2}>2</Col>
    <Col rowSpan={2} colSpan={2}>
      3
    </Col>
  </Grid>
);
