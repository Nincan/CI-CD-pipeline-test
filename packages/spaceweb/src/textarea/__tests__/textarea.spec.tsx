import { act, fireEvent, render, RenderResult } from '@testing-library/react';
import { getCSSFromEl, TestProvider } from '../../test-utils/test-provider';
import '@testing-library/jest-dom/extend-expect';

import { StatefulTextarea, Textarea } from '../textarea';
import { TextareaProps } from '../types';
import * as React from 'react';

const setup = (props: Partial<TextareaProps>): RenderResult =>
  render(
    <TestProvider>
      <Textarea {...props} />
    </TestProvider>
  );

const wait = async (interval: number): Promise<void> => new Promise(resolve => setTimeout(resolve, interval));

const mockTypeEventOnTextarea = (content: string, targetElement: HTMLTextAreaElement): void => {
  const mockEvent = { target: { value: content } };
  fireEvent.change(targetElement, mockEvent); // Make sure onChange event is triggered.
  fireEvent.keyDown(targetElement, mockEvent); // Since in the test we are not updating value props for textarea, keyDown is used to update textarea's value property, like an uncontrolled react component.
};

describe('Textarea', function () {
  describe('debounce behavior', function () {
    test('onChange should be called immediately once change is triggered regardless of debounceInterval.', async () => {
      let value = '';
      const handleChange = jest.fn(e => {
        value = e.target.value;
      });
      const { container } = setup({ onChange: handleChange, debounceInterval: 500 });
      const textareaElement = container.querySelector('textarea') as HTMLTextAreaElement;

      act(() => {
        mockTypeEventOnTextarea('action', textareaElement);
      });

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(value).toBe('action');
    });

    test('debouncedOnChange should not be called before debounce interval.', async () => {
      let value = '';
      const handleChange = jest.fn(e => {
        value = e.target.value;
      });
      const { container } = setup({ debouncedOnChange: handleChange, debounceInterval: 500 });
      const textareaElement = container.querySelector('textarea') as HTMLTextAreaElement;

      act(() => {
        mockTypeEventOnTextarea('action', textareaElement);
      });

      await wait(200);
      expect(handleChange).toHaveBeenCalledTimes(0);
      expect(value).toBe('');

      await wait(500);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(value).toBe('action');
    });
    test('if multiple onChange event is called before debounce interval, only last one should be received in debouncedOnChange handler.', async () => {
      let debouncedValue = '';
      const debouncedHandleChange = jest.fn(e => {
          debouncedValue = e.target.value;
        }),
        handleChange = jest.fn();
      const { container } = setup({
        onChange: handleChange,
        debouncedOnChange: debouncedHandleChange,
        debounceInterval: 500,
      });
      const textareaElement = container.querySelector('textarea') as HTMLTextAreaElement;

      act(() => {
        mockTypeEventOnTextarea('ac', textareaElement);
      });

      expect(debouncedHandleChange).toHaveBeenCalledTimes(0);
      expect(handleChange).toHaveBeenCalledTimes(1);

      await wait(200);
      act(() => {
        mockTypeEventOnTextarea('act', textareaElement);
      });

      expect(handleChange).toHaveBeenCalledTimes(2);

      await wait(200);
      act(() => {
        mockTypeEventOnTextarea('action', textareaElement);
      });

      expect(debouncedHandleChange).toHaveBeenCalledTimes(0);
      expect(handleChange).toHaveBeenCalledTimes(3);
      expect(debouncedValue).toBe('');

      await wait(500);

      expect(debouncedHandleChange).toHaveBeenCalledTimes(1);
      expect(debouncedValue).toBe('action');
    });
  });
  describe('autoSize', () => {
    test('true: should set `overflow: hidden` and `resize: none`', () => {
      const { container } = setup({ autoSize: true });
      const textarea = container.querySelector('textarea');
      const textareaCSS = getCSSFromEl(textarea);

      expect(textareaCSS).toHaveProperty('overflow', 'hidden');
      expect(textareaCSS).toHaveProperty('resize', 'none');
    });
    test('false: should set `resize: both`', () => {
      const { container } = setup({ autoSize: false });
      const textarea = container.querySelector('textarea');
      const textareaCSS = getCSSFromEl(textarea);

      expect(textareaCSS).toHaveProperty('resize', 'both');
    });
  });
  describe('autoFocus', () => {
    test('true: should set focus on textarea by default', () => {
      const { container } = setup({ autoFocus: true });
      const textarea = container.querySelector('textarea');

      expect(textarea).toHaveFocus();
    });
    test('false: should not set focus on textarea by default', () => {
      const { container } = setup({ autoFocus: false });
      const textarea = container.querySelector('textarea');

      expect(textarea).not.toHaveFocus();
    });
  });
  describe('inputRef', () => {
    test('refObject should have the reference of input.', () => {
      const inputRef = React.createRef<HTMLTextAreaElement>();
      const { container } = setup({ inputRef });
      expect(inputRef.current).toBe(container.querySelector('textarea'));
    });
    test('refCallback should be called with input ref.', () => {
      const inputRefCallback = jest.fn();
      const { container } = setup({ inputRef: inputRefCallback });
      expect(inputRefCallback).toHaveBeenCalledWith(container.querySelector('textarea'));
    });
  });
  describe('StatefulTextArea', () => {
    test("textarea's value should update when user types.", () => {
      const inputRef = React.createRef<HTMLTextAreaElement>();
      render(
        <TestProvider>
          <StatefulTextarea inputRef={inputRef} />
        </TestProvider>
      );
      act(() => {
        mockTypeEventOnTextarea('Hello', inputRef.current!);
      });
      expect(inputRef.current!.value).toBe('Hello');
    });
    test('textarea have initial value passed in prop and its value should update when user types.', () => {
      const inputRef = React.createRef<HTMLTextAreaElement>();
      render(
        <TestProvider>
          <StatefulTextarea initialState={{ value: 'initial' }} inputRef={inputRef} />
        </TestProvider>
      );
      expect(inputRef.current!.value).toBe('initial');
      act(() => {
        mockTypeEventOnTextarea('Hello', inputRef.current!);
      });
      expect(inputRef.current!.value).toBe('Hello');
    });
  });
});
