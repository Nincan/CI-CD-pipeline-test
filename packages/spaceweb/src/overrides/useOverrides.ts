/* eslint @typescript-eslint/no-explicit-any: 0 */

import { getOverrides as baseGetOverrides } from 'baseui/helpers/overrides';
import { useMemo } from 'react';
import * as React from 'react';
import { Override } from './types';

const getOverrides = <T, P>(
  override: Override<T> = {},
  defaultComponent: React.ComponentType<any>
): [React.ComponentType<P & Record<string, unknown>>, Record<string, unknown>] =>
  baseGetOverrides(override, defaultComponent);

/**
 * Wrapper on top of getOverrides of baseui.
 */
const useOverrides = <T, P>(
  override: Override<T> | undefined,
  defaultComponent: React.ComponentType<P>
): [React.ComponentType<P & Record<string, unknown>>, Record<string, unknown>] =>
  useMemo(() => getOverrides(override, defaultComponent), [override, defaultComponent]);

export { getOverrides, useOverrides };
