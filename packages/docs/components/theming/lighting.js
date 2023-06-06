import { useStyletron } from 'baseui';
import { PropertyCompareTheme } from './common.js';

export function Lighting({ name }) {
  const [css] = useStyletron();
  return (
    <PropertyCompareTheme
      name={name}
      concern="lighting"
      renderBox={({ previewTheme, commonStyles }) => (
        <div
          className={css({
            ...commonStyles,
            boxShadow: previewTheme.lighting[name],
          })}
        ></div>
      )}
      renderValue={({ previewTheme }) => previewTheme.lighting[name]}
    />
  );
}
