import { KeyboardEvent, MouseEvent, ReactNode } from 'react';
import { Override } from '../overrides/types';
import { SpacewebComponentProps } from '../types';
import { StatefulTooltipProps } from '../tooltip';

export type AlignItems = 'start' | 'center';
export type Enhancer<SharedProps> = ReactNode | ((props: SharedProps) => ReactNode);

export type ListItemSharedProps = {
  $withStartEnhancer: boolean;
  $withEndEnhancer: boolean;
  $alignItems: AlignItems;
  $disabled: boolean;
  $selected: boolean;
  $highlighted: boolean;
  $button: boolean;
};

export type ListItemProps = SpacewebComponentProps & {
  alignItems?: AlignItems; // When item text is in multiple lines, set position of start, end enhancer.
  autoFocus?: boolean;
  button?: boolean;
  children?: ReactNode;
  disabled?: boolean;
  endEnhancer?: Enhancer<ListItemSharedProps>;
  highlighted?: boolean;
  onClick?: (event: MouseEvent | KeyboardEvent) => void;
  overrides?: {
    ChildContainer?: Override<ListItemSharedProps & Record<string, any>>;
    EndEnhancer?: Override<ListItemSharedProps & Record<string, any>>;
    Root?: Override<ListItemSharedProps & Record<string, any>>;
    StartEnhancer?: Override<ListItemSharedProps & Record<string, any>>;
    StatefulTooltip?: Override<ListItemSharedProps & Record<string, any>>;
  };
  selected?: boolean;
  startEnhancer?: Enhancer<ListItemSharedProps>;
  tooltipContent?: StatefulTooltipProps['content'];
};

export type ListProps = SpacewebComponentProps & {
  children?: ReactNode;
  virtual?: boolean;
  overrides?: {
    Root?: Override<Record<string, any>>;
  };
  scrollElement?: HTMLElement | null;
  overscanCount?: number;
  /*
    This default size will be used for each child of virtual list before virtulizer adjusts the sizes dynamically. For best performance adjust this value closest to the actual children height.
     */
  estimateItemSize?: number;
  $showFocusOutline?: boolean;
};

export type ListItemTextProps = {
  children?: ReactNode;
  overrides?: {
    PrimaryText?: Override<Record<string, any>>;
    Root?: Override<Record<string, any>>;
    SecondaryText?: Override<Record<string, any>>;
  };
  secondary?: ReactNode;
};

export type DividerProps = SpacewebComponentProps & {
  /**
   * If true, remove top padding and border. When rendering first subheader of the list.
   */
  first?: boolean;
  overrides?: {
    Separator?: Override<{}>;
    SubHeader?: Override<{}>;
  };
};
