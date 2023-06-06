/**
 * @author Ivan Torres
 */

import { PropsWithChildren, ReactElement, useMemo } from 'react';

import { Box } from '../box';
import useStyle from '../style/useStyle';
import { Column, ColProps } from './types';
import { filterOwnProps } from './utils';

const getClassList = (column: Column = {}, breakpoint?: string): string[] => {
  const { colSpan, colStart, colEnd, rowSpan, rowStart, rowEnd } = column;
  const classList: string[] = [];
  const prefix = breakpoint ? `${breakpoint}:` : '';

  if (colEnd) classList.push(`${prefix}col-end-${colEnd}`);
  if (colSpan) classList.push(`${prefix}col-span-${colSpan}`);
  if (colStart) classList.push(`${prefix}col-start-${colStart}`);
  if (rowEnd) classList.push(`${prefix}row-end-${rowEnd}`);
  if (rowSpan) classList.push(`${prefix}row-span-${rowSpan}`);
  if (rowStart) classList.push(`${prefix}row-start-${rowStart}`);

  return classList;
};

export const Col = (props: PropsWithChildren<ColProps>): ReactElement => {
  const { theme } = useStyle();
  const { screens } = theme;
  const { className, style, children } = props;

  let classList: string[] = [];

  const breakpoints: string[] = useMemo((): string[] => Object.keys(screens), [screens]);

  classList = classList.concat(...getClassList(props));

  breakpoints.forEach(breakpoint => {
    if (props[breakpoint]) {
      classList = classList.concat(...getClassList(props[breakpoint], breakpoint));
    }
  });

  return (
    <Box data-testid="col" {...filterOwnProps(breakpoints, props)} className={[classList, className, style]}>
      {children}
    </Box>
  );
};

Col.displayName = 'Col';

export default Col;
