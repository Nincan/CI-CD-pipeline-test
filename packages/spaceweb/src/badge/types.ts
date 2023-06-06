import * as React from 'react';
import { Override } from '../overrides/types';

export type Intent = 'success' | 'error' | 'warning';
export type Overlap = 'circle' | 'rectangle';
export type Size = 'sm' | 'lg';

export type BadgeProps = {
  horizontalPosition?: 'left' | 'right';
  verticalPosition?: 'top' | 'bottom';
  overlap?: Overlap; // Shape of child component
  content?: number | string | ((sharedProps: SharedProps) => React.ReactNode);
  size?: Size;
  intent?: Intent;
  overrides?: {
    Root?: Override<unknown>;
    Anchor?: Override<unknown>;
  };
};

export type SharedProps = {
  $content?: React.ReactNode;
  $horizontalPosition: 'left' | 'right';
  $verticalPosition: 'top' | 'bottom';
  $overlap: Overlap; // Shape of child component
  $size: Size;
  $intent?: Intent;
};
