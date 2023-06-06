import { IconTextButton } from 'spaceweb/button';
import Search from 'spaceweb-icons/line/Search';
import { Grid, Col } from 'spaceweb/grid';
import { Typography } from 'spaceweb/typography';

export default () => (
  <>
    <Grid cols={3} rowGap={2} colGap={2} className="w-3/4">
      <Col />
      <Col>
        <Typography variant="l2">Default</Typography>
      </Col>
      <Col>
        <Typography variant="l2">Bulk</Typography>
      </Col>
      <Col>
        <Typography variant="l2">Without Border</Typography>
      </Col>
      <Col>
        <IconTextButton icon={Search} size="md">
          Search
        </IconTextButton>
      </Col>
      <Col>
        <IconTextButton icon={Search} size="md" variant="bulk">
          Search
        </IconTextButton>
      </Col>
      <Col>
        <Typography variant="l2">With Border</Typography>
      </Col>
      <Col>
        <IconTextButton icon={Search} size="md" bordered>
          Search
        </IconTextButton>
      </Col>
      <Col>
        <IconTextButton icon={Search} size="md" variant="bulk" bordered>
          Search
        </IconTextButton>
      </Col>
    </Grid>
    <Typography variant="h4" className="mt-6">
      IconTextButton Sizes (Default - medium)
    </Typography>
    <Grid cols={3} rowGap={2} colGap={2} className="w-34 mt-2">
      <Col>
        <Typography variant="l2">Extra Small</Typography>
      </Col>
      <Col>
        <Typography variant="l2">Small</Typography>
      </Col>
      <Col>
        <Typography variant="l2">Medium</Typography>
      </Col>
      <Col>
        <IconTextButton icon={Search} size="xs" bordered>
          Search
        </IconTextButton>
      </Col>
      <Col>
        <IconTextButton icon={Search} size="sm" bordered>
          Search
        </IconTextButton>
      </Col>
      <Col>
        <IconTextButton icon={Search} size="md" bordered>
          Search
        </IconTextButton>
      </Col>
    </Grid>
  </>
);
