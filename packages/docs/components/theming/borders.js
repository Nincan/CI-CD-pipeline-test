import * as React from 'react';
import { useStyletron } from 'baseui';
import { Property, PropertyCompareTheme } from './common.js';

export function Border({ name }) {
  const [css] = useStyletron();
  return (
    <PropertyCompareTheme
      name={name}
      concern="borders"
      renderBox={({ previewTheme, commonStyles }) => (
        <div
          className={css({
            ...commonStyles,
            ...previewTheme.borders[name],
          })}
        ></div>
      )}
      renderValue={({ previewTheme }) => (
        <React.Fragment>
          <div>{previewTheme.borders[name].borderStyle}</div>
          <div>{previewTheme.borders[name].borderWidth}</div>
          <div>{previewTheme.borders[name].borderColor}</div>
        </React.Fragment>
      )}
    />
  );
}

export function Radius({ name }) {
  const [css, theme] = useStyletron();
  return (
    <Property
      name={name}
      concern="borders"
      renderPreview={() => (
        <div
          className={css({
            backgroundColor: theme.colors.contentPrimary,
            borderRadius: theme.borders[name],
            height: '50px',
            width: '50px',
          })}
        ></div>
      )}
      renderValue={() => theme.borders[name]}
    />
  );
}
