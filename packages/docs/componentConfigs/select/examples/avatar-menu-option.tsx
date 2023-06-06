import * as React from 'react';
import { AvatarProps } from 'spaceweb/avatar';
import { AvatarListItem, ListItem, ListItemText } from 'spaceweb/list';
import { Select, SELECT_ALL_ID, Value } from 'spaceweb/select';
import { AvatarTag } from 'spaceweb/tag';

type ProfileListItemProps = {
  $item: {
    color: string;
    id: string;
    src?: string;
  };
  $valueKey: string;
};

const avatarOverrides: AvatarProps['overrides'] = { Root: { style: { marginLeft: '4px' } } };

const ProfileListItem = React.forwardRef<HTMLLIElement, ProfileListItemProps>((props, ref) => {
  const isSelectAllItem = props.$item[props.$valueKey] === SELECT_ALL_ID;
  return isSelectAllItem ? (
    <ListItem {...props} ref={ref} />
  ) : (
    <AvatarListItem
      {...props}
      avatarProps={{ name: props.$item.id, src: props.$item.src, overrides: avatarOverrides }}
      ref={ref}
    />
  );
});

const ProfileTag = props => (
  <AvatarTag {...props} className="ml-1 mr-1 mb-1 mt-1" avatarProps={{ name: props.$item.id, src: props.$item.src }} />
);

export default (): React.ReactElement => {
  const [value, setValue] = React.useState<Value>([]);
  return (
    <Select
      size="md"
      multi
      closeOnSelect={false}
      filterOutSelected={false}
      options={[
        { id: 'AliceBlue', color: '#F0F8FF', secondary: '@AliceBlue', src: 'https://bit.ly/3dcBo1S' },
        { id: 'AntiqueWhite', color: '#FAEBD7', secondary: '@AntiqueWhite', src: 'https://bit.ly/3dcBo1S' },
        { id: 'Aqua', color: '#00FFFF', secondary: '@Aqua' },
        { id: 'Aquamarine', color: '#7FFFD4', secondary: 'Seconday Text', src: 'https://bit.ly/3dcBo1S' },
        { id: 'Azure', color: '#F0FFFF', secondary: '@Azure' },
        { id: 'Beige', color: '#F5F5DC', secondary: '@Beige', src: 'https://bit.ly/3dcBo1S' },
      ]}
      labelKey="id"
      valueKey="color"
      value={value}
      onChange={({ value: _value }): void => setValue(_value)}
      overrides={{
        MenuItem: { props: { overrides: { ListItem: ProfileListItem } } },
        MultiValue: { props: { overrides: { Tag: ProfileTag } } },
        ListItemText: ({ $item, ...rest }): React.ReactElement => (
          <ListItemText {...rest} secondary={$item.secondary} />
        ),
      }}
    />
  );
};
