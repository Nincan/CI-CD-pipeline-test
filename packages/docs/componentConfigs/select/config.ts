import pick from 'lodash/pick';
import { Select } from 'spaceweb/select';
import { Button } from 'spaceweb/button';
import ChevronDown from 'spaceweb-icons/line/ChevronDown';
import { chevronStyles } from 'spaceweb/helpers/commonStyles';
import { changeHandlers, SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

import MenuConfig from '../menu/config';
import MenuItemConfig from '../menu/menu-item-config';
import TagConfig from '../tag/config';
import PopoverConfig from '../popover/config';
import { inputProps } from '../input/config';

const MultiValueConfig: YardConfig = {
  componentName: 'MultiValue',
  imports: {},
  scope: {},
  theme: [],
  props: {
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [{ ...TagConfig, componentName: 'Tag' }],
      },
    },
  },
};

const SelectConfig: YardConfig = {
  componentName: 'Select',
  imports: {
    'spaceweb/select': {
      named: ['Select'],
    },
  },
  scope: {
    Select,
    Button,
    ChevronDown,
    chevronStyles,
    // SIZE,
  },
  theme: [],
  props: {
    autoFocus: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Defines if select element is focused on the first mount.',
    },
    backspaceRemoves: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if options can be removed by pressing backspace.',
    },
    backspaceClearsInputValue: {
      value: false,
      type: PropTypes.Boolean,
      defaultValue: false,
      description:
        'By default, backspace will only remove the last character of the input value. If true, the input value will be cleared.',
    },
    clearable: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the select value can be cleared. If true a clear icon is rendered when a value is set.',
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
    closeOnSelect: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the menu closes after a selection if made.',
    },
    creatable: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Defines if new options can be created along with choosing existing options.',
    },
    deleteRemoves: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if options can be removed by pressing backspace.',
    },
    disabled: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Defines if the control is disabled.',
    },
    escapeClearsValue: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the value is cleared when escape is pressed and the dropdown is closed.',
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
    children: {
      value: `
{({ isOpen }) => (
  <Button endEnhancer={<ChevronDown size={10} $isOpen={isOpen} style={chevronStyles} />} variant="secondary">
    {value[0]?.id || 'Select Color'}
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
        'spaceweb-icons/line/ChevronDown': {
          default: 'ChevronDown',
        },
      },
    },
    intent: {
      value: 'default',
      options: ['default', 'success', 'warning', 'error'],
      type: PropTypes.FixedString,
      description: 'Defines the intent of the Select.',
    },
    size: inputProps.size,
    options: {
      value: `[
  {label: 'AliceBlue', id: '#F0F8FF'},
  {label: 'AntiqueWhite', id: '#FAEBD7'},
  {label: 'Aqua', id: '#00FFFF'},
  {label: 'Aquamarine', id: '#7FFFD4'},
  {label: 'Beige', id: '#F5F5DC'},
]`,
      type: PropTypes.Array,
      description: `Options to be displayed in the dropdown.
        If an option has a disabled prop value set to true it will be rendered as a disabled option in the dropdown.`,
    },
    value: {
      value: '[]',
      type: PropTypes.Array,
      description: `A current selected value(s). If a selected value has a clearableValue
        prop set to false it will be rendered as a disabled selected option that can't be cleared.`,
      stateful: true,
    },
    getOptionLabel: {
      value: undefined,
      type: PropTypes.Function,
      description: 'A custom method to get a display value for a dropdown option.',
      placeholder: '({option}) => option.label',
    },
    getValueLabel: {
      value: undefined,
      type: PropTypes.Function,
      description: 'A custom method to get a display value for a selected option.',
      placeholder: '({option}) => option.label',
    },
    delimiter: {
      value: undefined,
      type: PropTypes.String,
      description:
        'If defined, select will create option and call onChange whenever delimeter is encountered when input changes.',
      placeholder: ',',
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
    filterOutSelected: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description:
        'Defines if currently selected options are filtered out in the dropdown options. Only for `multi` select.',
    },
    isLoading: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Defines if the select is in a loading (async) state.',
    },
    multi: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Defines if multiple options can be selected.',
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
    openOnClick: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the dropdown opens on a click event on the select.',
    },
    required: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'Defines if the select field is required to have a selection.',
    },
    searchable: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Defines if the search functionality is enabled.',
    },
    startOpen: {
      value: undefined,
      type: PropTypes.Boolean,
      description: 'If true, opens the dropdown when the select mounts.',
    },
    ignoreBoundary: {
      value: undefined,
      type: PropTypes.Boolean,
      description: "If true, popover element will overflow outside anchor's scrollParent.",
    },
    type: {
      value: 'select',
      options: ['search', 'select', 'overlay', 'mobile'],
      type: PropTypes.FixedString,
      description: `Defines type of the component to be in a select or search mode.
        When set to 'search' the search icon is rendered on the left and the select arrow icon is not rendered.
        When set to 'overlay' the select is rendered in overlay.`,
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
    placeholder: {
      value: 'Select color',
      type: PropTypes.String,
      description: 'Sets the placeholder.',
    },
    onChange: {
      value: '(params) => setValue(params.value)',
      type: PropTypes.Function,
      description: 'Change handler of the select to be called when a value is changed.',
      propHook: {
        what: 'JSON.stringify(params.value)',
        into: 'value',
      },
      placeholder: '({value, option, type}) => value',
    },
    filterOptions: {
      value: undefined,
      type: PropTypes.Function,
      description: 'A custom method to filter options to be displayed in the dropdown.',
      placeholder: '(options) => options',
    },
    popoverMinWidth: {
      value: undefined,
      type: PropTypes.String,
      description: 'Sets the minWidth of the dropdown container.',
      placeholder: '200px',
    },
    placement: {
      value: undefined,
      type: PropTypes.FixedString,
      description: 'Controls how to position the dropdown relative to the select. Defaults to `bottom`',
      options: [
        'auto',
        'topLeft',
        'top',
        'topRight',
        'rightTop',
        'right',
        'rightBottom',
        'bottomRight',
        'bottom',
        'bottomLeft',
        'leftTop',
        'left',
        'leftBottom',
      ],
    },
    ...pick(changeHandlers, ['onBlur', 'onFocus']),
    onInputChange: {
      value: undefined,
      type: PropTypes.Function,
      description: 'Change handler of the search input.',
      placeholder: '(event) => {}',
    },
    onOpen: {
      value: undefined,
      type: PropTypes.Function,
      description: 'A function that is called when the dropdown opens.',
      placeholder: '() => {}',
    },
    onClose: {
      value: undefined,
      type: PropTypes.Function,
      description: 'A function that is called when the dropdown closes.',
      placeholder: '() => {}',
    },
    onPaste: {
      value: undefined,
      type: PropTypes.Function,
      description:
        "A function that is called when a paste event occurs on the select's input. " +
        'It receives a single argument of the clipboard event and expects options to be returned.',
      placeholder: '(e: ClipboardEvent) => options',
    },
    createOption: {
      value: undefined,
      type: PropTypes.Function,
      description:
        'A custom handler that returns options to be created from the input value (label) entered by the user. ' +
        'It should return Options or Promise<Options>.',
      placeholder: '(label: string) => options',
    },
    hideSelectAll: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Hides select all option for multi select box.',
      hidden: true,
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
    label: {
      value: undefined,
      type: PropTypes.ReactNode,
      description: "Sets label of Select when type is 'mobile'",
      hidden: true,
    },
    noResultsMsg: {
      value: undefined,
      type: PropTypes.ReactNode,
      description: 'Message to be displayed if no options is found for a search query.',
      hidden: true,
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          'Root',
          'ControlContainer',
          'Placeholder',
          'ValueContainer',
          'SingleValue',
          { ...MultiValueConfig, componentName: 'MultiValue' },
          'InputContainer',
          'Input',
          'IconsContainer',
          'SelectArrow',
          'ClearIcon',
          'LoadingIndicator',
          'SearchIconContainer',
          'SearchIcon',
          { ...PopoverConfig, componentName: 'Popover' },
          'DropdownContainer',
          'OptionContent',
          { ...MenuConfig, componentName: 'Menu' },
          { ...MenuItemConfig, componentName: 'MenuItem' },
          'ListItemText',
          'NoResults',
          'Divider',
        ],
        sharedProps: {
          $clearable: 'clearable',
          $creatable: 'creatable',
          $disabled: 'disabled',
          $error: 'error',
          $isFocused: {
            type: PropTypes.Boolean,
            description: "Indicates the control's current focus state.",
          },
          $isHighlighted: {
            type: PropTypes.Boolean,
            description: "Prop passed to an option indicating it's currently highlighted.",
          },
          $isLoading: 'isLoading',
          $isOpen: {
            type: PropTypes.Boolean,
            description: "Indicates if the select's dropdown is currently opened.",
          },
          $isPseudoFocused: {
            type: PropTypes.Boolean,
            description: "Indicates the select's current focus state.",
          },
          $maxHeight: 'maxDropdownHeight',
          $multi: 'multi',
          $positive: 'positive',
          $required: 'required',
          $searchable: 'searchable',
          $selected: {
            type: PropTypes.Boolean,
            description: "Prop passed to an option indicating it's currently selected.",
          },
          $size: 'size',
          $type: 'type',
        },
      },
    },
  },
};

export default SelectConfig;
