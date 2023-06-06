import * as React from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';

export default (): React.ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Custom Modal</Button>
      <Modal
        onClose={onClose}
        isOpen={isOpen}
        overrides={{
          Dialog: {
            style: {
              width: '80vw',
              height: '80vh',
            },
          },
        }}
      >
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody className="py-6">
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl. Maecenas
          aliquet mauris ut tempus.
        </ModalBody>
        <ModalFooter>
          <Button className="mr-4" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Okay</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
