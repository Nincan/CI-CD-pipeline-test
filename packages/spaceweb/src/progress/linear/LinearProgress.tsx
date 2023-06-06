import { ReactElement, PropsWithChildren } from 'react';
import { add$props } from '../../helpers';
import { useOverrides } from '../../overrides';
import { StyledBar, StyledLabel, StyledProgress, StyledRoot, getProgressInlineStyles } from './styled-component';
import { LinearProgressProps, LinearSharedProps } from './types';

const LinearProgress = ({
  intent = 'default',
  value = 0,
  backgroundColor,
  color,
  label,
  className,
  infinite = false,
  overrides,
  children,
}: PropsWithChildren<LinearProgressProps>): ReactElement => {
  const sharedProps = {
    ...add$props({ intent, value, backgroundColor, color, infinite }),
    $withLabel: !!label,
  } as LinearSharedProps;

  const [Root, rootProps] = useOverrides(overrides?.Root, StyledRoot);
  const [Bar, barProps] = useOverrides(overrides?.Bar, StyledBar);
  const [Progress, progressProps] = useOverrides(overrides?.Progress, StyledProgress);
  const [Label, labelProps] = useOverrides(overrides?.Label, StyledLabel);

  return (
    <Root
      data-spaceweb="linear-progress"
      role="progressbar"
      aria-valuenow={!infinite ? Math.round(value) : undefined}
      aria-valuemin={!infinite ? 0 : undefined}
      aria-valuemax={!infinite ? 100 : undefined}
      className={className}
      {...sharedProps}
      {...rootProps}
    >
      <Bar data-testid="track" {...sharedProps} {...barProps}>
        {children || (
          <Progress
            data-testid="filled-track"
            inlineStyles={getProgressInlineStyles({ value, infinite })}
            {...sharedProps}
            {...progressProps}
          />
        )}
      </Bar>
      {label ? (
        <Label {...sharedProps} {...labelProps}>
          {typeof label === 'function' ? label(sharedProps) : label}
        </Label>
      ) : null}
    </Root>
  );
};

export default LinearProgress;
