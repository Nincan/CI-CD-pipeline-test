import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { styled } from '../../style';
import { useOverrides } from '../useOverrides';

import { getTestStyleUtils, TestProvider } from '../../test-utils/test-provider';
import { hex2rgb } from '../../helpers';

const DummyStyled = styled('div');

describe('useOverrides', function() {
  describe('style function of override object', function() {
    const { theme } = getTestStyleUtils();
    it('2nd arg should be props passed to styled component', () => {
      const { result } = renderHook(
        () =>
          useOverrides<{ $color?: string }, unknown>({ style: (_, { $color }) => ({ color: $color }) }, DummyStyled),
        { wrapper: TestProvider }
      );

      // checking that styles are applied
      const [Component, componentProps] = result.current;
      const { getByTestId } = render(
        <TestProvider>
          <Component data-testid="dummy-styled" $color="red" {...componentProps} />
        </TestProvider>
      );
      const styledComp = getByTestId('dummy-styled');
      const style = window.getComputedStyle(styledComp);
      expect(style.color).toBe('red');
    });

    it('1st arg should be style utils including theme', () => {
      const { result } = renderHook(
        () => useOverrides<{}, unknown>({ style: ({ theme }) => ({ color: theme.spr.ui04 }) }, DummyStyled),
        { wrapper: TestProvider }
      );

      // checking that styles are applied
      const [Component, componentProps] = result.current;
      const { getByTestId } = render(
        <TestProvider>
          <Component data-testid="dummy-styled" {...componentProps} />
        </TestProvider>
      );
      const styledComp = getByTestId('dummy-styled');
      const style = window.getComputedStyle(styledComp);
      expect(style.color).toBe(hex2rgb(theme.spr.ui04));
    });
  });
});
