import { ReactElement } from 'react';
import { StyledModalHeader } from './styled-components';
import { add$props } from '../helpers';
import { ModalHeaderProps } from './types';

const ModalHeader = ({ noBorder, ...restProps }: ModalHeaderProps): ReactElement => {
  const sharedProps = add$props({ noBorder });
  return <StyledModalHeader {...restProps} {...sharedProps} />;
};
ModalHeader.displayName = 'ModalHeader';

export default ModalHeader;
