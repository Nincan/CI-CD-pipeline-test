/**
 *  Created by Aneree on 16/12/20.
 */
import { render, act, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { GroupedAsyncSelect } from '../groupedAsyncSelect';

import { TestProvider } from '../../test-utils/test-provider';
import { GroupedAsyncSelectProps } from '../types';
import { normalizeOptions } from '../helpers';

const renderGroupedAsyncSelect = (props: GroupedAsyncSelectProps) =>
  render(
    <TestProvider>
      <GroupedAsyncSelect {...props} />
    </TestProvider>
  );

const countriesLoadOptions: GroupedAsyncSelectProps['loadOptions'] = () =>
  Promise.resolve({
    groups: [
      {
        group: 'asian',
        complete: true,
        options: [
          { id: 'India', label: 'India' },
          { id: 'China', label: 'China' },
          { id: 'Russia', label: 'Russia' },
        ],
      },
      {
        group: 'nonAsian',
        complete: true,
        options: [
          { id: 'Australia', label: 'Australia' },
          { id: 'USA', label: 'USA' },
        ],
      },
    ],
  });

jest.mock('../helpers', () => {
  const actual = jest.requireActual('../helpers');

  return {
    ...actual,
    shouldPaginate: () => true,
  };
});

const countriesGroupConfig = [
  { id: 'asian', label: 'Asian Countries' },
  { id: 'nonAsian', label: 'Non-Asian Countries' },
];
const genderGroupConfig = [
  { id: 'male', label: 'Male' },
  { id: 'female', label: 'Female' },
];

describe('GroupedAsyncSelect', () => {
  it('all groups names should be visible when dropdown opens, and first group of groupConfig with non zero count should be expanded.', async () => {
    const loadOptions = jest.fn(() =>
      Promise.resolve({
        groups: [
          {
            group: 'asian',
            complete: true,
            options: [],
            count: 0,
          },
          {
            group: 'nonAsian',
            complete: true,
            options: [
              { id: 'Australia', label: 'Australia' },
              { id: 'USA', label: 'USA' },
            ],
            count: 2,
          },
        ],
      })
    );
    act(() => {
      renderGroupedAsyncSelect({
        onCloseResetsInput: true,
        loadOptions,
        'aria-label': 'AsyncSelect',
        minimumInput: 0,
        loadOnFocus: true,
        groupConfig: countriesGroupConfig,
      });
    });

    const inputElement = screen.getByRole('combobox') as HTMLInputElement;

    act(() => {
      userEvent.click(inputElement);
    });
    await waitFor(() => expect(loadOptions).toBeCalledTimes(1));

    screen.getByText('0 Asian Countries');
    screen.getByText('2 Non-Asian Countries');

    // Asian collapsed, Non-Asian expanded initially.
    screen.getByTestId('asian-collapsed');
    screen.getByTestId('nonAsian-expanded');

    act(() => {
      userEvent.click(screen.getByText('0 Asian Countries'));
    });

    screen.getByTestId('asian-expanded');
    screen.getByTestId('nonAsian-collapsed');
  });

  it('if count is undefined, first group of groupConfig with atleast one option should be expanded and all groups can be collapsed', async () => {
    const loadOptions = jest.fn(() =>
      Promise.resolve({
        groups: [
          {
            group: 'asian',
            complete: true,
            options: [],
          },
          {
            group: 'nonAsian',
            complete: true,
            options: [
              { id: 'Australia', label: 'Australia' },
              { id: 'USA', label: 'USA' },
            ],
          },
        ],
      })
    );
    act(() => {
      renderGroupedAsyncSelect({
        onCloseResetsInput: true,
        loadOptions,
        'aria-label': 'AsyncSelect',
        minimumInput: 0,
        loadOnFocus: true,
        groupConfig: countriesGroupConfig,
      });
    });

    const inputElement = screen.getByRole('combobox') as HTMLInputElement;

    act(() => {
      userEvent.click(inputElement);
    });
    await waitFor(() => expect(loadOptions).toBeCalledTimes(1));

    // Asian collapsed, Non-Asian expanded initially.
    screen.getByTestId('asian-collapsed');
    screen.getByTestId('nonAsian-expanded');

    act(() => {
      userEvent.click(screen.getByText('Non-Asian Countries'));
    });

    // both collapsed
    screen.getByTestId('asian-collapsed');
    screen.getByTestId('nonAsian-collapsed');
  });

  it('options are reset to all options when onCloseResetsInput is true and user clicks outside select input', async () => {
    const loadOptions = jest.fn(countriesLoadOptions);
    act(() => {
      renderGroupedAsyncSelect({
        onCloseResetsInput: true,
        loadOptions,
        groupConfig: countriesGroupConfig,
        'aria-label': 'AsyncSelect',
        minimumInput: 0,
      });
    });

    const inputElement = screen.getByRole('combobox') as HTMLInputElement;

    userEvent.type(inputElement, 'india');

    expect(inputElement.value).toBe('india');

    // check functions called with correct arguments
    await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
    expect(loadOptions).toBeCalledWith('india', [
      { group: 'asian', pageNumber: 0 },
      { group: 'nonAsian', pageNumber: 0 },
    ]);

    act(() => {
      // blur the input
      userEvent.click(document.body);

      // now again click the input
      userEvent.click(inputElement);
    });

    // check input should be empty and all fetched options are visible
    expect(inputElement.value).toEqual('');
    screen.getByText('India');
    screen.getByText('China');
    screen.getByText('Russia');
    act(() => {
      userEvent.click(screen.getByText('Non-Asian Countries'));
    });
    screen.getByText('Australia');
    screen.getByText('USA');
  });

  describe('Should fetch options on mount if loadOnMount is true, irrespective of the value of minimumInput', () => {
    test('When minimumInput is 0', async () => {
      const loadOptions = jest.fn(() =>
        Promise.resolve({
          groups: [
            { group: 'asian', options: [], complete: true },
            { group: 'nonAsian', options: [], complete: true },
          ],
        })
      );

      renderGroupedAsyncSelect({
        loadOptions,
        loadOnMount: true,
        minimumInput: 0,
        groupConfig: countriesGroupConfig,
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      expect(loadOptions).toBeCalledWith('', [
        { group: 'asian', pageNumber: 0 },
        { group: 'nonAsian', pageNumber: 0 },
      ]);
    });

    test('When minimumInput is greater than 0, i.e. 3', async () => {
      const loadOptions = jest.fn(() =>
        Promise.resolve({
          groups: [
            { group: 'asian', options: [], complete: true },
            { group: 'nonAsian', options: [], complete: true },
          ],
        })
      );

      act(() => {
        renderGroupedAsyncSelect({
          loadOptions,
          loadOnMount: true,
          minimumInput: 3,
          groupConfig: countriesGroupConfig,
        });
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      expect(loadOptions).toBeCalledWith('', [
        { group: 'asian', pageNumber: 0 },
        { group: 'nonAsian', pageNumber: 0 },
      ]);
    });
  });

  describe('Should fetch options on focus if loadOnFocus is true and input satisfies minimumInput', () => {
    test('When input satisfies minimumInput', async () => {
      const loadOptions = jest.fn(() =>
        Promise.resolve({
          groups: [
            { group: 'asian', options: [], complete: true },
            { group: 'nonAsian', options: [], complete: true },
          ],
        })
      );

      act(() => {
        renderGroupedAsyncSelect({
          loadOptions,
          'aria-label': 'AsyncSelect',
          loadOnFocus: true,
          minimumInput: 2,
          groupConfig: countriesGroupConfig,
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
      expect(loadOptions).toBeCalledWith('hello', [
        { group: 'asian', pageNumber: 0 },
        { group: 'nonAsian', pageNumber: 0 },
      ]);
    });

    test("When input does't satisfy minimumInput", async () => {
      const loadOptions = jest.fn(() =>
        Promise.resolve({
          groups: [
            { group: 'asian', options: [], complete: true },
            { group: 'nonAsian', options: [], complete: true },
          ],
        })
      );
      act(() => {
        renderGroupedAsyncSelect({
          loadOptions,
          groupConfig: countriesGroupConfig,
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
      const loadOptions = jest.fn(countriesLoadOptions);

      act(() => {
        renderGroupedAsyncSelect({
          loadOptions,
          groupConfig: countriesGroupConfig,
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
        userEvent.click(screen.getByText(/India/i));
        userEvent.click(screen.getByText(/China/i));
        userEvent.click(screen.getByText(/Non-Asian Countries/i));
      });
      await screen.findByText('Australia');
      act(() => {
        userEvent.click(screen.getByText(/Australia/i));
      });
      expect(loadOptions).toBeCalledTimes(1);
    });
  });

  describe('Handle user input change', () => {
    const heQueryReturnPromise: ReturnType<GroupedAsyncSelectProps['loadOptions']> = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          groups: [
            {
              group: 'male',
              options: [
                {
                  id: '12',
                  label: 'Helmet',
                },
                {
                  id: '92',
                  label: 'Hercules',
                },
              ],
              complete: true,
            },
            {
              group: 'female',
              options: [
                {
                  id: '51',
                  label: 'Hermoine',
                },
              ],
              complete: true,
            },
          ],
        });
      }, 1000);
    });
    const herQueryReturnPromise: ReturnType<GroupedAsyncSelectProps['loadOptions']> = new Promise(resolve => {
      setTimeout(() => {
        resolve({
          groups: [
            {
              group: 'male',
              options: [
                {
                  id: '92',
                  label: 'Hercules',
                },
              ],
              complete: true,
            },
            {
              group: 'female',
              options: [
                {
                  id: '51',
                  label: 'Hermoine',
                },
              ],
              complete: true,
            },
          ],
        });
      }, 1000);
    });
    const inputLoadOptions: GroupedAsyncSelectProps['loadOptions'] = text => {
      if (text === 'he') {
        return heQueryReturnPromise;
      }
      if (text === 'her') {
        return herQueryReturnPromise;
      }
      return Promise.resolve({
        groups: [
          { group: 'male', options: [], complete: true },
          { group: 'female', options: [], complete: true },
        ],
      });
    };
    test('Should show options corresponding to user input without duplicates', async () => {
      const loadOptions = jest.fn(inputLoadOptions);

      act(() => {
        renderGroupedAsyncSelect({
          loadOptions,
          'aria-label': 'AsyncSelect',
          groupConfig: genderGroupConfig,
        });
      });

      const inputElement = screen.getByRole('combobox');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'he' } });
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      expect(loadOptions).toBeCalledWith('he', [
        { group: 'male', pageNumber: 0 },
        { group: 'female', pageNumber: 0 },
      ]);

      //@ts-ignore
      expect(inputElement.value).toBe('he');

      await screen.findByText('Hercules');
      screen.getByText('Helmet');
      act(() => {
        userEvent.click(screen.getByText('Female'));
      });
      screen.getByText('Hermoine');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'her' } });
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(2));
      expect(loadOptions).toHaveBeenLastCalledWith('her', [
        { group: 'male', pageNumber: 0 },
        { group: 'female', pageNumber: 0 },
      ]);

      //@ts-ignore
      expect(inputElement.value).toBe('her');

      await screen.findByText('Hermoine');
      act(() => {
        userEvent.click(screen.getByText('Male'));
      });
      await screen.findByText('Hercules');

      expect(screen.queryByText('Helmet')).toBeNull();

      await waitFor(() => heQueryReturnPromise as any);
      await waitFor(() => herQueryReturnPromise as any);
    });
  });

  describe('Handle pagination', () => {
    test('On pagination, options in the dropdown should display the options of all the fetched pages. loadOptions should only be called with the group which has been scrolled.', async () => {
      const loadOptions = jest.fn<
        ReturnType<GroupedAsyncSelectProps['loadOptions']>,
        Parameters<GroupedAsyncSelectProps['loadOptions']>
      >((text, groupFilters) => {
        const MALE_GROUP_0 = {
            group: 'male',
            options: [
              { id: '12', label: 'Helmet' },
              { id: '92', label: 'Hercules' },
            ],
            complete: false,
          },
          FEMALE_GROUP_0 = {
            group: 'female',
            options: [
              { id: '51', label: 'Hermoine' },
              { id: '52', label: 'Renuka' },
            ],
            complete: false,
          },
          MALE_GROUP_1 = {
            group: 'male',
            options: [{ id: '46', label: 'Ross' }],
            complete: true,
          },
          FEMALE_GROUP_1 = {
            group: 'female',
            options: [
              { id: '82', label: 'Rachel' },
              { id: '31', label: 'Monicae' },
            ],
            complete: true,
          };
        const MALE_GROUP = [MALE_GROUP_0, MALE_GROUP_1],
          FEMALE_GROUP = [FEMALE_GROUP_0, FEMALE_GROUP_1];
        const groups = groupFilters.map(({ group, pageNumber }) =>
          group === 'male' ? MALE_GROUP[pageNumber] : FEMALE_GROUP[pageNumber]
        );

        return Promise.resolve({ groups });
      });

      act(() => {
        renderGroupedAsyncSelect({
          loadOptions,
          groupConfig: genderGroupConfig,
          'aria-label': 'AsyncSelect',
        });
      });

      const inputElement = screen.getByRole('combobox');

      act(() => {
        fireEvent.change(inputElement, { target: { value: 'e' } });
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(1));
      expect(loadOptions).toBeCalledWith('e', [
        { group: 'male', pageNumber: 0 },
        { group: 'female', pageNumber: 0 },
      ]);

      //@ts-ignore
      expect(inputElement.value).toBe('e');

      await screen.findByText('Helmet');
      screen.getByText('Hercules');
      act(() => {
        userEvent.click(screen.getByText('Female'));
      });
      await screen.findByText('Hermoine');
      screen.getByText('Renuka');

      const femaleListElement = screen.getAllByRole('menu')[0];
      act(() => {
        fireEvent.scroll(femaleListElement);
      });

      await waitFor(() => expect(loadOptions).toBeCalledTimes(2));
      expect(loadOptions).toHaveBeenLastCalledWith('e', [{ group: 'female', pageNumber: 1 }]);

      const optionNodes = await screen.findAllByText('Rachel');
      expect(optionNodes.length).toBe(1);

      await screen.findByText('Hermoine');
      screen.getByText('Monicae');
    });
    describe('Handle resolution of selected options', () => {
      test('Should not invoke resolveSelectedOptions when value is not present', async () => {
        const resolveSelectedOptions = jest.fn(() => Promise.resolve({}));

        act(() => {
          renderGroupedAsyncSelect({
            resolveSelectedOptions,
            groupConfig: countriesGroupConfig,
            loadOptions: () =>
              Promise.resolve({
                groups: [
                  {
                    group: 'asian',
                    complete: true,
                    options: [],
                  },
                  {
                    group: 'nonAsian',
                    complete: true,
                    options: [],
                  },
                ],
              }),
          });
        });

        await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(0));
      });

      test('Should not invoke resolveSelectedOptions when there are no unresolved selected options', async () => {
        const resolveSelectedOptions = jest.fn(() => Promise.resolve({}));

        act(() => {
          renderGroupedAsyncSelect({
            resolveSelectedOptions,
            loadOptions: () =>
              Promise.resolve({
                groups: [
                  {
                    group: 'asian',
                    complete: true,
                    options: [],
                  },
                  {
                    group: 'nonAsian',
                    complete: true,
                    options: [],
                  },
                ],
              }),
            groupConfig: countriesGroupConfig,
            initialOptions: {
              asian: [{ id: 'India', label: 'India' }],
              nonAsian: [{ id: 'Australia', label: 'Australia' }],
            },
            value: {
              asian: [{ id: 'India', label: 'India' }],
              nonAsian: [{ id: 'Australia', label: 'Australia' }],
            },
          });
        });

        await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(0));
      });

      test('Should invoke resolveSelectedOptions with correct groupId when value is present and there are unresolved select options', async () => {
        const resolveSelectedOptions = jest.fn(() => Promise.resolve({}));

        act(() => {
          renderGroupedAsyncSelect({
            resolveSelectedOptions,
            loadOptions: () =>
              Promise.resolve({
                groups: [
                  {
                    group: 'asian',
                    complete: true,
                    options: [],
                  },
                  {
                    group: 'nonAsian',
                    complete: true,
                    options: [],
                  },
                ],
              }),
            groupConfig: countriesGroupConfig,
            initialOptions: {
              asian: [
                { id: 'ind', label: 'India' },
                { id: 'ch', label: 'China' },
              ],
            },
            value: {
              asian: [
                { id: 'ind', label: 'India' },
                { id: 'rus', label: 'rus' },
              ],
              nonAsian: [{ id: 'aus', label: 'aus' }],
            },
          });
        });

        await waitFor(() => expect(resolveSelectedOptions).toBeCalledTimes(1));
        expect(resolveSelectedOptions).toBeCalledWith({ nonAsian: ['aus'], asian: ['rus'] });
      });
    });
  });
});
