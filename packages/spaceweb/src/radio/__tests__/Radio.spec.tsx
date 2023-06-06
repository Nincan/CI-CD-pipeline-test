import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { RadioGroup, StatefulRadioGroup, Radio } from '../index';
import { getCSSFromEl, getTestStyleUtils, TestProvider } from '../../test-utils/test-provider';
import { hex2rgb } from '../../helpers';

const renderRadioGroup = (props?) =>
  render(
    <TestProvider>
      <RadioGroup {...props}>
        <Radio value="0">zero</Radio>
        <Radio value="1">one</Radio>
        <Radio value="2">two</Radio>
      </RadioGroup>
    </TestProvider>
  );

const renderStatefulRadioGroup = (props?) =>
  render(
    <TestProvider>
      <StatefulRadioGroup {...props}>
        <Radio value="0">zero</Radio>
        <Radio value="1">one</Radio>
        <Radio value="2">two</Radio>
      </StatefulRadioGroup>
    </TestProvider>
  );

const expectColor = (receivedColor: string, expectedColor: string) =>
  expect(receivedColor.toUpperCase()).toBe(expectedColor.toUpperCase());

const getRenderedRadios = () => window.document.body.querySelectorAll('[data-baseweb="radio"]');

describe('Radio', () => {
  test('value prop, when provided, sets the default checked radio input', () => {
    const value = '1';
    const { getByLabelText } = renderRadioGroup({ value });
    const Radio = getByLabelText('one') as HTMLInputElement;

    expect(Radio).toBeChecked();
  });

  test('no radio input is checked if value prop does not match any of the radio input value', () => {
    const { container } = renderRadioGroup({ value: '3' });

    const RadioInputs = container.querySelectorAll('input');

    RadioInputs.forEach(input => expect(input).not.toBeChecked());
  });

  test('click event checks the correct radio input', () => {
    const { getByLabelText } = renderStatefulRadioGroup();
    const Radio = getByLabelText('two') as HTMLInputElement;

    fireEvent.click(Radio);

    expect(Radio).toBeChecked();
  });

  test('click event fires onChange handler once and sets the correct value', () => {
    let value = '1';
    const onChange = jest.fn(e => (value = e.target.value));

    const { getByLabelText } = renderRadioGroup({ value, onChange });
    const Radio = getByLabelText('two') as HTMLInputElement;

    fireEvent.click(Radio);

    expect(value).toBe('2');
    expect(onChange).toBeCalledTimes(1);
  });

  test('align horizontal sets the flex direction to row', () => {
    const { getByRole } = renderRadioGroup({ align: 'horizontal' });

    const RadioGroupCSS = getCSSFromEl(getByRole('radiogroup'));

    expect(RadioGroupCSS.flexDirection).toBe('row');
  });

  test('disabled sets entire radiogroup to be disabled', () => {
    const { container } = renderRadioGroup({ disabled: true });

    const RadioInputs = container.querySelectorAll('input');

    RadioInputs.forEach(input => expect(input).toBeDisabled());
  });

  test('autoFocus sets focus to last radio', () => {
    const { container } = renderRadioGroup({ autoFocus: true });

    const RadioInputs = container.querySelectorAll('input');

    expect(RadioInputs[0]).not.toHaveFocus();
    expect(RadioInputs[1]).not.toHaveFocus();
    expect(RadioInputs[2]).toHaveFocus();
  });

  test('name sets the name attribute on all radio inputs', () => {
    const { container } = renderRadioGroup({ name: 'number' });

    const RadioInputs = container.querySelectorAll('input');

    RadioInputs.forEach(input => expect(input).toHaveAttribute('name', 'number'));
  });

  describe('intent', () => {
    const { theme } = getTestStyleUtils();

    test('default', () => {
      renderRadioGroup({ intent: 'default', value: '1' });

      const Radios = getRenderedRadios();
      Radios.forEach((radio, index) => {
        const RadioMarkOuterCSS = getCSSFromEl(radio.firstChild);
        expectColor(RadioMarkOuterCSS.borderColor, index === 1 ? theme.spr.focus01 : theme.spr.border04);
      });

      const CheckedRadioMarkInnerCSS = getCSSFromEl(Radios[1].firstChild?.firstChild);
      expectColor(CheckedRadioMarkInnerCSS.backgroundColor, hex2rgb(theme.spr.focus01) as string);
    });

    test('success', () => {
      renderRadioGroup({ intent: 'success', value: '1' });

      const Radios = getRenderedRadios();
      Radios.forEach(radio => {
        const RadioMarkOuterCSS = getCSSFromEl(radio.firstChild);
        expectColor(RadioMarkOuterCSS.borderColor, theme.spr.supportSuccess);
      });

      const CheckedRadioMarkInnerCSS = getCSSFromEl(Radios[1].firstChild?.firstChild);
      expectColor(CheckedRadioMarkInnerCSS.backgroundColor, hex2rgb(theme.spr.supportSuccess) as string);
    });

    test('warning', () => {
      renderRadioGroup({ intent: 'warning', value: '1' });

      const Radios = getRenderedRadios();
      Radios.forEach(radio => {
        const RadioMarkOuterCSS = getCSSFromEl(radio.firstChild);
        expectColor(RadioMarkOuterCSS.borderColor, theme.spr.supportWarning);
      });

      const CheckedRadioMarkInnerCSS = getCSSFromEl(Radios[1].firstChild?.firstChild);
      expectColor(CheckedRadioMarkInnerCSS.backgroundColor, hex2rgb(theme.spr.supportWarning) as string);
    });

    test('error', () => {
      renderRadioGroup({ intent: 'error', value: '1' });

      const Radios = getRenderedRadios();
      Radios.forEach(radio => {
        const RadioMarkOuterCSS = getCSSFromEl(radio.firstChild);
        expectColor(RadioMarkOuterCSS.borderColor, theme.spr.supportError);
      });

      const CheckedRadioMarkInnerCSS = getCSSFromEl(Radios[1].firstChild?.firstChild);
      expectColor(CheckedRadioMarkInnerCSS.backgroundColor, hex2rgb(theme.spr.supportError) as string);
    });
  });

  describe('size', () => {
    const { px2rem } = getTestStyleUtils();

    test('sm', () => {
      renderRadioGroup({ size: 'sm' });

      const Radios = getRenderedRadios();
      Radios.forEach(radio => {
        const RadioMarkOuterCSS = getCSSFromEl(radio.firstChild);
        const RadioMarkInnerCSS = getCSSFromEl(radio.firstChild?.firstChild);

        expect(RadioMarkOuterCSS.height).toBe(px2rem(14));
        expect(RadioMarkOuterCSS.width).toBe(px2rem(14));
        expect(RadioMarkInnerCSS.height).toBe(px2rem(6));
        expect(RadioMarkInnerCSS.width).toBe(px2rem(6));
      });
    });

    test('md', () => {
      renderRadioGroup({ size: 'md' });

      const Radios = getRenderedRadios();
      Radios.forEach(radio => {
        const RadioMarkOuterCSS = getCSSFromEl(radio.firstChild);
        const RadioMarkInnerCSS = getCSSFromEl(radio.firstChild?.firstChild);

        expect(RadioMarkOuterCSS.height).toBe(px2rem(16));
        expect(RadioMarkOuterCSS.width).toBe(px2rem(16));
        expect(RadioMarkInnerCSS.height).toBe(px2rem(8));
        expect(RadioMarkInnerCSS.width).toBe(px2rem(8));
      });
    });

    test('lg', () => {
      renderRadioGroup({ size: 'lg' });

      const Radios = getRenderedRadios();
      Radios.forEach(radio => {
        const RadioMarkOuterCSS = getCSSFromEl(radio.firstChild);
        const RadioMarkInnerCSS = getCSSFromEl(radio.firstChild?.firstChild);

        expect(RadioMarkOuterCSS.height).toBe(px2rem(18));
        expect(RadioMarkOuterCSS.width).toBe(px2rem(18));
        expect(RadioMarkInnerCSS.height).toBe(px2rem(10));
        expect(RadioMarkInnerCSS.width).toBe(px2rem(10));
      });
    });
  });

  describe('keyboard interaction', () => {
    test('tab sets focus to checked radio input if value is provided', () => {
      const { container } = renderRadioGroup({ value: '1' });
      const RadioInputs = container.querySelectorAll('input');

      userEvent.tab();
      expect(RadioInputs[1]).toHaveFocus();
    });

    test('tab sets focus to first radio input if value is not provided', () => {
      const { container } = renderRadioGroup();
      const RadioInputs = container.querySelectorAll('input');

      userEvent.tab();
      expect(RadioInputs[0]).toHaveFocus();
    });
  });
});
