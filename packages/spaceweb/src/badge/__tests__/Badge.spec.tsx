import { render } from '@testing-library/react';
import Badge from '../badge';
import { Box } from '../../box';
import { getCSSFromEl, getTestStyleUtils, TestProvider } from '../../test-utils/test-provider';
import { hex2rgb } from '../../helpers';

const renderBadge = (props?) =>
  render(
    <TestProvider>
      <Badge {...props}>
        <Box data-testid="x" className="h-10 w-10" />
      </Badge>
    </TestProvider>
  );

const getRenderedRoot = () => window.document.body.querySelector('[data-spaceweb="badge"]');

describe('Badge', () => {
  test('content', () => {
    const { getByText } = renderBadge({ content: '1' });
    const Anchor = getByText('1');

    expect(Anchor).toBeDefined();
  });

  describe('position', () => {
    test('horizontalPosition: right, verticalPosition: bottom', () => {
      const { container } = renderBadge({ horizontalPosition: 'right', verticalPosition: 'bottom' });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.transform).toEqual('translate(calc(100% - min(1rem, 50%)), 50%)');
    });

    test('horizontalPosition: right, verticalPosition: top', () => {
      const { container } = renderBadge({ horizontalPosition: 'right', verticalPosition: 'top' });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.transform).toEqual('translate(calc(100% - min(1rem, 50%)), -50%)');
    });

    test('horizontalPosition: left, verticalPosition: bottom', () => {
      const { container } = renderBadge({ horizontalPosition: 'left', verticalPosition: 'bottom' });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.transform).toEqual('translate(calc(-100% + min(1rem, 50%)), 50%)');
    });

    test('horizontalPosition: left, verticalPosition: top', () => {
      const { container } = renderBadge({ horizontalPosition: 'left', verticalPosition: 'top' });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.transform).toEqual('translate(calc(-100% + min(1rem, 50%)), -50%)');
    });
  });

  describe('overlap', () => {
    test('rectangle', () => {
      const { container } = renderBadge({ overlap: 'rectangle' });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.right).toEqual('0px');
      expect(AnchorCSS.bottom).toEqual('0px');
    });

    test('circle', () => {
      const { container } = renderBadge({ overlap: 'circle' });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.right).toEqual('14%');
      expect(AnchorCSS.bottom).toEqual('14%');
    });
  });

  describe('intent', () => {
    const { theme } = getTestStyleUtils();

    test('success', () => {
      const { container } = renderBadge({ intent: 'success' });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.backgroundColor).toEqual(hex2rgb(theme.spr.supportSuccess));
    });

    test('warning', () => {
      const { container } = renderBadge({ intent: 'warning' });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.backgroundColor).toEqual(hex2rgb(theme.spr.supportWarning));
    });

    test('error', () => {
      const { container } = renderBadge({ intent: 'error' });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.backgroundColor).toEqual(hex2rgb(theme.spr.supportError));
    });
  });

  describe('size', () => {
    test('sm', () => {
      const { container } = renderBadge({ size: 'sm' });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.paddingLeft).toEqual('2px');
      expect(AnchorCSS.paddingRight).toEqual('2px');
      expect(AnchorCSS.minWidth).toEqual('35%');
      expect(AnchorCSS.height).toEqual('35%');
    });

    test('lg', () => {
      const { container } = renderBadge({ size: 'lg' });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.paddingLeft).toEqual('6px');
      expect(AnchorCSS.paddingRight).toEqual('6px');
      expect(AnchorCSS.minWidth).toEqual('50%');
      expect(AnchorCSS.height).toEqual('50%');
    });
  });

  describe('overrides', () => {
    const { theme } = getTestStyleUtils();

    test('anchor', () => {
      const { container } = renderBadge({ overrides: { Anchor: { style: 'spr-highlight' } } });
      const Anchor = container.querySelector('span');
      const AnchorCSS = getCSSFromEl(Anchor);

      expect(AnchorCSS.backgroundColor).toEqual(theme.spr.highlight);
    });

    test('root', () => {
      renderBadge({ overrides: { Root: { style: 'spr-highlight' } } });
      const Root = getRenderedRoot();
      const RootCSS = getCSSFromEl(Root);

      expect(RootCSS.backgroundColor).toEqual(theme.spr.highlight);
    });
  });
});
