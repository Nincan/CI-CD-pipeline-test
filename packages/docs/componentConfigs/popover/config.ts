import pick from 'lodash/pick';
import { Button } from 'spaceweb/button';
import { Input } from 'spaceweb/input';
import { StatefulPopover } from 'spaceweb/popover';
import { changeHandlers, SpacePropsTypes as PropTypes } from '../common';
import { YardConfig } from '../types';

const PopoverConfig: YardConfig = {
  componentName: 'StatefulPopover',
  imports: {
    'spaceweb/popover': { named: ['StatefulPopover'] },
  },
  scope: {
    Button,
    Input,
    StatefulPopover,
  },
  theme: [],
  props: {
    content: {
      value: `() => (
  <div style={{ padding: 20 }} >Hello, there! 👋
    <Input placeholder="Focusable Element" />
  </div>
)
      `,
      type: PropTypes.Function,
      description: 'The content of the popover.',
      imports: {
        'spaceweb/input': {
          named: ['Input'],
        },
      },
    },
    children: {
      value: '{({ isOpen }) => <Button isSelected={isOpen}>Click me</Button>}',
      type: PropTypes.ReactNode,
      description: 'The content that will trigger the popover.',
      imports: {
        'spaceweb/button': {
          named: ['Button'],
        },
      },
    },
    placement: {
      value: 'auto',
      defaultValue: 'auto',
      type: PropTypes.FixedString,
      description: 'Controls how to position the popover relative to the target.',
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
        'leftBottom',
        'leftBottom',
        'leftBottom',
      ],
    },
    triggerType: {
      value: 'click',
      defaultValue: 'click',
      options: ['click', 'hover'],
      type: PropTypes.FixedString,
      description: 'Controls how to position the popover relative to the target.',
    },
    showArrow: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description: 'If true, an arrow will be shown pointing from the popover to the trigger element.',
    },
    focusLock: {
      value: false,
      type: PropTypes.Boolean,
      description: 'If true, focus will be locked to the popover contents.',
    },
    returnFocus: {
      value: true,
      defaultValue: true,
      type: PropTypes.Boolean,
      description:
        'If true, focus will shift back to the original element after popover closes. Set this to false if focusing the original element triggers the popover.',
    },
    renderAll: {
      value: false,
      type: PropTypes.Boolean,
      description: 'Renders all popover content for SEO purposes regardless of popover isOpen state.',
    },
    autoFocus: {
      value: true,
      defaultValue: true,
      type: PropTypes.Boolean,
      description: 'If true, focus will shift to the first interactive element within the popover.',
      hidden: true,
    },
    accessibilityType: {
      value: 'menu',
      defaultValue: 'menu',
      type: PropTypes.FixedString,
      options: ['none', 'menu', 'tooltip'],
      description: 'Controls how this popover behaves for screen readers and other assistive devices.',
      hidden: true,
    },
    animateOutTime: {
      value: undefined,
      placeholder: '0',
      type: PropTypes.Number,
      description: 'Number of milliseconds used to fade out the popover.',
      hidden: true,
    },
    onMouseEnterDelay: {
      value: undefined,
      placeholder: '200',
      type: PropTypes.Number,
      description: 'Number of milliseconds to wait before showing the popover after mouse enters the trigger element.',
      hidden: true,
    },
    onMouseLeaveDelay: {
      value: undefined,
      placeholder: '200',
      type: PropTypes.Number,
      description: 'Number of milliseconds to wait before showing the popover after mouse leaves the trigger element.',
      hidden: true,
    },
    viewportAsBoundary: {
      value: false,
      defaultValue: false,
      type: PropTypes.Boolean,
      description:
        'By default, popover content will try to render inside scrollParent of target element. If true, content will overflow outside scrollParent but will remain inside viewport. https://popper.js.org/docs/v1/#preventoverflowboundarieselement',
    },
    ignoreBoundary: {
      value: undefined,
      type: PropTypes.Boolean,
      description: "If true, popover element will overflow outside anchor's scrollParent.",
      hidden: true,
    },
    mountNode: {
      value: undefined,
      type: PropTypes.Object,
      description: 'Defines where to mount the popover.',
      hidden: true,
    },
    popperOptions: {
      value: undefined,
      type: PropTypes.Object,
      description: 'Popper options override https://popper.js.org/popper-documentation.html#Popper.Defaults.',
      hidden: true,
    },
    onOpen: {
      value: undefined,
      type: PropTypes.Function,
      description: 'Called when the Popover opens.',
      placeholder: '() => {}',
    },
    onClose: {
      value: undefined,
      type: PropTypes.Function,
      description: 'Called when the Popover clsoes.',
      placeholder: '() => {}',
    },
    targetElement: {
      value: undefined,
      type: PropTypes.ReactNode,
      description:
        'By default Popover assumes children to be targetElement. targetElement can be used to provide custom targetElement.',
      hidden: true,
    },
    ...pick(changeHandlers, ['onBlur', 'onFocus', 'onEsc', 'onMouseEnter', 'onMouseLeave']),
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: ['Arrow', 'Body', 'Inner', 'ArrowTriangle'],
        sharedProps: {
          $showArrow: 'showArrow',
          $placement: 'placement',
          $isOpen: {
            type: PropTypes.Boolean,
            description: 'True when the popover is opened.',
          },
          $isAnimating: {
            type: PropTypes.Boolean,
            description: 'True when the popover is animating.',
          },
        },
      },
    },
  },
};

export default PopoverConfig;
