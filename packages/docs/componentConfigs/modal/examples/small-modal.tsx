import { useCallback } from 'react';
import * as React from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';

export default (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Small Modal</Button>
      <Modal onClose={onClose} isOpen={isOpen} size="sm">
        <ModalHeader noBorder>Delete Entity</ModalHeader>
        <ModalBody>Are you sure you want to delete this entity?</ModalBody>
        <ModalFooter noBorder>
          <Button className="mr-4" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button intent="error" onClick={onClose}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
