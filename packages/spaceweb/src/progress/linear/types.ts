import { Override } from '../../overrides';
import { ProgressProps, ProgressSharedProps } from '../types';

export type LinearSharedProps = ProgressSharedProps;
export type LinearProgressProps = ProgressProps & {
  overrides?: {
    Root?: Override<LinearSharedProps & Record<string, any>>;
    Bar?: Override<LinearSharedProps & Record<string, any>>;
    Progress?: Override<LinearSharedProps & Record<string, any>>;
    Label?: Override<LinearSharedProps & Record<string, any>>;
  };
  label?: React.ReactNode | ((props: LinearSharedProps) => React.ReactNode);
};

export type ProgressSegmentProps = Pick<ProgressProps, 'className' | 'color' | 'intent' | 'value'> & {
  overrides?: {
    Progress?: Override<LinearSharedProps & Record<string, any>>;
  };
  first?: boolean;
  last?: boolean;
};
