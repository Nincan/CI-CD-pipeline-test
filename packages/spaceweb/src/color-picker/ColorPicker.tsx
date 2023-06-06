import { ReactElement } from 'react';

import { Typography } from '../typography';
import { Box } from '../box';
import { ColorPalette } from './ColorPalette';
import ResetColorIcon from '../icon/components/reset-color';
import { Button } from '../button';

import { useOverrides } from '../overrides';
import { useLocale } from '../locale';

import { ColorPickerProps } from './types';
import { StyleObject, StyleUtils } from '../types';
import { StyledRoot } from './styled-component';

const RESET_CLASSNAME = [
  'spr-text-01 hover:spr-text-04',
  ({ theme }: StyleUtils): StyleObject => ({
    ':disabled': {
      color: theme.spr.text01,
      ':hover': {
        color: theme.spr.text01,
      },
    },
  }),
];

export const ColorPicker = ({
  value,
  overrides,
  heading,
  onChange,
  resetButtonLabel,
}: ColorPickerProps): ReactElement => {
  const locale = useLocale();

  const [Heading, headingProps] = useOverrides(overrides?.Heading, Typography);
  const [Root, rootProps] = useOverrides(overrides?.Root, StyledRoot);

  return (
    <Root {...rootProps}>
      {heading ? (
        <Heading $as="div" className="spr-text-03" weight="bold" variant="bs3" {...headingProps}>
          {heading}
        </Heading>
      ) : null}
      <ColorPalette color={value} onChange={onChange} overrides={overrides} />
      <Box className="flex justify-start -ml-1.5">
        <Button
          startEnhancer={<ResetColorIcon size={12} />}
          variant="minimal"
          size="xxxs"
          className={RESET_CLASSNAME}
          disabled={!value}
          onClick={(): void => onChange(undefined)}
        >
          {resetButtonLabel ?? locale.colorPicker.resetButtonLabel}
        </Button>
      </Box>
    </Root>
  );
};
