import { Ref, ChangeEvent } from 'react';
import {
  InputProps as BaseInputProps,
  StatefulInputProps as BaseStatefulInputProps,
  SharedProps as BaseSharedProps,
  InputOverrides as BaseUIInputOverrides,
} from 'baseui/input';

import { SpacewebComponentProps, Intent } from '../types';
import { Override } from '../overrides';

/**
 * lg size is deprecated. Please use md.
 */
export type InputSize = 'xxxs' | 'xs' | 'sm' | 'md' | 'lg';

export type InputVariant = 'default' | 'line';

export type InputOverrides = {
  [key in keyof BaseUIInputOverrides]?: Override<SharedProps & Record<string, any>>;
};

/**
 * Position of the cursor when input element is focussed
 * 1. 'start' - beginning of input value
 * 2. 'end' - end of input value
 * 3. number - [0, input.value.length] (specific position in input value)
 * 4. boolean - true (end of input value)
 *            - false (does not focus)
 */
export type FocusPosition = 'start' | 'end' | number | boolean;

type CommonInputProps = {
  variant?: InputVariant;
  size?: InputSize;
  overrides?: InputOverrides;
  intent?: Intent;
  debouncedOnChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  debounceInterval?: number;
  autoFocus?: FocusPosition;
  inputRef?: Ref<HTMLInputElement>;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type SharedProps = Omit<BaseSharedProps, '$size' | '$positive' | '$error'> & {
  $isStart: boolean;
  $size: InputSize;
  $variant: InputVariant;
  $intent: Intent;
};

export type InputProps = Omit<SpacewebComponentProps<BaseInputProps>, 'positive' | 'error' | keyof CommonInputProps> &
  CommonInputProps;

export type StatefulInputProps = Omit<
  SpacewebComponentProps<BaseStatefulInputProps>,
  'positive' | 'error' | keyof CommonInputProps
> &
  CommonInputProps;

export interface MaskedInputProps extends InputProps {
  mask?: string;
  maskChar?: string;
}
