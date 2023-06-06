import { styled } from '../style';
import cx from '../classNames';

const getIntentColor = ({ theme }, { $intent }) => {
  switch ($intent) {
    case 'success':
      return { color: theme.spr.supportSuccess };
    case 'warning':
      return { color: theme.spr.supportWarning };
    case 'error':
      return { color: theme.spr.text01 };
    case 'default':
    default:
      return { color: theme.spr.text02 };
  }
};

export const StyledSubText = styled('div', 'spr-text-02 mb-1', {
  fontSize: '13px',
  lineHeight: '16px',
  fontWeight: 400,
});
export const StyledInfoIconContainer = styled(
  'div',
  'spr-ui-03 rounded-full flex items-center justify-center ml-2 flex-shrink-0',
  ({ px2rem }) => ({ height: px2rem(14), width: px2rem(14) })
);
export const StyledRequiredDot = styled('span', 'spr-support-error rounded-full h-1 w-1 flex-shrink-0 ml-1');

export const StyledRoot = styled('div', 'flex', (utils, { $layout }) =>
  $layout === 'horizontal' ? 'flex-row items-baseline' : 'flex-col'
);

export const StyledCaption = styled('div', 'typography-l2 mt-1', getIntentColor);

export const StyledLabelContainer = styled(
  'div',
  'flex items-center w-full',
  (utils, { $layout }) => ($layout === 'horizontal' ? 'w-4/24 mr-2' : ''),
  (utils, { $hasSubText, $subTextAsIcon }) => (!$hasSubText || $subTextAsIcon ? 'mb-1' : '')
);
export const StyledLabel = styled('label', 'spr-text-02', {
  fontSize: '14px',
  lineHeight: '18px',
  fontWeight: 400,
});

export const StyledControlContainer = styled('div', 'w-full');
