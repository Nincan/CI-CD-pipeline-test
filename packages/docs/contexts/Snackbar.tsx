import { useCallback, useContext, useMemo, useState } from 'react';
import * as React from 'react';
import _noop from 'lodash/noop';
import { Intent, Snackbar as SpacewebSnackbar } from 'spaceweb/snackbar';

type Notification = { message: string; intent?: Intent };
type SnackbarContextValue = {
  message?: string;
  intent?: Intent;
  notify: (notification: Notification) => void;
};
const SnackbarContext = React.createContext<SnackbarContextValue>({ message: '', intent: 'success', notify: _noop });

export const useNotification = (): SnackbarContextValue['notify'] => useContext(SnackbarContext).notify;

export const SnackbarProvider = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  const [message, setMessage] = useState('');
  const [intent, setIntent] = useState<Intent>('success');

  const notify = useCallback(({ intent: _intent = 'success', message: _message }: Notification) => {
    setMessage(_message);
    setIntent(_intent);
  }, []);

  const snackbarProviderValue = useMemo(() => ({ message, intent, notify }), [message, intent, notify]);
  return <SnackbarContext.Provider value={snackbarProviderValue}>{children}</SnackbarContext.Provider>;
};

export const Snackbar = (): React.ReactElement => {
  const { message, intent } = useContext(SnackbarContext);
  return <SpacewebSnackbar message={message} intent={intent} />;
};
