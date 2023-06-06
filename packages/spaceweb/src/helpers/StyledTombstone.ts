import styled from '../style/styled';
import { StyleObject } from '../types';

export const StyledTombstone = styled('div', 'spr-ui-03 h-full w-full', {
  animationDuration: '1s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'ease-in-out',
  animationName: {
    '0%': {
      opacity: '1',
    },
    '50%': {
      opacity: '0.4',
    },
    '100%': {
      opacity: '1',
    },
  },
} as unknown as StyleObject);
