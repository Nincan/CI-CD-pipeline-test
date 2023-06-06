import { useCallback, useEffect, useRef, useState } from 'react';

const cancelScroll = (event: WheelEvent | TouchEvent) => {
  event.preventDefault();
  event.stopPropagation();
};

type Options = {
  enabled?: boolean;
};

const useScrollCapture = ({ enabled }: Options): ((el: HTMLElement) => void) => {
  const touchStart = useRef(0);
  const [scrollTarget, setScrollTarget] = useState<HTMLElement | null>(null);

  // Prevents browser from handling scroll event, instead handle scroll using javascript
  const handleElementScroll = useCallback(
    (event: WheelEvent | TouchEvent, delta: number) => {
      if (!scrollTarget) return;

      const { scrollTop, scrollHeight, clientHeight } = scrollTarget;
      const isDeltaPositive = delta > 0;
      const availableScroll = scrollHeight - clientHeight - scrollTop;

      // bottom limit
      if (isDeltaPositive && delta > availableScroll) {
        scrollTarget.scrollTop = scrollHeight;

        // top limit
      } else if (!isDeltaPositive && -delta > scrollTop) {
        scrollTarget.scrollTop = 0;
      } else {
        scrollTarget.scrollTo({ top: scrollTop + delta });
      }

      cancelScroll(event);
    },
    [scrollTarget]
  );

  const onWheel = useCallback(
    (event: WheelEvent) => {
      handleElementScroll(event, event.deltaY);
    },
    [handleElementScroll]
  );
  const onTouchStart = useCallback((event: TouchEvent) => {
    // set touch start so we can calculate touchmove delta
    touchStart.current = event.changedTouches[0].clientY;
  }, []);
  const onTouchMove = useCallback(
    (event: TouchEvent) => {
      const deltaY = touchStart.current - event.changedTouches[0].clientY;
      handleElementScroll(event, deltaY);
    },
    [handleElementScroll]
  );

  const lock = useCallback(
    el => {
      if (!el) return;

      // Need to keep event as active, such that browser waits for the handler to complete and doesn't fire scroll in background
      el.addEventListener('wheel', onWheel, { passive: false });
      el.addEventListener('touchstart', onTouchStart, { passive: false });
      el.addEventListener('touchmove', onTouchMove, { passive: false });
    },
    [onWheel, onTouchStart, onTouchMove]
  );

  const unlock = useCallback(
    el => {
      if (!el) return;

      el.removeEventListener('wheel', onWheel);
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchmove', onTouchMove);
    },
    [onWheel, onTouchStart, onTouchMove]
  );

  useEffect(() => {
    if (!enabled) return;

    lock(scrollTarget);

    return () => {
      unlock(scrollTarget);
    };
  }, [enabled, lock, unlock, scrollTarget]);

  return setScrollTarget;
};

export default useScrollCapture;
