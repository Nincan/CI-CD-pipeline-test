import * as React from 'react';
import { ReactElement, ReactNode, UIEvent, useMemo } from 'react';
import { MenuAdapterProps } from './types';
import { useGetExpandedGroup } from './hooks/useGetExpandedGroup';
import { Box } from '../../box';
import { Menu, MenuProps } from '../../menu';
import { Typography } from '../../typography';
import SelectMenuItem from './SelectMenuItem';
import _map from 'lodash/map';
import _isEmpty from 'lodash/isEmpty';
import { mergeOverrides, Overrides, useOverrides } from '../../overrides';
import { selectMenuOverrides } from '../overrides';
import { NoResults } from '../styled-component';
import { UNGROUPED_ID } from '../constants';
import { BaseButton } from '../../base-button';
import ChevronDown from '../../icon/components/chevron-down';
import { chevronStyles } from '../../helpers/commonStyles';
import type { GroupConfig } from './types';

const Collapsible = ({
  children,
  group,
  expanded,
  onClick,
  disabled,
}: {
  children: ReactNode;
  group: { id: string; label: string; count?: number };
  expanded: boolean;
  onClick: (itemGroup: string) => void;
  disabled: boolean;
}) => (
  <Box className={{ borderRadius: 'inherit' }}>
    <BaseButton
      disabled={disabled}
      onClick={() => onClick(group.id)}
      className={[
        'w-full flex justify-between items-center py-2 pl-4 pr-3 border-t-1 border-b-1 border-solid spr-border-01 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none',
        expanded ? 'border-b-1' : 'border-b-0',
      ]}
      type="button"
    >
      <Typography className="block" variant="h7">
        {group.count ?? ''} {group.label}
      </Typography>
      <ChevronDown
        style={chevronStyles}
        $isOpen={expanded}
        data-testid={expanded ? `${group.id}-expanded` : `${group.id}-collapsed`}
      />
    </BaseButton>
    {expanded ? children : null}
  </Box>
);

export const CollapsibleSelectMenu = ({
  overrides,
  value,
  items: groupedItems,
  multi,
  labelKey,
  valueKey,
  onItemSelect,
  shouldDisplaySelectAll,
  selectAllSelected: selectAllChecked,
  noResultsMsg,
  $onPaginate,
  groupConfig,
  virtual,
  clearAsOption,
  selectOnTab,
}: MenuAdapterProps & {
  $onPaginate?: (event: UIEvent<HTMLElement>, itemGroup: string) => void;
  groupConfig: GroupConfig;
  clearAsOption?: boolean;
}): ReactElement => {
  const selectAllSelected = !!shouldDisplaySelectAll && selectAllChecked;
  const [expandedGroupId, setExpandedGroupId] = useGetExpandedGroup({ groupConfig, groupedItems });

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
    // todo: make this component a11y
    baseuiMenuListProps = listOverride.props;
  }

  const mergedOverrides = useMemo(
    () => mergeOverrides(selectMenuOverrides, overrides as unknown as Overrides),
    [overrides]
  );

  const [MenuComponent, menuProps] = useOverrides(mergedOverrides.Menu, Menu);
  const [NoResultsOverriden, noResultsProps] = useOverrides(mergedOverrides.NoResults, NoResults);

  const menuItemOverrides = useMemo(
    () => ({
      MenuItem: mergedOverrides.MenuItem,
      ListItemText: mergedOverrides.ListItemText,
    }),
    [mergedOverrides.ListItemText, mergedOverrides.MenuItem]
  );

  const selectAllItem = shouldDisplaySelectAll ? groupedItems[UNGROUPED_ID][0] : null;
  const clearAsOptionItem = !multi && clearAsOption ? groupedItems[UNGROUPED_ID][0] : null;
  return (
    <Box className={{ borderRadius: 'inherit' }}>
      {selectAllItem ? (
        <SelectMenuItem
          key="select-all-option"
          overrides={menuItemOverrides}
          item={selectAllItem}
          selected={selectAllSelected}
          multi={multi}
          getItemLabel={getItemLabel}
          labelKey={labelKey}
          valueKey={valueKey}
          onItemSelect={onItemSelect}
          $item={selectAllItem}
          button
          {...baseuiMenuItemProps}
          className={['mt-1 mx-1', baseuiMenuItemProps?.className]}
        />
      ) : null}
      {groupConfig.map(group => {
        const { id: groupId } = group;
        const itemsInGroup = groupedItems[groupId];

        return (
          <Collapsible
            key={groupId}
            group={group}
            expanded={selectAllSelected ? false : groupId === expandedGroupId}
            disabled={selectAllSelected}
            onClick={newGroupId => setExpandedGroupId(prev => (prev === newGroupId ? undefined : newGroupId))}
          >
            {_isEmpty(itemsInGroup) ? (
              <NoResultsOverriden
                aria-live="polite"
                aria-atomic
                msg={noResultsMsg}
                aria-disabled
                $groupId={groupId}
                {...noResultsProps}
              />
            ) : (
              <MenuComponent
                resetMenuHighlightOnMouseLeave
                focusWhenNavigationEnabled={false}
                tabIndex={-1}
                selectOnTab={selectOnTab}
                {...menuProps}
                virtual={virtual}
                className={['overflow-auto', { maxHeight: '200px' }, (menuProps as MenuProps)?.className]}
                onScroll={e => {
                  $onPaginate?.(e, groupId);
                }}
              >
                {clearAsOptionItem ? (
                  <SelectMenuItem
                    key="clear-option"
                    overrides={menuItemOverrides}
                    item={clearAsOptionItem}
                    selected={selectAllSelected}
                    multi={multi}
                    getItemLabel={getItemLabel}
                    labelKey={labelKey}
                    valueKey={valueKey}
                    onItemSelect={onItemSelect}
                    $item={clearAsOptionItem}
                    button
                    {...baseuiMenuItemProps}
                  />
                ) : null}
                {itemsInGroup.map(item => {
                  const selected = selectedValuesSet.has(item[valueKey]);

                  return (
                    <SelectMenuItem
                      key={item.isCreatable ? 'creatable-option' : item[valueKey]}
                      overrides={menuItemOverrides}
                      item={item}
                      selected={selected}
                      multi={multi}
                      getItemLabel={getItemLabel}
                      labelKey={labelKey}
                      valueKey={valueKey}
                      onItemSelect={onItemSelect}
                      $item={item}
                      button
                      {...baseuiMenuItemProps}
                    />
                  );
                })}
              </MenuComponent>
            )}
          </Collapsible>
        );
      })}
    </Box>
  );
};
