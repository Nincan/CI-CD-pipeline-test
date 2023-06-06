/**
 * @author Ivan Torres
 */

import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';

import CSS from '../__mocks__/CSS.mock';

import { TestProvider, getTestStyleUtils } from '../../test-utils/test-provider';
import { hex2rgb } from '../../helpers';

describe('hook useStyle()', () => {
  afterEach(cleanup);

  describe('css()', () => {
    test("renders component with Styletron's generated classes", () => {
      render(
        <TestProvider>
          <CSS styleTest="font-bold w-1/2" />
        </TestProvider>
      );

      const el = document.querySelectorAll('[data-testid=cssComponent]')[0];
      const style = window.getComputedStyle(el);

      expect(Object.values(el.classList).join(' ')).toMatch(/sw--[a-z]{2,} sw--[a-z]{2,}/);
      expect(style.fontWeight).toEqual('700');
      expect(style.width).toEqual('50%');
    });

    describe('when utility-class is not found', () => {
      test("returns Styletron's previously generated classes along with the new ones", () => {
        render(
          <TestProvider>
            <CSS styleTest="sw--ab sw--cd font-hairline spr-text-05" />
          </TestProvider>
        );

        const { theme } = getTestStyleUtils();

        const el = document.querySelectorAll('[data-testid=cssComponent]')[0];
        const style = window.getComputedStyle(el);

        expect(Object.values(el.classList).join(' ')).toMatch(/^(sw--[a-z]{2,}\s?){4}$/);
        expect(style.fontWeight).toEqual('100');
        expect(style.color).toEqual(hex2rgb(theme.spr.text05));
      });
    });
  });
});
