import { Button } from 'spaceweb/button';
import { Grid, Col } from 'spaceweb/grid';

const FullWidthButtons = () => (
  <Grid cols={2} gap={4} className="w-3/4">
    <Col>
      <Button variant="tertiary" fullWidth>
        Transfer
      </Button>
    </Col>
    <Col>
      <Button variant="tertiary" fullWidth>
        Escalate
      </Button>
    </Col>
    <Col>
      <Button variant="secondary" fullWidth>
        Archive
      </Button>
    </Col>
    <Col>
      <Button variant="secondary" fullWidth>
        Reassign
      </Button>
    </Col>
    <Col colSpan={2}>
      <Button fullWidth>Close Case</Button>
    </Col>
  </Grid>
);

export default FullWidthButtons;
