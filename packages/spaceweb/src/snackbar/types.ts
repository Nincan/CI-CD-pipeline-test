import { Override } from '../overrides';

export type Intent = 'success' | 'error' | 'warning';
export type HideReason = 'timeout' | 'clickaway' | 'manualClose' | 'messageChange';
export type Placement = 'topLeft' | 'top' | 'topRight' | 'bottomLeft' | 'bottom' | 'bottomRight';

type SharedProps = {
  $intent: Intent;
  $hideOnClickAway: boolean;
  $disableManualClose: boolean;
  $autoHideDuration: number;
  $autoHide?: boolean;
  $placement: Placement;
  $open: boolean;
};

export type SnackbarProps = {
  message?: React.ReactNode;
  intent?: Intent;
  hideOnClickAway?: boolean;
  disableManualClose?: boolean;
  autoHideDuration?: number;
  autoHide?: boolean;
  onClose?: (reason: HideReason) => void;
  placement?: Placement;
  overrides?: {
    Layer?: Override<SharedProps & Record<string, any>>;
    PlacementContainer?: Override<SharedProps & Record<string, any>>;
    SnackbarContainer?: Override<SharedProps & Record<string, any>>;
    ContentContainer?: Override<SharedProps & Record<string, any>>;
    Message?: Override<SharedProps & Record<string, any>>;
    CloseIcon?: Override<SharedProps & Record<string, any>>;
    CloseIconButton?: Override<SharedProps & Record<string, any>>;
    IconsContainer?: Override<SharedProps & Record<string, any>>;
    IntentIcon?: Override<SharedProps & Record<string, any>>;
    SnackbarIcon?: Override<SharedProps & Record<string, any>>;
  };
};
