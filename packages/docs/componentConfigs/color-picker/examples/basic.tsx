import { ReactElement, useState, useCallback } from 'react';

import { ColorPicker } from 'spaceweb/color-picker';
import { Box } from 'spaceweb/box';

export default (): ReactElement => {
  const [bgColor, setBgColor] = useState<string | undefined>();

  const handleBgChange = useCallback(color => setBgColor(color), []);

  return (
    <Box className="flex justify-center">
      <ColorPicker heading="Cell Color" value={bgColor} onChange={handleBgChange} />
    </Box>
  );
};
