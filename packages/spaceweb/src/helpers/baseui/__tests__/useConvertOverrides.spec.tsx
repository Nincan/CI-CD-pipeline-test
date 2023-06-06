import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { ReactElement } from 'react';
import * as React from 'react';
import { StyleObject } from '../../../types';
// using baseui's styled because converted overrides are meant to be processed by baseui.
import { styled } from 'baseui';

import { OverrideObject } from '../../../overrides/types';
import { useConvertOverrides } from '../useConvertOverrides';

import { getTestStyleUtils, TestProvider } from '../../../test-utils/test-provider';
import { hex2rgb } from '../..';

const DummyStyled = styled<'div', any>('div', {});

const wrapper = ({ children }): ReactElement => <TestProvider>{children}</TestProvider>;

type MockOverrideObject<P = {}> = {
  props?: any;
  style: (props?: { $theme?: any } & P) => StyleObject;
  comoponent?: React.ComponentType;
};

describe('useConvertOverrides', function () {
  describe('merge overrides object', function () {
    it('should merge styles of the same component only.', () => {
      const { result } = renderHook(() =>
        useConvertOverrides(
          { A: { style: { color: 'red', padding: 0 } }, B: { style: { color: 'blue' } } },
          { A: { style: { color: 'green', display: 'flex' } } }
        )
      );

      const overridesA = result.current.A as MockOverrideObject;
      const overridesB = result.current.B as MockOverrideObject;

      expect(overridesA.style()).toEqual({ color: 'green', padding: 0, display: 'flex' });
      expect(overridesB.style()).toEqual({ color: 'blue' });
    });
    it('when component override is not an object then it should convert it to object.', () => {
      const ComponentA = (): React.ReactElement => <div />;

      const { result: result1 } = renderHook(() => useConvertOverrides({ A: ComponentA }));
      expect(result1.current).toMatchObject({ A: { component: ComponentA } });

      const { result: result2 } = renderHook(() =>
        useConvertOverrides({ A: ComponentA }, { A: { props: { display: 'none' } } })
      );
      expect(result2.current).toMatchObject({ A: { component: ComponentA, props: { display: 'none' } } });
    });
    it('should merge styles returned by style function and style object', () => {
      const { result } = renderHook(() =>
        useConvertOverrides(
          { A: { style: (): StyleObject => ({ color: 'red', padding: 0 }) } },
          { A: { style: { color: 'green', display: 'flex' } } }
        )
      );

      const mergedOverride = result.current;
      expect(mergedOverride).toEqual({ A: { style: expect.any(Function) } });
      const overridesA = result.current.A as MockOverrideObject;
      expect(overridesA.style()).toEqual({ color: 'green', padding: 0, display: 'flex' });
    });
    it('should merge styles based on prop provided to style function', () => {
      const { result } = renderHook(() =>
        useConvertOverrides<{ $color?: string }>(
          { A: { style: { color: 'red', padding: 0 } } },
          { A: { style: (utils, { $color }): StyleObject => ({ color: $color, display: 'flex' }) } }
        )
      );

      const mergedOverride = result.current;
      expect(mergedOverride).toEqual({ A: { style: expect.any(Function) } });

      const overridesA = result.current.A as MockOverrideObject<{ $color: string }>;
      expect(overridesA.style({ $color: 'green' })).toEqual({ color: 'green', padding: 0, display: 'flex' });
      expect(overridesA.style({ $color: 'blue' })).toEqual({ color: 'blue', padding: 0, display: 'flex' });
    });
  });

  describe('Convert Spaceweb Overrides to baseui Overrides', function () {
    const { theme } = getTestStyleUtils();
    it('1st arg should be style utils including theme', () => {
      const { result } = renderHook(
        () =>
          useConvertOverrides<{}>(
            // Keeping css and px2rem to check types
            { DummyStyled: { style: ({ theme: _theme, css, px2rem }): StyleObject => ({ color: _theme.spr.ui04 }) } },
            { DummyStyled: { style: ({ theme: _theme }): StyleObject => ({ backgroundColor: _theme.spr.ui01 }) } }
          ),
        { wrapper }
      );

      // checking that styles are applied
      const dummyStyledOverride = result.current.DummyStyled as OverrideObject<{}>;
      const componentProps = { $style: dummyStyledOverride.style }; // in our case this is handled by getOverrides/useOverrides
      const { getByTestId } = render(
        <TestProvider>
          <DummyStyled data-testid="dummy-styled" {...componentProps} />
        </TestProvider>
      );

      const styledComp = getByTestId('dummy-styled');
      const style = window.getComputedStyle(styledComp);

      expect(style.color).toBe(hex2rgb(theme.spr.ui04));
      expect(style.backgroundColor).toBe(hex2rgb(theme.spr.ui01));
    });
    it('2nd arg should be props passed to styled component', () => {
      const { result } = renderHook(
        () =>
          useConvertOverrides<{ $color?: string }>({
            DummyStyled: { style: (_, { $color }): StyleObject => ({ color: $color }) },
          }),
        { wrapper }
      );

      // checking that styles are applied
      const dummyStyledOverride = result.current.DummyStyled as OverrideObject<{ $color?: string }>;
      const componentProps = { $style: dummyStyledOverride.style }; // in our case this is handled by getOverrides/useOverrides
      const { getByTestId } = render(
        <TestProvider>
          <DummyStyled data-testid="dummy-styled" $color="red" {...componentProps} />
        </TestProvider>
      );
      const styledComp = getByTestId('dummy-styled');
      const style = window.getComputedStyle(styledComp);

      expect(style.color).toBe('red');
    });
  });

  describe('Memoization of source overrides object', function () {
    // TODO: run test once theme object of useStyle is memoized
    it.skip('should memoize override objects based on dependency list', () => {
      const { result, rerender } = renderHook(() =>
        useConvertOverrides(
          { A: { style: { color: 'red', padding: 0 } } },
          { A: { style: { color: 'green', display: 'flex' } } }
        )
      );

      const prevResult = result.current;

      expect(prevResult).toEqual({ A: { style: { color: 'green', padding: 0, display: 'flex' } } });

      rerender();

      expect(result.current).toBe(prevResult);
    });
  });

  describe('convert any Styles to style callback', function () {
    it('should convert atomic classes to StyleObject and merge.', () => {
      const { result } = renderHook(() => useConvertOverrides({ A: { style: 'mt-1' } }, { A: { style: 'mb-1' } }));

      const overridesA = result.current.A as MockOverrideObject;
      expect(overridesA.style()).toEqual({ marginTop: '0.4rem', marginBottom: '0.4rem' });
    });
    it('should accept array of StyleAtoms', () => {
      const { result } = renderHook(() =>
        useConvertOverrides(
          { A: { style: ['pt-1', { paddingBottom: '1rem' }, ({ theme }) => ({ paddingBottom: theme.padding['1'] })] } },
          { A: { style: [{ paddingTop: '1rem' }] } }
        )
      );

      const overridesA = result.current.A as MockOverrideObject;
      expect(overridesA.style()).toEqual({ paddingTop: '1rem', paddingBottom: '0.4rem' });
    });
    it('should convert rule function', () => {
      const { result } = renderHook(() =>
        useConvertOverrides(
          { A: { style: 'pb-1' } },
          { A: { style: ['pt-1', (_, { $shouldOverride }) => $shouldOverride && 'pb-2'] } }
        )
      );

      const overridesA = result.current.A as MockOverrideObject<{ $shouldOverride: boolean }>;
      expect(overridesA.style({ $shouldOverride: false })).toEqual({
        paddingTop: '0.4rem',
        paddingBottom: '0.4rem',
      });
      expect(overridesA.style({ $shouldOverride: true })).toEqual({
        paddingTop: '0.4rem',
        paddingBottom: '0.8rem',
      });
    });
  });
});
