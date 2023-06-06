import pick from 'lodash/pick';
import { PhoneInput, COUNTRIES } from 'spaceweb/phone-input';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

import SelectConfig from '../select/config';
import InputConfig, { inputProps } from '../input/config';
import ButtonConfig from '../button/config';

const countriesEnum: { [key: string]: string } = {};
Object.values(COUNTRIES).forEach(country => {
  countriesEnum[country.id] = country.label;
});

const PhoneInputConfig: YardConfig = {
  componentName: 'PhoneInput',
  imports: {
    'spaceweb/phone-input': {
      named: ['PhoneInput'],
    },
  },
  scope: {
    PhoneInput,
    COUNTRIES,
  },
  theme: [],
  props: {
    value: {
      value: undefined,
      type: PropTypes.Object,
      description: 'Object which comprises the country set and phoneNumber entered.',
      stateful: true,
      imports: {
        'spaceweb/phone-input': {
          named: ['COUNTRIES'],
        },
      },
    },
    onChange: {
      value: '({country, phoneNumber}) => {\n  setValue({country, phoneNumber});\n}',
      type: PropTypes.Function,
      description: 'Called when value is changed.',
      propHook: {
        what: '`{\n  country: COUNTRIES.${country.id},\n  phoneNumber: "${phoneNumber}"\n}`',
        into: 'value',
      },
    },
    onInputChange: {
      value: undefined,
      placeholder: 'e => { console.log(e); }',
      type: PropTypes.Function,
      description: 'Called when input value is changed.',
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Renders component in disabled state.',
    },
    intent: {
      value: 'default',
      options: ['default', 'success', 'warning', 'error'],
      type: PropTypes.FixedString,
      description: 'Defines the intent of the Input.',
    },
    countries: {
      value: undefined,
      type: PropTypes.Array,
      description: 'By default all countries will be visible in dropdown. Provide Country[] to selectively display countries.',
    },
    size: inputProps.size,
    variant: {
      value: 'default',
      type: PropTypes.FixedString,
      description: "Input's variant - default, line",
      options: ['default', 'line'],
    },
    ...pick(InputConfig.props, ['autoFocus']),
    maxDropdownHeight: {
      value: undefined,
      type: PropTypes.String,
      description: 'Sets the max height of the country select dropdown.',
      hidden: true,
    },
    maxDropdownWidth: {
      value: undefined,
      type: PropTypes.String,
      description: 'Sets the max width of the country select dropdown.',
      hidden: true,
    },
    mapIsoToLabel: {
      value: undefined,
      type: PropTypes.Function,
      description:
        'Function for mapping ISO codes to country names. Useful for localization of the country select dropdown.',
      hidden: true,
    },
    id: {
      value: undefined,
      type: PropTypes.String,
      description: "Id attribute value to be added to the input element and as a label's for attribute value.",
      hidden: true,
    },
    placeholder: {
      value: '',
      type: PropTypes.String,
      description: "Input's placeholder.",
    },
    clearable: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Adds clear icon to the input.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          { ...SelectConfig, componentName: 'CountrySelect' },
          'CountrySelectContainer',
          'DialCode',
          { ...ButtonConfig, componentName: 'FlagContainer' },
          InputConfig,
        ],
        sharedProps: {},
      },
    },
  },
};

export default PhoneInputConfig;
