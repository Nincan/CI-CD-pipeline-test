import * as React from 'react';
import { Textarea } from 'spaceweb/textarea';

export default () => {
  const [valueB, setValueB] = React.useState('Error state...');
  return (
    <>
      <Textarea error value={valueB} onChange={e => setValueB(e.currentTarget.value)} placeholder="Error state..." />
      <br />
      <Textarea disabled value="Disabled state..." />
    </>
  );
};
