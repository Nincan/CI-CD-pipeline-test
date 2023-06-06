import _pick from 'lodash/pick';
import * as React from 'react';
import { useMemo, ReactElement } from 'react';
import { Box, BoxProps } from '../box';
import { IconButton } from '../button';
import { IconButtonProps } from '../button/IconButton';
import { add$props } from '../helpers';
import { IconProps } from '../icon';
import ClearIcon from '../icon/components/close';
import DefaultSearchIcon from '../icon/components/search';

import { Input } from '../input';

import { mergeOverrides, Override, useOverrides } from '../overrides';
import { StyleObject } from '../types';
import { getInputContainerStyles, getRootStyles, getSearchSizeTheme } from './styled-components';

import { SearchProps, SharedProps } from './types';
import { useLocale } from '../locale';
import { useStyle } from '../style';
import { getDefaultSize } from '../helpers/themeHelpers';

const SearchIconContainer = ({
  size,
  marginX,
  className,
  overrides,
  ...props
}: {
  size: number;
  marginX: string;
  overrides?: { SearchIcon?: Override<Record<string, any>> };
} & BoxProps &
  SharedProps): ReactElement => {
  const [SearchIcon, searchIconProps] = useOverrides(overrides?.SearchIcon, DefaultSearchIcon);
  const sharedProps = _pick(props, ['$isFocused', '$disabled', '$required', '$bordered', '$variant', '$intent']);
  return (
    <Box {...props} className={['flex items-center', { marginLeft: marginX, marginRight: marginX }, className]}>
      <SearchIcon
        size={size}
        {...sharedProps}
        {...searchIconProps}
        className={['spr-icon-03', (searchIconProps as undefined | IconProps)?.className]}
      />
    </Box>
  );
};

export const ClearIconButton = ({ overrides, ...props }: IconButtonProps): ReactElement => {
  const mergedOverrides = useMemo(
    () =>
      mergeOverrides(
        {
          BaseButton: {
            style: [
              'h-5 w-5 spr-text-02 hover:spr-text-01 focus:spr-text-01 hover:spr-ui-03 focus:spr-ui-03 bg-transparent',
              ({ px2rem }): StyleObject => ({ minWidth: px2rem(20) }),
            ],
            props: { type: 'button' },
          },
        },
        overrides
      ),
    [overrides]
  );
  return (
    <IconButton {...props} overrides={mergedOverrides}>
      <ClearIcon data-testid="search-clear" size={10} />
    </IconButton>
  );
};

export const Search = ({
  size: _size,
  debounceInterval = 200,
  placeholder,
  overrides,
  className,
  style,
  variant = 'default',
  ...props
}: SearchProps): ReactElement => {
  const { theme } = useStyle();
  const size = _size ?? getDefaultSize(theme);

  const searchIconMarginX = getSearchSizeTheme(theme, size, 'searchIconMarginX');
  const searchIconSize = getSearchSizeTheme(theme, size, 'iconSize');
  const fontSize = getSearchSizeTheme(theme, size, 'fontSize');
  const lineHeight = getSearchSizeTheme(theme, size, 'lineHeight');

  const locale = useLocale();

  const mergedOverrides = React.useMemo(() => {
    const sharedProps = add$props({ size, variant });
    return mergeOverrides<Record<string, any>>(
      {
        Root: {
          style: [getRootStyles, className, style],
          props: sharedProps,
        },
        InputContainer: {
          style: getInputContainerStyles,
          props: sharedProps,
        },
        Input: {
          style: ['px-0 py-0', { fontSize, lineHeight: lineHeight ?? '18px' }],
          props: sharedProps,
        },
        Before: {
          component: SearchIconContainer,
          props: { size: searchIconSize, marginX: searchIconMarginX, ...sharedProps, overrides },
        },
        ClearIcon: ClearIconButton,
      },
      overrides
    );
  }, [overrides, size, className, style, variant, fontSize, searchIconSize, searchIconMarginX, lineHeight]);
  return (
    <Input
      data-spaceweb="Search"
      placeholder={placeholder ?? locale.search.searchPlaceholder}
      overrides={mergedOverrides}
      debounceInterval={debounceInterval}
      {...props}
    />
  );
};

Search.displayName = 'Search';
