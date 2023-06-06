import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tab, TabList } from '../index';
import { TestProvider } from '../../test-utils/test-provider';
import '@testing-library/jest-dom/extend-expect';

const renderTabs = (props?) =>
  render(
    <TestProvider>
      <TabList {...props}>
        <Tab>Tab 0</Tab>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
    </TestProvider>
  );

describe('Tab', () => {
  test('activeTabId is correctly set when a Tab is clicked', () => {
    let activeTabId = '1';
    const onChange = jest.fn(e => {
      activeTabId = e.activeTabId;
    });
    const { getAllByRole } = renderTabs({ activeTabId, onChange });

    const tabs = getAllByRole('tab');
    const nextTabId = 0;
    fireEvent.click(tabs[nextTabId]);

    expect(activeTabId).toBe(nextTabId.toString());
  });

  test('onChange is called once with the activeTabId of the clicked Tab', () => {
    let activeTabId = '1';
    const onChange = jest.fn(e => {
      activeTabId = e.activeTabId;
    });
    const { getAllByRole } = renderTabs({ activeTabId, onChange });

    const tabs = getAllByRole('tab');
    const nextTabId = 0;
    fireEvent.click(tabs[nextTabId]);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ activeTabId }));
  });

  describe('keyboard interaction', () => {
    test('Arrow key changes focus between Tabs', () => {
      const { getAllByRole } = renderTabs();
      const tabs = getAllByRole('tab');

      userEvent.tab();
      expect(tabs[0]).toHaveFocus();

      userEvent.keyboard('{ArrowRight}');
      expect(tabs[1]).toHaveFocus();

      userEvent.keyboard('{ArrowRight}');
      expect(tabs[2]).toHaveFocus();
    });

    test('tab focuses currently activeTab', () => {
      const { getAllByRole } = renderTabs({ activeTabId: '1' });
      const tabs = getAllByRole('tab');

      userEvent.tab();

      expect(tabs[1]).toHaveFocus();
    });
  });
});
