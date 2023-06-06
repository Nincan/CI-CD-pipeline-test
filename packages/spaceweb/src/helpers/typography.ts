import * as React from 'react';
import { Typography } from '../typography';

export const isTypographyNode = (node: React.ReactNode): boolean =>
  React.isValidElement(node) && node.type === Typography;
