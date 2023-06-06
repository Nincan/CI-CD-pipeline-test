import { Button } from 'spaceweb/button';
import { Grid, Col } from 'spaceweb/grid';
import { Typography } from 'spaceweb/typography';

const Variants = () => (
  <Grid cols={5} rowGap={4}>
    <Col />
    <Col>
      <Typography variant="l2">Primary</Typography>
    </Col>
    <Col>
      <Typography variant="l2">Secondary</Typography>
    </Col>
    <Col>
      <Typography variant="l2">Tertiary</Typography>
    </Col>
    <Col>
      <Typography variant="l2">Minimal</Typography>
    </Col>
    <Col>
      <Typography variant="l2">Active</Typography>
    </Col>
    <Col>
      <Button variant="primary">Submit</Button>
    </Col>
    <Col>
      <Button variant="secondary">Cancel</Button>
    </Col>
    <Col>
      <Button variant="tertiary">Add</Button>
    </Col>
    <Col>
      <Button variant="minimal">Clear</Button>
    </Col>
    <Col>
      <Typography variant="l2">Disabled</Typography>
    </Col>
    <Col>
      <Button variant="primary" disabled>
        Submit
      </Button>
    </Col>
    <Col>
      <Button variant="secondary" disabled>
        Cancel
      </Button>
    </Col>
    <Col>
      <Button variant="tertiary" disabled>
        Add
      </Button>
    </Col>
    <Col>
      <Button variant="minimal" disabled>
        Clear
      </Button>
    </Col>
    <Col>
      <Typography variant="l2">Loading</Typography>
    </Col>
    <Col>
      <Button variant="primary" isLoading>
        Submit
      </Button>
    </Col>
    <Col>
      <Button variant="secondary" isLoading>
        Cancel
      </Button>
    </Col>
    <Col>
      <Button variant="tertiary" isLoading>
        Add
      </Button>
    </Col>
    <Col>
      <Button variant="minimal" isLoading>
        Clear
      </Button>
    </Col>
  </Grid>
);

export default Variants;
