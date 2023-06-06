import { BaseButton } from 'spaceweb/base-button';
import { Box } from 'spaceweb/box';
import { Typography } from 'spaceweb/typography';

const GroupHoverBaseButton = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <Box className={{ width: '200px' }}>
      <BaseButton className="group p-3 w-full flex flex-col items-start text-left rounded-8 spr-support-error spr-text-05 hover:spr-ui-05">
        <Typography variant="h5" className="group-hover:spr-text-01">
          On Parent Hover
        </Typography>
        <Typography variant="h6" className="group-hover:spr-support-error-text">
          This text will change its color.
        </Typography>
      </BaseButton>
    </Box>
  </Box>
);

export default GroupHoverBaseButton;
