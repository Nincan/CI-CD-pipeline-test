import { useState, useCallback } from 'react';

type UseDatePickerStateType = {
  onClose?: () => void;
  onOpen?: () => void;
  startOpen?: boolean;
};

export const useDatePickerState = ({ onClose, onOpen, startOpen }: UseDatePickerStateType = {}) => {
  const [isOpen, setIsOpen] = useState(startOpen);
  const handleOpen = useCallback(() => {
    setIsOpen(true);
    onOpen?.();
  }, [setIsOpen, onOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [setIsOpen, onClose]);

  return {
    isOpen,
    setIsOpen,
    handleOpen,
    handleClose,
  };
};
