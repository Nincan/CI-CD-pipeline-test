import { isValidElement } from 'react';
import { isValidElementType } from 'react-is';
import _mergeWith from 'lodash/mergeWith';
import _isObject from 'lodash/isObject';
import { Override, OverrideObject, Overrides, OverridesObject } from './types';
import { combineRefs } from '../hooks/useCombinedRef';
import type { Ref } from '../hooks/useCombinedRef';

const mergeOverride = <T>(_target?: Override<T>, _source?: Override<T>): OverrideObject<T> => {
  const target = isValidElementType(_target) ? { component: _target } : _target;
  const source = isValidElementType(_source) ? { component: _source } : _source;
  const merged: Record<string, any> = { ...target, ...source };
  if (target?.props && source?.props) {
    // deep merge
    merged.props = _mergeWith({}, target.props, source.props, (a, b) => {
      /**
       * React elements are object. _merge deep merges react elements as well, which is not we usually want.
       * Check tests for more information
       */
      if (isValidElement(b) || isValidElementType(b)) return b;
      return undefined;
    });

    if (target.props.ref && source.props.ref) {
      merged.props.ref = combineRefs(target.props.ref as Ref<any>, source.props.ref as Ref<any>);
    }

    if (_isObject(target.props.overrides) && _isObject(source.props.overrides)) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      merged.props.overrides = mergeOverrides<unknown>(
        target.props.overrides as Overrides,
        source.props.overrides as Overrides
      );
    }
  }
  if (target?.style && source?.style) {
    merged.style = [target.style, source.style];
  }
  return merged;
};

const mergeOverrides = <T>(target: Overrides<T>, source: Overrides<T> = {}): OverridesObject<T> => {
  const allIdentifiers = Object.keys({ ...target, ...source });
  return allIdentifiers.reduce<OverridesObject<T>>((acc, name) => {
    acc[name] = mergeOverride<T>(target[name], source[name]);
    return acc;
  }, {});
};

export { mergeOverrides, mergeOverride };
