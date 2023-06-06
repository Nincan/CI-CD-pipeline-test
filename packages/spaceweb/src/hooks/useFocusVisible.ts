import { useState, useCallback } from 'react';
import { isFocusVisible } from 'baseui/utils/focusVisible';
import useCombinedHandler from './useCombinedHandler';

export const useFocusVisible = (props?: Record<string, any>) => {
  const [$isFocusVisible, setIsFocusVisible] = useState(false);
  const handleFocus = useCallback(
    event => {
      if (isFocusVisible(event)) {
        setIsFocusVisible(true);
      }
    },
    [setIsFocusVisible]
  );
  const handleBlur = useCallback(() => {
    if ($isFocusVisible) {
      setIsFocusVisible(false);
    }
  }, [$isFocusVisible, setIsFocusVisible]);

  return {
    $isFocusVisible,
    onFocus: useCombinedHandler(props?.onFocus, handleFocus),
    onBlur: useCombinedHandler(props?.onBlur, handleBlur),
  };
};
