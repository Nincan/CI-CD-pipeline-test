/**
 * @author Ivan Torres
 */

import { ReactElement, useMemo, ReactNode, forwardRef } from 'react';

import { Box } from '../box';
import useStyle from '../style/useStyle';
import { GridProps } from './types';
import { filterOwnProps } from './utils';

export type Props = GridProps & {
  children?: ReactNode | ReactNode[];
};

export const Grid = forwardRef<HTMLDivElement, Props>((props, ref): ReactElement => {
  const { theme } = useStyle();
  const { screens } = theme;

  const { className, cols, rows, gap, colGap, rowGap, style } = props;
  /* default settings */
  const classList: string[] = ['grid'];

  if (rows) {
    classList.push(`grid-rows-${rows} grid-flow-col`);
  } else {
    classList.push(`grid-cols-${cols || 1} grid-flow-row`);
  }

  if (colGap) classList.push(`gap-x-${colGap}`);
  if (rowGap) classList.push(`gap-y-${rowGap}`);

  if (gap && Number.isInteger(gap)) {
    /* can't combine lang-hand and short-hand */
    if (colGap) {
      classList.push(`gap-y-${gap}`);
    } else if (rowGap) {
      classList.push(`gap-x-${gap}`);
    } else {
      classList.push(`gap-${gap}`);
    }
  }

  const breakpoints: string[] = useMemo((): string[] => Object.keys(screens), [screens]);

  breakpoints.forEach(name => {
    const breakpoint = props[name];
    if (!breakpoint) return;
    if (Number.isInteger(breakpoint)) classList.push(`${name}:grid-cols-${breakpoint}`);
    if (breakpoint.cols && !breakpoint.rows) classList.push(`${name}:grid-cols-${breakpoint.cols}`);
    if (breakpoint.rows && !breakpoint.cols) classList.push(`${name}:grid-rows-${breakpoint.rows}`);
    if (breakpoint.gap) classList.push(`${name}:gap-${breakpoint.gap}`);
    if (breakpoint.rowGap) classList.push(`${name}:gap-y-${breakpoint.rowGap}`);
    if (breakpoint.colGap) classList.push(`${name}:gap-x-${breakpoint.colGap}`);
  });

  return (
    <Box {...filterOwnProps(breakpoints, props)} className={[classList, className, style]} ref={ref}>
      {props.children}
    </Box>
  );
});

Grid.displayName = 'Grid';

export default Grid;
