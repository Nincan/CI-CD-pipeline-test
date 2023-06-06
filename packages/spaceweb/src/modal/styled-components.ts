import { Modal as BaseModal, ModalProps as BaseModalProps } from 'baseui/modal';
import * as React from 'react';
import withThemeOverride from '../helpers/baseui/withThemeOverride';
import { styled } from '../style';

export { StyledRoot, StyledClose, StyledDialog, StyledDialogContainer } from 'baseui/modal';

// @ts-ignore
BaseModal.displayName = 'BaseUIModal';
export const StyledModal: React.ComponentType<BaseModalProps> = withThemeOverride(BaseModal, theme => ({
  colors: {
    backgroundPrimary: theme.spr.popup,
    modalCloseColor: theme.spr.icon02,
    modalCloseColorHover: theme.spr.icon01,
    contentPrimary: theme.spr.text01,
    contentSecondary: theme.spr.text02,
  },
}));

export const StyledModalHeader = styled(
  'div',
  'typography-h4 spr-text-01 font-bold border-t-0 border-r-0 border-l-0 pt-4 px-6',
  ({ px2rem }, { $noBorder }) => ({ lineHeight: $noBorder ? px2rem(28) : px2rem(24) }),
  (utils, { $noBorder }) => ($noBorder ? 'pb-0' : 'border-b-1 border-solid spr-border-02 pb-4')
);

export const ModalBody = styled('div', 'typography-bl1 spr-text-01 overflow-auto flex-grow px-6 py-4');

export const StyledModalFooter = styled(
  'div',
  'border-b-0 border-l-0 border-r-0 pb-4 px-6',
  ({ px2rem }) => ({ lineHeight: px2rem(28), textAlign: 'right' }),
  (utils, { $noBorder }) => ($noBorder ? 'pt-0' : 'border-t-1 border-solid spr-border-02 pt-4')
);
