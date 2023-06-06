/**
 * @author Ivan Torres
 */

import { useMemo } from 'react';

import { useTheme } from '../theme';
import { StyleUtils, ThemeContext } from '../types';
import _buildUtils from './_buildUtils';
import useMemoizedStyletron from './useMemoizedStyletron';

const useStyle = (): StyleUtils => {
  const ctx = useTheme() as ThemeContext;
  const [styletronCSS] = useMemoizedStyletron();

  return useMemo<StyleUtils>(() => _buildUtils(ctx, styletronCSS), [ctx, styletronCSS]);
};

export default useStyle;
