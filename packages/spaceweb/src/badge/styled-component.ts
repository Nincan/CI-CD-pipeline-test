import { styled } from '../style';
import { StyleFn } from '../types';
import { SharedProps, Size } from './types';
import { borderRadius } from '../helpers/longHandHelpers';

export const StyledRoot = styled('div', {
  position: 'relative',
  display: 'inline-flex',
});

const sizeMap: Record<Size, string> = {
  sm: '35%',
  lg: '50%',
};

const isCustomContent = (content: SharedProps['$content']): boolean => typeof content === 'function';

const anchorOffset: StyleFn<SharedProps> = ({ isRTL }, { $horizontalPosition, $verticalPosition, $overlap }) => {
  const offset = $overlap === 'rectangle' ? (0 as const) : '14%';

  const horizontalOffset = $horizontalPosition === 'left' ? { left: offset } : { right: offset };
  const verticalOffset = $verticalPosition === 'top' ? { top: offset } : { bottom: offset };

  const rtlHorizontalPosition = isRTL ? ($horizontalPosition === 'right' ? 'left' : 'right') : $horizontalPosition;

  const transform =
    $verticalPosition === 'top'
      ? {
          transform:
            rtlHorizontalPosition === 'left'
              ? 'translate(calc(-100% + min(1rem, 50%)), -50%) /* @noflip */' // min of 1rem( for large elements ) and 50%( for small elements )
              : 'translate(calc(100% - min(1rem, 50%)), -50%) /* @noflip */',
        }
      : {
          transform:
            rtlHorizontalPosition === 'left'
              ? 'translate(calc(-100% + min(1rem, 50%)), 50%) /* @noflip */'
              : 'translate(calc(100% - min(1rem, 50%)), 50%) /* @noflip */',
        };

  return { ...horizontalOffset, ...verticalOffset, ...transform };
};

const backgroundColor: StyleFn<SharedProps> = ({ theme }, { $intent, $content }) => {
  let bgColor: string;

  // when custom content provided, colorVariant should not have any effect.
  if (isCustomContent($content)) bgColor = 'transparent';
  else if ($intent === 'success') bgColor = theme.spr.supportSuccess;
  else if ($intent === 'error') bgColor = theme.spr.supportError;
  else bgColor = theme.spr.supportWarning;

  return { backgroundColor: bgColor };
};

const padding: StyleFn<SharedProps> = (_, { $size, $content }) => {
  if (isCustomContent($content)) return {}; // no padding for customContent
  const p = $size === 'sm' ? '2px' : '6px';
  return { paddingLeft: p, paddingRight: p };
};

export const StyledAnchor = styled(
  'span',
  'absolute flex items-center justify-center spr-text-05 text-xs border border-solid spr-border-05 box-border typography-l2',
  anchorOffset,
  backgroundColor,
  (utils, props) => {
    const { $size } = props;
    return {
      minWidth: sizeMap[$size],
      height: sizeMap[$size],
      // giving border-radius maximum pixel value creates perfect pill shape for any size of element, https://stackoverflow.com/a/32400620
      ...borderRadius('50rem'),
    };
  },
  padding
);
