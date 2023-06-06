import { ReactElement } from 'react';

import ImagePreviewIcon from '../icon/components/imagePreview';
import { useOverrides } from '../overrides/useOverrides';
import { styled } from '../style';
import { DefaultFallbackProps } from './types';
import { ClassName } from '../types';

const StyledRoot = styled('div', 'flex justify-center items-center spr-ui-02');

const DefaultFallbackImg = ({ width, height, iconSize, overrides }: DefaultFallbackProps): ReactElement => {
  const [Root, rootProps] = useOverrides(overrides?.Root, StyledRoot);
  const [Svg, svgProps] = useOverrides(overrides?.Svg, ImagePreviewIcon);

  return (
    <Root
      data-testid="fallback-image"
      data-spaceweb="fallback-image"
      {...rootProps}
      className={[{ height: `${height}px`, width: `${width}px` }, rootProps?.className]}
    >
      <Svg
        size={iconSize ?? 40}
        {...svgProps}
        className={['spr-icon-03 mx-1 my-1', svgProps?.className] as ClassName}
      />
    </Root>
  );
};

export default DefaultFallbackImg;
