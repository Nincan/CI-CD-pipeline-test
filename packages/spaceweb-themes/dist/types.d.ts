/**
 * @author Ivan Torres
 */
import { StyleObject } from 'styletron-react';
import HyperspaceLightTheme from './hyperspace/light/theme';
import SpaceLightTheme from './space/light/theme';
export declare type ThemeClassNames = {
  [className: string]: {
    [rule: string]: string | number | StyleObject | undefined;
  };
};

export declare type Direction = 'ltr' | 'rtl';
// 'COMPACT' | 'COMFORTABLE'
export declare type Density = string;

type searchCommonProps = {
  paddingX?: string;
  searchIconMarginX?: string;
  height?: string;
  fontSize?: string;
  iconSize?: number;
  borderRadius?: string;
  lineHeight?: string;
};

type buttonGroupCommonProps = {
  height?: string;
  marginTop?: string;
  marginBottom?: string;
  containerBorderRadius?: string;
};

export declare type Theme = Omit<typeof HyperspaceLightTheme | typeof SpaceLightTheme, 'density'> & {
  density?: Density;
} & {
  button?: {
    primary?: {
      color?: string;

      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;

      borderColor?: string;
      hoverBorderColor?: string;
      activeBorderColor?: string;
    };
    secondary?: {
      color?: string;
      disabledColor?: string;

      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;
      disabledBackgroundColor?: string;

      borderColor?: string;
      hoverBorderColor?: string;
      activeBorderColor?: string;
      disabledBorderColor?: string;
    };
    tertiary?: {
      color?: string;

      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;

      borderColor?: string;
    };
    minimal?: {
      color?: string;

      backgroundColor?: string;
      hoverBackgroundColor?: string;
      activeBackgroundColor?: string;

      borderColor?: string;
    };
  };
  search?: {
    sizeXxs?: searchCommonProps;
    sizeXs?: searchCommonProps;
    sizeSm?: searchCommonProps;
    sizeMd?: searchCommonProps;
    sizeLg?: searchCommonProps;
  };
  buttonGroup?: {
    sizeXxs?: buttonGroupCommonProps;
    sizeSm?: buttonGroupCommonProps;
    sizeMd?: buttonGroupCommonProps;
    sizeLg?: buttonGroupCommonProps;
  };
};
export declare type ThemeModule = {
  classes: ThemeClassNames;
  theme: Theme;
};
