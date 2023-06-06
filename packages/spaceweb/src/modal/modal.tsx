import { ModalProps as BaseModalProps } from 'baseui/modal';
import * as React from 'react';
import { ReactElement } from 'react';
import { IconButton } from '../button';

import { useConvertOverrides } from '../helpers/baseui/useConvertOverrides';
import Close from '../icon/components/close';
import { useStyle } from '../style';
import { getWidthFromSize, roleMap } from './adapter';
import { getCloseButtonProps, getDialogContainerStyles, getDialogStyles } from './overrides';
import { StyledModal } from './styled-components';
import { ModalProps, SharedProps } from './types';
import { add$props } from '../helpers';
import { useLocale } from '../locale';

const CloseButton = (closeProps): React.ReactElement => (
  <IconButton {...closeProps}>
    <Close />
  </IconButton>
);

const Modal = ({ size = 'md', role = 'dialog', ariaLabel, overrides, ...props }: ModalProps): ReactElement => {
  const utils = useStyle();
  const { theme } = utils;
  const sharedProps = add$props({ dialogSize: size });
  const locale = useLocale();

  const _overrides = useConvertOverrides(
    {
      DialogContainer: { style: getDialogContainerStyles, props: sharedProps },
      Dialog: {
        style: getDialogStyles,
        props: {
          ...(ariaLabel ? { 'aria-label': ariaLabel } : undefined),
          ...sharedProps,
        },
      },
      Close: {
        component: CloseButton,
        props: getCloseButtonProps(
          utils,
          sharedProps as { $dialogSize: SharedProps['$size'] },
          locale.modal.closeAriaLabel
        ),
      },
    },
    overrides,
    [overrides, theme]
  );

  return (
    <StyledModal
      {...props}
      size={getWidthFromSize(utils, size) as BaseModalProps['size']}
      role={roleMap[role]}
      overrides={_overrides}
    />
  );
};
Modal.displayName = 'Modal';

export default React.memo(Modal);
