import { getAllByTestId, screen } from '@testing-library/react';

export const getSelectedOptions = (container?: HTMLElement): (string | null)[] => {
  const elements = container
    ? getAllByTestId(container, 'combobox-selected-value')
    : screen.getAllByTestId('combobox-selected-value');

  return elements.map(item => (item as HTMLElement).textContent);
};
