import { BaseButton } from 'spaceweb/base-button';
import { Box } from 'spaceweb/box';

const ActiveBaseButton = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <BaseButton className="p-3 spr-support-error spr-text-05 active:spr-support-success">Click Me</BaseButton>
  </Box>
);

export default ActiveBaseButton;
