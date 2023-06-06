import { Stack, StackItem } from 'spaceweb/stack';
import { Box } from 'spaceweb/box';

export default () => (
  <Stack direction="horizontal" gap={4} className="h-16 border-1 border-solid spr-border-04" style={{ width: '500px' }}>
    <StackItem className="self-start">
      <Box className="spr-ui-03 flex justify-center items-center cursor-pointer h-8">Item 1</Box>
    </StackItem>
    <StackItem className="self-center">
      <Box className="spr-ui-03 flex justify-center items-center cursor-pointer">Item 2</Box>
    </StackItem>
    <StackItem className="self-end">
      <Box className="spr-ui-03 flex justify-center items-center cursor-pointer">Item 3</Box>
    </StackItem>
  </Stack>
);
