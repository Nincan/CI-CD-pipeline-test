import { useCallback, useState } from 'react';
import { Box } from 'spaceweb/box';
import { Input } from 'spaceweb/input';

const InputDebounce = () => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);
  const handleDebouncedChange = useCallback(e => setDebouncedValue(e.target.value), []);
  return (
    <Box>
      <Input
        clearable
        value={value}
        variant="default"
        placeholder="Type here"
        onChange={handleChange}
        debouncedOnChange={handleDebouncedChange}
        debounceInterval={500}
      />
      <br />
      <Input disabled value={debouncedValue} placeholder="Debounce values will appear here" />
    </Box>
  );
};
export default InputDebounce;
