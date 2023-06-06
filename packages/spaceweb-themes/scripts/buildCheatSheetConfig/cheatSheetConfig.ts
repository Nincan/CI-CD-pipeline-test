const TYPOGRAPHY = 'TYPOGRAPHY';
const BACKGROUND = 'BACKGROUND';
const INTERACTIVITY = 'INTERACTIVITY';
const LAYOUT = 'LAYOUT';
const BORDER = 'BORDER';
const FLEXBOX = 'FLEXBOX';
const SPACING = 'SPACING';
const SIZING = 'SIZING';
const GLOBALS = 'GLOBALS';
const MISC = 'MISC';
const GRID = 'GRID';
const TRANSITIONS = 'TRANSITIONS';
const TRANSFORM = 'TRANSFORM';

const camelCase = str =>
  str
    .split('-')
    .map((word, index) => (index > 0 ? word[0].toUpperCase() + word.slice(1) : word))
    .join('');

const matchByCSSProp = cssPropType => rule => rule.nodes[0].prop === camelCase(cssPropType);
const matchByRegexProp = regex => rule => rule.selector.match(regex);
const matchByMultipleWords = words => rule => {
  let matched = true;
  words.forEach(word => {
    matched = matched && rule.nodes[0].prop.includes(word);
  });
  return matched;
};

const layoutConfig = [
  {
    matchRules: matchByCSSProp('display'),
    type: 'display',
    description: 'Sets the display box type of an element.',
    category: LAYOUT,
    variantConfigKey: 'display',
  },
  {
    matchRules: matchByRegexProp('float|clearfix'),
    type: 'float',
    description: "Sets an element's placement to a side of its container and allows content to wrap around it.",
    category: LAYOUT,
    variantConfigKey: 'float',
  },
  {
    matchRules: matchByCSSProp('object-fit'),
    type: 'object-fit',
    description: 'Sets how the content of a replaced element (img or video tag) should be resized.',
    category: LAYOUT,
    variantConfigKey: 'object-fit',
  },
  {
    matchRules: matchByCSSProp('object-position'),
    type: 'object-position',
    description: 'Sets the alignment of the selected replaced element.',
    category: LAYOUT,
    variantConfigKey: 'object-position',
  },
  {
    matchRules: matchByRegexProp('overflow-|scrolling'),
    type: 'overflow',
    description: "Sets how to handle content that's too big for its container.",
    category: LAYOUT,
  },
  {
    matchRules: matchByCSSProp('position'),
    type: 'position',
    description: "Sets an element's position.",
    category: LAYOUT,
  },
  {
    matchRules: matchByCSSProp('visibility'),
    type: 'visibility',
    description: 'Show or hide without affecting the layout of the document.',
    category: LAYOUT,
  },
  {
    matchRules: matchByCSSProp('zIndex'),
    type: 'z-index',
    description: '',
    category: LAYOUT,
  },
  {
    matchRules: matchByRegexProp('^((inset)|(left)|(right)|(bottom)|(top))'),
    type: 'top-right-bottom-left',
    description: '',
    category: LAYOUT,
  },
  {
    matchRules: matchByCSSProp('box-sizing'),
    type: 'box-sizing',
    description: 'describes calculation method for calculating size',
    category: LAYOUT,
  },
  {
    matchRules: matchByCSSProp('clear'),
    type: 'clear',
    description: 'controls wrapping of content around element',
    category: LAYOUT,
  },
];
const borderConfig = [
  {
    matchRules: matchByMultipleWords(['border', 'Width']),
    type: 'border-width',
    description: 'Sets width for borders in increments of 1px',
    category: BORDER,
  },
  {
    matchRules: matchByCSSProp('border-color'),
    type: 'border-color',
    description: 'Sets color for borders',
    category: BORDER,
    variantConfigKey: 'borderColor',
  },
  {
    matchRules: matchByCSSProp('border-style'),
    type: 'border-style',
    description: 'Sets style for borders.',
    category: BORDER,
  },
  {
    matchRules: matchByRegexProp('rounded'),
    type: 'border-radius',
    description: 'Sets border radius',
    category: BORDER,
  },
  {
    matchRules: matchByRegexProp('border-opacity'),
    type: 'border-opacity',
    description: 'Sets opacity for border',
    category: BORDER,
  },
  {
    matchRules: matchByCSSProp('border-collapse'),
    type: 'border-collapse',
    description: '',
    category: BORDER,
  },
];
const typographyConfig = [
  {
    matchRules: matchByCSSProp('font-family'),
    type: 'font-family',
    description: '',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('color'),
    type: 'text-color',
    description: '',
    category: TYPOGRAPHY,
    variantConfigKey: 'textColor',
  },
  {
    matchRules: matchByCSSProp('font-size'),
    type: 'font-size',
    description: 'Sets the font size',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('font-style'),
    type: 'font-style',
    description: 'font-style',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('font-weight'),
    type: 'font-weight',
    description: 'Sets the font weight',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByMultipleWords(['Font', 'Smoothing']),
    type: 'font-smoothing',
    description: '',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('letter-spacing'),
    type: 'letter-spacing',
    description: 'Sets the spacing between letters',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('line-height'),
    type: 'line-height',
    description: 'Sets the line height',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('list-style-type'),
    type: 'list-style-type',
    description: 'Sets the bullet style of a list.',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('list-style-position'),
    type: 'list-style-position',
    description: "Sets the position of a list's bullets",
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('text-align'),
    type: 'text-align',
    description: 'Sets the alignment of text',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('text-decoration'),
    type: 'text-decoration',
    description: 'text-decoration',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('vertical-align'),
    type: 'vertical-align',
    description: 'Sets the vertical alignment of an inline or table-cell box.',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('white-space'),
    type: 'whitespace',
    description: 'Sets the whitespace of an element',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('word-break'),
    type: 'word-break',
    description: 'Sets the word breaks of an element',
    category: TYPOGRAPHY,
    more: true,
  },
  {
    matchRules: matchByCSSProp('text-transform'),
    type: 'text-transform',
    description: 'text-transform',
    category: TYPOGRAPHY,
    more: true,
  },
  {
    matchRules: matchByRegexProp('^(break-)|(truncate)'),
    type: 'word',
    description: '',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByCSSProp('white-space'),
    type: 'whitespace',
    description: '',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByRegexProp('select-'),
    type: 'user-select',
    description: '',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByRegexProp('placeholder-opacity'),
    type: 'placeholder-opacity',
    description: 'Sets opacity of placeholder',
    category: TYPOGRAPHY,
  },
  {
    matchRules: matchByRegexProp('line-clamp'),
    type: 'line-clamp',
    description: 'Allows limiting of the contents of a block container to the specified number of lines.',
    category: TYPOGRAPHY,
  },
];
const flexboxConfig = [
  {
    matchRules: matchByCSSProp('flex-direction'),
    type: 'flex-direction',
    description: 'flex-direction',
    category: FLEXBOX,
    variantConfigKey: 'flexDirection',
  },
  {
    matchRules: matchByCSSProp('flex-wrap'),
    type: 'flex-wrap',
    description: 'flex-wrap',
    category: FLEXBOX,
  },
  {
    matchRules: matchByCSSProp('align-items'),
    type: 'align-items',
    description: 'align-items',
    category: FLEXBOX,
  },
  {
    matchRules: matchByCSSProp('align-content'),
    type: 'align-content',
    description: 'align-content',
    category: FLEXBOX,
  },
  {
    matchRules: matchByCSSProp('align-self'),
    type: 'align-self',
    description: 'align-self',
    category: FLEXBOX,
  },
  {
    matchRules: matchByCSSProp('justify-content'),
    type: 'justify-content',
    description: 'justify-content',
    category: FLEXBOX,
    variantConfigKey: 'justifyContent',
  },
  {
    matchRules: matchByRegexProp('^(flex-(1|auto|initial|none))'),
    type: 'flex',
    description: 'flex',
    category: FLEXBOX,
  },
  {
    matchRules: matchByRegexProp('flex-grow'),
    type: 'flex-grow',
    description: 'flex-grow',
    category: FLEXBOX,
    variantConfigKey: 'flexGrow',
  },
  {
    matchRules: matchByCSSProp('flex-shrink'),
    type: 'flex-shrink',
    description: 'flex-shrink',
    category: FLEXBOX,
  },
  {
    matchRules: matchByCSSProp('order'),
    type: 'order',
    description: 'Sets order of flex items',
    category: FLEXBOX,
  },
];
const bgConfig = [
  {
    matchRules: matchByCSSProp('background-color'),
    type: 'background-color',
    description: '',
    category: BACKGROUND,
    variantConfigKey: 'themedBackgroundColor',
  },
  {
    matchRules: matchByCSSProp('background-attachment'),
    type: 'background-attachment',
    description: 'Sets behavior of background images when scrolling.',
    category: BACKGROUND,
  },
  {
    matchRules: matchByCSSProp('background-position'),
    type: 'background-position',
    description: 'Sets position of a background image',
    category: BACKGROUND,
  },
  {
    matchRules: matchByCSSProp('background-size'),
    type: 'background-size',
    description: 'Sets background size of a background image',
    category: BACKGROUND,
  },
  {
    matchRules: matchByCSSProp('background-repeat'),
    type: 'background-repeat',
    description: 'Sets background size of a background image',
    category: BACKGROUND,
  },
  {
    matchRules: matchByCSSProp('fill'),
    type: 'fill',
    description: 'Controls fill',
    category: BACKGROUND,
  },
];
const spacingConfig = [
  {
    matchRules: matchByMultipleWords(['padding']),
    type: 'padding',
    description: 'Controls padding in 0.25rem increments',
    category: SPACING,
    variantConfigKey: 'padding',
  },
  {
    matchRules: matchByMultipleWords(['margin']),
    type: 'margin',
    description: 'Controls margin in 0.25rem increments',
    category: SPACING,
  },
];
const sizingConfig = [
  {
    matchRules: matchByCSSProp('width'),
    type: 'width',
    description: 'Controls width',
    category: SIZING,
  },
  {
    matchRules: matchByCSSProp('min-width'),
    type: 'min-width',
    description: 'Controls width',
    category: SIZING,
    variantConfigKey: 'minWidth',
  },
  {
    matchRules: matchByCSSProp('max-width'),
    type: 'max-width',
    description: 'Controls width',
    category: SIZING,
    variantConfigKey: 'maxWidth',
  },
  {
    matchRules: matchByCSSProp('height'),
    type: 'height',
    description: 'Controls width',
    category: SIZING,
  },
  {
    matchRules: matchByCSSProp('min-height'),
    type: 'min-height',
    description: 'Controls width',
    category: SIZING,
    variantConfigKey: 'minHeight',
  },
  {
    matchRules: matchByCSSProp('max-height'),
    type: 'max-height',
    description: 'Controls width',
    category: SIZING,
    variantConfigKey: 'maxHeight',
  },
];

const miscConfig = [
  {
    matchRules: matchByCSSProp('box-shadow'),
    type: 'box-shadow',
    description: 'Controls box-shadow',
    category: MISC,
  },
  {
    matchRules: matchByCSSProp('opacity'),
    type: 'opacity',
    description: 'Controls opacity',
    category: MISC,
  },
  {
    matchRules: matchByCSSProp('stroke'),
    type: 'stroke',
    description: 'Controls stroke',
    category: MISC,
  },
  {
    matchRules: matchByCSSProp('table-layout'),
    type: 'table-layout',
    description: 'Controls table-layout',
    category: MISC,
  },
  {
    matchRules: matchByCSSProp('visibility'),
    type: 'visibility',
    description: '',
    category: MISC,
  },
  {
    matchRules: matchByCSSProp('stroke-width'),
    type: 'stroke-width',
    description: '',
    category: MISC,
  },
  {
    matchRules: matchByRegexProp('^outline-[0-9]'),
    type: 'outline',
    description: '',
    category: MISC,
  },
  {
    matchRules: matchByCSSProp('outline-width'),
    type: 'outline-width',
    description: '',
    category: MISC,
  },
  {
    matchRules: matchByRegexProp('^outline-(?!(width|offset|[0-9]))'),
    type: 'outline-style',
    description: '',
    category: MISC,
  },
  {
    matchRules: matchByCSSProp('outline-offset'),
    type: 'outline-offset',
    description: '',
    category: MISC,
  },
];

const interactivityConfig = [
  {
    matchRules: matchByCSSProp('cursor'),
    type: 'cursor',
    description: '',
    category: INTERACTIVITY,
  },
  {
    matchRules: matchByCSSProp('pointer-events'),
    type: 'pointer-events',
    description: '',
    category: INTERACTIVITY,
  },
  {
    matchRules: matchByCSSProp('appearance'),
    type: 'appearance',
    description: '',
    category: INTERACTIVITY,
  },
  {
    matchRules: matchByCSSProp('resize'),
    type: 'resize',
    description: 'controls how an element can be resized',
    category: INTERACTIVITY,
  },
];

const gridConfig = [
  {
    matchRules: matchByCSSProp('grid-gap'),
    type: 'gap',
    description: 'add gap between cells',
    category: GRID,
  },
  {
    matchRules: matchByCSSProp('grid-column-gap'),
    type: 'grid-column-gap',
    description: 'add gap between columns',
    category: GRID,
    path: 'gap',
  },
  {
    matchRules: matchByCSSProp('grid-row-gap'),
    type: 'grid-row-gap',
    description: 'add gap between rows',
    category: GRID,
    path: 'gap',
  },
  {
    matchRules: matchByCSSProp('grid-template-columns'),
    type: 'grid-template-columns',
    description: '',
    category: GRID,
  },
  {
    matchRules: matchByCSSProp('grid-column'),
    type: 'col-span',
    description: 'Spans cell to given number of columns',
    category: GRID,
    path: 'grid-column',
  },
  {
    matchRules: matchByCSSProp('grid-column-start'),
    type: 'grid-column-start',
    description: 'Starts cell at given number of column',
    category: GRID,
    path: 'grid-column',
  },
  {
    matchRules: matchByCSSProp('grid-column-end'),
    type: 'grid-column-end',
    description: 'Ends cell at given number of column',
    category: GRID,
    path: 'grid-column',
  },
  {
    matchRules: matchByCSSProp('grid-template-rows'),
    type: 'grid-template-rows',
    description: '',
    category: GRID,
  },
  {
    matchRules: matchByCSSProp('grid-row'),
    type: 'row-span',
    description: 'Spans cell to given number of rows',
    category: GRID,
    path: 'grid-row',
  },
  {
    matchRules: matchByCSSProp('grid-row-start'),
    type: 'grid-row-start',
    description: 'Starts cell at given number of row',
    category: GRID,
    path: 'grid-row',
  },
  {
    matchRules: matchByCSSProp('grid-row-end'),
    type: 'grid-row-end',
    description: 'Ends cell at given number of row',
    category: GRID,
    path: 'grid-row',
  },
  {
    matchRules: matchByCSSProp('grid-auto-flow'),
    type: 'grid-auto-flow',
    description: 'sets placing of element in grid',
    category: GRID,
  },
];

const transitionConfig = [
  {
    matchRules: matchByCSSProp('transition-property'),
    type: 'transition-property',
    description: 'Adds transition effects',
    category: TRANSITIONS,
  },
  {
    matchRules: matchByCSSProp('transition-timing-function'),
    type: 'transition-timing-function',
    description: 'Sets transition timing',
    category: TRANSITIONS,
  },
  {
    matchRules: matchByCSSProp('transition-duration'),
    type: 'transition-duration',
    description: 'Sets transition duration',
    category: TRANSITIONS,
  },
  {
    matchRules: matchByCSSProp('transition-delay'),
    type: 'transition-delay',
    description: 'Sets delay of transitions',
    category: TRANSITIONS,
  },
];

const transformConfig = [
  {
    matchRules: matchByRegexProp('translate-|transform'),
    type: 'translate',
    description: 'translates elements with transfrom',
    category: TRANSFORM,
  },
  {
    matchRules: matchByRegexProp('rotate'),
    type: 'rotate',
    description: 'rotates elements',
    category: TRANSFORM,
  },
  {
    matchRules: matchByRegexProp('scale'),
    type: 'scale',
    description: 'scales elements',
    category: TRANSFORM,
  },
  {
    matchRules: matchByRegexProp('skew'),
    type: 'skew',
    description: 'to skew elements',
    category: TRANSFORM,
  },
  {
    matchRules: matchByCSSProp('transform-origin'),
    type: 'transform-origin',
    description: 'specifies origin of element for transformation',
    category: TRANSFORM,
  },
];

export default [
  ...layoutConfig,
  ...borderConfig,
  ...typographyConfig,
  ...flexboxConfig,
  ...bgConfig,
  ...spacingConfig,
  ...sizingConfig,
  ...interactivityConfig,
  ...miscConfig,
  ...gridConfig,
  ...transitionConfig,
  ...transformConfig,

  ///GLOBALS
  {
    matchRules: matchByRegexProp('spr'),
    type: 'globals',
    description: 'globals',
    category: GLOBALS,
  },
];
