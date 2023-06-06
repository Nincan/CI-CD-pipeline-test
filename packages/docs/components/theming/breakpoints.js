import { LightTheme } from 'baseui';
import { Property } from './common.js';

export function Breakpoint({ name, media = false }) {
  return (
    <Property
      name={name}
      concern="breakpoints"
      renderValue={() => (media ? LightTheme.mediaQuery[name] : LightTheme.breakpoints[name] + 'px')}
    />
  );
}
