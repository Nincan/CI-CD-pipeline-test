import { TetherPlacement } from 'baseui/layer';
import { SharedStylePropsArg } from 'baseui/popover';
import { StatefulTooltipProps as BaseStatefulTooltipProps, TooltipProps as BaseTooltipProps } from 'baseui/tooltip';
import * as React from 'react';
import { Override } from '../overrides';
import { TriggerType } from '../popover';

type SpacewebSharedProps = { $size: Size; $label: boolean };

export type Size = 'sm' | 'md' | 'lg';
export type SharedProps = SharedStylePropsArg & SpacewebSharedProps;

interface DeprecatedProps {
  /**
   * @deprecated
   */
  autoFocus?: BaseTooltipProps['autoFocus'];
  /**
   * @deprecated
   */
  returnFocus?: BaseTooltipProps['returnFocus'];
  /**
   * @deprecated
   */
  focusLock?: BaseTooltipProps['focusLock'];
}

export type StatefulTooltipProps = Omit<
  BaseStatefulTooltipProps,
  | 'overrides'
  | 'children'
  | 'autoFocus'
  | 'focusLock'
  | 'returnFocus'
  | 'dismissOnEsc'
  | 'dismissOnClickOutside'
  | 'triggerType'
  | 'placement'
> & {
  overrides?: {
    [key in keyof BaseStatefulTooltipProps['overrides']]?: Override<SharedProps & Record<string, any>>;
  } & { Label?: Override<SpacewebSharedProps> };
  size?: Size;
  label?: React.ReactNode;
  children?: React.ReactNode | ((args: { isOpen: boolean }) => React.ReactNode);
  dismissOnClickOutside?: boolean;
  dismissOnEsc?: boolean;
  triggerType?: TriggerType;
  placement?: TetherPlacement;
  viewportAsBoundary?: boolean;
} & DeprecatedProps;

export type TooltipProps = Omit<
  BaseTooltipProps,
  'overrides' | 'children' | 'autoFocus' | 'focusLock' | 'returnFocus' | 'triggerType' | 'placement'
> & {
  overrides?: { [key in keyof BaseTooltipProps['overrides']]?: Override<SharedProps & Record<string, any>> } & {
    Label?: Override<SpacewebSharedProps>;
  };
  size?: Size;
  label?: React.ReactNode;
  children?: React.ReactNode | ((args: { isOpen: boolean }) => React.ReactNode);
  targetElement?: HTMLElement | null;
  triggerType?: TriggerType;
  placement?: TetherPlacement;
  viewportAsBoundary?: boolean;
} & DeprecatedProps;
export type { Placement, TriggerType, AccessibilityType } from '../popover';
export type { StatefulTooltipContainerProps } from 'baseui/tooltip';
