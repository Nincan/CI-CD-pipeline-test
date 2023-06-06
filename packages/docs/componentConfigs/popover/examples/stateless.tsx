import * as React from 'react';
import { Popover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';

export default (): React.ReactElement => (
  <Popover
    isOpen
    content={
      <Typography variant="bs3" className="p-1">
        hello world
      </Typography>
    }
  >
    <Typography className="inline-block" variant="bs3">
      Always open
    </Typography>
  </Popover>
);
