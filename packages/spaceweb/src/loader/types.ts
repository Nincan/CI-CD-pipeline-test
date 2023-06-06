import * as React from 'react';
import { Override } from '../overrides';
import { ClassName } from '../types';

export type Variant = 'clip' | 'beat';

export type SharedProps = {
  $variant: Variant;
  $hasLoadingContent: boolean;
  $hasDelay: boolean;
  $size?: number;
};

export type LoaderProps = {
  className?: ClassName;
  variant?: Variant;
  size?: number;
  delay?: number;
  loadingContent?: React.ReactNode;
  overrides?: {
    Root?: Override<SharedProps & Record<string, any>>;
    Text?: Override<SharedProps & Record<string, any>>;
    Loader?: Override<SharedProps & Record<string, any>>;
    BeatLoaderBall?: Override<SharedProps & Record<string, any>>;
  };
};
