import { Override } from '../../overrides';
import { ProgressSharedProps, ProgressProps } from '../types';

export type CircularSharedProps = ProgressSharedProps & {
  $size: number;
  $thickness: number;
  $strokeWidth: number;
};
export type CircularProgressProps = ProgressProps & {
  size?: number;
  thickness?: number;
  overrides?: {
    Root?: Override<CircularSharedProps & Record<string, any>>;
    LabelContainer?: Override<CircularSharedProps & Record<string, any>>;
    Label?: Override<CircularSharedProps & Record<string, any>>;
    Svg?: Override<CircularSharedProps & Record<string, any>>;
    BarContainer?: Override<CircularSharedProps & Record<string, any>>;
    Bar?: Override<CircularSharedProps & Record<string, any>>;
    Progress?: Override<CircularSharedProps & Record<string, any>>;
  };
  label?: React.ReactNode | ((props: CircularSharedProps) => React.ReactNode);
};
