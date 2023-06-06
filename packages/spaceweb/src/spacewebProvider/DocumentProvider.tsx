import { createContext, PropsWithChildren, ReactElement, useContext, useMemo } from 'react';
import { isServer } from './utils';

export const DocumentContext = createContext<Document | undefined>(isServer ? undefined : document);
DocumentContext.displayName = 'DocumentContext';

export const DocumentProvider = (props: PropsWithChildren<{ value?: Document }>): ReactElement => {
  const documentValue = useMemo(() => {
    if (!isServer) {
      return props.value || document;
    }
    return undefined;
  }, []);
  return <DocumentContext.Provider value={documentValue}>{props.children}</DocumentContext.Provider>;
};
DocumentProvider.displayName = 'DocumentProvider';

export const useDocument = (): Document | undefined => useContext(DocumentContext);
