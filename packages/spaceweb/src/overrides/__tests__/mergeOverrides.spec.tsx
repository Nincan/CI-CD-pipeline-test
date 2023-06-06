import { render } from '@testing-library/react';
import * as React from 'react';
import { TestProvider, getCSSByTestId } from '../../test-utils/test-provider';

import { styled } from '../../style';
import { StyleAtom, StyleObject } from '../../types';
import { mergeOverrides } from '../mergeOverrides';

describe('mergeOverrides', function () {
  it('should merge styles of the same component only.', () => {
    const merged = mergeOverrides(
      { A: { style: { color: 'red', padding: 0 } }, B: { style: { color: 'blue' } } },
      { A: { style: { color: 'green', display: 'flex' } } }
    );

    expect(merged).toEqual({
      A: {
        style: [
          { color: 'red', padding: 0 },
          { color: 'green', display: 'flex' },
        ],
      },
      B: { style: { color: 'blue' } },
    });
  });
  it('when component override is not an object then it should convert it to object.', () => {
    const ComponentA = (): React.ReactElement => <div />;
    const ComponentB = (): React.ReactElement => <span />;

    let merged = mergeOverrides({ A: ComponentA }, { A: { component: ComponentB } });
    expect(merged).toEqual({ A: { component: ComponentB } });

    merged = mergeOverrides({ A: ComponentA }, { A: { props: { display: 'none' } } });
    expect(merged).toEqual({ A: { component: ComponentA, props: { display: 'none' } } });
  });

  it('when component override is not an object and component is memoized then it should convert it to object.', () => {
    const ComponentA = React.memo((): React.ReactElement => <div />);
    const ComponentB = (): React.ReactElement => <span />;

    let merged = mergeOverrides({ A: ComponentA }, { A: { component: ComponentB } });
    expect(merged).toEqual({ A: { component: ComponentB } });

    merged = mergeOverrides({ A: ComponentA }, { A: { props: { display: 'none' } } });
    expect(merged).toEqual({ A: { component: ComponentA, props: { display: 'none' } } });
  });

  it('should merge styles returned by style function and style object', () => {
    const mergedOverride = mergeOverrides(
      { A: { style: (): StyleObject => ({ color: 'red', padding: 0 }) } },
      { A: { style: { color: 'green', display: 'flex' } } }
    );

    expect(mergedOverride).toEqual({ A: { style: [expect.any(Function), { color: 'green', display: 'flex' }] } });

    const DummyStyled = styled('div');
    render(
      <TestProvider>
        <DummyStyled data-testid="dummy" $style={mergedOverride.A.style} />
      </TestProvider>
    );
    const styles = getCSSByTestId('dummy');
    expect(styles.color).toBe('green');
    expect(styles.padding).toBe('0px');
    expect(styles.display).toBe('flex');
  });
  it('should merge styles based on prop provided to style function', () => {
    const mergedOverride = mergeOverrides<{ $color?: string }>(
      { A: { style: ({ theme }): StyleObject => ({ color: 'red', padding: theme.padding['0'] }) } },
      { A: { style: (utils, { $color }): StyleObject => ({ color: $color, display: 'flex' }) } }
    );

    expect(mergedOverride).toEqual({ A: { style: [expect.any(Function), expect.any(Function)] } });
    const DummyStyled = styled('div');
    render(
      <TestProvider>
        <DummyStyled data-testid="dummy" $color="green" $style={mergedOverride.A.style} />
      </TestProvider>
    );

    const styles = getCSSByTestId('dummy');
    expect(styles.color).toBe('green');
    expect(styles.padding).toBe('0px');
    expect(styles.display).toBe('flex');
  });
  it('should merge props', () => {
    const mergedOverride = mergeOverrides(
      { A: { props: { propA: 'red', propB: 0 } } },
      { A: { props: { propA: 'green', propC: 'flex' } } }
    );

    expect(mergedOverride).toEqual({ A: { props: { propA: 'green', propB: 0, propC: 'flex' } } });
  });
  it('should merge components', () => {
    const MockComponent1 = props => <div {...props} />;
    const MockComponent2 = props => <div {...props} />;

    let mergedOverride = mergeOverrides({ A: { component: MockComponent1 } }, { A: MockComponent2 });
    expect(mergedOverride).toEqual({ A: { component: MockComponent2 } });

    mergedOverride = mergeOverrides({ A: MockComponent1 }, { A: MockComponent2 });
    expect(mergedOverride).toEqual({ A: { component: MockComponent2 } });

    mergedOverride = mergeOverrides({ A: MockComponent1 }, { A: { component: MockComponent2 } });
    expect(mergedOverride).toEqual({ A: { component: MockComponent2 } });
  });
  describe('deep Merge', function () {
    it('should deep merge props', () => {
      const mergedOverride = mergeOverrides(
        { A: { props: { propA: { propAa: 1, propAb: 'propAb' } } } },
        { A: { props: { propA: { propAa: 5 } } } }
      );

      expect(mergedOverride).toEqual({ A: { props: { propA: { propAa: 5, propAb: 'propAb' } } } });
    });
    it('should deep merge overrides', () => {
      const mockStyleFn = (): StyleAtom => 'pt-1';
      const mergedOverride = mergeOverrides(
        { MenuItem: { props: { button: true, overrides: { ListItem: { style: mockStyleFn } } } } },
        { MenuItem: { props: { overrides: { ListItem: { style: 'pb-1' } } } } }
      );

      expect(mergedOverride).toEqual({
        MenuItem: { props: { button: true, overrides: { ListItem: { style: [mockStyleFn, 'pb-1'] } } } },
      });
    });
    it('should combine refs instead of overriding', () => {
      const refA = React.createRef();
      const refB = React.createRef();
      const mergedOverride = mergeOverrides({ A: { props: { ref: refA } } }, { A: { props: { ref: refB } } });

      expect(mergedOverride).toEqual({ A: { props: { ref: expect.any(Function) } } });
      // @ts-ignore
      mergedOverride.A.props.ref(document.body);
      // both refA & refB should have value
      expect(refA.current).toBe(document.body);
      expect(refB.current).toBe(document.body);
    });
    describe('should not deep merge if values are React Element', function () {
      it("keeps element's reference same", () => {
        const X = () => null;
        const xElement = <X />;
        const mergedOverride = mergeOverrides(
          { Popover: { props: { content: xElement } } },
          { Popover: { props: { placement: 'bottom' } } }
        );

        // @ts-ignore
        expect(mergedOverride.Popover.props.content).toBe(xElement);
      });
      it("keeps component's reference same", () => {
        const Comp = () => null;

        const mergedOverride = mergeOverrides(
          { Popover: { props: { comp: Comp } } },
          { Popover: { props: { placement: 'bottom' } } }
        );

        // @ts-ignore
        expect(mergedOverride.Popover.props.comp).toBe(Comp);
      });
      it("keeps memoized component's reference same", () => {
        const Comp = React.memo(() => null);

        const mergedOverride = mergeOverrides(
          { Popover: { props: { memoizedComp: Comp } } },
          { Popover: { props: { placement: 'bottom' } } }
        );

        // @ts-ignore
        expect(mergedOverride.Popover.props.memoizedComp).toBe(Comp);
      });
      it('does not merge props of react elements.', () => {
        const X = ({ arr }) => null;
        const xElement = <X arr={[1, 2, 3]} />;
        const anotherXElement = <X arr={[4, 5, 6]} />;
        const mergedOverride = mergeOverrides(
          { Popover: { props: { content: xElement } } },
          { Popover: { props: { content: anotherXElement } } }
        );

        // @ts-ignore
        expect(mergedOverride.Popover.props.content).toBe(anotherXElement);
      });
    });

    describe('Should keep same reference of react component when merging overrides', function () {
      it("Should keep component's reference same when passed through component override as an object", () => {
        const Comp = () => null;
        const mergedOverride = mergeOverrides(
          { Popover: { component: Comp } },
          { Popover: { props: { placement: 'bottom' } } }
        );

        // @ts-ignore
        expect(mergedOverride.Popover.component).toBe(Comp);
      });

      it("Should keep component's reference same when passed through directly", () => {
        const Comp = () => null;
        const mergedOverride = mergeOverrides({ Popover: Comp }, { Popover: { props: { placement: 'bottom' } } });

        // @ts-ignore
        expect(mergedOverride.Popover.component).toBe(Comp);
      });
    });

    describe('Should keep same reference of memoized react component when merging overrides', function () {
      it("Should keep component's reference same when passed through component override as an object", () => {
        const Comp = React.memo(() => null);
        const mergedOverride = mergeOverrides(
          { Popover: { component: Comp } },
          { Popover: { props: { placement: 'bottom' } } }
        );

        // @ts-ignore
        expect(mergedOverride.Popover.component).toBe(Comp);
      });

      it("Should keep component's reference same when passed as a prop", () => {
        const Comp = React.memo(() => null);
        const mergedOverride = mergeOverrides(
          { Popover: { props: { x: Comp } } },
          { Popover: { props: { placement: 'bottom' } } }
        );

        // @ts-ignore
        expect(mergedOverride.Popover.props.x).toBe(Comp);
      });

      it("Should keep component's reference same when passed through directly", () => {
        const Comp = React.memo(() => null);
        const mergedOverride = mergeOverrides({ Popover: Comp }, { Popover: { props: { placement: 'bottom' } } });

        // @ts-ignore
        expect(mergedOverride.Popover.component).toBe(Comp);
      });
    });
  });
});
