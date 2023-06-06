import { ButtonGroup } from 'spaceweb/button-group';
import { Button } from 'spaceweb/button';
import { SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const ButtonGroupConfig: YardConfig = {
  componentName: 'ButtonGroup',
  imports: {
    'spaceweb/button-group': {
      named: ['ButtonGroup'],
    },
  },
  scope: {
    Button,
    ButtonGroup,
  },
  theme: [],
  props: {
    variant: {
      value: 'secondary',
      description: 'Variant provided to Buttons. This prop is directly passed to the children.',
      options: ['primary', 'secondary', 'tertiary', 'minimal'],
      type: PropTypes.FixedString,
    },
    children: {
      value: '<Button>One</Button>\n<Button>Two</Button>\n<Button>Three</Button>',
      type: PropTypes.ReactNode,
      description: 'Buttons within the group',
      imports: {
        'spaceweb/button': {
          named: ['Button'],
        },
      },
    },
    className: {
      value: undefined,
      type: PropTypes.String,
      description: 'Enriched style to be provided to ButtonGroup',
    },
    style: {
      value: undefined,
      type: PropTypes.String,
      description: 'Enriched style to be provided to ButtonGroup',
    },
    // intent: {
    //   value: 'default',
    //   options: ['default', 'success', 'warning', 'error'],
    //   type: PropTypes.FixedString,
    //   description: 'Defines the intent of the ButtonGroup.',
    // },
    size: {
      value: undefined,
      options: ['xs', 'sm', 'md'],
      type: PropTypes.FixedString,
      description: 'Defines the size of each of the button in ButtonGroup',
    },
    onClick: {
      value: '(event, index) => {\n  setSelected([index]);\n}',
      type: PropTypes.Function,
      description: 'Function called when any button is clicked.',
      propHook: {
        what: '`[${index}]`',
        into: 'selected',
      },
    },
    shape: {
      value: 'default',
      options: ['default', 'square', 'pill'],
      type: PropTypes.FixedString,
      description:
        'Supported with space theme only. Defines the shape of the button. This prop is directly passed to the children.',
      hidden: true,
    },
    selected: {
      value: '[0]',
      type: PropTypes.Array,
      description: 'Defines which buttons are selected',
      stateful: true,
    },
    disabled: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Indicates that the button group is disabled',
    },
    activateOnFocus: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Indicates when focusing/navigating using arrow keys, button should also be selected.',
      defaultValue: false,
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root'],
        sharedProps: {},
      },
    },
  },
  // mapTokensToProps: {
  //   ButtonGroup: buttonGroupProps,
  //   Button: buttonProps,
  // },
};

export default ButtonGroupConfig;
