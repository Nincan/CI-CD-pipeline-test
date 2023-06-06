import { Theme } from '@sprinklr/spaceweb-themes/types';
import { Intent } from '../types';

export const getIntentColor = (intent: Intent, theme: Theme): string => {
  switch (intent) {
    case 'error':
      return theme.spr.supportError;
    case 'warning':
      return theme.spr.supportWarning;
    case 'success':
      return theme.spr.supportSuccess;
    case 'default':
    default:
      return theme.spr.interactive01;
  }
};
