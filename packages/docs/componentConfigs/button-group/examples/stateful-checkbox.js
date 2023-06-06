import { Button } from 'spaceweb/button';
import { StatefulButtonGroup, MODE } from 'spaceweb/button-group';

export default () => (
  <StatefulButtonGroup mode="checkbox" initialState={[0, 1]} variant="secondary">
    <Button>Label</Button>
    <Button>Label</Button>
    <Button>Label</Button>
  </StatefulButtonGroup>
);
