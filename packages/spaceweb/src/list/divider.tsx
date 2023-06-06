import { forwardRef } from 'react';
import { useOverrides } from '../overrides';
import ListItem from './list-item';
import { StyledListItemDivider } from './styled-component';
import { DividerProps } from './types';

const Divider = forwardRef<HTMLElement, DividerProps>(
  ({ children, first = false, overrides = {}, className, ...restProps }, ref) => {
    const [Separator, separatorProps] = useOverrides(overrides.Separator, StyledListItemDivider);
    const [SubHeader, subHeaderProps] = useOverrides(overrides.SubHeader, ListItem);
    return children ? (
      <SubHeader
        className={[
          'spr-border-01 border-solid border-b-0 border-l-0 border-r-0 pb-1 mx-0 rounded-0',
          first ? 'border-t-0 pt-0' : 'border-t',
          className,
        ]}
        aria-disabled
        {...restProps}
        {...subHeaderProps}
        ref={ref}
      >
        {children}
      </SubHeader>
    ) : (
      <Separator
        data-spaceweb="divider"
        aria-disabled
        className={className}
        {...restProps}
        ref={ref}
        {...separatorProps}
      />
    );
  }
);

Divider.displayName = 'Divider';

export default Divider;
