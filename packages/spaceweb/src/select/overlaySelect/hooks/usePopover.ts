import { useCallback, useEffect, useState } from 'react';

import { OverlaySelectProps } from '../../types';

import { useLatest } from '../../../hooks/useLatest';
import { useFirstMountState } from '../../../hooks/useFirstMountState';

const usePopover = ({ startOpen, onOpen, onClose }: OverlaySelectProps) => {
  const isFirstMount = useFirstMountState();

  const onOpenRef = useLatest(onOpen);
  const onCloseRef = useLatest(onClose);

  const [popoverOpen, setPopoverState] = useState(!!startOpen);

  const togglePopoverState = useCallback(() => setPopoverState(prev => !prev), []);

  const closePopover = useCallback(() => setPopoverState(false), []);

  const openPopover = useCallback(() => setPopoverState(true), []);

  useEffect(() => {
    if (!isFirstMount) {
      popoverOpen ? onOpenRef.current?.() : onCloseRef.current?.();
    }
  }, [popoverOpen]);

  return {
    popoverOpen,
    togglePopoverState,
    openPopover,
    closePopover,
  };
};

export default usePopover;
