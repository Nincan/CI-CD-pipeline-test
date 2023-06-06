import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import useAutoFocus from '../useAutoFocus';
import { FocusPosition } from '../../input';

const VALUE = 'test_value';

const AutoFocusInput = ({ autoFocus }: { autoFocus: FocusPosition }) => {
  const ref = useAutoFocus<HTMLInputElement>({ autoFocus });

  return <input value={VALUE} ref={ref} />;
};

const renderAutoFocusInput = ({ autoFocus }: { autoFocus: FocusPosition }) =>
  render(<AutoFocusInput autoFocus={autoFocus} />);

describe('useAutoFocus', () => {
  test('autoFocus: "start", cursor position: 0', () => {
    const { container } = renderAutoFocusInput({ autoFocus: 'start' });
    const inputElement = container.querySelector('input') as HTMLInputElement;
    const cursorStart = inputElement.selectionStart;
    const cursorEnd = inputElement.selectionEnd;

    expect(inputElement).toHaveFocus();
    expect(cursorStart).toBe(0);
    expect(cursorStart).toBe(cursorEnd);
  });

  test('autoFocus: "end", cursor position: VALUE.length', () => {
    const { container } = renderAutoFocusInput({ autoFocus: 'end' });
    const inputElement = container.querySelector('input') as HTMLInputElement;
    const cursorStart = inputElement.selectionStart;
    const cursorEnd = inputElement.selectionEnd;

    expect(inputElement).toHaveFocus();
    expect(cursorStart).toBe(VALUE.length);
    expect(cursorStart).toBe(cursorEnd);
  });

  describe('autoFocus: boolean', () => {
    test('true, cursor position: VALUE.length', () => {
      const { container } = renderAutoFocusInput({ autoFocus: true });
      const inputElement = container.querySelector('input') as HTMLInputElement;
      const cursorStart = inputElement.selectionStart;
      const cursorEnd = inputElement.selectionEnd;

      expect(inputElement).toHaveFocus();
      expect(cursorStart).toBe(VALUE.length);
      expect(cursorStart).toBe(cursorEnd);
    });

    test('false, input is not focussed', () => {
      const { container } = renderAutoFocusInput({ autoFocus: false });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      expect(inputElement).not.toHaveFocus();
    });
  });

  describe('autoFocus: number', () => {
    test('< 0, cursor position: 0', () => {
      const POSITION = -1;
      const { container } = renderAutoFocusInput({ autoFocus: POSITION });
      const inputElement = container.querySelector('input') as HTMLInputElement;
      const cursorStart = inputElement.selectionStart;
      const cursorEnd = inputElement.selectionEnd;

      expect(inputElement).toHaveFocus();
      expect(cursorStart).toBe(0);
      expect(cursorStart).toBe(cursorEnd);
    });
    test('[0, VALUE.length], cursor position: value provided', () => {
      const POSITION = 3;
      const { container } = renderAutoFocusInput({ autoFocus: POSITION });
      const inputElement = container.querySelector('input') as HTMLInputElement;
      const cursorStart = inputElement.selectionStart;
      const cursorEnd = inputElement.selectionEnd;

      expect(inputElement).toHaveFocus();
      expect(cursorStart).toBe(POSITION);
      expect(cursorStart).toBe(cursorEnd);
    });
    test('> VALUE.length, cursor position: VALUE.length', () => {
      const POSITION = VALUE.length + 10;
      const { container } = renderAutoFocusInput({ autoFocus: POSITION });
      const inputElement = container.querySelector('input') as HTMLInputElement;
      const cursorStart = inputElement.selectionStart;
      const cursorEnd = inputElement.selectionEnd;

      expect(inputElement).toHaveFocus();
      expect(cursorStart).toBe(VALUE.length);
      expect(cursorStart).toBe(cursorEnd);
    });
  });
});
