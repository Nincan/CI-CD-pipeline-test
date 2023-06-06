import useStyle from 'spaceweb/style/useStyle';
import { StatefulPopover } from 'spaceweb/popover';
import { Typography } from 'spaceweb/typography';

export default () => {
  const { css } = useStyle();
  return (
    <StatefulPopover
      content={
        <Typography variant="bs3" className="p-4">
          hello world
        </Typography>
      }
      accessibilityType="tooltip"
      triggerType="hover"
    >
      <span className={css({ fontSize: '16px' })}>Hover</span>
    </StatefulPopover>
  );
};
