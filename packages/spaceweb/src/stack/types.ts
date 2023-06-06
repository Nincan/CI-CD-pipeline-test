import { SpacewebComponentProps } from '../types';
import { Override } from '../overrides';

type Direction = 'horizontal' | 'vertical';

type StackConfig = {
  direction?: Direction;
  gap: number;
};

export type StackProps = SpacewebComponentProps &
  StackConfig &
  Partial<{
    sm: StackConfig;
    md: StackConfig;
    lg: StackConfig;
    xl: StackConfig;
    overrides: { Stack?: Override<Record<string, any>> };
    shrink: boolean;
  }>;

export type StackItemProps = SpacewebComponentProps &
  Partial<{
    shrink: boolean;
    index: number;
  }>;
