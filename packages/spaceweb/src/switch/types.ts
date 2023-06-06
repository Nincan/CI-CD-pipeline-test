import { CheckboxProps as BaseSwitchProps, StatefulCheckboxProps as BaseStatefulSwitchProps } from '../checkbox';
import { SharedProps as BaseSharedProps } from 'baseui/input';

import { Override } from '../overrides';
import { Intent } from '../types';

export type SwitchSize = 'sm' | 'md' | 'lg';
export type LabelPlacement = 'left' | 'right' | 'top' | 'bottom';

export type SharedProps = BaseSharedProps & {
  $checked: boolean;
  $intent: Intent;
  $isFocusVisible: boolean;
  $isHovered: boolean;
  $size: SwitchSize;
};

export type SwitchProps = Omit<BaseSwitchProps, 'overrides' | 'size'> & {
  size?: SwitchSize;
  overrides?: {
    [key in keyof Required<BaseSwitchProps>['overrides']]?: Override<SharedProps>;
  };
};

export type StatefulSwitchProps = Omit<BaseStatefulSwitchProps, 'overrides' | 'size'> & {
  size?: SwitchSize;
  overrides?: {
    [key in keyof Required<BaseStatefulSwitchProps>['overrides']]?: Override<SharedProps>;
  };
};
