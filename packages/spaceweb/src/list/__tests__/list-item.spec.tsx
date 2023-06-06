import { fireEvent, render, RenderResult, waitFor } from '@testing-library/react';
import { TestProvider, getCSSByTestId } from '../../test-utils/test-provider';

import ListItem from '../list-item';
import { ListItemProps } from '../types';
import userEvent from '@testing-library/user-event';

const setup = (props?: Omit<ListItemProps, 'children'>): RenderResult =>
  render(
    <TestProvider>
      <ListItem data-testid="list-item" {...props}>
        Item
      </ListItem>
    </TestProvider>
  );

describe('ListItem', function () {
  it('should render all children.', () => {
    const { getByText } = setup();
    getByText('Item'); // throws error if text is not found
  });

  it('should check if tooltip is be visible when tooltipContent is passed.', async () => {
    const { getByText } = setup({ tooltipContent: 'tooltip' });
    await userEvent.hover(getByText('Item'));
    await waitFor(() => expect(getByText('tooltip')).toBeInTheDocument());
  });

  describe('button props', function () {
    it('should not have hover styles when button prop is not true.', () => {
      const { getByTestId } = setup({ button: false });
      const listItem = getByTestId('list-item');
      fireEvent.mouseEnter(listItem);
      const style = window.getComputedStyle(listItem);

      expect(style.cursor).not.toBe('pointer');
    });
    it('should have hover styles when button prop is true.', () => {
      const { getByTestId } = setup({ button: true });
      const listItem = getByTestId('list-item');
      fireEvent.mouseEnter(listItem);
      const style = window.getComputedStyle(listItem);

      expect(style.cursor).toBe('pointer');
    });
  });

  describe('when overrides is provided', function () {
    it('should render with styles provided.', () => {
      setup({ overrides: { Root: { style: { color: 'red' } } } });
      const style = getCSSByTestId('list-item');

      expect(style.color).toBe('red');
    });
  });
});
