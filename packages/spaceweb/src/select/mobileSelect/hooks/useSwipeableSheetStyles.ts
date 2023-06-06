import * as React from 'react';
import _noop from 'lodash/noop';
import { Styles } from '../../../types';

const getTouches = (e: React.TouchEvent): React.Touch => e.touches[0];

export const useSwipeableSheetStyles = ({
  swipeThreshold,
  handleDismiss,
  dismissTimeout = 200,
}: {
  swipeThreshold: number;
  handleDismiss?: () => void;
  dismissTimeout?: number;
}): {
  sheetStyles: Styles;
  onSwipeStart: (e: React.TouchEvent) => void;
  onSwipeEnd: (e: React.TouchEvent) => void;
  onSwipe: (e: React.TouchEvent) => void;
  onHide: () => void;
} => {
  const initialPositionRef = React.useRef<number>(0);
  const [swipedArea, setSwipedArea] = React.useState<string>('0px');

  const onSwipeStart = React.useCallback((e: React.TouchEvent): void => {
    const { clientY: _initialPosition } = getTouches(e);
    initialPositionRef.current = _initialPosition;
  }, []);

  const onSwipe = React.useCallback((e: React.TouchEvent): void => {
    const change = getTouches(e).clientY - initialPositionRef.current;
    // If moved up then do nothing
    if (change < 0) return;
    // If sheet is moved down then translate
    setSwipedArea(`${change}px`);
  }, []);

  const onSwipeEnd = React.useCallback(
    (e: React.TouchEvent): void => {
      const change = e.changedTouches[0].clientY - initialPositionRef.current;
      initialPositionRef.current = 0;
      setSwipedArea(change < swipeThreshold ? '0px' : '100%');
    },
    [swipeThreshold]
  );

  const onHide = React.useCallback(() => {
    if (typeof handleDismiss === 'function') {
      handleDismiss();
    }
  }, [handleDismiss]);

  React.useEffect(() => {
    if (swipedArea !== '100%') return _noop;

    const timeoutId = setTimeout(() => {
      handleDismiss?.();
    }, dismissTimeout);
    return (): void => {
      clearTimeout(timeoutId);
    };
  }, [swipedArea, dismissTimeout, handleDismiss]);

  return {
    sheetStyles: [
      {
        transform: `translateY(${swipedArea})`,
      },
      swipedArea === '100%' ? 'transition-transform duration-200 ease-in-out' : '',
    ],
    onSwipeStart,
    onSwipe,
    onSwipeEnd,
    onHide,
  };
};
