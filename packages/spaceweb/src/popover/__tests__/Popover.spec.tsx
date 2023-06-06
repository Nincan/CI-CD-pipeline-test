import { createRef } from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Popover from '../popover';
import { TestProvider } from '../../test-utils/test-provider';

describe('Popover', function () {
  describe('Ref provided to child element should be preserved', function () {
    test('when popover is in open state', () => {
      const buttonRef = createRef<HTMLButtonElement>();
      render(
        <TestProvider>
          <Popover content="Content" isOpen>
            <button data-id="popover-child" type="button" ref={buttonRef}>
              Button
            </button>
          </Popover>
        </TestProvider>
      );
      expect(buttonRef.current?.dataset.id).toBe('popover-child');
    });
    test('when popover is in close state', () => {
      const buttonRef = createRef<HTMLButtonElement>();
      render(
        <TestProvider>
          <Popover content="Content" isOpen={false}>
            <button data-id="popover-child" type="button" ref={buttonRef}>
              Button
            </button>
          </Popover>
        </TestProvider>
      );
      expect(buttonRef.current?.dataset.id).toBe('popover-child');
    });
  });
  test('a11y: `id` on popover and `aria-controls` on anchor should be same', () => {
    const id = 'popover-id';
    const { getByText, getByTestId } = render(
      <TestProvider>
        <Popover
          content="Content"
          isOpen
          id={id}
          overrides={{
            Body: {
              props: {
                'data-testid': 'popover-body',
              },
            },
          }}
        >
          <div>anchor</div>
        </Popover>
      </TestProvider>
    );
    expect(getByTestId(/popover-body/i)).toHaveAttribute('id', id);
    expect(getByText(/anchor/i)).toHaveAttribute('aria-controls', id);
  });
});
