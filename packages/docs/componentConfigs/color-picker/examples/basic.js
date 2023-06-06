import { useState, useCallback } from 'react';
import { ColorPicker } from 'spaceweb/color-picker';
import { Box } from 'spaceweb/box';

export default () => {
  const [bgColor, setBgColor] = useState();
  const handleBgChange = useCallback(color => setBgColor(color), []);
  return (
    <Box className="flex justify-center">
      <ColorPicker heading="Cell Color" value={bgColor} onChange={handleBgChange} />
    </Box>
  );
};
