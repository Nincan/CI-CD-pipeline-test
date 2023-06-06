import { StyleFn, Styles } from '../../types';
import { SharedProps } from './types';
import { borderColor } from '../../helpers/longHandHelpers';

const getVariantStyles: StyleFn<SharedProps> = ({ theme }, { $iconTextVariant, $isSelected }) => {
  if ($iconTextVariant === 'default') {
    return {
      color: $isSelected ? theme.spr.text04 : theme.spr.text01,
      ':active': {
        color: theme.spr.text04,
      },
      ':active svg': {
        color: theme.spr.focus01,
      },
      backgroundColor: 'transparent',
    };
  }
  return { backgroundColor: 'transparent' };
};

const getIconVariantStyles: StyleFn<SharedProps> = ({ theme }, { $iconTextVariant, $isSelected }) => {
  switch ($iconTextVariant) {
    case 'default':
    default:
      return {
        color: $isSelected ? theme.spr.focus01 : theme.spr.icon02,
      };
    case 'bulk':
      return { color: theme.spr.icon04 };
  }
};

export const iconTextButtonStyle: Styles = [
  (utils, props) => ({
    ...(props.$bordered
      ? {
          ...borderColor(utils.theme.spr.border03),
          ':hover': {
            ...borderColor(utils.theme.spr.border06),
            backgroundColor: utils.theme.spr.ui02,
          },
          ':active': {
            ...borderColor(utils.theme.spr.interactive01),
            backgroundColor: utils.theme.spr.ui05,
          },
        }
      : borderColor('transparent')),
  }),
  getVariantStyles,
];

export const startEnhancerStyle: Styles = [
  ({ px2rem }) => ({
    marginRight: px2rem(8),
  }),
  getIconVariantStyles,
];
