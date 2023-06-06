import { createContext, useContext, useMemo } from 'react';
import * as React from 'react';
import _merge from 'lodash/merge';

import { DEFAULT_LOCALE } from './en_US';
import { Locale } from './types';

// https://stackoverflow.com/a/49936686/12232334
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T[P] extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : DeepPartial<T[P]>;
};

// TODO: will be changed to `undefined` when MeetWrapper is implemented.
export const localeContext = createContext<Locale>(DEFAULT_LOCALE);
localeContext.displayName = 'LocaleContext';

export const LocaleConsumer = localeContext.Consumer;

export const useLocale = () => useContext(localeContext);

export const LocaleProvider = (props: { children?: React.ReactNode; locale?: DeepPartial<Locale> }) => {
  const { Provider } = localeContext;
  const outerLocale = useLocale();
  const value = useMemo(() => _merge({}, DEFAULT_LOCALE, outerLocale, props.locale), [props.locale, outerLocale]);
  return <Provider value={value}>{props.children}</Provider>;
};
LocaleProvider.displayName = 'LocaleProvider';
