import { useState } from 'react';
import * as React from 'react';
import { Box } from 'spaceweb/box';
import { Button } from 'spaceweb/button';
import { LayersManager } from 'spaceweb/layer';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';

export default (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const [host, setHost] = useState<HTMLElement | null>(null);
  return (
    <Box ref={setHost}>
      <Button
        onClick={(): void => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </Button>
      <LayersManager host={host}>
        <Modal
          onClose={(): void => {
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
              onClick={(): void => {
                setIsOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={(): void => {
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
