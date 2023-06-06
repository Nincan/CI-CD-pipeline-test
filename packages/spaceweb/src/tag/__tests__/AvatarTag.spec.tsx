import { render } from '@testing-library/react';
import { AvatarTag } from '../index';
import { TestProvider } from '../../test-utils/test-provider';

const TEST_AVATAR_PROPS = {
  name: 'user',
};

const renderAvatarTag = (props?) =>
  render(
    <TestProvider>
      <AvatarTag {...props}>Test</AvatarTag>
    </TestProvider>
  );

describe('AvatarTag', () => {
  test('Avatar should be rendered', () => {
    const { getByRole, getByText } = renderAvatarTag({ avatarProps: TEST_AVATAR_PROPS });

    // need to set hidden, such that selector can select with the default HTML elements roles
    // https://www.w3.org/TR/html-aria/#docconformance
    const avatarImgRendered = getByRole('img', { hidden: true });
    expect(avatarImgRendered).toBeDefined();

    const avatarTextRendered = getByText('U');
    expect(avatarTextRendered).toBeDefined();
  });

  test('startEnhancer should be rendered', () => {
    const startEnhancer = () => <span>startEnhancer</span>;
    const { queryByText } = renderAvatarTag({ startEnhancer, avatarProps: TEST_AVATAR_PROPS });

    const startEnhancerRendered = queryByText('startEnhancer');
    expect(startEnhancerRendered).toBeDefined();
  });
});
