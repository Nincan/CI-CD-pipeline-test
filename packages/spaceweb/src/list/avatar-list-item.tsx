import { forwardRef } from 'react';
import { Avatar, AvatarProps } from '../avatar';
import { Stack } from '../stack';
import ListItem from './list-item';
import { ListItemProps } from './types';
import { Override, useOverrides } from '../overrides';

type SharedProps = { $item?: Record<string, any>; $labelKey?: string; $valueKey?: string; $multi?: boolean };
type Props = Omit<ListItemProps, 'overrides'> &
  SharedProps & {
    avatarProps: AvatarProps;
    overrides?: Required<ListItemProps>['overrides'] & { Avatar?: Override<Record<string, any>> };
  };

const AvatarListItem = forwardRef<HTMLLIElement, Props>(
  ({ $item, $labelKey, $valueKey, $multi, children, startEnhancer, avatarProps, overrides, ...menuItemProps }, ref) => {
    const sharedProps = { $item, $labelKey, $valueKey, $multi };

    const [AvatarComponent, avatarOverrideProps] = useOverrides(overrides?.Avatar, Avatar);
    const startEnhancerOverride = enhancerProps => (
      <Stack direction="horizontal" gap={1} className="items-center">
        {typeof startEnhancer === 'function' ? startEnhancer({ ...enhancerProps, ...sharedProps }) : startEnhancer}
        <AvatarComponent size="md" {...avatarProps} {...avatarOverrideProps} />
      </Stack>
    );

    return (
      <ListItem
        startEnhancer={startEnhancerOverride}
        overrides={overrides}
        {...menuItemProps}
        className={['py-1', menuItemProps?.className]}
        ref={ref}
      >
        {children}
      </ListItem>
    );
  }
);

AvatarListItem.displayName = 'AvatarListItem';

export default AvatarListItem;
