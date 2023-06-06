import { useCallback, useMemo } from 'react';
import * as React from 'react';
import { Checkbox } from '../../checkbox';
import cx from '../../classNames';
import { ListItemText, ListItemTextProps } from '../../list';
import MenuItem from '../../menu/menu-item';
import { mergeOverrides, useOverrides, Override } from '../../overrides';
import useUniqueId from '../../hooks/useUniqueId';

import { MenuItemProps } from '../../menu';
import { SELECT_ALL_ID, SelectProps } from '../types';

type Props = Pick<MenuItemProps, 'selected'> &
  Pick<SelectProps, 'valueKey' | 'labelKey' | 'multi'> & {
    item: Record<string, any>;
    getItemLabel: (item: Record<string, any>) => React.ReactNode;
    onItemSelect: (item: Record<string, any>) => void;
    overrides?: {
      MenuItem?: Override<MenuItemProps & Record<string, any>>;
      ListItemText?: Override<ListItemTextProps & Record<string, any>>;
    };
  };

const SelectMenuItem = React.forwardRef<HTMLElement, Props>(
  ({ item, valueKey, overrides, labelKey, multi, selected, getItemLabel, onItemSelect, ...restProps }, ref) => {
    const [MenuItemOverriden, menuItemProps] = useOverrides(overrides?.MenuItem, MenuItem);
    const [ListItemTextOverriden, listItemTextProps] = useOverrides(overrides?.ListItemText, ListItemText);
    const handleItemSelect = useCallback(() => onItemSelect({ item }), [item, onItemSelect]);

    const textOverrides = (listItemTextProps as Record<string, any>)?.overrides;
    const listItemTextOverrides = useMemo(
      () =>
        mergeOverrides(
          {
            PrimaryText: { props: { className: cx({ 'font-semibold': item[SELECT_ALL_ID] }) } },
          },
          textOverrides
        ),
      [item, valueKey, textOverrides]
    );

    const id = useUniqueId();

    // Passes intent to override intent from useContextualFormProps,
    // see: https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/-/issues/282
    const startEnhancer = useMemo(
      () =>
        multi && (
          <Checkbox
            checked={selected}
            size="sm"
            overrides={{ Input: { props: { 'aria-labelledby': id } }, Label: { style: 'hidden' } }}
            disabled={item.disabled}
            intent="default"
          />
        ),
      [multi, selected, item.disabled, item[valueKey!], id]
    );
    return (
      <MenuItemOverriden
        role="option"
        aria-selected={selected}
        // for Multi Select variant do not show selected styles
        selected={multi ? false : selected}
        onClick={handleItemSelect}
        startEnhancer={startEnhancer}
        disabled={item.disabled}
        $multi={multi}
        $item={item}
        $valueKey={valueKey}
        $labelKey={labelKey}
        ref={ref}
        id={id}
        {...restProps}
        {...menuItemProps}
      >
        <ListItemTextOverriden
          $multi={multi}
          $item={item}
          $labelKey={labelKey}
          {...listItemTextProps}
          overrides={listItemTextOverrides}
        >
          {getItemLabel(item)}
        </ListItemTextOverriden>
      </MenuItemOverriden>
    );
  }
);

SelectMenuItem.displayName = 'SelectMenuItem';

export default React.memo(SelectMenuItem);
