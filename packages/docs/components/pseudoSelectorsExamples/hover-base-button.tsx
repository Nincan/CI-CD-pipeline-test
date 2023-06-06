import { BaseButton } from 'spaceweb/base-button';
import { Box } from 'spaceweb/box';

const HoverBaseButton = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <BaseButton className="p-3 spr-support-error spr-text-05 hover:spr-support-success">Hover Me</BaseButton>
  </Box>
);

export default HoverBaseButton;
