import * as React from 'react';
import { Box } from '../../box';
import { MobileSheet } from './MobileSheet';
import { StyledAction, TagOverrides } from '../../tag';
import { MenuItem, MenuItemProps } from '../../menu';
import { SelectProps } from '../index';
import { PopoverProps } from '../../popover';

type OverridenPopoverProps = {
  content: PopoverProps['content'];
  isOpen: boolean;
  onClick: () => void;
  onClickOutside: () => void;
  children?: React.ReactNode;
  label?: React.ReactNode;
};

const OverridenPopover = ({
  content,
  children,
  isOpen,
  onClick,
  onClickOutside,
  label,
}: OverridenPopoverProps): React.ReactElement => (
  <>
    <Box onClick={onClick}>{children}</Box>
    {isOpen && (
      <MobileSheet visible={isOpen} sheetKey="mobileSelect" onSheetHide={onClickOutside} label={label}>
        {typeof content === 'function' ? content() : content}
      </MobileSheet>
    )}
  </>
);

const OverridenMenuItem = ({ startEnhancer, ...restProps }: MenuItemProps): React.ReactElement => (
  <MenuItem {...restProps} endEnhancer={startEnhancer} />
);

const OverridenAction: TagOverrides['Action'] = ({ children, onClick, ...restProps }) => (
  <StyledAction
    {...restProps}
    onClick={React.useCallback(
      (e: React.MouseEvent): void => {
        e.stopPropagation();
        onClick(e);
      },
      [onClick]
    )}
  >
    {children}
  </StyledAction>
);

const MULTI_VALUE_OVERRIDES = {
  Tag: {
    props: {
      overrides: {
        Action: OverridenAction,
      },
    },
  },
};

const OVERLAY_OVERRIDES: SelectProps['overrides'] = {
  // Legit override - Keep search box font-size as 16px and so it is not automatically zoomed in
  ControlContainer: {
    props: { size: 'md', autoComplete: 'off' },
  },
  Root: {
    style: 'pt-1 pb-4',
  },
  MenuItem: OverridenMenuItem,
};

export const getOverlayOverrides = ({
  overlayContainerRef,
  label,
}: {
  overlayContainerRef: (el: null | HTMLElement) => void;
  label?: React.ReactNode;
}): SelectProps['overrides'] => ({
  ...OVERLAY_OVERRIDES,
  Popover: {
    component: OverridenPopover,
    props: {
      label,
      ignoreBoundary: true,
    },
  },
  OverlayContentContainer: {
    props: {
      ref: overlayContainerRef,
    },
  },
});

const ChildSelectPopover = ({ children }: OverridenPopoverProps): React.ReactElement => <>{children}</>;

export const CHILD_SELECT_OVERRIDES: SelectProps['overrides'] = {
  Popover: ChildSelectPopover,
  // Legit override - Don't render Input in child select so after removing value via x icon cursor doesn't come
  InputContainer: () => null,
  MultiValue: {
    props: {
      overrides: MULTI_VALUE_OVERRIDES,
    },
  },
};

export const OVERLAY_SELECT_PROPS_TO_OMIT: string[] = ['onBlur'];

export const CHILD_SELECT_PROPS_TO_OMIT: string[] = ['onClose', 'onBlur', 'type', 'startOpen', 'autoFocus', 'children'];
