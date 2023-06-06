import { IconButtonProps } from '../button/IconButton';
import { StyleObject, Styles, StyleUtils } from '../types';
import { SharedProps } from './types';

const getDialogHeightControl = ({ px2rem }, { $dialogSize }): StyleObject | undefined => {
  switch ($dialogSize) {
    case 'sm':
      return { maxHeight: px2rem(560) };
    case 'md':
      return { maxHeight: px2rem(660) };
    case 'lg':
      return { height: '90%' };
    case 'fullPage':
      return {
        width: '94vw',
        height: '88vh',
        marginTop: px2rem(44),
      };
    default:
      return undefined;
  }
};

const getDialogContainerHeightControl = (utils, { $dialogSize }) => ($dialogSize === 'lg' ? 'h-full' : '');
const transitionDuration = ({ theme }, { $animate }) => ($animate ? { transitionDuration: '200ms' } : {});

export const getDialogContainerStyles: Styles = [
  'border-box spr-overlay',
  getDialogContainerHeightControl,
  transitionDuration,
];

export const getDialogStyles: Styles = [
  'transform-none flex flex-col spr-shadow-02 rounded-8',
  getDialogHeightControl,
  transitionDuration,
];

export const getCloseButtonProps = (
  { px2rem, theme }: StyleUtils,
  { $dialogSize }: { $dialogSize: SharedProps['$size'] },
  ariaLabel: string
): IconButtonProps => ({
  size: 'sm',
  'aria-label': ariaLabel,
  overrides: {
    BaseButton: {
      style: {
        position: 'absolute',
        top: px2rem(12),
        right: px2rem(16),
        ...($dialogSize === 'fullPage'
          ? {
              top: px2rem(-44),
              right: px2rem(0),
              backgroundColor: theme.spr.ui01,
              color: theme.spr.icon02,
              borderColor: theme.borderColor.transparent,
              ':hover': {
                color: theme.spr.ui04,
                backgroundColor: theme.spr.ui06,
              },
            }
          : {}),
      },
    },
  },
});
