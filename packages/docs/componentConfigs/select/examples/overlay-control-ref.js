import { useState, forwardRef, useRef } from 'react';
import { Box } from 'spaceweb/box';
import { Stack } from 'spaceweb/stack';
import { Button } from 'spaceweb/button';
import { Select, StyledOverlayContentContainer } from 'spaceweb/select';
import { chevronStyles } from 'spaceweb/helpers/commonStyles';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';

const OverlayContainerWithCTAs = ({ onFocus, onBlur, setInputValue, children, ...props }) => (
  <StyledOverlayContentContainer {...props} $overlayWidth="400px">
    {children}
    <Box className="py-2 border-t-1 border-b-0 border-l-0 border-r-0 border-solid spr-border-01 flex justify-end mr-3">
      <Stack direction="horizontal" gap={2}>
        <Button size="sm" onClick={onFocus}>
          Focus
        </Button>
        <Button size="sm" onClick={onBlur}>
          Blur
        </Button>
        <Button size="sm" onClick={() => setInputValue('orange')}>
          Set value to `orange`
        </Button>
      </Stack>
    </Box>
  </StyledOverlayContentContainer>
);

const options = [
  { id: 'AliceBlue', color: '#F0F8FF' },
  { id: 'AntiqueWhite', color: '#FAEBD7' },
  { id: 'Aquamarine', color: '#7FFFD4' },
  { id: 'Azure', color: '#F0FFFF' },
  { id: 'Beige', color: '#F5F5DC' },
];

const MethodsRef = () => {
  const [selectedValues, setSelectedValues] = useState([]);
  const controlRef = useRef(null);
  console.log('controlRef', controlRef);
  return (
    <Stack direction="vertical" gap={5}>
      <Stack direction="horizontal" gap={2} shrink>
        <Button size="sm" onClick={() => controlRef.current?.setDropdownOpen(true)}>
          Open Dropdown
        </Button>
        <Button size="sm" onClick={() => controlRef.current?.setDropdownOpen(false)}>
          Close Dropdown
        </Button>
      </Stack>
      <Select
        options={options}
        labelKey="id"
        valueKey="color"
        placeholder="Choose a color"
        onChange={({ value: _value }) => {
          setSelectedValues(_value);
        }}
        value={selectedValues}
        overrides={{
          OverlayContentContainer: {
            component: OverlayContainerWithCTAs,
            props: {
              onFocus: controlRef.current?.focus,
              onBlur: controlRef.current?.blur,
              setInputValue: controlRef.current?.setInputValue,
            },
          },
        }}
        controlRef={controlRef}
        type="overlay"
      >
        {({ isOpen }) => (
          <Button endEnhancer={<ChevronDown size={10} $isOpen={isOpen} style={chevronStyles} />} variant="secondary">
            {selectedValues[0]?.id || 'Select Color'}
          </Button>
        )}
      </Select>
    </Stack>
  );
};

export default MethodsRef;
