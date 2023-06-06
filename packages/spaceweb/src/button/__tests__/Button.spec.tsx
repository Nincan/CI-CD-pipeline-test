import { cleanup, render, fireEvent } from '@testing-library/react';

import Button from '../Button';
import { hex2rgb } from '../../helpers';
import { TestProvider, getCSSByTestId, getTestStyleUtils } from '../../test-utils/test-provider';

describe('Button', () => {
  afterEach(cleanup);
  const { theme, px2rem } = getTestStyleUtils();

  test('onClick', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <TestProvider>
        <Button onClick={onClick}>Hello</Button>
      </TestProvider>
    );
    fireEvent.click(getByTestId('button'));
    expect(onClick).toHaveBeenCalled();
  });
  test('fullWidth', () => {
    render(
      <TestProvider>
        <Button fullWidth>Hello</Button>
      </TestProvider>
    );
    const buttonCss = getCSSByTestId('button');
    expect(buttonCss.width).toEqual('100%');
  });
  describe('size', () => {
    const { theme } = getTestStyleUtils();
    test('sm', () => {
      render(
        <TestProvider>
          <Button size="sm">Hello</Button>
        </TestProvider>
      );
      const buttonCss = getCSSByTestId('button');
      expect(buttonCss.minWidth).toEqual(theme.button.sizeSm.minWidth);
    });
    test('md', () => {
      render(
        <TestProvider>
          <Button size="md">Hello</Button>
        </TestProvider>
      );
      const buttonCss = getCSSByTestId('button');
      expect(buttonCss.minWidth).toEqual(theme.button.sizeMd.minWidth);
    });
    test('lg', () => {
      render(
        <TestProvider>
          <Button size="lg">Hello</Button>
        </TestProvider>
      );
      const buttonCss = getCSSByTestId('button');
      expect(buttonCss.minWidth).toEqual(theme.button.sizeLg.minWidth);
    });
  });
  describe('variant', () => {
    afterEach(cleanup);
    test('primary', () => {
      render(
        <TestProvider>
          <Button>Hello</Button>
        </TestProvider>
      );
      const buttonCss = getCSSByTestId('button');
      expect(buttonCss.backgroundColor).toEqual(hex2rgb(theme.spr.interactive01));
    });
    test('tertiary', () => {
      render(
        <TestProvider>
          <Button variant="tertiary">Hello</Button>
        </TestProvider>
      );
      const buttonCss = getCSSByTestId('button');
      expect(buttonCss.backgroundColor).toEqual(hex2rgb(theme.spr.ui01));
      expect(buttonCss.color).toEqual(hex2rgb(theme.spr.interactive01));
    });
  });
  describe('shape', () => {
    afterEach(cleanup);
    const { theme } = getTestStyleUtils();
    test('default', () => {
      render(
        <TestProvider>
          <Button>Hello</Button>
        </TestProvider>
      );
      const buttonCss = getCSSByTestId('button');
      expect(buttonCss.borderTopRightRadius).toEqual(theme.button.borderRadius);
      expect(buttonCss.borderBottomLeftRadius).toEqual(theme.button.borderRadius);
    });
    test('round', () => {
      render(
        <TestProvider>
          <Button shape="round">Hello</Button>
        </TestProvider>
      );
      const buttonCss = getCSSByTestId('button');
      expect(buttonCss.borderTopRightRadius).toEqual(theme.borderRadius.full);
      expect(buttonCss.borderBottomLeftRadius).toEqual(theme.borderRadius.full);
    });
    test('square', () => {
      render(
        <TestProvider>
          <Button shape="square">Hello</Button>
        </TestProvider>
      );
      const buttonCss = getCSSByTestId('button');
      expect(buttonCss.borderTopRightRadius).toEqual(theme.borderRadius['0']);
      expect(buttonCss.borderBottomLeftRadius).toEqual(theme.borderRadius['0']);
    });
    test('pill', () => {
      render(
        <TestProvider>
          <Button shape="pill">Hello</Button>
        </TestProvider>
      );
      const buttonCss = getCSSByTestId('button');
      const pillRadius = px2rem(theme.borderRadius['16']);
      expect(buttonCss.borderTopRightRadius).toEqual(pillRadius);
      expect(buttonCss.borderBottomLeftRadius).toEqual(pillRadius);
      expect(buttonCss.borderBottomRightRadius).toEqual(pillRadius);
      expect(buttonCss.borderTopLeftRadius).toEqual(pillRadius);
    });
  });
});
