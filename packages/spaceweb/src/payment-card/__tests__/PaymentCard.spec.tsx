import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { PaymentCard, StatefulPaymentCard } from '../paymentCard';
import { TestProvider } from '../../test-utils/test-provider';
import '@testing-library/jest-dom/extend-expect';

const CUSTOM_CARD_NUMBER = '4111111111111111';
const PARTIAL_CARD_NUMBER = '41111111';

const wait = async (interval: number) => new Promise(resolve => setTimeout(resolve, interval));

const renderPaymentCard = (props?) =>
  render(
    <TestProvider>
      <PaymentCard {...props} />
    </TestProvider>
  );

const renderStatefulPaymentCard = (props?) =>
  render(
    <TestProvider>
      <StatefulPaymentCard {...props} />
    </TestProvider>
  );

describe('Payment Card', () => {
  describe('Input', () => {
    test('card number should get formatted correctly', () => {
      const { container } = renderStatefulPaymentCard();
      const input = container.querySelector('input') as HTMLInputElement;
      fireEvent.change(input, { target: { value: CUSTOM_CARD_NUMBER } });

      expect(input.value).toBe('4111 1111 1111 1111');
    });

    test('partial card number should get formatted correctly', () => {
      const { container } = renderStatefulPaymentCard();
      const input = container.querySelector('input') as HTMLInputElement;
      fireEvent.change(input, { target: { value: PARTIAL_CARD_NUMBER } });

      expect(input.value).toBe('4111 1111');
    });

    test('should not accept non-numeric characters', () => {
      const { container } = renderStatefulPaymentCard();
      const input = container.querySelector('input') as HTMLInputElement;
      fireEvent.change(input, { target: { value: 'ABC' } });

      expect(input.value).toBe('');
    });

    test('should be disabled when disabled is set to true', () => {
      const { container } = renderPaymentCard({ disabled: true });
      const input = container.querySelector('input') as HTMLInputElement;

      expect(input).toBeDisabled();
    });

    test('should have focus when autoFocus is set to true', () => {
      const { container } = renderPaymentCard({ autoFocus: true });
      const input = container.querySelector('input') as HTMLInputElement;

      expect(input).toHaveFocus();
    });

    test('debouncedOnChange should not be called before debounce interval', async () => {
      let value = '';
      const debouncedOnChange = jest.fn(e => {
        value = e.target.value;
      });
      const { container } = renderStatefulPaymentCard({ debouncedOnChange, debounceInterval: 2000 });
      const inputElement = container.querySelector('input') as HTMLInputElement;

      fireEvent.change(inputElement, { target: { value: CUSTOM_CARD_NUMBER } });

      await wait(200);
      expect(debouncedOnChange).toHaveBeenCalledTimes(0);
      expect(value).toBe('');

      await wait(2000);
      expect(debouncedOnChange).toHaveBeenCalledTimes(1);
      expect(value).toBe('4111 1111 1111 1111');
    });
  });

  describe('Clear button', () => {
    test('should not be visible when clearable is false', () => {
      const { container, queryByTestId } = renderStatefulPaymentCard({ clearable: false });

      expect(queryByTestId('button')).toBeNull();

      const input = container.querySelector('input') as HTMLInputElement;
      fireEvent.change(input, { target: { value: CUSTOM_CARD_NUMBER } });

      expect(queryByTestId('button')).toBeNull();
    });

    test('should be visible when clearable is true and Input has a number', () => {
      const { container, queryByTestId } = renderStatefulPaymentCard({ clearable: true });

      expect(queryByTestId('button')).toBeNull();

      const input = container.querySelector('input') as HTMLInputElement;
      fireEvent.change(input, { target: { value: CUSTOM_CARD_NUMBER } });

      expect(queryByTestId('button')).toBeDefined();
    });

    test('should clear Input when clicked', () => {
      const { container, getByTestId } = renderStatefulPaymentCard({ clearable: true });

      const input = container.querySelector('input') as HTMLInputElement;
      fireEvent.change(input, { target: { value: CUSTOM_CARD_NUMBER } });
      fireEvent.click(getByTestId('button'));

      expect(input.value).toBe('');
    });
  });

  describe('keyboard interaction', () => {
    test('tab sets focus to Input', () => {
      const { container } = renderPaymentCard();
      const input = container.querySelector('input') as HTMLInputElement;

      userEvent.tab();
      expect(input).toHaveFocus();
    });

    test('edited card number gets formatted correctly', () => {
      const { container } = renderStatefulPaymentCard();
      const input = container.querySelector('input') as HTMLInputElement;

      userEvent.type(input, PARTIAL_CARD_NUMBER);

      userEvent.keyboard('{ArrowLeft}2');
      expect(input.value).toBe('4111 1112 1');

      userEvent.keyboard('{ArrowRight}{ArrowRight}{Backspace}');
      expect(input.value).toBe('4111 1112');

      userEvent.keyboard('3{ArrowLeft}{Backspace}');
      expect(input.value).toBe('4111 1113');
    });
  });
});
