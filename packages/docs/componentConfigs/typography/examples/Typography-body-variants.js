import { Typography } from 'spaceweb/typography';
import { Stack } from 'spaceweb/stack';
import { Grid, Col } from 'spaceweb/grid';

const textString = 'We ignite opportunity by setting the world in motion.';

export default () => (
  <Grid cols={3} gap={5}>
    <Col className="p-4 spr-ui-focus">
      <Typography variant="body-8">body-8 - {textString}</Typography>
    </Col>
    <Col className="p-4 spr-ui-focus">
      <Typography variant="body-10">body-10 - {textString}</Typography>
    </Col>
    <Col className="p-4 spr-ui-focus">
      <Typography variant="body-12">body-12 - {textString}</Typography>
    </Col>
    <Col className="p-4 spr-ui-focus">
      <Typography variant="body-13">body-13 - {textString}</Typography>
    </Col>
    <Col className="p-4 spr-ui-focus">
      <Typography variant="body-14">body-14 - {textString}</Typography>
    </Col>
    <Col className="p-4 spr-ui-focus">
      <Typography variant="body-16">body-16 - {textString}</Typography>
    </Col>
  </Grid>
);
