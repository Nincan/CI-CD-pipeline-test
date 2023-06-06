import * as React from 'react';
import {
  CheckboxProps as BaseCheckboxProps,
  StatefulCheckboxProps as BaseStatefulCheckboxProps,
} from 'baseui/checkbox';
import { SharedProps as BaseSharedProps } from 'baseui/input';
import { OutlineProps } from '../helpers/commonStyles';

import { Override } from '../overrides';
import { Intent, SpacewebComponentProps } from '../types';

export type CheckboxSize = 'sm' | 'md' | 'lg';

export type SharedProps = BaseSharedProps & {
  $checked: boolean;
  $intent: boolean;
  $isFocusVisible: boolean;
  $isHovered: boolean;
  $isIndeterminate: boolean;
  $size: CheckboxSize;
};

type CommonProps = {
  onMouseEnter?: (e: React.MouseEvent<HTMLInputElement>) => unknown;
  onMouseLeave?: (e: React.MouseEvent<HTMLInputElement>) => unknown;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => unknown;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => unknown;
  size?: CheckboxSize;
  intent?: Intent;
  inputRef?: React.Ref<HTMLInputElement>;
};

export type CheckboxProps = SpacewebComponentProps<Omit<BaseCheckboxProps, 'overrides' | keyof CommonProps>> & {
  overrides?: {
    [key in keyof Required<BaseCheckboxProps>['overrides']]?: Override<SharedProps>;
  };
} & OutlineProps &
  CommonProps;

export type StatefulCheckboxProps = SpacewebComponentProps<
  Omit<BaseStatefulCheckboxProps, 'overrides' | keyof CommonProps>
> & {
  overrides?: {
    [key in keyof Required<BaseStatefulCheckboxProps>['overrides']]?: Override<SharedProps>;
  };
} & OutlineProps &
  CommonProps;
