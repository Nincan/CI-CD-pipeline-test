import { ReactElement, PropsWithChildren } from 'react';

import { Box } from '../box';
import cx from '../classNames';
import { SharedPropsTabs, SharedPropsTab } from './types';
import { baseTabClasses, isVertical } from './helpers';
import { styled } from '../style';
import { StyleFn } from '../types';

export const Root = (props: PropsWithChildren<SharedPropsTabs>): ReactElement => {
  const className = cx('flex', {
    'flex-col': props.$position === 'top',
    'flex-row-reverse': props.$position === 'right',
  });
  return (
    <Box {...props} className={className}>
      {props.children}
    </Box>
  );
};

export const tabsStyles = (utils, { $variant, $position }) =>
  $variant === 'default'
    ? cx('flex border-t-0 border-l-0 border-r-0 border-b-0', {
        'flex-col': isVertical($position),
      })
    : cx('flex border-t-0 border-l-0 border-r-0 border-b-0 spr-ui-02 spr-border-03 border-solid', {
        'border-t border-b': $position === 'top',
        'flex-col border-l border-r': isVertical($position),
      });

export const tabStyle: StyleFn<SharedPropsTab> = ({ theme, getStyle }, { $variant, $selected, $position }) => {
  if ($variant === 'default') {
    const defaultTheme = theme.tab.variantDefault;

    return {
      ...getStyle(
        cx(baseTabClasses, 'px-2 py-2 focus-visible:rounded-6', {
          'spr-text-04': $selected,
        })
      ),
      ...defaultTheme.fontStyles,
      //@ts-ignore
      ...($selected ? defaultTheme.selectedStyles : undefined),
      ...($position === 'top' ? defaultTheme.positionTopStyles : undefined),
      ...($position === 'left' ? defaultTheme.positionLeftStyles : undefined),
      ...($position === 'right' ? defaultTheme.positionRightStyles : undefined),
    };
  }

  return cx(baseTabClasses, 'typography-l1 px-8 py-2 spr-border-02', {
    'spr-text-04 spr-ui-01': $selected,
    'border-r': $position === 'top',
    '-mb-px': $selected && $position === 'top',
    'border-b': isVertical($position),
    '-mr-px': $selected && $position === 'left',
    '-ml-px': $selected && $position === 'right',
  });
};

export const StyledTabsPanel = styled('div');
