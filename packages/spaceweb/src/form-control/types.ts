import * as React from 'react';
import { Override } from '../overrides';
import { ClassName, Intent } from '../types';

export type layout = 'vertical' | 'horizontal' | 'inline';

export type FormControlOverrides = {
  LabelContainer?: Override<Record<string, any>>;
  Label?: Override<Record<string, any>>;
  RequiredDot?: Override<Record<string, any>>;
  Caption?: Override<Record<string, any>>;
  ControlContainer?: Override<Record<string, any>>;
  Root?: Override<Record<string, any>>;
  SubText?: Override<Record<string, any>>;
  InfoIconContainer?: Override<Record<string, any>>;
  SubTextTooltip?: Override<Record<string, any>>;
};

export type FormControlProps = {
  children: React.ReactElement;
  disabled?: boolean;
  label?: React.ReactNode;
  /**
   * Help text to render b/w Label and the form field.
   */
  subText?: React.ReactNode;
  /**
   * If true, render info icon and display subText in Tooltip
   */
  subTextAsIcon?: boolean;
  caption?: React.ReactNode;
  error?: boolean | React.ReactNode;
  positive?: React.ReactNode;
  htmlFor?: string;
  className?: ClassName;
  $as?: React.ElementType;
  layout?: layout;
  overrides?: FormControlOverrides;
  required?: boolean;
  intent?: Intent;
};

export type SharedProps = {
  $disabled: boolean;
  $error: boolean;
  $positive: boolean;
  $required: boolean;
  $layout: layout;
  $intent: Intent;
};
