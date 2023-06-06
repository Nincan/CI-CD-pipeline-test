import { act, fireEvent, render } from '@testing-library/react';
import { Search } from '../search';
import { SearchProps } from '../types';

const setup = (props: Partial<SearchProps>) => render(<Search {...props} />);

const wait = async (interval: number) => new Promise(resolve => setTimeout(resolve, interval));

describe('Search', function() {
  describe('debounce behavior', function() {
    test('onChange should be called immediately once change is triggered regardless of debounceInterval.', async () => {
      let value = '';
      const handleChange = jest.fn(e => (value = e.target.value));
      const { container } = setup({ onChange: handleChange, debounceInterval: 2000 });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'he' } });
      });

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(value).toBe('he');
    });
    test('debouncedOnChange should not be called before debounce interval.', async () => {
      let value = '';
      const handleChange = jest.fn(e => (value = e.target.value));
      const { container } = setup({ debouncedOnChange: handleChange, debounceInterval: 2000 });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'he' } });
      });

      await wait(200);
      expect(handleChange).toHaveBeenCalledTimes(0);
      expect(value).toBe('');

      await wait(2000);
      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(value).toBe('he');
    });
    test('if multiple onChange event is called before debounce interval, only last one should be received in debouncedOnChange handler.', async () => {
      let debouncedValue = '';
      const debouncedHandleChange = jest.fn(e => (debouncedValue = e.target.value)),
        handleChange = jest.fn();
      const { container } = setup({
        onChange: handleChange,
        debouncedOnChange: debouncedHandleChange,
        debounceInterval: 2000,
      });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'he' } });
      });

      expect(debouncedHandleChange).toHaveBeenCalledTimes(0);
      expect(handleChange).toHaveBeenCalledTimes(1);

      await wait(1000);
      act(() => {
        fireEvent.change(inputElement, { target: { value: 'hel' } });
      });

      expect(handleChange).toHaveBeenCalledTimes(2);

      await wait(500);
      act(() => {
        fireEvent.change(inputElement, { target: { value: 'hello' } });
      });

      expect(debouncedHandleChange).toHaveBeenCalledTimes(0);
      expect(handleChange).toHaveBeenCalledTimes(3);
      expect(debouncedValue).toBe('');

      await wait(2200);

      expect(debouncedHandleChange).toHaveBeenCalledTimes(1);
      expect(debouncedValue).toBe('hello');
    });
  });
  describe('clearable prop', function() {
    test('when clearable is not true, clear icon should not be visible', () => {
      const { queryByTestId } = setup({ clearable: false });
      expect(queryByTestId('search-clear')).toBeNull();
    });
    test('when clearable is true, clear icon should be visible only if some value is present.', () => {
      const { queryByTestId, rerender, container } = setup({ clearable: true, value: '' });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      expect(queryByTestId('search-clear')).toBeNull();
      act(() => {
        rerender(<Search clearable value="he" />);
      });

      expect(queryByTestId('search-clear')).not.toBeNull();
      expect(inputElement.value).toBe('he');
    });
    test('should clear value of search input, when clear icon is clicked.', () => {
      let value = 'he';
      const handleChange = jest.fn(e => (value = e.target.value));
      const { getByTestId } = setup({ clearable: true, onChange: handleChange, value: 'he' });

      const clearIcon = getByTestId('search-clear');
      act(() => {
        fireEvent.click(clearIcon);
      });

      expect(value).toBe('');
    });
  });
});
