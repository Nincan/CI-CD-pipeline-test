import { act, cleanup, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderHook } from '@testing-library/react-hooks';

import { LayersContext } from 'baseui/layer';
import { useContext } from 'react';
import { TestProvider } from '../../test-utils/test-provider';
import { StatefulPopover } from '../../popover';

import LayersManager, { LayersManagerProps } from '../LayersManager';

const renderLayersManager = () =>
  render(
    <LayersManager zIndex={99999}>
      <div id="child" data-testid="child">
        child
      </div>
    </LayersManager>
  );

const simulateMouseClick = (element: Element) => {
  act(() => {
    userEvent.click(element);
  });
};

describe('LayersManager', function () {
  afterEach(cleanup);

  test('renders children components', () => {
    const { getByTestId } = renderLayersManager();
    expect(getByTestId('child').id).toEqual('child');
  });

  test("sets LayersContext.Provider's value", () => {
    const initialProps: LayersManagerProps = {
      zIndex: 99999,
      children: (
        <div id="child" data-testid="child">
          child
        </div>
      ),
      host: document.head,
    };

    const { result } = renderHook(() => useContext(LayersContext), {
      wrapper: LayersManager,
      initialProps,
    });

    expect(result.current.host).toBe(document.head);
    expect((result.current as any).zIndex).toBe(99999);
  });
  test("if host value is not provided, should fallback to parent context's host value", () => {
    const { result } = renderHook(() => useContext(LayersContext), {
      wrapper: ({ children }) => (
        <LayersManager host={document.head}>
          <LayersManager>{children}</LayersManager>
        </LayersManager>
      ),
    });
    expect(result.current.host).toBe(document.head);
  });
  test("if zIndex value is not provided, should fallback to parent context's zIndex value", () => {
    const { result } = renderHook(() => useContext(LayersContext), {
      wrapper: ({ children }) => (
        <LayersManager zIndex={1}>
          <LayersManager>{children}</LayersManager>
        </LayersManager>
      ),
    });
    expect(result.current.zIndex).toBe(1);
  });

  describe('Multiple Layers', function () {
    describe('when another popover open on clicking outside currently opened popover', function () {
      test('it should close previously opened popover.', async () => {
        const { getByText, queryByText } = render(
          <TestProvider>
            <StatefulPopover content="Content 1">
              <button data-id="popover-child" type="button">
                Button 1
              </button>
            </StatefulPopover>
            <StatefulPopover content="Content 2">
              <button data-id="popover-child" type="button">
                Button 2
              </button>
            </StatefulPopover>
          </TestProvider>
        );

        simulateMouseClick(getByText(/Button 1/));
        await waitFor(() => getByText(/Content 1/));
        // content 2 is still not visible
        expect(queryByText(/Content 2/)).toBeNull();

        simulateMouseClick(getByText(/Button 2/));
        // content 2 is visible and content 1 disappears
        await waitFor(() => getByText(/Content 2/));
        expect(queryByText(/Content 1/)).toBeNull();
      });
      test('clicking inside popover should not close it.', async () => {
        const { getByText, queryByText } = render(
          <TestProvider>
            <StatefulPopover content="Content 1">
              <button data-id="popover-child" type="button">
                Button 1
              </button>
            </StatefulPopover>
            <StatefulPopover content="Content 2">
              <button data-id="popover-child" type="button">
                Button 2
              </button>
            </StatefulPopover>
          </TestProvider>
        );

        simulateMouseClick(getByText(/Button 1/));
        await waitFor(() => getByText(/Content 1/));

        simulateMouseClick(getByText(/Content 1/));
        expect(queryByText(/Content 1/)).not.toBeNull();
      });
    });

    describe('when another popover opens on clicking inside currently opened popover', function () {
      test('it should not close previously opened popover.', async () => {
        const { getByText, queryByText } = render(
          <TestProvider>
            <StatefulPopover
              content={
                <div>
                  <span>Content 1</span>
                  <StatefulPopover content="Content 2">
                    <button data-id="popover-child" type="button">
                      Button 2
                    </button>
                  </StatefulPopover>
                </div>
              }
            >
              <button data-id="popover-child" type="button">
                Button 1
              </button>
            </StatefulPopover>
          </TestProvider>
        );

        simulateMouseClick(getByText(/Button 1/));
        await waitFor(() => getByText(/Content 1/));
        expect(queryByText(/Content 2/)).toBeNull();

        simulateMouseClick(getByText(/Button 2/));
        await waitFor(() => getByText(/Content 2/));
        // Content 1 is still visible
        expect(queryByText(/Content 1/)).not.toBeNull();
      });
      test('clicking inside inner popover should not close outer popover.', async () => {
        const { getByText, queryByText } = render(
          <TestProvider>
            <StatefulPopover
              content={
                <div>
                  <span>Content 1</span>
                  <StatefulPopover content="Content 2">
                    <button data-id="popover-child" type="button">
                      Button 2
                    </button>
                  </StatefulPopover>
                </div>
              }
            >
              <button data-id="popover-child" type="button">
                Button 1
              </button>
            </StatefulPopover>
          </TestProvider>
        );

        simulateMouseClick(getByText(/Button 1/));
        await waitFor(() => getByText(/Content 1/));
        simulateMouseClick(getByText(/Button 2/));
        await waitFor(() => getByText(/Content 2/));
        simulateMouseClick(getByText(/Content 2/));

        // Outer & Inner Popovers are still visible
        expect(queryByText(/Content 1/)).not.toBeNull();
        expect(queryByText(/Content 2/)).not.toBeNull();
      });
      test('clicking in outer popover should close inner popover.', async () => {
        const { getByText, queryByText } = render(
          <TestProvider>
            <StatefulPopover
              content={
                <div>
                  <span>Content 1</span>
                  <StatefulPopover content="Content 2">
                    <button data-id="popover-child" type="button">
                      Button 2
                    </button>
                  </StatefulPopover>
                </div>
              }
            >
              <button data-id="popover-child" type="button">
                Button 1
              </button>
            </StatefulPopover>
          </TestProvider>
        );

        simulateMouseClick(getByText(/Button 1/));
        await waitFor(() => getByText(/Content 1/));
        simulateMouseClick(getByText(/Button 2/));
        await waitFor(() => getByText(/Content 2/));
        simulateMouseClick(getByText(/Content 1/));

        // Outer Popover should be visible & Inner Popover should disappear
        expect(queryByText(/Content 1/)).not.toBeNull();
        expect(queryByText(/Content 2/)).toBeNull();
      });
      test('clicking outside both popover should close both popovers.', async () => {
        const { getByText, queryByText } = render(
          <TestProvider>
            <StatefulPopover
              content={
                <div>
                  <span>Content 1</span>
                  <StatefulPopover content="Content 2">
                    <button data-id="popover-child" type="button">
                      Button 2
                    </button>
                  </StatefulPopover>
                </div>
              }
            >
              <button data-id="popover-child" type="button">
                Button 1
              </button>
            </StatefulPopover>
            <button>Click Outside</button>
          </TestProvider>
        );

        simulateMouseClick(getByText(/Button 1/));
        await waitFor(() => getByText(/Content 1/));
        simulateMouseClick(getByText(/Button 2/));
        await waitFor(() => getByText(/Content 2/));

        // Both popovers are visible
        expect(queryByText(/Content 1/)).not.toBeNull();
        expect(queryByText(/Content 2/)).not.toBeNull();

        simulateMouseClick(getByText(/Click Outside/));

        // Both popovers disappears
        await waitFor(() => expect(queryByText(/Content 1/)).toBeNull());
        expect(queryByText(/Content 2/)).toBeNull();
      });
    });
  });
});
