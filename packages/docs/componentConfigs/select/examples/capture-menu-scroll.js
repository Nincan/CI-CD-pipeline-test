import { useState } from 'react';
import { Select } from 'spaceweb/select';

const CaptureMenuScroll = () => {
  const [value, setValue] = useState([]);
  return (
    <Select
      options={[
        { id: 'AliceBlue', color: '#F0F8FF' },
        { id: 'AntiqueWhite', color: '#FAEBD7' },
        { id: 'Aqua', color: '#00FFFF' },
        { id: 'Aquamarine', color: '#7FFFD4' },
        { id: 'Azure', color: '#F0FFFF' },
        { id: 'Beige', color: '#F5F5DC' },
        { id: 'Bisque', color: '#ffe4c4' },
        { id: 'Black', color: '#000000' },
        { id: 'Blanchedalmond', color: '#ffebcd' },
      ]}
      labelKey="id"
      valueKey="color"
      onChange={({ value: _value }) => setValue(_value)}
      value={value}
      captureScroll
    />
  );
};

export default CaptureMenuScroll;
