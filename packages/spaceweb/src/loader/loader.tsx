import { forwardRef, useEffect, useState } from 'react';
import { isTypographyNode } from '../helpers/typography';
import { useOverrides } from '../overrides';
import { ClassName } from '../types';
import { Typography } from '../typography';
import { StyledBeatLoader, StyledBeatLoaderBall, StyledClipLoader, StyledRoot } from './styled-component';
import { LoaderProps, SharedProps } from './types';

export const DEFAULT_SIZE = 16;
export const DEFAULT_DELAY = 0;

const Loader = forwardRef<HTMLElement, LoaderProps>(
  ({ delay = DEFAULT_DELAY, loadingContent, variant = 'beat', size = DEFAULT_SIZE, overrides, ...restProps }, ref) => {
    // should be visible from start if delay is 0
    const [visible, updateVisibleState] = useState(!delay);

    const [Root, rootProps] = useOverrides(overrides?.Root, StyledRoot);
    const [Text, textProps] = useOverrides(overrides?.Text, Typography);
    const [LoaderInternal, loaderProps] = useOverrides(
      overrides?.Loader,
      variant === 'beat' ? StyledBeatLoader : StyledClipLoader
    );
    const [BeatLoaderBall, beatLoaderBallProps] = useOverrides(overrides?.BeatLoaderBall, StyledBeatLoaderBall);

    useEffect(() => {
      let delayTimer;
      if (delay) {
        delayTimer = setTimeout(() => updateVisibleState(true), delay);
      }
      return () => clearTimeout(delayTimer);
    }, [delay]);

    const sharedProps: SharedProps = {
      $hasDelay: !!delay,
      $hasLoadingContent: !!loadingContent,
      $variant: variant,
      $size: size,
    };

    const content = isTypographyNode(loadingContent)
      ? loadingContent
      : loadingContent && (
          <Text
            variant="bs3"
            {...sharedProps}
            {...textProps}
            className={[textProps.className as ClassName, 'spr-text-02 mt-1']}
          >
            {loadingContent}
          </Text>
        );

    // todo: aria-label localization
    return visible ? (
      <Root data-spaceweb="loader" data-testid="loader" {...sharedProps} {...restProps} {...rootProps} ref={ref}>
        <LoaderInternal aria-label="Loading" role="progressbar" aria-busy {...sharedProps} {...loaderProps}>
          {variant === 'beat' && (
            <>
              <BeatLoaderBall {...sharedProps} $index={1} {...beatLoaderBallProps} />
              <BeatLoaderBall {...sharedProps} $index={2} {...beatLoaderBallProps} />
              <BeatLoaderBall {...sharedProps} $index={3} {...beatLoaderBallProps} />
            </>
          )}
        </LoaderInternal>
        {content}
      </Root>
    ) : null;
  }
);

Loader.displayName = 'Loader';

export default Loader;
