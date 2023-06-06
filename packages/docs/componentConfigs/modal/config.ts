import { Modal, ModalHeader, ModalBody, ModalFooter } from 'spaceweb/modal';
import { Button } from 'spaceweb/button';
import { FormControl } from 'spaceweb/form-control';
import { StatefulInput } from 'spaceweb/input';

import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const ModalConfig: YardConfig = {
  componentName: 'Modal',
  imports: {
    'spaceweb/modal': {
      named: ['Modal', 'ModalHeader', 'ModalBody', 'ModalFooter', 'FormControl', 'StatefulInput'],
    },
  },
  scope: { Modal, ModalHeader, ModalBody, ModalFooter, Button, FormControl, StatefulInput },
  theme: [],
  props: {
    children: {
      value: `<ModalHeader>Hello world</ModalHeader>
<ModalBody>
  <FormControl label="Name">
    <StatefulInput className="mb-3" placeholder="Enter Name"/>
  </FormControl>
  <FormControl label="Description">
      <StatefulInput placeholder="Enter Description"/>
  </FormControl>
</ModalBody>
<ModalFooter>
  <Button className="mr-3" variant="secondary">Cancel</Button>
  <Button>Submit</Button>
</ModalFooter>
`,
      type: PropTypes.ReactNode,
      description: 'Modal content.',
    },
    onClose: {
      value: '() => setIsOpen(false);',
      type: PropTypes.Function,
      description: 'A callback that is invoked when the modal will close.',
      propHook: {
        what: 'false',
        into: 'isOpen',
      },
    },
    closeable: {
      value: true,
      defaultValue: true,
      type: PropTypes.Boolean,
      description: 'Whether the modal should be closeable by the user.',
    },
    isOpen: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Toggles the modal visibility.',
      stateful: true,
    },
    animate: {
      value: true,
      type: PropTypes.Boolean,
      description: 'Sets whether the Modal should be displayed by easing in and out.',
      hidden: true,
    },
    autoFocus: {
      value: true,
      type: PropTypes.Boolean,
      description: 'If true, focus will shift to the first interactive element within the modal.',
      hidden: true,
    },
    focusLock: {
      defaultValue: true,
      value: true,
      type: PropTypes.Boolean,
      description: 'If true, focus will be locked to the modal contents.',
      hidden: true,
    },
    size: {
      value: 'md',
      type: PropTypes.FixedString,
      description: 'Defines the modal size.',
      options: ['sm', 'md', 'lg', 'fullPage'],
    },
    role: {
      value: 'dialog',
      options: ['dialog', 'alertdialog'],
      type: PropTypes.FixedString,
      description: 'Defines the modal role.',
    },
    ariaLabel: {
      value: '',
      type: PropTypes.String,
      description: 'Defines the aria label for modals',
      placeholder: 'Enter arial label',
      hidden: true,
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Dialog', 'DialogContainer', 'Close'],
        sharedProps: {
          $animate: 'animate',
          $isVisible: {
            type: PropTypes.Boolean,
            description: 'True if the modal is visible.',
          },
          $isOpen: {
            type: PropTypes.Boolean,
            description: 'True if the modal is open.',
          },
          $size: 'size',
          $role: 'role',
          $closeable: 'closeable',
        },
      },
    },
  },
};

export default ModalConfig;
