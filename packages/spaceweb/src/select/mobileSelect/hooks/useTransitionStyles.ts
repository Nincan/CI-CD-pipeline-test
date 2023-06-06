import * as React from 'react';
import { useStyle } from '../../../style';
import { TRANSITION_TYPES } from '../AdaptedCSSTransition/constants';
import { TransitionType } from '../AdaptedCSSTransition/types';

export const useTransitionStyles = (transitionType: TransitionType): Record<string, any> => {
  const { css } = useStyle();

  const transitionTypeToClassNames = React.useMemo(
    () => ({
      [TRANSITION_TYPES.FADE]: {
        enter: css('opacity-0'),
        enterActive: css('opacity-100 transition-opacity duration-200 ease-in'),
        exit: css('opacity-100'),
        exitActive: css('opacity-0 transition-opacity duration-200 ease-out'),
      },
      [TRANSITION_TYPES.SLIDE_FROM_BOTTOM]: {
        enter: css('translate-y-full'),
        enterActive: css('translate-x-0 transition-transform duration-200 ease-in'),
        exit: css('translate-x-0'),
        exitActive: css('translate-y-full transition-transform duration-200 ease-out'),
      },
    }),

    [css]
  );

  return transitionTypeToClassNames[transitionType];
};
