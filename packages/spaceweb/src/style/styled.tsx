/**
 * @author Ivan Torres
 */

/* eslint @typescript-eslint/no-explicit-any: 0 */

import { ForwardRefExoticComponent, PropsWithoutRef, RefAttributes, useMemo } from 'react';

import * as React from 'react';

import cx from '../classNames';
import { useTheme } from '../theme';
import { Styles, ThemeContext } from '../types';
import { omit$props } from '../helpers';

import _buildUtils from './_buildUtils';
import _parseStyle from './_parseStyle';
import useMemoizedStyletron from './useMemoizedStyletron';

type Tag = keyof JSX.IntrinsicElements | React.ComponentType<any>;
type StyledFunc = (ComponentOrTag: Tag, ...args: Styles[]) => StyledComponent;
export type StyledComponent = ForwardRefExoticComponent<
  PropsWithoutRef<any> & RefAttributes<HTMLElement | React.ComponentClass>
>;

const styled: StyledFunc = (ComponentOrTag, ...styleArgs) => {
  const StyledInit: StyledComponent = React.forwardRef((props, ref) => {
    const ctx = useTheme() as ThemeContext;
    const [styletronCSS] = useMemoizedStyletron();
    const { className = '', style, $style, ...ownProps } = props;
    const Component = props.$as || ComponentOrTag;

    // NOTE: prepend previously generated classes by styletron, this can happen
    // when re-styling a component built with `styled` or `className` added
    // on top of it:
    const utils = _buildUtils(ctx, styletronCSS);
    const [styleObject, invalidArgs] = _parseStyle(utils, ownProps, [styleArgs, className, $style, style]);
    const classNames = cx(invalidArgs, styletronCSS(styleObject));

    const componentProps = useMemo(() => omit$props(ownProps), [ownProps]);

    return <Component {...componentProps} className={classNames} ref={ref} />;
  });
  StyledInit.displayName =
    typeof ComponentOrTag === 'string'
      ? `styled(${ComponentOrTag})`
      : `styled(${ComponentOrTag.displayName || ComponentOrTag.name || ComponentOrTag})`;
  return React.memo(StyledInit);
};

export default styled;
