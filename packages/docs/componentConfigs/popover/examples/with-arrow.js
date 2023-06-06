import { Button } from 'spaceweb/button';
import { StatefulPopover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';
export default () => (
  <StatefulPopover
    showArrow
    content={
      <Typography variant="bs3" className="p-4">
        hello world
      </Typography>
    }
    accessibilityType="tooltip"
  >
    <Button>Open</Button>
  </StatefulPopover>
);
