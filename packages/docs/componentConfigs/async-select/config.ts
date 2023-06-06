import pick from 'lodash/pick';
import { getCharacter } from 'rickmortyapi';

import { AsyncSelect } from 'spaceweb/asyncSelect';
import { Button } from 'spaceweb/button';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import { chevronStyles } from 'spaceweb/helpers/commonStyles';

import { changeHandlers, SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

import SelectConfig from '../select/config';

const AsyncSelectConfig: YardConfig = {
  componentName: 'AsyncSelect',
  imports: {
    'spaceweb/asyncSelect': {
      named: ['AsyncSelect'],
    },
  },
  scope: {
    AsyncSelect,
    Button,
    ChevronDown,
    getCharacter,
    chevronStyles,
  },
  theme: [],
  props: {
    loadOptions: {
      value: `(inputText, pageNumber) => getCharacter({
      name: inputText,
      page: pageNumber + 1,
    }).then(data => {
      const { info, results, error } = data;

      if (error) {
        throw error;
      }

      return {
        options: results.map(opt => ({ id: opt.id, label: opt.name })),
        complete: !info.next,
      };
    })`,
      type: PropTypes.Function,
      description: 'Function for fetching options asynchronously.',
      imports: {
        rickmortyapi: {
          named: ['getCharacter'],
        },
      },
    },
    searchingText: {
      value: 'Searching characters...',
      type: PropTypes.String,
      description: 'Text to show in dropdown while the options are loading.',
    },
    minimumInput: {
      value: '0',
      type: PropTypes.Number,
      description: 'Minimum number of characters that trigger loadOptions.',
    },
    labelKey: {
      value: undefined,
      type: PropTypes.String,
      description: 'Defines an option key name for a default label value.',
      placeholder: 'string',
    },
    valueKey: {
      value: undefined,
      type: PropTypes.String,
      description: `Defines a key name for an option's unique identifier value.
        The value of the 'valueKey' prop is used to identify what options are selected
        or removed from the selection, it also used for default filtering out the
        selected options from the dropdown list.`,
      placeholder: 'string',
    },
    filterOptions: {
      value: undefined,
      type: PropTypes.Function,
      description: 'A custom method to filter options to be displayed in the dropdown.',
      placeholder: '(options) => options',
    },
    autoFocus: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Defines if select element is focused on the first mount.',
    },
    onBlurResetsInput: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the input value is reset to an empty string when a blur event happens on the select.',
    },
    onCloseResetsInput: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the input value is reset to an empty string when dropdown is closed.',
    },
    onSelectResetsInput: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the input value is reset to an empty string when a selection is made.',
    },
    filterOutSelected: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description:
        'Defines if currently selected options are filtered out in the dropdown options. Only for `multi` select.',
    },
    captureScroll: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'When the user reaches top/bottom of the menu, prevents scroll to the body/scroll-parent',
    },
    virtual: {
      value: true,
      defaultValue: true,
      type: PropTypes.Boolean,
      description: 'Add virtualization to select options',
    },
    searchable: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the search functionality is enabled.',
    },
    openOnClick: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the dropdown opens on a click event on the select.',
      hidden: true,
    },
    escapeClearsValue: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the value is cleared when escape is pressed and the dropdown is closed.',
      hidden: true,
    },
    backspaceRemoves: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if options can be removed by pressing backspace.',
      hidden: true,
    },
    clearable: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the select value can be cleared. If true a clear icon is rendered when a value is set.',
      hidden: true,
    },
    closeOnSelect: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the menu closes after a selection if made.',
      hidden: true,
    },
    deleteRemoves: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if options can be removed by pressing backspace.',
      hidden: true,
    },
    moveSelectedOptionsToTop: {
      value: false,
      type: PropTypes.Boolean,
      defaultValue: false,
      description: 'Defines if selected options should be moved to the top of options list.',
    },
    className: {
      value: undefined,
      type: PropTypes.String,
      description: 'Enriched style to be provided to Select Root',
    },
    style: {
      value: undefined,
      type: PropTypes.String,
      description: 'Enriched style to be provided to Select Root',
    },
    overlayWidth: {
      value: undefined,
      type: PropTypes.String,
      description: "Sets width of select when type is 'overlay'. Default is '300px'.",
      placeholder: 'string',
      hidden: true,
    },
    maxDropdownHeight: {
      value: undefined,
      type: PropTypes.String,
      description: 'Sets max height of the dropdown list.',
      placeholder: 'string',
      hidden: true,
    },
    paginationBuffer: {
      value: 50,
      type: PropTypes.Number,
      description:
        'Maximum distance (in pixels) from the bottom of the dropdown that triggers the fetch of next page of options.',
      hidden: true,
    },
    debounceInterval: {
      value: 200,
      type: PropTypes.Number,
      description: 'Number of milliseconds to delay the invocation of input handler.',
      hidden: true,
    },
    id: {
      value: undefined,
      type: PropTypes.String,
      description: 'Sets the id attribute of the internal input element. Allows for usage with labels.',
      placeholder: 'string',
      hidden: true,
    },
    mountNode: {
      value: undefined,
      type: PropTypes.Ref,
      description: 'Where to mount the popover.',
      hidden: true,
    },
    controlRef: {
      value: undefined,
      type: PropTypes.Ref,
      description:
        "Exposes methods to control select's dropdown and other internal state. Check types and examples for more information.",
      hidden: true,
    },
    inputRef: {
      value: undefined,
      type: PropTypes.Ref,
      description: 'A ref to access an input element.',
      hidden: true,
    },
    value: {
      value: '[]',
      type: PropTypes.Array,
      description: `A current selected value(s). If a selected value has a clearableValue
        prop set to true it will be rendered as a disabled selected option that can't be cleared.`,
      stateful: true,
    },
    initialOptions: {
      value: '[]',
      type: PropTypes.Array,
      description: 'Initial set of static options',
    },
    resolveValuesOnUpdate: {
      value: undefined,
      defaultValue: undefined,
      type: PropTypes.Boolean,
      description:
        'If true, asyncSelect will calculate unresolvedValues whenever value changes and invokes resolveSelectedOptions.',
    },
    resolveSelectedOptions: {
      value: undefined,
      type: PropTypes.Function,
      description:
        'Function for fetching options corresponding to the unresolved value keys. It is invoked on mount depending on the presence of unresolved values.',
    },
    hideUnresolvedValues: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Unresolved values will not be visible in multi-select.',
    },
    getOptionLabel: {
      value: undefined,
      type: PropTypes.Function,
      description: 'A custom method to get a display value for a dropdown option.',
      placeholder: '({option}) => option.label',
      hidden: true,
    },
    getValueLabel: {
      value: undefined,
      type: PropTypes.Function,
      description: 'A custom method to get a display value for a selected option.',
      placeholder: '({option}) => option.label',
      hidden: true,
    },
    listenAllInputChanges: {
      value: true,
      defaultValue: true,
      type: PropTypes.Boolean,
      description: 'Defines if AsyncSelect should listen to all the changes in values for input.',
    },
    type: {
      value: 'select',
      options: ['search', 'select', 'overlay'],
      type: PropTypes.FixedString,
      description: `Defines type of the component to be in a select or search mode.
        When set to 'search' the search icon is rendered on the left and the select arrow icon is not rendered.
        When set to 'overlay' the select is rendered in overlay.`,
    },
    clearAsOption: {
      value: false,
      type: PropTypes.Boolean,
      defaultValue: false,
      description: 'Add option to clear selected value in the popover instead of clearable icon.',
    },
    clearAsOptionLabel: {
      value: undefined,
      type: PropTypes.String,
      defaultValue: 'Unassign',
      description: 'Defines the label for the option which clears the selected values.',
    },
    selectOnTab: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'When enabled allows to click on/select highlighted item on Tab key press.',
    },
    creatable: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Defines if new options can be created along with choosing existing options.',
    },
    intent: {
      value: 'default',
      options: ['default', 'success', 'warning', 'error'],
      type: PropTypes.FixedString,
      description: 'Defines the intent of the Select.',
    },
    multi: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Defines if multiple options can be selected.',
    },
    required: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Defines if the select field is required to have a selection.',
    },
    disabled: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Defines if the control is disabled.',
    },
    loadOnFocus: {
      value: false,
      type: PropTypes.Boolean,
      description:
        'Whether to fetch options on focus. For Overlay select, options will load when search input inside overlay gets focused.',
    },
    loadOnMount: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Whether to fetch options on mount.',
    },
    placeholder: {
      value: 'Select character',
      type: PropTypes.String,
      description: 'Sets the placeholder.',
    },
    noResultsMsg: {
      value: undefined,
      type: PropTypes.ReactNode,
      description: 'Message to be displayed if no options is found for a search query.',
    },
    startOpen: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'If true, opens the dropdown when the select mounts.',
    },
    onChange: {
      value: '(params) => setValue(params.valueKeys)',
      type: PropTypes.Function,
      description: 'Change handler of the select to be called when a value is changed.',
      propHook: {
        what: 'JSON.stringify(params.valueKeys)',
        into: 'value',
      },
      placeholder: '({value, option, type, valueKeys}) => value',
    },
    onInputChange: {
      value: undefined,
      type: PropTypes.Function,
      description: 'Change handler of the search input.',
      placeholder: '(event) => {}',
    },
    ...pick(SelectConfig.props, ['placement', 'popoverMinWidth', 'createOption', 'onPaste']),
    ...pick(changeHandlers, ['onBlur', 'onFocus']),
    onOpen: {
      value: undefined,
      type: PropTypes.Function,
      description: 'A function that is called when the dropdown opens.',
      placeholder: '() => {}',
      hidden: true,
    },
    onClose: {
      value: undefined,
      type: PropTypes.Function,
      description: 'A function that is called when the dropdown closes.',
      placeholder: '() => {}',
      hidden: true,
    },
    'aria-label': {
      value: undefined,
      type: PropTypes.String,
      description: 'Sets the aria-label attribute.',
      placeholder: 'string',
      hidden: true,
    },
    'aria-describedby': {
      value: undefined,
      type: PropTypes.String,
      description: 'Sets the aria-describedby attribute.',
      placeholder: 'string',
      hidden: true,
    },
    'aria-labelledby': {
      value: undefined,
      type: PropTypes.String,
      description: 'Sets the aria-describedby attribute.',
      placeholder: 'string',
      hidden: true,
    },
    children: {
      value: `
{({ isOpen }) => (
  <Button endEnhancer={<ChevronDown size={10} $isOpen={isOpen} style={chevronStyles} />} variant="secondary">
    {value[0]?.label || 'Select Character'}
  </Button>
)}
`,
      type: PropTypes.ReactNode,
      description: `When type is 'overlay', Select is opened in overlay and children works as target element for the popover. 
        For all other types, children is simply ignored.`,
      imports: {
        'spaceweb/button': {
          named: ['Button'],
        },
        'spaceweb/icon/chevron-down': {
          default: 'ChevronDown',
        },
      },
      hidden: true,
    },
    ...pick(SelectConfig.props, 'overrides'),
  },
};

export default AsyncSelectConfig;
