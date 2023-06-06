import { TRANSITION_TYPES } from './constants';

export type TransitionType = typeof TRANSITION_TYPES[keyof typeof TRANSITION_TYPES];
