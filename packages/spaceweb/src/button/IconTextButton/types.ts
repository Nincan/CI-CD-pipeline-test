import { ComponentType } from 'react';

import { ButtonProps, ButtonSharedProps } from '../types';
import { IconProps } from '../../icon';

export type Variant = 'default' | 'bulk';

export type IconTextButtonProps = Omit<ButtonProps, 'variant'> & {
  icon?: ComponentType<IconProps>;
  variant?: Variant;
  bordered?: boolean;
};

export type SharedProps = ButtonSharedProps & {
  $iconTextVariant?: Variant;
  $bordered?: boolean;
};
