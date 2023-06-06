import { act, cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getCSSByTestId, TestProvider } from '../../test-utils/test-provider';
import BaseSelect from '../base-select';
import StatefulSelect from '../stateful-select';
import { BaseSelectProps, Option, Options } from '../types';
import { SelectWithModal } from './BaseSelect.fixtures';
import { getOptionByLabel } from './utils';
import { getSelectedOptions } from '../utils/test-utils';

const OPTIONS: Option[] = [
  { label: 'AliceBlue', value: '#F0F8FF' },
  { label: 'AntiqueWhite', value: '#FAEBD7' },
  { label: 'Aqua', value: '#00FFFF' },
  { label: 'Aquamarine', value: '#7FFFD4' },
  { label: 'Azure', value: '#F0FFFF' },
  { label: 'Beige', value: '#F5F5DC' },
];

const renderBaseSelect = (props: Partial<BaseSelectProps> = {}) =>
  render(
    <TestProvider>
      <BaseSelect options={OPTIONS} labelKey="label" valueKey="value" {...props} />
    </TestProvider>
  );

const renderSelectWithModal = props =>
  render(<SelectWithModal options={OPTIONS} labelKey="label" valueKey="value" {...props} />);

const renderStatefulSelect = (props?: Partial<BaseSelectProps>) => {
  const results = render(
    <TestProvider>
      <StatefulSelect options={OPTIONS} labelKey="label" valueKey="value" {...props} />
    </TestProvider>
  );
  return {
    ...results,
    rerender: (newProps?: Partial<BaseSelectProps>) =>
      results.rerender(
        <TestProvider>
          <StatefulSelect options={OPTIONS} labelKey="label" valueKey="value" {...props} {...newProps} />
        </TestProvider>
      ),
  };
};

describe('BaseSelect', function () {
  beforeEach(cleanup);

  describe('Select All should be selected only when all options are selected', function () {
    test('all options are selected.', async () => {
      renderBaseSelect({
        value: OPTIONS,
        startOpen: true,
        multi: true,
        filterOutSelected: false,
      });

      const selectAllOption = getOptionByLabel('Select All');
      expect(selectAllOption!.getAttribute('aria-selected')).toBe('true');
    });
    test('at least one of the option is not selected.', async () => {
      renderBaseSelect({
        value: OPTIONS.slice(0, 2),
        startOpen: true,
        multi: true,
        filterOutSelected: false,
      });

      const selectAllOption = getOptionByLabel('Select All');
      expect(selectAllOption!.getAttribute('aria-selected')).toBe('false');
    });
    test('disabled option should not be selected on clicking Select All.', async () => {
      renderStatefulSelect({
        options: OPTIONS.slice(0, 2).concat({ ...OPTIONS[2], disabled: true }),
        startOpen: true,
        multi: true,
        filterOutSelected: false,
        closeOnSelect: false,
      });

      const selectAllOption = getOptionByLabel('Select All');
      act(() => {
        userEvent.click(selectAllOption!);
      });

      expect(selectAllOption.getAttribute('aria-selected')).toBe('true');
    });
    test('Select All option should be selected if all the enabled(not disabled) options are selected.', async () => {
      renderStatefulSelect({
        options: OPTIONS.slice(0, 2).concat({ ...OPTIONS[2], disabled: true }),
        startOpen: true,
        multi: true,
        filterOutSelected: false,
        closeOnSelect: false,
      });

      act(() => {
        userEvent.click(getOptionByLabel('AliceBlue'));
      });
      act(() => {
        userEvent.click(getOptionByLabel('AntiqueWhite'));
      });
      act(() => {
        userEvent.click(getOptionByLabel('Aqua'));
      });

      expect(getOptionByLabel('Select All').getAttribute('aria-selected')).toBe('true');
    });
  });

  describe('onChange', () => {
    describe('single select', () => {
      test('onChange should only be called once when user selects a value from the dropdown', () => {
        const onChange = jest.fn();
        renderBaseSelect({ onChange });

        act(() => {
          userEvent.click(screen.getByRole('combobox'));
        });
        expect(onChange).toBeCalledTimes(0);

        act(() => {
          userEvent.click(getOptionByLabel('Aqua'));
        });

        expect(onChange).toBeCalledTimes(1);
        expect(onChange).toBeCalledWith({
          option: { label: 'Aqua', value: '#00FFFF' },
          type: 'select',
          value: [{ label: 'Aqua', value: '#00FFFF' }],
        });
      });
      test('when selecting option, onChange should be called with type `select`.', () => {
        const onChange = jest.fn();
        renderStatefulSelect({ onChange });

        act(() => {
          userEvent.click(screen.getByRole('combobox'));
        });
        expect(onChange).toBeCalledTimes(0);

        act(() => {
          userEvent.click(getOptionByLabel('AliceBlue'));
        });
        expect(onChange).toBeCalledTimes(1);
        expect(onChange).toBeCalledWith({
          option: { label: 'AliceBlue', value: '#F0F8FF' },
          type: 'select',
          value: [{ label: 'AliceBlue', value: '#F0F8FF' }],
        });

        act(() => {
          userEvent.click(screen.getByRole('combobox'));
        });
        act(() => {
          userEvent.click(getOptionByLabel('Aqua'));
        });
        expect(onChange).toBeCalledTimes(2);
        expect(onChange).toHaveBeenLastCalledWith({
          option: { label: 'Aqua', value: '#00FFFF' },
          type: 'select',
          value: [{ label: 'Aqua', value: '#00FFFF' }],
        });
      });
      test('on modifying the selected value and then blurring the select, previous value should get selected', () => {
        const onChange = jest.fn();
        renderBaseSelect({
          value: OPTIONS.slice(0, 1),
          onChange,
          clearable: false,
        });
        expect(getSelectedOptions()).toEqual(['AliceBlue']);
        const selectBox = screen.getByRole('combobox');
        userEvent.click(selectBox);
        userEvent.type(selectBox, '{backspace}');
        // pressing backspace on the selected input would internally onChange to remove the option
        expect(onChange).toHaveBeenLastCalledWith({
          type: 'remove',
          value: [],
          option: OPTIONS[0],
        });
        // removes the selected value
        expect(screen.queryByTestId('combobox-selected-value')).not.toBeInTheDocument();
        selectBox.blur(); // remove focus

        expect(getSelectedOptions()).toEqual(['AliceBlue']);
      });
      test('on clicking clear all button, onChange should be called with type `clear`, value should be empty array.', () => {
        const onChange = jest.fn();
        renderStatefulSelect({ onChange });

        act(() => {
          userEvent.click(screen.getByRole('combobox'));
        });
        expect(onChange).toBeCalledTimes(0);

        act(() => {
          userEvent.click(getOptionByLabel('Aqua'));
        });
        act(() => {
          userEvent.click(screen.getByRole('button', { name: /clear value/i }));
        });

        expect(onChange).toBeCalledTimes(2);
        expect(onChange).toHaveBeenLastCalledWith({
          type: 'clear',
          value: [],
          option: null,
        });
      });
    });
    describe('multi select', () => {
      test('when selecting option, onChange should be called with type `select`. value should have all the selected options', () => {
        const onChange = jest.fn();
        renderStatefulSelect({ onChange, multi: true });

        act(() => {
          userEvent.click(screen.getByRole('combobox'));
        });
        expect(onChange).toBeCalledTimes(0);

        act(() => {
          userEvent.click(getOptionByLabel('AliceBlue'));
        });
        expect(onChange).toBeCalledTimes(1);
        expect(onChange).toBeCalledWith({
          option: { label: 'AliceBlue', value: '#F0F8FF' },
          type: 'select',
          value: [{ label: 'AliceBlue', value: '#F0F8FF' }],
        });

        act(() => {
          userEvent.click(screen.getByRole('combobox'));
        });
        act(() => {
          userEvent.click(getOptionByLabel('Aqua'));
        });
        expect(onChange).toBeCalledTimes(2);
        expect(onChange).toHaveBeenLastCalledWith({
          option: { label: 'Aqua', value: '#00FFFF' },
          type: 'select',
          value: [
            { label: 'AliceBlue', value: '#F0F8FF' },
            { label: 'Aqua', value: '#00FFFF' },
          ],
        });
      });
      test('on clicking Select All, onChange should be called with type `selectAll`, value should have all the options present.', () => {
        const onChange = jest.fn();
        renderStatefulSelect({ onChange, multi: true });

        act(() => {
          userEvent.click(screen.getByRole('combobox'));
        });
        expect(onChange).toBeCalledTimes(0);

        act(() => {
          userEvent.click(getOptionByLabel('Select All'));
        });
        expect(onChange).toBeCalledTimes(1);
        expect(onChange).toBeCalledWith({
          type: 'selectAll',
          value: OPTIONS,
        });
      });
      test('on clicking clear all button, onChange should be called with type `clear`, value should be empty array.', () => {
        const onChange = jest.fn();
        renderStatefulSelect({ onChange, multi: true });

        act(() => {
          userEvent.click(screen.getByRole('combobox'));
        });
        expect(onChange).toBeCalledTimes(0);

        act(() => {
          userEvent.click(getOptionByLabel('Select All'));
        });
        act(() => {
          userEvent.click(screen.getByRole('button', { name: /clear all/i }));
        });

        expect(onChange).toBeCalledTimes(2);
        expect(onChange).toHaveBeenLastCalledWith({
          type: 'clear',
          value: [],
          option: null,
        });
      });
    });
  });

  describe('duplicate options', () => {
    test('Select should not render options with same ids multiple times.', () => {
      renderBaseSelect({
        options: [...OPTIONS, ...OPTIONS],
        startOpen: true,
        filterOutSelected: false,
      });
      expect(screen.getAllByRole('option').length).toBe(OPTIONS.length);
    });
    test('Select should check duplicate ids b/w createdOptions as well options prop.', async () => {
      const LABEL_1 = 'label_1';
      const LABEL_2 = 'label_2';
      const LABEL_3 = 'label_3';
      const CREATABLE_OPTION = `Create “${LABEL_1}”`;
      const CREAETED_OPTIONS = [
        { value: LABEL_2, label: LABEL_2 },
        { value: LABEL_3, label: LABEL_3 },
      ];

      const createOption = jest.fn((label: string): Options => CREAETED_OPTIONS);

      const { rerender } = renderStatefulSelect({
        creatable: true,
        multi: true,
        createOption,
        filterOutSelected: false,
        closeOnSelect: false,
        options: OPTIONS,
      });

      const selectInput = screen.getByRole('combobox');

      act(() => {
        userEvent.click(selectInput);
      });
      expect(screen.getAllByRole('option').length).toBe(OPTIONS.length + 1); // OPTIONS + Select All

      // create new option
      userEvent.type(selectInput, LABEL_1);
      act(() => {
        userEvent.click(screen.getByText(CREATABLE_OPTION));
      });

      await waitFor(() => {
        expect(screen.getAllByRole('option').length).toBe(OPTIONS.length + 1 + 2);
      }); // OPTIONS + Select All + Created Options

      rerender({ options: [...OPTIONS, ...CREAETED_OPTIONS] });
      expect(screen.getAllByRole('option').length).toBe(OPTIONS.length + 1 + 2); // OPTIONS + Select All + Created Options
    });
  });

  test('When rendered using mountNode, should be able to select options', () => {
    const onChange = jest.fn();
    const { getByText } = renderSelectWithModal({ onChange, startOpen: true });

    const BeigeOptionEl = getByText('Beige');
    BeigeOptionEl.click();

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ value: [OPTIONS[5]] }));
  });

  test('Selected option should not be closeable in multi select when disabled', () => {
    const { queryByText, queryByRole } = render(<BaseSelect multi value={[OPTIONS[2]]} />);

    // checking that a tag should be rendered
    expect(queryByText(OPTIONS[2].label as string)).toBeTruthy();

    // checking that it should not have action button
    expect(queryByRole('presentation')).toBeFalsy();
  });

  describe('width', () => {
    test('sets width of dropdown container', () => {
      renderBaseSelect({
        popoverMinWidth: '100px',
        startOpen: true,
        overrides: { DropdownContainer: { props: { 'data-testid': 'dropdown-container' } } },
      });

      const DropdownContainerCSS = getCSSByTestId('dropdown-container');
      expect(DropdownContainerCSS.minWidth).toBe('100px');
    });
  });

  describe('creatable', () => {
    test('should call onChange with correct arguments', async () => {
      const LABEL = 'label';
      const CREATABLE_OPTION = `Create “${LABEL}”`;
      const onChange = jest.fn();
      const { getByRole, getByText, findByText } = renderStatefulSelect({
        creatable: true,
        onChange,
      });

      const selectInput = getByRole('combobox');

      // create new option
      userEvent.type(selectInput, LABEL);
      userEvent.click(getByText(CREATABLE_OPTION));

      // created option is selected
      expect(await findByText(LABEL)).toBeInTheDocument();
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith(
        expect.objectContaining({
          value: [expect.objectContaining({ value: LABEL, label: LABEL, isCreatable: true })],
          option: expect.objectContaining({ value: LABEL, label: LABEL, isCreatable: true }),
        })
      );
    });

    test('onChange should not be called multiple time when Input Method Editor(IME) is processing key input', async () => {
      const LABEL = 'ㅎㄹ';
      const onChange = jest.fn();
      const { getByRole, findByText } = renderStatefulSelect({
        creatable: true,
        onChange,
      });

      const selectInput = getByRole('combobox');

      // create new option
      userEvent.type(selectInput, LABEL);
      // using fireEvent instead of userEvent since IME fires keyCode 229+Enter event for keyDown event only - https://www.w3.org/TR/uievents/#determine-keydown-keyup-keyCode
      fireEvent.keyDown(selectInput, { key: 'Enter', keyCode: 229, code: 'Enter' });
      userEvent.type(selectInput, '{enter}');

      // created option is selected
      expect(await findByText(LABEL)).toBeInTheDocument();
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toBeCalledWith(
        expect.objectContaining({
          value: [expect.objectContaining({ value: LABEL, label: LABEL, isCreatable: true })],
          option: expect.objectContaining({ value: LABEL, label: LABEL, isCreatable: true }),
        })
      );
    });

    test('should retain created options', async () => {
      const LABEL = 'label';
      const CREATABLE_OPTION = `Create “${LABEL}”`;
      const { getByRole, findByRole, getByText, queryByText } = renderStatefulSelect({
        creatable: true,
      });

      const selectInput = getByRole('combobox');

      // create new option
      userEvent.type(selectInput, LABEL);
      userEvent.click(getByText(CREATABLE_OPTION));

      // clear selected option
      userEvent.click(await findByRole('button'));
      expect(selectInput).toHaveValue('');

      // open dropdown
      userEvent.click(selectInput);

      // created option is already present in dropdown
      expect(queryByText(LABEL)).toBeInTheDocument();
      expect(queryByText(CREATABLE_OPTION)).not.toBeInTheDocument();
    });

    test('Menu should highlight the create "new option" listItem when no options are passed and creatable is true', () => {
      const { getByRole } = renderBaseSelect({ options: [], creatable: true });
      const selectInput = getByRole('combobox');
      const LABEL = 'Check';

      userEvent.type(selectInput, LABEL);

      const listElement = getByRole('option');
      expect(listElement.getAttribute('data-highlighted')).toBe('true');
    });
  });

  describe('createOption', () => {
    test('options should be created as per the options returned by createOption', async () => {
      const LABEL_1 = 'label_1';
      const LABEL_2 = 'label_2';
      const LABEL_3 = 'label_3';
      const CREATABLE_OPTION = `Create “${LABEL_1}”`;

      const createOption = jest.fn(
        (label: string): Options => [
          { value: LABEL_2, label: LABEL_2 },
          { value: LABEL_3, label: LABEL_3 },
        ]
      );

      const { getByRole, getByText, findByText, queryByText } = renderStatefulSelect({
        creatable: true,
        multi: true,
        createOption,
      });

      const selectInput = getByRole('combobox');

      // create new option
      userEvent.type(selectInput, LABEL_1);
      userEvent.click(getByText(CREATABLE_OPTION));

      // options with LABEL_2, LABEL_3 are selected
      expect(await findByText(LABEL_2)).toBeInTheDocument();
      expect(queryByText(LABEL_3)).toBeInTheDocument();
      expect(queryByText(LABEL_1)).not.toBeInTheDocument();
      expect(createOption).toBeCalledTimes(1);
      expect(createOption).toBeCalledWith(LABEL_1);
    });

    test('options should be created once the Promise returned by createOption resolves and onChange function should be called with updated values and option params', async () => {
      const LABEL_1 = 'label_1';
      const CREATABLE_OPTION = `Create “${LABEL_1}”`;

      const onChange = jest.fn();
      const createOption = jest.fn(
        (label: string): Promise<Options> =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve([{ value: label, label }]);
            }, 1000);
          })
      );

      const { getByRole, getByText, findByText } = renderStatefulSelect({
        creatable: true,
        multi: true,
        onChange,
        createOption,
      });

      const selectInput = getByRole('combobox');

      // create new option
      userEvent.type(selectInput, LABEL_1);
      userEvent.click(getByText(CREATABLE_OPTION));

      // options with LABEL_2, LABEL_3 are selected
      expect(await findByText(LABEL_1)).toBeInTheDocument();
      expect(createOption).toBeCalledTimes(1);
      expect(createOption).toBeCalledWith(LABEL_1);

      // check wheather onChange function is called with correct arguments
      expect(onChange).toBeCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          value: [expect.objectContaining({ value: LABEL_1, label: LABEL_1, isCreatable: true })],
          option: { value: LABEL_1, label: LABEL_1, isCreatable: true },
        })
      );
    });
  });

  describe('onPaste', () => {
    test("options returned by onPaste handler get selected when the user pastes content in select's input", () => {
      const OPTION_1 = 'option_1';
      const OPTION_2 = 'option_2';
      const PASTED_CONTENT = `${OPTION_1},${OPTION_2}`;
      const onPaste = jest.fn((e: React.ClipboardEvent): Options => {
        const clipboardText = e.clipboardData.getData('text/plain');
        const commaSeparatedValues = clipboardText.split(',').map(label => ({ value: label, label }));
        e.preventDefault();

        return commaSeparatedValues;
      });
      const { getByRole, queryByText } = renderStatefulSelect({
        multi: true,
        onPaste,
      });

      const selectInput = getByRole('combobox');

      // paste content
      userEvent.paste(selectInput, PASTED_CONTENT, {
        //@ts-ignore
        clipboardData: {
          getData: () => PASTED_CONTENT,
        },
      });

      // options created by onPaste are selected
      expect(queryByText(OPTION_1)).toBeInTheDocument();
      expect(queryByText(OPTION_2)).toBeInTheDocument();
      expect(onPaste).toBeCalledTimes(1);
      expect(onPaste).toReturnWith([
        expect.objectContaining({ value: OPTION_1, label: OPTION_1 }),
        expect.objectContaining({ value: OPTION_2, label: OPTION_2 }),
      ]);
    });
  });
  describe('clearAsOption', () => {
    test('when clearAsOption set, additional clear option should be rendered', () => {
      const onChange = jest.fn();
      const { getByRole, getByText, queryByText } = renderStatefulSelect({
        onChange,
        clearAsOption: true,
      });

      const selectInput = getByRole('combobox');

      userEvent.click(selectInput);
      //when no value is selected, clear option should not be rendered
      expect(queryByText('Unassign')).not.toBeInTheDocument();

      //select a value
      userEvent.click(getByText('AliceBlue'));
      expect(onChange).toHaveBeenCalledWith({
        type: 'select',
        value: [{ label: 'AliceBlue', value: '#F0F8FF' }],
        option: { label: 'AliceBlue', value: '#F0F8FF' },
      });

      userEvent.click(selectInput);
      //clear option should be rendered when a value is selected
      expect(getByText('Unassign')).toBeInTheDocument();

      //clicking on clear option should remove the selected valueq
      userEvent.click(getByText('Unassign'));
      expect(onChange).toHaveBeenCalledWith({
        type: 'clear',
        value: [],
        option: null,
      });
    });
  });
});
