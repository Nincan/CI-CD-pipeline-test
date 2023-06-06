import { Box } from 'spaceweb/box';
import { Button } from 'spaceweb/button';

const ResetAtomicClassFocusStyles = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <Button className="mr-3">With Focus Styles</Button>
    <Button className="focus-visible:outline-none">Without Focus Styles</Button>
  </Box>
);

export default ResetAtomicClassFocusStyles;
