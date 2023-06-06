import { SpacewebComponentProps } from '../types';

export type Grid = {
  /* number of columns */
  cols?: number;

  /* number of columns */
  rows?: number;

  /* gap for cells */
  gap?: number;

  /* column gap */
  colGap?: number;

  /* row gap */
  rowGap?: number;
};

type Breakpoint = number | Grid;

export type GridProps = SpacewebComponentProps &
  Grid & {
    lg?: Breakpoint;
    md?: Breakpoint;
    sm?: Breakpoint;
    xl?: Breakpoint;
    xs?: Breakpoint;
  };

export type Column = {
  colSpan?: number;
  colStart?: number;
  colEnd?: number;
  rowSpan?: number;
  rowStart?: number;
  rowEnd?: number;
};

export type ColProps = SpacewebComponentProps &
  Column & {
    xs?: Column;
    sm?: Column;
    md?: Column;
    lg?: Column;
    xl?: Column;
  };
