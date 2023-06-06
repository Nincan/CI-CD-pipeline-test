import * as React from 'react';
import { Layer as DefaultLayer } from 'baseui/layer';

import { LayersManager, Z_INDEX } from '../../layer';
import { Box } from '../../box';
import { IconButton } from '../../button';
import { Typography } from '../../typography';
import ChevronDown from '../../icon/components/chevron-down';
import AdaptedCSSTransition from './AdaptedCSSTransition';
import { Backdrop } from './Backdrop';
import { SwipeableTargetArea } from './SwipeableTargetArea';

import useCombinedRefs from '../../hooks/useCombinedRef';
import { useMeasure } from '../../hooks/useMeasure';
import { useSwipeableSheetStyles } from './hooks/useSwipeableSheetStyles';
import { useKeyboardViewportShiftOffset } from './hooks/useKeyboardViewportShiftOffset';
import { useOverrides, Override } from '../../overrides';
import { styled } from '../../style';

import { TRANSITION_TYPES } from './AdaptedCSSTransition/constants';

import { ClassName } from '../../types';
import { useLocale } from '../../locale';

type MobileSheetOverrides = {
  SheetContainer?: Override<Record<string, any>>;
  Label?: Override<Record<string, any>>;
  Layer?: Override<Record<string, any>>;
  Backdrop?: Override<Record<string, any>>;
};
type MobileSheetProps = {
  visible: boolean;
  children: React.ReactNode;
  sheetKey?: string;
  onSheetHide?: () => void;
  label?: React.ReactNode;
  overrides?: MobileSheetOverrides;
};

const StyledSheetContainer = styled('div', 'spr-ui-01 fixed bottom-0 w-full z-50 flex flex-col', ({ px2rem }) => ({
  maxHeight: px2rem(360),
  borderTopRightRadius: px2rem(20),
  borderTopLeftRadius: px2rem(20),
  'overscroll-behavior': 'contain',
  touchAction: 'none',
}));
const StyledLabel = styled('div', 'flex items-center p-2');

export const MobileSheet = ({
  children,
  sheetKey,
  visible,
  onSheetHide,
  label,
  overrides,
}: MobileSheetProps): React.ReactElement => {
  const [sheetElementRef, { height: sheetElementHeight }] = useMeasure<HTMLDivElement>();
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  const combinedRef = useCombinedRefs(rootRef, sheetElementRef);
  const { sheetStyles, onSwipeStart, onSwipe, onSwipeEnd, onHide } = useSwipeableSheetStyles({
    swipeThreshold: sheetElementHeight / 3,
    handleDismiss: onSheetHide,
  });

  const { offsetBottom } = useKeyboardViewportShiftOffset(rootRef);

  const [SheetContainer, sheetContainerProps] = useOverrides(overrides?.SheetContainer, StyledSheetContainer);
  const [Label, labelProps] = useOverrides(overrides?.Label, StyledLabel);
  const [Layer, layerProps] = useOverrides(overrides?.Layer, DefaultLayer);
  const [BackdropComp, backdropProps] = useOverrides(overrides?.Backdrop, Backdrop);

  const locale = useLocale();
  return (
    <LayersManager zIndex={Z_INDEX.OVERLAY}>
      <Layer {...layerProps}>
        <Box id={`${sheetKey}-container`} data-testid="sheetContainer" role="contentinfo">
          <BackdropComp show={visible} onHide={onHide} backdropKey={sheetKey} {...backdropProps} />
          <AdaptedCSSTransition show={visible} transitionType={TRANSITION_TYPES.SLIDE_FROM_BOTTOM}>
            <SheetContainer
              data-testid={`${sheetKey}-sheetContainer`}
              {...sheetContainerProps}
              className={[{ bottom: offsetBottom }, sheetStyles, sheetContainerProps.className as ClassName]}
              ref={combinedRef}
            >
              {label && (
                <Label {...labelProps}>
                  <IconButton onClick={onHide} aria-label={locale.select.hideButtonAriaLabel}>
                    <ChevronDown size={12} className={{ transform: 'rotate(90deg)' }} />
                  </IconButton>
                  <Typography variant="h4">{label}</Typography>
                </Label>
              )}
              <SwipeableTargetArea onSwipeStart={onSwipeStart} onSwipe={onSwipe} onSwipeEnd={onSwipeEnd} />
              {children}
            </SheetContainer>
          </AdaptedCSSTransition>
        </Box>
      </Layer>
    </LayersManager>
  );
};
MobileSheet.displayName = 'MobileSheet';
