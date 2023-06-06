import { useCallback } from 'react';
import { ButtonGroup } from 'spaceweb/button-group';
import { Button } from 'spaceweb/button';
import ChevronDown from 'spaceweb-icons/solid/ChevronDown';
import { StatefulPopover } from 'spaceweb/popover';
import { MenuItem, Menu } from 'spaceweb/menu';

const actions = [
  { label: 'Publish', value: 'publish' },
  { label: 'Publish as Draft', value: 'draft' },
  { label: 'Send for Approval', value: 'approval' },
];

const onAction = action => alert(action);

const PopoverIconButton = props => (
  <StatefulPopover
    content={
      <Menu>
        {actions.slice(1).map(action => (
          <MenuItem onClick={() => onAction(action.value)}>{action.label}</MenuItem>
        ))}
      </Menu>
    }
  >
    <Button {...props} size="md" className={({ px2rem }) => ({ minWidth: px2rem(26) })}>
      <ChevronDown />
    </Button>
  </StatefulPopover>
);

const SplitButton = () => {
  const onClick = useCallback(() => onAction(actions?.[0]?.value), [onAction, actions]);
  return (
    <ButtonGroup>
      <Button onClick={onClick}>{actions?.[0]?.label}</Button>
      <PopoverIconButton />
    </ButtonGroup>
  );
};

export default SplitButton;
