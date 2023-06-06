import { PropsWithChildren } from 'react';
import { SpacewebComponentProps } from '../types';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'h7'
  | 'bl1'
  | 'bl2'
  | 'bl3'
  | 'bs1'
  | 'bs2'
  | 'bs3'
  | 'l1'
  | 'l2'
  | 'l3'
  | 'l4'
  | 'body-8'
  | 'body-10'
  | 'body-12'
  | 'body-13'
  | 'body-14'
  | 'body-16'
  | 'display-18'
  | 'display-20'
  | 'display-24'
  | 'display-28'
  | 'display-32'
  | 'display-40'
  | 'display-42';

export type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';

export type TypographyProps = PropsWithChildren<SpacewebComponentProps> & {
  /** variant of typography element */
  variant?: TypographyVariant;
  weight?: FontWeight;
};
