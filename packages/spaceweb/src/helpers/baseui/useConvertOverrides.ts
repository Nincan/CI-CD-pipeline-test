import { Override as BaseOverride, Overrides as BaseOverrides } from 'baseui/overrides';
import _reduce from 'lodash/reduce';
import { DependencyList, useMemo } from 'react';
import rtlCSSJS from 'rtl-css-js';

import { OverrideObject, Overrides, mergeOverrides } from '../../overrides';
import _getStyleWithProps from '../../style/_getStyleWithProps';
import useStyle from '../../style/useStyle';
import { StyleUtils, StyleObject } from '../../types';

const identity = x => x;
const convertOverrideObject = <T>(override: OverrideObject<T>, utils: StyleUtils): BaseOverride<T> => ({
  ...override,
  style: (props): StyleObject => {
    const decorator = utils.isRTL ? rtlCSSJS : identity;
    return decorator(_getStyleWithProps(utils, props, override.style));
  },
});

const mergeAndConvertOverrides = <T>(
  target: Overrides<T>,
  source: Overrides<T> = {},
  utils: StyleUtils
): BaseOverrides<T> => {
  const mergedOverrides = mergeOverrides(target, source);
  return _reduce(
    mergedOverrides,
    (acc, componentOverride, componentName) => {
      acc[componentName] = convertOverrideObject(componentOverride || {}, utils);
      return acc;
    },
    {} as BaseOverrides<T>
  );
};

/**
 * Wraps on top of mergeOverrides from baseui
 *
 * This provides Space's `StyleUtils` as first argument to all style override's functions, and then the override properties.
 * Merges 2 spaceweb overrides and converts them to baseui override object
 * Useful when overriding baseui's component to create spaceweb component.
 */
const useConvertOverrides = <T>(
  target: Overrides<T>,
  source: Overrides<T> = {},
  deps: DependencyList = []
): BaseOverrides<T> => {
  const utils = useStyle();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => mergeAndConvertOverrides(target, source, utils), [source, target, utils, ...deps]);
};

export { useConvertOverrides, mergeAndConvertOverrides, convertOverrideObject };
