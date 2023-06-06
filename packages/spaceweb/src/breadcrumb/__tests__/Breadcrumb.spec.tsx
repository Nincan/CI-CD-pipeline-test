import { render } from '@testing-library/react';
import { TestProvider, getCSSByTestId } from '../../test-utils/test-provider';
import { Breadcrumb } from '../index';

const renderBreadcrumb = (props?) =>
  render(
    <TestProvider>
      <Breadcrumb {...props}>
        <div>Link1</div>
        <div>Link2</div>
        <div>Link3</div>
        Link4
      </Breadcrumb>
    </TestProvider>
  );

describe('Breadcrumb Item', () => {
  test('to check Breadcrumb only take the valid children', () => {
    const { getByTestId } = renderBreadcrumb();
    const breadcrumbRoot = getByTestId('breadcrumb-root');
    expect(breadcrumbRoot.children.length).toEqual(3); // 3 component and 2 separator
  });

  test('to check if all individual breadcrumb children are Link component', () => {
    const { getByTestId } = renderBreadcrumb();
    const breadcrumb = getByTestId('breadcrumb-root');
    expect(breadcrumb.tagName).toEqual('UL');
    expect(breadcrumb.children[0].tagName).toEqual('LI');
    expect(breadcrumb.children[1].tagName).toEqual('LI');
    expect(breadcrumb.children[2].tagName).toEqual('LI');
  });

  test('To check spacing between links and separator', () => {
    const { debug } = renderBreadcrumb({ gap: 5 });
    const breadcrumb_separator_css = getCSSByTestId('breadcrumb-item-separator-0');
    debug();
    expect(breadcrumb_separator_css.marginLeft).toEqual('20px');
    expect(breadcrumb_separator_css.marginRight).toEqual('20px');
  });

  test('To check check if the every last listitem has 2 element and last listitem has 1 element', () => {
    const { queryAllByRole } = renderBreadcrumb();
    const ListItems = queryAllByRole('listitem');
    expect(ListItems[0].children.length).toEqual(2);
    expect(ListItems[ListItems.length - 1].children.length).toEqual(1);
  });
});
