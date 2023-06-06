import { FormControl } from 'spaceweb/form-control';
import { StatefulInput } from 'spaceweb/input';

export default () => (
  <FormControl label="Account No." layout="horizontal">
    <StatefulInput id="input-id-form" placeholder="Enter your account number here" />
  </FormControl>
);
