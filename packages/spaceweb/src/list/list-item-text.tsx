import { useOverrides } from '../overrides';
import { StyledListItemText, StyledPrimaryText, StyledSecondaryText } from './styled-component';
import { ListItemTextProps } from './types';

const ListItemText = ({ overrides = {}, children, secondary }: ListItemTextProps) => {
  const [Root, rootProps] = useOverrides(overrides.Root, StyledListItemText);
  const [PrimaryText, primaryTextProps] = useOverrides(overrides.PrimaryText, StyledPrimaryText);
  const [SecondaryText, secondaryTextProps] = useOverrides(overrides.SecondaryText, StyledSecondaryText);

  return (
    <Root data-spaceweb="list-item-text" data-testid="list-item-text" {...rootProps}>
      {children && <PrimaryText {...primaryTextProps}>{children}</PrimaryText>}
      {secondary && <SecondaryText {...secondaryTextProps}>{secondary}</SecondaryText>}
    </Root>
  );
};

export default ListItemText;
