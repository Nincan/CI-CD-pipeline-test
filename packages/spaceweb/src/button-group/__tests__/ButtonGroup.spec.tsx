import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { ButtonGroup, StatefulButtonGroup } from '../index';
import { Button } from '../../button';
import { TestProvider, getCSSFromEl, getTestStyleUtils } from '../../test-utils/test-provider';
import { hex2rgb } from '../../helpers';
import { Theme } from '@sprinklr/spaceweb-themes/types';
import { buttonGroupButtonSizeMap } from '../styled-components';

const renderButtonGroup = (props?) =>
  render(
    <TestProvider>
      <ButtonGroup {...props}>
        <Button>zero</Button>
        <Button>one</Button>
        <Button>two</Button>
      </ButtonGroup>
    </TestProvider>
  );

const renderStatefulButtonGroup = (props?) =>
  render(
    <TestProvider>
      <StatefulButtonGroup {...props}>
        <Button>zero</Button>
        <Button>one</Button>
        <Button>two</Button>
      </StatefulButtonGroup>
    </TestProvider>
  );

const DATA_TEST_ID_OVERRIDES = {
  Root: {
    props: {
      'data-testid': 'button-group',
    },
  },
};

const isHyperspaceUI = (name: string) => name.includes('hyperspace');
const describeIf = (theme: Theme) => (isHyperspaceUI(theme.name) ? describe.skip : describe);
const isButtonSelected = (el: HTMLElement) => el.tabIndex === 0;

describe('ButtonGroup', () => {
  const { theme, px2rem } = getTestStyleUtils();
  describe('selected', () => {
    test('sets isSelected true on selected button by default', () => {
      const { getByText } = renderButtonGroup({ selected: [0] });
      const defaultSelectedButton = getByText('zero');
      expect(isButtonSelected(defaultSelectedButton)).toBe(true);
    });

    test('sets isSelected true on button clicked by user', () => {
      const { getByText } = renderStatefulButtonGroup({ selected: [0] });

      const defaultSelectedButton = getByText('zero');
      const nextSelectedButton = getByText('two');

      fireEvent.click(nextSelectedButton);

      expect(isButtonSelected(nextSelectedButton)).toBe(true);
      // default selected button no longer has isSelected === true
      expect(isButtonSelected(defaultSelectedButton)).toBe(false);
    });
  });

  test('onClick is called once whenever a button is clicked', () => {
    let selected = 0;
    const onClick = jest.fn((e, index) => {
      selected = index;
    });
    const { getByText } = renderButtonGroup({ selected, onClick });

    fireEvent.click(getByText('two'));

    expect(selected).toEqual(2);
    expect(onClick).toBeCalledTimes(1);
  });

  test('disabled sets all disabled attribute on all buttons', () => {
    const { container } = renderButtonGroup({ disabled: true });
    const Buttons = container.querySelectorAll('button');

    Buttons.forEach(button => expect(button).toHaveAttribute('disabled'));
  });

  describeIf(theme)('shape', () => {
    test('default', () => {
      const { getByText } = renderButtonGroup({ shape: 'default' });

      const FirstButton = getByText('zero');
      const LastButton = getByText('two');

      const FirstButtonCSS = getCSSFromEl(FirstButton);
      const LastButtonCSS = getCSSFromEl(LastButton);

      expect(FirstButtonCSS.borderBottomLeftRadius).toEqual(theme.button.borderRadius);
      expect(FirstButtonCSS.borderTopLeftRadius).toEqual(theme.button.borderRadius);
      expect(LastButtonCSS.borderBottomRightRadius).toEqual(theme.button.borderRadius);
      expect(LastButtonCSS.borderTopRightRadius).toEqual(theme.button.borderRadius);
    });

    test('square', () => {
      const { getByText } = renderButtonGroup({ shape: 'square' });

      const FirstButton = getByText('zero');
      const LastButton = getByText('two');

      const FirstButtonCSS = getCSSFromEl(FirstButton);
      const LastButtonCSS = getCSSFromEl(LastButton);

      expect(FirstButtonCSS.borderBottomLeftRadius).toEqual(theme.borderRadius[0]);
      expect(FirstButtonCSS.borderTopLeftRadius).toEqual(theme.borderRadius[0]);
      expect(LastButtonCSS.borderBottomRightRadius).toEqual(theme.borderRadius[0]);
      expect(LastButtonCSS.borderTopRightRadius).toEqual(theme.borderRadius[0]);
    });

    test('pill', () => {
      const { getByText } = renderButtonGroup({ shape: 'pill' });

      const FirstButton = getByText('zero');
      const LastButton = getByText('two');

      const FirstButtonCSS = getCSSFromEl(FirstButton);
      const LastButtonCSS = getCSSFromEl(LastButton);

      expect(FirstButtonCSS.borderBottomLeftRadius).toEqual(px2rem(theme.borderRadius[16]));
      expect(FirstButtonCSS.borderTopLeftRadius).toEqual(px2rem(theme.borderRadius[16]));
      expect(LastButtonCSS.borderBottomRightRadius).toEqual(px2rem(theme.borderRadius[16]));
      expect(LastButtonCSS.borderTopRightRadius).toEqual(px2rem(theme.borderRadius[16]));
    });
  });

  describe('size', () => {
    test('xs', () => {
      const { container } = renderButtonGroup({ size: 'xs' });
      const Buttons = container.querySelectorAll('button');

      Buttons.forEach(button => {
        const ButtonCSS = getCSSFromEl(button);
        expect(ButtonCSS.height).toEqual(buttonGroupButtonSizeMap['xs'].height);
      });
    });

    test('sm', () => {
      const { container } = renderButtonGroup({ size: 'sm' });
      const Buttons = container.querySelectorAll('button');

      Buttons.forEach(button => {
        const ButtonCSS = getCSSFromEl(button);
        expect(ButtonCSS.height).toEqual(buttonGroupButtonSizeMap['sm'].height);
      });
    });

    test('md', () => {
      const { container } = renderButtonGroup({ size: 'md' });
      const Buttons = container.querySelectorAll('button');

      Buttons.forEach(button => {
        const ButtonCSS = getCSSFromEl(button);
        expect(ButtonCSS.height).toEqual(buttonGroupButtonSizeMap['md'].height);
      });
    });
  });

  describeIf(theme)('intent', () => {
    test('default', () => {
      const { container } = renderButtonGroup({ intent: 'default' });
      const Buttons = container.querySelectorAll('button');

      Buttons.forEach(button => {
        const ButtonCSS = getCSSFromEl(button);
        expect(ButtonCSS.backgroundColor).toEqual(hex2rgb(theme.spr.interactive01));
      });
    });

    test('success', () => {
      const { container } = renderButtonGroup({ intent: 'success' });
      const Buttons = container.querySelectorAll('button');

      Buttons.forEach(button => {
        const ButtonCSS = getCSSFromEl(button);
        expect(ButtonCSS.backgroundColor).toEqual(hex2rgb(theme.spr.supportSuccess));
      });
    });

    test('warning', () => {
      const { container } = renderButtonGroup({ intent: 'warning' });
      const Buttons = container.querySelectorAll('button');

      Buttons.forEach(button => {
        const ButtonCSS = getCSSFromEl(button);
        expect(ButtonCSS.backgroundColor).toEqual(hex2rgb(theme.spr.supportWarning));
      });
    });

    test('error', () => {
      const { container } = renderButtonGroup({ intent: 'error' });
      const Buttons = container.querySelectorAll('button');

      Buttons.forEach(button => {
        const ButtonCSS = getCSSFromEl(button);
        expect(ButtonCSS.backgroundColor).toEqual(hex2rgb(theme.spr.supportError));
      });
    });
  });

  describeIf(theme)('variant', () => {
    test('primary', () => {
      const { container } = renderButtonGroup({ variant: 'primary' });
      const Buttons = container.querySelectorAll('button');

      Buttons.forEach(button => {
        const ButtonCSS = getCSSFromEl(button);
        expect(ButtonCSS.backgroundColor).toEqual(hex2rgb(theme.spr.interactive01));
      });
    });

    test('secondary', () => {
      const { container } = renderButtonGroup({ variant: 'secondary' });
      const Buttons = container.querySelectorAll('button');

      Buttons.forEach(button => {
        const ButtonCSS = getCSSFromEl(button);
        expect(ButtonCSS.backgroundColor).toEqual(hex2rgb(theme.spr.ui01));
        expect(ButtonCSS.color).toEqual(hex2rgb(theme.spr.interactive02));
      });
    });

    test('tertiary', () => {
      const { container } = renderButtonGroup({ variant: 'tertiary' });
      const Buttons = container.querySelectorAll('button');

      Buttons.forEach(button => {
        const ButtonCSS = getCSSFromEl(button);
        expect(ButtonCSS.backgroundColor).toEqual(hex2rgb(theme.spr.ui01));
        expect(ButtonCSS.color).toEqual(hex2rgb(theme.spr.interactive01));
      });
    });

    test('minimal', () => {
      const { container } = renderButtonGroup({ variant: 'minimal' });
      const Buttons = container.querySelectorAll('button');

      Buttons.forEach(button => {
        const ButtonCSS = getCSSFromEl(button);
        expect(ButtonCSS.backgroundColor).toEqual('transparent');
        expect(ButtonCSS.color).toEqual(hex2rgb(theme.spr.text04));
      });
    });
  });

  describe('keyboard interaction', () => {
    test('tab changes focus between buttons', () => {
      const { getAllByTestId } = render(
        <TestProvider>
          <StatefulButtonGroup overrides={DATA_TEST_ID_OVERRIDES} initialState={[0]}>
            <Button>zero</Button>
            <Button>one</Button>
            <Button>two</Button>
          </StatefulButtonGroup>
          <StatefulButtonGroup overrides={DATA_TEST_ID_OVERRIDES} initialState={[1]}>
            <Button>four</Button>
            <Button>five</Button>
            <Button>six</Button>
          </StatefulButtonGroup>
        </TestProvider>
      );
      const ButtonGroups = getAllByTestId('button-group');
      const ButtonsFromGroup1 = ButtonGroups[0].querySelectorAll('button');
      const ButtonsFormGroup2 = ButtonGroups[1].querySelectorAll('button');

      userEvent.tab();
      //Initially 0th button from group 1 should be focused
      expect(ButtonsFromGroup1[0]).toHaveFocus();

      userEvent.tab();
      //Focus should be move to second button group and 1st button is selected hence it will receing the focus
      expect(ButtonsFormGroup2[1]).toHaveFocus();
    });

    test('enter fires onClick handler once', () => {
      const onClick = jest.fn();
      renderButtonGroup({ onClick, selected: [0] });

      userEvent.tab();
      userEvent.keyboard('{Enter}');

      expect(onClick).toBeCalledTimes(1);
    });

    test('navigation should follow round robin pattern', () => {
      const onClick = jest.fn();
      const { container } = renderStatefulButtonGroup({ onClick, initialState: [2] });
      const Buttons = container.querySelectorAll('button');

      userEvent.tab();
      //Initially 2nd button should be selected and focused
      expect(Buttons[2]).toHaveFocus();

      userEvent.keyboard('{ArrowRight}');
      expect(Buttons[0]).toHaveFocus();

      //Selecting the button
      userEvent.keyboard('{Enter}');
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenLastCalledWith(expect.anything(), 0);

      userEvent.keyboard('{ArrowLeft}');
      expect(Buttons[2]).toHaveFocus();

      userEvent.keyboard('{Enter}');
      expect(onClick).toHaveBeenCalledTimes(2);
      expect(onClick).toHaveBeenLastCalledWith(expect.anything(), 2);
    });

    test('arrow key changes focused button', () => {
      const onClick = jest.fn();
      const { container } = renderStatefulButtonGroup({ onClick, initialState: [0] });
      const Buttons = container.querySelectorAll('button');

      userEvent.tab();
      //Initially 0th button should be focused
      expect(Buttons[0]).toHaveFocus();

      userEvent.keyboard('{ArrowRight}');
      expect(Buttons[1]).toHaveFocus();

      userEvent.keyboard('{ArrowRight}');
      expect(Buttons[2]).toHaveFocus();

      userEvent.keyboard('{Enter}');
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenLastCalledWith(expect.anything(), 2);

      userEvent.keyboard('{ArrowLeft}');
      expect(Buttons[1]).toHaveFocus();
    });

    test('when button is disabled it should not be focused', () => {
      const onClick = jest.fn();
      const { container } = render(
        <StatefulButtonGroup onClick={onClick} initialState={[0]}>
          <Button>zero</Button>
          <Button disabled>one</Button>
          {/* explicitly giving false to test toHaveAttribute check in useTabsKeyboardNavigation */}
          <Button disabled={false}>two</Button>
        </StatefulButtonGroup>
      );
      const Buttons = container.querySelectorAll('button');

      userEvent.tab();
      //Initially 0th button should have focus
      expect(Buttons[0]).toHaveFocus();

      userEvent.keyboard('{ArrowRight}');
      expect(Buttons[2]).toHaveFocus();
    });

    test('when pressing `Home` and `End` key it should go to first and last button respectively', () => {
      const onClick = jest.fn();
      const { container } = renderStatefulButtonGroup({ onClick, initialState: [1] });
      const Buttons = container.querySelectorAll('button');

      userEvent.tab();
      //Initially 1st button should have the focus
      expect(Buttons[1]).toHaveFocus();

      userEvent.keyboard('{Home}');
      expect(Buttons[0]).toHaveFocus();

      userEvent.keyboard('{End}');
      expect(Buttons[2]).toHaveFocus();
    });

    test('when activateOnFocus is true, arrow key changes selected button', () => {
      const onClick = jest.fn();
      const { container } = renderStatefulButtonGroup({ onClick, initialState: [0], activateOnFocus: true });
      const Buttons = container.querySelectorAll('button');

      userEvent.tab();
      // Initially 0th button is selected
      expect(Buttons[0]).toHaveFocus();

      userEvent.keyboard('{ArrowRight}');
      expect(onClick).toHaveBeenCalledTimes(1);
      expect(onClick).toHaveBeenCalledWith(expect.anything(), 1);
      expect(Buttons[1]).toHaveFocus();

      userEvent.keyboard('{ArrowLeft}');
      expect(onClick).toHaveBeenCalledTimes(2);
      expect(onClick).toHaveBeenLastCalledWith(expect.anything(), 0);
      expect(Buttons[0]).toHaveFocus();
    });

    test('when no button is selected, first button ( not disabled ) should receive the focus', () => {
      const { container } = render(
        <StatefulButtonGroup>
          <Button disabled>zero</Button>
          <Button>one</Button>
          <Button>two</Button>
        </StatefulButtonGroup>
      );
      const Buttons = container.querySelectorAll('button');

      userEvent.tab();
      expect(Buttons[1]).toHaveFocus();
    });

    test('when invalid index is passed as selected, first button ( not disabled ) should receive the focus', () => {
      const { container } = renderStatefulButtonGroup({ initialState: -1 });
      const Buttons = container.querySelectorAll('button');

      userEvent.tab();
      expect(Buttons[0]).toHaveFocus();
    });

    test('selected button should have aria-selected prop set as true', () => {
      const { container } = renderStatefulButtonGroup({ initialState: 0 });
      const Buttons = container.querySelectorAll('button');

      expect(Buttons[0]).toHaveAttribute('aria-selected', 'true');
      expect(Buttons[1]).toHaveAttribute('aria-selected', 'false');
      expect(Buttons[2]).toHaveAttribute('aria-selected', 'false');
    });

    test('when default mode is used, aria-multiselectable should be set as false', () => {
      const { getByTestId } = render(
        <ButtonGroup overrides={DATA_TEST_ID_OVERRIDES}>
          <Button>zero</Button>
          <Button>one</Button>
          <Button>two</Button>
        </ButtonGroup>
      );

      const buttonGroup = getByTestId('button-group');

      expect(buttonGroup).toHaveAttribute('aria-multiselectable', 'false');
    });

    test('when checkbox mode is used, aria-multiselectable should be set as true', () => {
      const { getByTestId } = render(
        <ButtonGroup overrides={DATA_TEST_ID_OVERRIDES} mode="checkbox">
          <Button>zero</Button>
          <Button>one</Button>
          <Button>two</Button>
        </ButtonGroup>
      );

      const buttonGroup = getByTestId('button-group');

      expect(buttonGroup).toHaveAttribute('aria-multiselectable', 'true');
    });
  });
});
