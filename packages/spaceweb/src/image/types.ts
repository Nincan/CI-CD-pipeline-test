import * as React from 'react';

import { Override } from '../overrides';
import { SpacewebComponentProps } from '../types';

export type ImageOverrides = {
  Image?: Override<{}>;
  Root?: Override<{}>;
  FallbackImg?: Override<{}>;
};

export type ImageProps = SpacewebComponentProps<React.ImgHTMLAttributes<HTMLImageElement>> & {
  alt: string;
  disabled?: boolean;
  height?: number;
  overrides?: ImageOverrides;
  src: string;
  srcset?: string;
  width?: number;
};

export type DefaultFallbackProps = SpacewebComponentProps & {
  height?: number;
  width?: number;
  /** @deprecated */
  iconSize?: number;
  overrides?: {
    Root?: Override<{}>;
    Svg?: Override<{}>;
  };
};
