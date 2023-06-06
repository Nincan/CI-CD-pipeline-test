import React, { ReactNode } from 'react';
import { Override } from '../overrides';
import { LinkProps } from '../link';

export type Enhancer<SharedProps> = ReactNode | ((props: SharedProps) => ReactNode);

export type BreadcrumbItemSharedProps = {
  $isLastChild?: boolean;
  $withStartEnhancer: boolean;
  $withEndEnhancer: boolean;
  $gap: number;
};

export type BreadcrumbSharedProps = {
  $gap: number;
};

export type BreadcrumbProps = {
  separator?: ReactNode;
  gap?: number;
  overrides?: {
    Root?: Override<Record<string, any>>;
  };
  children: ReactNode;
};

export type BreadcrumbItemProps = Omit<LinkProps, 'onClick'> & {
  isLastChild?: boolean;
  gap?: number;
  onClick?: (event: React.MouseEvent<HTMLElement>, index: number) => void;
  index?: number;
  separator?: ReactNode;
  startEnhancer?: Enhancer<BreadcrumbItemSharedProps>;
  endEnhancer?: Enhancer<BreadcrumbItemSharedProps>;
  overrides?: {
    Link?: Override<Record<string, any>>;
    StartEnhancer?: Override<Record<string, any>>;
    EndEnhancer?: Override<Record<string, any>>;
    ListItem?: Override<Record<string, any>>;
    Separator?: Override<Record<string, any>>;
  };
  children: ReactNode;
};
