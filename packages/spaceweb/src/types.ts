/* eslint @typescript-eslint/no-explicit-any: 0 */

import { AllHTMLAttributes, ElementType } from 'react';

import { Theme as BaseTheme } from 'baseui/theme';
import { StyleObject as StyletronStyleObject } from 'styletron-react';
import { StandardEngine as StyletronStandardEngine } from 'styletron-standard';

import { Direction, Theme, ThemeClassNames } from '@sprinklr/spaceweb-themes/types';

export type StyleObject = StyletronStyleObject;
export type StandardEngine = StyletronStandardEngine;

/**
 * Theme-callback function (used to specify styles dynamically)
 *
 * TODO: Replace `any` for `unknown`, the change will cause several
 * components to fail.
 */
export type StyleFn<P = any> = (
  utils: StyleUtils,
  props: { $theme?: BaseTheme } & P
) => StyleObject | string | undefined;

type RecursiveArray<T> = Array<T | RecursiveArray<T>>;

/**
 * CSS in JS object
 */
export type StyleAtom = string | StyleObject | undefined | StyleFn;

/**
 * Spaceweb's style's argument type
 */
export type Styles = StyleAtom | RecursiveArray<StyleAtom>;

/**
 * Returns StyleObject from styling arguments (StyleArgument)
 */
export type GetStyle = (...args: Styles[]) => StyleObject;

/**
 * Space context
 */
export interface ThemeContext {
  classes: ThemeClassNames;
  direction?: Direction;
  theme: Theme;
}

export interface Sheet {
  css: string;
  attrs: { [key: string]: string };
}

export type StyletronContext =
  | {
      container: HTMLStyleElement[];
      styletron: StandardEngine;
    }
  | undefined;

/**
 * Stores browser's available features
 */
export type BrowserFeaturesContext = {
  done: boolean;
  gridLayout: boolean;
  msGridLayout: boolean;
};

/**
 * Variant Options
 */
export type Variant = 'primary' | 'secondary' | 'tertiary' | 'minimal';

/**
 * Size Options
 */
export type Size = 'xxxxs' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Intent Options
 */
export type Intent = 'default' | 'success' | 'warning' | 'error';

/**
 * Gets Styletron's generated class names from `StyleArg`s
 */
export type CSSFunc = (...args: Styles[]) => string;

/**
 * Translates length from pixels to rems units (based on theme `htmlFontSize`)
 */
export type Px2Rem = (px: number | string) => string;

/**
 * `useStyle` return type
 */
export type StyleUtils = ThemeContext & {
  isRTL?: boolean;
  css: CSSFunc;
  getStyle: GetStyle;
  px2rem: Px2Rem;
};

/**
 * ClassName type for Spaceweb's components
 * See: https://frontend.sprinklr.com/spaceweb/guides/styling#styled
 */
export type ClassName = Styles;

/**
 * Spaceweb Components' default interface
 *
 * Equivalent to AllHTMLAttributes with a replacement of default className and style attributes with our own.
 */
export type SpacewebComponentProps<T = AllHTMLAttributes<HTMLElement>> = Omit<T, 'className' | 'style'> & {
  $as?: ElementType;
  className?: ClassName;
  style?: Styles;
};
