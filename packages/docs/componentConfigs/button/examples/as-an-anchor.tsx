import * as React from 'react';
import { Button } from 'spaceweb/button';

export default (): React.ReactNode => (
  <Button $as="a" href="https://styletron.org" target="_blank" rel="noopener noreferrer">
    Visit the Styletron docs
  </Button>
);
