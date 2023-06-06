import { useMemo } from 'react';
import * as React from 'react';

import { StackProps } from './types';
import { Styles } from '../types';
import { useOverrides } from '../overrides';
import { Box } from '../box';
import StackItem from './stack-item';
import { StackProvider } from './context';

const BREAKPOINTS = ['sm', 'md', 'lg', 'xl'];

const modifyGapParam = gap =>
  gap < 0
    ? {
        prefix: '-',
        gapVal: Math.abs(gap),
      }
    : {
        prefix: '',
        gapVal: gap,
      };

const getStackClassNames = (
  props: Omit<StackProps, 'overrides'>
): { stackClassName: Styles; stackItemClassName: Styles } => {
  const { direction, gap } = props;

  const { prefix, gapVal } = modifyGapParam(gap);

  const stackClassName: Styles = [direction === 'horizontal' ? 'flex flex-row' : 'flex flex-col'];
  const stackItemClassName: Styles = [direction === 'horizontal' ? `${prefix}ml-${gapVal}` : `${prefix}mt-${gapVal}`];

  BREAKPOINTS.forEach(bp => {
    if (props[bp]) {
      stackClassName.push(
        props[bp].direction === 'horizontal' ? `${bp}:flex ${bp}:flex-row` : `${bp}:flex ${bp}:flex-col`
      );

      const { prefix: prefixBp, gapVal: gapValBp } = modifyGapParam(props[bp].gap);
      stackItemClassName.push(() => {
        const marginDir = 'ml';
        return props[bp].direction === 'horizontal'
          ? `${bp}:${prefixBp}${marginDir}-${gapValBp} ${bp}:mt-0`
          : `${bp}:${prefixBp}mt-${gapValBp} ${bp}:${marginDir}-0`;
      });
    }
  });
  return { stackClassName, stackItemClassName };
};

const Stack = React.forwardRef<HTMLElement, StackProps>((props, ref) => {
  const { overrides, sm, md, lg, xl, gap, direction, children, className, shrink, ...restProps } = props;
  const [Comp, overrideProps] = useOverrides(overrides?.Stack, Box);

  const { stackClassName, stackItemClassName } = useMemo(
    () => getStackClassNames({ sm, md, lg, xl, gap, direction }),
    [sm, md, lg, xl, gap, direction]
  );
  const enrichedClassName = useMemo(() => [stackClassName, className], [stackClassName, className]);

  const validChildren = React.Children.toArray(children).filter(React.isValidElement);
  return (
    <StackProvider value={{ className: stackItemClassName, shrink }}>
      <Comp
        data-spaceweb="stack"
        data-testid="stack"
        ref={ref}
        className={enrichedClassName}
        {...overrideProps}
        {...restProps}
      >
        {validChildren.map((child: React.ReactElement, index: number) =>
          typeof child === 'object' && child.type === StackItem ? (
            React.cloneElement(child, { index })
          ) : (
            <StackItem index={index} key={child.key}>
              {child}
            </StackItem>
          )
        )}
      </Comp>
    </StackProvider>
  );
});

Stack.displayName = 'Stack';

export default Stack;
