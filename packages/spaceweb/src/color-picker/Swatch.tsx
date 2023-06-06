import { themeTokenToHex } from '../helpers';
import { BaseButton } from '../base-button';
import DefaultTickIcon from '../icon/components/tick';

import { getContrastRatio } from './getContrastRatio';
import { useTheme } from '../theme';
import { memo, ReactElement, useCallback, useMemo } from 'react';
import { ClassName } from '../types';
import { ColorPickerOverrides } from './types';
import { useOverrides } from '../overrides';

type SwatchProps = {
  color: string;
  isSelected: boolean;
  onChange: (color?: string) => void;
  className?: ClassName;
  overrides?: ColorPickerOverrides;
};

export const Swatch = memo(
  ({ color, isSelected, onChange, className, overrides, ...props }: SwatchProps): ReactElement => {
    const { theme } = useTheme();

    const [TickIcon, tickIconProps] = useOverrides(overrides?.TickIcon, DefaultTickIcon);

    const contrastRatioWithTickIcon = useMemo(
      () => (isSelected ? getContrastRatio(color, themeTokenToHex(theme.spr.icon05)!) : 0),
      [theme, isSelected, color]
    );

    const contrastRatioWithBgColor = useMemo(
      () => getContrastRatio(color, themeTokenToHex(theme.spr.popup)!),
      [theme, color]
    );

    const handleChange = useCallback(() => onChange(color), [color, onChange]);

    return (
      <BaseButton
        onClick={handleChange}
        className={[
          'cursor-pointer h-5 w-5 rounded-full flex justify-center items-center',
          contrastRatioWithBgColor < 1.1 ? 'border-1 border-solid spr-border-03' : '',
          {
            backgroundColor: color,
            transition: '0.15s ease-in-out',
            ':hover': {
              transform: 'scale(1.2)',
            },
            ':focus': {
              transform: 'scale(1.2)',
            },
            ':focus-visible': {
              transform: 'scale(1.2)',
              outlineWidth: '1px',
              outlineOffset: '1px',
            },
          },
          className,
        ]}
        tabIndex={0}
        {...props}
      >
        {isSelected ? (
          <TickIcon
            className={contrastRatioWithTickIcon < 4.5 ? 'spr-icon-01' : 'spr-icon-05'}
            size={10}
            {...tickIconProps}
          />
        ) : null}
      </BaseButton>
    );
  }
);
