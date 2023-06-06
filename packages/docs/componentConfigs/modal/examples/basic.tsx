import * as React from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';

export default (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  function close(): void {
    setIsOpen(false);
  }

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Modal</Button>
      <Modal onClose={close} isOpen={isOpen}>
        <ModalHeader noBorder>Hello world</ModalHeader>
        <ModalBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl. Maecenas
          aliquet mauris ut tempus.
        </ModalBody>
        <ModalFooter noBorder>
          <Button className="mr-4" variant="secondary" onClick={close}>
            Cancel
          </Button>
          <Button onClick={close}>Okay</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
