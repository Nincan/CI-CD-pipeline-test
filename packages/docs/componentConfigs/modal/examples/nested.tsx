import * as React from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';

export default (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isConfirmationOpen, toggleConfirm] = React.useState(false);
  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Modal</Button>
      <Modal onClose={(): void => setIsOpen(false)} isOpen={isOpen}>
        <ModalHeader noBorder>Hello world</ModalHeader>
        <ModalBody>Do you want to open the nested Modal?</ModalBody>
        <ModalFooter noBorder>
          <Button className="mr-4" variant="secondary" onClick={(): void => setIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={(): void => toggleConfirm(true)}>Confirm</Button>
        </ModalFooter>
      </Modal>
      <Modal onClose={(): void => toggleConfirm(false)} isOpen={isConfirmationOpen}>
        <ModalHeader noBorder>Confirm</ModalHeader>
        <ModalBody>Do you want to close all Modals?</ModalBody>
        <ModalFooter noBorder>
          <Button className="mr-4" variant="secondary" onClick={(): void => toggleConfirm(false)}>
            No
          </Button>
          <Button
            onClick={(): void => {
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
