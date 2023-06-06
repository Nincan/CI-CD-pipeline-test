import { InputProps, SharedProps as InputSharedProps } from '../input/types';
import { Override } from '../overrides';

/**
 * lg size is deprecated. Please use md.
 */
export type Size = 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
export type Variant = 'default' | 'light';
export type SearchProps = Omit<
  InputProps,
  'size' | 'type' | 'required' | 'variant' | 'intent' | 'startEnhancer' | 'endEnhancer'
> & {
  size?: Size;
  bordered?: boolean;
  debounceInterval?: number;
  debouncedOnChange?: InputProps['onChange'];
  variant?: Variant;
  overrides?: {
    SearchIcon?: Override<Record<string, any>>;
  };
};
export type SharedProps = Omit<InputSharedProps, '$size'> & {
  $size: Size;
  $bordered: boolean;
  $variant: Variant;
};

export type StatefulSearchProps = Omit<SearchProps, 'value'> & {
  initialState?: string;
};
