import { useState, forwardRef, type ReactNode } from 'react';
import { Box } from 'spaceweb/box';
import { Button } from 'spaceweb/button';
import { List, ListItem } from 'spaceweb/list';
import { Select, Value, StyledOverlayContentContainer } from 'spaceweb/select';
import { Typography } from 'spaceweb/typography';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import { chevronStyles } from 'spaceweb/helpers/commonStyles';

const OverlayContentContainer = forwardRef<
  HTMLElement,
  { onConfirm: () => void; $closePopover: () => void; children: ReactNode }
>(({ onConfirm, $closePopover, children, ...props }, ref) => {
  const handleConfirmation = () => {
    onConfirm();
    $closePopover();
  };
  return (
    <Box>
      <StyledOverlayContentContainer {...props} ref={ref}>
        {children}
      </StyledOverlayContentContainer>
      <Box className="py-2 border-t-1 border-b-0 border-l-0 border-r-0 border-solid spr-border-01 flex justify-end">
        <Button size="sm" className="mr-2" onClick={handleConfirmation} variant="tertiary">
          Add Selected
        </Button>
      </Box>
    </Box>
  );
});

const options = [
  { id: 'AliceBlue', color: '#F0F8FF' },
  { id: 'AntiqueWhite', color: '#FAEBD7' },
  { id: 'Aquamarine', color: '#7FFFD4' },
  { id: 'Azure', color: '#F0FFFF' },
  { id: 'Beige', color: '#F5F5DC' },
  { id: 'Red', color: 'Red' },
  { id: 'Blue', color: 'Blue' },
  { id: 'White', color: 'White' },
  { id: 'Black', color: 'Black' },
  { id: 'Orange', color: 'Orange' },
  { id: 'Violet', color: 'Violet' },
  { id: 'Pink', color: 'Pink' },
  { id: 'Sky', color: 'Sky' },
];

const OverlaySelectWithConfirmation = () => {
  const [confirmedValues, setConfirmedValues] = useState<Value>([]);
  const [selectedValues, setSelectedValues] = useState<Value>([]);
  return (
    <Box>
      <Box>
        <Select
          options={options}
          labelKey="id"
          valueKey="color"
          placeholder="Choose a color"
          type="overlay"
          onChange={({ value: _value }) => {
            setSelectedValues(_value);
          }}
          autoFocus
          filterOutSelected={false}
          closeOnSelect={false}
          multi
          hideSelectAll
          onClose={() => setSelectedValues(confirmedValues)}
          value={selectedValues}
          overrides={{
            OverlayContentContainer: {
              component: OverlayContentContainer,
              props: { onConfirm: () => setConfirmedValues(selectedValues) },
            },
          }}
          overlayWidth="270px"
        >
          {({ isOpen }) => (
            <Button endEnhancer={<ChevronDown size={10} $isOpen={isOpen} style={chevronStyles} />} variant="secondary">
              Select Colors
            </Button>
          )}
        </Select>
      </Box>
      <Box className="mt-4">
        <Typography variant="h6">{confirmedValues.length === 0 ? 'No colors selected' : 'Selected Colors:'}</Typography>
        <List>
          {confirmedValues.map(value => (
            <ListItem>{value.id}</ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default OverlaySelectWithConfirmation;
