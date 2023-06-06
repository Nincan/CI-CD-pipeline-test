import { cleanup, render, fireEvent } from '@testing-library/react';

import Box from '../Box';
import { hex2rgb } from '../../helpers';
import { TestProvider, getTestStyleUtils, getCSSByTestId } from '../../test-utils/test-provider';

describe('Box', () => {
  afterEach(cleanup);
  const { theme } = getTestStyleUtils();
  test('className', () => {
    render(
      <TestProvider>
        <Box className="p-4 spr-text-01" />
      </TestProvider>
    );
    const boxCss = getCSSByTestId('box');
    const padding = theme.padding['4'];
    expect(boxCss.padding).toEqual(`${padding} ${padding} ${padding} ${padding}`);
    expect(boxCss.color).toEqual(hex2rgb(theme.spr.text01));
  });
  test('$as', () => {
    const { getByTestId } = render(<Box $as="section">Section</Box>);
    const box = getByTestId('box');
    expect(box.nodeName.toLowerCase()).toEqual('section');
  });
  test('onClick', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Box data-id="test" onClick={onClick}>
        Hello
      </Box>
    );
    fireEvent.click(getByTestId('box'));
    expect(onClick).toHaveBeenCalled();
  });
});
