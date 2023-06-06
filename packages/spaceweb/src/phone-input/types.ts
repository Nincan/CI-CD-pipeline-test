import * as React from 'react';
import { MenuProps } from '../menu';
import { InputProps, SharedProps } from '../input';
import { Override } from '../overrides';

import { COUNTRIES, STATE_CHANGE_TYPE } from './constants';

export type Country = {
  id: keyof typeof COUNTRIES;
  label: string;
  dialCode: string;
};

export type State = {
  country: Country;
  phoneNumber: string;
};

export type Value = Partial<State> | undefined;

export type StateChange = keyof typeof STATE_CHANGE_TYPE;

export type StateReducer = (type: StateChange, nextState: State, currentState: State) => State;

export type PhoneInputOverrides = {
  Input?: Override<SharedProps & Record<string, any>>;
  CountrySelect?: Override<SharedProps & Record<string, any>>;
  CountrySelectContainer?: Override<SharedProps & Record<string, any>>;
  FlagContainer?: Override<SharedProps & Record<string, any>>;
  DialCode?: Override<SharedProps & Record<string, any>>;
};

export type PhoneInputProps = Omit<InputProps, 'value' | 'onChange'> & {
  onInputChange?: (event: React.SyntheticEvent<HTMLInputElement>) => unknown;
  onChange?: (value: Value) => void;
  value?: Value;
  mapIsoToLabel?: (iso: string) => string;
  maxDropdownHeight?: string;
  countries?: Array<Country>;
  maxDropdownWidth?: string;
  overrides?: PhoneInputOverrides;
};

export type StatefulPhoneInputProps = PhoneInputProps;

export type StatefulPhoneInputContainerProps = Omit<PhoneInputProps, 'children'> & {
  initialState?: State;
  stateReducer?: StateReducer;
  children: (props: PhoneInputProps) => any;
};

export type CountrySelectContainerProps = Required<
  Pick<
    PhoneInputProps,
    'size' | 'disabled' | 'onChange' | 'mapIsoToLabel' | 'maxDropdownHeight' | 'maxDropdownWidth' | 'countries'
  >
> & {
  overrides?: Pick<PhoneInputOverrides, 'CountrySelectContainer' | 'CountrySelect' | 'FlagContainer' | 'DialCode'>;
  value: State;
};

export type CountrySelectProps = Omit<CountrySelectContainerProps, 'overrides'> & {
  overrides?: Pick<PhoneInputOverrides, 'CountrySelect' | 'FlagContainer'>;
};

export type FlagContainerProps = Pick<CountrySelectContainerProps, 'size' | 'disabled' | 'value'> & {
  overrides?: Pick<PhoneInputOverrides, 'FlagContainer'>;
};

export type DialCodeProps = Pick<CountrySelectContainerProps, 'size' | 'value'> & {
  overrides?: Pick<PhoneInputOverrides, 'DialCode'>;
};

export type FixedSizeListItemProps = {
  item: React.ReactElement;
  top: number;
};

export type VirtualizedCountrySelectDropdownProps = MenuProps & {
  ListItem: React.ComponentType<FixedSizeListItemProps>;
  emptyListHeight?: number;
  listItemHeight?: number;
  overscanCount?: number;
  parentRef: React.MutableRefObject<HTMLDivElement>;
};
