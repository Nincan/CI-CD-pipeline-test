import * as React from 'react';
import { StatefulSelect } from 'spaceweb/select';

const options = [
  { id: 'AliceBlue', color: '#F0F8FF' },
  { id: 'AntiqueWhite', color: '#FAEBD7' },
  { id: 'Aqua', color: '#00FFFF' },
  { id: 'Aquamarine', color: '#7FFFD4' },
  { id: 'Azure', color: '#F0FFFF' },
  { id: 'Beige', color: '#F5F5DC' },
];
const props = { options, labelKey: 'id', valueKey: 'color', className: 'mb-2' };
export default (): React.ReactElement => (
  <>
    <StatefulSelect {...props} placeholder="XSmall" size="xs" />
    <StatefulSelect {...props} placeholder="Small" size="sm" />
    <StatefulSelect {...props} placeholder="Medium" size="md" />
  </>
);
