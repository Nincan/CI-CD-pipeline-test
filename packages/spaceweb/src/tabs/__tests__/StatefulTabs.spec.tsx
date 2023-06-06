import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tab, TabList, StatefulTabs, TabsPanel } from '../index';
import { TestProvider } from '../../test-utils/test-provider';
import '@testing-library/jest-dom/extend-expect';

const TABS_PANEL_CONTENT = {
  0: 'Panel 0',
  1: 'Panel 1',
  2: 'Panel 2',
};

const renderStatefulTabs = (props?) =>
  render(
    <TestProvider>
      <StatefulTabs>
        <TabList {...props}>
          <Tab>Tab 0</Tab>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
        </TabList>
        <TabsPanel tabId="0">{TABS_PANEL_CONTENT[0]}</TabsPanel>
        <TabsPanel tabId="1">{TABS_PANEL_CONTENT[1]}</TabsPanel>
        <TabsPanel tabId="2">{TABS_PANEL_CONTENT[2]}</TabsPanel>
      </StatefulTabs>
    </TestProvider>
  );

describe('StatefulTabs', () => {
  test('TabsPanel content is set to the first panel by default', () => {
    const { getByRole } = renderStatefulTabs();

    const tabsPanel = getByRole('tabpanel');
    expect(tabsPanel.innerHTML).toBe(TABS_PANEL_CONTENT[0]);
  });

  test('TabsPanel content is set correctly whenever a Tab is clicked', () => {
    const { getByRole, getAllByRole } = renderStatefulTabs();

    const tabs = getAllByRole('tab');
    const nextTabId = 2;
    fireEvent.click(tabs[nextTabId]);

    const tabsPanel = getByRole('tabpanel');

    expect(tabsPanel.innerHTML).toBe(TABS_PANEL_CONTENT[nextTabId]);
  });

  describe('keyboard interaction', () => {
    test('TabsPanel content is set correctly', () => {
      const { getByRole, getAllByRole } = renderStatefulTabs({ defaultActiveTabId: '0' });
      const tabs = getAllByRole('tab');

      userEvent.tab();

      tabs.forEach((tab, index) => {
        expect(tab).toHaveFocus();
        userEvent.keyboard('{Enter}');

        const tabsPanel = getByRole('tabpanel');
        expect(tabsPanel.innerHTML).toBe(TABS_PANEL_CONTENT[index]);

        // moving to the next tab
        userEvent.keyboard('{ArrowRight}');
      });
    });

    test('navigation using arrow key', () => {
      const onChange = jest.fn();
      const { getAllByRole } = renderStatefulTabs({ defaultActiveTabId: '0', onChange });
      const tabs = getAllByRole('tab');

      userEvent.tab();
      //Initially 0th tab should be selected
      expect(tabs[0]).toHaveFocus();

      userEvent.keyboard('${ArrowRight}');
      expect(tabs[1]).toHaveFocus();

      userEvent.keyboard('${Enter}');
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith({ activeTabId: '1' });

      userEvent.keyboard('${ArrowLeft}');
      expect(tabs[0]).toHaveFocus();

      userEvent.keyboard('${Enter}');
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledWith({ activeTabId: '0' });
    });

    test('when position in vertical, navigation should be done by ArrowUp and ArrowDown', () => {
      const onChange = jest.fn();
      const { getAllByRole } = renderStatefulTabs({ activeTabId: '1', onChange, position: 'right' });
      const tabs = getAllByRole('tab');

      userEvent.tab();
      //Initially 1st tab should be selected
      expect(tabs[1]).toHaveFocus();

      userEvent.keyboard('${ArrowUp}');
      expect(tabs[0]).toHaveFocus();

      userEvent.keyboard('${Enter}');
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith({ activeTabId: '0' });

      userEvent.keyboard('${ArrowDown}');
      expect(tabs[1]).toHaveFocus();

      userEvent.keyboard('${Enter}');
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenCalledWith({ activeTabId: '1' });
    });

    test('when activeOnFocus is true, state should change on arrow key navigation', () => {
      const onChange = jest.fn();
      const { getAllByRole } = renderStatefulTabs({
        activeTabId: '0',
        onChange,
        activateOnFocus: true,
        position: 'left',
      });
      const tabs = getAllByRole('tab');

      userEvent.tab();
      //Initially 0th tab should be selected
      expect(tabs[0]).toHaveFocus();

      userEvent.keyboard('${ArrowDown}');
      expect(tabs[1]).toHaveFocus();
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith({ activeTabId: '1' });
    });

    test('when StatefulTabList has defaultActiveTabId set is should focus that tab', () => {
      const onChange = jest.fn();
      const { getAllByRole } = render(
        <TestProvider>
          <StatefulTabs defaultActiveTabId="2">
            <TabList position="right">
              <Tab>Tab 0</Tab>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
            </TabList>
            <TabsPanel tabId="0">{TABS_PANEL_CONTENT[0]}</TabsPanel>
            <TabsPanel tabId="1">{TABS_PANEL_CONTENT[1]}</TabsPanel>
            <TabsPanel tabId="2">{TABS_PANEL_CONTENT[2]}</TabsPanel>
          </StatefulTabs>
        </TestProvider>
      );
      const tabs = getAllByRole('tab');

      userEvent.tab();
      //Initially 0th tab should be selected
      expect(tabs[2]).toHaveFocus();

      userEvent.keyboard('${ArrowDown}');
      expect(tabs[0]).toHaveFocus();
    });
  });
});
