import { TImportsConfig, TProp } from 'react-view';
import { SpacePropsTypes } from './common';

export type ObjectFitProperty =
  | 'contain'
  | 'fill'
  | 'inherit'
  | 'none'
  | '-moz-initial'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'cover'
  | 'scale-down'
  | undefined;

type SpaceTProp = Omit<TProp, 'type'> & {
  type: any;
};

export type YardConfig = {
  componentName: string;
  scope: { [key: string]: unknown };
  props: { [key: string]: SpaceTProp };
  theme: string[];
  imports: TImportsConfig;
  mapTokensToProps?: { [key: string]: unknown };
  spaceKnobProps?: unknown;
};
