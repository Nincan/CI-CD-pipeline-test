import { KeyboardEventHandler, MouseEventHandler, useCallback, useContext, useEffect, useMemo } from 'react';
import { LayersContext } from 'baseui/layer';
import { useDocument } from '../spacewebProvider/DocumentProvider';

let handlersInitialized = false;
let docClickHandlers: MouseEventHandler[] = [];
let escapeKeyHandlers: KeyboardEventHandler[] = [];

const addEscapeHandler = (escapeKeyHandler: KeyboardEventHandler): void => {
  escapeKeyHandlers.push(escapeKeyHandler);
};

const removeEscapeHandler = (escapeKeyHandler: KeyboardEventHandler): void => {
  escapeKeyHandlers = escapeKeyHandlers.filter(handler => handler !== escapeKeyHandler);
};

const addDocClickHandler = (docClickHandler: MouseEventHandler): void => {
  docClickHandlers.push(docClickHandler);
};

const removeDocClickHandler = (docClickHandler: MouseEventHandler): void => {
  docClickHandlers = docClickHandlers.filter(handler => handler !== docClickHandler);
};

const resetHandlers = (): void => {
  handlersInitialized = false;
  docClickHandlers = [];
  escapeKeyHandlers = [];
};

const useLayersContextValue = (): React.ContextType<typeof LayersContext> => {
  const ctxValue = useContext(LayersContext);
  const doc = useDocument();

  const onDocumentClick = useCallback(event => {
    docClickHandlers.forEach(handler => handler(event));
  }, []);

  const onKeyUp = useCallback(event => {
    if (event.key === 'Escape') {
      const escapeKeyHandler = escapeKeyHandlers[escapeKeyHandlers.length - 1];
      if (escapeKeyHandler) {
        escapeKeyHandler(event);
      }
    }
  }, []);

  useEffect(() => {
    if (handlersInitialized) return undefined;

    doc?.addEventListener('keyup', onKeyUp);
    // using mousedown event so that callback runs before events on children inside of the layer
    doc?.addEventListener('mousedown', onDocumentClick);
    handlersInitialized = true;
    return (): void => {
      doc?.removeEventListener('keyup', onKeyUp);
      doc?.removeEventListener('mousedown', onDocumentClick);
      resetHandlers();
    };
  }, [doc, onDocumentClick, onKeyUp]);

  const contextValues = ctxValue && typeof ctxValue === 'object' ? Object.values(ctxValue) : [];

  return useMemo(
    () => ({ ...ctxValue, addEscapeHandler, removeEscapeHandler, addDocClickHandler, removeDocClickHandler }),
    // eslint-disable-next-line -- baseui does not memoize values of context, meaning
    [...contextValues]
  );
};

export default useLayersContextValue;
