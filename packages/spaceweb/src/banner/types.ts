import { Override } from '../overrides/types';
import { SpacewebComponentProps } from '../types';
import { ReactNode } from 'react';

export type BannerProps = Omit<SpacewebComponentProps, 'title'> & {
  intent?: 'error' | 'warning' | 'success';
  $as?: string;
  collapsible?: boolean;
  title: ReactNode;
  children?: ReactNode;
  maxItemContainerHeight?: string;
  overrides?: {
    Root?: Override<Record<string, any>>;
    BannerItemContainer?: Override<Record<string, any>>;
    HeaderTitle?: Override<Record<string, any>>;
    HeaderIcon?: Override<Record<string, any>>;
    HeaderContainer?: Override<Record<string, any>>;
    TitleContainer?: Override<Record<string, any>>;
    ToggleButton?: Override<Record<string, any>>;
  };
};

export type BannerItemProps = SpacewebComponentProps & {
  children?: ReactNode;
  overrides?: {
    Root?: Override<Record<string, any>>;
  };
};
