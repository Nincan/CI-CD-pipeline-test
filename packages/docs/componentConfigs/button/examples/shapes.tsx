import { Button } from 'spaceweb/button';
import { Stack } from 'spaceweb/stack';

export default () => (
  <Stack direction="vertical" gap={4}>
    <Button>Default shape</Button>
    <Button shape="square">Square shape</Button>
    <Button shape="pill">Pill shape</Button>
  </Stack>
);
