import { Stack } from 'spaceweb/stack';
import { Button } from 'spaceweb/button';
import { Box } from 'spaceweb/box';
import { StatefulInput } from 'spaceweb/input';

export default () => (
  <Stack direction="vertical" gap={4}>
    <Stack direction="vertical" gap={4} sm={{ direction: 'horizontal', gap: 2 }}>
      <Box className="w-32 h-32 flex items-center justify-center border-solid spr-border-01"> Upload </Box>
      <Stack direction="vertical" gap={4}>
        <Stack direction="vertical" gap={2} sm={{ direction: 'horizontal', gap: 4 }}>
          <StatefulInput placeholder="First Name" />
          <StatefulInput placeholder="Last Name" />
        </Stack>
        <Stack direction="vertical" gap={2} sm={{ direction: 'horizontal', gap: 4 }}>
          <StatefulInput placeholder="Designation" />
          <StatefulInput placeholder="Organization" />
        </Stack>
      </Stack>
    </Stack>
    <Stack direction="horizontal" gap={2} shrink>
      <Button variant="secondary">Cancel</Button>
      <Button variant="primary">Save</Button>
    </Stack>
  </Stack>
);
