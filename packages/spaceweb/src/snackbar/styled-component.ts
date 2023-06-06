import { styled } from '../style';
import { StyleObject } from '../types';
import { TRANSITION_DURATION } from './constants';
import { Placement } from './types';
import { intentColor } from '../helpers/intentHelper';

function placementRules(placement: Placement): StyleObject {
  switch (placement) {
    case 'topLeft':
      return {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        top: 0,
      };
    case 'topRight':
      return {
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        top: 0,
      };
    case 'top':
      return {
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: 0,
      };

    case 'bottomLeft':
      return {
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        bottom: 0,
      };
    case 'bottomRight':
      return {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        bottom: 0,
      };
    default:
    case 'bottom':
      return {
        alignItems: 'center',
        justifyContent: 'flex-end',
        bottom: 0,
      };
  }
}

const topPlacements: Placement[] = ['top', 'topLeft', 'topRight'];
export const StyledPlacementContainer = styled(
  'div',
  'flex flex-col fixed right-0 left-0 mx-4 my-4 pointer-events-none',
  ({ theme }, { $placement, $open }) => {
    let translateY = '0px';
    if (!$open) {
      translateY = topPlacements.includes($placement) ? 'calc(-100% - 50px)' : 'calc(100% + 50px)';
    }
    return {
      ...placementRules($placement),
      transform: `translateY(${translateY})`,
      transitionProperty: 'transform',
      transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
      transitionDuration: `${TRANSITION_DURATION}ms`,
    } as StyleObject;
  }
);

export const StyledSnackbarContainer = styled(
  'div',
  'pointer-events-auto flex spr-shadow-01 overflow-hidden rounded-8 relative',
  ({ px2rem }) => ({
    minHeight: px2rem(52),
    maxWidth: px2rem(432),
    minWidth: px2rem(250),
  })
);

export const StyledIconsContainer = styled('div', 'flex items-center justify-center rounded-8', ({ px2rem }) => ({
  width: px2rem(14),
  height: px2rem(14),
}));
export const StyledContentContainer = styled(
  'div',
  'py-2 px-3 overflow-hidden flex items-center flex-1',
  ({ theme }) => ({
    backgroundColor: theme.name.includes('dark') ? theme.spr.ui05 : '#212123',
  })
);
export const StyledMessage = styled('div', 'font-500 text-14  ml-3 flex-1 flex items-center spr-text-05', {
  lineHeight: '18px',
  wordBreak: 'break-word',
});

export const getIconStyles = (utils, props) => ({
  fill: intentColor(utils, props, utils.theme.supportSuccess),
});
