import { forwardRef, useMemo } from 'react';
import { useOverrides } from '../../overrides';
import { add$props } from '../../helpers';
import { StyledProgress, progressSegmentStyles, getProgressInlineStyles } from './styled-component';
import { ProgressSegmentProps } from './types';

const ProgressSegment = forwardRef<HTMLElement, ProgressSegmentProps>(
  ({ intent, color, value, overrides, className, first = false, last = false, ...props }, ref) => {
    const sharedProps = add$props({ intent, color, value, first, last });
    const [Progress, progressProps] = useOverrides(overrides?.Progress, StyledProgress);

    const mergedClassName = useMemo(
      () => [className, progressSegmentStyles, progressProps.className],
      [className, progressProps.className]
    );

    return (
      <Progress
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        data-testid="filled-track"
        ref={ref}
        inlineStyles={getProgressInlineStyles({ value })}
        {...sharedProps}
        {...props}
        {...progressProps}
        className={mergedClassName}
      />
    );
  }
);

export default ProgressSegment;
