/**
 * @author Ivan Torres
 */

import { ReactElement } from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import UseStyle from '../__mocks__/UseStyle.mock';

import { TestProvider, getTestStyleUtils } from '../../test-utils/test-provider';

describe('useStyle()', () => {
  afterEach(cleanup);
  const { theme: _theme } = getTestStyleUtils();
  test('returns style functions and theme', () => {
    // NOTE: Since we need the context we render JSX to use `useStyle` indirectly.
    render(
      <TestProvider>
        <UseStyle>
          {({ css, direction, getStyle, px2rem, theme, isRTL }): ReactElement => {
            expect(direction).toEqual('ltr');
            expect(isRTL).toBe(false);
            expect(typeof css).toEqual('function');
            expect(typeof getStyle).toEqual('function');
            expect(typeof px2rem).toEqual('function');
            expect(theme).toMatchObject(_theme);
            return <div />;
          }}
        </UseStyle>
      </TestProvider>
    );
  });
  test('returns isRTL false if direction is rtl', () => {
    // NOTE: Since we need the context we render JSX to use `useStyle` indirectly.
    render(
      <TestProvider direction="rtl">
        <UseStyle>
          {({ direction, isRTL }): ReactElement => {
            expect(direction).toEqual('rtl');
            expect(isRTL).toBe(true);
            return <div />;
          }}
        </UseStyle>
      </TestProvider>
    );
  });
});
