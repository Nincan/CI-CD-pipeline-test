import { useState, useCallback } from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';
import { StatefulInput } from 'spaceweb/input';
import { StatefulSelect } from 'spaceweb/select';
import { FormControl } from 'spaceweb/form-control';
import { Typography } from 'spaceweb/typography';

const Form = props => (
  <>
    <FormControl label="Name">
      <StatefulInput id={`input-id-${props.formId}`} placeholder="Enter the name of the user" />
    </FormControl>
    <FormControl label="Assign to">
      <StatefulSelect id={`assign-id-${props.formId}`} options={[]} />
    </FormControl>
  </>
);

export default () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Medium Modal</Button>
      <Modal onClose={onClose} isOpen={isOpen} size="md">
        <ModalHeader>Assign, Status, Queue</ModalHeader>
        <ModalBody className="flex flex-col px-7 py-6">
          <Typography $as="div" className="mb-4 spr-support-success-text">
            Medium Modal body scroll after Dialog reaches the max height of 660px
          </Typography>
          <Typography variant="h6" className="mb-2">
            Section Header
          </Typography>
          <Form formId="1" />
          <Typography variant="h6" className="mb-2 mt-3">
            Section Header
          </Typography>
          <Form formId="2" />
          <Typography variant="h6" className="mb-2 mt-3">
            Section Header
          </Typography>
          <Form formId="3" />
        </ModalBody>
        <ModalFooter>
          <Button className="mr-4" variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={onClose}>Submit</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
