import { ReactElement } from 'react';
import { Grid, Col as SpaceCol } from 'spaceweb/grid';

const Col = (props): ReactElement => (
  <SpaceCol {...props} className={['p-4 spr-text-02 text-center spr-ui-focus', props.className]} />
);

export default (): ReactElement | null => (
  <Grid rows={6} gap={4}>
    <Col rowStart={1} rowSpan={6}>
      1
    </Col>
    <Col rowStart={1} rowSpan={3}>
      2
    </Col>
    <Col rowEnd={7} rowSpan={3}>
      3
    </Col>
    <Col rowStart={1} rowSpan={6}>
      4
    </Col>
  </Grid>
);
