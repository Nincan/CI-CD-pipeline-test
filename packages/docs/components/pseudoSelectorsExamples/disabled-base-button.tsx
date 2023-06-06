import { BaseButton } from 'spaceweb/base-button';
import { Box } from 'spaceweb/box';

const DisabledBaseButton = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <BaseButton className="mr-2 p-3 spr-support-error spr-text-05 disabled:opacity-25">Submit</BaseButton>
    <BaseButton disabled className="p-3 spr-support-error spr-text-05 disabled:opacity-25 disabled:cursor-not-allowed">
      Submit
    </BaseButton>
  </Box>
);

export default DisabledBaseButton;
