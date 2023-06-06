import { render, waitFor, screen } from '@testing-library/react';
import * as React from 'react';

import { TestProvider } from '../../test-utils/test-provider';
import SpacewebProvider from '../SpacewebProvider';
import { Box } from '../../box';
import { getStyleEngine } from '../../styleEngine';
import { useStyle } from '../../style';

/**
 * FIXME: This is not the right way to test this component.
 *
 * WHAT WE SHOULD TEST HERE?
 * - That it calls initFocusVisible from baseui/utils/focusVisible (Browser Only)
 * - That ThemeProvider is rendered and receives the theme and the direction properties
 * - That LocaleProvider is rendered and receives the locale property
 * - That StyleProvider is renderer and receives the debug and styleEngine props
 * - That CustomBaseProvider is rendered and receives overrides, theme (baseui), and
 *   zIndex properties
 * - That it renders LayersManager
 * - And that the children are rendered
 *
 * WHAT WE SHOULD NOT TEST HERE?
 * - Behavior from other components (ThemeProvider, LocaleProvider, etc.), those should
 *   be tested on their corresponding specs.
 *
 * Please see ./LayersManager.spec.tsx to see how to test behavior of non rendering
 * components.
 */

const Iframe = () => {
  const [contentRef, setContentRef] = React.useState<HTMLIFrameElement | null>(null);
  return (
    <iframe data-testid="iframe" title="frame" frameBorder="1" ref={setContentRef}>
      {contentRef?.contentDocument && (
        <TestProvider
          styleEngine={getStyleEngine(contentRef?.contentDocument)}
          ownerDocument={contentRef?.contentDocument}
        >
          <Box data-testid="el" className="spr-support-success-text spr-ui-01">
            This iframe is styled
          </Box>
        </TestProvider>
      )}
    </iframe>
  );
};
const renderTestProvider = (props: Partial<React.ComponentProps<typeof TestProvider>> = {}) => {
  const { children = null, ...restProps } = props;
  const results = render(<TestProvider {...restProps}>{children}</TestProvider>);
  return {
    ...results,
    rerender: (newProps?: Partial<React.ComponentProps<typeof TestProvider>>) =>
      results.rerender(
        <TestProvider {...restProps} {...newProps}>
          {children}
        </TestProvider>
      ),
  };
};

describe('SpacewebProvider', function () {
  describe('Number of children', () => {
    it('should render only one child any instance', () => {
      const { getByTestId } = render(
        <div data-testid="container">
          <TestProvider>Child</TestProvider>
        </div>
      );
      const container = getByTestId('container');

      expect(container.children.length).toBe(1);
    });

    it('should render one child for each instances, when multiple providers are rendered', () => {
      const { getByTestId } = render(
        <div data-testid="container-1">
          <TestProvider>Child 1</TestProvider>
        </div>
      );

      render(
        <div data-testid="container-2">
          <TestProvider>Child 2</TestProvider>
        </div>
      );

      const container1 = getByTestId('container-1');
      const container2 = getByTestId('container-2');

      expect(container1.children.length).toBe(1);
      expect(container2.children.length).toBe(1);
    });

    it('should render child component', () => {
      const { getByText } = renderTestProvider({ children: 'Child' });
      getByText('Child');
    });
  });
  describe('custom document tree', function () {
    test('render SpacewebProvider in an iframe', async () => {
      const { getByTestId } = render(<Iframe />);
      const x = await waitFor(() => getByTestId('el'));
      expect(x.className).toContain('sw--');
      // todo: figure out how to extract styles
      // console.log('wow keys', x.style.color, x.style.backgroundColor);
    });
  });
  describe('direction', function () {
    test('if direction is not passed in prop, app should be rendered in ltr direction', () => {
      const RenderDirection = () => {
        const { direction } = useStyle();
        return <span>direction: {direction}</span>;
      };
      renderTestProvider({ children: <RenderDirection /> });
      screen.getByText('direction: ltr');
    });
    test('if direction is passed in prop, app should be rendered in the same direction.', () => {
      const RenderDirection = () => {
        const { direction } = useStyle();
        return <span>direction: {direction}</span>;
      };
      const { rerender } = renderTestProvider({ children: <RenderDirection />, direction: 'rtl' });
      screen.getByText('direction: rtl');

      rerender({ direction: 'ltr' });
      screen.getByText('direction: ltr');
    });
    test('if multiple SpacewebProvider are rendered then, it should derive direction from parent.', () => {
      const RenderDirection = () => {
        const { direction } = useStyle();
        return <span>direction: {direction}</span>;
      };
      renderTestProvider({
        children: (
          <TestProvider>
            <RenderDirection />
          </TestProvider>
        ),
        direction: 'rtl',
      });

      screen.getByText('direction: rtl');
    });
    test('if SpacewebProvider has direction prop, then it should not derive direction from parent.', () => {
      const RenderDirection = () => {
        const { direction } = useStyle();
        return <span>direction: {direction}</span>;
      };
      renderTestProvider({
        children: (
          <TestProvider direction="ltr">
            <RenderDirection />
          </TestProvider>
        ),
        direction: 'rtl',
      });

      screen.getByText('direction: ltr');
    });
  });
});
