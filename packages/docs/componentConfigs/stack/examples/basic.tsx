import { Stack, StackItem } from 'spaceweb/stack';
import { Button } from 'spaceweb/button';
import { StatefulInput } from 'spaceweb/input';

export default () => (
  <Stack direction="vertical" gap={4}>
    <Stack direction="horizontal" gap={2}>
      <StatefulInput />
      <StatefulInput />
      <StackItem shrink>
        <StatefulInput />
      </StackItem>
    </Stack>
    <Stack direction="horizontal" gap={2} xl={{ direction: 'horizontal', gap: 2 }} shrink>
      <Button variant="secondary">Cancel</Button>
      <StackItem shrink>
        <Button>Save</Button>
      </StackItem>
    </Stack>
  </Stack>
);
