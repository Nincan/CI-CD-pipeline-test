import { useCallback } from 'react';
import * as React from 'react';

export type Ref<T> = React.RefCallback<T> | React.MutableRefObject<T> | null;

type Refs<T> = (Ref<T | null> | null | undefined)[];

export function combineRefs<T>(...refs: Refs<T>) {
  return (element: T) => {
    refs.forEach(ref => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(element);
      } else {
        ref.current = element;
      }
    });
  };
}

export function useCombineRefObjects<T>(...refs: Refs<T>): React.RefObject<T> {
  const targetRef = React.useRef<T>(null);

  React.useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
    return () => {
      refs.forEach(ref => {
        if (!ref) return;

        if (typeof ref === 'function') {
          ref(targetRef.current);
        } else {
          ref.current = targetRef.current;
        }
      });
    };
  }, [...refs]); // eslint-disable-line react-hooks/exhaustive-deps

  return targetRef;
}

/*
 * combines multiple refs to single MutableRefObject - when one wants to assign same element/instance to multiple refs
 * https://github.com/facebook/react/issues/13029#issue-331682836
 * can also be used to convert RefCallback to MutableRefObject
 */
function useCombinedRefs<T>(...refs: Refs<T>): React.RefCallback<T | null> {
  return useCallback(combineRefs<T>(...refs), [...refs]);
}

export default useCombinedRefs;
