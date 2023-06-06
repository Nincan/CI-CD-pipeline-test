import { useMemo, useCallback, memo, ReactElement } from 'react';

import { Typography } from '../typography';
import ChevronDown from '../icon/components/chevron-down';
import { Stack } from '../stack';
import { BaseButton } from '../base-button';
import { TimezonePicker as DefaultTimezonePicker } from '../time-zone-picker';

import { TimezonePickerProps } from './types';
import { useLocale } from '../locale';
import { StyleObject } from '../types';
import { mergeOverrides } from '../overrides';

export const TimezonePicker = ({ setTimezone, timezone, overrides }: TimezonePickerProps): ReactElement => {
  const locale = useLocale();

  const mergedOverrides = useMemo(
    () =>
      mergeOverrides(
        {
          Select: {
            props: {
              type: 'overlay',
              placeholder: locale.timeRangePicker.timezonePlaceholder,
              children: (
                <BaseButton data-testid="time-zone-picker" className="focus:spr-text-04 hover:spr-text-04">
                  <Stack direction="horizontal" gap={3} className="items-center">
                    <Typography variant="l1">{timezone || locale.timeRangePicker.timezoneLabel}</Typography>
                    <ChevronDown size={8} />
                  </Stack>
                </BaseButton>
              ),
              overrides: {
                Popover: {
                  props: {
                    showArrow: false,
                  },
                  style: (): StyleObject => ({
                    marginTop: '0',
                  }),
                },
              },
            },
          },
        },
        overrides
      ),
    [overrides, timezone, locale]
  );

  const onChange = useCallback(
    ({ id }) => {
      setTimezone(id);
    },
    [setTimezone]
  );

  return <DefaultTimezonePicker value={timezone} onChange={onChange} overrides={mergedOverrides} />;
};

export default memo(TimezonePicker);
