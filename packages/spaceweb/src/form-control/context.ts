import { createContext, useContext } from 'react';
import { Intent } from '../types';

type FormControlContextValueType = { intent?: Intent };
const FormControlContext = createContext<FormControlContextValueType>({ intent: 'default' });
FormControlContext.displayName = 'FormControlContext';
export const FormControlProvider = FormControlContext.Provider;
export const FormControlConsumer = FormControlContext.Consumer;
export const useFormControl = (): FormControlContextValueType => useContext(FormControlContext);

/**
 * @param props
 * uses form values to be passed using context to child components
 * this hook can be scaled to incorporate multiple props
 */
export const useContextualFormProps = <T extends FormControlContextValueType>(
  props: T,
  defaultProps: FormControlContextValueType = {}
): T => {
  const formControlValue = useFormControl();
  const intent = props.intent ?? formControlValue.intent ?? defaultProps.intent;
  return { ...props, intent };
};
