import { useState } from 'react';
import { LayersManager } from '../layer';
import { PopoverProps } from './types';

/**
 * Wraps content with LayersManager making sure all the inner popovers are hosted inside the current popover.
 */
export const useContent = ({ content }: { content: PopoverProps['content'] }) => {
  const [contentHost, setContentHost] = useState<HTMLElement | null>(null);
  const _content = typeof content === 'function' ? content() : content;
  return {
    setContentHost,
    wrappedContent: <LayersManager host={contentHost}>{_content}</LayersManager>,
  };
};

type UseFocusLockParams = Pick<PopoverProps, 'focusLock' | 'returnFocus'>;
export const useFocusLock = ({ focusLock, returnFocus }: UseFocusLockParams): UseFocusLockParams => {
  let _focusLock = focusLock;
  if (returnFocus) {
    // according to baseui - focusLock should be true for returnFocus to work
    _focusLock = true;
  }
  return { focusLock: _focusLock, returnFocus };
};
