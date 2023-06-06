import * as React from 'react';

declare module 'baseui/layer' {
  export const LayersContext: React.Context<{
    host?: HTMLElement | null;
    zIndex?: number;
    addEscapeHandler: (escapeKeyHandler: React.KeyboardEventHandler) => void;
    removeEscapeHandler: (escapeKeyHandler: React.KeyboardEventHandler) => void;
    addDocClickHandler: (docClickHandler: React.MouseEventHandler) => void;
    removeDocClickHandler: (docClickHandler: React.MouseEventHandler) => void;
  }>;
}
