import useStyle from 'spaceweb/style/useStyle';
import { StatefulTooltip } from 'spaceweb/tooltip';
import { Typography } from 'spaceweb/typography';

export default () => {
  const { css, theme } = useStyle();
  return (
    <Typography variant="bs1">
      You can use tooltips in many places, including inline text{' '}
      <StatefulTooltip accessibilityType="tooltip" content="Tooltips display short messages.">
        <span
          className={css({
            borderBottom: `1px dotted ${theme.spr.border01}`,
            color: theme.spr.text03,
          })}
        >
          such as this
        </span>
      </StatefulTooltip>
      . Tooltips are essentially just a Popover with a few style tweaks, so you can use all the features that Popover
      supports.
    </Typography>
  );
};
