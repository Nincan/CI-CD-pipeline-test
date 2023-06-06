import { render, waitFor, act, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { TestProvider } from '../../test-utils/test-provider';
import { TRANSITION_DURATION } from '../constants';
import Snackbar from '../Snackbar';
import { SnackbarProps } from '../types';

const WrappedSnackbar = (props: SnackbarProps) => (
  <TestProvider>
    <Snackbar {...props} />
  </TestProvider>
);

const setup = (props?: SnackbarProps) => render(<WrappedSnackbar {...props} />);

const mockDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

describe('Snackbar', function() {
  test('When message is empty, snackbar should not appear.', () => {
    const { queryByTestId } = setup();
    expect(queryByTestId('Snackbar')).toBeNull();
  });
  test('Snackbar should appear as soon as message is provided.', async () => {
    const { rerender, getByText } = setup();
    rerender(<WrappedSnackbar message="Snackbar Message" />);
    await waitFor(() => getByText(/Snackbar Message/));
  });
  test('Snackbar should disappear after autoHideDuration.', async () => {
    const mockClose = jest.fn();
    const { getByText, queryByText } = setup({
      message: 'Snackbar Message',
      autoHideDuration: 500,
      onClose: mockClose,
    });

    await act(async () => {
      await waitFor(() => getByText(/Snackbar Message/));
      // wait for enter transition + autoHideDuration + exit transition
      await mockDelay(500 + 2 * TRANSITION_DURATION);
    });

    expect(queryByText(/Snackbar Message/)).toBeNull();
    expect(mockClose).toHaveBeenCalledWith('timeout');
  });
  test('Snackbar should not disappear when hovered.', async () => {
    const autoHideDuration = 500;
    const mockClose = jest.fn();
    const { getByText, queryByText } = setup({ message: 'Snackbar Message', autoHideDuration, onClose: mockClose });

    await act(async () => {
      await waitFor(() => getByText(/Snackbar Message/));
      // wait for snackbar to appear
      await mockDelay(200);
      fireEvent.mouseEnter(getByText(/Snackbar Message/));
      // wait for autoHideDuration + exit transition
      await mockDelay(autoHideDuration * 2 + TRANSITION_DURATION);
    });

    // Snackbar is still visible
    expect(queryByText(/Snackbar Message/)).not.toBeNull();
    expect(mockClose).not.toHaveBeenCalled();
  });
  test('Snackbar should disappear immediately when clicked on document.', async () => {
    const mockClose = jest.fn();
    const { getByText, queryByText } = setup({
      message: 'Snackbar Message',
      autoHideDuration: 10000,
      onClose: mockClose,
    });

    await act(async () => {
      await waitFor(() => getByText(/Snackbar Message/));
      // wait for snackbar to appear
      await mockDelay(TRANSITION_DURATION + 200);
      fireEvent.click(document.body);
      // wait for snackbar to disappear
      await mockDelay(TRANSITION_DURATION + 200);
    });

    expect(queryByText(/Snackbar Message/)).toBeNull();
    expect(mockClose).toHaveBeenCalledWith('clickaway');
  });
  test('Snackbar should disappear immediately when clicked on close icon.', async () => {
    const mockClose = jest.fn();
    const { queryByText, getByTestId } = setup({
      message: 'Snackbar Message',
      autoHideDuration: 10000,
      onClose: mockClose,
    });

    await act(async () => {
      await waitFor(() => getByTestId('snackbar-close'));
      // wait for snackbar to appear
      await mockDelay(TRANSITION_DURATION + 200);
      fireEvent.click(getByTestId('snackbar-close'));
      // wait for snackbar to disappear
      await mockDelay(TRANSITION_DURATION + 200);
    });

    expect(queryByText(/Snackbar Message/)).toBeNull();
    expect(mockClose).toHaveBeenCalledWith('manualClose');
  });
  test('New snackbar should appear whenever message is changed.', async () => {
    const mockClose = jest.fn();
    const props = {
      autoHideDuration: 10000,
      onClose: mockClose,
    };
    const { getByText, rerender } = setup({
      ...props,
      message: 'Snackbar Message 1',
    });
    await act(async () => {
      // Snackbar 1 is visible
      await waitFor(() => getByText(/Snackbar Message 1/));
      await mockDelay(200);
    });
    // change snackbar message
    rerender(<WrappedSnackbar {...props} message="Snackbar Message 2" />);

    expect(mockClose).toHaveBeenCalledWith('messageChange');
    await waitFor(() => getByText(/Snackbar Message 2/));
  });
  test('message should persist until Snackbar closes', async () => {
    const mockClose = jest.fn();
    const props = {
      autoHideDuration: 10000,
      onClose: mockClose,
      message: 'Snackbar Message 1',
    };
    const { getByText, queryByText, rerender } = setup(props);
    // Snackbar 1 is visible
    await waitFor(() => expect(getByText(/Snackbar Message 1/)).toBeInTheDocument());
    await mockDelay(TRANSITION_DURATION);

    // change snackbar message
    rerender(<WrappedSnackbar {...props} message="Snackbar Message 2" />);

    // onClose is called as soon as message is changed
    expect(mockClose).toBeCalledWith('messageChange');

    // Snackbar 1 is still visible, Snackbar 2 is not yet visible
    expect(getByText(/Snackbar Message 1/)).toBeInTheDocument();
    expect(queryByText(/Snackbar Message 2/)).not.toBeInTheDocument();

    // Snackbar 1 to closes
    await waitForElementToBeRemoved(() => queryByText(/Snackbar Message 1/));

    // Snackbar 2 is visible with updated message
    await waitFor(() => expect(getByText(/Snackbar Message 2/)).toBeInTheDocument());
  });
});
