import * as React from 'react';
import { ReactElement, ReactNode } from 'react';

const HiddenElement = ({ id, children }: { id: string; children?: ReactNode }): ReactElement => (
  <div
    id={id}
    style={{
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: '0px',
      margin: '-1px',
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      width: '0px',
    }}
  >
    {children}
  </div>
);

export { HiddenElement };
