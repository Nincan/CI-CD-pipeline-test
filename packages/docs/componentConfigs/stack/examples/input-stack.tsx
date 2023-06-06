import { Stack } from 'spaceweb/stack';
import { StatefulInput } from 'spaceweb/input';

export default () => (
  <Stack
    direction="vertical"
    gap={2}
    sm={{ direction: 'horizontal', gap: 4 }}
    md={{ direction: 'vertical', gap: 8 }}
    xl={{ direction: 'horizontal', gap: 4 }}
  >
    <StatefulInput />
    <StatefulInput />
    <StatefulInput />
  </Stack>
);
