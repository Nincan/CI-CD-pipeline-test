import { NUMBER_VARIANTS } from '../types';
import { getFormattedNumber } from '../index';

describe('getFormattedNumber', () => {
  test('expandedDecimalFormat', () => {
    const formattedNumber = getFormattedNumber({
      value: 12345.67891,
      variant: { type: NUMBER_VARIANTS.EXPANDED_DECIMAL_FORMAT, decimalDigits: 3 },
      locale: 'en-US',
    });
    expect(formattedNumber).toBe('12,345.679');
  });
  test('compactDecimalFormat', () => {
    const formattedNumber = getFormattedNumber({
      value: 12345.67891,
      variant: { type: NUMBER_VARIANTS.COMPACT_DECIMAL_FORMAT, decimalDigits: 3 },
      locale: 'en-US',
    });
    expect(formattedNumber).toBe('12.346K');
  });
  test('expandedAutoFormat', () => {
    const formattedNumber = getFormattedNumber({
      value: 12345.67891,
      variant: { type: NUMBER_VARIANTS.EXPANDED_AUTO_FORMAT },
      locale: 'en-US',
    });
    expect(formattedNumber).toBe('12,345.68');
  });
  test('compactAutoFormat', () => {
    const formattedNumber = getFormattedNumber({
      value: 12345.67891,
      variant: { type: NUMBER_VARIANTS.COMPACT_AUTO_FORMAT },
      locale: 'en-US',
    });
    expect(formattedNumber).toBe('12.35K');
  });
});
