import { ReactElement } from 'react';
import { ThemeProvider } from 'spaceweb/theme';
import hyperspaceDark from '@sprinklr/spaceweb-themes/hyperspace/dark';
import { StatefulPopover } from 'spaceweb/popover';
import { Box } from 'spaceweb/box';
import { Button } from 'spaceweb/button';

const DarkTheme = (): ReactElement => (
  <ThemeProvider theme={hyperspaceDark}>
    <StatefulPopover
      content={() => (
        <Box className="spr-ui-01 p-4 m-1">
          <Button>Check the background.</Button>
        </Box>
      )}
    >
      <Box className="spr-ui-01 p-5 inline-block">
        <Button> Click here </Button>
      </Box>
    </StatefulPopover>
  </ThemeProvider>
);

export default DarkTheme;
