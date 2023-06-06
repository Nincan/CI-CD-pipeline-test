/**
 * @author Ivan Torres
 */

import * as React from 'react';

import { Styles } from '../types';

export type StyleOverride<P> = Styles;

type ComponentOverride<P> = React.ComponentType<P> | React.ForwardRefRenderFunction<unknown, P>;

export interface OverrideObject<P> {
  component?: ComponentOverride<P>;
  props?: { [key: string]: unknown };
  style?: StyleOverride<P>;
}

export type Override<P> = OverrideObject<P> | React.ComponentType<P>;

export interface Overrides<T = unknown> {
  [key: string]: Override<T> | undefined;
}

export interface OverridesObject<T = unknown> {
  [key: string]: OverrideObject<T>;
}
