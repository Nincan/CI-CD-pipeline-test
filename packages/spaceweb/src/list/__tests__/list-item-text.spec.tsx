import { render, RenderResult } from '@testing-library/react';
import { TestProvider, getCSSByTestId, getTestStyleUtils } from '../../test-utils/test-provider';
import { hex2rgb } from '../../helpers';

import ListItemText from '../list-item-text';
import { ListItemTextProps } from '../types';

const TEST_ID = 'list-item-text';

const setup = (props?: ListItemTextProps): RenderResult =>
  render(
    <TestProvider>
      <ListItemText {...props} />
    </TestProvider>
  );

const { theme } = getTestStyleUtils();

describe('ListItemText', function() {
  it('should render children text as primary text', () => {
    const { queryByText } = setup({ children: 'primary text' });

    expect(queryByText('primary text')).not.toBe(null);
  });

  it('should render secondary as secondary text', () => {
    const { getByText } = setup({ secondary: 'secondary text' });

    const el = getByText('secondary text');
    const style = window.getComputedStyle(el);
    expect(style.color).toBe(hex2rgb(theme.spr.text02));
  });

  describe('overrides', function() {
    it('Root overrides', () => {
      setup({
        children: 'primary',
        overrides: { Root: { style: { backgroundColor: 'red' } } },
      });

      const style = getCSSByTestId(TEST_ID);
      expect(style.backgroundColor).toBe('red');
    });
    it('PrimaryText overrides', () => {
      const { getByText } = setup({
        children: 'primary',
        secondary: 'secondary',
        overrides: { PrimaryText: { style: { fontSize: '30px' } }, SecondaryText: { style: { fontSize: '20px' } } },
      });

      const elPrimary = getByText('primary');
      const stylePrimary = window.getComputedStyle(elPrimary);
      const elSecondary = getByText('secondary');
      const styleSecondary = window.getComputedStyle(elSecondary);

      expect(stylePrimary.fontSize).toBe('30px');
      expect(styleSecondary.fontSize).toBe('20px');
    });
  });
});
