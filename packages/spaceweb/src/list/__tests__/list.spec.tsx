import { render, RenderResult, screen } from '@testing-library/react';
import { TestProvider, getCSSByTestId } from '../../test-utils/test-provider';

import List from '../list';
import ListItem from '../list-item';
import { ListProps } from '../types';
import * as React from 'react';

const setup = (props?: Omit<ListProps, 'children'>): RenderResult =>
  render(
    <TestProvider>
      <List data-testid="list" {...props}>
        <div>Item1</div>
        <div>Item2</div>
      </List>
    </TestProvider>
  );

const ITEMS = [...new Array(1500)].map((_, index) => <ListItem data-testid="list-item" key={index}>item number: {index + 1}</ListItem>)

describe('List', function() {
  it('should render all children.', () => {
    const { getByText } = setup();
    getByText('Item1'); // throws error if text is not found
    getByText('Item2'); // throws error if text is not found
  });

  describe('when overrides is provided', function() {
    it('should render with styles provided.', () => {
      setup({
        overrides: { Root: { style: { color: 'red', paddingTop: 0, paddingBottom: 0 } } },
      });
      const style = getCSSByTestId('list');

      expect(style.color).toBe('red');
      expect(style.paddingTop).toBe('0px');
      expect(style.paddingBottom).toBe('0px');
    });
  });
});

describe('Virtualized List', () => {
  test('Virtualized Element should not be rendered when virtual is set', () => {
      render(
          <List virtual={true} style={{ height: '500px'}} className={'border border-solid spr-border-01 overflow-auto'}>
            {ITEMS}
          </List>
      )
      expect(screen.queryByText('item number: 1')).toBeInTheDocument() //first element of the list
      expect(screen.queryByText('item number: 1500')).not.toBeInTheDocument() //last element of the list
      expect(screen.queryAllByTestId('list-item').length).not.toBe(ITEMS.length) // only visible elements are rendered
  })

  test('Document will contain all the elements when virtual is not set', () => {
    render(
        <List style={{ height: '500px'}} className={'border border-solid spr-border-01 overflow-auto'}>
          {ITEMS}
        </List>
    )
    expect(screen.queryByText('item number: 1')).toBeInTheDocument() //first element of the list
    expect(screen.queryByText('item number: 1500')).toBeInTheDocument() //last element of the list
    expect(screen.queryAllByTestId('list-item').length).toBe(ITEMS.length) //all elements are rendered
  })

  test('overrides should work with virtualization.', () => {
    setup({
      virtual: true,
      overrides: { Root: { style: { color: 'red', paddingTop: 0, paddingBottom: 0 } } },
    });

    const style = getCSSByTestId('list');

    expect(style.color).toBe('red');
    expect(style.paddingTop).toBe('0px');
    expect(style.paddingBottom).toBe('0px');
  });
})