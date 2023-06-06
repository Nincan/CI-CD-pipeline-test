import * as React from 'react';
import {
  RadioGroupProps as BaseRadioGroupProps,
  RadioProps as BaseRadioProps,
  RadioOverrides,
  RadioGroupOverrides,
} from 'baseui/radio';
import { Intent, SpacewebComponentProps } from '../types';
import { Override } from '../overrides';
import { OutlineProps } from '../helpers/commonStyles';

export type Alignment = 'horizontal' | 'vertical';

export type LabelPosition = 'top' | 'right' | 'bottom' | 'left';

export type Size = 'sm' | 'md' | 'lg';

export type SharedProps = {
  $align?: Alignment;
  $checked?: boolean;
  $disabled?: boolean;
  $hasDescription?: boolean;
  $isActive?: boolean;
  $intent?: Intent;
  $isFocused?: boolean;
  $isFocusVisible?: boolean;
  $isHovered?: boolean;
  $labelPlacement?: string;
  $required?: boolean;
  $value?: string;
  $size?: Size;
  $labelPosition?: LabelPosition;
};

type CommonProps = {
  onMouseEnter?: (e: React.MouseEvent<HTMLInputElement>) => unknown;
  onMouseLeave?: (e: React.MouseEvent<HTMLInputElement>) => unknown;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => unknown;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => unknown;
  size?: Size;
  intent?: Intent;
};

export type RadioProps = SpacewebComponentProps<Omit<BaseRadioProps, 'overrides' | 'isError' | keyof CommonProps>> & {
  overrides?: {
    [key in keyof RadioOverrides]?: Override<SharedProps>;
  };
  inputRef?: React.Ref<HTMLInputElement>;
} & OutlineProps &
  CommonProps;

export type RadioGroupProps = SpacewebComponentProps<Omit<BaseRadioGroupProps, 'overrides' | keyof CommonProps>> & {
  overrides?: {
    [key in keyof RadioGroupOverrides]?: Override<SharedProps>;
  };
} & CommonProps;
