import { Stack, StackItem } from 'spaceweb/stack';
import { Box } from 'spaceweb/box';

export default () => (
  <Stack direction="vertical" gap={4} className="w-64 border-1 border-solid spr-border-04">
    <StackItem className="self-start">
      <Box className="h-full spr-ui-03 flex justify-center items-center cursor-pointer w-32">Item 1</Box>
    </StackItem>
    <StackItem className="self-center">
      <Box className="h-full spr-ui-03 flex justify-center items-center cursor-pointer">Item 2</Box>
    </StackItem>
    <StackItem className="self-end">
      <Box className="h-full spr-ui-03 flex justify-center items-center cursor-pointer">Item 3</Box>
    </StackItem>
  </Stack>
);
