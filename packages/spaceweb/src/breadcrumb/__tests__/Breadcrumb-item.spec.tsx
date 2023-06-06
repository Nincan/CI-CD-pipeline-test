import { render } from '@testing-library/react';
import { TestProvider } from '../../test-utils/test-provider';
import { BreadcrumbItem } from '../index';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const renderBreadcrumbItem = (props?) =>
  render(
    <TestProvider>
      <BreadcrumbItem {...props}>
        <div>Link3</div>
      </BreadcrumbItem>
    </TestProvider>
  );

describe('BreadCrumbItem', () => {
  test('to check if listItem is visible', async () => {
    const { getByTestId } = renderBreadcrumbItem();
    const listItem = getByTestId('breadcrumb-list-item-0');
    expect(listItem).toBeVisible();
  });

  test('to check if the start and end enhancer are visible', async () => {
    const { getByTestId } = renderBreadcrumbItem({ startEnhancer: <div>Hi</div>, endEnhancer: <div>Hi</div> });
    const startEnhancer = getByTestId('breadcrumb-item-startenhancer-0');
    const endEnhancer = getByTestId('breadcrumb-item-endenhancer-0');

    expect(startEnhancer).toBeVisible();
    expect(endEnhancer).toBeVisible();
  });

  test("onClick should be called with event and breadcrumbItem's index.", async () => {
    const mockFunction = jest.fn();
    const { getByTestId } = renderBreadcrumbItem({
      onClick: mockFunction,
    });

    const link = getByTestId('breadcrumb-item-link-0');
    await userEvent.click(link);
    expect(mockFunction).toHaveBeenCalledWith(expect.anything(), 0);
  });

  test('href should be passed and anchor tag should render', () => {
    const { getByTestId } = renderBreadcrumbItem({
      href: 'checkLink',
    });
    const link = getByTestId('breadcrumb-item-link-0');
    expect(link.tagName).toEqual('A');
    expect(link).toHaveAttribute('href', 'checkLink');
  });

  test('if href is not be passed and button tag should render', () => {
    const { getByTestId } = renderBreadcrumbItem({
      href: undefined,
    });
    const button = getByTestId('breadcrumb-item-link-0');
    expect(button.tagName).toEqual('BUTTON');
  });
});
