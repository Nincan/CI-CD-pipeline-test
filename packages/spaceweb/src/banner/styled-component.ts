import cx from '../classNames';
import { styled } from '../style';
import { StyleFn } from '../types';
import { BannerProps } from './types';

const getBannerIntentStyles: StyleFn<BannerProps> = ({ theme }, { intent }) => {
  switch (intent) {
    case 'error':
    default:
      return {
        borderColor: theme.spr.supportError,
      };
    case 'warning':
      return {
        borderColor: theme.spr.supportWarning,
      };
    case 'success':
      return {
        borderColor: theme.spr.supportSuccess,
      };
  }
};

export const StyledBanner = styled(
  'div',
  'box-border w-full rounded-8 border-solid border-1 font-medium overflow-auto pb-2',
  getBannerIntentStyles
);

export const StyledBannerItemContainer = styled(
  'div',
  'box-border list-inside list-none typography-bl1 px-2 mt-0.5',
  ({ theme, getStyle }, { $as, $maxHeight }) =>
    getStyle(cx({ 'list-decimal': $as === 'ol', 'list-disc': $as === 'ul' }), { maxHeight: $maxHeight })
);

export const StyledTitleContainer = styled('div', 'flex flex-row justify-center items-center');

export const StyledHeaderContainer = styled(
  'div',
  'flex flex-row justify-between sticky top-0 spr-ui-01 px-2 pt-2',
  ({ theme }, { $sticky }) => ({ boxShadow: $sticky ? theme.spr.shadow01 : 'none' })
);

export const StyledTitle = styled('div', 'typography-bl1 font-600');

export const StyledBannerItem = styled('li', 'typography-bl1');
