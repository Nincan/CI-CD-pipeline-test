import { fireEvent, render } from '@testing-library/react';
import { Tab, TabList, TabsPanel } from '../index';
import { TestProvider } from '../../test-utils/test-provider';

const TABS_PANEL_CONTENT = {
  0: 'Panel 0',
  1: 'Panel 1',
  2: 'Panel 2',
};

const renderTabs = (props?) =>
  render(
    <TestProvider>
      <TabList {...props}>
        <Tab>Tab 0</Tab>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
      </TabList>
      <TabsPanel>{TABS_PANEL_CONTENT[props.activeTabId]}</TabsPanel>
    </TestProvider>
  );

describe('TabsPanel', () => {
  test('TabsPanel content is set as per default activeTabId value provided', () => {
    const activeTabId = '1';
    const { getByRole } = renderTabs({ activeTabId });

    const defaultTabsPanel = getByRole('tabpanel');
    expect(defaultTabsPanel.innerHTML).toBe(TABS_PANEL_CONTENT[activeTabId]);
  });

  test('TabsPanel content is set correctly whenever a Tab is clicked', () => {
    let activeTabId = '1';
    const onChange = jest.fn(e => {
      activeTabId = e.activeTabId;
    });
    const { getByRole, getAllByRole, rerender } = renderTabs({ activeTabId, onChange });

    const tabs = getAllByRole('tab');
    const nextTabId = 0;
    fireEvent.click(tabs[nextTabId]);

    rerender(
      <TestProvider>
        <TabList>
          <Tab>Tab 0</Tab>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabsPanel>{TABS_PANEL_CONTENT[activeTabId]}</TabsPanel>
      </TestProvider>
    );
    const tabsPanel = getByRole('tabpanel');

    expect(tabsPanel.innerHTML).toBe(TABS_PANEL_CONTENT[activeTabId]);
  });
});
