import { ReactElement } from 'react';
import { Grid, Col as SpaceCol } from 'spaceweb/grid';

const Col = (props): ReactElement => (
  <SpaceCol {...props} className={['p-4 spr-text-02 text-center spr-ui-focus', props.className]} />
);

export default (): ReactElement | null => (
  <Grid cols={6} gap={4}>
    <Col colStart={2} colSpan={4}>
      1
    </Col>
    <Col colStart={1} colSpan={2}>
      2
    </Col>
    <Col colEnd={7} colSpan={2}>
      3
    </Col>
    <Col colStart={1} colSpan={6}>
      4
    </Col>
  </Grid>
);
