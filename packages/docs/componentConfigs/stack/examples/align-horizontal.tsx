import { Stack } from 'spaceweb/stack';
import { Box } from 'spaceweb/box';

export default () => (
  <Stack
    direction="horizontal"
    gap={4}
    className="h-16 border-1 border-solid spr-border-04 items-center"
    style={{ width: '500px' }}
  >
    <Box className="spr-ui-03 flex justify-center items-center cursor-pointer h-8">Item 1</Box>
    <Box className="spr-ui-03 flex justify-center items-center cursor-pointer">Item 2</Box>
    <Box className="spr-ui-03 flex justify-center items-center cursor-pointer">Item 3</Box>
  </Stack>
);
