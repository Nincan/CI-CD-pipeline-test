import React from 'react';
import { borderRadius } from '../../helpers/longHandHelpers';
import { styled } from '../../style';
import { StyleObject, StyleUtils } from '../../types';
import { getIntentColor } from '../helper';
import { LinearSharedProps } from './types';

//Setting styles inline, in order prevent multiple styletron classes creation
const BaseProgress = ({ inlineStyles, ...props }: { inlineStyles: React.CSSProperties }) => (
  <div style={inlineStyles} {...props} />
);

export const getProgressInlineStyles = ({
  value,
  infinite,
}: {
  value?: number;
  infinite?: boolean;
}): React.CSSProperties => (infinite ? {} : { width: `${value}%` });

export const StyledRoot = styled('div', 'w-full');
export const StyledBar = styled(
  'div',
  'w-full relative overflow-hidden flex',
  ({ theme, px2rem }, { $backgroundColor }: LinearSharedProps) => ({
    height: px2rem(6),
    backgroundColor: $backgroundColor || theme.spr.tag02,
    ...borderRadius(px2rem(3)),
  })
);
export const StyledProgress = styled(
  BaseProgress,
  'h-full',
  ({ theme, isRTL }, { $color, $intent, $value, $infinite }: LinearSharedProps) => {
    const progressStart = isRTL ? 'right' : 'left';
    const progressEnd = isRTL ? 'left' : 'right';
    return {
      backgroundColor: $color || getIntentColor($intent, theme),
      willChange: 'width',
      ...borderRadius('3px'),
      transitionProperty: 'width',
      transitionTimingFunction: 'ease',
      transitionDuration: '400ms',
      ...($infinite && {
        width: '100%',
        position: 'absolute',
        animationDuration: '2.1s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(0.65, 0.815, 0.735, 0.395)',
        animationName: {
          '0%': {
            [progressStart]: '-200%',
            [progressEnd]: '100%',
          },
          '60%': {
            [progressStart]: '107%',
            [progressEnd]: '-8%',
          },
          '100%': {
            [progressStart]: '107%',
            [progressEnd]: '-8%',
          },
        },
      }),
    } as unknown as StyleObject;
  }
);
export const StyledLabel = styled('div', 'spr-text-02 mt-3 typography-l2', { fontVariantNumeric: 'tabular-nums' });

export const progressSegmentStyles = ({ isRTL }: StyleUtils, { $first, $last }): string[] => {
  let style: string[] = [];
  if (isRTL) {
    if (!$first) style.push('rounded-r-0');
    if (!$last) style.push('rounded-l-0');
  } else {
    if (!$first) style.push('rounded-l-0');
    if (!$last) style.push('rounded-r-0');
  }
  return style;
};
