import * as React from 'react';
import { disableBodyScroll, enableBodyScroll, BodyScrollOptions } from 'body-scroll-lock';

export const usePauseBodyScrollEffect = ({
  currentEl,
  options,
}: {
  currentEl: HTMLElement | undefined | null;
  options?: BodyScrollOptions;
}): void => {
  React.useEffect(() => {
    if (currentEl) {
      disableBodyScroll(currentEl, options);
      return (): void => {
        enableBodyScroll(currentEl);
      };
    }
    return undefined;
  }, [currentEl, options]);
};
