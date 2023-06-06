import * as React from 'react';
import { Snackbar } from 'spaceweb/snackbar';
import { Button } from 'spaceweb/button';

export default (): React.ReactElement => {
  const [message, setMessage] = React.useState<string>();
  return (
    <>
      <Button onClick={(): void => setMessage(new Date().toString())}>Click To Open Snackbar</Button>
      <Snackbar message={message} />
    </>
  );
};
