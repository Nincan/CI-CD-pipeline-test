import { Checkbox as BaseCheckbox, StatefulCheckbox as BaseStatefulCheckbox } from 'baseui/checkbox';
import { PropsWithChildren, ReactElement } from 'react';
import useCheckboxAdapter from './basewebAdapters';
import { CheckboxProps, StatefulCheckboxProps } from './types';

// @ts-ignore
BaseCheckbox.displayName = 'BaseUICheckbox';
BaseStatefulCheckbox.displayName = 'BaseUIStatefulCheckbox';

export const Checkbox = (props: PropsWithChildren<CheckboxProps>): ReactElement => {
  const adaptedProps = useCheckboxAdapter(props);

  return <BaseCheckbox {...adaptedProps} />;
};
Checkbox.displayName = 'Checkbox';

export const StatefulCheckbox = (props: PropsWithChildren<StatefulCheckboxProps>): ReactElement => {
  const adaptedProps = useCheckboxAdapter(props);

  return <BaseStatefulCheckbox {...adaptedProps} />;
};
StatefulCheckbox.displayName = 'StatefulCheckbox';
