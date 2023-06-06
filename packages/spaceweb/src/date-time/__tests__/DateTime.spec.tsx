import { render, RenderResult } from '@testing-library/react';

import { TestProvider } from '../../test-utils/test-provider';

import { DateTime } from '../DateTime';
import { DateTimeProps, DATE_TIME_VARIANTS } from '../types';

const testDate = new Date('2023-05-12T09:30:46.298Z');

describe('#DateTime', () => {
  describe('#Default Locale (en-US)', () => {
    const setup = (props: DateTimeProps): RenderResult =>
      render(
        <TestProvider langCode="en-US">
          <DateTime {...props} />
        </TestProvider>
      );
    test('should render default Date Format (mm/dd/yyy) when no variant is passed', () => {
      const { getByText } = setup({
        date: testDate,
        variant: 'shortDate',
      });
      expect(getByText('5/12/2023')).toBeTruthy();
    });

    test('should render full Date when FULL_DATE variant is passed', () => {
      const { getByText } = setup({
        date: testDate,
        variant: DATE_TIME_VARIANTS.FULL_DATE,
      });
      expect(getByText('Friday, May 12, 2023')).toBeTruthy();
    });

    test('should render only day of a week when custom variant is passed along with weekday option', () => {
      const { getByText } = setup({
        date: testDate,
        variant: DATE_TIME_VARIANTS.CUSTOM,
        dateTimeOptions: {
          weekday: 'long',
        },
      });
      expect(getByText('Friday')).toBeTruthy();
    });
  });
  describe('French Locale(fr-FR)', () => {
    const setup = (props: DateTimeProps): RenderResult =>
      render(
        <TestProvider langCode="fr-FR">
          <DateTime {...props} />
        </TestProvider>
      );
    test('should render date in french format (dd/mm/yyyy) when default variant is called', () => {
      const { getByText } = setup({
        date: testDate,
        variant: 'shortDate',
      });
      expect(getByText('12/05/2023')).toBeTruthy();
    });
  });
  describe('German Locale(de-DE)', () => {
    const setup = (props: DateTimeProps): RenderResult =>
      render(
        <TestProvider langCode="de-DE">
          <DateTime {...props} />
        </TestProvider>
      );
    test('should render date in german format (dd.mm.yyyy) when default variant is called', () => {
      const { getByText } = setup({
        date: testDate,
        variant: 'shortDate',
      });
      expect(getByText('12.5.2023')).toBeTruthy();
    });
  });
});
