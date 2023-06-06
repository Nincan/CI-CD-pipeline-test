import { useMemo, Fragment } from 'react';
import * as React from 'react';
import { StatefulMenuProps as BaseStatefulMenuProps } from 'baseui/menu';
import _flatten from 'lodash/flatten';
import _isEmpty from 'lodash/isEmpty';
import _map from 'lodash/map';
import _noop from 'lodash/noop';
import _omit from 'lodash/omit';
import { Divider } from '../../list';

import { Menu, MenuItemProps, MenuProps } from '../../menu';
import { mergeOverrides, Override, Overrides, useOverrides } from '../../overrides';
import { Typography } from '../../typography';
import { UNGROUPED_ID } from '../constants';
import { selectMenuOverrides } from '../overrides';
import { NoResults } from '../styled-component';
import { SELECT_ALL_ID, SelectProps } from '../types';
import SelectMenuItem from './SelectMenuItem';
import { normalizeOptions } from 'baseui/select/utils';
import { MenuAdapterProps } from './types';

const removeUngroupedIfEmpty = groupedOptions => {
  if (!groupedOptions[UNGROUPED_ID]?.length) {
    return _omit(groupedOptions, [UNGROUPED_ID]);
  }
  return groupedOptions;
};

const SelectMenuAdapter = (props: MenuAdapterProps): React.ReactElement => {
  const {
    id,
    items: groupedItems,
    overrides,
    onItemSelect = _noop,
    value,
    valueKey,
    labelKey,
    multi,
    selectAllSelected,
    noResultsMsg,
    captureScroll,
    virtual,
    overscanCount,
    selectOnTab,
  } = props;
  const selectedValuesSet = useMemo(() => {
    const set = new Set(_map(value, valueKey));
    return set;
  }, [value, valueKey]);

  /**
   * extract out useful overrides/props passed by baseui
   */
  const listOverride = overrides?.List;
  const optionOverride = overrides?.Option;
  let baseuiMenuListProps;
  let getItemLabel, baseuiMenuItemProps;
  if (typeof optionOverride === 'object' && typeof optionOverride.props === 'object') {
    getItemLabel = optionOverride?.props?.getItemLabel;
    baseuiMenuItemProps = optionOverride?.props?.overrides?.ListItem?.props;
  }
  if (typeof listOverride === 'object') {
    baseuiMenuListProps = listOverride.props;
  }

  const mergedOverrides = useMemo(
    () => mergeOverrides(selectMenuOverrides, overrides as unknown as Overrides),
    [overrides]
  );

  const [MenuOverriden, menuProps] = useOverrides(mergedOverrides.Menu, Menu);
  const [NoResultsOverriden, noResultsProps] = useOverrides(mergedOverrides.NoResults, NoResults);
  const [DividerOverriden, dividerProps] = useOverrides(mergedOverrides.Divider, Divider);

  const menuItemOverrides = useMemo(
    () => ({
      MenuItem: mergedOverrides.MenuItem,
      ListItemText: mergedOverrides.ListItemText,
    }),
    [mergedOverrides.ListItemText, mergedOverrides.MenuItem]
  );

  let currentCount = 0,
    totalCount = normalizeOptions(groupedItems).length;
  let itemsToRender: React.ReactNode = _flatten(
    Object.keys(removeUngroupedIfEmpty(groupedItems)).map((itemGroup, index) => {
      const itemsInGroup = groupedItems[itemGroup];
      const menuItems = itemsInGroup.flatMap(item => {
        currentCount += 1;
        const selected = selectedValuesSet.has(item[valueKey]) || (item[SELECT_ALL_ID] && selectAllSelected);
        const selectMenuItem = (
          <SelectMenuItem
            key={item.isCreatable ? 'creatable-option' : `${item[valueKey]}-${item.__optgroup}`}
            overrides={menuItemOverrides}
            item={item}
            selected={selected}
            multi={multi}
            getItemLabel={getItemLabel}
            labelKey={labelKey}
            valueKey={valueKey}
            onItemSelect={onItemSelect}
            $item={item}
            aria-posinset={currentCount}
            aria-setsize={totalCount}
            {...baseuiMenuItemProps}
          />
        );
        return item[SELECT_ALL_ID]
          ? [selectMenuItem, <DividerOverriden $item={item} key="divider-select-all" {...dividerProps} />]
          : selectMenuItem;
      });
      if (itemGroup !== UNGROUPED_ID) {
        menuItems.unshift(
          <DividerOverriden key={`divider-${itemGroup}`} first={index === 0} {...dividerProps}>
            <Typography variant="l4" weight="medium" className="spr-text-03">
              {itemGroup}
            </Typography>
          </DividerOverriden>
        );
      }
      return menuItems;
    })
  );

  if (_isEmpty(itemsToRender)) {
    itemsToRender = (
      <NoResultsOverriden aria-live="polite" aria-atomic msg={noResultsMsg} aria-disabled {...noResultsProps} />
    );
  }

  return (
    // focusWhenNavigationEnabled false, or else it will remove focus from select input
    <MenuOverriden
      resetMenuHighlightOnMouseLeave
      focusWhenNavigationEnabled={false}
      $multi={multi}
      captureScroll={captureScroll}
      tabIndex={-1}
      aria-label="Menu"
      role="listbox"
      {...baseuiMenuListProps}
      id={id}
      virtual={virtual}
      overscanCount={overscanCount}
      selectOnTab={selectOnTab}
      {...menuProps}
    >
      {itemsToRender}
    </MenuOverriden>
  );
};

export default SelectMenuAdapter;
