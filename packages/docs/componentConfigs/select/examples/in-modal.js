import { useState } from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';
import { StatefulSelect } from 'spaceweb/select';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </Button>
      <Modal
        onClose={() => {
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
            onChange={event => console.log(event)}
          />
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
    </>
  );
};
