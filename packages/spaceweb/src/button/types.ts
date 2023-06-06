import { ButtonOverrides as BaseUIButtonOverrides, KIND } from 'baseui/button';
import * as React from 'react';
import { Override, StyleOverride } from '../overrides';
import { StatefulTooltipProps } from '../tooltip';
import { ClassName, Intent, Variant, SpacewebComponentProps, Size } from '../types';
import { ValueOf } from '../utility-types';
import { AriaRole } from 'react';

export type Shape = 'default' | 'round' | 'square' | 'pill';
export type { Size };

export type ButtonOverrides = {
  [key in keyof BaseUIButtonOverrides]?: Override<ButtonSharedProps & Record<string, any>>;
} & { StatefulTooltip?: Override<Record<string, any>> };

export type ButtonSharedProps = {
  $disabled?: boolean;
  $intent?: Intent;
  $isLoading?: boolean;
  $isSelected?: boolean;
  $shape?: Shape;
  $size?: Size;
  $variant?: Variant;
  $fullWidth?: boolean;
  $isFocusVisible?: boolean;
};

export type ButtonProps = SpacewebComponentProps<{
  $as?: React.ElementType;
  className?: ClassName;
  style?: StyleOverride<ButtonSharedProps>;
  size?: Size;
  shape?: Shape;
  variant?: Variant;
  intent?: Intent;
  isLoading?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  autoFocus?: boolean;
  role?: AriaRole | undefined;

  href?: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
  endEnhancer?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLElement>) => any;
  overrides?: ButtonOverrides;
  startEnhancer?: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  tooltipContent?: StatefulTooltipProps['content'];
  tabIndex?: number | undefined;
}>;

export type VariantAdapterProps = Record<Variant, ValueOf<typeof KIND>>;
