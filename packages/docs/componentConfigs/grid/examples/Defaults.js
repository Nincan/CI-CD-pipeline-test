import { Grid, Col as SpaceCol } from 'spaceweb/grid';

const Col = props => <SpaceCol {...props} className={['p-4 spr-text-02 text-center spr-ui-focus', props.className]} />;

export default () => (
  <Grid>
    <Col>1</Col>
    <Col>2</Col>
    <Col>3</Col>
  </Grid>
);
