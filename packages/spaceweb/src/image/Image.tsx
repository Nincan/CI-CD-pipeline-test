import * as React from 'react';

import { useOverrides } from '../overrides';
import styled from '../style/styled';
import { ImageProps } from './types';
import DefaultFallbackImg from './defaultFallbackImg';

// Lineheight 1px is required on the container of the image becuase if image is small (smaller than the line height),
// you may start seeing mystery space appearing above the image instead.
// https://stackoverflow.com/questions/5804256/image-inside-div-has-extra-space-below-the-image - Explanation for why image has extra space below it
// https://stackoverflow.com/questions/17905827/why-does-my-image-have-space-underneath#answer-17905828:~:text=if%20yo[…]0above%20the%20image%20instead -
// explanation for why lineheight is reuired on container
const StyledRoot = styled('div', { lineHeight: '1px' });
const StyledImg = styled('img', 'align-middle', { objectFit: 'cover' });

const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const { overrides, ...restProps } = props;

  const [Root, rootProps] = useOverrides(overrides?.Root, StyledRoot);
  const [Img, imageProps] = useOverrides(overrides?.Image, StyledImg);
  const [FallbackImg, fallbackImgProps] = useOverrides(overrides?.FallbackImg, DefaultFallbackImg);

  const [errored, setErrored] = React.useState(false);
  const errorHandler = React.useCallback(
    e => {
      setErrored(true);
      restProps?.onError?.(e);
    },
    [setErrored, restProps?.onError]
  );

  return (
    <Root data-spaceweb="image" {...rootProps}>
      {errored ? (
        <FallbackImg height={restProps?.height} width={restProps.width} {...fallbackImgProps} />
      ) : (
        <Img data-testid="image" {...restProps} {...imageProps} onError={errorHandler} ref={ref} />
      )}
    </Root>
  );
});

Image.displayName = 'Image';

export default Image;
