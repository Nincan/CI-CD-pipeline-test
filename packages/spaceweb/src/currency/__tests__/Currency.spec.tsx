import { render, RenderResult } from '@testing-library/react';

import { TestProvider } from '../../test-utils/test-provider';

import { Currency } from '../Currency';
import { CurrencyProps } from '../types';
import { NUMBER_VARIANTS } from '../../utils/intlNumberFormatUtils/types';
import { getFormattedCurrency } from '../utils';

describe('#CurrencyFormatter', () => {
  describe('#Default Locale (en-US)', () => {
    const setup = (props: CurrencyProps): RenderResult =>
      render(
        <TestProvider langCode="en-US">
          <Currency {...props} />
        </TestProvider>
      );
    test('should format number with default Currency when no currency is provided', () => {
      const { getByText } = setup({
        value: 12345.67891,
        variant: { type: NUMBER_VARIANTS.EXPANDED_DECIMAL_FORMAT, decimalDigits: 3 },
      });
      expect(getByText('$12,345.679')).toBeTruthy();
    });
    test('should format number with Euro as currenct when EUR currency is provided', () => {
      const { getByText } = setup({
        value: 12345.67891,
        variant: { type: NUMBER_VARIANTS.EXPANDED_AUTO_FORMAT },
        currency: 'EUR',
      });
      expect(getByText('€12,345.68')).toBeTruthy();
    });
  });
  describe('German Locale(DE)', () => {
    const setup = (props: CurrencyProps): RenderResult =>
      render(
        <TestProvider langCode="de-DE">
          <Currency {...props} />
        </TestProvider>
      );
    test('should format currency in USD when no currency is specified', () => {
      const { getByText } = setup({
        value: 100000,
        variant: { type: NUMBER_VARIANTS.EXPANDED_DECIMAL_FORMAT, decimalDigits: 3 },
      });
      expect(getByText('100.000 $')).toBeTruthy();
    });
    test('should format currency in JPY when JPY is provided', () => {
      const { getByText } = setup({
        value: 100000.567,
        variant: { type: NUMBER_VARIANTS.COMPACT_AUTO_FORMAT },
        currency: 'JPY',
      });
      expect(getByText('100.000,57 ¥')).toBeTruthy();
    });
  });
});

describe('getFormattedCurrency', () => {
  test('get Default Fomatted Currency', () => {
    const formattedCurrency = getFormattedCurrency({
      value: 12345.67891,
      variant: { type: NUMBER_VARIANTS.EXPANDED_DECIMAL_FORMAT, decimalDigits: 3 },
      locale: 'en-US',
      currency: 'USD',
    });
    expect(formattedCurrency).toBe('$12,345.679');
  });
  test('EUR currency', () => {
    const formattedCurrency = getFormattedCurrency({
      value: 12345.67891,
      variant: { type: NUMBER_VARIANTS.EXPANDED_AUTO_FORMAT },
      currency: 'EUR',
      locale: 'en-US',
    });
    expect(formattedCurrency).toBe('€12,345.68');
  });
});
