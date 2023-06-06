import React from 'react';
import { styled } from '../../style';
import { StyleObject } from '../../types';
import { getIntentColor } from '../helper';
import { CircularSharedProps } from './types';

/**
 * CircularProgress styles are inspired from material-ui
 * https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/CircularProgress/CircularProgress.js
 */

//Setting styles inline, in order prevent multiple styletron classes creation
const BaseProgress = ({ inlineStyles, ...props }: { inlineStyles: React.CSSProperties }) => (
  <circle style={inlineStyles} {...props} />
);

export const VIEWBOX_SIZE = 44;

export const getProgressInlineStyles = ({
  strokeWidth,
  value,
  infinite,
}: {
  strokeWidth: number;
  value: number;
  infinite?: boolean;
}) => {
  const circumference = 2 * Math.PI * ((VIEWBOX_SIZE - strokeWidth) / 2);
  return {
    strokeDashoffset: `${(((100 - value) / 100) * circumference).toFixed(3)}px`,
  };
};

export const StyledRoot = styled('span', 'relative inline-flex', ({ px2rem }, { $size }: CircularSharedProps) => ({
  height: px2rem($size),
  width: px2rem($size),
}));
export const StyledBarContainer = styled(
  'span',
  'inline-block h-full w-full',
  ({ theme }, { $color, $intent, $infinite }: CircularSharedProps): StyleObject => ({
    color: $color || getIntentColor($intent, theme),
    ...(!$infinite
      ? {
          transform: 'rotate(-90deg)',
        }
      : ({
          animationDuration: '1.4s',
          animationIterationCount: 'infinite',
          animationTimingFunction: 'linear',
          animationName: {
            '0%': {
              transform: 'rotate(0deg)',
            },
            '100%': {
              transform: 'rotate(360deg)',
            },
          },
        } as unknown as StyleObject)),
  })
);
export const StyledSvg = styled('svg');
export const StyledBar = styled(
  'circle',
  ({ theme, px2rem }, { $backgroundColor, $strokeWidth }: CircularSharedProps) => ({
    stroke: $backgroundColor || theme.spr.tag02,
    fill: 'none',
    cx: px2rem(VIEWBOX_SIZE),
    cy: px2rem(VIEWBOX_SIZE),
    r: px2rem((VIEWBOX_SIZE - $strokeWidth) / 2),
    strokeWidth: $strokeWidth.toString(),
  })
);
export const StyledProgress = styled(
  BaseProgress,
  'stroke-current',
  { fill: 'none' },
  ({ px2rem }, { $infinite, $value, $strokeWidth }: CircularSharedProps) => {
    const circumference = 2 * Math.PI * ((VIEWBOX_SIZE - $strokeWidth) / 2);
    return {
      cx: px2rem(VIEWBOX_SIZE),
      cy: px2rem(VIEWBOX_SIZE),
      r: px2rem((VIEWBOX_SIZE - $strokeWidth) / 2),
      strokeWidth: $strokeWidth.toString(),
      ...(!$infinite
        ? {
            willChange: 'strokeDashoffset',
            transitionTimingFunction: 'ease',
            transitionDuration: '400ms',
            strokeDasharray: circumference.toFixed(3),
          }
        : ({
            animationDuration: '1.4s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'ease-in-out',
            strokeDasharray: '80px, 200px',
            strokeDashoffset: '0px',
            animationName: {
              '0%': {
                strokeDasharray: '1px, 200px',
                strokeDashoffset: '0px',
              },
              '50%': {
                strokeDasharray: '100px, 200px',
                strokeDashoffset: '-15px',
              },
              '100%': {
                strokeDasharray: '100px, 200px',
                strokeDashoffset: '-125px',
              },
            },
          } as unknown as StyleObject)),
    };
  }
);
export const StyledLabelContainer = styled('div', 'absolute flex items-center justify-center inset-0');
export const StyledLabel = styled('div', 'typography-h6', { fontVariantNumeric: 'tabular-nums' });
