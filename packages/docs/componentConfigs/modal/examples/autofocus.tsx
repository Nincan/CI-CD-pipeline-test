import * as React from 'react';
import { Button } from 'spaceweb/button';
import { FocusOnce, Modal, ModalBody, ModalFooter, ModalHeader } from 'spaceweb/modal';

export default (): React.ReactElement => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <Button onClick={(): void => setOpen(s => !s)}>Open Modal</Button>
      <Modal onClose={(): void => setOpen(false)} isOpen={isOpen}>
        <FocusOnce>
          <ModalHeader noBorder>Some Header</ModalHeader>
        </FocusOnce>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam nisl, tempor ut varius sit amet,
          sodales sit amet mauris. Aliquam vitae sapien quis eros finibus aliquet.
        </ModalBody>
        <ModalFooter noBorder>
          <Button className="mr-4" variant="secondary" onClick={(): void => setOpen(false)}>
            Close
          </Button>
          <Button autoFocus onClick={(): void => setOpen(false)}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
