import { ROLE } from 'baseui/modal';
import { StyleUtils } from '../types';
import { Role, Size } from './types';
import { ValueOf } from '../utility-types';

export const getWidthFromSize = ({ px2rem }: StyleUtils, size: Size): string => {
  switch (size) {
    case 'sm':
      return px2rem(520);
    case 'md':
      return px2rem(720);
    case 'lg':
      return px2rem(1220);
    default:
      return 'auto';
  }
};

export const roleMap: Record<Role, ValueOf<typeof ROLE>> = {
  dialog: ROLE.dialog,
  alertdialog: ROLE.alertdialog,
};
