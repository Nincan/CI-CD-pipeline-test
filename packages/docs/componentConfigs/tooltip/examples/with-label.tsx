import useStyle from 'spaceweb/style/useStyle';
import { StatefulTooltip } from 'spaceweb/tooltip';
import { Typography } from 'spaceweb/typography';

export default () => {
  const { css, theme } = useStyle();
  return (
    <Typography variant="bs1">
      You can add label on top of Tooltip{' '}
      <StatefulTooltip accessibilityType="tooltip" label="Campaign" content="Nike running">
        <span
          className={css({
            borderBottom: `1px dotted ${theme.spr.border01}`,
            color: theme.spr.text03,
          })}
        >
          tooltip with label
        </span>
      </StatefulTooltip>
    </Typography>
  );
};
