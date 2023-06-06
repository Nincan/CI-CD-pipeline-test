module.exports = {
  theme: {
    fontVariantNumeric: {
      'tabular-nums': 'tabular-nums',
    },
    backgroundColor: {
      transparent: 'transparent',
    },
    backgroundPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
    },
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      md: '0.375rem',
      lg: '0.5rem',
      default: '1px',
      full: '100%',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      '12': '12px',
      '16': '16px',
    },
    container: {},
    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
    },
    fill: {
      current: 'currentColor',
    },
    flex: {
      '1': { flexGrow: '1', flexShrink: '1', flexBasis: '0%' },
      auto: { flexGrow: '1', flexShrink: '1', flexBasis: 'auto' },
      initial: { flexGrow: '0', flexShrink: '1', flexBasis: 'auto' },
      none: { flexGrow: '0', flexShrink: '0', flexBasis: 'auto' },
    },
    flexGrow: {
      '0': '0',
      default: '1',
    },
    flexShrink: {
      '0': '0',
      default: '1',
    },
    fontFamily: {
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
      mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
    fontWeight: {
      hairline: '100',
      thin: '200',
      light: '300',
      normal: '400',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
      '300': '300',
      '400': '400',
      '500': '500',
      '600': '600',
      '700': '700',
    },
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      full: '100%',
      screen: '100vh',
    }),
    inset: {
      '0': '0',
      auto: 'auto',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      '3': '.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    margin: (theme, { negative }) => ({
      auto: 'auto',
      '1.5': '0.6rem',
      '0.5': '0.2rem',
      ...negative({
        '1.5': '0.6rem',
        '0.5': '0.2rem',
      }),
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
    maxHeight: {
      full: '100%',
      screen: '100vh',
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem',
      sm: '24rem',
      md: '28rem',
      lg: '32rem',
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      full: '100%',
      ...breakpoints(theme('screens')),
    }),
    minHeight: {
      '0': '0',
      full: '100%',
      screen: '100vh',
    },
    minWidth: {
      '0': '0',
      full: '100%',
    },
    objectPosition: {
      bottom: 'bottom',
      center: 'center',
      left: 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',
    },
    opacity: {
      '0': '0',
      '5': '0.05',
      '10': '0.1',
      '15': '0.15',
      '20': '0.2',
      '25': '0.25',
      '30': '0.3',
      '40': '0.4',
      '50': '0.5',
      '60': '0.6',
      '70': '0.7',
      '75': '0.75',
      '80': '0.8',
      '90': '0.9',
      '100': '1',
    },
    order: {
      first: '-9999',
      last: '9999',
      none: '0',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16',
      '17': '17',
      '18': '18',
      '19': '19',
      '20': '20',
      '21': '21',
      '22': '22',
      '23': '23',
      '24': '24',
    },
    outlineOffset: {
      '-2': '-2px',
      '-1': '-1px',
      '0': '0px',
      '1': '1px',
      '2': '2px',
    },
    outlineWidth: {
      '1': '1px',
      '2': '2px',
    },
    outlineStyle: {
      none: 'none',
      solid: 'solid',
      dashed: 'dashed',
      dotted: 'dotted',
      double: 'double',
      hidden: 'hidden',
    },
    padding: theme => ({
      '1.5': '0.6rem',
      '0.5': '0.2rem',
      ...theme('spacing'),
    }),
    stroke: {
      current: 'currentColor',
    },
    strokeWidth: {
      '0': '0',
      '1': '1',
      '2': '2',
    },
    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1/2': '50%',
      '1/3': '33.333333%',
      '1/4': '25%',
      '2/3': '66.666667%',
      '2/4': '50%',
      '3/4': '75%',
      '1/24': '4.166667%',
      '2/24': '8.333333%',
      '3/24': '12.5%',
      '4/24': '16.666667%',
      '5/24': '20.833333%',
      '6/24': '25%',
      '7/24': '29.166667%',
      '8/24': '33.333333%',
      '9/24': '37.5%',
      '10/24': '41.666667%',
      '11/24': '45.833333%',
      '12/24': '50%',
      '13/24': '54.166667%',
      '14/24': '58.333333%',
      '15/24': '62.5%',
      '16/24': '66.666667%',
      '17/24': '70.833333%',
      '18/24': '75%',
      '19/24': '79.166667%',
      '20/24': '83.333333%',
      '21/24': '87.5%',
      '22/24': '91.666667%',
      '23/24': '95.833333%',
      full: '100%',
    }),
    zIndex: {
      auto: 'auto',
      '0': '0',
      '10': '10',
      '20': '20',
      '30': '30',
      '40': '40',
      '50': '50',
    },
    gap: theme => theme('spacing'),
    gridTemplateColumns: {
      none: 'none',
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '9': 'repeat(9, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '11': 'repeat(11, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
      '13': 'repeat(13, minmax(0, 1fr))',
      '14': 'repeat(14, minmax(0, 1fr))',
      '15': 'repeat(15, minmax(0, 1fr))',
      '16': 'repeat(16, minmax(0, 1fr))',
      '17': 'repeat(17, minmax(0, 1fr))',
      '18': 'repeat(18, minmax(0, 1fr))',
      '19': 'repeat(19, minmax(0, 1fr))',
      '20': 'repeat(20, minmax(0, 1fr))',
      '21': 'repeat(21, minmax(0, 1fr))',
      '22': 'repeat(22, minmax(0, 1fr))',
      '23': 'repeat(23, minmax(0, 1fr))',
      '24': 'repeat(24, minmax(0, 1fr))',
    },
    gridColumn: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
      'span-13': 'span 13 / span 13',
      'span-14': 'span 14 / span 14',
      'span-15': 'span 15 / span 15',
      'span-16': 'span 16 / span 16',
      'span-17': 'span 17 / span 17',
      'span-18': 'span 18 / span 18',
      'span-19': 'span 19 / span 19',
      'span-20': 'span 20 / span 20',
      'span-21': 'span 21 / span 21',
      'span-22': 'span 22 / span 22',
      'span-23': 'span 23 / span 23',
      'span-24': 'span 24 / span 24',
    },
    gridColumnStart: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16',
      '17': '17',
      '18': '18',
      '19': '19',
      '20': '20',
      '21': '21',
      '22': '22',
      '23': '23',
      '24': '24',
    },
    gridColumnEnd: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16',
      '17': '17',
      '18': '18',
      '19': '19',
      '20': '20',
      '21': '21',
      '22': '22',
      '23': '23',
      '24': '24',
    },
    gridTemplateRows: {
      none: 'none',
      '1': 'repeat(1, minmax(0, 1fr))',
      '2': 'repeat(2, minmax(0, 1fr))',
      '3': 'repeat(3, minmax(0, 1fr))',
      '4': 'repeat(4, minmax(0, 1fr))',
      '5': 'repeat(5, minmax(0, 1fr))',
      '6': 'repeat(6, minmax(0, 1fr))',
      '7': 'repeat(7, minmax(0, 1fr))',
      '8': 'repeat(8, minmax(0, 1fr))',
      '9': 'repeat(9, minmax(0, 1fr))',
      '10': 'repeat(10, minmax(0, 1fr))',
      '11': 'repeat(11, minmax(0, 1fr))',
      '12': 'repeat(12, minmax(0, 1fr))',
    },
    gridRow: {
      auto: 'auto',
      'span-1': 'span 1 / span 1',
      'span-2': 'span 2 / span 2',
      'span-3': 'span 3 / span 3',
      'span-4': 'span 4 / span 4',
      'span-5': 'span 5 / span 5',
      'span-6': 'span 6 / span 6',
      'span-7': 'span 7 / span 7',
      'span-8': 'span 8 / span 8',
      'span-9': 'span 9 / span 9',
      'span-10': 'span 10 / span 10',
      'span-11': 'span 11 / span 11',
      'span-12': 'span 12 / span 12',
    },
    gridRowStart: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    gridRowEnd: {
      auto: 'auto',
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': '10',
      '11': '11',
      '12': '12',
      '13': '13',
    },
    transformOrigin: {
      center: 'center',
      top: 'top',
      'top-right': 'top right',
      right: 'right',
      'bottom-right': 'bottom right',
      bottom: 'bottom',
      'bottom-left': 'bottom left',
      left: 'left',
      'top-left': 'top left',
    },
    scale: {
      '0': '0',
      '50': '.5',
      '75': '.75',
      '90': '.9',
      '95': '.95',
      '100': '1',
      '105': '1.05',
      '110': '1.1',
      '125': '1.25',
      '150': '1.5',
    },
    rotate: {
      '-180': '-180deg',
      '-90': '-90deg',
      '-45': '-45deg',
      '0': '0',
      '45': '45deg',
      '90': '90deg',
      '180': '180deg',
    },
    translate: (theme, { negative }) => ({
      ...theme('spacing'),
      ...negative(theme('spacing')),
      '-full': '-100%',
      '-1/2': '-50%',
      '1/2': '50%',
      full: '100%',
    }),
    skew: {
      '-12': '-12deg',
      '-6': '-6deg',
      '-3': '-3deg',
      '0': '0',
      '3': '3deg',
      '6': '6deg',
      '12': '12deg',
    },
    transitionProperty: {
      none: 'none',
      all: 'all',
      default: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
      opacity: 'opacity',
      shadow: 'box-shadow',
      transform: 'transform',
    },
    transitionTimingFunction: {
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    transitionDuration: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
    },
    borderColor: theme => theme('colors'),
    borderOpacity: theme => theme('opacity'),
    placeholderColor: theme => theme('colors'),
    placeholderOpacity: theme => theme('opacity'),
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    textColor: theme => theme('colors'),
    transitionDelay: {
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
    fontSize: {
      '10': '1rem',
      '11': '1.1rem',
      '12': '1.2rem',
      '13': '1.3rem',
      '14': '1.4rem',
      '16': '1.6rem',
      '20': '2rem',
      '24': '2.4rem',
      '32': '3.2rem',
      '40': '4rem',
      '56': '5.6rem',
      '72': '7.2rem',
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.4rem',
      '2': '0.8rem',
      '3': '1.2rem',
      '4': '1.6rem',
      '5': '2rem',
      '6': '2.4rem',
      '7': '2.8rem',
      '8': '3.2rem',
      '9': '3.6rem',
      '10': '4rem',
      '11': '4.4rem',
      '12': '4.8rem',
      '16': '6.4rem',
      '20': '8rem',
      '24': '9.6rem',
      '32': '12.8rem',
      '40': '16rem',
      '48': '19.2rem',
      '56': '22.4rem',
      '64': '25.6rem',
    },
    lineClamp: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      none: 'unset',
    },
  },
  // remove when upgraded to tailwind v2
  future: {
    removeDeprecatedGapUtilities: true,
  },
};