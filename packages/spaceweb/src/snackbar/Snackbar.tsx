import { Layer as DefaultLayer } from 'baseui/layer';
import { ReactElement, isValidElement, cloneElement } from 'react';
import _noop from 'lodash/noop';

import { IconButton } from '../button';
import { add$props } from '../helpers';
import CloseIcon from '../icon/components/close';
import { useOverrides } from '../overrides';
import { INTENT_TO_ICON, TYPE_TO_HIDE_DURATION } from './constants';
import { LayersManager, Z_INDEX } from '../layer';

import {
  StyledContentContainer,
  StyledIconsContainer,
  StyledMessage,
  StyledPlacementContainer,
  StyledSnackbarContainer,
  getIconStyles,
} from './styled-component';
import { SnackbarProps } from './types';
import useSnackbar from './useSnackbar';
import { useLocale } from '../locale';

const Snackbar = ({
  intent: _intent = 'success',
  message: _message,
  disableManualClose = false,
  placement = 'bottom',
  autoHide = true,
  autoHideDuration = TYPE_TO_HIDE_DURATION[_intent],
  hideOnClickAway = true,
  overrides,
  onClose = _noop,
}: SnackbarProps): ReactElement | null => {
  const { open, shouldRender, handleClose, snackbarContainerProps, snackbarContainerRef, intent, message } =
    useSnackbar({
      intent: _intent,
      message: _message,
      autoHide,
      autoHideDuration,
      hideOnClickAway,
      onClose,
    });

  const IntentIconComponent = INTENT_TO_ICON[intent];
  const sharedProps = add$props({
    intent,
    disableManualClose,
    placement,
    autoHide,
    autoHideDuration,
    hideOnClickAway,
    open,
  });

  const [Layer, layerProps] = useOverrides(overrides?.Layer, DefaultLayer);
  const [PlacementContainer, placementContainerProps] = useOverrides(
    overrides?.PlacementContainer,
    StyledPlacementContainer
  );
  const [SnackbarContainer, snackbarContainerOverrideProps] = useOverrides(
    overrides?.SnackbarContainer,
    StyledSnackbarContainer
  );
  const [ContentContainer, contentContainerProps] = useOverrides(overrides?.ContentContainer, StyledContentContainer);
  const [Message, messageProps] = useOverrides(overrides?.Message, StyledMessage);
  const [IconsContainer, iconsContainerProps] = useOverrides(overrides?.IconsContainer, StyledIconsContainer);
  const [IntentIcon, intentIconProps] = useOverrides(overrides?.IntentIcon, IntentIconComponent);
  const [Close, closeProps] = useOverrides(overrides?.CloseIcon, CloseIcon);
  const [CloseIconButton, ...closeIconButtonProps] = useOverrides(overrides?.CloseIconButton, IconButton);
  const locale = useLocale();

  return shouldRender ? (
    <LayersManager zIndex={Z_INDEX.SNACKBAR}>
      <Layer {...sharedProps} {...layerProps}>
        <PlacementContainer
          data-spaceweb="snackbar"
          data-testid="snackbar"
          {...sharedProps}
          {...placementContainerProps}
        >
          <SnackbarContainer
            {...snackbarContainerProps}
            ref={snackbarContainerRef}
            role="alert"
            {...sharedProps}
            {...snackbarContainerOverrideProps}
          >
            <ContentContainer {...sharedProps} {...contentContainerProps}>
              <IconsContainer {...sharedProps} {...iconsContainerProps}>
                <IntentIcon size={14} className={getIconStyles} {...sharedProps} {...intentIconProps} />
              </IconsContainer>
              <Message aria-atomic aria-live="assertive" {...sharedProps} {...messageProps}>
                {isValidElement(message) ? cloneElement(message) : message}
              </Message>
              {!disableManualClose && (
                <CloseIconButton
                  shape="square"
                  className={[
                    'cursor-pointer h-4 w-4 ml-3 rounded-2 min-w-0 border-0 flex-shrink-0',
                    {
                      ':focus': {
                        backgroundColor: '#48484C',
                      },
                      ':hover': {
                        backgroundColor: '#48484C',
                      },
                    },
                  ]}
                  onClick={() => handleClose('manualClose')}
                  aria-label={locale.snackbar.closeAriaLabel}
                  {...sharedProps}
                  {...closeIconButtonProps}
                >
                  <Close
                    data-testid="snackbar-close"
                    size={10}
                    className={{ fill: '#A0A0A8' }}
                    {...sharedProps}
                    {...closeProps}
                  />
                </CloseIconButton>
              )}
            </ContentContainer>
          </SnackbarContainer>
        </PlacementContainer>
      </Layer>
    </LayersManager>
  ) : null;
};

export default Snackbar;
