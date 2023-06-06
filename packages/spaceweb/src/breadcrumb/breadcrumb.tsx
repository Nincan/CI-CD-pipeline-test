import React from 'react';
import BreadcrumbItem from './breadcrumb-item';
import { BreadcrumbProps, BreadcrumbSharedProps } from './types';
import { useOverrides } from '../overrides';
import { DEFAULT_SEPARATOR, StyledWrapper } from './styled-components';

const Breadcrumb = ({
  children,
  separator = DEFAULT_SEPARATOR,
  gap = 4,
  overrides = {},
}: BreadcrumbProps) => {
  const [Root, rootProps] = useOverrides(overrides?.Root, StyledWrapper);

  const sharedProps: BreadcrumbSharedProps = { $gap: gap };

  const validChildren = React.Children.toArray(children).filter(React.isValidElement);

  const breadcrumbItems = validChildren.map((child: React.ReactElement, index: number) =>
    child.type === BreadcrumbItem ? (
      React.cloneElement(child, {
        key: child.key ?? `breadcrumbItem-${index}`,
        separator: child.props.separator ?? separator,
        gap: child.props.gap ?? gap,
      })
    ) : (
      <BreadcrumbItem {...sharedProps} key={`breadcrumbItem-${index}`} separator={separator} gap={gap}>
        {child}
      </BreadcrumbItem>
    )
  );

  return (
    <nav>
      <Root data-testid="breadcrumb-root" {...sharedProps} {...rootProps}>
        {React.Children.map(breadcrumbItems, (breadcrumbItem, index) => {
          const isLastChild = index === breadcrumbItems.length - 1;
          return React.cloneElement(breadcrumbItem, { isLastChild, index });
        })}
      </Root>
    </nav>
  );
};

Breadcrumb.displayName = 'Breadcrumb';

export default Breadcrumb;
