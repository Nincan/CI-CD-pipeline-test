import { STATE_CHANGE_TYPE as BASE_STATE_CHANGE_TYPE } from 'baseui/select';

export const STATE_CHANGE_TYPE = {
  selectAll: 'selectAll',
  inputChange: 'inputChange',
  ...BASE_STATE_CHANGE_TYPE,
} as const;

export const UNGROUPED_ID = '__ungrouped';
export const LOADING_KEY = '__loading';
export const CLEARABLE_KEY = 'clearable';
