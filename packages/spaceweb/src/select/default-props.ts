import _noop from 'lodash/noop';
import { filterOptions } from './utils/default-filter-options';
import { Options, Value, Size, Type, SelectProps } from './types';
import { LIST_MIN_WIDTH } from '../list';

const defaultProps = {
  autoFocus: false,
  backspaceRemoves: true,
  clearable: true,
  closeOnSelect: true,
  creatable: false,
  deleteRemoves: true,
  disabled: false,
  error: false,
  positive: false,
  escapeClearsValue: true,
  filterOptions: filterOptions as SelectProps['filterOptions'],
  filterOutSelected: true,
  isLoading: false,
  labelKey: 'label',
  maxDropdownHeight: '200px',
  multi: false,
  onBlur: _noop,
  onBlurResetsInput: true,
  onChange: _noop,
  onFocus: _noop,
  onInputChange: _noop,
  onCloseResetsInput: true,
  onSelectResetsInput: true,
  openOnClick: true,
  startOpen: false,
  options: [] as Options,
  overrides: {},
  required: false,
  searchable: true,
  type: 'select' as Type | 'overlay' | 'mobile',
  value: [] as Value,
  valueKey: 'id',
  placement: 'bottom' as SelectProps['placement'],
  virtual: true,
  // popoverMinWidth should have min-width same as the list minWidth
  popoverMinWidth: `${LIST_MIN_WIDTH}px`,
};

export default defaultProps;
