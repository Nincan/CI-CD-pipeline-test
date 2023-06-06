import { useState, ReactElement, useCallback } from 'react';
import { Button } from 'spaceweb/button';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';
import { Typography } from 'spaceweb/typography';
import { StatefulInput } from 'spaceweb/input';
import { FormControl } from 'spaceweb/form-control';
import { StatefulSelect } from 'spaceweb/select';

const Form = (props: { formId: string }): ReactElement => (
  <>
    <FormControl label="Name">
      <StatefulInput id={`input-id-${props.formId}`} placeholder="Enter the name of the user" />
    </FormControl>
    <FormControl label="Assign to">
      <StatefulSelect id={`assign-id-${props.formId}`} options={[]} />
    </FormControl>
  </>
);

export default (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);

  return (
    <>
      <Button onClick={(): void => setIsOpen(true)}>Open Small Modal</Button>
      <Modal onClose={onClose} isOpen={isOpen} size="sm">
        <ModalHeader>Small Form with scroll</ModalHeader>
        <ModalBody className="py-6">
          <Typography $as="div" className="mb-4 spr-support-success-text">
            Small Modal body scrolls after Dialog reaches the max height of 560px
          </Typography>
          <Form formId="1" />
          <Form formId="2" />
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
