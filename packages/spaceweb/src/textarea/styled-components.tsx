import { getInputContainerStyles, getInputStyles } from '../input/styled-components';

//todo: need to use withThemeOverride to create overriden styled version of comps
export const getTextareaInputStyles = [
  getInputStyles,
  ({}, { $autoSize }) => ($autoSize ? 'overflow-hidden' : 'resize'),
  ({ theme }) => ({ width: '100vw', '::placeholder': { color: theme.spr.textPlaceholder } }),
];

export const getTextareaInputContainerStyles = [getInputContainerStyles, 'max-w-full', { width: 'min-content' }];
