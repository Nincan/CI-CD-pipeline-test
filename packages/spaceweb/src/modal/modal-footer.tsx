import { ReactElement } from 'react';
import { StyledModalFooter } from './styled-components';
import { add$props } from '../helpers';
import { ModalFooterProps } from './types';

const ModalFooter = (props: ModalFooterProps): ReactElement => {
  const sharedProps = add$props({ noBorder: props.noBorder });
  return <StyledModalFooter {...props} {...sharedProps} />;
};
ModalFooter.displayName = 'ModalFooter';

export default ModalFooter;
