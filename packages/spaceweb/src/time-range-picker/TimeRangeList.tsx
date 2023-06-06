import { useCallback, memo, ReactElement } from 'react';

import { Menu as DefaultMenu, MenuItem as DefaultMenuItem } from '../menu';
import { Box } from '../box';

import { TimeRangeListProps, TimeRangePreset } from './types';
import { useOverrides } from '../overrides';
import { useLocale } from '../locale';
import { ClassName, StyleObject } from '../types';
import { useIsMobileDevice } from '../hooks/useIsMobileDevice';

const TimeRangeList = ({
  onChange,
  timeRange,
  preset,
  timeRangePresets,
  overrides,
}: TimeRangeListProps): ReactElement => {
  const locale = useLocale();
  const onItemSelect = useCallback(
    (timeRangePreset: TimeRangePreset) => {
      if (timeRangePreset.id === 'CUSTOM') {
        onChange({ date: timeRange });
      } else {
        onChange({ preset: timeRangePreset.id });
      }
    },
    [onChange, timeRange]
  );
  const isMobileDevice = useIsMobileDevice();

  const [Menu, menuProps] = useOverrides(overrides?.Menu, DefaultMenu);
  const [MenuItem, menuItemProps] = useOverrides(overrides?.MenuItem, DefaultMenuItem);

  return (
    <Box
      className={[
        'overflow-y-auto border-r-1 border-l-0 border-t-0 border-b-0 spr-border-01 border-solid',
        {
          width: isMobileDevice ? '110px' : '160px',
        },
      ]}
    >
      <Menu
        aria-label={locale.timeRangePicker.presetMenuAriaLabel}
        disableNavigationOnMount
        resetMenuHighlightOnMouseLeave
        className={['focus-visible:-outline-offset-2', menuProps?.className] as ClassName}
        role="listbox"
        $showFocusOutline
        {...menuProps}
      >
        {timeRangePresets.map(timeRangePreset => (
          <MenuItem
            onClick={(): void => onItemSelect(timeRangePreset)}
            selected={timeRangePreset.id === preset}
            key={timeRangePreset.id}
            className={[
              'static',
              ({ theme }, { $selected }): StyleObject => ({
                color: $selected ? theme.spr.text01 : theme.spr.text02,
              }),
            ]}
            data-testid={timeRangePreset.id}
            role="option"
            {...menuItemProps}
          >
            {timeRangePreset.label}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default memo(TimeRangeList);

TimeRangeList.displayName = 'TimeRangeList';
