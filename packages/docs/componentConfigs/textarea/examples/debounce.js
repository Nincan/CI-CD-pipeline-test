import { useCallback, useState } from 'react';
import { Box } from 'spaceweb/box';
import { Textarea } from 'spaceweb/textarea';

const TextareaDebounce = () => {
  const [debouncedValue, setDebouncedValue] = useState('');
  const [value, setValue] = useState('');

  const handleChange = e => setValue(e.target.value);
  const handleDebouncedChange = useCallback(e => setDebouncedValue(e.target.value), []);
  return (
    <Box>
      <Textarea
        value={value}
        variant="default"
        placeholder="Type here"
        onChange={handleChange}
        debouncedOnChange={handleDebouncedChange}
        debounceInterval={500}
      />
      <br />
      <Textarea disabled value={debouncedValue} placeholder="Debounce values will appear here" />
    </Box>
  );
};
export default TextareaDebounce;
