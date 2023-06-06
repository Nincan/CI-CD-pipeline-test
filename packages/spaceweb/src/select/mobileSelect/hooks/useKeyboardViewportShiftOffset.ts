import * as React from 'react';

export const useKeyboardViewportShiftOffset = (
  rootRef: React.MutableRefObject<HTMLElement | null>
): { offsetBottom: number } => {
  const [offsetBottom, setOffsetBottom] = React.useState(0);

  React.useEffect(() => {
    // needed for mobile Safari which shifts the layout viewport up without resizing it
    // when the keyboard shows (see https://bugs.webkit.org/show_bug.cgi?id=141832)
    const handler = (): void => {
      if (rootRef.current) {
        const _offsetBottom = window.innerHeight - window.visualViewport.height - window.visualViewport.offsetTop;
        setOffsetBottom(_offsetBottom);
      }
    };

    window.visualViewport.addEventListener('resize', handler);
    return (): void => {
      window.visualViewport.removeEventListener('resize', handler);
    };
  }, []);

  return { offsetBottom };
};
