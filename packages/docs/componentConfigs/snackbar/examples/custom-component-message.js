import * as React from 'react';
import { Snackbar } from 'spaceweb/snackbar';
import { Button } from 'spaceweb/button';
import { Box } from 'spaceweb/box';

export default () => {
  const [message, setMessage] = React.useState();
  return (
    <>
      <Button
        size="md"
        onClick={() =>
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
