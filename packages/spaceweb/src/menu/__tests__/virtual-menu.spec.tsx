import { render, act, getAllByTestId } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import _times from 'lodash/times';
import { createRef } from 'react';
import { MenuItem, NestedMenuProvider, Menu } from '../index';
import { StatefulPopover } from '../../popover';
import { TestProvider } from '../../test-utils/test-provider';
import { MenuProps } from '../types';
import { getItems } from './__fixtures__/menu-items.fixtures';

const setup = (props: MenuProps) => render(<Menu virtual {...props} />);

describe('Virtual-Menu', function () {
  describe('highlightedItem', function () {
    describe('when disableAutoHighlight is true', function () {
      it('should not highlight any item if none of the items are selected.', () => {
        const items = getItems();
        const { getByRole } = setup({ children: items, disableAutoHighlight: true });

        const itemsContainer = getByRole('menu'),
          itemsNodes = getAllByTestId(itemsContainer, 'menu-item');

        _times(itemsNodes.length, index =>
          expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('false')
        );
      });
      it('should not highlight selected item on mount.', () => {
        const items = getItems(5, { 2: { selected: true } });
        const { getByRole } = setup({ children: items, disableAutoHighlight: true });

        const itemsContainer = getByRole('menu'),
          itemsNodes = getAllByTestId(itemsContainer, 'menu-item');

        _times(itemsNodes.length, index => {
          expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('false');
        });
      });
    });
    describe('when disableAutoHighlight is false', function () {
      it('should highlight first item if none of the items are selected.', () => {
        const items = getItems();
        const { getByRole } = setup({ children: items });

        const itemsContainer = getByRole('menu'),
          itemsNodes = getAllByTestId(itemsContainer, 'menu-item');

        _times(itemsNodes.length, index => {
          if (index === 0) {
            expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('true');
            return;
          }
          expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('false');
        });
      });
      it('should highlight selected item on mount.', () => {
        const items = getItems(5, { 2: { selected: true } });
        const { getByRole } = setup({ children: items });

        const itemsContainer = getByRole('menu'),
          itemsNodes = getAllByTestId(itemsContainer, 'menu-item');

        _times(itemsNodes.length, index => {
          if (index === 2) {
            expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('true');
            return;
          }
          expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('false');
        });
      });
      it('should highlight first element if previous highlighted item of the menu unmounts.', () => {
        const items = getItems(3);
        const { getByRole, rerender } = setup({ children: items });

        const itemsContainer = getByRole('menu'),
          itemsNodes = getAllByTestId(itemsContainer, 'menu-item');

        userEvent.keyboard('{ArrowDown}');
        userEvent.keyboard('{ArrowDown}');
        _times(itemsNodes.length, index => {
          if (index === 2) {
            expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('true');
            return;
          }
          expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('false');
        });

        const newItems = getItems(2);
        rerender(<Menu virtual>{newItems}</Menu>);
        const newItemsNodes = getAllByTestId(itemsContainer, 'menu-item');
        expect((newItemsNodes[0] as HTMLElement).dataset.highlighted).toBe('true');
        expect((newItemsNodes[1] as HTMLElement).dataset.highlighted).toBe('false');
      });
    });
    describe('reducer prop', function () {
      it('should call reducer with type INITIALIZE_MENU on initialization.', () => {
        const items = getItems();
        const reducer = jest.fn((type, state) => state);
        setup({ children: items, reducer });

        expect(reducer).toHaveBeenCalledTimes(1);
        // first argument should be type
        expect(reducer.mock.calls[0][0]).toBe('INITIALIZE_MENU');
        // 2nd argument should be state
        expect(reducer.mock.calls[0][1].highlightedItem).toEqual(expect.any(Node));
      });
      it('should set initial state returned by reducer on INTIALIZE_MENU action.', () => {
        const initialItemRef = createRef<HTMLElement>();
        // @ts-ignore
        const items = getItems(6, { 3: { ref: initialItemRef } });
        const reducer = jest.fn((type, nextState) =>
          type === 'INITIALIZE_MENU' ? { highlightedItem: initialItemRef.current } : nextState
        );

        const { getByRole } = setup({ children: items, reducer });
        const itemsContainer = getByRole('menu'),
          itemsNodes = getAllByTestId(itemsContainer, 'menu-item');

        _times(itemsNodes.length, index => {
          if (index === 3) {
            expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('true');
            return;
          }
          expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('false');
        });
      });
    });
    describe('resetMenuHighlightOnMouseLeave prop', function () {
      it('should reset highlighted item when mouse leaves menu component if resetMenuHighlightOnMouseLeave is true', () => {
        const items = getItems();
        const { getByRole } = setup({ children: items, resetMenuHighlightOnMouseLeave: true });

        const itemsContainer = getByRole('menu'),
          itemsNodes = getAllByTestId(itemsContainer, 'menu-item');

        act(() => userEvent.hover(itemsNodes[2]));
        _times(itemsNodes.length, index => {
          if (index === 2) {
            expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('true');
            return;
          }
          expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('false');
        });

        act(() => userEvent.unhover(itemsNodes[2]));
        _times(itemsNodes.length, index => {
          expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('false');
        });
      });
      it('should not reset highlighted item when mouse leaves menu component if resetMenuHighlightOnMouseLeave is false', () => {
        const items = getItems();
        const { getByRole } = setup({ children: items, resetMenuHighlightOnMouseLeave: false });

        const itemsContainer = getByRole('menu'),
          itemsNodes = getAllByTestId(itemsContainer, 'menu-item');

        act(() => userEvent.hover(itemsNodes[2]));
        _times(itemsNodes.length, index => {
          if (index === 2) {
            expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('true');
            return;
          }
          expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('false');
        });

        act(() => userEvent.unhover(itemsContainer));
        _times(itemsNodes.length, index => {
          if (index === 2) {
            expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('true');
            return;
          }
          expect((itemsNodes[index] as HTMLElement).dataset.highlighted).toBe('false');
        });
      });
    });
  });
  describe('Nested Menu', function () {
    const ITEMS = [
      { label: 'Item One' },
      { label: 'Item Two', disabled: true },
      {
        label: 'Item Three',
        items: [
          { label: 'Item 3.1' },
          {
            label: 'Item 3.2',
            items: [{ label: 'Item 3.2.1' }, { label: 'Item 3.2.2' }],
          },
        ],
      },
    ];

    const renderMenu = items => (
      <Menu disableAutoHighlight virtual>
        {items.map(({ label, disabled, items: _items }) => (
          <MenuItem key={label} disabled={disabled} getChildMenu={() => (_items ? renderMenu(_items) : null)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    );

    const renderNestedMenu = () =>
      render(
        <TestProvider>
          <NestedMenuProvider>
            <StatefulPopover autoFocus content={() => renderMenu(ITEMS)}>
              <button type="button">Button</button>
            </StatefulPopover>
          </NestedMenuProvider>
        </TestProvider>
      );
    test('When Nested menus are open, all the subMenu and parentMenu should close on clicking outside.', () => {
      const { getByText } = renderNestedMenu();

      userEvent.click(getByText(/Button/));

      const item_3 = getByText('Item Three');

      // open sub menu
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{ArrowRight}');
      const item_3_1 = getByText('Item 3.1');

      // open sub sub  menu
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{ArrowRight}');
      const item_3_2_1 = getByText('Item 3.2.1');

      userEvent.click(document.body);

      expect(item_3).not.toBeInTheDocument();
      expect(item_3_1).not.toBeInTheDocument();
      expect(item_3_2_1).not.toBeInTheDocument();
    });

    test('Pessing ArrowLeft should close the nested menu', () => {
      const { getByText } = renderNestedMenu();

      userEvent.click(getByText(/Button/));

      // open sub menu
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{ArrowRight}');
      const item_3_1 = getByText('Item 3.1');

      // open sub sub  menu
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{ArrowRight}');
      const item_3_2_1 = getByText('Item 3.2.1');

      userEvent.keyboard('{ArrowLeft}');
      expect(item_3_2_1).not.toBeInTheDocument();
      // should not close the parent nested menu ( 2nd menu )
      expect(item_3_1).toBeInTheDocument();

      userEvent.keyboard('{ArrowLeft}');
      expect(item_3_1).not.toBeInTheDocument();
    });

    test('Spacebar should open nested menu, if that menu item has any child', () => {
      const { queryByText, getByText } = renderNestedMenu();

      userEvent.click(getByText(/Button/));

      // open sub menu
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{ArrowDown}');
      userEvent.keyboard('{space}');
      expect(queryByText('Item 3.1')).toBeTruthy();
    });
  });
});
