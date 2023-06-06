import { Button } from 'spaceweb/button';
import { StatefulPopover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';

export default () => (
  <StatefulPopover
    content={
      <Typography variant="bs3" className="p-4">
        Server-side rendered (check source!)
      </Typography>
    }
    accessibilityType="tooltip"
    renderAll
  >
    <Button>Always Rendered for SEO / server-side rendering</Button>
  </StatefulPopover>
);
