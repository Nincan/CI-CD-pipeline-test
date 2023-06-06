import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { Checkbox, StatefulCheckbox } from '../checkbox';
import { getCSSFromEl, getTestStyleUtils, TestProvider } from '../../test-utils/test-provider';
import { hex2rgb } from '../../helpers';

const renderCheckbox = (props?) =>
  render(
    <TestProvider>
      <Checkbox {...props}>Test</Checkbox>
    </TestProvider>
  );

const renderStatefulCheckbox = (props?) =>
  render(
    <TestProvider>
      <StatefulCheckbox {...props}>Test</StatefulCheckbox>
    </TestProvider>
  );

describe('Checkbox', () => {
  test('Input is checked when checked prop is set to true', () => {
    const { container } = renderCheckbox({ checked: true });
    const Input = container.querySelector('input');

    expect(Input).toBeChecked();
  });

  test('Input gets focus when autoFocus is set to true', () => {
    const { container } = renderCheckbox({ autoFocus: true });
    const Input = container.querySelector('input');

    expect(Input).toHaveFocus();
  });

  test('Input is disabled when disabled prop is set to true', () => {
    const { container } = renderCheckbox({ disabled: true });
    const Input = container.querySelector('input');

    expect(Input).toBeDisabled();
  });

  test('Input is required when required prop is set to true', () => {
    const { container } = renderCheckbox({ required: true });
    const Input = container.querySelector('input');

    expect(Input).toHaveAttribute('required');
  });

  describe('event handlers', () => {
    test('onChange', () => {
      let checked = false;
      const onChange = jest.fn(e => (checked = e.target.checked));

      const { container } = renderCheckbox({ checked, onChange });
      const Input = container.querySelector('input') as HTMLInputElement;

      fireEvent.click(Input);

      expect(onChange).toBeCalledTimes(1);
      expect(checked).toEqual(true);
    });

    test('onBlur', () => {
      const onBlur = jest.fn();

      const { container } = renderCheckbox({ onBlur });
      const Input = container.querySelector('input') as HTMLInputElement;

      fireEvent.blur(Input);

      expect(onBlur).toBeCalledTimes(1);
    });

    test('onFocus', () => {
      const onFocus = jest.fn();

      const { container } = renderCheckbox({ onFocus });
      const Input = container.querySelector('input') as HTMLInputElement;

      fireEvent.focus(Input);

      expect(onFocus).toBeCalledTimes(1);
    });

    test('onMouseDown', () => {
      const onMouseDown = jest.fn();

      const { container } = renderCheckbox({ onMouseDown });
      const Input = container.querySelector('input') as HTMLInputElement;

      fireEvent.mouseDown(Input);

      expect(onMouseDown).toBeCalledTimes(1);
    });

    test('onMouseEnter', () => {
      const onMouseEnter = jest.fn();

      const { container } = renderCheckbox({ onMouseEnter });
      const Input = container.querySelector('input') as HTMLInputElement;

      fireEvent.mouseEnter(Input);

      expect(onMouseEnter).toBeCalledTimes(1);
    });

    test('onMouseEnter', () => {
      const onMouseLeave = jest.fn();

      const { container } = renderCheckbox({ onMouseLeave });
      const Input = container.querySelector('input') as HTMLInputElement;

      fireEvent.mouseLeave(Input);

      expect(onMouseLeave).toBeCalledTimes(1);
    });
  });

  describe('intent', () => {
    const { theme } = getTestStyleUtils();

    describe('default', () => {
      test('checked: true', () => {
        const { container } = renderCheckbox({ intent: 'default', checked: true });
        const Checkmark = container.querySelector('span');
        const CheckmarkCSS = getCSSFromEl(Checkmark);

        expect(CheckmarkCSS.backgroundColor).toEqual(hex2rgb(theme.spr.focus01));
      });

      test('checked: false', () => {
        const { container } = renderCheckbox({ intent: 'default', checked: false });
        const Checkmark = container.querySelector('span');
        const CheckmarkCSS = getCSSFromEl(Checkmark);

        expect(CheckmarkCSS.borderTopColor).toEqual(theme.spr.border04);
        expect(CheckmarkCSS.borderRightColor).toEqual(theme.spr.border04);
        expect(CheckmarkCSS.borderBottomColor).toEqual(theme.spr.border04);
        expect(CheckmarkCSS.borderLeftColor).toEqual(theme.spr.border04);
      });
    });

    describe('success', () => {
      test('checked: true', () => {
        const { container } = renderCheckbox({ intent: 'success', checked: true });
        const Checkmark = container.querySelector('span');
        const CheckmarkCSS = getCSSFromEl(Checkmark);

        expect(CheckmarkCSS.backgroundColor).toEqual(hex2rgb(theme.spr.supportSuccess));
      });

      test('checked: false', () => {
        const { container } = renderCheckbox({ intent: 'success', checked: false });
        const Checkmark = container.querySelector('span');
        const CheckmarkCSS = getCSSFromEl(Checkmark);

        expect(CheckmarkCSS.borderTopColor).toEqual(theme.spr.supportSuccess);
        expect(CheckmarkCSS.borderRightColor).toEqual(theme.spr.supportSuccess);
        expect(CheckmarkCSS.borderBottomColor).toEqual(theme.spr.supportSuccess);
        expect(CheckmarkCSS.borderLeftColor).toEqual(theme.spr.supportSuccess);
      });
    });

    describe('warning', () => {
      test('checked: true', () => {
        const { container } = renderCheckbox({ intent: 'warning', checked: true });
        const Checkmark = container.querySelector('span');
        const CheckmarkCSS = getCSSFromEl(Checkmark);

        expect(CheckmarkCSS.backgroundColor).toEqual(hex2rgb(theme.spr.supportWarning));
      });

      test('checked: false', () => {
        const { container } = renderCheckbox({ intent: 'warning', checked: false });
        const Checkmark = container.querySelector('span');
        const CheckmarkCSS = getCSSFromEl(Checkmark);

        expect(CheckmarkCSS.borderTopColor).toEqual(theme.spr.supportWarning);
        expect(CheckmarkCSS.borderRightColor).toEqual(theme.spr.supportWarning);
        expect(CheckmarkCSS.borderBottomColor).toEqual(theme.spr.supportWarning);
        expect(CheckmarkCSS.borderLeftColor).toEqual(theme.spr.supportWarning);
      });
    });

    describe('error', () => {
      test('checked: true', () => {
        const { container } = renderCheckbox({ intent: 'error', checked: true });
        const Checkmark = container.querySelector('span');
        const CheckmarkCSS = getCSSFromEl(Checkmark);

        expect(CheckmarkCSS.backgroundColor).toEqual(hex2rgb(theme.spr.supportError));
      });

      test('checked: false', () => {
        const { container } = renderCheckbox({ intent: 'error', checked: false });
        const Checkmark = container.querySelector('span');
        const CheckmarkCSS = getCSSFromEl(Checkmark);

        expect(CheckmarkCSS.borderTopColor).toEqual(theme.spr.supportError);
        expect(CheckmarkCSS.borderRightColor).toEqual(theme.spr.supportError);
        expect(CheckmarkCSS.borderBottomColor).toEqual(theme.spr.supportError);
        expect(CheckmarkCSS.borderLeftColor).toEqual(theme.spr.supportError);
      });
    });
  });

  describe('size', () => {
    const { px2rem, theme } = getTestStyleUtils();

    test('sm', () => {
      const { container, getByText } = renderCheckbox({ size: 'sm' });
      const Label = getByText('Test');
      const Checkmark = container.querySelector('span');

      const LabelCSS = getCSSFromEl(Label);
      const CheckmarkCSS = getCSSFromEl(Checkmark);

      expect(LabelCSS.fontSize).toEqual(theme.typography.bs3.fontSize);
      expect(LabelCSS.lineHeight).toEqual(theme.typography.bs3.lineHeight);
      expect(LabelCSS.paddingLeft).toEqual(px2rem(8));

      expect(CheckmarkCSS.height).toEqual(px2rem(12));
      expect(CheckmarkCSS.width).toEqual(px2rem(12));
      expect(CheckmarkCSS.backgroundSize).toEqual(`${px2rem(8)} ${px2rem(6)}`);
    });

    test('md', () => {
      const { container, getByText } = renderCheckbox({ size: 'md' });
      const Label = getByText('Test');
      const Checkmark = container.querySelector('span');

      const LabelCSS = getCSSFromEl(Label);
      const CheckmarkCSS = getCSSFromEl(Checkmark);

      expect(LabelCSS.fontSize).toEqual(theme.typography.bs2.fontSize);
      expect(LabelCSS.lineHeight).toEqual(theme.typography.bs2.lineHeight);
      expect(LabelCSS.paddingLeft).toEqual(px2rem(8));

      expect(CheckmarkCSS.height).toEqual(px2rem(14));
      expect(CheckmarkCSS.width).toEqual(px2rem(14));
      expect(CheckmarkCSS.backgroundSize).toEqual(`${px2rem(8)} ${px2rem(6)}`);
    });

    test('lg', () => {
      const { container, getByText } = renderCheckbox({ size: 'lg' });
      const Label = getByText('Test');
      const Checkmark = container.querySelector('span');

      const LabelCSS = getCSSFromEl(Label);
      const CheckmarkCSS = getCSSFromEl(Checkmark);

      expect(LabelCSS.fontSize).toEqual(theme.typography.bs1.fontSize);
      expect(LabelCSS.lineHeight).toEqual(theme.typography.bs1.lineHeight);
      expect(LabelCSS.paddingLeft).toEqual(px2rem(10));

      expect(CheckmarkCSS.height).toEqual(px2rem(16));
      expect(CheckmarkCSS.width).toEqual(px2rem(16));
      expect(CheckmarkCSS.backgroundSize).toEqual(`${px2rem(9)} ${px2rem(7)}`);
    });
  });

  test('StatefulCheckbox', () => {
    const { container } = renderStatefulCheckbox({ checked: false });
    const Input = container.querySelector('input') as HTMLInputElement;

    expect(Input).not.toBeChecked();

    fireEvent.click(Input);

    expect(Input).toBeChecked();
  });

  describe('keyboard interaction', () => {
    test('tab sets focus on Input', () => {
      const { container } = renderCheckbox();
      const Input = container.querySelector('input');

      userEvent.tab();

      expect(Input).toHaveFocus();
    });
  });
  describe('inputRef', () => {
    test('refObject should have the reference of input.', () => {
      const inputRef = React.createRef<HTMLInputElement>();
      const { container } = renderCheckbox({ inputRef });
      expect(inputRef.current).toBe(container.querySelector('input'));
    });
    test('refCallback should be called with input ref.', () => {
      const inputRefCallback = jest.fn();
      const { container } = renderCheckbox({ inputRef: inputRefCallback });
      expect(inputRefCallback).toHaveBeenCalledWith(container.querySelector('input'));
    });
  });
});
