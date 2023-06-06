import * as React from 'react';
import { act, fireEvent, render, RenderResult, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Input, StatefulInput } from '../input';
import { InputProps } from '../types';
import { Intent } from '../../types';
import { TestProvider, getTestStyleUtils, getCSSFromEl } from '../../test-utils/test-provider';

const setup = (props: Partial<InputProps>): RenderResult =>
  render(
    <TestProvider>
      <Input {...props} />
    </TestProvider>
  );

const setupStateful = (props: Partial<InputProps>): RenderResult =>
  render(
    <TestProvider>
      <StatefulInput {...props} />
    </TestProvider>
  );

const wait = async (interval: number): Promise<void> => new Promise(resolve => setTimeout(resolve, interval));

describe('Input', function () {
  describe('debounce behavior', function () {
    test('onChange should be called immediately once change is triggered regardless of debounceInterval.', async () => {
      let value = '';
      const handleChange = jest.fn(e => {
        value = e.target.value;
      });
      const { container } = setup({ onChange: handleChange, debounceInterval: 500 });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'in' } });
      });

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(value).toBe('in');
    });
    test('debouncedOnChange should not be called before debounce interval.', async () => {
      let value = '';
      const handleChange = jest.fn(e => {
        value = e.target.value;
      });
      const { container } = setup({ debouncedOnChange: handleChange, debounceInterval: 500 });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'in' } });
      });

      expect(handleChange).toHaveBeenCalledTimes(0);
      expect(value).toBe('');

      await waitFor(() => expect(handleChange).toHaveBeenCalledTimes(1));
      expect(value).toBe('in');
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
      const inputElement = container.querySelector('input') as HTMLInputElement;

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'in' } });
      });

      expect(debouncedHandleChange).toHaveBeenCalledTimes(0);
      expect(handleChange).toHaveBeenCalledTimes(1);

      await wait(200);
      act(() => {
        fireEvent.change(inputElement, { target: { value: 'inp' } });
      });

      expect(handleChange).toHaveBeenCalledTimes(2);

      await wait(200);
      act(() => {
        fireEvent.change(inputElement, { target: { value: 'input' } });
      });

      expect(debouncedHandleChange).toHaveBeenCalledTimes(0);
      expect(handleChange).toHaveBeenCalledTimes(3);
      expect(debouncedValue).toBe('');

      await waitFor(() => expect(debouncedHandleChange).toHaveBeenCalledTimes(1));
      expect(debouncedValue).toBe('input');
    });
    test('passing new function to debouncedOnChange on re-rendering should call given function only once', async () => {
      const onChange = jest.fn();
      const debouncedCallback = jest.fn();
      const { container, rerender } = render(
        <Input onChange={onChange} debouncedOnChange={() => debouncedCallback()} debounceInterval={200} />
      );
      let inputElement = container.querySelector('input') as HTMLInputElement;

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'in' } });
      });
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(debouncedCallback).toHaveBeenCalledTimes(0);

      // passing newly created debouncedOnChange
      rerender(<Input onChange={onChange} debouncedOnChange={() => debouncedCallback()} debounceInterval={200} />);
      act(() => {
        fireEvent.change(inputElement, { target: { value: 'inp' } });
      });

      expect(onChange).toHaveBeenCalledTimes(2);
      await waitFor(() => expect(debouncedCallback).toHaveBeenCalledTimes(1));
    });
  });
  describe('enhancers', () => {
    test('both startEnhancer and endEnhancer should render', async () => {
      const startEnhancer = (): React.ReactElement => <span id="id_start">$Start</span>;
      const endEnhancer = (): React.ReactElement => <span id="id_end">End$</span>;
      const { container } = setup({ startEnhancer, endEnhancer });
      const startEnhancerRendered = container.querySelector('#id_start') as HTMLDivElement;
      const endEnhancerRendered = container.querySelector('#id_end') as HTMLDivElement;
      expect(startEnhancerRendered.innerHTML).toEqual('$Start');
      expect(endEnhancerRendered.innerHTML).toEqual('End$');
    });
  });
  describe('event handlers', () => {
    test('onBlur', () => {
      const onBlur = jest.fn();
      const { container } = setup({ onBlur });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      userEvent.tab();
      expect(inputElement).toHaveFocus();

      userEvent.click(document.body);
      expect(onBlur).toBeCalledTimes(1);
    });
    test('onKeyDown, onKeyPress, onKeyUp', () => {
      const onKeyDown = jest.fn();
      const onKeyPress = jest.fn();
      const onKeyUp = jest.fn();
      const { container } = setup({ onKeyDown, onKeyPress, onKeyUp });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      userEvent.type(inputElement, '{Enter}');

      expect(onKeyDown).toBeCalledTimes(1);
      expect(onKeyPress).toBeCalledTimes(1);
      expect(onKeyUp).toBeCalledTimes(1);
    });
    test('onFocus', () => {
      const onFocus = jest.fn();
      const { container } = setup({ onFocus });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      userEvent.tab();
      expect(inputElement).toHaveFocus();
      expect(onFocus).toBeCalledTimes(1);
    });
  });
  describe('autoFocus', () => {
    test('true: input has focus, cursor position: value.length', () => {
      const { container } = setup({ autoFocus: true, value: 'test' });
      const inputElement = container.querySelector('input') as HTMLInputElement;
      const cursorStart = inputElement.selectionStart;
      const cursorEnd = inputElement.selectionEnd;

      expect(inputElement).toHaveFocus();
      expect(cursorStart).toBe(inputElement.value.length);
      expect(cursorStart).toBe(cursorEnd);
    });
    test('false: input does not have focus', () => {
      const { container } = setup({ autoFocus: false });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      expect(inputElement).not.toHaveFocus();
    });
  });
  describe('clearable', () => {
    test('true: clear button should render when value defined, and it should clear input when clicked', async () => {
      const { getByRole, queryByRole, container } = setupStateful({ clearable: true });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      expect(queryByRole('button')).toBeNull();
      userEvent.type(inputElement, 'test');
      expect(inputElement.value).toBe('test');

      const clearButton = getByRole('button');
      userEvent.click(clearButton);

      expect(inputElement.value).toBe('');
    });
    test('false: clear button should not render', () => {
      const { queryByRole, container } = setupStateful({ clearable: false });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      expect(queryByRole('button')).toBeNull();
      userEvent.type(inputElement, 'test');
      expect(inputElement.value).toBe('test');

      expect(queryByRole('button')).toBeNull();
    });
  });
  test('disabled', () => {
    const { container } = setup({ disabled: true });
    const inputElement = container.querySelector('input') as HTMLInputElement;

    expect(inputElement).toBeDisabled();
  });
  test('required', () => {
    const { container } = setup({ required: true });
    const inputElement = container.querySelector('input') as HTMLInputElement;

    expect(inputElement).toBeRequired();
  });
  describe('props', () => {
    const forwardProps: [string, string][] = [
      ['id', 'test'],
      ['placeholder', 'test'],
      ['aria-label', 'test'],
      ['aria-labelledby', 'test'],
      ['aria-describedby', 'test'],
      ['type', 'number'],
    ];

    test.each(forwardProps)('%s gets passed down', (prop, exp) => {
      const { container } = setup({ [prop]: exp });
      const inputElement = container.querySelector('input') as HTMLInputElement;
      expect(inputElement).toHaveAttribute(prop, exp);
    });
  });
  describe('size', () => {
    const { theme } = getTestStyleUtils();
    const sizeStylesMap = [
      ['sm', theme.input.sizeSm],
      ['md', theme.input.sizeMd],
      ['lg', theme.input.sizeLg],
    ] as const;
    test.each(sizeStylesMap)('%s', (size, styles) => {
      const { container } = setup({ size: size });
      const inputElement = container.querySelector('input') as HTMLInputElement;
      const inputElementCSS = getCSSFromEl(inputElement);

      expect(inputElementCSS.fontSize).toBe(styles?.fontSize);
      expect(inputElementCSS.lineHeight).toBe(styles?.lineHeight);
      expect(inputElementCSS.paddingTop).toBe(styles?.paddingY);
      expect(inputElementCSS.paddingRight).toBe(styles?.paddingX);
      expect(inputElementCSS.paddingBottom).toBe(styles?.paddingY);
      expect(inputElementCSS.paddingLeft).toBe(styles?.paddingX);
    });
  });
  describe('variant', () => {
    const { theme } = getTestStyleUtils();
    test('default', () => {
      const { container } = setup({ variant: 'default' });
      const inputContainer = container.querySelector('[data-baseweb="base-input"]') as HTMLDivElement;
      const inputContainerCSS = getCSSFromEl(inputContainer);

      expect(inputContainerCSS.borderTopWidth).toBe('1px');
      expect(inputContainerCSS.borderRightWidth).toBe('1px');
      expect(inputContainerCSS.borderBottomWidth).toBe('1px');
      expect(inputContainerCSS.borderLeftWidth).toBe('1px');
      expect(inputContainerCSS.borderTopLeftRadius).toBe(theme.input.borderRadius);
      expect(inputContainerCSS.borderTopRightRadius).toBe(theme.input.borderRadius);
      expect(inputContainerCSS.borderBottomLeftRadius).toBe(theme.input.borderRadius);
      expect(inputContainerCSS.borderBottomRightRadius).toBe(theme.input.borderRadius);
    });
    test('line', () => {
      const { container } = setup({ variant: 'line' });
      const inputElement = container.querySelector('input') as HTMLInputElement;
      const inputContainer = container.querySelector('[data-baseweb="base-input"]') as HTMLDivElement;
      const inputElementCSS = getCSSFromEl(inputElement);
      const inputContainerCSS = getCSSFromEl(inputContainer);

      expect(inputContainerCSS.borderTopWidth).toBe('0');
      expect(inputContainerCSS.borderRightWidth).toBe('0');
      expect(inputContainerCSS.borderBottomWidth).toBe('1px');
      expect(inputContainerCSS.borderLeftWidth).toBe('0');
      expect(inputContainerCSS.borderTopLeftRadius).toBe('0');
      expect(inputContainerCSS.borderTopRightRadius).toBe('0');
      expect(inputContainerCSS.borderBottomLeftRadius).toBe('0');
      expect(inputContainerCSS.borderBottomRightRadius).toBe('0');
      expect(inputElementCSS.paddingLeft).toBe('0px');
      expect(inputElementCSS.paddingRight).toBe('0px');
    });
  });
  describe('intent', () => {
    const { theme } = getTestStyleUtils();
    const intentColorMap: [Intent, string][] = [
      ['default', theme.spr.focus01],
      ['success', theme.spr.supportSuccess],
      ['warning', theme.spr.supportWarning],
      ['error', theme.spr.supportError],
    ];
    test.each(intentColorMap)('%s', (intent, color) => {
      const { container } = setup({ intent, autoFocus: true });
      const inputContainer = container.querySelector('[data-baseweb="base-input"]') as HTMLDivElement;
      const inputContainerCSS = getCSSFromEl(inputContainer);

      expect(inputContainerCSS.borderTopColor).toBe(color);
      expect(inputContainerCSS.borderRightColor).toBe(color);
      expect(inputContainerCSS.borderBottomColor).toBe(color);
      expect(inputContainerCSS.borderLeftColor).toBe(color);
    });
  });
  describe('inputRef', () => {
    test('refObject should have the reference of input.', () => {
      const inputRef = React.createRef<HTMLInputElement>();
      const { container } = setup({ inputRef });
      expect(inputRef.current).toBe(container.querySelector('input'));
    });
    test('refCallback should be called with input ref.', () => {
      const inputRefCallback = jest.fn();
      const { container } = setup({ inputRef: inputRefCallback });
      expect(inputRefCallback).toHaveBeenCalledWith(container.querySelector('input'));
    });
  });
});
