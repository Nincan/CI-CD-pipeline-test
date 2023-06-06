import { Theme } from '@sprinklr/spaceweb-themes/types';

import { Size } from '../types';

export const getComponentTheme = (theme: Theme, componentName: string) => theme[componentName];

const sizeAdapter: Record<Size, string> = {
  xxxxs: 'sizeXxxxs',
  xxxs: 'sizeXxxs',
  xxs: 'sizeXxs',
  xs: 'sizeXs',
  sm: 'sizeSm',
  md: 'sizeMd',
  lg: 'sizeLg',
  xl: 'sizeXl',
};

/*
  NOTE: Need to add defaultSize as Button only supports xs - lg, whereas
  it's consumers like IconButton support xs - xl, due to which accessing component theme breaks in Button for xl
 */
export const getComponentSizeTheme = (
  theme: Theme,
  componentName: string,
  size: Size | undefined,
  defaultSize: Size
) => {
  const componentTheme = getComponentTheme(theme, componentName) ?? {};

  return componentTheme[sizeAdapter[size ?? defaultSize]] ?? componentTheme[sizeAdapter[defaultSize]];
};

export const getDefaultSize = (theme: Theme): 'md' | 'xxxs' => {
  switch (theme.density) {
    case 'COMFORTABLE':
      return 'md';
    case 'SPACIOUS':
      return 'md';
    case 'COMPACT':
      return 'xxxs';
    default:
      return 'md';
  }
};
