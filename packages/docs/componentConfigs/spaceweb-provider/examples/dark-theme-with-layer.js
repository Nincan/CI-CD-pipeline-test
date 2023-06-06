import * as React from 'react';
import { ThemeProvider } from 'spaceweb/theme';
import { LayersManager } from 'spaceweb/layer';
import hyperspaceDark from '@sprinklr/spaceweb-themes/hyperspace/dark';
import { Box } from 'spaceweb/box';
import { StatefulPopover } from 'spaceweb/popover';
import { Button } from 'spaceweb/button';

const DarkTheme = () => {
  const [containerElement, setContainerElement] = React.useState(null);
  return (
    <ThemeProvider theme={hyperspaceDark} containerElement={containerElement}>
      <LayersManager host={containerElement}>
        <Box ref={setContainerElement}>
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
        </Box>
      </LayersManager>
    </ThemeProvider>
  );
};

export default DarkTheme;
