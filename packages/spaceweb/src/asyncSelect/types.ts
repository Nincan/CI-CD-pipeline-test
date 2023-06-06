/**
 *  Created by Aneree on 03/11/20.
 */
import { Dispatch, ReactNode, SetStateAction } from 'react';

import { SelectProps, Option, Value, OnChangeParams } from '../select/types';

export type SetStateFunc<S> = Dispatch<SetStateAction<S>>;
export type Id = string | number;

export type AllOptionsMap = Record<Id, Option>;

export type GroupedOptions = Record<string, Array<Option>>;
export type LoadOptions = (
  input: string,
  groupFilters: { group: string; pageNumber: number }[]
) => Promise<{
  groups: Array<{ group: string; options: Array<Option>; complete: boolean; count?: number }>;
}>;

export type AsyncSelectValue = Array<Id | Option> | Value;
/**
 * NOTE:
 *   AsyncSelect does not support select all option
 *   removed the support of these props in AsyncSelect
 */
type BaseAsyncSelectProps = Omit<
  SelectProps,
  'isLoading' | 'options' | 'hideSelectAll' | 'value' | 'onChange' | 'scrollContainer'
> & {
  paginationBuffer?: number; // Maximum distance (in pixels) from the bottom of the dropdown that triggers the fetch of
  // next page of options
  searchingText?: ReactNode; // Text to show in dropdown while the options are loading
  minimumInput?: number; // Minimum number of characters that trigger loadOptions
  debounceInterval?: number; // Number of milliseconds to delay the invocation of input handler
  loadOnFocus?: boolean; // Whether to fetch options on focus
  loadOnMount?: boolean; // Whether to fetch options on mount
  listenAllInputChanges?: boolean; //Attach mutation observer on input for listening to all value changes
  value?: AsyncSelectValue;
  onChange?: (params: OnChangeParams & { valueKeys: Id[] }) => unknown;
  resolveValuesOnUpdate?: boolean;
  // unresolved values won't be visible in select.
  hideUnresolvedValues?: boolean;
  moveSelectedOptionsToTop?: boolean;
};

export type AsyncSelectProps = BaseAsyncSelectProps & {
  loadOptions: (input: string, page: number) => Promise<{ options: Array<Option>; complete: boolean }>;
  initialOptions?: Array<Option>; // Initial set of static options
  resolveSelectedOptions?: (unresolvedValueKeys: Array<Id>) => Promise<Array<Option>>; // Function for
  // fetching options corresponding to the unresolved value keys. It is invoked on mount depending on the presence of unresolved values.
};

export type GroupConfig = Array<{ id: string; label: string }>;
export type GroupedValue = Record<string, AsyncSelectValue>;
// creatable is not supported with GroupedAsyncSelect yet
export type GroupedAsyncSelectProps = Omit<BaseAsyncSelectProps, 'creatable' | 'onChange' | 'value'> & {
  loadOptions: (
    input: string,
    groupFilters: Array<{ group: string; pageNumber: number }>
  ) => Promise<{
    groups: { group: string; options: Array<Option>; complete: boolean; count?: number }[];
  }>;
  initialOptions?: Record<string, Array<Option>>; // Initial set of static options
  groupConfig: GroupConfig;
  initialExpandedCount?: number;
  resolveSelectedOptions?: (groupVsUnresolvedValueKeys: Record<string, Array<Id>>) => Promise<GroupedOptions>; // Function for fetching options corresponding to the unresolved value keys. It is invoked on mount depending on the presence of unresolved values.
  value?: GroupedValue;
  onChange?: (
    params: Omit<OnChangeParams, 'value'> & { value: GroupedOptions; valueKeys: Record<string, Id[]> }
  ) => unknown;
  showSelectAll?: boolean;
  selectAllSelected?: boolean;
};

export type { Value, Option };
