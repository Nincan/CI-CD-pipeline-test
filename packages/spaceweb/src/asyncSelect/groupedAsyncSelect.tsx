import { useAsyncSelect, UseAsyncSelectParams } from './hooks/useAsyncSelect';
import { Option, Select, STATE_CHANGE_TYPE } from '../select';
import { GroupedAsyncSelectProps, Id } from './types';
import { CollapsibleSelectMenu } from '../select/selectMenuAdapter/CollapsibleSelectMenu';
import { ReactNode, useCallback, useMemo } from 'react';
import { mergeOverrides } from '../overrides';
import { arrayToGroupedOptions } from './helpers';
import _reduce from 'lodash/reduce';
import _isObject from 'lodash/isObject';
import defaultProps from '../select/default-props';

export const GroupedAsyncSelect = ({
  onChange,
  showSelectAll,
  selectAllSelected,
  selectOnTab,
  ...restProps
}: GroupedAsyncSelectProps & { children?: ReactNode }) => {
  const adaptedOnChange: Required<UseAsyncSelectParams>['onChange'] = useCallback(
    params => {
      const groupedValue = arrayToGroupedOptions(params.value);
      return onChange?.({
        ...params,
        value: groupedValue,
        valueKeys: _reduce(
          groupedValue,
          (acc, values, groupId) => {
            acc[groupId] = values?.map((valueObjOrId: Id | Option) =>
              _isObject(valueObjOrId) ? valueObjOrId[restProps.valueKey || defaultProps.valueKey] : valueObjOrId
            );
            return acc;
          },
          {} as Record<string, Id[]>
        ),
      });
    },
    [onChange, restProps.valueKey]
  );
  const { resultCountMap, ...selectProps } = useAsyncSelect({ ...restProps, onChange: adaptedOnChange });
  const overrides = useMemo(
    () =>
      mergeOverrides(
        {
          StatefulMenu: {
            component: CollapsibleSelectMenu,
            props: {
              groupConfig: restProps.groupConfig.map(group => ({ ...group, count: resultCountMap[group.id] })),
              clearAsOption: restProps.clearAsOption,
              selectOnTab,
            },
          },
        },
        selectProps.overrides
      ),
    [selectProps.overrides, restProps.groupConfig, resultCountMap, restProps.clearAsOption, selectOnTab]
  );
  return (
    <Select
      {...selectProps}
      overrides={overrides}
      hideSelectAll={!showSelectAll}
      __selectAllShouldReturnAllOptions={showSelectAll}
      __selectAllSelected={selectAllSelected}
      {...(selectProps?.type === 'overlay' ? { scrollContainer: 'menuContainer' } : {})}
    />
  );
};
