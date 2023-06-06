import { useStyletron } from 'baseui';
import { useCallback } from 'react';
import rtlCSSJS from 'rtl-css-js';

import { useLatest } from '../hooks/useLatest';
import { StyleObject, ThemeContext } from '../types';
import { useTheme } from '../theme/context';


const identity = x => x;
/**
 * styletron returns new `styletronCSS` function each time the hook is called. This hook memorizes the css function and returns same reference every time.
 */
const useMemoizedStyletron = (): ReturnType<typeof useStyletron> => {
  const [styletronCSS, theme] = useStyletron();
  const ctx = useTheme() as ThemeContext;
  const cssRef = useLatest(styletronCSS);
  const decorator = ctx.direction === 'rtl' ? rtlCSSJS : identity;
  const css = useCallback((arg: StyleObject) => cssRef.current(decorator(arg)), [cssRef, decorator]);
  return [css, theme];
};

export default useMemoizedStyletron;
