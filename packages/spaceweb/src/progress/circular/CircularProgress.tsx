import { ReactElement } from 'react';
import { add$props } from '../../helpers';
import { useOverrides } from '../../overrides';
import {
  StyledBar,
  StyledBarContainer,
  StyledLabel,
  StyledLabelContainer,
  StyledProgress,
  StyledRoot,
  StyledSvg,
  VIEWBOX_SIZE,
  getProgressInlineStyles,
} from './styled-component';
import { CircularProgressProps, CircularSharedProps } from './types';

const CircularProgress = ({
  intent = 'default',
  infinite = false,
  label,
  backgroundColor,
  value = 0,
  className,
  color,
  size = 50,
  thickness = 3,
  overrides,
}: CircularProgressProps): ReactElement => {
  const strokeWidth = (VIEWBOX_SIZE / size) * thickness;

  const sharedProps = {
    ...add$props({ intent, infinite, backgroundColor, value, color, size, thickness, strokeWidth }),
    $withLabel: !!label,
  } as CircularSharedProps;

  const [Root, rootProps] = useOverrides(overrides?.Root, StyledRoot);
  const [BarContainer, barContainerProps] = useOverrides(overrides?.BarContainer, StyledBarContainer);
  const [Svg, svgProps] = useOverrides(overrides?.Svg, StyledSvg);
  const [Bar, barProps] = useOverrides(overrides?.Bar, StyledBar);
  const [Progress, progressProps] = useOverrides(overrides?.Progress, StyledProgress);
  const [LabelContainer, labelContainerProps] = useOverrides(overrides?.LabelContainer, StyledLabelContainer);
  const [Label, labelProps] = useOverrides(overrides?.Label, StyledLabel);

  return (
    <Root
      className={className}
      role="progressbar"
      aria-valuenow={!infinite ? Math.round(value) : undefined}
      aria-valuemin={!infinite ? 0 : undefined}
      aria-valuemax={!infinite ? 100 : undefined}
      {...sharedProps}
      {...rootProps}
    >
      <BarContainer data-testid="bar-container" {...sharedProps} {...barContainerProps}>
        <Svg
          viewBox={`${VIEWBOX_SIZE / 2} ${VIEWBOX_SIZE / 2} ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`}
          {...sharedProps}
          {...svgProps}
        >
          <Bar data-testid="bar" {...sharedProps} {...barProps} />
          <Progress
            inlineStyles={getProgressInlineStyles({ value, infinite, strokeWidth })}
            {...sharedProps}
            {...progressProps}
          />
        </Svg>
      </BarContainer>
      {label ? (
        <LabelContainer {...sharedProps} {...labelContainerProps}>
          <Label {...sharedProps} {...labelProps}>
            {typeof label === 'function' ? label(sharedProps) : label}
          </Label>
        </LabelContainer>
      ) : null}
    </Root>
  );
};

export default CircularProgress;
