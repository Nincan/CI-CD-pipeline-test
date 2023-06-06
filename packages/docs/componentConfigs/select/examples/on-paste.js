import { useState, useCallback } from 'react';
import copyToClipboard from 'copy-to-clipboard';

import { Select } from 'spaceweb/select';
import { Box } from 'spaceweb/box';
import { IconButton } from 'spaceweb/button';
import CopyIcon from '@sprinklr/spaceweb-icons/line/Copy';

const OnPaste = () => {
  const [value, setValue] = useState([]);

  const handlePaste = useCallback(e => {
    const clipboardText = e.clipboardData.getData('text/plain');
    // pre-process values
    const commaSeparatedValues = clipboardText.split(',').map(label => ({ id: label, label }));

    // text won't be visible in the input
    e.preventDefault();

    return commaSeparatedValues;
  }, []);

  return (
    <Box className="flex items-center">
      <Select
        creatable
        multi
        closeOnSelect={false}
        filterOutSelected={false}
        options={[
          { id: 'Portland', label: 'Portland' },
          { id: 'NYC', label: 'New York City' },
          { id: 'LosAngeles', label: 'Los Angeles' },
          { id: 'Boston', label: 'Boston' },
          { id: 'Atlanta', label: 'Atlanta' },
          { id: 'SanFrancisco', label: 'San Francisco' },
        ]}
        labelKey="label"
        valueKey="id"
        onChange={({ value: _value }) => setValue(_value)}
        value={value}
        onPaste={handlePaste}
      />
      <Box className="ml-4">
        <IconButton
          size="sm"
          onClick={() => copyToClipboard('Delhi, Mumbai, Pune')}
          tooltipContent="Copy 'Delhi, Mumbai, Pune'"
        >
          <CopyIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
export default OnPaste;
