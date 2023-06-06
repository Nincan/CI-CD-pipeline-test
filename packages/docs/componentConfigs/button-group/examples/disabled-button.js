import { Button } from 'spaceweb/button';
import { StatefulButtonGroup } from 'spaceweb/button-group';

export default () => (
  <StatefulButtonGroup variant="secondary">
    <Button disabled>Disabled</Button>
    <Button>Label</Button>
    <Button>Label</Button>
  </StatefulButtonGroup>
);
