import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { StatefulTooltip } from '../index';
import { getCSSFromEl, getTestStyleUtils, TestProvider } from '../../test-utils/test-provider';
import { Input } from '../../input';
import { Button } from '../../button';

const renderStatefulTooltip = (props?) =>
  render(
    <TestProvider>
      <StatefulTooltip content="test-content" {...props}>
        <Button autoFocus>test-button</Button>
      </StatefulTooltip>
    </TestProvider>
  );

const wait = async (interval: number): Promise<void> => new Promise(resolve => setTimeout(resolve, interval));

describe('Tooltip', () => {
  test('isOpen: if true, sets tooltip to open', async () => {
    const { findByText } = renderStatefulTooltip({ isOpen: true });

    const TooltipContent = await findByText('test-content');
    expect(TooltipContent).toBeDefined();
  });

  test('label: renders Label on top of tooltip content', async () => {
    const { findByText } = renderStatefulTooltip({ isOpen: true, label: 'test-label' });

    const TooltipLabel = await findByText('test-label');
    expect(TooltipLabel).toBeDefined();
  });

  describe('triggerType', () => {
    test('hover', async () => {
      const { getByRole, findByText } = renderStatefulTooltip({ triggerType: 'hover' });
      const Children = getByRole('button');

      userEvent.hover(Children);

      const TooltipContent = await findByText('test-content');
      expect(TooltipContent).toBeDefined();
    });

    test('click', async () => {
      const { getByRole, findByText } = renderStatefulTooltip({ triggerType: 'click' });
      const Children = getByRole('button');

      userEvent.click(Children);

      const TooltipContent = await findByText('test-content');
      expect(TooltipContent).toBeDefined();
    });
  });

  describe('event handlers', () => {
    test('onOpen', () => {
      const onOpen = jest.fn();
      const { getByRole } = renderStatefulTooltip({ onOpen });
      const Children = getByRole('button');

      fireEvent.mouseEnter(Children);

      expect(onOpen).toBeCalledTimes(1);
    });

    test('onClose', async () => {
      const onClose = jest.fn();
      const { getByRole } = renderStatefulTooltip({ onClose });
      const Children = getByRole('button');

      fireEvent.mouseLeave(Children);

      await waitFor(() => {
        expect(onClose).toBeCalledTimes(1);
      });
    });

    test('onMouseEnter', async () => {
      const onMouseEnter = jest.fn();
      const { getByRole } = renderStatefulTooltip({ onMouseEnterDelay: 500, onMouseEnter });
      const Children = getByRole('button');

      fireEvent.mouseEnter(Children);

      await wait(200);
      expect(onMouseEnter).toBeCalledTimes(0);

      await wait(500);
      expect(onMouseEnter).toBeCalledTimes(1);
    });

    test('onMouseLeave', async () => {
      const onMouseLeave = jest.fn();
      const { getByRole } = renderStatefulTooltip({ onMouseLeaveDelay: 500, onMouseLeave });
      const Children = getByRole('button');

      fireEvent.mouseLeave(Children);

      await wait(200);
      expect(onMouseLeave).toBeCalledTimes(0);

      await wait(500);
      expect(onMouseLeave).toBeCalledTimes(1);
    });

    test('onBlur', async () => {
      const onBlur = jest.fn();
      const { getByRole } = renderStatefulTooltip({ onBlur });
      const Children = getByRole('button');

      Children.blur();

      expect(onBlur).toBeCalledTimes(1);
    });

    test('onFocus', () => {
      const onFocus = jest.fn();
      const { getByRole } = renderStatefulTooltip({ onFocus });
      const Children = getByRole('button');

      Children.focus();

      expect(onFocus).toBeCalledTimes(1);
    });
  });

  describe('size', () => {
    const { theme, px2rem } = getTestStyleUtils();

    test('sm', () => {
      const { getByText } = renderStatefulTooltip({ size: 'sm', isOpen: true });

      const Inner = getByText('test-content');
      const InnerCSS = getCSSFromEl(Inner);

      expect(InnerCSS.fontSize).toEqual(theme.typography.l1.fontSize);
      expect(InnerCSS.lineHeight).toEqual(theme.typography.l1.lineHeight);
      expect(InnerCSS.fontWeight).toEqual(theme.fontWeight.medium);
    });

    test('md', () => {
      const { getByText } = renderStatefulTooltip({ size: 'md', isOpen: true });

      const Inner = getByText('test-content');
      const InnerCSS = getCSSFromEl(Inner);

      expect(InnerCSS.fontSize).toEqual(theme.typography.bs3.fontSize);
      expect(InnerCSS.lineHeight).toEqual(theme.typography.bs3.lineHeight);
      expect(InnerCSS.fontWeight).toEqual(theme.fontWeight.normal);
      expect(InnerCSS.maxWidth).toEqual(px2rem(180));
    });

    test('lg', () => {
      const { getByText } = renderStatefulTooltip({ size: 'lg', isOpen: true });

      const Inner = getByText('test-content');
      const InnerCSS = getCSSFromEl(Inner);

      expect(InnerCSS.fontSize).toEqual(theme.typography.bs3.fontSize);
      expect(InnerCSS.lineHeight).toEqual(theme.typography.bs3.lineHeight);
      expect(InnerCSS.fontWeight).toEqual(theme.fontWeight.normal);
      expect(InnerCSS.maxWidth).toEqual(px2rem(240));
    });
  });

  describe('keyboard interaction', () => {
    test('Escape closes the tooltip', async () => {
      const { queryByText, getByRole, findByText } = renderStatefulTooltip();
      const Children = getByRole('button');

      userEvent.hover(Children);

      const TooltipContent = await findByText('test-content');
      expect(TooltipContent).toBeDefined();

      userEvent.keyboard('{Escape}');

      expect(queryByText('test-content')).toBeNull();
    });

    test('Enter key opens tooltip when triggerType is click', async () => {
      const { getByRole, findByText } = renderStatefulTooltip({
        triggerType: 'click',
      });
      const Children = getByRole('button');

      userEvent.keyboard('{Tab}');
      expect(Children).toHaveFocus();

      userEvent.keyboard('{Enter}');

      const TooltipContent = await findByText('test-content');
      expect(TooltipContent).toBeDefined();
    });
  });
});
