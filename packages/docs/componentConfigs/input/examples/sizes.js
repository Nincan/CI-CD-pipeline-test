import { Input } from 'spaceweb/input';
import { Stack } from 'spaceweb/stack';

export default () => (
  <Stack direction="vertical" gap={4}>
    <Input size="xs" placeholder="X small" />
    <Input size="sm" placeholder="small" />
    <Input size="md" placeholder="medium" />
  </Stack>
);
