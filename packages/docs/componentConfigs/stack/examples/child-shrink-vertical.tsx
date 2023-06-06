import { Stack, StackItem } from 'spaceweb/stack';
import { Box } from 'spaceweb/box';

export default () => (
  <Stack direction="vertical" gap={4} className="w-64 h-64 border-1 border-solid spr-border-04">
    <StackItem shrink>
      <Box className="h-full spr-ui-03 flex justify-center items-center cursor-pointer">Shrink Item 1</Box>
    </StackItem>
    <Box className="h-full spr-ui-03 flex justify-center items-center cursor-pointer">Item 2</Box>
    <Box className="h-full spr-ui-03 flex justify-center items-center cursor-pointer">Item 3</Box>
  </Stack>
);
