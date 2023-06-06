import * as React from 'react';
import { Intent, Snackbar } from 'spaceweb/snackbar';
import { Button } from 'spaceweb/button';

const intents: Intent[] = ['success', 'error', 'warning'];

export default (): React.ReactElement => {
  const [intent, setIntent] = React.useState<Intent>();
  const [message, setMessage] = React.useState<string>();
  return (
    <>
      {intents.map(_intent => (
        <Button
          intent={_intent}
          className="mr-2"
          onClick={(): void => {
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
