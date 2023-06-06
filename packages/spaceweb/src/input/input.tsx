import { ReactElement } from 'react';
import { Input as BaseInput, StatefulInput as BaseStatefulInput, MaskedInput as BaseMaskedInput } from 'baseui/input';

import useInputBasewebAdapter from './basewebAdapters';
import { InputProps, StatefulInputProps, MaskedInputProps } from './types';
import useAutoFocus from '../hooks/useAutoFocus';

// @ts-ignore
BaseInput.displayName = 'BaseUIInput';

export const Input = (props: InputProps): ReactElement => {
  const { autoFocus, ...restProps } = props;
  const adaptedProps = useInputBasewebAdapter(restProps);
  const inputRef = useAutoFocus({ autoFocus, inputRef: adaptedProps.inputRef });

  return <BaseInput {...adaptedProps} inputRef={inputRef} />;
};
Input.displayName = 'Input';

export const StatefulInput = (props: StatefulInputProps): ReactElement => {
  const { autoFocus, ...restProps } = props;
  const adaptedProps = useInputBasewebAdapter(restProps);
  const inputRef = useAutoFocus({ autoFocus, inputRef: adaptedProps.inputRef });

  return <BaseStatefulInput {...adaptedProps} inputRef={inputRef} />;
};
StatefulInput.displayName = 'StatefulInput';

export const MaskedInput = (props: MaskedInputProps): ReactElement => {
  const { autoFocus, ...restProps } = props;
  const adaptedProps = useInputBasewebAdapter(restProps);
  const inputRef = useAutoFocus({ autoFocus, inputRef: adaptedProps.inputRef });

  return <BaseMaskedInput {...adaptedProps} inputRef={inputRef} />;
};
MaskedInput.displayName = 'MaskedInput';
