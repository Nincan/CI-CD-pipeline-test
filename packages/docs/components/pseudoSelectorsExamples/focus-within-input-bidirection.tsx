import { Box } from 'spaceweb/box';
import { styled } from 'spaceweb/style';
import EmailIcon from 'spaceweb-icons/solid/Email';
import { ThemeProvider } from 'spaceweb/theme';
import { Typography } from 'spaceweb/typography';

const StyledInput = styled('input');

const EnhancedInput = () => (
  <Box
    className={[
      { width: '250px' },
      'flex items-center spr-ui-01 h-10 typography-h4 px-4 rounded-8 border-solid border-2 spr-text-01 ',
      'border-transparent focus-within:spr-focus-01 focus-within:spr-support-error-text',
    ]}
  >
    <EmailIcon size={18} />
    <StyledInput placeholder="Focus Me" className="box-border h-full ml-4 w-full border-transparent" />
  </Box>
);

const FocusWithinInputBiDirection = () => (
  <Box className="py-8 px-4 typography-h4 flex justify-center spr-ui-03 rounded-8 gap-8">
    <ThemeProvider theme={{ direction: 'ltr' }}>
      <Box dir="ltr">
        <Typography variant="h7" className="mb-1">
          Left-to-right
        </Typography>
        <EnhancedInput />
      </Box>
    </ThemeProvider>
    <ThemeProvider theme={{ direction: 'rtl' }}>
      <Box dir="rtl">
        <Typography variant="h7" className="mb-1">
          Right-to-left
        </Typography>
        <EnhancedInput />
      </Box>
    </ThemeProvider>
  </Box>
);

export default FocusWithinInputBiDirection;
