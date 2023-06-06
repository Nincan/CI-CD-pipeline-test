import { useState } from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Modal, ModalHeader, ModalBody, ModalFooter } from '../index';
import { Input } from '../../input';
import { Button } from '../../button';
import { TestProvider, getCSSFromEl, getTestStyleUtils } from '../../test-utils/test-provider';

const renderModal = (props?) =>
  render(
    <TestProvider>
      <Modal {...props}>
        <ModalHeader>test-header</ModalHeader>
        <ModalBody>
          test-body
          <Input placeholder="test-input-1" />
          <Input placeholder="test-input-2" />
        </ModalBody>
        <ModalFooter>test-footer</ModalFooter>
      </Modal>
    </TestProvider>
  );

describe('Modal', () => {
  describe('isOpen', () => {
    test('true: Modal is open by default', () => {
      const { queryByRole } = renderModal({ isOpen: true });

      const Modal = queryByRole('dialog');
      expect(Modal).not.toBeNull();
    });

    test('false: Modal is closed', () => {
      const { queryByRole } = renderModal({ isOpen: false });

      const Modal = queryByRole('dialog');
      expect(Modal).toBeNull();
    });
  });

  describe('autoFocus', () => {
    test('true: sets focus to first interactive element', () => {
      const { queryByPlaceholderText } = renderModal({ isOpen: true, autoFocus: true });

      const Input1 = queryByPlaceholderText('test-input-1');
      const Input2 = queryByPlaceholderText('test-input-2');

      expect(Input1).toHaveFocus();
      expect(Input2).not.toHaveFocus();
    });

    test('false: does not set focus', () => {
      const { queryByPlaceholderText } = renderModal({ isOpen: true, autoFocus: false });

      const Input1 = queryByPlaceholderText('test-input-1');
      const Input2 = queryByPlaceholderText('test-input-2');

      expect(Input1).not.toHaveFocus();
      expect(Input2).not.toHaveFocus();
    });
  });

  describe('closeable', () => {
    test('true: renders close button', () => {
      const { queryByRole } = renderModal({ isOpen: true, closeable: true });

      const CloseButton = queryByRole('button');
      expect(CloseButton).not.toBeNull();
    });

    test('false: does not render close button', () => {
      const { queryByRole } = renderModal({ isOpen: true, closeable: false });

      const CloseButton = queryByRole('button');
      expect(CloseButton).toBeNull();
    });
  });

  test('onClose: fired once when Modal closes', () => {
    const onClose = jest.fn();
    const { queryByRole } = renderModal({ isOpen: true, closeable: true, onClose });

    const CloseButton = queryByRole('button') as HTMLButtonElement;

    fireEvent.click(CloseButton);

    expect(onClose).toBeCalledTimes(1);
  });

  describe('size', () => {
    const { px2rem } = getTestStyleUtils();

    test('sm', () => {
      const { queryByRole } = renderModal({ isOpen: true, size: 'sm' });

      const Modal = queryByRole('dialog');
      const ModalCSS = getCSSFromEl(Modal);

      expect(ModalCSS.width).toEqual(px2rem(520));
    });

    test('md', () => {
      const { queryByRole } = renderModal({ isOpen: true, size: 'md' });

      const Modal = queryByRole('dialog');
      const ModalCSS = getCSSFromEl(Modal);

      expect(ModalCSS.width).toEqual(px2rem(720));
    });

    test('lg', () => {
      const { queryByRole } = renderModal({ isOpen: true, size: 'lg' });

      const Modal = queryByRole('dialog');
      const ModalCSS = getCSSFromEl(Modal);

      expect(ModalCSS.width).toEqual(px2rem(1220));
    });
  });

  describe('role', () => {
    test('dialog', () => {
      const { queryByRole } = renderModal({ isOpen: true, role: 'dialog' });

      const Modal = queryByRole('dialog');
      expect(Modal).not.toBeNull();
    });

    test('alertDialog', () => {
      const { queryByRole } = renderModal({ isOpen: true, role: 'alertdialog' });

      const Modal = queryByRole('alertdialog');
      expect(Modal).not.toBeNull();
    });
  });

  describe('keyboard interaction', () => {
    test('Escape closes Modal', () => {
      const Example = () => {
        const [open, setOpen] = useState(true);
        return (
          <Modal onClose={() => setOpen(false)} isOpen={open}>
            <ModalHeader>test-header</ModalHeader>
            <ModalBody>test-body</ModalBody>
            <ModalFooter>test-footer</ModalFooter>
          </Modal>
        );
      };
      const { queryByRole } = render(
        <TestProvider>
          <Example />
        </TestProvider>
      );

      expect(queryByRole('dialog')).not.toBeNull();

      userEvent.keyboard('{Escape}');

      expect(queryByRole('dialog')).toBeNull();
    });

    test('Tab shifts focus between interactive elements inside Modal', () => {
      const { queryByPlaceholderText, queryByRole } = renderModal({ isOpen: true, autoFocus: true });

      const Input1 = queryByPlaceholderText('test-input-1');
      const Input2 = queryByPlaceholderText('test-input-2');
      const CloseButton = queryByRole('button');

      expect(Input1).toHaveFocus();

      userEvent.tab();

      expect(Input2).toHaveFocus();

      userEvent.tab();

      expect(CloseButton).toHaveFocus();
    });
  });

  test('Upon closing, focus should return to element that triggered modal', async () => {
    const Example = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button autoFocus onClick={() => setOpen(true)}>
            open
          </Button>
          <Modal onClose={() => setOpen(false)} isOpen={open}>
            <ModalHeader>test-header</ModalHeader>
            <ModalBody>test-body</ModalBody>
            <ModalFooter>test-footer</ModalFooter>
          </Modal>
        </>
      );
    };
    const { queryByText, queryByRole, queryAllByRole } = render(
      <TestProvider>
        <Example />
      </TestProvider>
    );

    const OpenButton = queryByText('open') as HTMLButtonElement;
    fireEvent.click(OpenButton);
    expect(queryByRole('dialog')).not.toBeNull();

    const CloseButton = queryAllByRole('button')[1] as HTMLButtonElement;
    fireEvent.click(CloseButton);
    expect(queryByRole('dialog')).toBeNull();

    await waitFor(() => {
      expect(OpenButton).toHaveFocus();
    });
  });
});
