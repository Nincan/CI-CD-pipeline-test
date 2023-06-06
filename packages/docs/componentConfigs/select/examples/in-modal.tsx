import { useState } from 'react';
import * as React from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';
import { StatefulSelect } from 'spaceweb/select';

export default (): React.ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={(): void => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        onClose={(): void => {
          setIsOpen(false);
        }}
        isOpen={isOpen}
      >
        <ModalHeader>Hello world</ModalHeader>
        <ModalBody className="px-7 py-6">
          <StatefulSelect
            options={[
              { id: 'AliceBlue', color: '#F0F8FF' },
              { id: 'AntiqueWhite', color: '#FAEBD7' },
              { id: 'Aqua', color: '#00FFFF' },
              { id: 'Aquamarine', color: '#7FFFD4' },
              { id: 'Azure', color: '#F0FFFF' },
              { id: 'Beige', color: '#F5F5DC' },
            ]}
            labelKey="id"
            valueKey="color"
            onChange={(event): void => console.log(event)}
          />
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
    </>
  );
};
