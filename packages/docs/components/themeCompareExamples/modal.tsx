import ModalBasic from 'componentConfigs/modal/examples/basic.js';
import ModalSmallScroll from 'componentConfigs/modal/examples/small-scroll.js';
import ModalMedium from 'componentConfigs/modal/examples/medium-modal.js';
import ModalLarge from 'componentConfigs/modal/examples/large-modal.js';
import { ComponentWrapper, ComponentName, Examples, ExampleWrapper, ExampleName } from './common';

const Modal = () => (
  <ComponentWrapper>
    <ComponentName>Modal</ComponentName>
    <Examples>
      <ExampleWrapper className="block" style={{ height: '80px' }}>
        <ExampleName>Basic Usage</ExampleName>
        <ModalBasic />
      </ExampleWrapper>
      <ExampleWrapper className="block" style={{ height: '80px' }}>
        <ExampleName>Small size with scroll</ExampleName>
        <ModalSmallScroll />
      </ExampleWrapper>
      <ExampleWrapper className="block" style={{ height: '80px' }}>
        <ExampleName>Medium size modal</ExampleName>
        <ModalMedium />
      </ExampleWrapper>
      <ExampleWrapper className="block" style={{ height: '80px' }}>
        <ExampleName>Large size modal</ExampleName>
        <ModalLarge />
      </ExampleWrapper>
    </Examples>
  </ComponentWrapper>
);

export default Modal;
