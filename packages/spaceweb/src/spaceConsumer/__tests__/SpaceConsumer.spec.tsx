/**
 * @author Ivan Torres
 */

import { ReactElement } from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SpaceConsumer from '../SpaceConsumer';

import { getTestStyleUtils, TestProvider } from '../../test-utils/test-provider';

describe('SpaceConsumer', () => {
  afterEach(cleanup);
  const { theme: _theme } = getTestStyleUtils();
  test('returns style functions and theme', () => {
    render(
      <TestProvider>
        <>
          <SpaceConsumer>
            {({ css, direction, getStyle, theme }): ReactElement => {
              expect(typeof css).toEqual('function');
              expect(typeof getStyle).toEqual('function');
              expect(theme).toMatchObject(_theme);
              expect(direction).toEqual('ltr');
              return <div />;
            }}
          </SpaceConsumer>
        </>
      </TestProvider>
    );
  });
});
