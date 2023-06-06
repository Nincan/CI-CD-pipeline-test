import { useState } from 'react';
import { cleanup, render, act, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Stack, StackItem, StackProps } from '../index';

import { TestProvider, getCSSByTestId, setupBreakpoints, getCSSFromEl } from '../../test-utils/test-provider';

const renderStack = (direction = 'vertical' as StackProps['direction'], gap = 2, rest = {}) =>
  render(
    <TestProvider>
      <Stack direction={direction} gap={gap} {...rest}>
        <span>Hello</span>
        <span>Hello2</span>
      </Stack>
    </TestProvider>
  );

describe('stack', function() {
  beforeAll(setupBreakpoints);
  afterEach(cleanup);

  describe('vertical stack', function() {
    afterEach(cleanup);
    test('flex direction column', () => {
      renderStack();
      const css = getCSSByTestId('stack');
      expect(css.display).toBe('flex');
      expect(css.flexDirection).toBe('column');
    });
    test('children spacing: marginTop', () => {
      const { getByText } = renderStack();
      const css1 = getCSSFromEl(getByText('Hello').closest('[data-testid="stack-item"]') as Element);
      const css2 = getCSSFromEl(getByText('Hello2').closest('[data-testid="stack-item"]') as Element);
      expect(css1.marginTop).toBeFalsy();
      expect(css2.marginTop).toBe('0.8rem');
    });
  });
  describe('horizontal stack', function() {
    afterEach(cleanup);
    test('flex direction row', () => {
      renderStack('horizontal');
      const css = getCSSByTestId('stack');
      expect(css.display).toBe('flex');
      expect(css.flexDirection).toBe('row');
    });
    test('children spacing: marginLeft', () => {
      const { getByText } = renderStack('horizontal');
      const css1 = getCSSFromEl(getByText('Hello').closest('[data-testid="stack-item"]') as Element);
      const css2 = getCSSFromEl(getByText('Hello2').closest('[data-testid="stack-item"]') as Element);
      expect(css1.marginLeft).toBeFalsy();
      expect(css2.marginLeft).toBe('0.8rem');
    });
  });
  describe('shrink', function() {
    afterEach(cleanup);
    test('stack item takes width of its children', () => {
      const { getByText } = renderStack('horizontal', 2, { shrink: true });
      const css1 = getCSSFromEl(getByText('Hello').closest('[data-testid="stack-item"]') as Element);
      expect(css1.flexGrow).toBe('0');
    });
    test('custom shrink to 2nd child using StackItem', () => {
      const { getByText } = render(
        <TestProvider>
          <Stack direction="horizontal" gap={2}>
            <span>Hello</span>
            <StackItem shrink>
              <span>Hello2</span>
            </StackItem>
          </Stack>
        </TestProvider>
      );
      const css1 = getCSSFromEl(getByText('Hello').closest('[data-testid="stack-item"]') as Element);
      const css2 = getCSSFromEl(getByText('Hello2').closest('[data-testid="stack-item"]') as Element);
      expect(css1.flexGrow).toBe('1');
      expect(css2.flexGrow).toBe('0');
    });
  });

  describe('Stack with optionally rendered non-StackItem children', () => {
    afterEach(cleanup);

    test('When optionally rendered child is rendered, StackItem component corresponding to it should be rendered', () => {
      const { getAllByTestId } = render(
        <TestProvider>
          <Stack direction="vertical" gap={2}>
            <span>Hello</span>
            {true ? <span>Hello2</span> : null}
          </Stack>
        </TestProvider>
      );

      expect(getAllByTestId('stack-item').length).toBe(2);
    });

    test('When optionally rendered child is not rendered, StackItem component corresponding to it should not be rendered', () => {
      const { getAllByTestId } = render(
        <TestProvider>
          <Stack direction="vertical" gap={2}>
            <span>Hello</span>
            {false ? <span>Hello2</span> : null}
          </Stack>
        </TestProvider>
      );

      expect(getAllByTestId('stack-item').length).toBe(1);
    });

    test('When optionally rendered first child is not rendered, then second child should not have margin top', () => {
      const Example = () => {
        const [show, setShow] = useState(true);
        return (
          <>
            <button onClick={() => setShow(s => !s)}>Click Me</button>
            <Stack direction="vertical" gap={2}>
              {show ? <span>Hello1</span> : null}
              <span>Hello2</span>
              <span>Hello3</span>
            </Stack>
          </>
        );
      };
      const { getByText, queryByText } = render(
        <TestProvider>
          <Example />
        </TestProvider>
      );
      const css1 = getCSSFromEl(getByText('Hello1').closest('[data-testid="stack-item"]') as Element);
      const css2 = getCSSFromEl(getByText('Hello2').closest('[data-testid="stack-item"]') as Element);
      const css3 = getCSSFromEl(getByText('Hello3').closest('[data-testid="stack-item"]') as Element);
      expect(css1.marginTop).toBeFalsy();
      expect(css2.marginTop).toBe('0.8rem');
      expect(css3.marginTop).toBe('0.8rem');
      fireEvent.click(getByText('Click Me'));

      const updatedCss2 = getCSSFromEl(getByText('Hello2').closest('[data-testid="stack-item"]') as Element);
      const updatedCss3 = getCSSFromEl(getByText('Hello3').closest('[data-testid="stack-item"]') as Element);
      expect(queryByText('Hello1')).toBeNull();
      expect(updatedCss2.marginTop).toBeFalsy();
      expect(updatedCss3.marginTop).toBe('0.8rem');
    });
  });

  describe.skip('responsive stack', function() {
    afterEach(cleanup);
    test('sm:horizontal & gap 4', () => {
      act(() => window.resizeTo(200, 1200));
      const { getByText } = renderStack('vertical', 2, {
        sm: { direction: 'horizontal', gap: 4 },
      });
      const css = getCSSByTestId('stack');
      const css2 = getCSSFromEl(getByText('Hello2').closest('[data-testid="stack-item"]') as Element);
      console.log(css2.marginTop, css.flexDirection, css.width);
    });
  });
});
