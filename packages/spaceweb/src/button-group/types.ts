import * as React from 'react';
import { Overrides, Override } from '../overrides';
import { Variant, Size, ClassName, SpacewebComponentProps, Intent } from '../types';
import { Variant as IconTextButtonVariant } from '../button/IconTextButton';
import { Shape, ButtonSharedProps } from '../button';
import { AriaRole } from 'react';

type ButtonGroupOverrides = {
  Root?: Override<any>;
};

type Mode = 'checkbox' | 'radio';

export type ButtonGroupProps = SpacewebComponentProps<{
  children?: React.ReactNode;
  className?: ClassName;
  disabled?: boolean;
  mode?: Mode;
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  overrides?: ButtonGroupOverrides;
  selected?: number | number[];
  shape?: Shape;
  size?: Size;
  intent?: Intent;
  variant?: Variant | IconTextButtonVariant;
  activateOnFocus?: boolean;
  role?: AriaRole | undefined;
}>;

export type ButtonGroupChildProps = {
  className?: ClassName;
  isSelected?: boolean;
  disabled?: boolean;
  variant?: Variant | IconTextButtonVariant;
  size?: Size;
  shape?: Shape;
  /*
   * @deprecated - intent prop is not supported in ButtonGroup. Will be removed in next major release.
   */
  intent?: Intent;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  overrides?: Overrides<ButtonSharedProps>;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  tabIndex?: number;
  'aria-selected'?: boolean;
};

export type StatefulButtonGroupProps = ButtonGroupProps & {
  initialState?: number[];
};
