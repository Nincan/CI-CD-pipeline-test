import { Grid, Col as SpaceCol } from 'spaceweb/grid';

const Col = props => <SpaceCol {...props} className={['p-4 spr-text-02 text-center spr-ui-focus', props.className]} />;

export default () => (
  <Grid style={{ height: '300px' }} rows={4} gap={4}>
    <Col rowSpan={1} colSpan={4}>
      1
    </Col>
    <Col rowSpan={3} colSpan={2}>
      <Grid rows={2} gap={4} className="h-full">
        <Col rowSpan={1}>2.1</Col>
        <Col rowSpan={1}>2.2</Col>
      </Grid>
    </Col>
    <Col rowSpan={3} colSpan={1}>
      3
    </Col>
    <Col rowSpan={3} colSpan={1}>
      <Grid rows={4} gap={4} className="h-full">
        <Col rowSpan={1}>4.1</Col>
        <Col rowSpan={3}>4.2</Col>
      </Grid>
    </Col>
  </Grid>
);
