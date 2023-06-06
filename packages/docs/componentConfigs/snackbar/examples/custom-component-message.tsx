import * as React from 'react';
import { Snackbar } from 'spaceweb/snackbar';
import { Button } from 'spaceweb/button';
import { Box } from 'spaceweb/box';

export default (): React.ReactElement => {
  const [message, setMessage] = React.useState<React.ReactNode>();
  return (
    <>
      <Button
        size="md"
        onClick={(): void =>
          setMessage(
            <Box>
              Successfully deleted!
              <Button size="xs" className="ml-2">
                Undo
              </Button>
            </Box>
          )
        }
      >
        Delete
      </Button>
      <Snackbar message={message} />
    </>
  );
};
