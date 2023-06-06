import matchMediaPolyfill from 'mq-polyfill';
import { Client, Server } from 'styletron-engine-atomic';
import { driver } from 'styletron-standard';

import { Direction, ThemeModule } from '@sprinklr/spaceweb-themes/types';
import hyperspaceLight from '@sprinklr/spaceweb-themes/hyperspace/light';

import _buildUtils from '../../style/_buildUtils';
import { SPACEWEB_STYLE_PREFIX } from '../../styleEngine';
import { StyleObject, StyleUtils } from '../../types';
import { covertCSSVariablesToValue } from '../../helpers';

type Breakpoint = [string, string];
type ScreenList = { [name: string]: string };

/**
 * Gets screens by breakpoint name from the theme
 */
export const getScreens = (): ScreenList => hyperspaceLight.theme.screens;

/**
 * Gets a tuple of all breakpoints from the theme
 */
export const getBreakpoints = (): Breakpoint[] => Object.entries(getScreens());

/**
 * Setup events for responsive testing
 */
export const setupBreakpoints = (): void => {
  matchMediaPolyfill(window);

  Object.values(getScreens()).forEach(maxWidth => window.matchMedia(`(max-width: ${maxWidth})`));

  window.resizeTo = function resizeTo(width, height): void {
    Object.assign(this, {
      innerWidth: width,
      innerHeight: height,
      outerWidth: width,
      outerHeight: height,
    }).dispatchEvent(new this.Event('resize'));
  };
};

/**
 * Gets CSS declaration of the first element matching `[data-testid=]`
 */
export const getCSSByTestId = (testId: string): CSSStyleDeclaration => {
  const el = window.document.querySelectorAll(`[data-testid="${testId}"]`)[0];
  return window.getComputedStyle(el);
};

export const getCSSByBasewebId = (basewebId: string): CSSStyleDeclaration => {
  const el = window.document.querySelectorAll(`[data-baseweb="${basewebId}"]`)[0];
  return window.getComputedStyle(el);
};

export const getCSSFromEl = el => window.getComputedStyle(el);

export const convertToTestableTheme: (testTheme: ThemeModule) => ThemeModule = testTheme => {
  const { classes, theme } = testTheme;
  return { ...testTheme, classes: covertCSSVariablesToValue(classes), theme: covertCSSVariablesToValue(theme) };
};

export const getTestStyleUtils = (direction: Direction = 'ltr'): StyleUtils => {
  const isServer = typeof window === 'undefined';
  const options = { prefix: SPACEWEB_STYLE_PREFIX };
  const styletron = isServer ? new Server(options) : new Client(options);
  const css = (arg: StyleObject): string => driver(arg, styletron);

  return _buildUtils({ direction, ...convertToTestableTheme(hyperspaceLight) }, css);
};
