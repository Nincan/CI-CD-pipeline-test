import { styled } from '../style';
import ChevronRightIcon from '../icon/components/chevron-right';
import React from 'react';

export const StyledStartEnhancer = styled('div', 'inline-flex items-center mr-1');
export const StyledEndEnhancer = styled('div', 'inline-flex items-center ml-1');

export const StyledWrapper = styled('ul', 'm-0 p-0 inline-flex items-center flex-wrap');
export const StyledSeparator = styled('span', 'inline-flex items-center', (_, { $gap }) => {
  return {
    marginLeft: `${$gap * 4}px`,
    marginRight: `${$gap * 4}px`,
  };
});

export const StyledListItem = styled('li', 'm-0 inline-flex items-center');

export const DEFAULT_SEPARATOR = <ChevronRightIcon size={10} />;
