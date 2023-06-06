import { Button } from 'spaceweb/button';
import { StatefulPopover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';

export default () => (
  <StatefulPopover
    content={
      <Typography variant="bs3" className="p-4">
        hello world
      </Typography>
    }
    accessibilityType="tooltip"
  >
    {({ isOpen }) => <Button isSelected={isOpen}>Open</Button>}
  </StatefulPopover>
);
