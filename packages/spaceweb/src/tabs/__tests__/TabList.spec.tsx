import { render } from '@testing-library/react';
import { Tab, TabList } from '../index';
import { TestProvider, getCSSByTestId } from '../../test-utils/test-provider';

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

describe('TabList', () => {
  test('flex direction is set as per the position provided', () => {
    renderTabs({ position: 'left' });

    const tabListCSS = getCSSByTestId('box');
    expect(tabListCSS.flexDirection).toBe('column');
  });
});
