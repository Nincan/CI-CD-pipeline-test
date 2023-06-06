import { ReactNode } from 'react';
import { Button } from 'spaceweb/button';
import ChevronDown from '@sprinklr/spaceweb-icons/solid/ChevronDown';
import AddIcon from '@sprinklr/spaceweb-icons/solid/Add';
import { Stack } from 'spaceweb/stack';

export default (): ReactNode => (
  <Stack direction="horizontal" gap={4} shrink>
    <Button startEnhancer={<AddIcon />}>Add</Button>
    <Button variant="secondary" startEnhancer={<AddIcon />}>
      Add
    </Button>
    <Button variant="tertiary" startEnhancer={<AddIcon />}>
      Add
    </Button>
    <Button endEnhancer={<ChevronDown className="transform -rotate-90" />}>End Enhancer</Button>
  </Stack>
);
