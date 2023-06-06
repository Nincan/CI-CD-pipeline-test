import { Box } from 'spaceweb/box';
import { ThemeProvider } from 'spaceweb/theme';
import { Typography } from 'spaceweb/typography';
import { Avatar } from 'spaceweb/avatar';

const Profile = ({ dir }) => (
  <Box className={['flex border-1 spr-border-03 rounded-8 pl-4 py-4', { minWidth: '300px' }]}>
    <Avatar
      src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/1024/mahatma-gandhi-icon.png"
      name="Gandhi"
      size={50}
    />
    <Box className="flex flex-col ml-2 justify-center">
      <Typography variant="l1" weight="semibold">
        {dir === 'rtl' ? 'مهاتما غاندي' : 'Mahatma Gandhi'}
      </Typography>
      <Typography variant="l1">{dir === 'rtl' ? 'محامي هندي' : 'Indian lawyer'}</Typography>
    </Box>
  </Box>
);

const Direction2Col = () => (
  <Box className="pt-4 pb-8 typography-h4 flex justify-between spr-ui-01 rounded-8">
    <ThemeProvider theme={{ direction: 'ltr' }}>
      <Box dir="ltr">
        <Typography variant="h6" className="mb-1">
          Left-to-right
        </Typography>
        <Profile dir="ltr" />
      </Box>
    </ThemeProvider>
    <ThemeProvider theme={{ direction: 'rtl' }}>
      <Box dir="rtl">
        <Typography variant="h6" className="mb-1">
          Right-to-left
        </Typography>
        <Profile dir="rtl" />
      </Box>
    </ThemeProvider>
  </Box>
);

export default Direction2Col;
