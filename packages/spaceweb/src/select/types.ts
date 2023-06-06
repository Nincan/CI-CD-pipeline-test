import * as React from 'react';
import {
  OverridesDropdown as BaseuiDropdownOverrides,
  DropdownProps as BaseDropdownProps,
  Option,
  Options,
  SelectOverrides as BaseuiSelectOverrides,
  SelectProps as BaseuiSelectProps,
  State,
  StateReducer,
} from 'baseui/select';

import { STATE_CHANGE_TYPE } from './constants';
import { Override } from '../overrides';
import { TagProps } from '../tag';
import { Intent, SpacewebComponentProps } from '../types';
import { PopoverProps } from '../popover/types';
import { ValueOf } from '../utility-types';
import { Value } from 'baseui/select/types';

/**
 * lg size is deprecated. Please use md.
 */
export type Size = 'xxxs' | 'xs' | 'sm' | 'md' | 'lg';
export type Type = 'select' | 'search';

type OverridableComponent =
  | keyof Omit<BaseuiSelectOverrides, 'Dropdown' | 'DropdownListItem' | 'DropdownOption'>
  | 'Menu'
  | 'MenuItem'
  | 'NoResults'
  | 'Divider'
  | 'ListItemText'
  | 'OverlayContentContainer';

export type SelectActions = {
  setDropdownOpen?: (shouldOpen: boolean) => void;
};

export type OnChangeParams = {
  value: Value;
  option?: Option;
  type?: ValueOf<typeof STATE_CHANGE_TYPE>;
};

export type BaseSelectProps = SpacewebComponentProps<
  Omit<BaseuiSelectProps, 'overrides' | 'size' | 'type' | 'onChange' | 'positive' | 'error'>
> & {
  onChange?: (params: OnChangeParams) => unknown;
  intent?: Intent;
  overrides?: {
    [key in OverridableComponent]?: Override<any>;
  };
  type?: Type;
  hideSelectAll?: boolean;
  size?: Size;
  captureScroll?: boolean;
  placement?: PopoverProps['placement'];
  popoverMinWidth?: string;
  createOption?: (label: string) => Options | Promise<Options>;
  onPaste?: (event: React.ClipboardEvent) => Options | undefined;
  virtual?: boolean;
  ignoreBoundary?: boolean;
  delimiter?: string;
  clearAsOption?: boolean;
  clearAsOptionLabel?: string;
  selectOnTab?: boolean;
  /**
   * This is an internal prop being used in AsyncSelect. Not meant for consumer.
   * If true, selectAll event won't return all options in values.
   */
  __selectAllShouldReturnAllOptions?: boolean;
  /**
   * This is an internal prop being used in AsyncSelect.
   * Selected state of SelectAll option will be decided based on this prop if __selectAllShouldReturnAllOptions is true.
   */
  __selectAllSelected?: boolean;
};

type Merge<A, B> = Omit<A, keyof B> & B;

export type OverlaySelectProps = Merge<
  BaseSelectProps,
  {
    type: 'overlay';
    overlayWidth?: string;
    children: PopoverProps['children'];
    // by default overlay select's scroll is on OverlayContainer. set this true, to set scroll on Menu.
    scrollContainer?: 'overlayContainer' | 'menuContainer';
  }
>;

export type MobileSelectProps = Merge<
  OverlaySelectProps,
  {
    type: 'mobile';
    children?: React.ReactNode;
    label?: React.ReactNode;
  }
>;

export type SelectProps = BaseSelectProps | OverlaySelectProps | MobileSelectProps;
export type StatefulSelectProps = SelectProps & {
  initialState?: State;
  stateReducer?: StateReducer;
};

export type SharedProps = {
  $clearable?: boolean;
  $creatable?: boolean;
  $disabled?: boolean;
  $intent?: Intent;
  $isFocused?: boolean;
  $isLoading?: boolean;
  $isOpen?: boolean;
  $isPseudoFocused?: boolean;
  $multi?: boolean;
  $required?: boolean;
  $searchable?: boolean;
  $type?: Type;
  $width?: string;
  $maxHeight?: string;
  $isHighlighted?: boolean;
  $selected?: boolean;
  $isEmpty?: boolean;
  $size?: Size;
  $selectSize?: Size;
};

export type DropdownProps = Omit<BaseDropdownProps, 'overrides' | 'size' | 'type'> & {
  overrides?: {
    [key in keyof BaseuiDropdownOverrides]?: Override<any>;
  };
  type?: Type;
};

export const SELECT_ALL_ID = '__selectAll';
export const CLEAR_OPTION_ID = '__clear';

type RemoveValue = () => void;
export type MultiValueProps = Omit<TagProps, 'overrides'> &
  SharedProps & {
    $isContainerFocused?: boolean;
    $valueByIdMap: Record<string, Option>;
    $valueKey: string;
    value: Option;
    removeValue: RemoveValue;
    selectSize: Size;
    overrides?: {
      Tag?: Override<
        { variant: 'light'; intent: 'default'; className: string; onActionClick: RemoveValue } & Record<string, any>
      >;
    };
  };

export type {
  // Utils
  Option,
  Value,
  Options,
  Optgroups,
  StateReducer,
  ControlRef,
  ImperativeMethods,
  // Props & Overrides
  AutosizeInputProps,
  StatefulContainerProps,
  // State
  SelectState,
  AutosizeInputState,
  State as StatefulContainerState,
} from 'baseui/select';
