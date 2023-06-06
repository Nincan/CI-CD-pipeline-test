import { useCallback } from 'react';
import * as React from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';

export default (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Modal</Button>
      <Modal onClose={onClose} isOpen={isOpen} size="md">
        <ModalHeader noBorder>Hello world</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam nisl, tempor ut varius sit amet,
          sodales sit amet mauris. Aliquam vitae sapien quis eros finibus aliquet.
        </ModalBody>
        <ModalFooter noBorder>
          <Button className="mr-4" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Okay</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
