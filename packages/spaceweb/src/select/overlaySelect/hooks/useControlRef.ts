import { useEffect } from 'react';
import { ControlRef } from 'baseui/select';

type Params = {
  openPopover: () => void;
  closePopover: () => void;
  inputElement: HTMLInputElement | HTMLDivElement | null;
  setInputValue: (val: string) => void;
};
export const useControlRef = (
  controlRef: ControlRef | undefined,
  { openPopover, closePopover, inputElement, setInputValue }: Params
) => {
  useEffect(() => {
    if (!controlRef) {
      return undefined;
    }
    controlRef.current = {
      setDropdownOpen: shouldOpen => {
        if (shouldOpen) openPopover();
        else closePopover();
      },
      setInputValue,
      blur: () => {
        inputElement?.blur();
      },
      focus: () => {
        inputElement?.focus();
      },
      setInputBlur: () => {
        inputElement?.blur();
      },
      setInputFocus: () => {
        inputElement?.focus();
      },
    };
    return () => {
      controlRef.current = null;
    }
  }, [openPopover, closePopover, controlRef, setInputValue, inputElement]);
};
