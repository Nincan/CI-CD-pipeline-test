import { Button } from 'spaceweb/button';
import { StatefulPopover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';

const overrides = {
  ArrowTriangle: {
    style: ({ theme }) => ({
      borderTopColor: theme.spr.supportWarning,
      borderRightColor: theme.spr.supportWarning,
    }),
  },
  Body: {
    style: ({ theme }) => ({
      backgroundColor: theme.spr.supportWarning,
      borderTopLeftRadius: theme.borderRadius.default,
      borderTopRightRadius: theme.borderRadius.default,
      borderBottomRightRadius: theme.borderRadius.default,
      borderBottomLeftRadius: theme.borderRadius.default,
    }),
  },
  Inner: {
    style: ({ theme }) => ({
      backgroundColor: theme.spr.supportWarning,
      borderTopLeftRadius: theme.borderRadius.default,
      borderTopRightRadius: theme.borderRadius.default,
      borderBottomRightRadius: theme.borderRadius.default,
      borderBottomLeftRadius: theme.borderRadius.default,
      color: theme.spr.text05,
    }),
  },
};

export default () => (
  <StatefulPopover
    initialState={{ isOpen: true }}
    showArrow
    overrides={overrides}
    content={
      <Typography variant="bs3" className="p-4">
        hello world
      </Typography>
    }
  >
    <Button>Click Me</Button>
  </StatefulPopover>
);
