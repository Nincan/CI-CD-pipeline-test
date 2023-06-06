import { Box } from 'spaceweb/box';
import { styled } from 'spaceweb/style';

const StyledInput = styled('input');
const FocusInput = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8">
    <Box className={[{ width: '350px' }, 'typography-h4']}>
      <StyledInput
        placeholder="Focus Me"
        className="py-3 px-4 rounded-8 w-full border-transparent border-2 focus:spr-focus-01"
      />
    </Box>
  </Box>
);

export default FocusInput;
