import { ACCESSIBILITY_TYPE, PLACEMENT, TRIGGER_TYPE } from 'baseui/popover';
import { AccessibilityType, TriggerType, Placement } from './types';
import { ValueOf } from '../utility-types';

export const accessibilityMap: Record<AccessibilityType, ValueOf<typeof ACCESSIBILITY_TYPE>> = {
  menu: ACCESSIBILITY_TYPE.menu,
  none: ACCESSIBILITY_TYPE.none,
  tooltip: ACCESSIBILITY_TYPE.tooltip,
};

export const triggerTypeMap: Record<TriggerType, ValueOf<typeof TRIGGER_TYPE>> = {
  click: TRIGGER_TYPE.click,
  hover: TRIGGER_TYPE.hover,
};

export const placementMap: Record<Placement, ValueOf<typeof PLACEMENT>> = {
  auto: PLACEMENT.auto,
  bottom: PLACEMENT.bottom,
  bottomLeft: PLACEMENT.bottomLeft,
  bottomRight: PLACEMENT.bottomRight,
  top: PLACEMENT.top,
  topLeft: PLACEMENT.topLeft,
  topRight: PLACEMENT.topRight,
  left: PLACEMENT.left,
  leftTop: PLACEMENT.leftTop,
  leftBottom: PLACEMENT.leftBottom,
  right: PLACEMENT.right,
  rightTop: PLACEMENT.rightTop,
  rightBottom: PLACEMENT.rightBottom,
};

export const rtlPlacementMap: Record<Placement, ValueOf<typeof PLACEMENT>> = {
  auto: PLACEMENT.auto,
  bottom: PLACEMENT.bottom,
  bottomLeft: PLACEMENT.bottomRight,
  bottomRight: PLACEMENT.bottomLeft,
  top: PLACEMENT.top,
  topLeft: PLACEMENT.topRight,
  topRight: PLACEMENT.topLeft,
  left: PLACEMENT.right,
  leftTop: PLACEMENT.rightTop,
  leftBottom: PLACEMENT.rightBottom,
  right: PLACEMENT.left,
  rightTop: PLACEMENT.leftTop,
  rightBottom: PLACEMENT.leftBottom,
};
