import { ModalOverrides, ModalProps as BaseModalProps, SharedStylePropsArg } from 'baseui/modal';
import { Override } from '../overrides';
import { SpacewebComponentProps } from '../types';

export type Size = 'sm' | 'md' | 'lg' | 'fullPage';
export type Role = 'dialog' | 'alertdialog';
export type SharedProps = Omit<SharedStylePropsArg, '$size'> & { $size?: Size };

export type ModalProps = Omit<BaseModalProps, 'overrides' | 'size' | 'role'> & {
  overrides?: {
    [key in keyof ModalOverrides]?: Override<SharedProps & Record<string, any>>;
  };
  size?: Size;
  role?: Role;
  ariaLabel?: string;
};

export type ModalHeaderProps = SpacewebComponentProps & {
  noBorder?: boolean;
};

export type ModalFooterProps = SpacewebComponentProps & {
  noBorder?: boolean;
};

export type { ModalState } from 'baseui/modal';
export { CLOSE_SOURCE } from 'baseui/modal';
