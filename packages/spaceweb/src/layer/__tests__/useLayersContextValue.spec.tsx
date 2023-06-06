import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '@testing-library/dom';
import { LAYERS_DEFAULT_ZINDEX } from '../constants';

import useLayersContextValue from '../useLayersContextValue';

import { TestProvider } from '../../test-utils/test-provider';

const setup = (wrapper: React.ComponentType<any> = TestProvider) =>
  renderHook(() => useLayersContextValue(), { wrapper }).result.current;

const MultipleTestProvider = ({ children }) => (
  <TestProvider>
    <TestProvider>{children}</TestProvider>
  </TestProvider>
);

describe('useLayersContextValue', () => {
  test('handlers returned by hook should be functions.', () => {
    const { addDocClickHandler, addEscapeHandler, removeDocClickHandler, removeEscapeHandler } = setup(undefined);
    expect(addDocClickHandler).toBeInstanceOf(Function);
    expect(addEscapeHandler).toBeInstanceOf(Function);
    expect(removeDocClickHandler).toBeInstanceOf(Function);
    expect(removeEscapeHandler).toBeInstanceOf(Function);
  });

  test('should not change zIndex and host value of parent context', () => {
    const { zIndex, host } = setup();

    expect(zIndex).toBe(LAYERS_DEFAULT_ZINDEX);
    expect(host).toBe(document.body);
  });

  describe('docClickHandlers', function() {
    test('should call all registered handlers when event is received.', () => {
      const { addDocClickHandler } = setup();

      const mockFns = [jest.fn(), jest.fn(), jest.fn()];
      mockFns.forEach(addDocClickHandler);
      fireEvent.mouseDown(document.body);

      mockFns.forEach(fn => {
        expect(fn).toHaveBeenCalledTimes(1);
        expect(fn).toHaveBeenCalledWith(expect.any(MouseEvent));
      });
    });

    test('should not unregister handlers once event is finished.', () => {
      const { addDocClickHandler } = setup();

      const mockFns = [jest.fn(), jest.fn(), jest.fn()];
      mockFns.forEach(addDocClickHandler);
      mockFns.forEach(addDocClickHandler);
      fireEvent.mouseDown(document.body);

      mockFns.forEach(fn => {
        expect(fn).toHaveBeenCalledTimes(2);
        expect(fn).toHaveBeenCalledWith(expect.any(MouseEvent));
      });
    });

    test('removeHandler should unregister handler and those handlers should not be called again.', () => {
      const { addDocClickHandler, removeDocClickHandler } = setup();

      const mockFns = [jest.fn(), jest.fn(), jest.fn()];
      const mockFnsToUnregister = [jest.fn(), jest.fn(), jest.fn()];
      mockFns.forEach(addDocClickHandler);
      mockFnsToUnregister.forEach(addDocClickHandler);

      fireEvent.mouseDown(document.body);

      mockFnsToUnregister.forEach(removeDocClickHandler);

      fireEvent.mouseDown(document.body);

      mockFns.forEach(fn => {
        expect(fn).toHaveBeenCalledTimes(2);
        expect(fn).toHaveBeenCalledWith(expect.any(MouseEvent));
      });
      mockFnsToUnregister.forEach(fn => {
        expect(fn).toHaveBeenCalledTimes(1);
        expect(fn).toHaveBeenCalledWith(expect.any(MouseEvent));
      });
    });
  });

  describe('escapeHandler', function() {
    test('should call last registered handler when escape key event is received.', () => {
      const { addEscapeHandler } = setup();

      const lastHandler = jest.fn();
      const mockFns = [jest.fn(), jest.fn(), lastHandler];
      mockFns.forEach(addEscapeHandler);
      fireEvent.keyUp(document.body, { key: 'Escape' });

      expect(mockFns[0]).toHaveBeenCalledTimes(0);
      expect(mockFns[1]).toHaveBeenCalledTimes(0);
      expect(mockFns[2]).toHaveBeenCalledTimes(1);
      expect(mockFns[2]).toHaveBeenCalledWith(expect.any(KeyboardEvent));
    });

    test('should not call handlers when event.key is not Escape.', () => {
      const { addEscapeHandler } = setup();

      const mockFns = [jest.fn(), jest.fn(), jest.fn()];
      mockFns.forEach(addEscapeHandler);
      fireEvent.keyUp(document.body, { key: 'a' });

      mockFns.forEach(fn => {
        expect(fn).toHaveBeenCalledTimes(0);
      });

      fireEvent.keyUp(document.body, { key: 'Escape' });

      expect(mockFns[0]).toHaveBeenCalledTimes(0);
      expect(mockFns[1]).toHaveBeenCalledTimes(0);
      expect(mockFns[2]).toHaveBeenCalledTimes(1);
    });

    test('should not unregister handlers once event is finished.', () => {
      const { addEscapeHandler } = setup();

      const mockFn = jest.fn();
      addEscapeHandler(mockFn);
      fireEvent.keyUp(document.body, { key: 'Escape' });
      fireEvent.keyUp(document.body, { key: 'Escape' });

      expect(mockFn).toHaveBeenCalledTimes(2);
    });

    test('removeHandler should unregister handler and those handlers should not be called.', () => {
      const { addEscapeHandler, removeEscapeHandler } = setup();

      const mockFn = jest.fn();
      const mockFnToUnregister = jest.fn();
      addEscapeHandler(mockFn);
      addEscapeHandler(mockFnToUnregister);

      fireEvent.keyUp(document.body, { key: 'Escape' });
      expect(mockFn).toHaveBeenCalledTimes(0);
      expect(mockFnToUnregister).toHaveBeenCalledTimes(1);

      removeEscapeHandler(mockFnToUnregister);

      fireEvent.keyUp(document.body, { key: 'Escape' });
      expect(mockFn).toHaveBeenCalledTimes(1);
      expect(mockFnToUnregister).toHaveBeenCalledTimes(1);
    });
  });

  test('Multiple SpacewebProvider should not effect the behavior of the hook.', () => {
    const { addDocClickHandler, removeDocClickHandler } = setup(MultipleTestProvider);

    const mockFns = [jest.fn(), jest.fn(), jest.fn()];
    const mockFnsToUnregister = [jest.fn(), jest.fn(), jest.fn()];
    mockFns.forEach(addDocClickHandler);
    mockFnsToUnregister.forEach(addDocClickHandler);

    fireEvent.mouseDown(document.body);

    mockFnsToUnregister.forEach(removeDocClickHandler);

    fireEvent.mouseDown(document.body);

    mockFns.forEach(fn => {
      expect(fn).toHaveBeenCalledTimes(2);
      expect(fn).toHaveBeenCalledWith(expect.any(MouseEvent));
    });
    mockFnsToUnregister.forEach(fn => {
      expect(fn).toHaveBeenCalledTimes(1);
      expect(fn).toHaveBeenCalledWith(expect.any(MouseEvent));
    });
  });
});
