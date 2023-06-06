import { useEffect, useState } from 'react';

const useStickyElement = (): {
  isSticky: boolean;
  setStickySentinelRef: (el: HTMLDivElement | null) => void;
} => {
  const [stickySentinelRef, setStickySentinelRef] = useState<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // sentinel scrolls out of the visible viewport, the sticky property is active
        if (entry.intersectionRatio === 0) {
          setIsSticky(true);
        }

        // sentinel scrolls into the visible viewport, the sticky property is inactive
        if (entry.intersectionRatio === 1) {
          setIsSticky(false);
        }
      },
      { threshold: [0, 1] }
    );

    if (stickySentinelRef !== null) {
      observer.observe(stickySentinelRef);
    }

    return (): void => {
      if (stickySentinelRef !== null) {
        observer.unobserve(stickySentinelRef);
      }
    };
  }, [stickySentinelRef]);

  return {
    isSticky,
    setStickySentinelRef,
  };
};

export default useStickyElement;
