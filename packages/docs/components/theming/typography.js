import * as React from 'react';
import { useStyletron } from 'baseui';
import { Property } from './common.js';

export function Type({ name }) {
  const [css, theme] = useStyletron();
  return (
    <Property
      name={name}
      concern="typography"
      renderPreview={() => <div className={css({ ...theme.typography[name] })}>Example</div>}
      renderValue={() => (
        <React.Fragment>
          <div>{theme.typography[name].fontSize}</div>
          <div>{theme.typography[name].fontWeight}</div>
          <div>{theme.typography[name].lineHeight}</div>
        </React.Fragment>
      )}
    />
  );
}
