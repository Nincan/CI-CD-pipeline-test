import * as React from 'react';
import { add$props } from '../helpers';
import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import type { Checkbox as BaseCheckbox, StatefulCheckbox as BaseStatefulCheckbox } from 'baseui/checkbox';

import { getCheckmarkOverrides, getLabelOverrides, getRootOverrides } from './styled-components';
import { SharedProps, CheckboxProps, StatefulCheckboxProps } from './types';
import { useContextualFormProps } from '../form-control/context';
import { useCombineRefObjects } from '../hooks/useCombinedRef';

type BaseuiAdaptedProps = React.ComponentProps<typeof BaseCheckbox> | React.ComponentProps<typeof BaseStatefulCheckbox>;
type SpacewebProps = CheckboxProps | StatefulCheckboxProps;

export default function useCheckboxAdapter(props: SpacewebProps): BaseuiAdaptedProps {
  const {
    size,
    className,
    style,
    overrides,
    intent,
    $outlineStyle,
    $outlineColor,
    $outlineOffset,
    $outlineWidth,
    ...restProps
  } = useContextualFormProps<SpacewebProps>(props);

  const convertedOverrides = useConvertOverrides<SharedProps>(
    {
      Root: {
        style: [className, style, getRootOverrides],
      },
      Checkmark: {
        style: getCheckmarkOverrides,
        props: add$props({ size, intent, $outlineStyle, $outlineColor, $outlineOffset, $outlineWidth }),
      },
      Label: {
        style: getLabelOverrides,
        props: add$props({ size }),
      },
      // SharedProps for switch component
      Toggle: {
        props: add$props({ size, intent }),
      },
      ToggleTrack: {
        props: add$props({ size, intent }),
      },
      // https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/-/issues/406 - baseui adds position absolute
      Input: {
        style: { position: 'static' },
        props: {
          'aria-required': restProps['aria-required'],
        },
      },
    },
    overrides
  );
  const inputRefObj = useCombineRefObjects(props.inputRef);

  return {
    ...restProps,
    overrides: convertedOverrides,
    inputRef: inputRefObj,
    onMouseEnter: props.onMouseEnter as BaseuiAdaptedProps['onMouseEnter'],
    onMouseLeave: props.onMouseLeave as BaseuiAdaptedProps['onMouseLeave'],
    onFocus: props.onFocus as BaseuiAdaptedProps['onFocus'],
    onBlur: props.onBlur as BaseuiAdaptedProps['onBlur'],
  };
}
