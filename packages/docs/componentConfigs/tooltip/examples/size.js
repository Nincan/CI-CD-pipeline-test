import { Fragment } from 'react';
import { Box } from 'spaceweb/box';
import { Button } from 'spaceweb/button';
import { Link } from 'spaceweb/link';
import useStyle from 'spaceweb/style/useStyle';
import { StatefulTooltip } from 'spaceweb/tooltip';
import { Typography } from 'spaceweb/typography';

export default () => {
  const { css, theme } = useStyle();
  return (
    <Typography variant="bs1">
      You can use different size variants according to your need{' '}
      <StatefulTooltip
        accessibilityType="tooltip"
        content="Brief description of word will come here on hovering the info icon."
        triggerType="click"
        size="md"
      >
        <span
          key="tooltip-1"
          className={css({
            borderBottom: `1px dotted ${theme.spr.border01}`,
            color: theme.spr.text03,
          })}
        >
          medium size variant
        </span>
      </StatefulTooltip>{' '}
      and{' '}
      <StatefulTooltip
        accessibilityType="tooltip"
        content={() => (
          <Fragment key="tooltip-2">
            <Typography variant="bs2">
              This is some tooltip text. This box shows the maximum amount of text that should appear inside. If more
              room is needed please use a modal instead.
            </Typography>
            <Box className="flex justify-between items-center w-full">
              <Link href="/">Learn More</Link>
              <Button size="sm">Save</Button>
            </Box>
          </Fragment>
        )}
        triggerType="click"
        size="lg"
      >
        <span
          className={css({
            borderBottom: `1px dotted ${theme.spr.border01}`,
            color: theme.spr.text03,
          })}
        >
          large size variant
        </span>
      </StatefulTooltip>
      .
    </Typography>
  );
};
