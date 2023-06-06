import * as React from 'react';
import { createContext, useContext } from 'react';
import type { Radio as BaseRadio, RadioGroup as BaseRadioGroup, RadioOverrides } from 'baseui/radio';

import { add$props } from '../helpers';
import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';

import {
  getRadioLabelStyles,
  getRadioMarkInnerStyles,
  getRadioMarkOuterStyles,
  getRootStyles,
} from './styled-components';
import { RadioGroupProps, RadioProps, SharedProps, Size } from './types';
import { Intent } from '../types';
import { useContextualFormProps } from '../form-control/context';
import { useCombineRefObjects } from '../hooks/useCombinedRef';

export const SpaceRadioContext = createContext<{ size?: Size; intent?: Intent }>({
  size: 'md',
  intent: 'default',
});
SpaceRadioContext.displayName = 'SpaceRadioContext';

type BaseuiRadioGroupProps = React.ComponentProps<typeof BaseRadioGroup>;

export function useRadioGroupAdapter(props: RadioGroupProps): BaseuiRadioGroupProps {
  const { size, className, style, overrides, intent, ...restProps } = useContextualFormProps<RadioGroupProps>(props);

  const convertOverrides = useConvertOverrides<SharedProps>(
    {
      RadioGroupRoot: {
        style: [className, style],
      },
    },
    overrides
  );

  return {
    ...restProps,
    overrides: convertOverrides,
    onMouseEnter: props.onMouseEnter as BaseuiRadioGroupProps['onMouseEnter'],
    onMouseLeave: props.onMouseLeave as BaseuiRadioGroupProps['onMouseLeave'],
    onFocus: props.onFocus as BaseuiRadioGroupProps['onFocus'],
    onBlur: props.onBlur as BaseuiRadioGroupProps['onBlur'],
  };
}

type BaseuiRadioProps = React.ComponentProps<typeof BaseRadio>;
export const useRadioAdapter = (props: RadioProps): BaseuiRadioProps => {
  const { size, intent } = useContext(SpaceRadioContext);
  const { className, style, $outlineStyle, $outlineColor, $outlineOffset, $outlineWidth, ...restProps } = props;
  const sharedProps = add$props({ size, intent });

  const overrides: RadioOverrides = useConvertOverrides<SharedProps>(
    {
      Root: {
        style: [className, style, getRootStyles],
        props: sharedProps,
      },
      RadioMarkInner: {
        style: getRadioMarkInnerStyles,
        props: sharedProps,
      },
      RadioMarkOuter: {
        style: getRadioMarkOuterStyles,
        props: {
          ...sharedProps,
          ...add$props({ $outlineStyle, $outlineColor, $outlineOffset, $outlineWidth }),
        },
      },
      Label: {
        style: getRadioLabelStyles,
        props: sharedProps,
      },
      // https://prod-gitlab.sprinklr.com/sprinklr/frontend/spaceweb/-/issues/472 - baseui adds position absolute
      // static position gives unexpected behaviour in Safari. Using position fixed works well for the above issue and Safari as well.
      Input: { style: { position: 'fixed' } },
    },
    props.overrides
  );
  const inputRefObj = useCombineRefObjects(props.inputRef);

  return {
    ...restProps,
    overrides,
    onMouseEnter: props.onMouseEnter as BaseuiRadioProps['onMouseEnter'],
    onMouseLeave: props.onMouseLeave as BaseuiRadioProps['onMouseLeave'],
    onFocus: props.onFocus as BaseuiRadioProps['onFocus'],
    onBlur: props.onBlur as BaseuiRadioProps['onBlur'],
    inputRef: inputRefObj,
  };
};
