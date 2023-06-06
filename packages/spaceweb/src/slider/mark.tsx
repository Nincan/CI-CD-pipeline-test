import * as React from 'react';
import { StyledMark, StyledMarkLabel } from './styled-components';
import { MarkProps } from './types';
import { useOverrides } from '../overrides/useOverrides';

const Mark = React.forwardRef<HTMLElement, MarkProps>(({ markLabel, getMarkLabel, overrides, ...props }, ref) => {
  const [MarkLabel, markLabelProps] = useOverrides(overrides?.MarkLabel, StyledMarkLabel);

  return (
    <StyledMark {...props} ref={ref}>
      {markLabel ? <MarkLabel {...markLabelProps}>{getMarkLabel(props)}</MarkLabel> : null}
    </StyledMark>
  );
});

export default Mark;
