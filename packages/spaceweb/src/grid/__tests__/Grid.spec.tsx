/**
 * @author Ivan Torres
 */

import { cleanup, render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Col } from '../Col';
import { Grid } from '../Grid';
import { GridProps } from '../types';

import { TestProvider, getBreakpoints, getCSSByTestId, setupBreakpoints } from '../../test-utils/test-provider';

const renderGrid = (props: GridProps = {}): RenderResult =>
  render(
    <TestProvider>
      <Grid data-testid="grid" {...props}>
        <Col>1</Col>
        <Col>2</Col>
        <Col>3</Col>
      </Grid>
    </TestProvider>
  );

describe('Grid', () => {
  beforeAll(setupBreakpoints);
  afterEach(cleanup);

  describe('with default props', () => {
    beforeEach(() => renderGrid());

    test('sets display to grid', () => {
      const css = getCSSByTestId('grid');
      expect(css.display).toEqual('grid');
    });

    test('sets 1 column grid', () => {
      const css = getCSSByTestId('grid');
      expect(css.gridTemplateColumns).toEqual('repeat(1, minmax(0, 1fr))');
    });
  });

  describe('when `cols` is set', () => {
    test('sets number of columns for all breakpoints', () => {
      renderGrid({ cols: 4 });
      const css = getCSSByTestId('grid');
      expect(css.gridTemplateColumns).toEqual('repeat(4, minmax(0, 1fr))');
    });

    test('sets `grid-auto-flow` to `row`', () => {
      renderGrid({ cols: 4 });
      const css = getCSSByTestId('grid');
      expect(css.gridAutoFlow).toEqual('row');
    });
  });

  describe('when `rows` is set', () => {
    test('sets number of rows for all breakpoints', () => {
      renderGrid({ rows: 4 });
      const css = getCSSByTestId('grid');
      expect(css.gridTemplateRows).toEqual('repeat(4, minmax(0, 1fr))');
    });

    test('sets `grid-auto-flow` to `column`', () => {
      renderGrid({ rows: 4 });
      const css = getCSSByTestId('grid');
      expect(css.gridAutoFlow).toEqual('column');
    });
  });

  describe('when `gap` is set', () => {
    test('sets gap between rows and columns for all breakpoints', () => {
      renderGrid({ gap: 4 });
      const css = getCSSByTestId('grid');
      expect(css.gap).toEqual('1.6rem');
    });
  });

  describe('when `colGap` is set', () => {
    test('sets `column-gap` for all breakpoints', () => {
      renderGrid({ colGap: 4 });
      const css = getCSSByTestId('grid');
      expect(css.columnGap).toEqual('1.6rem');
    });

    describe('and `gap` is set', () => {
      test('will set `row-gap` instead (only long-hand allowed)', () => {
        renderGrid({ gap: 2, colGap: 4 });
        const css = getCSSByTestId('grid');
        expect(css.gap).toEqual('');
        expect(css.columnGap).toEqual('1.6rem');
        expect(css.rowGap).toEqual('0.8rem');
      });
    });
  });

  describe('when `rowGap` is set', () => {
    test('sets `row-gap` for all breakpoints', () => {
      renderGrid({ rowGap: 4 });
      const css = getCSSByTestId('grid');
      expect(css.rowGap).toEqual('1.6rem');
    });

    describe('and `gap` is set', () => {
      test('will set `column-gap` instead (only long-hand allowed)', () => {
        renderGrid({ gap: 2, rowGap: 4 });
        const css = getCSSByTestId('grid');
        expect(css.gap).toEqual('');
        expect(css.rowGap).toEqual('1.6rem');
        expect(css.columnGap).toEqual('0.8rem');
      });
    });
  });

  describe.each(getBreakpoints())('with prop `%s`', (name, width) => {
    describe('when is set as an integer', () => {
      test('sets the grid number of columns for each breakpoint', () => {
        window.resizeTo(Number.parseInt(width, 10), 1280);

        renderGrid({ [name]: 3 });

        const css = getCSSByTestId('grid');
        expect(css.gridTemplateColumns).toEqual('repeat(3, minmax(0, 1fr))');
      });
    });

    describe('when is set as an object', () => {
      describe('and `cols` is set', () => {
        test('sets number of columns for each breakpoint', () => {
          window.resizeTo(Number.parseInt(width, 10), 1280);

          renderGrid({ [name]: { cols: 3 } });

          const css = getCSSByTestId('grid');
          expect(css.gridTemplateColumns).toEqual('repeat(3, minmax(0, 1fr))');
        });
      });

      describe('and `rows` is set', () => {
        test('sets number of rows for each breakpoint', () => {
          window.resizeTo(Number.parseInt(width, 10), 1280);

          renderGrid({ [name]: { rows: 3 } });

          const css = getCSSByTestId('grid');
          expect(css.gridTemplateRows).toEqual('repeat(3, minmax(0, 1fr))');
        });
      });

      describe('and `gap` is set', () => {
        test('sets gap for each breakpoint', () => {
          window.resizeTo(Number.parseInt(width, 10), 1280);

          renderGrid({ [name]: { gap: 4 } });

          const css = getCSSByTestId('grid');
          expect(css.gap).toEqual('1.6rem');
        });
      });

      describe('and `colGap` is set', () => {
        test('sets `column-gap` for each breakpoint', () => {
          window.resizeTo(Number.parseInt(width, 10), 1280);

          renderGrid({ [name]: { colGap: 4 } });

          const css = getCSSByTestId('grid');
          expect(css.columnGap).toEqual('1.6rem');
        });
      });

      describe('and `rowGap` is set', () => {
        test('sets `row-gap` for each breakpoint', () => {
          window.resizeTo(Number.parseInt(width, 10), 1280);

          renderGrid({ [name]: { rowGap: 4 } });

          const css = getCSSByTestId('grid');
          expect(css.rowGap).toEqual('1.6rem');
        });
      });
    });
  });
});
