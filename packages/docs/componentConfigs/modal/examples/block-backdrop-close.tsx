import { useState } from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalHeader } from 'spaceweb/modal';

const BlockBackdropClose = (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Modal</Button>
      <Modal
        onClose={({ closeSource }) => {
          console.log('closeSource', closeSource);
          if (closeSource !== 'backdrop') {
            setIsOpen(false);
          }
        }}
        isOpen={isOpen}
      >
        <ModalHeader noBorder>Hello world</ModalHeader>
        <ModalBody className="pb-7">
          This modal will not close on clicking backdrop. Press escape or click on close button to close it.
        </ModalBody>
      </Modal>
    </>
  );
};

export default BlockBackdropClose;
