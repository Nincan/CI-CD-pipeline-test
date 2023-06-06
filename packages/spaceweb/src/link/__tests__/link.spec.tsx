import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Link from '../link';

describe('Link', () => {
  afterEach(cleanup);

  test('href prop', () => {
    const { getByTestId } = render(<Link href="www.sprinklr.com">text</Link>);
    const link = getByTestId('link');
    expect(link).toHaveAttribute('href', 'www.sprinklr.com');
  });

  test('$as prop', () => {
    const { getByTestId } = render(
      <Link $as="section" href="www.sprinklr.com">
        Section
      </Link>
    );
    const link = getByTestId('link');
    expect(link.nodeName.toLowerCase()).toEqual('section');
  });

  test('children prop', () => {
    const { getByText } = render(<Link href="www.sprinklr.com">text</Link>);
    const textNode = getByText('text');
    expect(textNode).toBeDefined();
  });
});
