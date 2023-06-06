import { createRef } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestProvider } from '../../../test-utils/test-provider';
import OverlaySelect from '../OverlaySelect';
import { ImperativeMethods } from '../../types';

const OPTIONS = [
  { label: 'AliceBlue', id: '#F0F8FF' },
  { label: 'AntiqueWhite', id: '#FAEBD7' },
  { label: 'Aqua', id: '#00FFFF' },
  { label: 'Aquamarine', id: '#7FFFD4' },
  { label: 'Azure', id: '#F0FFFF' },
  { label: 'Beige', id: '#F5F5DC' },
] as const;

const StatefulOverlaySelect = props => (
  <TestProvider>
    <OverlaySelect type="overlay" options={OPTIONS} {...props}>
      <button>Open Overlay</button>
    </OverlaySelect>
  </TestProvider>
);

const renderOverlaySelect = (props?) => render(<StatefulOverlaySelect {...props} />);

describe('OverlaySelect', function () {
  describe('closeOnSelect should close select overlay as soon as option from overlay is selected.', function () {
    test('closeOnSelect is true', async () => {
      const { getByText, queryByText, findByText } = renderOverlaySelect({ closeOnSelect: true });

      fireEvent.click(getByText('Open Overlay'));
      const aliceBlueOpt = await findByText('AliceBlue');
      fireEvent.click(aliceBlueOpt);

      expect(queryByText('AliceBlue')).toBeNull();
    });
    test('closeOnSelect is false', async () => {
      const { getByText, queryByText, findByText } = renderOverlaySelect({ closeOnSelect: false });

      fireEvent.click(getByText('Open Overlay'));
      const aliceBlueOpt = await findByText('AliceBlue');
      fireEvent.click(aliceBlueOpt);

      expect(queryByText('AliceBlue')).not.toBeNull();
    });
  });

  describe('onChange should be called whenever an option is clicked in select', function () {
    test('single select', async () => {
      const onChange = jest.fn();
      const { getByText, findByText } = renderOverlaySelect({ onChange });

      fireEvent.click(getByText('Open Overlay'));
      const aliceBlueOpt = await findByText('AliceBlue');
      fireEvent.click(aliceBlueOpt);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ value: [{ id: '#F0F8FF', label: 'AliceBlue' }] })
      );
    });
    test('multi select', async () => {
      const onChange = jest.fn();
      const { getByText, findByText } = renderOverlaySelect({
        onChange,
        closeOnSelect: false,
        multi: true,
      });

      fireEvent.click(getByText('Open Overlay'));
      const aliceBlueOpt = await findByText('AliceBlue');
      fireEvent.click(aliceBlueOpt);

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({ value: [{ id: '#F0F8FF', label: 'AliceBlue' }] })
      );
    });
  });

  describe('startOpen makes sure that overlay is opened initially if true', function () {
    test('startOpen true', () => {
      const { getByText } = renderOverlaySelect({ startOpen: true });
      getByText('AliceBlue');
    });
    test('startOpen false', () => {
      const { queryByText } = renderOverlaySelect({ startOpen: false });
      expect(queryByText('AliceBlue')).toBeNull();
    });
  });

  describe('if searchable is true, search input should be visible', function () {
    test('searchable is true', () => {
      const { getByPlaceholderText } = renderOverlaySelect({
        searchable: true,
        placeholder: 'Input Placeholder',
        startOpen: true,
      });
      getByPlaceholderText('Input Placeholder');
    });
    test('searchable is false', () => {
      const { queryByPlaceholderText } = renderOverlaySelect({
        searchable: false,
        placeholder: 'Input Placeholder',
        startOpen: true,
      });
      expect(queryByPlaceholderText('AliceBlue')).toBeNull();
    });
  });

  describe('onOpen onClose should be called when overlay is opened or closed respectively', function () {
    test('when overlay is opened', async () => {
      const onOpen = jest.fn(),
        onClose = jest.fn();
      const { getByText, findByText } = renderOverlaySelect({ onOpen, onClose });
      fireEvent.click(getByText('Open Overlay'));
      await findByText('AliceBlue');

      expect(onOpen).toHaveBeenCalledTimes(1);
    });
    test('when overlay is closed', async () => {
      const onOpen = jest.fn(),
        onClose = jest.fn();
      const { getByText } = renderOverlaySelect({ onOpen, onClose, startOpen: true, closeOnSelect: true });
      // click on any option will close overlay
      fireEvent.click(getByText('AliceBlue'));

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('onCloseResetsInput', function () {
    test('when true, input value should be cleared when popover reopens.', async () => {
      const TYPED_TEXT = 'al';
      const { getByText, findByText, getByPlaceholderText } = renderOverlaySelect({
        placeholder: 'Select Color',
        onCloseResetsInput: true,
        searchable: true,
      });

      // open overlay
      userEvent.click(getByText('Open Overlay'));
      await findByText('AliceBlue');

      userEvent.type(getByPlaceholderText(/Select Color/i), TYPED_TEXT);
      screen.getByDisplayValue(TYPED_TEXT);

      // close overlay by clicking again
      userEvent.click(getByText('Open Overlay'));
      // reopen
      userEvent.click(getByText('Open Overlay'));

      expect(screen.queryByDisplayValue(TYPED_TEXT)).toBeNull();
    });
    test('when false, input value should retain when popover reopens.', async () => {
      const TYPED_TEXT = 'al';
      const { getByText, findByText, getByPlaceholderText } = renderOverlaySelect({
        placeholder: 'Select Color',
        onCloseResetsInput: false,
        searchable: true,
      });

      // open overlay
      userEvent.click(getByText('Open Overlay'));
      await findByText('AliceBlue');

      await userEvent.type(getByPlaceholderText(/Select Color/i), TYPED_TEXT);

      // close overlay by clicking again
      userEvent.click(getByText('Open Overlay'));
      // reopen
      userEvent.click(getByText('Open Overlay'));

      screen.getByDisplayValue(TYPED_TEXT);
    });
  });

  describe('controlRef', () => {
    test('when setDropdownOpen is called it should open and close popover according to argument', async () => {
      const controlRef = createRef<ImperativeMethods>();
      act(() => {
        renderOverlaySelect({ controlRef });
      });

      // check dropdown is closed initially, no options are rendererd
      expect(screen.queryByText(OPTIONS[0].label)).toBeNull();

      // open dropdown
      act(() => {
        controlRef.current?.setDropdownOpen(true);
      });
      // check dropdown is open
      screen.getByText(OPTIONS[0].label);

      // close dropdown
      act(() => {
        controlRef.current?.setDropdownOpen(false);
      });
      // check dropdown is closed
      expect(screen.queryByText(OPTIONS[0].label)).toBeNull();
    });
    test('search input should be focused/blurred when controlRef.focus/blur is called.', async () => {
      const controlRef = createRef<ImperativeMethods>();
      act(() => {
        renderOverlaySelect({ controlRef });
      });

      // check dropdown is closed initially, no options are rendererd
      expect(screen.queryByText(OPTIONS[0].label)).toBeNull();

      act(() => {
        controlRef.current?.setDropdownOpen(true);
      });
      act(() => {
        controlRef.current?.focus();
      });
    });
  });
});
