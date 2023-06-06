import React from 'react';
import _noop from 'lodash/noop';

import { Typography } from '../typography';
import { Link } from '../link';
import {
  StyledStartEnhancer,
  StyledEndEnhancer,
  StyledListItem,
  StyledSeparator,
  DEFAULT_SEPARATOR,
} from './styled-components';

import { useOverrides, mergeOverrides, Overrides } from '../overrides';

import { BreadcrumbItemProps, BreadcrumbItemSharedProps, Enhancer } from './types';

const breadcrumbItemOverrides = {
  Link: {
    style: [
      'inline-flex text-16 leading-10',
      (_, { $isLastChild }) => {
        return !$isLastChild ? { color: 'inherit', ':focus': { textDecoration: 'underline' } } : {};
      },
    ],
  },
};

const BreadcrumbItem = ({
  children,
  isLastChild = false,
  overrides,
  onClick = _noop,
  index = 0,
  startEnhancer,
  endEnhancer,
  separator = DEFAULT_SEPARATOR,
  gap = 4,
  ...restProps
}: BreadcrumbItemProps) => {
  const sharedProps: BreadcrumbItemSharedProps = {
    $gap: gap,
    $withStartEnhancer: !!startEnhancer,
    $withEndEnhancer: !!endEnhancer,
    $isLastChild: isLastChild,
  };

  const mergedOverrides = mergeOverrides(breadcrumbItemOverrides, overrides as Overrides);

  const [ListItem, listItemProps] = useOverrides(mergedOverrides?.ListItem, StyledListItem);
  const [LinkOverride, linkOverrideProps] = useOverrides(mergedOverrides?.Link, !isLastChild ? Link : Typography);
  const [StartEnhancer, startEnhancerProps] = useOverrides(mergedOverrides?.StartEnhancer, StyledStartEnhancer);
  const [EndEnhancer, endEnhancerProps] = useOverrides(mergedOverrides?.EndEnhancer, StyledEndEnhancer);
  const [BreadcrumbSeparator, separatorWrapperProps] = useOverrides(overrides?.Separator, StyledSeparator);

  const renderEnhancer = (enhancer: Enhancer<BreadcrumbItemSharedProps>): React.ReactNode =>
    typeof enhancer === 'function' ? enhancer(sharedProps) : enhancer;

  return (
    <ListItem data-testid={`breadcrumb-list-item-${index}`} {...sharedProps} {...listItemProps}>
      <LinkOverride
        data-testid={`breadcrumb-item-link-${index}`}
        onClick={e => onClick(e, index)}
        {...sharedProps}
        {...restProps}
        {...linkOverrideProps}
      >
        {startEnhancer && (
          <StartEnhancer
            data-testid={`breadcrumb-item-startenhancer-${index}`}
            {...sharedProps}
            {...startEnhancerProps}
          >
            {renderEnhancer(startEnhancer)}
          </StartEnhancer>
        )}
        {children}
        {endEnhancer && (
          <EndEnhancer data-testid={`breadcrumb-item-endenhancer-${index}`} {...sharedProps} {...endEnhancerProps}>
            {renderEnhancer(endEnhancer)}
          </EndEnhancer>
        )}
      </LinkOverride>
      {!isLastChild && (
        <BreadcrumbSeparator
          data-testid={`breadcrumb-item-separator-${index}`}
          aria-hidden
          {...sharedProps}
          {...separatorWrapperProps}
        >
          {separator}
        </BreadcrumbSeparator>
      )}
    </ListItem>
  );
};

BreadcrumbItem.displayName = 'BreadcrumbItem';
export default BreadcrumbItem;
