import { ReactElement, useMemo } from 'react';

// import { Typography } from '../typography';
import { Box } from '../box';
import { Grid } from '../grid';
import { Swatch as DefaultSwatch } from './Swatch';

// import { useTheme } from '../theme';
import { useOverrides } from '../overrides';

import { COLOR_PALETTE } from './colors';
// import { themeTokenToHex } from '../helpers';
import { ColorPickerOverrides } from './types';

type ContentProps = {
  color?: string;
  overrides?: ColorPickerOverrides;
  onChange: (color?: string) => void;
};

export const ColorPalette = ({ color: selectedColor, overrides, onChange }: ContentProps): ReactElement => {
  // const { theme } = useTheme();

  const [Swatches, swatchesProps] = useOverrides(overrides?.Swatches, Grid);
  const [Swatch, swatchProps] = useOverrides(overrides?.Swatch, DefaultSwatch);

  // const sprinklrClrTokens = useMemo(
  //   () => Object.keys(theme.spr).filter((token: string): boolean => token.startsWith('clr')),
  //   [theme]
  // );

  return (
    <Box>
      <Swatches cols={10} colGap={1} rowGap={1} {...swatchesProps}>
        {COLOR_PALETTE.map(row =>
          row.map(color => (
            <Swatch
              key={color}
              color={color}
              overrides={overrides}
              onChange={onChange}
              isSelected={selectedColor === color}
              {...swatchProps}
            />
          ))
        )}
      </Swatches>

      {/*<Box className="mt-3">*/}
      {/*  <Typography className="spr-text-03" weight="bold" variant="bs3">*/}
      {/*    Sprinklr*/}
      {/*  </Typography>*/}
      {/*  <Grid cols={10} colGap={1} rowGap={1} className="mt-3">*/}
      {/*    {sprinklrClrTokens.map(token => {*/}
      {/*      const color = themeTokenToHex(theme.spr[token]) ?? '';*/}
      {/*      return (*/}
      {/*        <Swatch*/}
      {/*          key={token}*/}
      {/*          color={color}*/}
      {/*          overrides={overrides}*/}
      {/*          onChange={onChange}*/}
      {/*          isSelected={selectedColor === color}*/}
      {/*          {...swatchProps}*/}
      {/*        />*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </Grid>*/}
      {/*</Box>*/}
    </Box>
  );
};
