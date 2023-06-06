import { useMemo, useState } from 'react';
import _noop from 'lodash/noop';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

const isBrowser = typeof window !== 'undefined';

export type UseMeasureRect = Pick<
  DOMRectReadOnly,
  'x' | 'y' | 'top' | 'left' | 'right' | 'bottom' | 'height' | 'width'
>;
export type UseMeasure<E extends Element = Element> = (element: E) => void;
export type UseMeasureResult<E extends Element = Element> = [UseMeasure<E>, UseMeasureRect];

const defaultState: UseMeasureRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

function _useMeasure<E extends Element = Element>(): UseMeasureResult<E> {
  const [element, ref] = useState<E | null>(null);
  const [rect, setRect] = useState<UseMeasureRect>(defaultState);

  const observer = useMemo(
    () =>
      new (window as any).ResizeObserver((entries: ResizeObserverEntry[]) => {
        if (entries[0]) {
          const { x, y, width, height, top, left, bottom, right } = entries[0].contentRect;
          setRect({ x, y, width, height, top, left, bottom, right });
        }
      }),
    []
  );

  useIsomorphicLayoutEffect(() => {
    if (!element) return;
    observer.observe(element);
    // eslint-disable-next-line consistent-return
    return (): void => {
      observer.disconnect();
    };
  }, [element]);

  return [ref, rect];
}

export const useMeasure =
  isBrowser && typeof (window as any).ResizeObserver !== 'undefined'
    ? _useMeasure
    : ((() => [_noop, defaultState]) as typeof _useMeasure);
