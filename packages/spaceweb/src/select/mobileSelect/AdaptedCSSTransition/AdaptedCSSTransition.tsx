import * as React from 'react';
import CSSTransition from 'react-transition-group/CSSTransition';
import { useTransitionStyles } from '../hooks/useTransitionStyles';
import { TRANSITION_TYPES, TRANSITION_TIMEOUT } from './constants';
import { TransitionType } from './types';

const AdaptedCSSTransition = ({
  show,
  transitionType = TRANSITION_TYPES.FADE,
  children,
}: {
  show: boolean;
  transitionType?: TransitionType;
  children?: React.ReactNode;
}): React.ReactElement => {
  const styles = useTransitionStyles(transitionType);

  return (
    <CSSTransition timeout={TRANSITION_TIMEOUT} classNames={styles} in={show} mountOnEnter unmountOnExit>
      {children}
    </CSSTransition>
  );
};

export { AdaptedCSSTransition };
