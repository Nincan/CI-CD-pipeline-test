import { cleanup, render, screen } from '@testing-library/react';
import _uniqueId from 'lodash/uniqueId';
import '@testing-library/jest-dom/extend-expect';

import { TestProvider, getCSSByTestId } from '../../test-utils/test-provider';
import { Avatar } from '../avatar';

const TEST_NAME = 'Harlem Shake';
const OVERRIDES = {
  Root: {
    props: {
      'data-testid': 'avatar',
    },
  },
  Avatar: {
    props: {
      'data-testid': 'image',
    },
  },
};

describe('Avatar', () => {
  afterEach(cleanup);
  test('backgroundColor', () => {
    const { rerender } = render(
      <TestProvider>
        <Avatar name="Persisting Random Color" overrides={OVERRIDES} />
      </TestProvider>
    );
    const currentBgColor = getCSSByTestId('avatar').backgroundColor;
    rerender(
      <TestProvider>
        <Avatar name="Persisting Random Color" overrides={OVERRIDES} />
      </TestProvider>
    );
    const bgColorAfterRerender = getCSSByTestId('avatar').backgroundColor;
    expect(currentBgColor).toBe(bgColorAfterRerender);
  });
  test('same bg color is generated for same name', () => {
    const { rerender, unmount } = render(
      <TestProvider>
        <Avatar key={_uniqueId()} name={TEST_NAME} overrides={OVERRIDES} />
      </TestProvider>
    );
    const currentBgColor = getCSSByTestId('avatar').backgroundColor;
    unmount();
    rerender(
      <TestProvider>
        <Avatar key={_uniqueId()} name={TEST_NAME} overrides={OVERRIDES} />
      </TestProvider>
    );
    const bgColorAfterRerender = getCSSByTestId('avatar').backgroundColor;
    expect(currentBgColor).toBe(bgColorAfterRerender);
  });
  test('renders custom color through props', () => {
    render(
      <TestProvider>
        <Avatar name={TEST_NAME} color="red" overrides={OVERRIDES} />
      </TestProvider>
    );
    const currentBgColor = getCSSByTestId('avatar').backgroundColor;
    expect(currentBgColor).toBe('red');
  });

  test('renders user icon on passing phone number', () => {
    render(
      <TestProvider>
        <Avatar name="+91 1234567890" overrides={OVERRIDES} />
      </TestProvider>
    );
    expect(screen.getByTestId('user-icon')).not.toBeNull();
  });
  test('renders phone initials when allowPhoneInitals is passed', () => {
    render(
      <TestProvider>
        <Avatar name="+91 4234567890" allowPhoneInitials overrides={OVERRIDES} />
      </TestProvider>
    );
    expect(screen.queryByTestId('user-icon')).toBeNull();
    screen.getByText('94');
  });

  test('when src props changes, it should reflect in src attribute', () => {
    const oldSrc = 'oldSrc';
    const newSrc = 'newSrc';

    const { getByTestId, rerender } = render(
      <TestProvider>
        <Avatar name="user" src={oldSrc} overrides={OVERRIDES} />
      </TestProvider>
    );

    const imageEl = getByTestId('image');
    expect(imageEl).toHaveAttribute('src', oldSrc);

    rerender(
      <TestProvider>
        <Avatar name="user" src={newSrc} overrides={OVERRIDES} />
      </TestProvider>
    );

    expect(imageEl).toHaveAttribute('src', newSrc);
  });
});
