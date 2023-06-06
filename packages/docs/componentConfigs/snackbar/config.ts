import { Snackbar } from 'spaceweb/snackbar';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

const SnackbarConfig: YardConfig = {
  componentName: 'Snackbar',
  imports: {
    'spaceweb/snackbar': { named: ['Snackbar'] },
  },
  scope: {
    Snackbar,
  },
  theme: [],
  props: {
    intent: {
      value: 'success',
      defaultValue: 'success',
      type: PropTypes.FixedString,
      options: ['success', 'error', 'warning'],
      description: 'Intent of the snackbar. Default autoHideDuration will be different for different intent.',
    },
    message: {
      value: "'Snackbar Message'",
      type: PropTypes.ReactNode,
      description: 'Message to be displayed in Snackbar.',
    },
    disableManualClose: {
      value: false,
      type: PropTypes.Boolean,
      defaultValue: false,
      description: 'If true, close icon will not be visible.',
    },
    hideOnClickAway: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'If false, snackbar will not close on clicking away.',
    },
    autoHide: {
      value: true,
      type: PropTypes.Boolean,
      defaultValue: true,
      description: 'Hides Snackbar after `autoHideDuration`.',
    },
    autoHideDuration: {
      value: undefined,
      type: PropTypes.Number,
      description:
        'Duration(in ms) after which the Snackbar should autoHide itself. If `autoHide` is false, value will be ignored.',
    },
    placement: {
      value: undefined,
      type: PropTypes.FixedString,
      description: 'Placement of the Snackbar.',
      defaultValue: 'bottom',
      options: ['topLeft', 'top', 'topRight', 'bottomLeft', 'bottom', 'bottomRight'],
    },
    onClose: {
      value: 'console.log',
      type: PropTypes.Function,
      description: 'Called when Snackbar closes.',
      placeholder: '(reason) => {}',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          'Layer',
          'PlacementContainer',
          'SnackbarContainer',
          'ContentContainer',
          'Message',
          'CloseIcon',
          'CloseIconButton',
          'IconsContainer',
          'IntentIcon',
          'SnackbarIcon',
        ],
        sharedProps: {
          $isFocused: {
            type: PropTypes.Boolean,
            description: 'True when the component is focused.',
          },
          $isHovered: {
            type: PropTypes.Boolean,
            description: 'True when the component is hovered.',
          },
          $isActive: {
            type: PropTypes.Boolean,
            description: 'True when the component is active.',
          },
          $isError: 'isError',
          $checked: {
            type: PropTypes.Boolean,
            description: 'True when the component is active.',
          },
          $required: 'required',
          $disabled: 'disabled',
        },
      },
    },
  },
};

export default SnackbarConfig;
