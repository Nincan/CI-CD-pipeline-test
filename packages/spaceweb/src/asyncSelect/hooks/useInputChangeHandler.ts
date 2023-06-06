/**
 *  Created by Aneree on 22/04/21.
 */
import { useEffect } from 'react';

import * as React from 'react';

//hooks
import { useLatest } from '../../hooks/useLatest';
import { useDebouncedEventHandler } from '../../hooks/useDebouncedEventHandler';

//types
import { AsyncSelectProps } from '../types';

const EMPTY_OBJECT = {};

type InputEvent = React.FormEvent<HTMLInputElement>;
type InputEventHandler = React.FormEventHandler<HTMLInputElement>;
type OnInputChange = AsyncSelectProps['onInputChange'];

interface UseInputChangeHandlerArgs {
  inputElement: HTMLInputElement | null;
  listenAllInputChanges: boolean;
  debounceInterval?: number;
  onInputChange: OnInputChange;
  inputChangeHandlerToDebounce: InputEventHandler;
}

const useInputChangeHandler = ({
  inputElement,
  listenAllInputChanges,
  onInputChange,
  inputChangeHandlerToDebounce,
  debounceInterval,
}: UseInputChangeHandlerArgs): OnInputChange => {
  // When listenAllInputChanges is true, we want to listen to all the setStates of input value
  // triggered within baseweb/select (achieved using mutation observer). In such a scenario, we don't want to trigger
  // onInputChange received from props on input value changes that are not made by user.
  // When listenAllInputChanges is false, we just want to intercept the input changes made by user and also propagate
  // the same to consumers of AsyncSelect by invoking onInputChange from props

  const onDebouncedInputChange = useDebouncedEventHandler<InputEventHandler>(
    inputChangeHandlerToDebounce,
    listenAllInputChanges ? undefined : onInputChange,
    debounceInterval
  );
  const onDebouncedInputChangeRef = useLatest(onDebouncedInputChange);

  useEffect(() => {
    if (listenAllInputChanges && inputElement) {
      const observer = new MutationObserver(function(mutations) {
        mutations.forEach(mutation => {
          if (mutation.type === 'attributes') {
            onDebouncedInputChangeRef.current(EMPTY_OBJECT as InputEvent);
          }
        });
      });

      observer.observe(inputElement, {
        attributeFilter: ['value'],
      });

      return () => {
        observer.disconnect();
      };
    }
  }, [inputElement, listenAllInputChanges]);

  return listenAllInputChanges ? onInputChange : onDebouncedInputChange;
};

export { useInputChangeHandler };
