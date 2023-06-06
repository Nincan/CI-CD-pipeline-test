import { useState } from 'react';
import * as React from 'react';
import { Box } from 'spaceweb/box';
import { Button } from 'spaceweb/button';
import { Popover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';

export default (): React.ReactElement => {
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [isOpen, setOpenState] = useState(false);
  return (
    <>
      <Box className="flex justify-around">
        <Button ref={setTargetElement}>Target Element</Button>
        <Button onClick={() => setOpenState(prevState => !prevState)}>Click to Open</Button>
      </Box>
      <Popover
        isOpen={isOpen}
        content={
          <Typography variant="bs3" className="p-4">
            hello world
          </Typography>
        }
        accessibilityType="tooltip"
        targetElement={targetElement}
        onClickOutside={() => setOpenState(false)}
      />
    </>
  );
};
