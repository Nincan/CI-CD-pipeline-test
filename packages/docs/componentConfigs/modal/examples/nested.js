import { useState } from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isConfirmationOpen, toggleConfirm] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <ModalHeader noBorder>Hello world</ModalHeader>
        <ModalBody className="px-7">Do you want to open the nested Modal?</ModalBody>
        <ModalFooter noBorder>
          <Button className="mr-4" variant="secondary" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => toggleConfirm(true)}>Confirm</Button>
        </ModalFooter>
      </Modal>
      <Modal onClose={() => toggleConfirm(false)} isOpen={isConfirmationOpen}>
        <ModalHeader noBorder>Confirm</ModalHeader>
        <ModalBody className="px-7">Do you want to close all Modals?</ModalBody>
        <ModalFooter noBorder>
          <Button className="mr-4" variant="secondary" onClick={() => toggleConfirm(false)}>
            No
          </Button>
          <Button
            onClick={() => {
              toggleConfirm(false);
              setIsOpen(false);
            }}
          >
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
