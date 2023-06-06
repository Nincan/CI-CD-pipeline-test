import { cleanup, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Video from '../Video';

const THUMBNAIL_URL =
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2018/01/12201051/cute-puppy-body-image.jpg';
const OVERRIDING_THUMBNAIL_URL = 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg';
const VIDEO_URL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';
const OVERRIDING_VIDEO_URL = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';
const HEIGHT = 200;
const WIDTH = 400;

describe('Video', () => {
  afterEach(cleanup);
  describe('when video has thumbnail image', () => {
    test('renders thumbnail src with THUMBNAIL_URL', () => {
      const { getByTestId } = render(<Video src={VIDEO_URL} poster={THUMBNAIL_URL} />);
      const thumbnail = getByTestId('image');
      expect(thumbnail).toHaveAttribute('src', THUMBNAIL_URL);
    });

    test('renders thumbnail with given height & width', () => {
      const { getByTestId } = render(<Video src={VIDEO_URL} poster={THUMBNAIL_URL} height={HEIGHT} width={WIDTH} />);
      const thumbnail = getByTestId('image');
      expect(thumbnail).toHaveAttribute('height', HEIGHT.toString());
      expect(thumbnail).toHaveAttribute('width', WIDTH.toString());
    });

    test('starts video when play icon is clicked', () => {
      const onPlay = jest.fn();
      const { container, debug } = render(<Video src={VIDEO_URL} poster={THUMBNAIL_URL} onPlay={onPlay} />);
      const VideoPlayIcon = container.querySelector('[data-icon-name="PlayVideo"]')!;
      fireEvent.click(VideoPlayIcon);
      expect(onPlay).toHaveBeenCalled();
    });

    test('starts video when video is clicked', () => {
      const onPlay = jest.fn();
      const { getByTestId } = render(<Video src={VIDEO_URL} poster={THUMBNAIL_URL} onPlay={onPlay} />);
      fireEvent.click(getByTestId('image'));
      expect(onPlay).toHaveBeenCalled();
    });

    test('thumbnail image source is updated with overrides api', () => {
      const { getByTestId } = render(
        <Video
          src={VIDEO_URL}
          poster={THUMBNAIL_URL}
          overrides={{
            Video: {
              props: {
                poster: OVERRIDING_THUMBNAIL_URL,
              },
            },
          }}
        />
      );
      expect(getByTestId('image')).toHaveAttribute('src', OVERRIDING_THUMBNAIL_URL);
    });

    test('clicking image does not play video when disabled', () => {
      const onPlay = jest.fn();
      const { getByTestId } = render(<Video src={VIDEO_URL} poster={THUMBNAIL_URL} onPlay={onPlay} disabled />);
      fireEvent.click(getByTestId('image'));
      expect(onPlay).not.toHaveBeenCalled();
    });

    test('clicking non playable video icon does not play video when disabled', () => {
      const onPlay = jest.fn();
      const { container } = render(<Video src={VIDEO_URL} poster={THUMBNAIL_URL} onPlay={onPlay} disabled />);
      const VideoPlayIcon = container.querySelector('[data-icon-name="VideoNonPlayable"]')!;
      fireEvent.click(VideoPlayIcon);
      expect(onPlay).not.toHaveBeenCalled();
    });
  });

  describe('when video does not have thumbnail image', () => {
    test('renders video tag', () => {
      const { queryByTestId } = render(<Video src={VIDEO_URL} />);
      expect(queryByTestId('video')).toBeDefined();
      expect(queryByTestId('image')).toBeNull();
    });

    test('play & pauses video using controls', () => {
      const onPlay = jest.fn();
      const onPause = jest.fn();
      const { getByTestId } = render(<Video src={VIDEO_URL} onPlay={onPlay} onPause={onPause} />);
      const video = getByTestId('video');
      fireEvent.play(video);
      expect(onPlay).toHaveBeenCalledTimes(1);
      fireEvent.pause(video);
      expect(onPause).toHaveBeenCalledTimes(1);
    });

    test('renders video with given height & width', () => {
      const { getByTestId } = render(<Video src={VIDEO_URL} height={HEIGHT} width={WIDTH} />);
      const video = getByTestId('video');
      expect(video).toHaveAttribute('height', HEIGHT.toString());
      expect(video).toHaveAttribute('width', WIDTH.toString());
    });

    test('source is updated with overrides api', () => {
      const { getByTestId } = render(
        <Video
          src={VIDEO_URL}
          overrides={{
            Video: {
              props: {
                src: OVERRIDING_VIDEO_URL,
              },
            },
          }}
        />
      );
      expect(getByTestId('video')).toHaveAttribute('src', OVERRIDING_VIDEO_URL);
    });
  });

  describe('autoPlay prop', () => {
    test('video element should have autoPlay prop when provided', () => {
      const { getByTestId } = render(<Video src={VIDEO_URL} autoPlay />);

      const videoEl = getByTestId('video');
      expect(videoEl).toHaveAttribute('autoplay');
    });
  });
});
