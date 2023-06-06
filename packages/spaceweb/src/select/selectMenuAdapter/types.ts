import { SelectProps } from '../types';
import { Override } from '../../overrides';
import { MenuItemProps, MenuProps } from '../../menu';
import { StatefulMenuProps as BaseStatefulMenuProps } from 'baseui/menu/types';

type PropsAddedByOverride = {
  id?: string;
  value: SelectProps['value'];
  overrides?: {
    Menu?: Override<MenuProps>;
    MenuItem?: Override<MenuItemProps & { $multi: boolean; $item: unknown; $labelKey: string }>;
    NoResults?: Override<{}>;
    Divider?: Override<{ title: string }>;
    ListItemText?: Override<{ $multi: boolean; $item: unknown; $labelKey: string }>;
  };
  valueKey: string;
  labelKey: string;
  multi: SelectProps['multi'];
  selectAllSelected: boolean;
  shouldDisplaySelectAll?: boolean;
  noResultsMsg?: string;
  captureScroll?: boolean;
  virtual?: boolean;
  overscanCount?: number;
  selectOnTab?: boolean;
};
export type MenuAdapterProps = BaseStatefulMenuProps & PropsAddedByOverride;

export type GroupConfig = { id: string; label: string; count?: number }[];
