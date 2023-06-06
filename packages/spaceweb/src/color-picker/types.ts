import { Override } from '../overrides';

export type ColorPickerOverrides = {
  Root?: Override<Record<string, any>>;
  Heading?: Override<Record<string, any>>;
  Swatches?: Override<Record<string, any>>;
  Swatch?: Override<Record<string, any>>;
  TickIcon?: Override<Record<string, any>>;
};

export type ColorPickerProps = {
  overrides?: ColorPickerOverrides;
  value?: string;
  onChange: (value?: string) => void;
  heading?: string;
  resetButtonLabel?: string;
};
