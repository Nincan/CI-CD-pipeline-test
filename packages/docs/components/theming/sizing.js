import { useStyletron } from 'baseui';
import { Property } from './common.js';

export function Sizing({ name }) {
  const [css, theme] = useStyletron();
  return (
    <Property
      name={name}
      concern="sizing"
      renderPreview={() => (
        <div
          className={css({
            backgroundColor: theme.colors.contentPrimary,
            height: theme.sizing[name],
            width: theme.sizing[name],
          })}
        ></div>
      )}
      renderValue={() => theme.sizing[name]}
    />
  );
}
