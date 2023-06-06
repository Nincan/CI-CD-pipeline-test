import { createContext, useContext } from 'react';
import { Styles } from '../types';

type stackContextProps = Partial<{ className: Styles; shrink: boolean }>;

export const stackContext = createContext<stackContextProps>({ className: undefined, shrink: undefined });
stackContext.displayName = 'StackContext';
export const StackProvider = stackContext.Provider;
export const StackConsumer = stackContext.Consumer;
export const useStack = (): stackContextProps => useContext(stackContext);
