import * as React from 'react';
import { AvatarProps } from '../avatar';
import { Override } from '../overrides';
import { ClassName } from '../types';

export type Intent = 'success' | 'error' | 'warning' | 'info' | 'default';
export type Variant = 'solid' | 'light';
export type Size = 'xxxs' | 'sm' | 'lg';

export type TagOverrides = {
  Root?: Override<SharedProps & Record<string, any>>;
  Action?: Override<SharedProps & Record<string, any>>;
  ActionIcon?: Override<SharedProps & Record<string, any>>;
  Text?: Override<SharedProps & Record<string, any>>;
  StartEnhancer?: Override<SharedProps & Record<string, any>>;
};

export type TagProps = {
  closeable?: boolean;
  isFocused?: boolean;
  isHovered?: boolean;
  children?: React.ReactNode;
  title?: string;
  onActionClick?: (e: Event, children?: React.ReactNode) => any;
  onActionKeyDown?: (e: Event, children?: React.ReactNode) => any;
  onClick?: (event: Event) => any;
  onKeyDown?: (event: Event) => any;
  className?: ClassName;
  overrides?: TagOverrides;
  startEnhancer?:
    | React.ReactNode
    | ((props: { $withStartEnhancer: boolean; $size: Size; $intent: Intent; $variant: Variant }) => React.ReactNode);
  intent?: Intent;
  variant?: Variant;
  size?: Size;
};

export type AvatarTagProps = Omit<TagProps, 'overrides'> & {
  avatarProps: AvatarProps;
  overrides?: TagProps['overrides'] & {
    StartEnhancer?: Override<Record<string, any>>;
  };
};

export type SharedProps = {
  $clickable?: boolean;
  $closeable?: boolean;
  $isFocused?: boolean;
  $isHovered?: boolean;
  $isFocusVisible: boolean;
  $withStartEnhancer: boolean;
  $intent?: Intent;
  $variant?: Variant;
  $size?: Size;
};
