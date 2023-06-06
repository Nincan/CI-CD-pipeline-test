import { StyleObject } from '../types';

const dateInputSizeConfig = {
  sm: { paddingLeft: '4px' },
  md: { paddingLeft: '4px' },
  lg: { paddingLeft: '8px' },
};

export const inputStyles = [
  'tabular-nums',
  (utils, { $size }): StyleObject => ({
    paddingLeft: (dateInputSizeConfig[$size] ?? dateInputSizeConfig.lg).paddingLeft,
  }),
];
