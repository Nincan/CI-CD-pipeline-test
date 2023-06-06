import { ReactElement } from 'react';
import { Grid, Col as SpaceCol } from 'spaceweb/grid';

const Col = (props): ReactElement => (
  <SpaceCol {...props} className={['p-4 spr-text-02 text-center spr-ui-focus', props.className]} />
);

export default (): ReactElement => (
  <Grid cols={3} gap={4}>
    <Col colSpan={3}>1</Col>
    <Col colSpan={2}>2</Col>
    <Col>3</Col>
    <Col>4</Col>
    <Col colSpan={2}>5</Col>
  </Grid>
);
