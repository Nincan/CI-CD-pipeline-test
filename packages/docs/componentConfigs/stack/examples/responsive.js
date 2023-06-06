import { Stack } from 'spaceweb/stack';
import { Box } from 'spaceweb/box';

export default () => (
  <Stack direction="vertical" gap={4} md={{ direction: 'horizontal', gap: 8 }}>
    <Box className="spr-ui-03 flex justify-center items-center cursor-pointer p-2">Item 1</Box>
    <Box className="spr-ui-03 flex justify-center items-center cursor-pointer p-2">Item 2</Box>
    <Box className="spr-ui-03 flex justify-center items-center cursor-pointer p-2">Item 3</Box>
  </Stack>
);
