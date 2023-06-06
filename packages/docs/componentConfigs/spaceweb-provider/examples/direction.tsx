import { useState } from 'react';
import SpacewebProvider from 'spaceweb/spacewebProvider';
import { Box } from 'spaceweb/box';
import { Button } from 'spaceweb/button';
import { Modal, ModalFooter, ModalBody, ModalHeader } from 'spaceweb/modal';
import sprLight from '@sprinklr/spaceweb-themes/space/light';

const SWDirection = () => {
  const [isRtlOpen, setRtl] = useState(false);
  return (
    <SpacewebProvider theme={sprLight} direction="rtl">
      <Box className="mb-2">This Modal has its direction from Right to Left.</Box>
      <Modal isOpen={isRtlOpen} size="sm" onClose={() => setRtl(false)}>
        <ModalHeader noBorder className="text-right">
          Modal Header
        </ModalHeader>
        <ModalBody className="px-7 text-right">This is modal body content.</ModalBody>
        <ModalFooter noBorder>
          <Button>Cancel</Button>
          <Button className="ml-2">Submit</Button>
        </ModalFooter>
      </Modal>
      <Button onClick={() => setRtl(true)}>RTL Modal</Button>
    </SpacewebProvider>
  );
};

export default SWDirection;
