import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import { add$props } from '../helpers';
import { borderRadius, borderStyle, padding } from '../helpers/longHandHelpers';

import { getInputContainerStyles, getInputStyles, getEnhancerStyles } from './styled-components';
import ClearIconButton from '../helpers/ClearIconButton';
import { SharedProps, InputProps, StatefulInputProps } from './types';
import { BaseInputOverrides } from 'baseui/input';
import { useContextualFormProps } from '../form-control/context';
import { useDebouncedEventHandler } from '../hooks/useDebouncedEventHandler';

import _noop from 'lodash/noop';
import { useStyle } from '../style';
import { getDefaultSize } from '../helpers/themeHelpers';

type AdapterProps = Omit<InputProps | StatefulInputProps, 'autoFocus'>;

const useInputBasewebAdapter = (
  props: AdapterProps
): Omit<AdapterProps, 'size' | 'variant' | 'className' | 'style' | 'intent' | 'overrides'> & {
  overrides?: BaseInputOverrides;
} => {
  const {
    size: _size,
    variant,
    className,
    style,
    intent,
    overrides,
    onChange,
    debouncedOnChange,
    debounceInterval,
    ...restProps
  } = useContextualFormProps<AdapterProps>(props);
  const { theme } = useStyle();
  const size = _size ?? getDefaultSize(theme);
  const handleChange = useDebouncedEventHandler(debouncedOnChange ?? _noop, onChange, debounceInterval || 200);
  const sharedProps = add$props({ size, variant, intent });

  const convertedOverrides = useConvertOverrides<Record<string, any>>(
    {
      Root: {
        style: [
          // reset baseui styles
          { backgroundColor: 'transparent', ...borderStyle('none'), ...padding(0), ...borderRadius(0) },
          className,
          style,
        ],
        props: sharedProps,
      },
      InputContainer: {
        style: getInputContainerStyles,
        props: sharedProps,
      },
      Input: {
        style: [getInputStyles, borderRadius('inherit')],
        props: { ...sharedProps, 'aria-required': restProps['aria-required'] },
      },
      StartEnhancer: {
        style: getEnhancerStyles,
        props: add$props({ isStart: true, intent, variant }),
      },
      EndEnhancer: {
        style: getEnhancerStyles,
        props: add$props({ isStart: false, intent, variant }),
      },
      ClearIcon: {
        component: ClearIconButton,
      },
    },
    overrides,
    [overrides, className, style, size, variant, intent, handleChange]
  );

  return { ...restProps, onChange: handleChange, overrides: convertedOverrides };
};

export default useInputBasewebAdapter;
