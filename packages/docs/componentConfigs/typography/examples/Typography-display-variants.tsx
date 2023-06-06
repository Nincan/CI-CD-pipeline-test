import { Typography } from 'spaceweb/typography';
import { Stack } from 'spaceweb/stack';
import { Grid, Col } from 'spaceweb/grid';

const textString = 'We ignite opportunity by setting the world in motion.';

export default () => (
  <Grid cols={2} gap={5}>
    <Col className="p-4 spr-ui-focus">
      <Typography variant="display-18">display-18 - {textString}</Typography>
    </Col>
    <Col className="p-4 spr-ui-focus">
      <Typography variant="display-20">display-20 - {textString}</Typography>
    </Col>
    <Col className="p-4 spr-ui-focus">
      <Typography variant="display-24">display-24 - {textString}</Typography>
    </Col>
    <Col className="p-4 spr-ui-focus">
      <Typography variant="display-28">display-28 - {textString}</Typography>
    </Col>
    <Col colSpan={2} className="p-4 spr-ui-focus">
      <Typography variant="display-32">display-32 - {textString}</Typography>
    </Col>
    <Col colSpan={2} className="p-4 spr-ui-focus">
      <Typography variant="display-40">display-40 - {textString}</Typography>
    </Col>
    <Col colSpan={2} className="p-4 spr-ui-focus">
      <Typography variant="display-42">display-42 - {textString}</Typography>
    </Col>
  </Grid>
);
