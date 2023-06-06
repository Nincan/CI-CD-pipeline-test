import * as React from 'react';
import { useLayoutEffect } from 'react';
import { TextareaProps } from './types';

const useAutoSizeTextarea = ({
  value,
  inputRef,
  autoSize,
}: {
  value: TextareaProps['value'];
  inputRef: React.RefObject<HTMLTextAreaElement>;
  autoSize: TextareaProps['autoSize'];
}): React.RefObject<HTMLTextAreaElement> => {
  useLayoutEffect(() => {
    if (autoSize && inputRef.current) {
      inputRef.current.style.height = 'auto';
      if (inputRef.current.scrollHeight > 0) {
        inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
      }
    }
  }, [value, autoSize, inputRef]);

  return inputRef;
};

export default useAutoSizeTextarea;
