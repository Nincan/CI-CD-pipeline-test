import { borderColor, borderWidth } from '../helpers/longHandHelpers';
import { styled } from '../style';
import { StyleFn } from '../types';

const clipAnimationStyles: StyleFn<unknown> = () => ({
  animationDuration: '0.75s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  // @ts-ignore animationName can be an object https://www.styletron.org/concepts/#keyframes
  animationName: {
    '0%': {
      transform: 'rotate(0deg) scale(1)',
    },
    '50%': {
      transform: 'rotate(180deg) scale(0.8)',
    },
    '100%': {
      transform: 'rotate(360deg) scale(1)',
    },
  },
});

export const StyledRoot = styled('div', 'inline-flex flex-col items-center spr-text-02');
export const StyledClipLoader = styled(
  'div',
  'border-solid rounded-full box-border',
  borderWidth('3px'),
  clipAnimationStyles,
  (utils, props) => {
    const { px2rem, theme } = utils;
    const { $size } = props;
    return {
      height: px2rem($size),
      width: px2rem($size),
      ...borderColor(theme.spr.focus01),
      borderBottomColor: 'transparent',
    };
  }
);

const ballAnimationStyles: StyleFn<{ $index: number }> = (_, { $index }) => ({
  animationDuration: '0.7s',
  animationDelay: $index % 2 ? '0s' : '0.35s',
  animationIterationCount: 'infinite',
  animationTimingFunction: 'linear',
  animationFillMode: 'both',
  // @ts-ignore animationName can be an object https://www.styletron.org/concepts/#keyframes
  animationName: {
    '50%': {
      transform: 'scale(0.75)',
      opacity: 0.2,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
});

export const StyledBeatLoader = styled('div');
export const StyledBeatLoaderBall = styled(
  'div',
  'spr-tooltip-01 rounded-full inline-block',
  ballAnimationStyles,
  (utils, props) => {
    const { px2rem } = utils;
    const { $size } = props;
    return {
      height: px2rem($size),
      width: px2rem($size),
      marginLeft: px2rem(2),
      marginRight: px2rem(2),
    };
  }
);
