/**
 *  Created by Aneree on 10/12/20.
 */
import { useMemo, useCallback, useEffect, ReactEventHandler } from 'react';
import _debounce from 'lodash/debounce';
import { useLatest } from './useLatest';

const useDebouncedEventHandler = <EH extends ReactEventHandler>(
  func: EH, //Event handler that needs to be debounced
  defaultHandler?: EH, // Event handler that should be invoked on every event trigger
  debounceInterval = 200
) => {
  const funcRef = useLatest(func);
  const debouncedHandler = useMemo(
    () => _debounce((...args: Parameters<ReactEventHandler>) => funcRef.current(...args), debounceInterval),
    [debounceInterval]
  );
  const debounceHandlerRef = useLatest(debouncedHandler);

  useEffect(
    () => () => {
      //cancel the invocation of debounced function on unmount
      debounceHandlerRef.current.cancel?.();
    },
    [debounceHandlerRef]
  );

  return useCallback(
    (event: Parameters<EH>[0]) => {
      //Persist the event for it to be accessible in debounced function
      event.persist?.();

      //@ts-ignore
      debouncedHandler(event);

      defaultHandler?.(event);
    },
    [defaultHandler, debouncedHandler]
  );
};

export { useDebouncedEventHandler };
