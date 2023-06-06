import { renderHook } from '@testing-library/react-hooks';
import * as React from 'react';
import { LocaleProvider, useLocale } from '../context';
import { DEFAULT_LOCALE } from '../en_US';

describe('LocaleProvider', function() {
  describe('useLocale', function() {
    test('Provider provides default locale if locale is not overrided.', () => {
      const { result } = renderHook(useLocale, {
        wrapper: LocaleProvider,
      });
      expect(result.current).toEqual(DEFAULT_LOCALE);
    });
    test('Provider accepts locale to override and overrides it on top of DEFAULT_LOCALE.', () => {
      const { result } = renderHook(useLocale, {
        wrapper: LocaleProvider,
        initialProps: { locale: { select: { noResultsMsg: 'No Results Found Here!!' } } },
      });
      expect(result.current).toEqual({
        ...DEFAULT_LOCALE,
        select: { ...DEFAULT_LOCALE.select, noResultsMsg: 'No Results Found Here!!' },
      });
    });
    test("Provider should merge locale to override with outer LocaleProvider's value.", () => {
      const { result, rerender } = renderHook(useLocale, {
        wrapper: ({ children, locale }: React.ComponentProps<typeof LocaleProvider>) => (
          <LocaleProvider locale={{ select: { noResultsMsg: 'No Results Found Here!!' } }}>
            <LocaleProvider locale={locale}>{children}</LocaleProvider>
          </LocaleProvider>
        ),
      });
      expect(result.current).toEqual({
        ...DEFAULT_LOCALE,
        select: {
          ...DEFAULT_LOCALE.select,
          noResultsMsg: 'No Results Found Here!!',
        },
      });

      rerender({ locale: { select: { selectAllLabel: 'Select Everything' } } });
      expect(result.current).toEqual({
        ...DEFAULT_LOCALE,
        select: {
          ...DEFAULT_LOCALE.select,
          noResultsMsg: 'No Results Found Here!!',
          selectAllLabel: 'Select Everything',
        },
      });

      rerender({ locale: { select: { noResultsMsg: 'No Results!!' } } });
      expect(result.current).toEqual({
        ...DEFAULT_LOCALE,
        select: {
          ...DEFAULT_LOCALE.select,
          noResultsMsg: 'No Results!!',
        },
      });
    });
  });
});
