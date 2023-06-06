import * as React from 'react';
import { Theme } from '@sprinklr/spaceweb-themes/types';
import { getComponentSizeTheme } from '../helpers/themeHelpers';

const JOINABLE_TYPES = new Set(['string', 'number']);

// Checks the children of a React component to ensure every value is a number
// or a string. If they are, they are joined and returned. Useful for collecting
// text from the child of a node to use as an attribute.
export function getTextFromChildren(children: React.ReactNode): string | null {
  const childList = React.Children.toArray(children).filter(child => child !== null && child !== undefined);

  if (!childList.length) {
    return null;
  }

  const isJoinable = childList.every(child => JOINABLE_TYPES.has(typeof child));

  if (!isJoinable) {
    return null;
  }

  // Join on an empty string to preserve React's whitespace handling:
  // <Tag>foo{'bar'}baz</Tag> => 'foobar'
  // <Tag>foo {'bar'} baz</Tag> => 'foo bar baz'
  return childList.join('');
}

export const getDefaultTagSize = (theme: Theme): 'xxxs' | 'sm' | 'lg' => {
  switch (theme.density) {
    case 'COMFORTABLE':
      return 'sm';
    case 'SPACIOUS':
      return 'sm';
    case 'COMPACT':
      return 'xxxs';
    default:
      return 'lg';
  }
};

export const tagSizeMap = {
  xxxs: {
    paddingY: '1px',
    paddingX: '6px',
    height: '18px',
    fontSize: '13px',
    lineHeight: '16px',
    borderRadius: '4px',
    avatarIconSize: 12,
    clearableIconSize: '8px',
    clearableIconButtonSize: '14px',
    clearableIconButtonBorderRadius: '2px',
    clearableIconMarginX: '3px',
    startEnhancerMarginLeft: '6px',
    startEnhancerMarginRight: '2px',
  },
  sm: {
    paddingY: '2px',
    paddingX: '8px',
    height: '22px',
    fontSize: '14px',
    lineHeight: '18px',
    borderRadius: '5px',
    avatarIconSize: 14,
    clearableIconSize: '9px',
    clearableIconButtonSize: '16px',
    clearableIconButtonBorderRadius: '3px',
    clearableIconMarginX: '5px',
    startEnhancerMarginLeft: '8px',
    startEnhancerMarginRight: '3px',
  },
  lg: {
    paddingY: '7px',
    paddingX: '12px',
    height: '34px',
    fontSize: '16px',
    lineHeight: '18px',
    borderRadius: '6px',
    avatarIconSize: 20,
    clearableIconSize: '10px',
    clearableIconButtonSize: '18px',
    clearableIconButtonBorderRadius: '3px',
    clearableIconMarginX: '7px',
    startEnhancerMarginLeft: '12px',
    startEnhancerMarginRight: '4px',
  },
};

export const getTagSizeTheme = (theme, size) =>
  getComponentSizeTheme(theme, 'tag', size, getDefaultTagSize(theme)) ??
  tagSizeMap[size] ??
  tagSizeMap[getDefaultTagSize(theme)];
