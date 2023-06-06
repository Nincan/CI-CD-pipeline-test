/**
 * @author Ivan Torres
 */

import { ReactElement } from 'react';
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SpaceConsumer from '../../spaceConsumer';
import _getStyle from '../_getStyle';

import { TestProvider } from '../../test-utils/test-provider';

describe('_getStyle()', () => {
  afterEach(cleanup);

  describe('when utility-class is not found', () => {
    test('returns only the JSS with valid classes', () => {
      const output = {
        color: '#0A0A14',
      };

      render(
        <TestProvider>
          <SpaceConsumer>
            {(utils): ReactElement => {
              // NOTE: ab cd simulate previously generated classes by Styletron, this
              // happens when we're adding new styles to a styled() component:
              expect(_getStyle(utils, 'spr-text-01 ab cd')).toEqual(output);

              return <div />;
            }}
          </SpaceConsumer>
        </TestProvider>
      );
    });
  });
});
