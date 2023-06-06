import { ReactElement, useCallback } from 'react';
import { ButtonGroup } from 'spaceweb/button-group';
import { Button, ButtonProps } from 'spaceweb/button';
import ChevronDown from 'spaceweb-icons/solid/ChevronDown';
import { StatefulPopover } from 'spaceweb/popover';
import { MenuItem, Menu } from 'spaceweb/menu';

const actions = [
  { label: 'Publish', value: 'publish' },
  { label: 'Publish as Draft', value: 'draft' },
  { label: 'Send for Approval', value: 'approval' },
];

const onAction: (action: string) => void = action => alert(action);

const PopoverIconButton = (props: ButtonProps): ReactElement => (
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

const SplitButton = (): ReactElement => {
  const onClick = useCallback(() => onAction(actions?.[0]?.value), [onAction, actions]);
  return (
    <ButtonGroup>
      <Button onClick={onClick}>{actions?.[0]?.label}</Button>
      <PopoverIconButton />
    </ButtonGroup>
  );
};

export default SplitButton;
