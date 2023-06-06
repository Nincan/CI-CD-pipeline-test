import { Button } from 'spaceweb/button';
import { Grid, Col } from 'spaceweb/grid';
import { Typography } from 'spaceweb/typography';

const Intents = () => (
  <Grid cols={4} rowGap={4}>
    <Col>
      <Typography variant="l2">Default</Typography>
    </Col>
    <Col>
      <Typography variant="l2">Success</Typography>
    </Col>
    <Col>
      <Typography variant="l2">Warning</Typography>
    </Col>
    <Col>
      <Typography variant="l2">Error</Typography>
    </Col>
    <Col>
      <Button intent="default">Apply</Button>
    </Col>
    <Col>
      <Button intent="success">Approve</Button>
    </Col>
    <Col>
      <Button intent="warning">Warning</Button>
    </Col>
    <Col>
      <Button intent="error">Delete</Button>
    </Col>
    <Col>
      <Button variant="tertiary" intent="default">
        Apply
      </Button>
    </Col>
    <Col>
      <Button variant="tertiary" intent="success">
        Approve
      </Button>
    </Col>
    <Col>
      <Button variant="tertiary" intent="warning">
        Warning
      </Button>
    </Col>
    <Col>
      <Button variant="tertiary" intent="error">
        Delete
      </Button>
    </Col>
    <Col>
      <Button variant="minimal" intent="default">
        Apply
      </Button>
    </Col>
    <Col>
      <Button variant="minimal" intent="success">
        Approve
      </Button>
    </Col>
    <Col>
      <Button variant="minimal" intent="warning">
        Warning
      </Button>
    </Col>
    <Col>
      <Button variant="minimal" intent="error">
        Delete
      </Button>
    </Col>
  </Grid>
);
export default Intents;
