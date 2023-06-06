import { Tag } from 'spaceweb/tag';
import { YardConfig } from '../types';
import { SpacePropsTypes as PropTypes } from '../common';

const TagConfig: YardConfig = {
  componentName: 'Tag',
  imports: {
    'spaceweb/tag': {
      named: ['Tag'],
    },
  },
  scope: { Tag },
  theme: [],
  props: {
    children: {
      value: 'this is a tag',
      type: PropTypes.ReactNode,
      description: 'Visible label.',
    },
    className: {
      value: '',
      type: PropTypes.String,
      description: 'Classname to apply on root of tag component',
      placeholder: 'spr-ui-04',
    },
    onClick: {
      value: undefined,
      placeholder: '() => alert("click")',
      type: PropTypes.Function,
      description: 'onClick handler for the tag. Passing an onClick handler also makes the tag clickable.',
    },
    onActionClick: {
      value: undefined,
      placeholder: '() => alert("click")',
      type: PropTypes.Function,
      description: 'onClick handler for the action button element.',
    },
    closeable: {
      value: true,
      defaultValue: true,
      type: PropTypes.Boolean,
      description: 'Include or exclude the "x" button and click action.',
    },
    isFocused: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Is tag focused.',
      hidden: true,
    },
    isHovered: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Is tag hovered.',
      hidden: true,
    },
    title: {
      value: undefined,
      type: PropTypes.String,
      description: 'Text to display in native OS tooltip on long hover.',
      hidden: true,
    },
    onKeyDown: {
      value: undefined,
      placeholder: '() => alert("click")',
      type: PropTypes.Function,
      description: 'onkeydown handler for the tag.',
      hidden: true,
    },
    onActionKeyDown: {
      value: undefined,
      placeholder: '() => alert("click")',
      type: PropTypes.Function,
      description: 'keydown handler for the action button element.',
      hidden: true,
    },
    startEnhancer: {
      value: undefined,
      type: PropTypes.Function,
      description: 'A component rendered at the start of the tag.',
    },
    intent: {
      value: 'default',
      type: PropTypes.FixedString,
      description: 'Defines tags look by purpose.',
      options: ['default', 'warning', 'error', 'success', 'info'],
    },
    variant: {
      value: 'light',
      type: PropTypes.FixedString,
      options: ['light', 'solid'],
      description: 'Defines tags look. Defaults to light variant.',
    },
    size: {
      value: 'lg',
      type: PropTypes.FixedString,
      options: ['sm', 'lg'],
      description: 'Size of tag.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Root', 'Action', 'ActionIcon', 'Text', 'StartEnhancer'],
        sharedProps: {
          $intent: 'intent',
          $variant: 'variant',
          $closeable: 'closeable',
          $isActive: {
            type: PropTypes.Boolean,
            description: 'Is tag active.',
          },
          $clickable: {
            type: PropTypes.Boolean,
            description: 'Is tag clickable.',
          },
          $withStartEnhancer: {
            type: PropTypes.Boolean,
            description: 'Start enhancer provided.',
          },
          $isHovered: 'isHovered',
          $isFocused: 'isFocused',
          $size: 'size',
        },
      },
    },
  },
};

export default TagConfig;
