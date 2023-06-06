import { MutableRefObject, ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import useUpdateEffect from '../hooks/useUpdateEffect';
import { TRANSITION_DURATION } from './constants';
import { HideReason, Intent } from './types';

const useHideOnClickAway = ({ open, hideOnClickAway, handleClose }): MutableRefObject<HTMLElement | null> => {
  const snackbarContainerRef = useRef<HTMLElement | null>(null);

  const handleDocumentClick = useCallback(
    (event: Event) => {
      if (open && hideOnClickAway) {
        if (!snackbarContainerRef.current?.contains(event.target as Node)) {
          handleClose('clickaway');
        }
      }
    },
    [open, hideOnClickAway]
  );

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return (): void => document.removeEventListener('click', handleDocumentClick);
  }, [handleDocumentClick]);

  return snackbarContainerRef;
};

const useAutoHide = ({ open, autoHide, autoHideDuration, handleClose, autoHideTimeoutRef }): void => {
  useEffect(() => {
    if (open && autoHide && autoHideDuration > 0) {
      autoHideTimeoutRef.current = window.setTimeout(() => handleClose('timeout'), autoHideDuration);
      return () => window.clearTimeout(autoHideTimeoutRef.current);
    }
    return undefined;
  }, [open, autoHide, autoHideDuration]);
};

const useDomVisibility = ({ message, open, enter, handleClose, intent }): boolean => {
  const [domVisibility, setDomVisibility] = useState(false);
  // handle exit, enter on message change
  useEffect(() => {
    if (!message) return undefined;

    // enter new snackbar immediately if none is opened already else wait for exit transition to finish.
    const timeoutId = window.setTimeout(enter, open ? TRANSITION_DURATION : 0);
    setDomVisibility(true);
    // exit previously opened snackbar
    open && handleClose('messageChange');
    return (): void => window.clearTimeout(timeoutId);
  }, [message, intent]);
  // remove from DOM, once transition is over
  useUpdateEffect(() => {
    if (open) return undefined;

    const timeoutId = window.setTimeout(() => setDomVisibility(false), TRANSITION_DURATION);
    return (): void => {
      window.clearTimeout(timeoutId);
    };
  }, [open]);
  return domVisibility;
};

type UseSnackbarParams = {
  autoHide: boolean;
  autoHideDuration: number;
  hideOnClickAway: boolean;
  intent: Intent;
  message?: React.ReactNode;
  onClose?: (reason: HideReason) => void;
};
type UseSnackbarReturnValue = {
  open: boolean;
  shouldRender: boolean;
  handleClose: (reason: HideReason) => void;
  snackbarContainerRef: MutableRefObject<HTMLElement | null>;
  snackbarContainerProps: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
  message: ReactNode;
  intent: Intent;
};
const useSnackbar = ({
  autoHide,
  autoHideDuration,
  hideOnClickAway,
  intent: nextIntent,
  message: nextMessage,
  onClose,
}: UseSnackbarParams): UseSnackbarReturnValue => {
  const [open, setOpen] = useState(false);
  const [snackbarContent, setSnackbarContent] = useState({ intent: nextIntent, message: nextMessage });

  const autoHideTimeoutRef = useRef<number | undefined>();

  const handleClose = (reason: HideReason): void => {
    setOpen(false);
    window.clearTimeout(autoHideTimeoutRef.current);
    onClose?.(reason);
  };

  const enter = (): void => {
    // set the intent and message to be rendered in the Snackbar which we are entering
    setSnackbarContent({ intent: nextIntent, message: nextMessage });
    setOpen(true);
  };

  useAutoHide({ open, handleClose, autoHideTimeoutRef, autoHideDuration, autoHide });
  const snackbarContainerRef = useHideOnClickAway({ hideOnClickAway, handleClose, open });
  const shouldRender = useDomVisibility({ handleClose, open, intent: nextIntent, message: nextMessage, enter });

  const handleMouseEnter = (): void => {
    window.clearTimeout(autoHideTimeoutRef.current);
  };

  const handleMouseLeave = (): void => {
    if (open && autoHide && autoHideDuration > 0) {
      window.clearTimeout(autoHideTimeoutRef.current);
      autoHideTimeoutRef.current = window.setTimeout(() => handleClose('timeout'), autoHideDuration);
    }
  };

  return {
    open,
    shouldRender,
    handleClose,
    snackbarContainerRef,
    snackbarContainerProps: {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
    },
    ...snackbarContent,
  };
};

export default useSnackbar;
