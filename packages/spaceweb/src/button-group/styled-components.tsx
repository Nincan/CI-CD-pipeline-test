import * as React from 'react';
import { Theme } from '@sprinklr/spaceweb-themes/types';
import _isArray from 'lodash/isArray';
import _merge from 'lodash/merge';

import { createButtonStyles } from '../button/styled-components';
import { borderColor, borderRadius, borderStyle, borderWidth } from '../helpers/longHandHelpers';
import { getFocusVisibleStyles } from '../helpers/commonStyles';
import styled from '../style/styled';
import { StyleObject, StyleUtils } from '../types';
import { ButtonGroupChildProps, ButtonGroupProps } from './types';
import { getComponentSizeTheme, getDefaultSize } from '../helpers/themeHelpers';

// NOTE - This method is meant to be used by ButtonGroup only and not a generic one. This shouldn't be used to take style specific decisions.
const isHyperSpaceUI = (theme: Theme): boolean => theme.name.includes('hyperspace');

export const buttonGroupButtonSizeMap = {
  xxxs: {
    height: '20px',
    marginTop: '1px',
    marginBottom: '1px',
    containerBorderRadius: '5px',
  },
  xs: {
    height: '26px',
    marginTop: '2px',
    marginBottom: '2px',
    containerBorderRadius: '7px',
  },
  sm: {
    height: '26px',
    marginTop: '2px',
    marginBottom: '2px',
    containerBorderRadius: '7px',
  },
  md: {
    height: '32px',
    marginTop: '3px',
    marginBottom: '3px',
    containerBorderRadius: '8px',
  },
  lg: {
    height: '32px',
    marginTop: '3px',
    marginBottom: '3px',
    containerBorderRadius: '8px',
  },
};

export const getButtonGroupSizeTheme = (theme, size, prop) =>
  getComponentSizeTheme(theme, 'buttonGroup', size, getDefaultSize(theme))?.[prop] ||
  buttonGroupButtonSizeMap[size || getDefaultSize(theme)]?.[prop] ||
  buttonGroupButtonSizeMap[getDefaultSize(theme)][prop];

export const StyledRoot = styled('div', 'inline-flex items-center', ({ theme, px2rem }, { $size }) => {
  if (!isHyperSpaceUI(theme)) return {};

  const containerBorderRadius = getButtonGroupSizeTheme(theme, $size, 'containerBorderRadius');

  return {
    backgroundColor: theme.spr.ui01,
    ...borderStyle('solid'),
    ...borderColor(theme.spr.ui03),
    ...borderWidth('1px'),
    ...borderRadius(containerBorderRadius),
  };
});

const isSelected = (selected, index) => (_isArray(selected) ? selected.includes(index) : selected === index);

const isAnyButtonSelected = selected => (typeof selected === 'number' && selected >= 0) || Boolean(selected?.length);

export const hyperspaceButtonOverrides = (utils: StyleUtils, props): StyleObject => {
  const { theme, px2rem } = utils;
  const { $isIconButton, $index, $childrenCount, $isSelected, $size } = props;

  const height = getButtonGroupSizeTheme(theme, $size, 'height');
  const marginTop = getButtonGroupSizeTheme(theme, $size, 'marginTop');
  const marginBottom = getButtonGroupSizeTheme(theme, $size, 'marginBottom');

  return _merge({
    // To keep all the buttons equidistant remove marginLeft from all buttons except the first one
    marginLeft: $index === 0 ? px2rem(2) : '0px',
    marginRight: $index === $childrenCount - 1 ? px2rem(2) : px2rem(3),

    fontSize: px2rem(12),
    lineHeight: px2rem(16),
    ...borderRadius(px2rem(4)),

    // NOTE: iconButton's height, width is predefined. Do not add padding to iconButtons
    ...(!$isIconButton
      ? {
          paddingTop: px2rem(8),
          paddingBottom: px2rem(8),
          paddingLeft: px2rem(12),
          paddingRight: px2rem(12),
        }
      : { height, width: height, marginTop, marginBottom }),

    ...createButtonStyles(
      {
        color: theme.spr.text01,
        hoverColor: theme.spr.text01,
        activeColor: theme.spr.text04,
        disabledColor: $isIconButton ? theme.spr.iconDisable : theme.spr.text02,
        borderColor: 'transparent',
        backgroundColor: theme.spr.ui01,
        hoverBackgroundColor: theme.spr.ui05,
        activeBackgroundColor: theme.spr.ui05,
      },
      props
    ),

    ...borderWidth(0),
    fontWeight: $isSelected ? theme.fontWeight.bold : theme.fontWeight.regular,
    ...getFocusVisibleStyles(utils, { $outlineOffset: '-2px' }),
  });
};

const baseButtonStyle = (childrenCount, index, utils: StyleUtils, props) => {
  const { theme } = utils;
  const { $variant, $size } = props;
  const height = getButtonGroupSizeTheme(theme, $size, 'height');
  const marginTop = getButtonGroupSizeTheme(theme, $size, 'marginTop');
  const marginBottom = getButtonGroupSizeTheme(theme, $size, 'marginBottom');
  const baseStyles = { fontWeight: theme.fontWeight.normal, height, marginTop, marginBottom };

  if (isHyperSpaceUI(theme)) {
    return {
      ...baseStyles,
      ...hyperspaceButtonOverrides(utils, { ...props, $index: index, $childrenCount: childrenCount }),
    };
  }

  const borderLeftColor =
    $variant === 'primary'
      ? {
          borderLeftColor: theme.spr.border01,
          ':hover': { borderLeftColor: theme.spr.border01 },
          ':active': { borderLeftColor: theme.spr.border01 },
        }
      : { borderLeftWidth: 0 };

  switch (index) {
    case 0: //first button
      return {
        ...baseStyles,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      };
    case childrenCount - 1: //last button
      return {
        ...baseStyles,
        ...borderLeftColor,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      };
    default:
      //all middle buttons
      return {
        ...baseStyles,
        ...borderLeftColor,
        ...borderRadius(0),
      };
  }
};

export const renderButtonGroupChild = (
  props: React.PropsWithChildren<ButtonGroupProps> & { onKeyDown: (event: KeyboardEvent) => void },
  child: { props: ButtonGroupChildProps },
  index: number
) => {
  if (!React.isValidElement(child)) {
    return null;
  }

  const { disabled, onClick, variant, size, children, shape, selected, intent, onKeyDown } = props;
  const childrenCount = React.Children.count(children);

  const onChildClick = event => {
    if (disabled) {
      return;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (onClick) {
      onClick(event, index);
    }
  };

  const onChildKeyDown = event => {
    if (disabled) {
      return;
    }
    onKeyDown(event);
    child.props.onKeyDown?.(event);
  };

  return React.cloneElement(child, {
    disabled: child.props.disabled || disabled,
    variant: child.props.variant || variant,
    size: child.props.size || size,
    shape: child.props.shape || shape,
    intent: child.props.intent || intent,
    isSelected: isSelected(selected, index),
    'aria-selected': isSelected(selected, index),
    className: [baseButtonStyle.bind(null, childrenCount, index), child.props.className],
    onClick: onChildClick,
    onKeyDown: onChildKeyDown,
    // If no button is selected, do not override tabIndex as there are cases where ButtonGroup is used for styling purpose
    ...(isAnyButtonSelected(selected)
      ? { tabIndex: child.props.tabIndex ?? (isSelected(selected, index) ? 0 : -1) }
      : {}),
  });
};
