import { ReactChildren } from 'react';
import * as React from 'react';
import { Override } from '../overrides';
import { SpacewebComponentProps } from '../types';

export type VideoOverrides = {
  Root?: Override<{}>;
  Video?: Override<{}>;
  PlayButton?: Override<{}>;
  PosterImage?: Override<{}>;
};

export type VideoProps = SpacewebComponentProps<React.VideoHTMLAttributes<HTMLVideoElement>> & {
  children?: ReactChildren;
  disabled?: boolean;
  height?: number;
  overrides?: VideoOverrides;
  poster?: string;
  src: string;
  width?: number;
};
