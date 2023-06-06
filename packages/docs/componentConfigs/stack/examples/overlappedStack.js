import { Stack } from 'spaceweb/stack';
import { Box } from 'spaceweb/box';

const OverlappedStack = () => (
  <Stack direction="vertical" gap={-4}>
    <Box className="spr-ui-02 flex justify-center items-center p-2">Item 1</Box>
    <Box className="spr-ui-03 flex justify-center items-center p-2">Item 2</Box>
  </Stack>
);

export default OverlappedStack;
