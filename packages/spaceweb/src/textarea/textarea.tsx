import { ReactElement } from 'react';
import {
  Textarea as BaseTextarea,
  StatefulTextarea as BaseStatefulTextarea,
  TextareaProps as BaseTextAreaProps,
  StatefulTextareaProps as BaseStatefulTextAreaProps,
} from 'baseui/textarea';
import useTextareaAdapter from './basewebAdapters';
import useAutoFocus from '../hooks/useAutoFocus';
import useAutoSizeTextarea from './useAutoSizeTextarea';
import { TextareaProps, StatefulTextareaProps } from './types';

// @ts-ignore
BaseTextarea.displayName = 'BaseUITextarea';
// @ts-ignore
BaseStatefulTextarea.displayName = 'BaseUIStatefulTextarea';

export const Textarea = (props: TextareaProps): ReactElement => {
  const { autoFocus, ...restProps } = props;
  const autoFocusRef = useAutoFocus({ autoFocus, inputRef: restProps.inputRef });
  const inputRef = useAutoSizeTextarea({
    value: restProps.value,
    autoSize: restProps.autoSize,
    inputRef: autoFocusRef,
  });
  const adaptedProps = useTextareaAdapter<Omit<TextareaProps, 'autoFocus'>>(restProps);

  return (
    <BaseTextarea
      {...adaptedProps}
      overrides={adaptedProps.overrides as Required<BaseTextAreaProps>['overrides']}
      inputRef={inputRef}
    />
  );
};
Textarea.displayName = 'Textarea';

export const StatefulTextarea = (props: StatefulTextareaProps): ReactElement => {
  const { autoFocus, ...restProps } = props;
  const autoFocusRef = useAutoFocus({ autoFocus, inputRef: restProps.inputRef });
  const adaptedProps = useTextareaAdapter<Omit<StatefulTextareaProps, 'autoFocus'>>(restProps);

  return (
    <BaseStatefulTextarea
      {...adaptedProps}
      overrides={adaptedProps.overrides as Required<BaseStatefulTextAreaProps['overrides']>}
      inputRef={autoFocusRef}
    />
  );
};
StatefulTextarea.displayName = 'StatefulTextarea';
