import { Box } from 'spaceweb/box';
import { styled } from 'spaceweb/style';
import EmailIcon from 'spaceweb-icons/solid/Email';

const StyledInput = styled('input');
const FocusWithinInput = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <Box
      className={[
        { width: '350px' },
        'flex items-center spr-ui-01 h-10 typography-h4 px-4 rounded-8 border-solid border-2 spr-text-01 ',
        'border-transparent focus-within:spr-focus-01 focus-within:spr-support-error-text',
      ]}
    >
      <EmailIcon size={18} />
      <StyledInput placeholder="Focus Me" className="box-border h-full ml-4 w-full border-transparent" />
    </Box>
  </Box>
);

export default FocusWithinInput;
