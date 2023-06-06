import { render, RenderResult } from '@testing-library/react';

import { TestProvider } from '../../test-utils/test-provider';

import { Number } from '../Number';
import { NumberProps } from '../types';
import { NUMBER_VARIANTS } from '../../utils/intlNumberFormatUtils/types';

describe('#NumberFormatter', () => {
  describe('#Default Locale (en-US)', () => {
    const setup = (props: NumberProps): RenderResult =>
      render(
        <TestProvider langCode="en-US">
          <Number {...props} />
        </TestProvider>
      );
    describe('expanded Decimal number format', () => {
      test('should format number upto decimal digits when decimal digits are given', () => {
        const { getByText } = setup({
          value: 12345.67891,
          variant: { type: NUMBER_VARIANTS.EXPANDED_DECIMAL_FORMAT, decimalDigits: 3 },
        });
        expect(getByText('12,345.679')).toBeTruthy();
      });
      test('should auto format number to 2 decimal places if number is greater than 1', () => {
        const { getByText } = setup({
          value: 12345.67891,
          variant: { type: NUMBER_VARIANTS.EXPANDED_AUTO_FORMAT },
        });
        expect(getByText('12,345.68')).toBeTruthy();
      });
      test('should auto format number to 4 decimal places if number is between 0 and 1', () => {
        const { getByText } = setup({
          value: 0.678910123,
          variant: { type: NUMBER_VARIANTS.EXPANDED_AUTO_FORMAT },
        });
        expect(getByText('0.6789')).toBeTruthy();
      });
      test('should not format number to if number does not have decimal digits (will only commafy the number)', () => {
        const { getByText } = setup({
          value: 1234567891011,
          variant: { type: NUMBER_VARIANTS.EXPANDED_AUTO_FORMAT },
        });
        expect(getByText('1,234,567,891,011')).toBeTruthy();
      });
    });
    describe('compact number format', () => {
      test('should format number to 2 decimal places with compact notation if number is greater than 1', () => {
        const { getByText } = setup({
          value: 999.56789,
          variant: { type: NUMBER_VARIANTS.COMPACT_AUTO_FORMAT },
        });
        expect(getByText('999.57')).toBeTruthy();
      });
      test('should format number to 4 decimal places with compact notation if number is between 0 and 1', () => {
        const { getByText } = setup({
          value: 0.678910123,
          variant: { type: NUMBER_VARIANTS.COMPACT_AUTO_FORMAT },
        });
        expect(getByText('0.6789')).toBeTruthy();
      });
      test('should format number to fixed digits and with compact notation', () => {
        const { getByText } = setup({
          value: 10000.56789,
          variant: { type: NUMBER_VARIANTS.COMPACT_DECIMAL_FORMAT, decimalDigits: 5 },
        });
        expect(getByText('10.00057K')).toBeTruthy();
      });
      test('should format number to zero decimal digit and with compact notation if number ends with zeroes', () => {
        const { getByText } = setup({
          value: 100000.46789,
          variant: { type: NUMBER_VARIANTS.COMPACT_DECIMAL_FORMAT, decimalDigits: 3 },
        });
        expect(getByText('100K')).toBeTruthy();
      });
    });
  });
  describe('German Locale(DE)', () => {
    const setup = (props: NumberProps): RenderResult =>
      render(
        <TestProvider langCode="de-DE">
          <Number {...props} />
        </TestProvider>
      );
    test(', should be converted to . while formatting number in german locale', () => {
      const { getByText } = setup({
        value: 100000,
        variant: { type: NUMBER_VARIANTS.EXPANDED_DECIMAL_FORMAT, decimalDigits: 3 },
      });
      expect(getByText('100.000')).toBeTruthy();
    });
    test(', should be converted to . and . should be converted  to , in german locale', () => {
      const { getByText } = setup({
        value: 100000.567,
        variant: { type: NUMBER_VARIANTS.COMPACT_AUTO_FORMAT },
      });
      expect(getByText('100.000,57')).toBeTruthy();
    });
    test('should be updated to Mio. when compact notation is on and value > 1000000 and value < 1000000000', () => {
      const { getByText } = setup({
        value: 1000000,
        variant: { type: NUMBER_VARIANTS.COMPACT_AUTO_FORMAT },
      });
      expect(getByText('1 Mio.')).toBeTruthy();
    });
  });
  describe('China Locale(zh-CN)', () => {
    const setup = (props: NumberProps): RenderResult =>
      render(
        <TestProvider langCode="zh-CN">
          <Number {...props} />
        </TestProvider>
      );
    test('should default to its own compact notation', () => {
      const { getByText } = setup({
        value: 1000000,
        variant: { type: NUMBER_VARIANTS.COMPACT_DECIMAL_FORMAT, decimalDigits: 3 },
      });
      expect(getByText('100万')).toBeTruthy();
    });
  });
  describe('Arabic Locale(ar-SA)', () => {
    const setup = (props: NumberProps): RenderResult =>
      render(
        <TestProvider langCode="ar-SA">
          <Number {...props} />
        </TestProvider>
      );
    test('should default to its own compact notation', () => {
      const { getByText } = setup({
        value: 1000000,
        variant: { type: NUMBER_VARIANTS.COMPACT_DECIMAL_FORMAT, decimalDigits: 3 },
      });
      expect(getByText('١ مليون')).toBeTruthy();
    });
  });
});
