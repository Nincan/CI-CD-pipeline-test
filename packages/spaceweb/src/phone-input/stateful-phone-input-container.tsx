import { useState } from 'react';
import * as React from 'react';
import { StatefulPhoneInputContainerProps, State } from './types';
import defaultProps from './default-props';
import { STATE_CHANGE_TYPE } from './constants';
import { getDefaultValue } from './utils';

const defaultStateReducer = (type, nextState) => nextState;

const StatefulPhoneInputContainer = (props: StatefulPhoneInputContainerProps): React.ReactElement => {
  const {
    clearable,
    disabled,
    id,
    initialState,
    intent,
    maxDropdownHeight,
    maxDropdownWidth,
    mapIsoToLabel,
    name,
    onChange = defaultProps.onChange,
    overrides,
    placeholder,
    required,
    size,
    stateReducer = defaultStateReducer,
    variant,
    countries,
  } = props;
  const [state, setState] = useState(initialState ?? getDefaultValue(countries));

  const internalSetState = (type, nextState) => {
    setState(stateReducer(type, nextState, state));
  };

  const statefulOnChange = ({ country, phoneNumber }: State) => {
    onChange({ country, phoneNumber });
    internalSetState(STATE_CHANGE_TYPE.onChange, {
      ...state,
      country,
      phoneNumber,
    });
  };

  return props.children({
    ...defaultProps,
    'aria-label': props['aria-label'],
    'aria-labelledby': props['aria-labelledby'],
    'aria-describedby': props['aria-describedby'],
    clearable,
    disabled,
    id,
    intent,
    maxDropdownHeight,
    maxDropdownWidth,
    mapIsoToLabel,
    name,
    overrides,
    placeholder,
    required,
    size,
    variant,
    value: state,
    onChange: statefulOnChange,
    countries,
  });
};

export default StatefulPhoneInputContainer;
