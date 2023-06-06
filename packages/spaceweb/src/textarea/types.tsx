import { Ref } from 'react';
import {
  TextareaProps as BaseTextareaProps,
  StatefulTextareaProps as BaseStatefulTextareaProps,
} from 'baseui/textarea';

import { InputSize, InputVariant, FocusPosition } from '../input';
import { Intent, SpacewebComponentProps } from '../types';
import { Override } from '../overrides';

export type TextareaProps = SpacewebComponentProps<
  Omit<BaseTextareaProps, 'size' | 'overrides' | 'autoFocus' | 'inputRef'>
> & {
  size?: InputSize;
  variant?: InputVariant;
  overrides?: {
    [key in keyof Required<BaseTextareaProps>['overrides']]?: Override<any>;
  };
  intent?: Intent;
  debouncedOnChange?: BaseTextareaProps['onChange'];
  debounceInterval?: number;
  autoFocus?: FocusPosition;
  autoSize?: boolean;
  inputRef?: Ref<HTMLTextAreaElement>;
};

export type StatefulTextareaProps = SpacewebComponentProps<
  Omit<BaseStatefulTextareaProps, 'size' | 'overrides' | 'autoFocus' | 'inputRef'>
> & {
  size?: InputSize;
  variant?: InputVariant;
  overrides?: {
    [key in keyof Required<BaseStatefulTextareaProps>['overrides']]?: Override<any>;
  };
  debouncedOnChange?: BaseStatefulTextareaProps['onChange'];
  debounceInterval?: number;
  autoFocus?: FocusPosition;
  inputRef?: Ref<HTMLTextAreaElement>;
};
