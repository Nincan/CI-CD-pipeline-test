import { forwardRef, useMemo } from 'react';
import { styled } from '../style';
import { add$props } from '../helpers';
import { StackItemProps } from './types';
import { useStack } from './context';

const StyledItem = styled('div', 'flex-shrink', (utils, { $shrink }) => {
  return $shrink ? 'flex-grow-0' : 'flex-grow';
});

const StackItem = forwardRef<HTMLElement, React.PropsWithChildren<StackItemProps>>((props, ref) => {
  const { className, shrink } = useStack();
  const { shrink: shrinkFromProps, className: propsClassName, index, ...restProps } = props;
  const sharedProps = add$props({ shrink: typeof shrinkFromProps !== 'undefined' ? shrinkFromProps : shrink });
  const classNames = useMemo(() => (index !== 0 ? [className, propsClassName] : propsClassName), [
    className,
    propsClassName,
    index,
  ]);
  return (
    <StyledItem
      data-testid="stack-item"
      data-spaceweb="stack-item"
      ref={ref}
      className={classNames}
      {...restProps}
      {...sharedProps}
    />
  );
});

StackItem.displayName = 'StackItem';

export default StackItem;
