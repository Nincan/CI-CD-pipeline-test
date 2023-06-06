/**
 *  Created by Aneree on 03/11/20.
 */
import { ReactElement, useCallback, useMemo, ReactNode } from 'react';

import { Select } from '../select';

import { AsyncSelectProps, GroupedAsyncSelectProps, GroupedOptions } from './types';
import { useAsyncSelect } from './hooks/useAsyncSelect';
import { arrayToGroupedOptions } from './helpers';
import { UNGROUPED_ID } from '../select/constants';

const UNGROUP_GROUP_CONFIG = [{ id: UNGROUPED_ID, label: 'Ungrouped' }];
const AsyncSelect = ({
  loadOptions,
  initialOptions,
  resolveSelectedOptions,
  value,
  ...restProps
}: AsyncSelectProps & { children?: ReactNode }): ReactElement => {
  const adaptedLoadOptions: GroupedAsyncSelectProps['loadOptions'] = useCallback(
    async (input, groupFilters) => {
      const [filter] = groupFilters;
      if (!filter) {
        return { groups: [] };
      }
      const { options, complete } = await loadOptions(input, filter.pageNumber);
      return {
        groups: [{ group: filter.group, options, complete }],
      };
    },
    [loadOptions]
  );
  const adaptedResolveSelectedOptions: Required<GroupedAsyncSelectProps>['resolveSelectedOptions'] = useCallback(
    async groupVsUnresolvedValueKeys => {
      if (!resolveSelectedOptions) {
        return {} as GroupedOptions;
      }
      const resolvedOptions = await resolveSelectedOptions(groupVsUnresolvedValueKeys[UNGROUPED_ID] || []);
      return { [UNGROUPED_ID]: resolvedOptions };
    },
    [resolveSelectedOptions]
  );
  const adaptedValue: GroupedAsyncSelectProps['value'] = useMemo(
    () => (value ? { [UNGROUPED_ID]: value } : value),
    [value]
  );

  const { resultCountMap, ...selectProps } = useAsyncSelect({
    ...restProps,
    initialOptions: useMemo(() => arrayToGroupedOptions(initialOptions || []), [initialOptions]),
    loadOptions: adaptedLoadOptions,
    groupConfig: UNGROUP_GROUP_CONFIG,
    resolveSelectedOptions: resolveSelectedOptions ? adaptedResolveSelectedOptions : undefined,
    value: adaptedValue,
  });

  return <Select {...selectProps} hideSelectAll />;
};

export { AsyncSelect };
