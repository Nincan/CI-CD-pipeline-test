import { useMemo, useState, useCallback, useEffect, ReactElement } from 'react';
import { Select } from '../select';
import { useContextualFormProps } from '../form-control/context';
import { useOverrides } from '../overrides';

import { buildTimeZones } from './utils';
import { TimezonePickerProps } from './types';

export const TimezonePicker = (props: TimezonePickerProps): ReactElement => {
  const adaptedProps = useContextualFormProps(props);
  const { onChange, date = new Date(), mapLabels, value, overrides = {}, size = 'md', ...restProps } = adaptedProps;
  const [timezoneId, setTimezoneId] = useState<string | undefined>();

  const time = date.getTime();

  const timeZoneList = useMemo(() => {
    if (props.timezoneOptions) {
      return props.timezoneOptions;
    }
    const list = buildTimeZones(date);

    if (!mapLabels) return list;

    return list.map(timeZone => {
      const label = mapLabels(timeZone);

      return { ...timeZone, label };
    });
  }, [date, mapLabels, props.timezoneOptions]);

  useEffect(() => {
    if (!value && typeof Intl !== 'undefined') {
      let selectedTimezone: string | undefined = timezoneId;
      if (!timezoneId) {
        selectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        setTimezoneId(selectedTimezone);
      }

      const timezone = timeZoneList.find(({ id }) => id === selectedTimezone);
      timezone && onChange?.(timezone);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);

  const handleChange = useCallback(
    params => {
      onChange?.(params.option);
      setTimezoneId(params.option?.id);
    },
    [onChange, setTimezoneId]
  );

  const _value = useMemo(() => (value || timezoneId ? [{ id: value || timezoneId }] : []), [value, timezoneId]);

  const [SelectComp, selectProps] = useOverrides(overrides.Select, Select);

  return (
    //@ts-ignore check why `type` is mandatory for select
    <SelectComp
      value={_value}
      onChange={handleChange}
      options={timeZoneList}
      size={size}
      {...restProps}
      {...selectProps}
    />
  );
};
