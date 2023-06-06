import { Override } from '../overrides';
import { SpacewebComponentProps } from '../types';

export type BoxProps = SpacewebComponentProps & {
  overrides?: { Box?: Override<Record<string, any>> };
};
