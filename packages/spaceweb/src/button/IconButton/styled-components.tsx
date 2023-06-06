import * as React from 'react';
import { Theme } from '@sprinklr/spaceweb-themes/types';

import { IconProps } from '../../icon';
import { SharedProps } from './types';
import { Shape } from '../types';
import { StyleFn, Styles, Size } from '../../types';

import { getComponentSizeTheme } from '../../helpers/themeHelpers';
import { borderRadius, padding } from '../../helpers/longHandHelpers';
import { createButtonStyles } from '../styled-components';

type StyleGetter = (btnStateKey: string, defaultKey?: string) => string;

const SHAPE_VS_THEME_KEY = {
  round: 'shapeRound',
  square: 'shapeSquare',
};

const getButtonShapeThemeKey = (shape: Shape) => SHAPE_VS_THEME_KEY[shape] ?? SHAPE_VS_THEME_KEY.round;

const getButtonSizeTheme = (theme: Theme, size?: Size) => getComponentSizeTheme(theme, 'iconButton', size, 'md');

const getDimensions: StyleFn<SharedProps> = ({ theme, px2rem }, { $size }) => {
  const size = getButtonSizeTheme(theme, $size).buttonSize;

  return { height: px2rem(size), width: px2rem(size) };
};

const resetPadding: StyleFn<SharedProps> = ({ theme }) => padding(theme.padding['0']);

const makeGetStyleFromTheme = (theme: Theme, shape: Shape, bordered: boolean): StyleGetter => {
  const btnShapeKey = getButtonShapeThemeKey(shape);
  const { iconButton } = theme;

  return (btnStateKey: string, defaultKey?: string): string => {
    const defaultColor = defaultKey
      ? iconButton[btnShapeKey][btnStateKey] ?? iconButton[btnShapeKey][defaultKey]
      : iconButton[btnShapeKey][btnStateKey];

    return bordered ? iconButton[`${btnShapeKey}Bordered`][btnStateKey] ?? defaultColor : defaultColor;
  };
};

const getVariantStyles: StyleFn<SharedProps> = ({ theme }, props) => {
  const { $bordered = false, $shape = 'round' } = props;
  const styleFromThemeGetter = makeGetStyleFromTheme(theme, $shape, $bordered);

  return createButtonStyles(
    {
      color: styleFromThemeGetter('color'),
      activeColor: styleFromThemeGetter('activeColor'),
      hoverColor: styleFromThemeGetter('hoverColor'),
      disabledColor: styleFromThemeGetter('disabledColor'),

      borderColor: styleFromThemeGetter('borderColor'),
      hoverBorderColor: styleFromThemeGetter('hoverBorderColor'),
      activeBorderColor: styleFromThemeGetter('activeBorderColor'),
      disabledBorderColor: styleFromThemeGetter('disabledBorderColor'),

      backgroundColor: styleFromThemeGetter('backgroundColor'),
      hoverBackgroundColor: styleFromThemeGetter('hoverBackgroundColor'),
      activeBackgroundColor: styleFromThemeGetter('activeBackgroundColor'),
      disabledBackgroundColor: styleFromThemeGetter('disabledBackgroundColor'),
    },
    props
  );
};

export const iconButtonStyles: Styles = [
  ({ theme }) => ({ minWidth: theme.iconButton.minWidth }),
  ({ theme }, { $shape, $size }) => {
    const squareButtonSizeRadius = getButtonSizeTheme(theme, $size).squareBorderRadius;
    const squareBorderRadius = squareButtonSizeRadius ? `${squareButtonSizeRadius}px` : theme.iconButton.shapeSquare.borderRadius;
    return $shape === 'square' ? borderRadius(squareBorderRadius) : undefined;
  },
  resetPadding,
  getDimensions,
  getVariantStyles,
];

export const renderIconButtonChild = (theme, size, child: React.ReactElement<IconProps>) =>
  React.isValidElement(child)
    ? React.cloneElement(child, {
        size: child.props.size || getButtonSizeTheme(theme, size).iconSize,
      })
    : null;
