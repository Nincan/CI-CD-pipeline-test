import { ClassName, Intent } from '../types';

export type ProgressSharedProps = {
  $color?: string;
  $backgroundColor?: string;
  $value: number;
  $intent: Intent;
  $withLabel: boolean;
  $infinite?: boolean;
};
export type ProgressProps = {
  className?: ClassName;
  color?: string;
  backgroundColor?: string;
  value?: number;
  intent?: Intent;
  infinite?: boolean;
};

export type { Intent };
