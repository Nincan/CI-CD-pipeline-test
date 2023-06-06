import { Box } from 'spaceweb/box';
import { Loader } from 'spaceweb/loader';

const SIZES = [6, 10, 12, 16, 20, 24];

export default () => (
  <Box className="flex justify-between items-end">
    {SIZES.map(size => (
      <Loader key={size} size={size} loadingContent={`Size - ${size}`} />
    ))}
  </Box>
);
