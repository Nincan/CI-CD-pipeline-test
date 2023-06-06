import * as React from 'react';
import { IconProps } from '../icon';
import Alert from '../icon/components/alert-solid';
import Tick from '../icon/components/tickCircle-solid';
import Error from '../icon/components/error-solid';
import { Intent } from './types';

export const TRANSITION_DURATION = 1000;
export const INTENT_TO_ICON: Record<Intent, React.ComponentType<IconProps>> = {
  success: Tick,
  error: Error,
  warning: Alert,
};
export const TYPE_TO_HIDE_DURATION: Record<Intent, number> = {
  success: 3000,
  error: 5000,
  warning: 5000,
};
