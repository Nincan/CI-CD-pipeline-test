import { useState } from 'react';
import { Snackbar } from 'spaceweb/snackbar';
import { Button } from 'spaceweb/button';

const intents = ['success', 'error', 'warning'];

export default () => {
  const [intent, setIntent] = useState();
  const [message, setMessage] = useState();
  return (
    <>
      {intents.map(_intent => (
        <Button
          intent={_intent}
          className="mr-2"
          onClick={() => {
            setIntent(_intent);
            setMessage(new Date().toString());
          }}
        >
          {_intent}
        </Button>
      ))}
      {intent && <Snackbar message={message} intent={intent} onClose={console.log} />}
    </>
  );
};
