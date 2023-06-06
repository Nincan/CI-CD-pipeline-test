import { Box } from 'spaceweb/box';
import { Checkbox } from 'spaceweb/checkbox';

const ResetSharedPropFocusStyles = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <Checkbox className="mr-4">With Focus Styles</Checkbox>
    <Checkbox $outlineStyle="none">Without Focus Styles</Checkbox>
  </Box>
);

export default ResetSharedPropFocusStyles;
