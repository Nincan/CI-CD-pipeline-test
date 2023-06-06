import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tag } from '../index';
import { TestProvider } from '../../test-utils/test-provider';
import '@testing-library/jest-dom/extend-expect';

const renderTag = (props?) =>
  render(
    <TestProvider>
      <Tag {...props}>Test</Tag>
    </TestProvider>
  );

describe('Tag', () => {
  describe('Close button', () => {
    test('should be visible when closeable is set to true', () => {
      const { container } = renderTag({ closeable: true });
      const CloseButton = container.querySelector('button');

      expect(CloseButton).toBeDefined();
    });

    test('should not be visible when closeable is set to false', () => {
      const { container } = renderTag({ closeable: false });
      const CloseButton = container.querySelector('button');

      expect(CloseButton).toBeNull();
    });

    test('should call onActionClick once when clicked', () => {
      const onActionClick = jest.fn();

      const { container } = renderTag({ closeable: true, onActionClick });
      const CloseButton = container.querySelector('button') as HTMLButtonElement;

      fireEvent.click(CloseButton);

      expect(onActionClick).toBeCalledTimes(1);
    });
  });

  test('onClick should be called once when click event occurs on Tag', () => {
    const onClick = jest.fn();

    const { getByTestId } = renderTag({ onClick, 'data-testid': 'tag' });
    const Tag = getByTestId('tag');

    fireEvent.click(Tag);

    expect(onClick).toBeCalledTimes(1);
  });

  test('onKeyDown should be called once when keydown event occurs on Tag', () => {
    const onClick = jest.fn();
    const onKeyDown = jest.fn();

    const { getByTestId } = renderTag({ onClick, onKeyDown, 'data-testid': 'tag' });
    const Tag = getByTestId('tag');

    fireEvent.keyDown(Tag, { key: 'Enter', code: 'Enter' });
    expect(onKeyDown).toBeCalledTimes(1);
  });

  test('onActionKeyDown should be called once when keydown event occurs on Tag', () => {
    const onClick = jest.fn();
    const onActionKeyDown = jest.fn();

    const { getByTestId } = renderTag({ onClick, onActionKeyDown, 'data-testid': 'tag' });
    const Tag = getByTestId('tag');

    fireEvent.keyDown(Tag, { key: 'Backspace', code: 'Backspace' });
    expect(onActionKeyDown).toBeCalledTimes(1);
  });

  test('startEnhancer should render', () => {
    const startEnhancer = () => <span>startEnhancer</span>;
    const { queryByText } = renderTag({ startEnhancer });

    const startEnhancerRendered = queryByText('startEnhancer');
    expect(startEnhancerRendered).toBeDefined();
  });

  describe('keyboard interaction', () => {
    test('tab sets focus to Close button when closeable is set to true', () => {
      const { container } = renderTag({ closeable: true });
      const CloseButton = container.querySelector('button');

      userEvent.tab();
      expect(CloseButton).toHaveFocus();
    });

    test('enter fires onActionClick handler once', () => {
      const onActionClick = jest.fn();

      renderTag({ closeable: true, onActionClick });

      userEvent.tab();

      userEvent.keyboard('{Enter}');
      expect(onActionClick).toBeCalledTimes(1);
    });
  });
});
