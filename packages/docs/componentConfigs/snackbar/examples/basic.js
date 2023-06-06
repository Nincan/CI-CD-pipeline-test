import { useState } from 'react';
import { Snackbar } from 'spaceweb/snackbar';
import { Button } from 'spaceweb/button';

export default () => {
  const [message, setMessage] = useState();
  return (
    <>
      <Button onClick={() => setMessage(new Date().toString())}>Click To Open Snackbar</Button>
      <Snackbar message={message} />
    </>
  );
};
