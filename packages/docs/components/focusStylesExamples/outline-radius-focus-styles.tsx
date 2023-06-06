import { Box } from 'spaceweb/box';

const OutlineRadiusFocusStyles = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <Box tabIndex={0} className="spr-ui-01 p-4 rounded-8 focus-visible:outline-01">
      Border radius controls my outline radius
    </Box>
  </Box>
);

export default OutlineRadiusFocusStyles;
