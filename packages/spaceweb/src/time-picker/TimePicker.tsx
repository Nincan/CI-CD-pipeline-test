import { ReactElement } from 'react';
import { TimePicker as BaseTimePicker, TimePickerOverrides } from 'baseui/timepicker';

import { Select } from '../select';

import { useContextualFormProps } from '../form-control/context';
import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import { TimePickerProps } from './types';
import { SharedProps } from '../select/types';
import { getDefaultSize } from '../helpers/themeHelpers';
import { useStyle } from '../style';

const useTimePickerBasewebAdapter = (
  props: TimePickerProps
): Omit<TimePickerProps, 'size' | 'variant' | 'className' | 'style' | 'intent' | 'overrides' | 'clearable'> & {
  overrides?: TimePickerOverrides;
  nullable?: boolean;
} => {
  const { theme } = useStyle();
  const {
    size = getDefaultSize(theme),
    className,
    style,
    intent,
    overrides,
    clearable,
    ...restProps
  } = useContextualFormProps<TimePickerProps>(props);

  const convertedOverrides = useConvertOverrides<SharedProps & Record<string, any>>(
    {
      Select: {
        component: Select,
        props: {
          size,
          intent,
          clearable: !!clearable,
        },
        style: [className, style],
      },
    },
    overrides,
    [overrides, className, style, size, intent]
  );

  return { ...restProps, nullable: clearable, overrides: convertedOverrides };
};

export const TimePicker = (props: TimePickerProps): ReactElement => {
  const adaptedProps = useTimePickerBasewebAdapter(props);
  return <BaseTimePicker {...adaptedProps} />;
};
