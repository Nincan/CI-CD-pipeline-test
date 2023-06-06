import { Override } from '../overrides';
import { ClassName } from '../types';

export type Shape = 'circle' | 'rectangle';
export type Spacing = 'sm' | 'md' | 'none' | 'lg';
export type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';

export type AvatarGroupProps = {
  className?: ClassName;
  spacing?: Spacing;
  max?: number;
  size?: Size | number;
  shape?: Shape;
  overrides?: {
    Root?: Override<AvatarGroupSharedProps & Record<string, any>>;
    ExtraAvatar?: Override<AvatarProps & Record<string, any>>;
  };
  children?: React.ReactNode;
};

export type AvatarGroupSharedProps = {
  $spacing: Spacing;
  $size?: Size | number;
  $shape?: Shape;
  $max: number;
  $extraAvatar: boolean;
};

export type AvatarSharedProps = {
  $didImageFailToLoad: boolean;
  $size?: string;
  $shape: Shape;
  $color?: string;
  $avatarSize: string;
};

type AvatarOverrides = {
  Root?: Override<AvatarSharedProps & Record<string, any>>;
  Avatar?: Override<AvatarSharedProps & Record<string, any>>;
  Initials?: Override<AvatarSharedProps & Record<string, any>>;
  UserIcon?: Override<AvatarSharedProps & Record<string, any>>;
};

export type AvatarProps = {
  name: string;
  src?: string;
  className?: ClassName;
  shape?: Shape;
  size?: Size | number;
  initials?: string;
  color?: string;
  overrides?: AvatarOverrides;
  allowPhoneInitials?: boolean;
};
