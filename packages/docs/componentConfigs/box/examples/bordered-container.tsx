import { ReactElement } from 'react';
import { Box } from 'spaceweb/box';

const onUpload = event => alert('Uploaded');

const BorderedContainer = (): ReactElement => (
  <Box className="border-2 border-solid spr-border-04 h-64 w-64 flex flex-col spr-ui-02">
    <Box
      onClick={onUpload}
      className="spr-text-04 flex-grow flex justify-center items-center border border-dashed spr-border-03 m-2 text-xl spr-ui-01 hover:spr-ui-hover hover:cursor-pointer"
    >
      Upload (Click Me)
    </Box>
    <Box className="spr-support-error-text flex-grow flex justify-center items-center border spr-border-02 spr-ui-01 hover:spr-support-error-highlight hover:cursor-not-allowed text-lg m-2">
      Error
    </Box>
  </Box>
);
export default BorderedContainer;
