import { AllFields } from 'componentConfigs/forms/examples/all-fields';
import { Box } from 'spaceweb/box';
import SprinklrClrIcon from '@sprinklr/spaceweb-icons/brand/SprinklrClr';
import { Button } from 'spaceweb/button';

export default () => (
  <Box className="spr-ui-02 w-full flex-col overflow-hidden">
    <Box className={['w-full spr-ui-01 flex flex-row items-center p-1 fixed top-0 z-10', { height: '42px' }]}>
      <SprinklrClrIcon size={24} className="ml-2" />
    </Box>
    <Box className={['w-10/24 mx-auto', { paddingTop: '42px', paddingBottom: '56px' }]}>
      <AllFields />
    </Box>
    <Box className={['w-full spr-ui-01 flex-row flex justify-end p-2 fixed bottom-0', { height: '56px' }]}>
      <Button variant="secondary" $as="a" href="/forms/form-examples">
        Cancel
      </Button>
    </Box>
  </Box>
);
