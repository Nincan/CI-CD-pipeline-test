import { useState, useCallback } from 'react';
import { ColorPicker } from 'spaceweb/color-picker';
import { StatefulPopover } from 'spaceweb/popover';
import { Box } from 'spaceweb/box';
import { Button } from 'spaceweb/button';
import FillColorIcon from 'spaceweb-icons/solid/FillColour';

const OVERRIDES = {
  Swatch: {
    props: {
      className: 'rounded-4 w-8',
    },
  },
  TickIcon: {
    props: {
      size: 12,
    },
  },
  Swatches: {
    props: {
      rowGap: 2,
      colGap: 2,
    },
  },
};
export default () => {
  const [bgColor, setBgColor] = useState();
  const [textColor, setTextColor] = useState();
  const handleBgChange = useCallback(color => setBgColor(color), []);
  const handleTextColorChange = useCallback(color => setTextColor(color), []);
  return (
    <StatefulPopover
      content={() => (
        <Box className="p-3 flex">
          <Box className="border-r-1 border-l-0 border-t-0 border-b-0 border-solid spr-border-03 pr-3">
            <ColorPicker overrides={OVERRIDES} heading="Cell Color" value={bgColor} onChange={handleBgChange} />
          </Box>
          <Box className="pl-3">
            <ColorPicker
              overrides={OVERRIDES}
              heading="Text Color"
              value={textColor}
              onChange={handleTextColorChange}
            />
          </Box>
        </Box>
      )}
    >
      {({ isOpen }) => (
        <Button startEnhancer={<FillColorIcon />} size="xs" isSelected={isOpen} variant="secondary">
          Color
        </Button>
      )}
    </StatefulPopover>
  );
};
