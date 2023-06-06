import * as React from 'react';
import { Modal, ModalBody } from '../../modal';
import Select from '../base-select';
import { BaseSelectProps } from '../types';
import { TestProvider } from '../../test-utils/test-provider';

export const SelectWithModal = (props: BaseSelectProps): React.ReactElement => {
  const [mountNode, setMountNode] = React.useState<HTMLElement>();
  return (
    <TestProvider>
      <Modal isOpen>
        <ModalBody ref={setMountNode as (el: HTMLElement) => void}>
          <Select mountNode={mountNode} {...props} />
        </ModalBody>
      </Modal>
    </TestProvider>
  );
};
