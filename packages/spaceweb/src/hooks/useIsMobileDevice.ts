import { useTheme } from '../theme';
import useMedia from './useMatchMedia';

export const useIsMobileDevice = () => {
  const currentTheme = useTheme();
  return useMedia(`(max-width: ${currentTheme.theme.screens.md})`, false);
};
