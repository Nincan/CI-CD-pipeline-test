import { screen } from '@testing-library/react';

export const getOptionByLabel = (label: string) =>
  screen.getByRole('option', {
    name: label,
  });
