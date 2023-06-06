import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Switch, SwitchSize } from '../index';
import { TestProvider, getCSSFromEl, getTestStyleUtils, setupBreakpoints } from '../../test-utils/test-provider';
import { Intent } from '../../types';
import { mount } from 'enzyme';
import * as React from 'react';

const renderSwitch = ({ size = 'md' as SwitchSize, intent = 'default' as Intent, ...rest }) =>
  render(
    <TestProvider>
      <Switch size={size} intent={intent} {...rest}>
        Switch Label
      </Switch>
    </TestProvider>
  );
const getRenderedSwitch = () => window.document.body.querySelectorAll('[data-baseweb="checkbox"]')[0];

describe('Switch', () => {
  beforeAll(setupBreakpoints);
  afterEach(cleanup);

  test('attached on click', () => {
    const mockFn = jest.fn();
    const { getAllByRole } = renderSwitch({ onChange: mockFn });
    let checkboxElement = getAllByRole('checkbox')[0];
    fireEvent.click(checkboxElement);
    expect(mockFn).toHaveBeenCalled();
  });

  test('on click, aria-checked sets to false when checked', async () => {
    const mockFn = jest.fn();
    let { getAllByRole } = renderSwitch({ onChange: mockFn, checked: false });
    let checkboxElement = getAllByRole('checkbox')[0];
    expect(checkboxElement.getAttribute('aria-checked')).toBe('false');
  });

  test('on click, aria-checked sets to true when not checked', async () => {
    const mockFn = jest.fn();
    let { getAllByRole } = renderSwitch({ onChange: mockFn, checked: true });
    let checkboxElement = getAllByRole('checkbox')[0];
    expect(checkboxElement.getAttribute('aria-checked')).toBe('true');
  });

  describe('different sizes', () => {
    const mockFn = jest.fn();
    afterEach(cleanup);
    const { px2rem } = getTestStyleUtils();

    test('ToggleTrack correct dimensions in "sm" size, ', () => {
      renderSwitch({ size: 'sm', onChange: mockFn });
      const element = getRenderedSwitch();
      //first element always be toggleTrack
      const css1 = getCSSFromEl(element.firstChild);
      expect(css1.height).toEqual(px2rem(14));
      expect(css1.width).toEqual(px2rem(24));
    });

    test('ToggleTrack correct dimensions in "md" size', () => {
      renderSwitch({ size: 'md' });
      const element = getRenderedSwitch();
      const css1 = getCSSFromEl(element.firstChild);
      expect(css1.height).toEqual(px2rem(16));
      expect(css1.width).toEqual(px2rem(28));

      expect(css1.borderLeftWidth).toEqual(px2rem(1));
      expect(css1.borderTopWidth).toEqual(px2rem(1));
      expect(css1.borderRightWidth).toEqual(px2rem(1));
      expect(css1.borderBottomWidth).toEqual(px2rem(1));
    });

    test('ToggleTrack correct dimensions in "lg" size', () => {
      renderSwitch({ size: 'lg' });
      const element = getRenderedSwitch();
      const css1 = getCSSFromEl(element.firstChild);
      expect(css1.height).toEqual(px2rem(20));
      expect(css1.width).toEqual(px2rem(36));
      expect(css1.borderTopLeftRadius).toEqual(px2rem(27));
      expect(css1.borderTopRightRadius).toEqual(px2rem(27));
      expect(css1.borderBottomLeftRadius).toEqual(px2rem(27));
      expect(css1.borderBottomRightRadius).toEqual(px2rem(27));
    });
  });

  describe('Props', () => {
    jest.mock('../index');
    const forwardProps: [string, boolean | string][] = [
      ['checked', true],
      ['disabled', true],
      ['intent', true],
      ['size', 'lg'],
    ];

    describe.each(forwardProps)('when `%s` prop is set', (prop, exp) => {
      test('prop gets passed down', () => {
        const wrapper = mount(
          <TestProvider>
            <Switch {...{ [prop]: exp }} />
          </TestProvider>
        );
        expect(wrapper.find('Switch').prop(prop)).toEqual(exp);
      });
    });
  });
  describe('inputRef', () => {
    test('refObject should have the reference of input.', () => {
      const inputRef = React.createRef<HTMLInputElement>();
      const { container } = renderSwitch({ inputRef });
      expect(inputRef.current).toBe(container.querySelector('input'));
    });
    test('refCallback should be called with input ref.', () => {
      const inputRefCallback = jest.fn();
      const { container } = renderSwitch({ inputRef: inputRefCallback });
      expect(inputRefCallback).toHaveBeenCalledWith(container.querySelector('input'));
    });
  });
});
