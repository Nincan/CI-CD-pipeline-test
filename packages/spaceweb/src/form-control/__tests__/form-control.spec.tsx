import { render, RenderResult, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { FormControl } from '../form-control';
import { Input, StatefulInput } from '../../input';
import { FormControlProps } from '../types';

import { TestProvider, getCSSByTestId, getTestStyleUtils, getCSSFromEl } from '../../test-utils/test-provider';
import { Select, StatefulSelect } from '../../select';
import { DatePicker } from '../../date-picker';
import { Checkbox, StatefulCheckbox } from '../../checkbox';
import { StatefulTextarea, Textarea } from '../../textarea';
import { Tag } from '../../tag';
import { Avatar } from '../../avatar';
import { Radio, RadioGroup } from '../../radio';
import { hex2rgb } from '../../helpers';
import BaseSelect from '../../select/base-select';

const OPTIONS = [
  {
    label: 'AliceBlue',
    id: '#F0F8FF',
  },
  {
    label: 'AntiqueWhite',
    id: '#FAEBD7',
  },
  {
    label: 'Aqua',
    id: '#00FFFF',
  },
  {
    label: 'Aquamarine',
    id: '#7FFFD4',
  },
  {
    label: 'Beige',
    id: '#F5F5DC',
  },
];

const setup = (props?: Omit<FormControlProps, 'children'>): RenderResult =>
  render(
    <TestProvider>
      <FormControl label="Label" {...props}>
        <StatefulInput />
      </FormControl>
    </TestProvider>
  );
const { theme } = getTestStyleUtils();
describe('FormControl', function () {
  afterEach(cleanup);
  describe('required dot', function () {
    afterEach(cleanup);
    test('visible when required', () => {
      const { getByTestId } = setup({ required: true });
      getByTestId('form-required'); // throws error if no element is found
    });
    test('not visible when not required', () => {
      const { queryByTestId } = setup();
      expect(queryByTestId('form-required')).toBeNull();
    });
  });
  describe('overrides', function () {
    test('label', () => {
      const { getByText } = setup({ overrides: { Label: { style: { color: 'red' } } } });
      const label = getByText('Label');
      const style = window.getComputedStyle(label);

      expect(style.color).toBe('red');
    });
  });
  describe('horizontal layout', () => {
    afterEach(cleanup);
    test('root', () => {
      setup({ layout: 'horizontal' });
      const css = getCSSByTestId('form-control');
      expect(css.display).toBe('flex');
      expect(css.flexDirection).toBe('row');
    });
    test('label', () => {
      setup({ layout: 'horizontal' });
      const css = getCSSByTestId('form-control-label-container');
      const { theme } = getTestStyleUtils();
      expect(css.width).toBe('16.666667%');
      expect(css.marginRight).toBe(theme.margin['2']);
    });
  });
  describe('vertical layout', () => {
    afterEach(cleanup);
    test('root', () => {
      setup({ layout: 'vertical' });
      const css = getCSSByTestId('form-control');
      expect(css.display).toBe('flex');
      expect(css.flexDirection).toBe('column');
    });
    test('label', () => {
      setup({ layout: 'vertical' });
      const css = getCSSByTestId('form-control-label-container');
      const { theme } = getTestStyleUtils();
      expect(css.width).toBe('100%');
    });
  });
  describe('Intent test', () => {
    test('Base input', () => {
      const { container } = render(
        <TestProvider>
          <FormControl intent="error">
            <Input />
          </FormControl>
        </TestProvider>
      );

      const inputContainer = container.querySelector('[data-baseweb="base-input"]') as HTMLDivElement;
      const inputContainerCSS = getCSSFromEl(inputContainer);
      expect(inputContainerCSS.borderTopColor).toBe(theme.spr.supportError);
      expect(inputContainerCSS.borderBottomColor).toBe(theme.spr.supportError);
      expect(inputContainerCSS.borderRightColor).toBe(theme.spr.supportError);
      expect(inputContainerCSS.borderLeftColor).toBe(theme.spr.supportError);
    });
    test('Radio', () => {
      const { container } = render(
        <TestProvider>
          <FormControl intent="error">
            <RadioGroup>
              <Radio value="red">Red</Radio>
              <Radio value="green">Green</Radio>
              <Radio value="blue">Blue</Radio>
            </RadioGroup>
          </FormControl>
        </TestProvider>
      );
      const { theme } = getTestStyleUtils();
      const radios = container.querySelectorAll('[data-baseweb="radio"]');
      radios.forEach((radio, index) => {
        const RadioMarkOuterCSS = getCSSFromEl(radio.firstChild);
        expect(RadioMarkOuterCSS.borderColor).toBe(theme.spr.supportError.toLowerCase());
      });
    });
    test('Checkbox', () => {
      const { container } = render(
        <TestProvider>
          <FormControl intent="error">
            <Checkbox checked />
          </FormControl>
        </TestProvider>
      );
      const Checkmark = container.querySelector('span');
      const CheckmarkCSS = getCSSFromEl(Checkmark);

      expect(CheckmarkCSS.backgroundColor).toEqual(hex2rgb(theme.spr.supportError));
    });
    test('Textarea', () => {
      const { container } = render(
        <TestProvider>
          <FormControl intent="error">
            <Textarea data-testid="textarea" />
          </FormControl>
        </TestProvider>
      );

      const textareaElement = container.querySelector('[data-baseweb="base-input"]') as HTMLTextAreaElement;
      const textareaCSS = getCSSFromEl(textareaElement);
      expect(textareaCSS.borderTopColor).toBe(theme.spr.supportError);
      expect(textareaCSS.borderBottomColor).toBe(theme.spr.supportError);
      expect(textareaCSS.borderRightColor).toBe(theme.spr.supportError);
      expect(textareaCSS.borderLeftColor).toBe(theme.spr.supportError);
    });
    test('Select', () => {
      const { container, getByRole } = render(
        <TestProvider>
          <FormControl intent="error">
            <Select options={OPTIONS} />
          </FormControl>
        </TestProvider>
      );
      const selectContainer = container.querySelector('[data-baseweb="select"]') as HTMLDivElement;
      const select = selectContainer.children[0];
      const selectInputCss = getCSSFromEl(select);

      expect(selectInputCss.borderTopColor).toBe(theme.spr.supportError);
      expect(selectInputCss.borderBottomColor).toBe(theme.spr.supportError);
      expect(selectInputCss.borderRightColor).toBe(theme.spr.supportError);
      expect(selectInputCss.borderLeftColor).toBe(theme.spr.supportError);
    });
    test('Date Picker', () => {
      const { container } = render(
        <TestProvider>
          <FormControl intent="error">
            <DatePicker overrides={{ CalendarContainer: { props: { 'data-testid': 'calendar' } } }} />
          </FormControl>
        </TestProvider>
      );

      const dateInputContainer = container.querySelector('[data-baseweb="base-input"]') as HTMLDivElement;
      const dateInputContainerCSS = getCSSFromEl(dateInputContainer);
      expect(dateInputContainerCSS.borderTopColor).toBe(theme.spr.supportError);
      expect(dateInputContainerCSS.borderBottomColor).toBe(theme.spr.supportError);
      expect(dateInputContainerCSS.borderRightColor).toBe(theme.spr.supportError);
      expect(dateInputContainerCSS.borderLeftColor).toBe(theme.spr.supportError);
    });
  });
});
