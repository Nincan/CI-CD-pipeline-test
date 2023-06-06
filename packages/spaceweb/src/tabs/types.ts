import * as React from 'react';
import { Override } from '../overrides';
import { SpacewebComponentProps } from '../types';

export type position = 'top' | 'left' | 'right';

export type variant = 'default' | 'flap';

export type ChangEventHandler = (args: { activeTabId?: React.Key }) => void;

export type SharedPropsTab = {
  $selected?: boolean;
  $position?: position;
  $variant?: variant;
};

export type SharedPropsTabs = {
  $position?: position;
  $variant?: variant;
};

export type TabOverrides = { Tab?: Override<SharedPropsTabs & Record<string, any>> };
export type TabsOverrides = TabOverrides & {
  TabList?: Override<SharedPropsTabs & Record<string, any>>;
};

export type TabsPanelOverrides = {
  TabsPanel?: Override<Omit<SharedPropsTab, '$variant'> & Record<string, any>>;
};

export type TabListProps = Omit<SpacewebComponentProps, 'onChange'> & {
  activeTabId?: React.Key;
  children: React.ReactNode;
  onChange?: ChangEventHandler;
  position?: position;
  variant?: variant;
  activateOnFocus?: boolean;
  overrides?: TabsOverrides;
};

export type TabsPanelProps = SpacewebComponentProps & {
  children?: React.ReactNode;
  selected?: boolean;
  tabId?: React.Key;
  overrides?: TabsPanelOverrides;
};

// TODO: make tabId mandatory prop for tab in next release
export type TabProps = TabsPanelProps & {
  id?: React.Key;
  position?: position;
  variant?: variant;
  overrides?: TabOverrides;
  onClick?: (e: React.MouseEvent) => void;
};

export type StatefulTabProps = {
  onChange?: ChangEventHandler;
  defaultActiveTabId?: React.Key;
};
