import { FormControl } from 'spaceweb/form-control';
import { Input } from 'spaceweb/input';

export default () => (
  <>
    <FormControl label="Input label" caption="Input caption">
      <Input />
    </FormControl>
    <FormControl intent="error" label="Input label" caption="Error caption">
      <Input intent="error" />
    </FormControl>
  </>
);
