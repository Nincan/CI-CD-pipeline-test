import { RefObject, useEffect, Ref } from 'react';
import { FocusPosition } from '../input';
import { useCombineRefObjects } from './useCombinedRef';

const __DEV__ = process.env.NODE_ENV !== 'production';

type Params<T> = { autoFocus?: FocusPosition; inputRef?: Ref<T> };

const useAutoFocus = <T extends HTMLInputElement | HTMLTextAreaElement>({
  autoFocus,
  inputRef,
}: Params<T>): RefObject<T> => {
  const refObj = useCombineRefObjects<T>(inputRef);

  useEffect(() => {
    if (!refObj.current || typeof autoFocus === 'undefined') {
      return;
    }
    let position: number;
    switch (typeof autoFocus) {
      case 'boolean':
        if (autoFocus) {
          position = refObj.current.value.length;
        } else {
          return;
        }
        break;
      case 'number':
        if (autoFocus >= refObj.current.value.length) {
          position = refObj.current.value.length;
        } else if (autoFocus >= 0) {
          position = autoFocus;
        } else {
          position = 0;
        }
        break;
      case 'string':
        if (autoFocus === 'start') {
          position = 0;
        } else if (autoFocus === 'end') {
          position = refObj.current.value.length;
        } else {
          return;
        }
        break;
      default:
        position = 0;
    }
    try {
      refObj.current.focus({ preventScroll: true });
      refObj.current.setSelectionRange(position, position);

      // moves cursor at the end of the text in input & textarea
      // this would have been handled by browser, but we have to do it explicitly because of preventScroll option in ref.focus
      if (position === refObj.current.value.length) {
        refObj.current.scrollLeft = refObj.current.scrollWidth;
        refObj.current.scrollTop = refObj.current.scrollHeight;
      }
    } catch (err) {
      if (__DEV__) {
        console.error(err);
      }
    }
  }, [autoFocus, refObj]);

  return refObj;
};

export default useAutoFocus;
