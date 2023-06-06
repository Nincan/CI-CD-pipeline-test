import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { BaseButton } from '../BaseButton';
import { getCSSFromEl, getTestStyleUtils, TestProvider } from '../../test-utils/test-provider';
import { hex2rgb } from '../../helpers';

const renderBaseButton = (props?) =>
  render(
    <TestProvider>
      <BaseButton {...props}>Test</BaseButton>
    </TestProvider>
  );

describe('BaseButton', () => {
  const { theme } = getTestStyleUtils();

  test('onClick handler is fired once per click', () => {
    const onClick = jest.fn();
    const { getByRole } = renderBaseButton({ onClick });
    const BaseButton = getByRole('button');

    fireEvent.click(BaseButton);

    expect(onClick).toBeCalledTimes(1);
  });

  test('$as replaces default div container', () => {
    const { getByRole } = renderBaseButton({ $as: 'section' });
    const BaseButton = getByRole('button');

    expect(BaseButton.tagName).toEqual('SECTION');
  });

  test('aria-label is correctly set on BaseButton', () => {
    const ariaLabel = 'test aria-label';
    const { getByRole } = renderBaseButton({ 'aria-label': ariaLabel });
    const BaseButton = getByRole('button');

    expect(BaseButton).toHaveAttribute('aria-label', ariaLabel);
  });

  test('className sets utility classes on BaseButton', () => {
    const className = 'spr-highlight';
    const { getByRole } = renderBaseButton({ className });
    const BaseButton = getByRole('button');
    const BaseButtonCSS = getCSSFromEl(BaseButton);

    expect(BaseButtonCSS.backgroundColor).toEqual(theme.spr.highlight);
  });

  test('style takes precedence over className', () => {
    const className = 'spr-support-success';
    const style = 'spr-support-error';
    const { getByRole } = renderBaseButton({ style, className });
    const BaseButton = getByRole('button');
    const BaseButtonCSS = getCSSFromEl(BaseButton);

    expect(BaseButtonCSS.backgroundColor).toEqual(hex2rgb(theme.spr.supportError));
    expect(BaseButtonCSS.backgroundColor).not.toEqual(hex2rgb(theme.spr.supportSuccess));
  });

  describe('keyboard interaction', () => {
    test('tab sets focus on BaseButton', () => {
      const { getByRole } = renderBaseButton();
      const BaseButton = getByRole('button');

      userEvent.tab();

      expect(BaseButton).toHaveFocus();
    });

    test('enter fires onClick handler', () => {
      const onClick = jest.fn();
      renderBaseButton({ onClick });

      userEvent.tab();
      userEvent.keyboard('{Enter}');

      expect(onClick).toBeCalledTimes(1);
    });
  });
});
