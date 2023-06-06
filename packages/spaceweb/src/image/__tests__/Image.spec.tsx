import { cleanup, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Image from '../Image';

const THUMBNAIL_URL =
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg';
const OVERRIDING_THUMBNAIL_URL = 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg';
const BROKEN_THUMBNAIL_URL = 'https://abc.xyz';
const ALT_TEXT = 'Description of Image';
const OVERRIDDEN_ALT_TEXT = 'Overridden Description of Image';
const HEIGHT = 200;
const WIDTH = 400;

describe('Image', () => {
  afterEach(cleanup);
  test('renders Image with given src & alt text', () => {
    const { getByTestId } = render(<Image src={THUMBNAIL_URL} alt={ALT_TEXT} />);
    const image = getByTestId('image');
    expect(image).toHaveAttribute('src', THUMBNAIL_URL);
    expect(image).toHaveAttribute('alt', ALT_TEXT);
  });
  test('renders Image with given height & width', () => {
    const { getByTestId } = render(<Image src={THUMBNAIL_URL} alt={ALT_TEXT} height={HEIGHT} width={WIDTH} />);
    const image = getByTestId('image');
    expect(image).toHaveAttribute('height', HEIGHT.toString());
    expect(image).toHaveAttribute('width', WIDTH.toString());
  });
  test('should be displaying updated image source using overrides api', () => {
    const { getByTestId } = render(
      <Image
        src={THUMBNAIL_URL}
        alt={ALT_TEXT}
        overrides={{
          Image: {
            props: {
              src: OVERRIDING_THUMBNAIL_URL,
              alt: OVERRIDDEN_ALT_TEXT,
            },
            style: {
              objectFit: 'fill',
            },
          },
        }}
      />
    );
    const image = getByTestId('image');
    expect(image).toHaveAttribute('src', OVERRIDING_THUMBNAIL_URL);
    expect(image).toHaveAttribute('alt', OVERRIDDEN_ALT_TEXT);
  });
  test('should render default fallback component on error', () => {
    const { getByTestId, queryByTestId } = render(<Image src={BROKEN_THUMBNAIL_URL} alt={ALT_TEXT} />);
    expect(queryByTestId('fallback-image')).toBeNull();
    fireEvent(getByTestId('image'), new Event('error'));
    expect(queryByTestId('image')).toBeNull();
    expect(queryByTestId('fallback-image')).toBeTruthy();
  });
  test('should render specified fallback component on error', () => {
    const fallbackComp = () => <div data-testid="user-specified" />;
    const overrides = {
      FallbackImg: {
        component: fallbackComp,
      },
    };
    const { getByTestId, queryByTestId } = render(
      <Image src={BROKEN_THUMBNAIL_URL} alt={ALT_TEXT} overrides={overrides} />
    );
    expect(queryByTestId('user-specified')).toBeNull();
    fireEvent(getByTestId('image'), new Event('error'));
    expect(queryByTestId('image')).toBeNull();
    expect(queryByTestId('user-specified')).toBeTruthy();
  });
  test('should call custom onError when image fails to load', () => {
    const onError = jest.fn();
    const { getByTestId, queryByTestId } = render(
      <Image src={BROKEN_THUMBNAIL_URL} alt={ALT_TEXT} onError={onError} />
    );
    expect(onError).not.toHaveBeenCalled();
    fireEvent(getByTestId('image'), new Event('error'));
    expect(queryByTestId('image')).toBeNull();
    expect(onError).toHaveBeenCalledTimes(1);
  });
});
