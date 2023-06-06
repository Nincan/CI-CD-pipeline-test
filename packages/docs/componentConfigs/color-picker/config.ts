import { ColorPicker } from 'spaceweb/color-picker';

import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

const ColorPickerConfig: YardConfig = {
  componentName: 'ColorPicker',
  imports: {
    'spaceweb/color-picker': {
      named: ['ColorPicker'],
    },
  },
  scope: {
    ColorPicker,
  },
  theme: [],
  props: {
    value: {
      value: '#93c5fd',
      type: PropTypes.String,
      description: 'color to be shown selected in picker',
      stateful: true,
    },
    onChange: {
      value: '(value) => {setValue(value);}',
      type: PropTypes.Function,
      description: 'Called when user changes color or resets the color in picker',
    },
    heading: {
      value: '',
      type: PropTypes.String,
      description: 'Heading to show on color picker',
    },
    resetButtonLabel: {
      value: '',
      type: PropTypes.String,
      description: 'label of the reset button in picker',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Heading', 'Swatches', 'Swatch', 'TickIcon'],
        sharedProps: {
          $size: 'size',
          $shape: 'shape',
          $didImageFailToLoad: {
            type: PropTypes.Boolean,
            description: 'True when the src does not resolve to a valid image.',
          },
        },
      },
    },
  },
};

export default ColorPickerConfig;
