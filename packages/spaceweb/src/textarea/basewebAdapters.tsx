import { useMemo } from 'react';
import { borderRadius, borderStyle } from '../helpers/longHandHelpers';
import { getTextareaInputContainerStyles, getTextareaInputStyles } from './styled-components';
import { Overrides } from '../overrides';
import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import { SharedProps } from 'baseui/input';
import { add$props } from '../helpers';
import { TextareaProps } from './types';
import { useContextualFormProps } from '../form-control/context';
import { useDebouncedEventHandler } from '../hooks/useDebouncedEventHandler';

import _noop from 'lodash/noop';

function useTextareaAdapter<T extends TextareaProps>(
  props: T
): Omit<T, 'size' | 'variant' | 'className' | 'style' | 'intent' | 'autoSize'> {
  const { size, variant, className, style, intent, autoSize = false, ...restProps } = useContextualFormProps<T>(props);
  const sharedProps = add$props({ size, variant, intent });
  const inputContainerStyles = useMemo(() => [className, style, getTextareaInputContainerStyles], [className, style]);
  const handleChange = useDebouncedEventHandler(
    props.debouncedOnChange ?? _noop,
    props.onChange,
    props.debounceInterval || 200
  );
  const overrides = useConvertOverrides<SharedProps>(
    {
      Root: {
        style: [{ backgroundColor: 'transparent', ...borderStyle('none'), ...borderRadius('0px') }], // overriding baseweb borderRadius
      },
      InputContainer: {
        style: inputContainerStyles,
        props: sharedProps,
      },
      Input: {
        style: getTextareaInputStyles,
        props: {
          $autoSize: autoSize,
          'aria-required': restProps['aria-required'],
          ...sharedProps,
        },
      },
    },
    restProps.overrides as Overrides<SharedProps>
  );

  const rows = autoSize && !restProps.rows ? 1 : restProps.rows;

  return { ...restProps, overrides, rows, onChange: handleChange };
}

export default useTextareaAdapter;
