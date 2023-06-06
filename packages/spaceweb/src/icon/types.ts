import * as React from 'react';
import { SpacewebComponentProps } from '../types';

export type Size = number;

export type IconProps = SpacewebComponentProps<React.SVGAttributes<SVGSVGElement>> & {
  /** Size of element, will be passed to the svg width/height style. Can also be a value included in */
  size?: Size;
  /** Allows you to set the SVG `<title>` label, which is used for accessibility */
  title?: string;
  ref?: React.Ref<HTMLElement>;
} & Record<string, any>; // Icon accepts all the props prefixed with `$`
