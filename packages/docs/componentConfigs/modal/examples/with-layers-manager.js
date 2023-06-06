import { useState } from 'react';
import { Box } from 'spaceweb/box';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';
import { LayersManager } from 'spaceweb/layer';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [host, setHost] = useState(null);
  return (
    <Box ref={setHost}>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </Button>
      <LayersManager host={host}>
        <Modal
          onClose={() => {
            setIsOpen(false);
          }}
          isOpen={isOpen}
        >
          <ModalHeader>Hello world</ModalHeader>
          <ModalBody className="py-6">
            This modal&apos;s host element is overriden. Modal will not be direct child of document.body.
          </ModalBody>
          <ModalFooter>
            <Button
              className="mr-4"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Okay
            </Button>
          </ModalFooter>
        </Modal>
      </LayersManager>
    </Box>
  );
};
