/**
 *  Created by Aneree on 16/12/20.
 */
import { useState } from 'react';
import { render, act, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TestProvider } from '../../test-utils/test-provider';
import { AsyncSelectProps, AsyncSelectValue, Value } from '../types';

const renderAsyncSelect = (props: AsyncSelectProps) => {
  // eslint-disable-next-line global-require
  const { AsyncSelect } = require('../asyncSelect');
  const results = render(
    <TestProvider>
      <AsyncSelect {...props} />
    </TestProvider>
  );

  return {
    ...results,
    rerender: (newProps: Partial<AsyncSelectProps>) =>
      results.rerender(
        <TestProvider>
          <AsyncSelect {...props} {...newProps} />
        </TestProvider>
      ),
  };
};

const StatefulAsyncSelect = ({ onChange, ...restProps }: AsyncSelectProps) => {
  // eslint-disable-next-line global-require
  const { AsyncSelect } = require('../asyncSelect');

  const [value, setValue] = useState<AsyncSelectValue>([]);
  const handleChange = params => {
    setValue(params.value);
    onChange && onChange(params);
  };
  return <AsyncSelect value={value} onChange={handleChange} {...restProps} />;
};

const renderStatefulAsyncSelect = (props: AsyncSelectProps) => {
  const results = render(
    <TestProvider>
      <StatefulAsyncSelect {...props} />
    </TestProvider>
  );

  return {
    ...results,
    rerender: (newProps: Partial<AsyncSelectProps>) =>
      results.rerender(
        <TestProvider>
          <StatefulAsyncSelect {...props} {...newProps} />
        </TestProvider>
      ),
  };
};
describe('AsyncSelect', () => {
  jest.mock('../helpers', () => {
    const actual = jest.requireActual('../helpers');

    return {
      ...actual,
      shouldPaginate: () => true,
    };
  });

  it('options are reset when onCloseResetsInput is true and user clicks outside select input', async () => {
    const loadOptions = jest.fn<
      ReturnType<AsyncSelectProps['loadOptions']>,
      Parameters<AsyncSelectProps['loadOptions']>
    >(() =>
      Promise.resolve({
        options: [
          {
            id: 'India',
            label: 'India',
          },
          {
            id: 'USA',
            label: 'USA',
          },
          {
            id: 'Australia',
            label: 'Australia',
          },
          {
            id: 'Japan',
            label: 'Japan',
          },
        ],
        complete: true,
      })
    );

    act(() => {
      renderAsyncSelect({
        onCloseResetsInput: true,
        loadOptions,
        'aria-label': 'AsyncSelect',
        minimumInput: 0,
      });
    });

    const inputElement = screen.getByRole('combobox') as HTMLInputElement;

    // type something in input
    userEvent.type(inputElement, 'india');

    expect(inputElement.value).toBe('india');

    // check functions called with correct arguments
    await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
    expect(loadOptions).toBeCalledWith('india', 0);

    // blur the input
    userEvent.click(document.body);

    // now again click the input
    userEvent.click(inputElement);

    // check input should be empty and no option in menu
    expect(inputElement.value).toEqual('');
    screen.getByText('India');
    screen.getByText('USA');
    screen.getByText('Japan');
    screen.getByText('Australia');
  });

  it('options are reset to all options when onCloseResetsInput and loadOnFocus is true and user clicks outside select input', async () => {
    const loadOptions = jest.fn<
      ReturnType<AsyncSelectProps['loadOptions']>,
      Parameters<AsyncSelectProps['loadOptions']>
    >(() =>
      Promise.resolve({
        options: [
          {
            id: 'India',
            label: 'India',
          },
          {
            id: 'USA',
            label: 'USA',
          },
          {
            id: 'Australia',
            label: 'Australia',
          },
          {
            id: 'Japan',
            label: 'Japan',
          },
        ],
        complete: true,
      })
    );

    act(() => {
      renderAsyncSelect({
        onCloseResetsInput: true,
        loadOptions,
        'aria-label': 'AsyncSelect',
        minimumInput: 0,
        loadOnFocus: true,
      });
    });

    const inputElement = screen.getByRole('combobox') as HTMLInputElement;

    // click the input, as loadOnFocus is true, will call loadOptions
    userEvent.click(inputElement);
    await waitFor(() => expect(loadOptions).toHaveBeenNthCalledWith(1, '', 0));

    // type something in input
    userEvent.type(inputElement, 'india');

    expect(inputElement.value).toBe('india');

    // check functions called with correct arguments
    await waitFor(() => expect(loadOptions).toHaveBeenNthCalledWith(2, 'india', 0));

    // blur the input
    userEvent.click(document.body);

    // now again click the input
    userEvent.click(inputElement);

    // check input should be empty and no option in menu
    await waitFor(() => expect(inputElement.value).toEqual(''));
    // loadOnFocus is true, options should be present
    screen.getByText('India');
    screen.getByText('USA');
    screen.getByText('Japan');
    screen.getByText('Australia');
  });

  describe('Should fetch options on mount if loadOnMount is true, irrespective of the value of minimumInput', () => {
    test('When minimumInput is 0', async () => {
      const loadOptions = jest.fn(() => Promise.resolve({ options: [], complete: true }));

      renderAsyncSelect({
        loadOptions,
        loadOnMount: true,
        minimumInput: 0,
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      expect(loadOptions).toBeCalledWith('', 0);
    });

    test('When minimumInput is greater than 0, i.e. 3', async () => {
      const loadOptions = jest.fn(() => Promise.resolve({ options: [], complete: true }));

      act(() => {
        renderAsyncSelect({
          loadOptions,
          loadOnMount: true,
          minimumInput: 3,
        });
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      expect(loadOptions).toBeCalledWith('', 0);
    });
  });

  describe('Should fetch options on focus if loadOnFocus is true and input satisfies minimumInput', () => {
    test('When input satisfies minimumInput', async () => {
      const loadOptions = jest.fn(() => Promise.resolve({ options: [], complete: true }));

      act(() => {
        renderAsyncSelect({
          loadOptions,
          'aria-label': 'AsyncSelect',
          loadOnFocus: true,
          minimumInput: 2,
        });
      });

      const inputElement = screen.getByRole('combobox');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'hello' } });
      });

      //@ts-ignore
      expect(inputElement.value).toBe('hello');

      act(() => {
        fireEvent.focus(inputElement);
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      expect(loadOptions).toBeCalledWith('hello', 0);
    });

    test("When input does't satisfy minimumInput", async () => {
      const loadOptions = jest.fn(() => Promise.resolve({ options: [], complete: true }));

      act(() => {
        renderAsyncSelect({
          loadOptions,
          'aria-label': 'AsyncSelect',
          loadOnFocus: true,
          minimumInput: 3,
        });
      });

      const inputElement = screen.getByRole('combobox');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'hi' } });
      });

      //@ts-ignore
      expect(inputElement.value).toBe('hi');

      act(() => {
        fireEvent.focus(inputElement);
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(0));
    });

    test('loadOptions should not be called repeatedly, when options are selected', async () => {
      const loadOptions = jest.fn<
        ReturnType<AsyncSelectProps['loadOptions']>,
        Parameters<AsyncSelectProps['loadOptions']>
      >(() =>
        Promise.resolve({
          options: [
            {
              id: '12',
              label: 'Helmet',
            },
            {
              id: '51',
              label: 'Hermoine',
            },
            {
              id: '92',
              label: 'Hercules',
            },
          ],
          complete: true,
        })
      );

      act(() => {
        renderAsyncSelect({
          loadOptions,
          'aria-label': 'AsyncSelect',
          loadOnFocus: true,
          minimumInput: 0,
          multi: true,
          filterOutSelected: false,
          closeOnSelect: false,
        });
      });

      const inputElement = screen.getByRole('combobox');

      act(() => {
        userEvent.click(inputElement);
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      act(() => {
        userEvent.click(screen.getByText(/Helmet/i));
        userEvent.click(screen.getByText(/Hermoine/i));
      });
      expect(loadOptions).toBeCalledTimes(1);
    });
  });

  describe('Handle user input change', () => {
    test('Should show options corresponding to user input without duplicates', async () => {
      const heQueryReturnPromise: ReturnType<AsyncSelectProps['loadOptions']> = new Promise(resolve => {
        setTimeout(() => {
          resolve({
            options: [
              {
                id: '12',
                label: 'Helmet',
              },
              {
                id: '51',
                label: 'Hermoine',
              },
              {
                id: '92',
                label: 'Hercules',
              },
            ],
            complete: true,
          });
        }, 1000);
      });

      const herQueryReturnPromise: ReturnType<AsyncSelectProps['loadOptions']> = new Promise(resolve => {
        setTimeout(() => {
          resolve({
            options: [
              {
                id: '51',
                label: 'Hermoine',
              },
              {
                id: '92',
                label: 'Hercules',
              },
            ],
            complete: true,
          });
        }, 1000);
      });

      const loadOptions = jest.fn<
        ReturnType<AsyncSelectProps['loadOptions']>,
        Parameters<AsyncSelectProps['loadOptions']>
      >(text => {
        if (text === 'he') {
          return heQueryReturnPromise;
        }
        if (text === 'her') {
          return herQueryReturnPromise;
        }
        return Promise.resolve({ options: [], complete: true });
      });

      act(() => {
        renderAsyncSelect({
          loadOptions,
          'aria-label': 'AsyncSelect',
        });
      });

      const inputElement = screen.getByRole('combobox');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'he' } });
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      expect(loadOptions).toBeCalledWith('he', 0);

      //@ts-ignore
      expect(inputElement.value).toBe('he');

      await screen.findByText('Hermoine');
      screen.getByText('Helmet');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'her' } });
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(2));
      expect(loadOptions).toHaveBeenLastCalledWith('her', 0);

      //@ts-ignore
      expect(inputElement.value).toBe('her');

      const optionNodes = await screen.findAllByText('Hermoine');
      expect(optionNodes.length).toBe(1);

      expect(screen.queryByText('Helmet')).toBeNull();

      await waitFor(() => heQueryReturnPromise as any);
      await waitFor(() => herQueryReturnPromise as any);
    });

    test('Should show options in the dropdown corresponding to the latest user input and not the last resolved fetch promise', async () => {
      const heQueryReturnPromise: ReturnType<AsyncSelectProps['loadOptions']> = new Promise(resolve => {
        setTimeout(() => {
          resolve({
            options: [
              {
                id: '12',
                label: 'Helmet',
              },
              {
                id: '51',
                label: 'Hermoine',
              },
              {
                id: '92',
                label: 'Hercules',
              },
            ],
            complete: true,
          });
        }, 50);
      });

      const herQueryReturnPromise: ReturnType<AsyncSelectProps['loadOptions']> = new Promise(resolve => {
        setTimeout(() => {
          resolve({
            options: [
              {
                id: '51',
                label: 'Hermoine',
              },
              {
                id: '92',
                label: 'Hercules',
              },
            ],
            complete: true,
          });
        }, 50);
      });

      const loadOptions = jest.fn<
        ReturnType<AsyncSelectProps['loadOptions']>,
        Parameters<AsyncSelectProps['loadOptions']>
      >(text => {
        if (text === 'he') {
          return heQueryReturnPromise;
        }
        if (text === 'her') {
          return herQueryReturnPromise;
        }
        return Promise.resolve({ options: [], complete: true });
      });

      act(() => {
        renderAsyncSelect({
          loadOptions,
          'aria-label': 'AsyncSelect',
        });
      });

      const inputElement = screen.getByRole('combobox');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'he' } });
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      expect(loadOptions).toBeCalledWith('he', 0);

      //@ts-ignore
      expect(inputElement.value).toBe('he');

      // await screen.findByText('Hermoine');
      // screen.getByText('Helmet');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'her' } });
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(2));
      expect(loadOptions).toHaveBeenLastCalledWith('her', 0);

      //@ts-ignore
      expect(inputElement.value).toBe('her');

      const optionNodes = await screen.findAllByText('Hermoine');
      expect(optionNodes.length).toBe(1);

      expect(screen.queryByText('Helmet')).toBeNull();
      await waitFor(() => heQueryReturnPromise as any);
      await waitFor(() => herQueryReturnPromise as any);
    });
  });

  describe('Handle pagination', () => {
    test('On pagination, options in the dropdown should display the options of all the fetched pages', async () => {
      const loadOptions = jest.fn<
        ReturnType<AsyncSelectProps['loadOptions']>,
        Parameters<AsyncSelectProps['loadOptions']>
      >((text, pageNumber) => {
        if (pageNumber === 0) {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve({
                options: [
                  {
                    id: '12',
                    label: 'Helmet',
                  },
                  {
                    id: '51',
                    label: 'Hermoine',
                  },
                  {
                    id: '92',
                    label: 'Hercules',
                  },
                ],
                complete: false,
              });
            }, 50);
          });
        }
        return Promise.resolve({
          options: [
            {
              id: '82',
              label: 'Rachel',
            },
            {
              id: '31',
              label: 'Monica',
            },
            {
              id: '46',
              label: 'Ross',
            },
          ],
          complete: false,
        });
      });

      act(() => {
        renderAsyncSelect({
          loadOptions,
          'aria-label': 'AsyncSelect',
        });
      });

      const inputElement = screen.getByRole('combobox');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'e' } });
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      expect(loadOptions).toBeCalledWith('e', 0);

      //@ts-ignore
      expect(inputElement.value).toBe('e');

      await screen.findByText('Hermoine');
      screen.getByText('Helmet');

      const menuElement = screen.getAllByRole('listbox')[0];
      act(() => {
        fireEvent.scroll(menuElement);
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(2));
      expect(loadOptions).toHaveBeenLastCalledWith('e', 1);

      const optionNodes = await screen.findAllByText('Hermoine');
      expect(optionNodes.length).toBe(1);

      await screen.findByText('Hermoine');
      screen.getByText('Rachel');
    });
    test('Overlay variant - On pagination, options in the dropdown should display the options of all the fetched pages', async () => {
      const loadOptions = jest.fn<
        ReturnType<AsyncSelectProps['loadOptions']>,
        Parameters<AsyncSelectProps['loadOptions']>
      >((text, pageNumber) => {
        if (pageNumber === 0) {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve({
                options: [
                  {
                    id: '12',
                    label: 'Helmet',
                  },
                  {
                    id: '51',
                    label: 'Hermoine',
                  },
                  {
                    id: '92',
                    label: 'Hercules',
                  },
                ],
                complete: false,
              });
            }, 50);
          });
        }
        return Promise.resolve({
          options: [
            {
              id: '82',
              label: 'Rachel',
            },
            {
              id: '31',
              label: 'Monica',
            },
            {
              id: '46',
              label: 'Ross',
            },
          ],
          complete: false,
        });
      });

      act(() => {
        renderAsyncSelect({
          loadOptions,
          'aria-label': 'AsyncSelect',
          type: 'overlay' as const,
          // @ts-ignore
          children: <button type="button">Open Overlay</button>,
          overrides: {
            OverlayContentContainer: {
              props: {
                'data-testid': 'overlay-content-container',
              },
            },
          },
        });
      });
      const openOverlayButton = screen.getByText(/Open Overlay/i);
      act(() => {
        fireEvent.click(openOverlayButton);
      });
      await screen.findByText(/Type to Search/i);

      const inputElement = screen.getByRole('textbox');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'e' } });
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      expect(loadOptions).toBeCalledWith('e', 0);

      //@ts-ignore
      expect(inputElement.value).toBe('e');

      await screen.findByText('Hermoine');
      screen.getByText('Helmet');

      const overlayContentContainer = screen.getByTestId('overlay-content-container');
      act(() => {
        fireEvent.scroll(overlayContentContainer);
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(2));
      expect(loadOptions).toHaveBeenLastCalledWith('e', 1);

      const optionNodes = await screen.findAllByText('Hermoine');
      expect(optionNodes.length).toBe(1);

      await screen.findByText('Hermoine');
      screen.getByText('Rachel');
    });
  });

  describe('Handle resolution of selected options', () => {
    test('Should not invoke resolveSelectedOptions when value is not present', async () => {
      const resolveSelectedOptions = jest.fn(() => Promise.resolve([]));

      act(() => {
        renderAsyncSelect({
          resolveSelectedOptions,
          loadOptions: () => Promise.resolve({ options: [], complete: true }),
        });
      });

      await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(0));
    });

    test('Should not invoke resolveSelectedOptions when there are no unresolved selected options', async () => {
      const resolveSelectedOptions = jest.fn(() => Promise.resolve([]));

      act(() => {
        renderAsyncSelect({
          resolveSelectedOptions,
          loadOptions: () => Promise.resolve({ options: [], complete: true }),
          initialOptions: [
            { id: 'id1', label: 'label1' },
            { id: 'id2', label: 'label2' },
          ],
          value: [
            { id: 'id1', label: 'label1' },
            { id: 'id2', label: 'label2' },
          ],
          multi: true,
        });
      });

      await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(0));
    });

    test('Should invoke resolveSelectedOptions when value is present and there are unresolved select options', async () => {
      const resolveSelectedOptions = jest.fn(() => Promise.resolve([]));

      act(() => {
        renderAsyncSelect({
          resolveSelectedOptions,
          loadOptions: () => Promise.resolve({ options: [], complete: true }),
          initialOptions: [{ id: 'id1', label: 'label1' }],
          value: [
            { id: 'id1', label: 'label1' },
            { id: 'id2', label: 'id2' },
          ],
          multi: true,
        });
      });

      await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(1));
      expect(resolveSelectedOptions).toBeCalledWith(['id2']);
    });

    describe('resolveValuesOnUpdate', () => {
      test('If false, should not invoke resolveSelectedOptions when unresolved value is added after mount.', async () => {
        const resolveSelectedOptions = jest.fn(() => Promise.resolve([]));

        let results;
        act(() => {
          results = renderAsyncSelect({
            resolveSelectedOptions,
            loadOptions: () => Promise.resolve({ options: [], complete: true }),
            initialOptions: [{ id: 'id1', label: 'label1' }],
            value: [
              { id: 'id1', label: 'label1' },
              { id: 'id2', label: 'id2' },
            ],
            multi: true,
          });
        });

        await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(1));
        expect(resolveSelectedOptions).toBeCalledWith(['id2']);

        act(() => {
          results.rerender({
            value: [
              { id: 'id1', label: 'label1' },
              { id: 'id2', label: 'id2' },
              { id: 'id3', label: 'id3' },
              { id: 'id4', label: 'id4' },
            ],
          });
        });
        // should not be called 2nd time
        expect(resolveSelectedOptions).toBeCalledTimes(1);
      });
      test('If false and when select re-renders with value changed, it should not re-calculate unresolved options.', async () => {
        const resolveSelectedOptions = jest.fn(() => Promise.resolve([]));

        let results;
        act(() => {
          results = renderAsyncSelect({
            resolveSelectedOptions,
            loadOptions: () => Promise.resolve({ options: [], complete: true }),
            value: [{ id: 'id1', label: 'id1' }],
            multi: true,
          });
        });

        act(() => {
          results.rerender({
            value: [{ id: 'id1', label: 'id1' }],
          });
        });
      });
      test('If true, should invoke resolveSelectedOptions when unresolved value is added.', async () => {
        const resolveSelectedOptions = jest.fn(() => Promise.resolve([{ id: 'id2', label: 'label2' }]));

        let results;
        act(() => {
          results = renderAsyncSelect({
            resolveSelectedOptions,
            loadOptions: () => Promise.resolve({ options: [], complete: true }),
            initialOptions: [{ id: 'id1', label: 'label1' }],
            value: [
              { id: 'id1', label: 'label1' },
              { id: 'id2', label: 'id2' },
            ],
            multi: true,
            resolveValuesOnUpdate: true,
          });
        });

        await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(1));
        expect(resolveSelectedOptions).toBeCalledWith(['id2']);

        act(() => {
          results.rerender({
            value: [
              { id: 'id1', label: 'label1' },
              { id: 'id2', label: 'id2' },
              { id: 'id3', label: 'id3' },
              { id: 'id4', label: 'id4' },
            ],
          });
        });
        // // should be called 2nd time
        // expect(resolveSelectedOptions).toBeCalledTimes(2);
        // // should be called with unresolved values only. id2 was resolved on mount.
        // expect(resolveSelectedOptions).toHaveBeenLastCalledWith(['id3', 'id4']);
      });
    });

    describe('hideUnresolvedValues', () => {
      test('if true, unrelsolved values should not be rendered.', async () => {
        const resolveSelectedOptions = jest.fn(() => Promise.resolve([{ id: 'id2', label: 'label2' }]));

        let results;
        act(() => {
          results = renderAsyncSelect({
            resolveSelectedOptions,
            loadOptions: () => Promise.resolve({ options: [], complete: true }),
            initialOptions: [{ id: 'id1', label: 'label1' }],
            value: [
              { id: 'id1', label: 'label1' },
              { id: 'id2', label: 'id2' },
              { id: 'id3', label: 'id3' },
              { id: 'id4', label: 'id4' },
            ],
            multi: true,
            hideUnresolvedValues: true,
          });
        });

        await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(1));
        expect(resolveSelectedOptions).toBeCalledWith(['id2', 'id3', 'id4']);

        screen.getByText('label1');
        screen.getByText('label2');
        expect(screen.queryByText('id3')).toBeNull();
        expect(screen.queryByText('id4')).toBeNull();
      });
      test('if true, onChange should be called with unresolved values as well.', async () => {
        const resolveSelectedOptions = jest.fn(() => Promise.resolve([{ id: 'id2', label: 'label2' }]));
        const onChange = jest.fn();
        let results;
        act(() => {
          results = renderAsyncSelect({
            resolveSelectedOptions,
            loadOptions: () => Promise.resolve({ options: [{ id: 'id5', label: 'label5' }], complete: true }),
            initialOptions: [{ id: 'id1', label: 'label1' }],
            value: [
              { id: 'id1', label: 'label1' },
              { id: 'id2', label: 'id2' },
              { id: 'id3', label: 'id3' },
              { id: 'id4', label: 'id4' },
            ],
            multi: true,
            hideUnresolvedValues: true,
            onChange,
            loadOnMount: true,
          });
        });

        await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(1));
        expect(resolveSelectedOptions).toBeCalledWith(['id2', 'id3', 'id4']);

        act(() => {
          userEvent.click(screen.getByRole('combobox'));
        });
        act(() => {
          userEvent.click(screen.getByText('label5'));
        });

        expect(onChange.mock.calls[0][0]).toEqual(
          expect.objectContaining({ valueKeys: ['id3', 'id4', 'id1', 'id2', 'id5'] })
        );
      });
    });

    test('Tombstone should be visible when values are being resolved.', async () => {
      const resolveSelectedOptions = jest.fn(() => Promise.resolve([]));

      act(() => {
        renderAsyncSelect({
          resolveSelectedOptions,
          loadOptions: () => Promise.resolve({ options: [], complete: true }),
          value: [{ id: 'id1', label: 'id1' }],
        });
      });

      screen.getByTestId('single-value-tombstone');

      await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(1));
      expect(resolveSelectedOptions).toBeCalledWith(['id1']);
    });
    test('No of tombstone should be same as no of unresolved values in multi-select.', async () => {
      const resolveSelectedOptions = jest.fn(() => Promise.resolve([]));

      act(() => {
        renderAsyncSelect({
          resolveSelectedOptions,
          loadOptions: () => Promise.resolve({ options: [], complete: true }),
          initialOptions: [{ id: 'id1', label: 'label1' }],
          value: [{ id: 'id1', label: 'label1' }, { id: 'id2', label: 'id2' }, 'id3', 'id4'],
          multi: true,
        });
      });

      expect(screen.queryAllByTestId('multi-value-tombstone').length).toBe(3);

      await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(1));
    });
  });

  test('When searchable is false, input should not render', () => {
    const resolveSelectedOptions = jest.fn(() => Promise.resolve([]));

    const { queryByRole } = renderAsyncSelect({
      searchable: false,
      resolveSelectedOptions,
      loadOptions: () => Promise.resolve({ options: [], complete: true }),
    });

    expect(queryByRole('textbox')).toBeFalsy();
  });

  describe('creatable', () => {
    test('should retain created options', async () => {
      const NEW_OPTION = 'new option';
      const CREATABLE_NEW_OPTION = `Create “${NEW_OPTION}”`;

      const { getByRole, findByRole, getByText, queryByText } = renderStatefulAsyncSelect({
        loadOptions: () => Promise.resolve({ options: [], complete: true }),
        creatable: true,
      });

      const selectInput = getByRole('combobox');

      // create new option
      userEvent.type(selectInput, NEW_OPTION);
      userEvent.click(getByText(CREATABLE_NEW_OPTION));

      // clear selected option
      userEvent.click(await findByRole('button'));
      expect(selectInput).toHaveValue('');

      // open dropdown
      userEvent.click(selectInput);

      // created option is already present in dropdown
      expect(queryByText(NEW_OPTION)).toBeInTheDocument();
      expect(queryByText(CREATABLE_NEW_OPTION)).not.toBeInTheDocument();
    });
  });

  describe('moveSelectedOptionsToTop', () => {
    test('should move selected options to top when moveSelectedOptionsToTop is set', async () => {
      const loadOptions = jest.fn<
        ReturnType<AsyncSelectProps['loadOptions']>,
        Parameters<AsyncSelectProps['loadOptions']>
      >(() =>
        Promise.resolve({
          options: [
            {
              id: '12',
              label: 'Helmet',
            },
            {
              id: '51',
              label: 'Hermoine',
            },
            {
              id: '92',
              label: 'Hercules',
            },
          ],
          complete: true,
        })
      );

      act(() => {
        renderStatefulAsyncSelect({
          loadOptions,
          'aria-label': 'AsyncSelect',
          loadOnFocus: true,
          multi: true,
          filterOutSelected: false,
          moveSelectedOptionsToTop: true,
          closeOnSelect: false,
        });
      });

      const inputElement = screen.getByRole('combobox');

      act(() => {
        userEvent.click(inputElement);
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      //select the last option
      act(() => {
        userEvent.click(screen.getByText(/Hercules/i));
      });
      //blue the input
      userEvent.click(document.body);
      //re open the options popover
      act(() => {
        userEvent.click(inputElement);
      });
      await waitFor(() => expect(loadOptions).toBeCalled());
      const listItemsText = screen.getAllByTestId('list-item-text');
      //check if the first list element has the text content of the selected option
      expect(listItemsText[0].textContent).toBe('Hercules');
    });
  });
});
