import * as React from 'react';
import { FormControl } from 'spaceweb/form-control';
import { StatefulInput } from 'spaceweb/input';

export default (): React.ReactElement => (
  <FormControl label="Account No." layout="horizontal">
    <StatefulInput id="input-id-form" placeholder="Enter your account number here" />
  </FormControl>
);
