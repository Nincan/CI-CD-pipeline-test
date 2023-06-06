// todo: no deep import
import defaultFilterOptions from 'baseui/select/utils/default-filter-options';

export const filterOptions: typeof defaultFilterOptions = (options, filterValue, excludeOptions, newProps) =>
  defaultFilterOptions(options, filterValue, excludeOptions, {
    matchProp: 'label',
    ...newProps,
  });
