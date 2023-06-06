import { Grid, Col as SpaceCol } from 'spaceweb/grid';

const Col = props => <SpaceCol {...props} className={['p-4 spr-text-02 text-center spr-ui-focus', props.className]} />;

const Columns = () => (
  <Grid cols={3} gap={4}>
    <Col>1</Col>
    <Col>2</Col>
    <Col>3</Col>
    <Col>4</Col>
    <Col>5</Col>
    <Col>6</Col>
    <Col>7</Col>
    <Col>8</Col>
    <Col>9</Col>
  </Grid>
);

export default Columns;
