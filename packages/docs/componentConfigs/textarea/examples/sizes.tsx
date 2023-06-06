import * as React from 'react';
import { Textarea } from 'spaceweb/textarea';

export default () => {
  const [valueA, setValueA] = React.useState('Compact size...');
  const [valueC, setValueC] = React.useState('Large size...');
  return (
    <React.Fragment>
      <Textarea size="sm" value={valueA} onChange={e => setValueA(e.currentTarget.value)} placeholder="Small size..." />
      <br />
      <Textarea size="lg" value={valueC} onChange={e => setValueC(e.currentTarget.value)} placeholder="Large size..." />
    </React.Fragment>
  );
};
