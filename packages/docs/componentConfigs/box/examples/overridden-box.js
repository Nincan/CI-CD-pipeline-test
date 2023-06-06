import { Box } from 'spaceweb/box';

const OverriddenBox = () => (
  <Box className="flex flex-col">
    <Box $as="section">As a section</Box>
    <Box $as="label">As an label</Box>
    <Box $as="span">As a span</Box>
    <Box $as="i">As italics element</Box>
  </Box>
);
export default OverriddenBox;
