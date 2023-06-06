import { Button } from 'spaceweb/button';
import { StatefulButtonGroup } from 'spaceweb/button-group';

export default () => (
  <StatefulButtonGroup mode="radio" initialState={[0]} variant="secondary">
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
  </StatefulButtonGroup>
);
