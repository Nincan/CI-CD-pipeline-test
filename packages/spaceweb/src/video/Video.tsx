import _isFunction from 'lodash/isFunction';
import _noop from 'lodash/noop';
import { forwardRef, useState, useCallback } from 'react';

import classNames from '../classNames';
import { useOverrides, mergeOverrides, StyleOverride } from '../overrides';
import Play from '../icon/components/play-video';
import VideoDisabled from '../icon/components/video-non-playable';
import { Image } from '../image';
import styled from '../style/styled';
import useStyle from '../style/useStyle';
import { VideoProps } from './types';

const StyledRoot = styled('div');
const StyledVideo = styled('video', { objectFit: 'cover' });

const Video = forwardRef<HTMLVideoElement, VideoProps>((props, ref) => {
  const { overrides, children, autoPlay = false, ...restProps } = props;
  const { css } = useStyle();
  const [played, startPlay] = useState(autoPlay);

  const mergedOverrides = mergeOverrides(
    {
      Video: {
        props: {
          controls: true,
          ...restProps,
        },
      },
    },
    overrides || {}
  );

  const [Root, rootProps] = useOverrides(mergedOverrides.Root, StyledRoot);
  const [Vid, videoProps] = useOverrides(mergedOverrides.Video, StyledVideo);
  const [PlayButton, playButtonProps] = useOverrides(mergedOverrides.PlayButton, Play);
  const [PosterImage, posterImageProps] = useOverrides(mergedOverrides.PosterImage, Image);

  const { onPlay } = videoProps;

  const onClickPlay = useCallback(
    event => {
      startPlay(true);
      if (_isFunction(onPlay)) onPlay(event);
    },
    [onPlay]
  );

  return played || !videoProps.poster ? (
    <Root data-spaceweb="video" {...rootProps}>
      <Vid ref={ref} data-testid="video" {...videoProps} autoPlay={played}>
        {children}
      </Vid>
    </Root>
  ) : (
    <Root
      data-spaceweb="video"
      {...rootProps}
      className={`flex items-center relative justify-center ${classNames({ 'cursor-pointer': !videoProps.disabled })}`}
    >
      <PosterImage
        {...videoProps}
        src={videoProps.poster as string}
        alt="Thumbnail"
        overrides={{
          Image: { style: videoProps.$style as StyleOverride<object> },
          Root: { style: rootProps.$style as StyleOverride<object> },
        }}
        onClick={videoProps.disabled ? _noop : onClickPlay}
        {...posterImageProps}
      />
      <div className={css('absolute')}>
        {videoProps.disabled ? (
          <VideoDisabled className="w-8 h-8 cursor-not-allowed spr-icon-05" />
        ) : (
          <PlayButton className="w-8 h-8 spr-icon-05" onClick={onClickPlay} {...playButtonProps} />
        )}
      </div>
    </Root>
  );
});

Video.displayName = 'Video';

export default Video;
