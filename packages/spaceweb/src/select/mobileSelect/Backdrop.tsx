import * as React from 'react';
import { Box } from '../../box';
import AdaptedCSSTransition from './AdaptedCSSTransition';
import { TRANSITION_TYPES } from './AdaptedCSSTransition/constants';

export const Backdrop = React.memo(
  ({
    onHide,
    show,
    backdropKey,
  }: {
    onHide: (e: React.MouseEvent) => void;
    show: boolean;
    backdropKey?: string;
  }): React.ReactElement => (
    <AdaptedCSSTransition show={show} transitionType={TRANSITION_TYPES.FADE}>
      <Box
        role="presentation"
        className="spr-overlay w-full h-screen cursor-pointer fixed inset-0 z-10"
        onClick={onHide}
        data-id={backdropKey}
        id={backdropKey ? `${backdropKey}-backdrop` : undefined}
        data-testid="backdropEl"
      />
    </AdaptedCSSTransition>
  )
);
