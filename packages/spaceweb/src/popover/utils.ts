import { Placement } from './types';

/**
 * Splits something like 'topLeft' to ['top', 'left'] for easier usage
 * https://github.com/uber/baseweb/blob/master/src/popover/utils.js#L58
 */
export function splitPlacement(placement: Placement): string[] {
  const matches = placement.match(/^([a-z]+)([A-Z][a-z]+)?/) || [];
  return matches
    .slice(1, 3)
    .filter(Boolean)
    .map(s => s.toLowerCase());
}

const OPPOSITE_POSITIONS = {
  top: 'bottom',
  bottom: 'top',
  right: 'left',
  left: 'right',
};
/**
 * Returns the opposite of the specified position. Useful for tooltip
 * positioning logic.
 * Examples:
 * top -> bottom
 * left -> right
 */
export function getOppositePosition(position: string): string {
  return OPPOSITE_POSITIONS[position];
}

export const getPopperOptions = ({
  ignoreBoundary,
  viewportAsBoundary,
}: {
  ignoreBoundary?: boolean;
  viewportAsBoundary?: boolean;
}) => ({
  modifiers: {
    preventOverflow: {
      enabled: !ignoreBoundary,
      padding: 0,
      ...(viewportAsBoundary && { boundariesElement: 'viewport' }), // scrollParent by default
    },
  },
});
