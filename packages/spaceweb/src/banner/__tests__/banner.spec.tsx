import { fireEvent, render, RenderResult } from '@testing-library/react';
import { TestProvider, getCSSByTestId, getTestStyleUtils } from '../../test-utils/test-provider';

import { Banner, BannerItem } from '..';
import { BannerProps } from '../types';

const setup = (props?: Omit<BannerProps, 'children' | 'title'>): RenderResult =>
  render(
    <TestProvider>
      <Banner title="Banner Title" {...props}>
        <BannerItem>Error 1</BannerItem>
        <BannerItem>Error 2</BannerItem>
      </Banner>
    </TestProvider>
  );

describe('Banner', () => {
  const { theme } = getTestStyleUtils();
  it('Should render all the error items correctly', () => {
    const { getByText } = setup();
    getByText('Error 1');
    getByText('Error 2');
  });
  it('Clicking on toggle button should collapse banner', () => {
    const { getByTestId, getByText, queryByText } = setup({ collapsible: true });
    getByText('Hide');
    fireEvent.click(getByTestId('banner-toggle-button'));
    getByText('Show');
    expect(queryByText('Error 1')).not.toBeInTheDocument();
    expect(queryByText('Error 2')).not.toBeInTheDocument();
  });
  it('Error Intent style test', () => {
    setup(); // default intent is error
    const bannerCss = getCSSByTestId('banner');
    expect(bannerCss.borderColor).toBe(theme.spr.supportError.toLowerCase());
  });
  it('Warning Intent style test', () => {
    setup({ intent: 'warning' }); // default intent is error
    const bannerCss = getCSSByTestId('banner');
    expect(bannerCss.borderColor).toBe(theme.spr.supportWarning.toLowerCase());
  });
  it('Success Intent style test', () => {
    setup({ intent: 'success' }); // default intent is error
    const bannerCss = getCSSByTestId('banner');
    expect(bannerCss.borderColor).toBe(theme.spr.supportSuccess.toLowerCase());
  });
});
