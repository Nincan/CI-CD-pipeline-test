import { forwardRef } from 'react';

import { useOverrides } from '../overrides';
import { styled } from '../style';
import { BoxProps } from './types';

const StyledBox = styled('div');

const Box = forwardRef<HTMLElement, React.PropsWithChildren<BoxProps>>((props, ref) => {
  const { overrides = {}, ...boxProps } = props;
  const [Comp, overrideProps] = useOverrides(overrides.Box, StyledBox);

  return <Comp data-spaceweb="box" data-testid="box" {...boxProps} {...overrideProps} ref={ref} />;
});

Box.displayName = 'Box';

export default Box;
