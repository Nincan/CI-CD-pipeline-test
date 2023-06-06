import * as React from 'react';
import { Input } from 'spaceweb/input';

const NativeInputProps = () => {
  const [value, setValue] = React.useState('');
  return (
    <Input
      value={value}
      type="file"
      onChange={event => setValue(event.currentTarget.value)}
      placeholder="Upload"
      overrides={{
        Input: {
          props: {
            accept: 'video/*',
          },
        },
      }}
    />
  );
};

export default NativeInputProps;
