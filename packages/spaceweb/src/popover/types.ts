import { TetherPlacement } from 'baseui/layer';
import {
  PopoverProps as BasePopoverProps,
  StatefulPopoverProps as BaseStatefulPopoverProps,
  StatefulPopoverContainerProps as BaseStatefulPopoverContainerProps,
  PopoverOverrides as BasePopoverOverrides,
} from 'baseui/popover';
import { Override } from '../overrides';

export type PopoverProps = Omit<BasePopoverProps, 'overrides' | 'children' | 'triggerType' | 'placement'> & {
  overrides?: {
    [key in keyof BasePopoverOverrides]?: Override<any>;
  } & { ArrowTriangle?: Override<any> };
  children?: React.ReactNode | ((args: { isOpen: boolean }) => React.ReactNode);
  targetElement?: HTMLElement | null;
  triggerType?: TriggerType;
  placement?: TetherPlacement;
  innerRef?: React.Ref<HTMLElement>;
  viewportAsBoundary?: boolean;
};

export type StatefulPopoverProps = Omit<BaseStatefulPopoverProps, 'overrides' | 'children'> & {
  overrides?: {
    [key in keyof BasePopoverOverrides]?: Override<any>;
  };
  children?: React.ReactNode | ((args: { isOpen: boolean }) => React.ReactNode);
  targetElement?: HTMLElement | null;
  viewportAsBoundary?: boolean;
};

export type StatefulPopoverContainerProps = Omit<BaseStatefulPopoverContainerProps, 'overrides'> & {
  overrides?: {
    [key in keyof BasePopoverOverrides]?: Override<any>;
  };
};

export type AccessibilityType = 'none' | 'menu' | 'tooltip';
export type TriggerType = 'click' | 'hover';
export type Placement =
  | 'auto'
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom';

export type {
  Offset,
  // props
  SharedStylePropsArg as SharedProps,
  // overrides & utils
  StateReducer,
} from 'baseui/popover';

export { STATE_CHANGE_TYPE, ANIMATE_IN_TIME, ANIMATE_OUT_TIME } from 'baseui/popover';

export { ARROW_SIZE, ARROW_WIDTH, POPOVER_MARGIN } from 'baseui/popover/constants';
