import { Stack } from 'spaceweb/stack';
import { Box } from 'spaceweb/box';

export default () => (
  <Stack
    direction="vertical"
    gap={2}
    sm={{ direction: 'horizontal', gap: 4 }}
    md={{ direction: 'vertical', gap: 8 }}
    xl={{ direction: 'horizontal', gap: 4 }}
  >
    <Box className="w-32">Hello</Box>
    <Box className="w-32">Hello</Box>
    <Box className="w-32">Hello</Box>
  </Stack>
);
