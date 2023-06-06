import { useCallback } from 'react';

/**
 * When you want to bind multiple handlers to same event.
 * onKeyDown = useCombinedHandler(handleOnKeyDown, props.onKeyDown)
 */
const useCombinedHandler = <T extends (...args: unknown[]) => void>(...handlers: (T | undefined)[]) =>
  useCallback(
    (...args: Parameters<T>) => {
      handlers.forEach(handler => handler && handler(...args));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...handlers]
  );

export default useCombinedHandler;
