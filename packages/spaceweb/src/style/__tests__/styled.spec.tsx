/**
 * @author Ivan Torres
 */

import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';
import { ReactElement } from 'react';

import styled from '../styled';
import SpaceConsumer from '../../spaceConsumer';

import { TestProvider, getTestStyleUtils } from '../../test-utils/test-provider';
import { hex2rgb } from '../../helpers';

describe('styled()', () => {
  afterEach(cleanup);
  describe('when using utility-classes', () => {
    test('renders styled component with the corresponding css', () => {
      const StyledComponent = styled('div', 'font-bold w-1/2');

      render(
        <TestProvider>
          <StyledComponent data-testid="styledComponent" />
        </TestProvider>
      );

      const el = document.querySelectorAll('[data-testid=styledComponent]')[0];
      const style = window.getComputedStyle(el);

      expect(Object.values(el.classList).join(' ')).toMatch(/sw--[a-z]{2,} sw--[a-z]{2,}/);
      expect(style.fontWeight).toEqual('700');
      expect(style.width).toEqual('50%');
    });
  });

  describe('when using theme values', () => {
    test('renders styled component with the corresponding css', () => {
      const StyledComponent = styled('div', ({ theme }) => ({ color: theme.spr.text01 }));

      render(
        <TestProvider>
          <StyledComponent data-testid="styledComponent" />
        </TestProvider>
      );

      const el = document.querySelectorAll('[data-testid=styledComponent]')[0];
      const style = window.getComputedStyle(el);

      expect(Object.values(el.classList).join(' ')).toMatch(/sw--[a-z]{2,}/);
      expect(style.color).toEqual('rgb(10, 10, 20)');
    });
  });

  describe('when setting `className` prop', () => {
    test('all styles are combined', () => {
      const StyledComponent = styled('div', 'font-bold w-1/2');

      render(
        <TestProvider>
          <StyledComponent data-testid="styled" className="w-full" />
        </TestProvider>
      );

      const el = document.querySelectorAll('[data-testid=styled]')[0];
      const style = window.getComputedStyle(el);

      expect(style.width).toEqual('100%');
    });
  });

  describe("when consuming component's props", () => {
    const { theme } = getTestStyleUtils();
    test('style callback receives properties used in the component', () => {
      const StyledComponent = styled('div', ({ theme }, { disabled }) => ({
        color: disabled ? theme.spr.text02 : theme.spr.text04,
      }));

      render(
        <TestProvider>
          <StyledComponent data-testid="styled1" />
          <StyledComponent data-testid="styled2" disabled />
        </TestProvider>
      );

      const el1 = document.querySelectorAll('[data-testid=styled1]')[0];
      const style1 = window.getComputedStyle(el1);

      const el2 = document.querySelectorAll('[data-testid=styled2]')[0];
      const style2 = window.getComputedStyle(el2);

      expect(style1.color).toEqual(hex2rgb(theme.spr.text04));
      expect(style2.color).toEqual(hex2rgb(theme.spr.text02));
    });
  });

  describe('with previously `styled` component', () => {
    describe('when `className` prop is set', () => {
      const { theme } = getTestStyleUtils();
      test('renders styled component with all combined class names', () => {
        const StyledComponent = styled('div', 'font-bold w-1/2');

        render(
          <TestProvider>
            <StyledComponent data-testid="styledComponent" className="spr-link" />
          </TestProvider>
        );

        const el = document.querySelectorAll('[data-testid=styledComponent]')[0];
        const style = window.getComputedStyle(el);

        expect(Object.values(el.classList).join(' ')).toMatch(/(?:sw--[a-z]{2,}\s?){3}/);
        expect(style.color).toEqual(hex2rgb(theme.spr.link));
        expect(style.fontWeight).toEqual('700');
        expect(style.width).toEqual('50%');
      });
    });

    describe('when adding styles using `getStyle`', () => {
      test('renders styled component with all combined class names', () => {
        const StyledComponent = styled('div', 'font-hairline w-1/2');

        render(
          <TestProvider>
            <SpaceConsumer>
              {({ getStyle }): ReactElement => (
                <StyledComponent data-testid="styledComponent2" style={getStyle('font-bold')} />
              )}
            </SpaceConsumer>
          </TestProvider>
        );

        const el = document.querySelectorAll('[data-testid=styledComponent2]')[0];
        const style = window.getComputedStyle(el);

        expect(style.fontWeight).toEqual('700');
      });
    });

    describe('when trying to add styles via `css`', () => {
      test('fails to render styled component with all combined class names', () => {
        const StyledComponent = styled('div', 'font-hairline w-1/2');

        render(
          <TestProvider>
            <SpaceConsumer>
              {({ css }): ReactElement => (
                <StyledComponent data-testid="styledComponent2" className={css('font-bold')} />
              )}
            </SpaceConsumer>
          </TestProvider>
        );

        const el = document.querySelectorAll('[data-testid=styledComponent2]')[0];
        const style = window.getComputedStyle(el);

        expect(style.fontWeight).toEqual('100');
      });
    });
  });
});
