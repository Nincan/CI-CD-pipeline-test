export default [
  {
    type: 'display',
    description: 'Sets the display box type of an element.',
    category: 'LAYOUT',
    variantConfigKey: 'display',
    rules: [
      {
        selector: '.block',
        values: ['display: block'],
      },
      {
        selector: '.inline-block',
        values: ['display: inline-block'],
      },
      {
        selector: '.inline',
        values: ['display: inline'],
      },
      {
        selector: '.flex',
        values: ['display: flex'],
      },
      {
        selector: '.inline-flex',
        values: ['display: inline-flex'],
      },
      {
        selector: '.table',
        values: ['display: table'],
      },
      {
        selector: '.table-caption',
        values: ['display: table-caption'],
      },
      {
        selector: '.table-cell',
        values: ['display: table-cell'],
      },
      {
        selector: '.table-column',
        values: ['display: table-column'],
      },
      {
        selector: '.table-column-group',
        values: ['display: table-column-group'],
      },
      {
        selector: '.table-footer-group',
        values: ['display: table-footer-group'],
      },
      {
        selector: '.table-header-group',
        values: ['display: table-header-group'],
      },
      {
        selector: '.table-row-group',
        values: ['display: table-row-group'],
      },
      {
        selector: '.table-row',
        values: ['display: table-row'],
      },
      {
        selector: '.flow-root',
        values: ['display: flow-root'],
      },
      {
        selector: '.grid',
        values: ['display: grid'],
      },
      {
        selector: '.inline-grid',
        values: ['display: inline-grid'],
      },
      {
        selector: '.contents',
        values: ['display: contents'],
      },
      {
        selector: '.hidden',
        values: ['display: none'],
      },
    ],
  },
  {
    type: 'float',
    description: "Sets an element's placement to a side of its container and allows content to wrap around it.",
    category: 'LAYOUT',
    variantConfigKey: 'float',
    rules: [
      {
        selector: '.float-right',
        values: ['float: right'],
      },
      {
        selector: '.float-left',
        values: ['float: left'],
      },
      {
        selector: '.float-none',
        values: ['float: none'],
      },
      {
        selector: '.clearfix:after',
        values: ['content: ""', 'display: table', 'clear: both'],
      },
    ],
  },
  {
    type: 'object-fit',
    description: 'Sets how the content of a replaced element (img or video tag) should be resized.',
    category: 'LAYOUT',
    variantConfigKey: 'object-fit',
    rules: [
      {
        selector: '.object-contain',
        values: ['objectFit: contain'],
      },
      {
        selector: '.object-cover',
        values: ['objectFit: cover'],
      },
      {
        selector: '.object-fill',
        values: ['objectFit: fill'],
      },
      {
        selector: '.object-none',
        values: ['objectFit: none'],
      },
      {
        selector: '.object-scale-down',
        values: ['objectFit: scale-down'],
      },
    ],
  },
  {
    type: 'object-position',
    description: 'Sets the alignment of the selected replaced element.',
    category: 'LAYOUT',
    variantConfigKey: 'object-position',
    rules: [
      {
        selector: '.object-bottom',
        values: ['objectPosition: bottom'],
      },
      {
        selector: '.object-center',
        values: ['objectPosition: center'],
      },
      {
        selector: '.object-left',
        values: ['objectPosition: left'],
      },
      {
        selector: '.object-left-bottom',
        values: ['objectPosition: left bottom'],
      },
      {
        selector: '.object-left-top',
        values: ['objectPosition: left top'],
      },
      {
        selector: '.object-right',
        values: ['objectPosition: right'],
      },
      {
        selector: '.object-right-bottom',
        values: ['objectPosition: right bottom'],
      },
      {
        selector: '.object-right-top',
        values: ['objectPosition: right top'],
      },
      {
        selector: '.object-top',
        values: ['objectPosition: top'],
      },
    ],
  },
  {
    type: 'overflow',
    description: "Sets how to handle content that's too big for its container.",
    category: 'LAYOUT',
    rules: [
      {
        selector: '.overflow-auto',
        values: ['overflow: auto'],
      },
      {
        selector: '.overflow-hidden',
        values: ['overflow: hidden'],
      },
      {
        selector: '.overflow-visible',
        values: ['overflow: visible'],
      },
      {
        selector: '.overflow-scroll',
        values: ['overflow: scroll'],
      },
      {
        selector: '.overflow-x-auto',
        values: ['overflowX: auto'],
      },
      {
        selector: '.overflow-y-auto',
        values: ['overflowY: auto'],
      },
      {
        selector: '.overflow-x-hidden',
        values: ['overflowX: hidden'],
      },
      {
        selector: '.overflow-y-hidden',
        values: ['overflowY: hidden'],
      },
      {
        selector: '.overflow-x-visible',
        values: ['overflowX: visible'],
      },
      {
        selector: '.overflow-y-visible',
        values: ['overflowY: visible'],
      },
      {
        selector: '.overflow-x-scroll',
        values: ['overflowX: scroll'],
      },
      {
        selector: '.overflow-y-scroll',
        values: ['overflowY: scroll'],
      },
      {
        selector: '.scrolling-touch',
        values: ['WebkitOverflowScrolling: touch'],
      },
      {
        selector: '.scrolling-auto',
        values: ['WebkitOverflowScrolling: auto'],
      },
    ],
  },
  {
    type: 'position',
    description: "Sets an element's position.",
    category: 'LAYOUT',
    rules: [
      {
        selector: '.sr-only',
        values: [
          'position: absolute',
          'width: 1px',
          'height: 1px',
          'padding: 0',
          'margin: -1px',
          'overflow: hidden',
          'clip: rect(0, 0, 0, 0)',
          'whiteSpace: nowrap',
          'borderWidth: 0',
        ],
      },
      {
        selector: '.not-sr-only',
        values: [
          'position: static',
          'width: auto',
          'height: auto',
          'padding: 0',
          'margin: 0',
          'overflow: visible',
          'clip: auto',
          'whiteSpace: normal',
        ],
      },
      {
        selector: '.static',
        values: ['position: static'],
      },
      {
        selector: '.fixed',
        values: ['position: fixed'],
      },
      {
        selector: '.absolute',
        values: ['position: absolute'],
      },
      {
        selector: '.relative',
        values: ['position: relative'],
      },
      {
        selector: '.sticky',
        values: ['position: sticky'],
      },
    ],
  },
  {
    type: 'visibility',
    description: 'Show or hide without affecting the layout of the document.',
    category: 'LAYOUT',
    rules: [
      {
        selector: '.visible',
        values: ['visibility: visible'],
      },
      {
        selector: '.invisible',
        values: ['visibility: hidden'],
      },
    ],
  },
  {
    type: 'z-index',
    description: '',
    category: 'LAYOUT',
    rules: [
      {
        selector: '.z-0',
        values: ['zIndex: 0'],
      },
      {
        selector: '.z-10',
        values: ['zIndex: 10'],
      },
      {
        selector: '.z-20',
        values: ['zIndex: 20'],
      },
      {
        selector: '.z-30',
        values: ['zIndex: 30'],
      },
      {
        selector: '.z-40',
        values: ['zIndex: 40'],
      },
      {
        selector: '.z-50',
        values: ['zIndex: 50'],
      },
      {
        selector: '.z-auto',
        values: ['zIndex: auto'],
      },
    ],
  },
  {
    type: 'top-right-bottom-left',
    description: '',
    category: 'LAYOUT',
    rules: [
      {
        selector: '.inset-0',
        values: ['top: 0', 'right: 0', 'bottom: 0', 'left: 0'],
      },
      {
        selector: '.inset-auto',
        values: ['top: auto', 'right: auto', 'bottom: auto', 'left: auto'],
      },
      {
        selector: '.inset-y-0',
        values: ['top: 0', 'bottom: 0'],
      },
      {
        selector: '.inset-x-0',
        values: ['right: 0', 'left: 0'],
      },
      {
        selector: '.inset-y-auto',
        values: ['top: auto', 'bottom: auto'],
      },
      {
        selector: '.inset-x-auto',
        values: ['right: auto', 'left: auto'],
      },
      {
        selector: '.top-0',
        values: ['top: 0'],
      },
      {
        selector: '.right-0',
        values: ['right: 0'],
      },
      {
        selector: '.bottom-0',
        values: ['bottom: 0'],
      },
      {
        selector: '.left-0',
        values: ['left: 0'],
      },
      {
        selector: '.top-auto',
        values: ['top: auto'],
      },
      {
        selector: '.right-auto',
        values: ['right: auto'],
      },
      {
        selector: '.bottom-auto',
        values: ['bottom: auto'],
      },
      {
        selector: '.left-auto',
        values: ['left: auto'],
      },
    ],
  },
  {
    type: 'box-sizing',
    description: 'describes calculation method for calculating size',
    category: 'LAYOUT',
    rules: [
      {
        selector: '.box-border',
        values: ['boxSizing: border-box'],
      },
      {
        selector: '.box-content',
        values: ['boxSizing: content-box'],
      },
    ],
  },
  {
    type: 'clear',
    description: 'controls wrapping of content around element',
    category: 'LAYOUT',
    rules: [
      {
        selector: '.clear-left',
        values: ['clear: left'],
      },
      {
        selector: '.clear-right',
        values: ['clear: right'],
      },
      {
        selector: '.clear-both',
        values: ['clear: both'],
      },
      {
        selector: '.clear-none',
        values: ['clear: none'],
      },
    ],
  },
  {
    type: 'border-width',
    description: 'Sets width for borders in increments of 1px',
    category: 'BORDER',
    rules: [
      {
        selector: '.border-0',
        values: ['borderTopWidth: 0', 'borderBottomWidth: 0', 'borderRightWidth: 0', 'borderLeftWidth: 0'],
      },
      {
        selector: '.border-1',
        values: ['borderTopWidth: 1px', 'borderBottomWidth: 1px', 'borderRightWidth: 1px', 'borderLeftWidth: 1px'],
      },
      {
        selector: '.border-2',
        values: ['borderTopWidth: 2px', 'borderBottomWidth: 2px', 'borderRightWidth: 2px', 'borderLeftWidth: 2px'],
      },
      {
        selector: '.border-4',
        values: ['borderTopWidth: 4px', 'borderBottomWidth: 4px', 'borderRightWidth: 4px', 'borderLeftWidth: 4px'],
      },
      {
        selector: '.border-6',
        values: ['borderTopWidth: 6px', 'borderBottomWidth: 6px', 'borderRightWidth: 6px', 'borderLeftWidth: 6px'],
      },
      {
        selector: '.border-8',
        values: ['borderTopWidth: 8px', 'borderBottomWidth: 8px', 'borderRightWidth: 8px', 'borderLeftWidth: 8px'],
      },
      {
        selector: '.border-12',
        values: ['borderTopWidth: 12px', 'borderBottomWidth: 12px', 'borderRightWidth: 12px', 'borderLeftWidth: 12px'],
      },
      {
        selector: '.border-16',
        values: ['borderTopWidth: 16px', 'borderBottomWidth: 16px', 'borderRightWidth: 16px', 'borderLeftWidth: 16px'],
      },
      {
        selector: '.border',
        values: ['borderTopWidth: 1px', 'borderBottomWidth: 1px', 'borderRightWidth: 1px', 'borderLeftWidth: 1px'],
      },
      {
        selector: '.border-t-0',
        values: ['borderTopWidth: 0'],
      },
      {
        selector: '.border-r-0',
        values: ['borderRightWidth: 0'],
      },
      {
        selector: '.border-b-0',
        values: ['borderBottomWidth: 0'],
      },
      {
        selector: '.border-l-0',
        values: ['borderLeftWidth: 0'],
      },
      {
        selector: '.border-t-1',
        values: ['borderTopWidth: 1px'],
      },
      {
        selector: '.border-r-1',
        values: ['borderRightWidth: 1px'],
      },
      {
        selector: '.border-b-1',
        values: ['borderBottomWidth: 1px'],
      },
      {
        selector: '.border-l-1',
        values: ['borderLeftWidth: 1px'],
      },
      {
        selector: '.border-t-2',
        values: ['borderTopWidth: 2px'],
      },
      {
        selector: '.border-r-2',
        values: ['borderRightWidth: 2px'],
      },
      {
        selector: '.border-b-2',
        values: ['borderBottomWidth: 2px'],
      },
      {
        selector: '.border-l-2',
        values: ['borderLeftWidth: 2px'],
      },
      {
        selector: '.border-t-4',
        values: ['borderTopWidth: 4px'],
      },
      {
        selector: '.border-r-4',
        values: ['borderRightWidth: 4px'],
      },
      {
        selector: '.border-b-4',
        values: ['borderBottomWidth: 4px'],
      },
      {
        selector: '.border-l-4',
        values: ['borderLeftWidth: 4px'],
      },
      {
        selector: '.border-t-6',
        values: ['borderTopWidth: 6px'],
      },
      {
        selector: '.border-r-6',
        values: ['borderRightWidth: 6px'],
      },
      {
        selector: '.border-b-6',
        values: ['borderBottomWidth: 6px'],
      },
      {
        selector: '.border-l-6',
        values: ['borderLeftWidth: 6px'],
      },
      {
        selector: '.border-t-8',
        values: ['borderTopWidth: 8px'],
      },
      {
        selector: '.border-r-8',
        values: ['borderRightWidth: 8px'],
      },
      {
        selector: '.border-b-8',
        values: ['borderBottomWidth: 8px'],
      },
      {
        selector: '.border-l-8',
        values: ['borderLeftWidth: 8px'],
      },
      {
        selector: '.border-t-12',
        values: ['borderTopWidth: 12px'],
      },
      {
        selector: '.border-r-12',
        values: ['borderRightWidth: 12px'],
      },
      {
        selector: '.border-b-12',
        values: ['borderBottomWidth: 12px'],
      },
      {
        selector: '.border-l-12',
        values: ['borderLeftWidth: 12px'],
      },
      {
        selector: '.border-t-16',
        values: ['borderTopWidth: 16px'],
      },
      {
        selector: '.border-r-16',
        values: ['borderRightWidth: 16px'],
      },
      {
        selector: '.border-b-16',
        values: ['borderBottomWidth: 16px'],
      },
      {
        selector: '.border-l-16',
        values: ['borderLeftWidth: 16px'],
      },
      {
        selector: '.border-t',
        values: ['borderTopWidth: 1px'],
      },
      {
        selector: '.border-r',
        values: ['borderRightWidth: 1px'],
      },
      {
        selector: '.border-b',
        values: ['borderBottomWidth: 1px'],
      },
      {
        selector: '.border-l',
        values: ['borderLeftWidth: 1px'],
      },
    ],
  },
  {
    type: 'border-color',
    description: 'Sets color for borders',
    category: 'BORDER',
    variantConfigKey: 'borderColor',
    rules: [
      {
        selector: '.border-transparent',
        values: ['borderColor: transparent'],
      },
      {
        selector: '.border-current',
        values: ['borderColor: currentColor'],
      },
      {
        selector: '.spr-hover',
        values: ['borderColor: var(--spr-hover, #0828CC)'],
      },
      {
        selector: '.spr-focus-01',
        values: ['borderColor: var(--spr-focus-01, #0828CC)'],
      },
      {
        selector: '.spr-border-01',
        values: ['borderColor: var(--spr-border-01, #F2F2F4)'],
      },
      {
        selector: '.spr-border-02',
        values: ['borderColor: var(--spr-border-02, #ECECEF)'],
      },
      {
        selector: '.spr-border-03',
        values: ['borderColor: var(--spr-border-03, #D7D7DC)'],
      },
      {
        selector: '.spr-border-04',
        values: ['borderColor: var(--spr-border-04, #A0A0A8)'],
      },
      {
        selector: '.spr-border-05',
        values: ['borderColor: var(--spr-border-05, #FFFFFF)'],
      },
      {
        selector: '.spr-border-06',
        values: ['borderColor: var(--spr-border-06, #0A0A14)'],
      },
      {
        selector: '.spr-card-border',
        values: ['borderColor: var(--spr-card-border, #ECECEF)'],
      },
      {
        selector: '.spr-popup-border',
        values: ['borderColor: var(--spr-popup-border, #D7D7DC)'],
      },
      {
        selector: '.spr-tooltip-border',
        values: ['borderColor: var(--spr-tooltip-border, #0A0A14)'],
      },
      {
        selector: '.spr-interactive-focus',
        values: ['borderColor: var(--spr-interactive-focus, #132a86)'],
      },
    ],
  },
  {
    type: 'border-style',
    description: 'Sets style for borders.',
    category: 'BORDER',
    rules: [
      {
        selector: '.border-solid',
        values: ['borderStyle: solid'],
      },
      {
        selector: '.border-dashed',
        values: ['borderStyle: dashed'],
      },
      {
        selector: '.border-dotted',
        values: ['borderStyle: dotted'],
      },
      {
        selector: '.border-double',
        values: ['borderStyle: double'],
      },
      {
        selector: '.border-none',
        values: ['borderStyle: none'],
      },
    ],
  },
  {
    type: 'border-radius',
    description: 'Sets border radius',
    category: 'BORDER',
    rules: [
      {
        selector: '.rounded-0',
        values: [
          'borderTopLeftRadius: 0',
          'borderTopRightRadius: 0',
          'borderBottomLeftRadius: 0',
          'borderBottomRightRadius: 0',
        ],
      },
      {
        selector: '.rounded-1',
        values: [
          'borderTopLeftRadius: 1px',
          'borderTopRightRadius: 1px',
          'borderBottomLeftRadius: 1px',
          'borderBottomRightRadius: 1px',
        ],
      },
      {
        selector: '.rounded-2',
        values: [
          'borderTopLeftRadius: 2px',
          'borderTopRightRadius: 2px',
          'borderBottomLeftRadius: 2px',
          'borderBottomRightRadius: 2px',
        ],
      },
      {
        selector: '.rounded-4',
        values: [
          'borderTopLeftRadius: 4px',
          'borderTopRightRadius: 4px',
          'borderBottomLeftRadius: 4px',
          'borderBottomRightRadius: 4px',
        ],
      },
      {
        selector: '.rounded-6',
        values: [
          'borderTopLeftRadius: 6px',
          'borderTopRightRadius: 6px',
          'borderBottomLeftRadius: 6px',
          'borderBottomRightRadius: 6px',
        ],
      },
      {
        selector: '.rounded-8',
        values: [
          'borderTopLeftRadius: 8px',
          'borderTopRightRadius: 8px',
          'borderBottomLeftRadius: 8px',
          'borderBottomRightRadius: 8px',
        ],
      },
      {
        selector: '.rounded-12',
        values: [
          'borderTopLeftRadius: 12px',
          'borderTopRightRadius: 12px',
          'borderBottomLeftRadius: 12px',
          'borderBottomRightRadius: 12px',
        ],
      },
      {
        selector: '.rounded-16',
        values: [
          'borderTopLeftRadius: 16px',
          'borderTopRightRadius: 16px',
          'borderBottomLeftRadius: 16px',
          'borderBottomRightRadius: 16px',
        ],
      },
      {
        selector: '.rounded-none',
        values: [
          'borderTopLeftRadius: 0',
          'borderTopRightRadius: 0',
          'borderBottomLeftRadius: 0',
          'borderBottomRightRadius: 0',
        ],
      },
      {
        selector: '.rounded-sm',
        values: [
          'borderTopLeftRadius: 0.125rem',
          'borderTopRightRadius: 0.125rem',
          'borderBottomLeftRadius: 0.125rem',
          'borderBottomRightRadius: 0.125rem',
        ],
      },
      {
        selector: '.rounded-md',
        values: [
          'borderTopLeftRadius: 0.375rem',
          'borderTopRightRadius: 0.375rem',
          'borderBottomLeftRadius: 0.375rem',
          'borderBottomRightRadius: 0.375rem',
        ],
      },
      {
        selector: '.rounded-lg',
        values: [
          'borderTopLeftRadius: 0.5rem',
          'borderTopRightRadius: 0.5rem',
          'borderBottomLeftRadius: 0.5rem',
          'borderBottomRightRadius: 0.5rem',
        ],
      },
      {
        selector: '.rounded',
        values: [
          'borderTopLeftRadius: 1px',
          'borderTopRightRadius: 1px',
          'borderBottomLeftRadius: 1px',
          'borderBottomRightRadius: 1px',
        ],
      },
      {
        selector: '.rounded-full',
        values: [
          'borderTopLeftRadius: 100%',
          'borderTopRightRadius: 100%',
          'borderBottomLeftRadius: 100%',
          'borderBottomRightRadius: 100%',
        ],
      },
      {
        selector: '.rounded-t-0',
        values: ['borderTopLeftRadius: 0', 'borderTopRightRadius: 0'],
      },
      {
        selector: '.rounded-r-0',
        values: ['borderTopRightRadius: 0', 'borderBottomRightRadius: 0'],
      },
      {
        selector: '.rounded-b-0',
        values: ['borderBottomRightRadius: 0', 'borderBottomLeftRadius: 0'],
      },
      {
        selector: '.rounded-l-0',
        values: ['borderTopLeftRadius: 0', 'borderBottomLeftRadius: 0'],
      },
      {
        selector: '.rounded-t-1',
        values: ['borderTopLeftRadius: 1px', 'borderTopRightRadius: 1px'],
      },
      {
        selector: '.rounded-r-1',
        values: ['borderTopRightRadius: 1px', 'borderBottomRightRadius: 1px'],
      },
      {
        selector: '.rounded-b-1',
        values: ['borderBottomRightRadius: 1px', 'borderBottomLeftRadius: 1px'],
      },
      {
        selector: '.rounded-l-1',
        values: ['borderTopLeftRadius: 1px', 'borderBottomLeftRadius: 1px'],
      },
      {
        selector: '.rounded-t-2',
        values: ['borderTopLeftRadius: 2px', 'borderTopRightRadius: 2px'],
      },
      {
        selector: '.rounded-r-2',
        values: ['borderTopRightRadius: 2px', 'borderBottomRightRadius: 2px'],
      },
      {
        selector: '.rounded-b-2',
        values: ['borderBottomRightRadius: 2px', 'borderBottomLeftRadius: 2px'],
      },
      {
        selector: '.rounded-l-2',
        values: ['borderTopLeftRadius: 2px', 'borderBottomLeftRadius: 2px'],
      },
      {
        selector: '.rounded-t-4',
        values: ['borderTopLeftRadius: 4px', 'borderTopRightRadius: 4px'],
      },
      {
        selector: '.rounded-r-4',
        values: ['borderTopRightRadius: 4px', 'borderBottomRightRadius: 4px'],
      },
      {
        selector: '.rounded-b-4',
        values: ['borderBottomRightRadius: 4px', 'borderBottomLeftRadius: 4px'],
      },
      {
        selector: '.rounded-l-4',
        values: ['borderTopLeftRadius: 4px', 'borderBottomLeftRadius: 4px'],
      },
      {
        selector: '.rounded-t-6',
        values: ['borderTopLeftRadius: 6px', 'borderTopRightRadius: 6px'],
      },
      {
        selector: '.rounded-r-6',
        values: ['borderTopRightRadius: 6px', 'borderBottomRightRadius: 6px'],
      },
      {
        selector: '.rounded-b-6',
        values: ['borderBottomRightRadius: 6px', 'borderBottomLeftRadius: 6px'],
      },
      {
        selector: '.rounded-l-6',
        values: ['borderTopLeftRadius: 6px', 'borderBottomLeftRadius: 6px'],
      },
      {
        selector: '.rounded-t-8',
        values: ['borderTopLeftRadius: 8px', 'borderTopRightRadius: 8px'],
      },
      {
        selector: '.rounded-r-8',
        values: ['borderTopRightRadius: 8px', 'borderBottomRightRadius: 8px'],
      },
      {
        selector: '.rounded-b-8',
        values: ['borderBottomRightRadius: 8px', 'borderBottomLeftRadius: 8px'],
      },
      {
        selector: '.rounded-l-8',
        values: ['borderTopLeftRadius: 8px', 'borderBottomLeftRadius: 8px'],
      },
      {
        selector: '.rounded-t-12',
        values: ['borderTopLeftRadius: 12px', 'borderTopRightRadius: 12px'],
      },
      {
        selector: '.rounded-r-12',
        values: ['borderTopRightRadius: 12px', 'borderBottomRightRadius: 12px'],
      },
      {
        selector: '.rounded-b-12',
        values: ['borderBottomRightRadius: 12px', 'borderBottomLeftRadius: 12px'],
      },
      {
        selector: '.rounded-l-12',
        values: ['borderTopLeftRadius: 12px', 'borderBottomLeftRadius: 12px'],
      },
      {
        selector: '.rounded-t-16',
        values: ['borderTopLeftRadius: 16px', 'borderTopRightRadius: 16px'],
      },
      {
        selector: '.rounded-r-16',
        values: ['borderTopRightRadius: 16px', 'borderBottomRightRadius: 16px'],
      },
      {
        selector: '.rounded-b-16',
        values: ['borderBottomRightRadius: 16px', 'borderBottomLeftRadius: 16px'],
      },
      {
        selector: '.rounded-l-16',
        values: ['borderTopLeftRadius: 16px', 'borderBottomLeftRadius: 16px'],
      },
      {
        selector: '.rounded-t-none',
        values: ['borderTopLeftRadius: 0', 'borderTopRightRadius: 0'],
      },
      {
        selector: '.rounded-r-none',
        values: ['borderTopRightRadius: 0', 'borderBottomRightRadius: 0'],
      },
      {
        selector: '.rounded-b-none',
        values: ['borderBottomRightRadius: 0', 'borderBottomLeftRadius: 0'],
      },
      {
        selector: '.rounded-l-none',
        values: ['borderTopLeftRadius: 0', 'borderBottomLeftRadius: 0'],
      },
      {
        selector: '.rounded-t-sm',
        values: ['borderTopLeftRadius: 0.125rem', 'borderTopRightRadius: 0.125rem'],
      },
      {
        selector: '.rounded-r-sm',
        values: ['borderTopRightRadius: 0.125rem', 'borderBottomRightRadius: 0.125rem'],
      },
      {
        selector: '.rounded-b-sm',
        values: ['borderBottomRightRadius: 0.125rem', 'borderBottomLeftRadius: 0.125rem'],
      },
      {
        selector: '.rounded-l-sm',
        values: ['borderTopLeftRadius: 0.125rem', 'borderBottomLeftRadius: 0.125rem'],
      },
      {
        selector: '.rounded-t-md',
        values: ['borderTopLeftRadius: 0.375rem', 'borderTopRightRadius: 0.375rem'],
      },
      {
        selector: '.rounded-r-md',
        values: ['borderTopRightRadius: 0.375rem', 'borderBottomRightRadius: 0.375rem'],
      },
      {
        selector: '.rounded-b-md',
        values: ['borderBottomRightRadius: 0.375rem', 'borderBottomLeftRadius: 0.375rem'],
      },
      {
        selector: '.rounded-l-md',
        values: ['borderTopLeftRadius: 0.375rem', 'borderBottomLeftRadius: 0.375rem'],
      },
      {
        selector: '.rounded-t-lg',
        values: ['borderTopLeftRadius: 0.5rem', 'borderTopRightRadius: 0.5rem'],
      },
      {
        selector: '.rounded-r-lg',
        values: ['borderTopRightRadius: 0.5rem', 'borderBottomRightRadius: 0.5rem'],
      },
      {
        selector: '.rounded-b-lg',
        values: ['borderBottomRightRadius: 0.5rem', 'borderBottomLeftRadius: 0.5rem'],
      },
      {
        selector: '.rounded-l-lg',
        values: ['borderTopLeftRadius: 0.5rem', 'borderBottomLeftRadius: 0.5rem'],
      },
      {
        selector: '.rounded-t',
        values: ['borderTopLeftRadius: 1px', 'borderTopRightRadius: 1px'],
      },
      {
        selector: '.rounded-r',
        values: ['borderTopRightRadius: 1px', 'borderBottomRightRadius: 1px'],
      },
      {
        selector: '.rounded-b',
        values: ['borderBottomRightRadius: 1px', 'borderBottomLeftRadius: 1px'],
      },
      {
        selector: '.rounded-l',
        values: ['borderTopLeftRadius: 1px', 'borderBottomLeftRadius: 1px'],
      },
      {
        selector: '.rounded-t-full',
        values: ['borderTopLeftRadius: 100%', 'borderTopRightRadius: 100%'],
      },
      {
        selector: '.rounded-r-full',
        values: ['borderTopRightRadius: 100%', 'borderBottomRightRadius: 100%'],
      },
      {
        selector: '.rounded-b-full',
        values: ['borderBottomRightRadius: 100%', 'borderBottomLeftRadius: 100%'],
      },
      {
        selector: '.rounded-l-full',
        values: ['borderTopLeftRadius: 100%', 'borderBottomLeftRadius: 100%'],
      },
      {
        selector: '.rounded-tl-0',
        values: ['borderTopLeftRadius: 0'],
      },
      {
        selector: '.rounded-tr-0',
        values: ['borderTopRightRadius: 0'],
      },
      {
        selector: '.rounded-br-0',
        values: ['borderBottomRightRadius: 0'],
      },
      {
        selector: '.rounded-bl-0',
        values: ['borderBottomLeftRadius: 0'],
      },
      {
        selector: '.rounded-tl-1',
        values: ['borderTopLeftRadius: 1px'],
      },
      {
        selector: '.rounded-tr-1',
        values: ['borderTopRightRadius: 1px'],
      },
      {
        selector: '.rounded-br-1',
        values: ['borderBottomRightRadius: 1px'],
      },
      {
        selector: '.rounded-bl-1',
        values: ['borderBottomLeftRadius: 1px'],
      },
      {
        selector: '.rounded-tl-2',
        values: ['borderTopLeftRadius: 2px'],
      },
      {
        selector: '.rounded-tr-2',
        values: ['borderTopRightRadius: 2px'],
      },
      {
        selector: '.rounded-br-2',
        values: ['borderBottomRightRadius: 2px'],
      },
      {
        selector: '.rounded-bl-2',
        values: ['borderBottomLeftRadius: 2px'],
      },
      {
        selector: '.rounded-tl-4',
        values: ['borderTopLeftRadius: 4px'],
      },
      {
        selector: '.rounded-tr-4',
        values: ['borderTopRightRadius: 4px'],
      },
      {
        selector: '.rounded-br-4',
        values: ['borderBottomRightRadius: 4px'],
      },
      {
        selector: '.rounded-bl-4',
        values: ['borderBottomLeftRadius: 4px'],
      },
      {
        selector: '.rounded-tl-6',
        values: ['borderTopLeftRadius: 6px'],
      },
      {
        selector: '.rounded-tr-6',
        values: ['borderTopRightRadius: 6px'],
      },
      {
        selector: '.rounded-br-6',
        values: ['borderBottomRightRadius: 6px'],
      },
      {
        selector: '.rounded-bl-6',
        values: ['borderBottomLeftRadius: 6px'],
      },
      {
        selector: '.rounded-tl-8',
        values: ['borderTopLeftRadius: 8px'],
      },
      {
        selector: '.rounded-tr-8',
        values: ['borderTopRightRadius: 8px'],
      },
      {
        selector: '.rounded-br-8',
        values: ['borderBottomRightRadius: 8px'],
      },
      {
        selector: '.rounded-bl-8',
        values: ['borderBottomLeftRadius: 8px'],
      },
      {
        selector: '.rounded-tl-12',
        values: ['borderTopLeftRadius: 12px'],
      },
      {
        selector: '.rounded-tr-12',
        values: ['borderTopRightRadius: 12px'],
      },
      {
        selector: '.rounded-br-12',
        values: ['borderBottomRightRadius: 12px'],
      },
      {
        selector: '.rounded-bl-12',
        values: ['borderBottomLeftRadius: 12px'],
      },
      {
        selector: '.rounded-tl-16',
        values: ['borderTopLeftRadius: 16px'],
      },
      {
        selector: '.rounded-tr-16',
        values: ['borderTopRightRadius: 16px'],
      },
      {
        selector: '.rounded-br-16',
        values: ['borderBottomRightRadius: 16px'],
      },
      {
        selector: '.rounded-bl-16',
        values: ['borderBottomLeftRadius: 16px'],
      },
      {
        selector: '.rounded-tl-none',
        values: ['borderTopLeftRadius: 0'],
      },
      {
        selector: '.rounded-tr-none',
        values: ['borderTopRightRadius: 0'],
      },
      {
        selector: '.rounded-br-none',
        values: ['borderBottomRightRadius: 0'],
      },
      {
        selector: '.rounded-bl-none',
        values: ['borderBottomLeftRadius: 0'],
      },
      {
        selector: '.rounded-tl-sm',
        values: ['borderTopLeftRadius: 0.125rem'],
      },
      {
        selector: '.rounded-tr-sm',
        values: ['borderTopRightRadius: 0.125rem'],
      },
      {
        selector: '.rounded-br-sm',
        values: ['borderBottomRightRadius: 0.125rem'],
      },
      {
        selector: '.rounded-bl-sm',
        values: ['borderBottomLeftRadius: 0.125rem'],
      },
      {
        selector: '.rounded-tl-md',
        values: ['borderTopLeftRadius: 0.375rem'],
      },
      {
        selector: '.rounded-tr-md',
        values: ['borderTopRightRadius: 0.375rem'],
      },
      {
        selector: '.rounded-br-md',
        values: ['borderBottomRightRadius: 0.375rem'],
      },
      {
        selector: '.rounded-bl-md',
        values: ['borderBottomLeftRadius: 0.375rem'],
      },
      {
        selector: '.rounded-tl-lg',
        values: ['borderTopLeftRadius: 0.5rem'],
      },
      {
        selector: '.rounded-tr-lg',
        values: ['borderTopRightRadius: 0.5rem'],
      },
      {
        selector: '.rounded-br-lg',
        values: ['borderBottomRightRadius: 0.5rem'],
      },
      {
        selector: '.rounded-bl-lg',
        values: ['borderBottomLeftRadius: 0.5rem'],
      },
      {
        selector: '.rounded-tl',
        values: ['borderTopLeftRadius: 1px'],
      },
      {
        selector: '.rounded-tr',
        values: ['borderTopRightRadius: 1px'],
      },
      {
        selector: '.rounded-br',
        values: ['borderBottomRightRadius: 1px'],
      },
      {
        selector: '.rounded-bl',
        values: ['borderBottomLeftRadius: 1px'],
      },
      {
        selector: '.rounded-tl-full',
        values: ['borderTopLeftRadius: 100%'],
      },
      {
        selector: '.rounded-tr-full',
        values: ['borderTopRightRadius: 100%'],
      },
      {
        selector: '.rounded-br-full',
        values: ['borderBottomRightRadius: 100%'],
      },
      {
        selector: '.rounded-bl-full',
        values: ['borderBottomLeftRadius: 100%'],
      },
    ],
  },
  {
    type: 'border-opacity',
    description: 'Sets opacity for border',
    category: 'BORDER',
    rules: [
      {
        selector: '.border-opacity-0',
        values: ['-BorderOpacity: 0'],
      },
      {
        selector: '.border-opacity-5',
        values: ['-BorderOpacity: 0.05'],
      },
      {
        selector: '.border-opacity-10',
        values: ['-BorderOpacity: 0.1'],
      },
      {
        selector: '.border-opacity-15',
        values: ['-BorderOpacity: 0.15'],
      },
      {
        selector: '.border-opacity-20',
        values: ['-BorderOpacity: 0.2'],
      },
      {
        selector: '.border-opacity-25',
        values: ['-BorderOpacity: 0.25'],
      },
      {
        selector: '.border-opacity-30',
        values: ['-BorderOpacity: 0.3'],
      },
      {
        selector: '.border-opacity-40',
        values: ['-BorderOpacity: 0.4'],
      },
      {
        selector: '.border-opacity-50',
        values: ['-BorderOpacity: 0.5'],
      },
      {
        selector: '.border-opacity-60',
        values: ['-BorderOpacity: 0.6'],
      },
      {
        selector: '.border-opacity-70',
        values: ['-BorderOpacity: 0.7'],
      },
      {
        selector: '.border-opacity-75',
        values: ['-BorderOpacity: 0.75'],
      },
      {
        selector: '.border-opacity-80',
        values: ['-BorderOpacity: 0.8'],
      },
      {
        selector: '.border-opacity-90',
        values: ['-BorderOpacity: 0.9'],
      },
      {
        selector: '.border-opacity-100',
        values: ['-BorderOpacity: 1'],
      },
    ],
  },
  {
    type: 'border-collapse',
    description: '',
    category: 'BORDER',
    rules: [
      {
        selector: '.border-collapse',
        values: ['borderCollapse: collapse'],
      },
      {
        selector: '.border-separate',
        values: ['borderCollapse: separate'],
      },
    ],
  },
  {
    type: 'font-family',
    description: '',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.font-sans',
        values: [
          'fontFamily: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        ],
      },
      {
        selector: '.font-serif',
        values: ['fontFamily: Georgia, Cambria, "Times New Roman", Times, serif'],
      },
      {
        selector: '.font-mono',
        values: ['fontFamily: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'],
      },
    ],
  },
  {
    type: 'text-color',
    description: '',
    category: 'TYPOGRAPHY',
    variantConfigKey: 'textColor',
    rules: [
      {
        selector: '.placeholder-transparent::placeholder',
        values: ['color: transparent'],
      },
      {
        selector: '.placeholder-current::placeholder',
        values: ['color: currentColor'],
      },
      {
        selector: '.text-transparent',
        values: ['color: transparent'],
      },
      {
        selector: '.text-current',
        values: ['color: currentColor'],
      },
      {
        selector: '.spr-link',
        values: ['color: var(--spr-link, #0828CC)'],
      },
      {
        selector: '.spr-text-01',
        values: ['color: var(--spr-text-01, #0A0A14)'],
      },
      {
        selector: '.spr-text-02',
        values: ['color: var(--spr-text-02, #434350)'],
      },
      {
        selector: '.spr-text-03',
        values: ['color: var(--spr-text-03, #646470)'],
      },
      {
        selector: '.spr-text-04',
        values: ['color: var(--spr-text-04, #0828CC)'],
      },
      {
        selector: '.spr-text-05',
        values: ['color: var(--spr-text-05, #FFFFFF)'],
      },
      {
        selector: '.spr-text-06',
        values: ['color: var(--spr-text-06, #FFFFFF)'],
      },
      {
        selector: '.spr-text-placeholder',
        values: ['color: var(--spr-text-placeholder, #646470)'],
      },
      {
        selector: '.spr-support-error-text',
        values: ['color: var(--spr-support-error-text, #C6202B)'],
      },
      {
        selector: '.spr-support-success-text',
        values: ['color: var(--spr-support-success-text, #20963a)'],
      },
      {
        selector: '.spr-support-warning-text',
        values: ['color: var(--spr-support-warning-text, #DEAC09)'],
      },
      {
        selector: '.nav-text-01',
        values: ['color: var(--nav-text-01, rgba(255, 255, 255, 0.9))'],
      },
    ],
  },
  {
    type: 'font-size',
    description: 'Sets the font size',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.text-10',
        values: ['fontSize: 1rem'],
      },
      {
        selector: '.text-11',
        values: ['fontSize: 1.1rem'],
      },
      {
        selector: '.text-12',
        values: ['fontSize: 1.2rem'],
      },
      {
        selector: '.text-13',
        values: ['fontSize: 1.3rem'],
      },
      {
        selector: '.text-14',
        values: ['fontSize: 1.4rem'],
      },
      {
        selector: '.text-16',
        values: ['fontSize: 1.6rem'],
      },
      {
        selector: '.text-20',
        values: ['fontSize: 2rem'],
      },
      {
        selector: '.text-24',
        values: ['fontSize: 2.4rem'],
      },
      {
        selector: '.text-32',
        values: ['fontSize: 3.2rem'],
      },
      {
        selector: '.text-40',
        values: ['fontSize: 4rem'],
      },
      {
        selector: '.text-56',
        values: ['fontSize: 5.6rem'],
      },
      {
        selector: '.text-72',
        values: ['fontSize: 7.2rem'],
      },
      {
        selector: '.typography-h1',
        values: ['fontSize: 3.2rem', 'lineHeight: 4rem', 'fontWeight: 600'],
      },
      {
        selector: '.typography-h2',
        values: ['fontSize: 2.4rem', 'lineHeight: 3.2rem', 'fontWeight: 600'],
      },
      {
        selector: '.typography-h3',
        values: ['fontSize: 2rem', 'lineHeight: 2.8rem', 'fontWeight: 600'],
      },
      {
        selector: '.typography-h4',
        values: ['fontSize: 1.8rem', 'lineHeight: 2.4rem', 'fontWeight: 600'],
      },
      {
        selector: '.typography-h5',
        values: ['fontSize: 1.6rem', 'lineHeight: 2.2rem', 'fontWeight: 600'],
      },
      {
        selector: '.typography-h6',
        values: ['fontSize: 1.4rem', 'lineHeight: 2rem', 'fontWeight: 600'],
      },
      {
        selector: '.typography-h7',
        values: ['fontSize: 1.3rem', 'lineHeight: 2.2rem', 'fontWeight: 600'],
      },
      {
        selector: '.typography-b1',
        values: ['fontSize: 1.3rem', 'lineHeight: 1.8rem', 'fontWeight: 600'],
      },
      {
        selector: '.typography-b2',
        values: ['fontSize: 1.2rem', 'lineHeight: 1.6rem', 'fontWeight: 600'],
      },
      {
        selector: '.typography-bl1',
        values: ['fontSize: 1.4rem', 'lineHeight: 2.2rem', 'fontWeight: 400'],
      },
      {
        selector: '.typography-bl2',
        values: ['fontSize: 1.3rem', 'lineHeight: 2rem', 'fontWeight: 400'],
      },
      {
        selector: '.typography-bl3',
        values: ['fontSize: 1.2rem', 'lineHeight: 2rem', 'fontWeight: 400'],
      },
      {
        selector: '.typography-bs1',
        values: ['fontSize: 1.4rem', 'lineHeight: 2rem', 'fontWeight: 400'],
      },
      {
        selector: '.typography-bs2',
        values: ['fontSize: 1.3rem', 'lineHeight: 2rem', 'fontWeight: 400'],
      },
      {
        selector: '.typography-bs3',
        values: ['fontSize: 1.2rem', 'lineHeight: 2rem', 'fontWeight: 400'],
      },
      {
        selector: '.typography-l1',
        values: ['fontSize: 1.3rem', 'lineHeight: 1.8rem', 'fontWeight: 400'],
      },
      {
        selector: '.typography-l2',
        values: ['fontSize: 1.2rem', 'lineHeight: 1.6rem', 'fontWeight: 400'],
      },
      {
        selector: '.typography-l3',
        values: ['fontSize: 1.1rem', 'lineHeight: 1.6rem', 'fontWeight: 400'],
      },
      {
        selector: '.typography-l4',
        values: ['fontSize: 1rem', 'lineHeight: 1.4rem', 'fontWeight: 400'],
      },
    ],
  },
  {
    type: 'font-style',
    description: 'font-style',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.italic',
        values: ['fontStyle: italic'],
      },
      {
        selector: '.not-italic',
        values: ['fontStyle: normal'],
      },
    ],
  },
  {
    type: 'font-weight',
    description: 'Sets the font weight',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.font-300',
        values: ['fontWeight: 300'],
      },
      {
        selector: '.font-400',
        values: ['fontWeight: 400'],
      },
      {
        selector: '.font-500',
        values: ['fontWeight: 500'],
      },
      {
        selector: '.font-600',
        values: ['fontWeight: 600'],
      },
      {
        selector: '.font-700',
        values: ['fontWeight: 700'],
      },
      {
        selector: '.font-hairline',
        values: ['fontWeight: 100'],
      },
      {
        selector: '.font-thin',
        values: ['fontWeight: 200'],
      },
      {
        selector: '.font-light',
        values: ['fontWeight: 300'],
      },
      {
        selector: '.font-normal',
        values: ['fontWeight: 400'],
      },
      {
        selector: '.font-regular',
        values: ['fontWeight: 400'],
      },
      {
        selector: '.font-medium',
        values: ['fontWeight: 500'],
      },
      {
        selector: '.font-semibold',
        values: ['fontWeight: 600'],
      },
      {
        selector: '.font-bold',
        values: ['fontWeight: 700'],
      },
      {
        selector: '.font-extrabold',
        values: ['fontWeight: 800'],
      },
      {
        selector: '.font-black',
        values: ['fontWeight: 900'],
      },
    ],
  },
  {
    type: 'font-smoothing',
    description: '',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.antialiased',
        values: ['WebkitFontSmoothing: antialiased', 'MozOsxFontSmoothing: grayscale'],
      },
      {
        selector: '.subpixel-antialiased',
        values: ['WebkitFontSmoothing: auto', 'MozOsxFontSmoothing: auto'],
      },
    ],
  },
  {
    type: 'letter-spacing',
    description: 'Sets the spacing between letters',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.tracking-tighter',
        values: ['letterSpacing: -0.05em'],
      },
      {
        selector: '.tracking-tight',
        values: ['letterSpacing: -0.025em'],
      },
      {
        selector: '.tracking-normal',
        values: ['letterSpacing: 0'],
      },
      {
        selector: '.tracking-wide',
        values: ['letterSpacing: 0.025em'],
      },
      {
        selector: '.tracking-wider',
        values: ['letterSpacing: 0.05em'],
      },
      {
        selector: '.tracking-widest',
        values: ['letterSpacing: 0.1em'],
      },
    ],
  },
  {
    type: 'line-height',
    description: 'Sets the line height',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.leading-3',
        values: ['lineHeight: .75rem'],
      },
      {
        selector: '.leading-4',
        values: ['lineHeight: 1rem'],
      },
      {
        selector: '.leading-5',
        values: ['lineHeight: 1.25rem'],
      },
      {
        selector: '.leading-6',
        values: ['lineHeight: 1.5rem'],
      },
      {
        selector: '.leading-7',
        values: ['lineHeight: 1.75rem'],
      },
      {
        selector: '.leading-8',
        values: ['lineHeight: 2rem'],
      },
      {
        selector: '.leading-9',
        values: ['lineHeight: 2.25rem'],
      },
      {
        selector: '.leading-10',
        values: ['lineHeight: 2.5rem'],
      },
      {
        selector: '.leading-none',
        values: ['lineHeight: 1'],
      },
      {
        selector: '.leading-tight',
        values: ['lineHeight: 1.25'],
      },
      {
        selector: '.leading-snug',
        values: ['lineHeight: 1.375'],
      },
      {
        selector: '.leading-normal',
        values: ['lineHeight: 1.5'],
      },
      {
        selector: '.leading-relaxed',
        values: ['lineHeight: 1.625'],
      },
      {
        selector: '.leading-loose',
        values: ['lineHeight: 2'],
      },
    ],
  },
  {
    type: 'list-style-type',
    description: 'Sets the bullet style of a list.',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.list-none',
        values: ['listStyleType: none'],
      },
      {
        selector: '.list-disc',
        values: ['listStyleType: disc'],
      },
      {
        selector: '.list-decimal',
        values: ['listStyleType: decimal'],
      },
    ],
  },
  {
    type: 'list-style-position',
    description: "Sets the position of a list's bullets",
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.list-inside',
        values: ['listStylePosition: inside'],
      },
      {
        selector: '.list-outside',
        values: ['listStylePosition: outside'],
      },
    ],
  },
  {
    type: 'text-align',
    description: 'Sets the alignment of text',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.text-left',
        values: ['textAlign: left'],
      },
      {
        selector: '.text-center',
        values: ['textAlign: center'],
      },
      {
        selector: '.text-right',
        values: ['textAlign: right'],
      },
      {
        selector: '.text-justify',
        values: ['textAlign: justify'],
      },
    ],
  },
  {
    type: 'text-decoration',
    description: 'text-decoration',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.underline',
        values: ['textDecoration: underline'],
      },
      {
        selector: '.line-through',
        values: ['textDecoration: line-through'],
      },
      {
        selector: '.no-underline',
        values: ['textDecoration: none'],
      },
    ],
  },
  {
    type: 'vertical-align',
    description: 'Sets the vertical alignment of an inline or table-cell box.',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.align-baseline',
        values: ['verticalAlign: baseline'],
      },
      {
        selector: '.align-top',
        values: ['verticalAlign: top'],
      },
      {
        selector: '.align-middle',
        values: ['verticalAlign: middle'],
      },
      {
        selector: '.align-bottom',
        values: ['verticalAlign: bottom'],
      },
      {
        selector: '.align-text-top',
        values: ['verticalAlign: text-top'],
      },
      {
        selector: '.align-text-bottom',
        values: ['verticalAlign: text-bottom'],
      },
    ],
  },
  {
    type: 'whitespace',
    description: 'Sets the whitespace of an element',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.whitespace-normal',
        values: ['whiteSpace: normal'],
      },
      {
        selector: '.whitespace-no-wrap',
        values: ['whiteSpace: nowrap'],
      },
      {
        selector: '.whitespace-pre',
        values: ['whiteSpace: pre'],
      },
      {
        selector: '.whitespace-pre-line',
        values: ['whiteSpace: pre-line'],
      },
      {
        selector: '.whitespace-pre-wrap',
        values: ['whiteSpace: pre-wrap'],
      },
    ],
  },
  {
    type: 'word-break',
    description: 'Sets the word breaks of an element',
    category: 'TYPOGRAPHY',
    more: true,
    rules: [
      {
        selector: '.break-all',
        values: ['wordBreak: break-all'],
      },
    ],
  },
  {
    type: 'text-transform',
    description: 'text-transform',
    category: 'TYPOGRAPHY',
    more: true,
    rules: [
      {
        selector: '.uppercase',
        values: ['textTransform: uppercase'],
      },
      {
        selector: '.lowercase',
        values: ['textTransform: lowercase'],
      },
      {
        selector: '.capitalize',
        values: ['textTransform: capitalize'],
      },
      {
        selector: '.normal-case',
        values: ['textTransform: none'],
      },
    ],
  },
  {
    type: 'word',
    description: '',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.break-normal',
        values: ['wordWrap: normal', 'overflowWrap: normal', 'wordBreak: normal'],
      },
      {
        selector: '.break-words',
        values: ['wordWrap: break-word', 'overflowWrap: break-word'],
      },
      {
        selector: '.break-all',
        values: ['wordBreak: break-all'],
      },
      {
        selector: '.truncate',
        values: ['overflow: hidden', 'textOverflow: ellipsis', 'whiteSpace: nowrap'],
      },
    ],
  },
  {
    type: 'whitespace',
    description: '',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.whitespace-normal',
        values: ['whiteSpace: normal'],
      },
      {
        selector: '.whitespace-no-wrap',
        values: ['whiteSpace: nowrap'],
      },
      {
        selector: '.whitespace-pre',
        values: ['whiteSpace: pre'],
      },
      {
        selector: '.whitespace-pre-line',
        values: ['whiteSpace: pre-line'],
      },
      {
        selector: '.whitespace-pre-wrap',
        values: ['whiteSpace: pre-wrap'],
      },
    ],
  },
  {
    type: 'user-select',
    description: '',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.select-none',
        values: ['userSelect: none'],
      },
      {
        selector: '.select-text',
        values: ['userSelect: text'],
      },
      {
        selector: '.select-all',
        values: ['userSelect: all'],
      },
      {
        selector: '.select-auto',
        values: ['userSelect: auto'],
      },
    ],
  },
  {
    type: 'placeholder-opacity',
    description: 'Sets opacity of placeholder',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.placeholder-opacity-0::placeholder',
        values: ['-PlaceholderOpacity: 0'],
      },
      {
        selector: '.placeholder-opacity-5::placeholder',
        values: ['-PlaceholderOpacity: 0.05'],
      },
      {
        selector: '.placeholder-opacity-10::placeholder',
        values: ['-PlaceholderOpacity: 0.1'],
      },
      {
        selector: '.placeholder-opacity-15::placeholder',
        values: ['-PlaceholderOpacity: 0.15'],
      },
      {
        selector: '.placeholder-opacity-20::placeholder',
        values: ['-PlaceholderOpacity: 0.2'],
      },
      {
        selector: '.placeholder-opacity-25::placeholder',
        values: ['-PlaceholderOpacity: 0.25'],
      },
      {
        selector: '.placeholder-opacity-30::placeholder',
        values: ['-PlaceholderOpacity: 0.3'],
      },
      {
        selector: '.placeholder-opacity-40::placeholder',
        values: ['-PlaceholderOpacity: 0.4'],
      },
      {
        selector: '.placeholder-opacity-50::placeholder',
        values: ['-PlaceholderOpacity: 0.5'],
      },
      {
        selector: '.placeholder-opacity-60::placeholder',
        values: ['-PlaceholderOpacity: 0.6'],
      },
      {
        selector: '.placeholder-opacity-70::placeholder',
        values: ['-PlaceholderOpacity: 0.7'],
      },
      {
        selector: '.placeholder-opacity-75::placeholder',
        values: ['-PlaceholderOpacity: 0.75'],
      },
      {
        selector: '.placeholder-opacity-80::placeholder',
        values: ['-PlaceholderOpacity: 0.8'],
      },
      {
        selector: '.placeholder-opacity-90::placeholder',
        values: ['-PlaceholderOpacity: 0.9'],
      },
      {
        selector: '.placeholder-opacity-100::placeholder',
        values: ['-PlaceholderOpacity: 1'],
      },
    ],
  },
  {
    type: 'line-clamp',
    description: 'Allows limiting of the contents of a block container to the specified number of lines.',
    category: 'TYPOGRAPHY',
    rules: [
      {
        selector: '.line-clamp-1',
        values: ['overflow: hidden', 'display: -webkit-box', 'WebkitBoxOrient: vertical', 'WebkitLineClamp: 1'],
      },
      {
        selector: '.line-clamp-2',
        values: ['overflow: hidden', 'display: -webkit-box', 'WebkitBoxOrient: vertical', 'WebkitLineClamp: 2'],
      },
      {
        selector: '.line-clamp-3',
        values: ['overflow: hidden', 'display: -webkit-box', 'WebkitBoxOrient: vertical', 'WebkitLineClamp: 3'],
      },
      {
        selector: '.line-clamp-4',
        values: ['overflow: hidden', 'display: -webkit-box', 'WebkitBoxOrient: vertical', 'WebkitLineClamp: 4'],
      },
      {
        selector: '.line-clamp-5',
        values: ['overflow: hidden', 'display: -webkit-box', 'WebkitBoxOrient: vertical', 'WebkitLineClamp: 5'],
      },
      {
        selector: '.line-clamp-6',
        values: ['overflow: hidden', 'display: -webkit-box', 'WebkitBoxOrient: vertical', 'WebkitLineClamp: 6'],
      },
      {
        selector: '.line-clamp-none',
        values: ['overflow: hidden', 'display: -webkit-box', 'WebkitBoxOrient: vertical', 'WebkitLineClamp: unset'],
      },
    ],
  },
  {
    type: 'flex-direction',
    description: 'flex-direction',
    category: 'FLEXBOX',
    variantConfigKey: 'flexDirection',
    rules: [
      {
        selector: '.flex-row',
        values: ['flexDirection: row'],
      },
      {
        selector: '.flex-row-reverse',
        values: ['flexDirection: row-reverse'],
      },
      {
        selector: '.flex-col',
        values: ['flexDirection: column'],
      },
      {
        selector: '.flex-col-reverse',
        values: ['flexDirection: column-reverse'],
      },
    ],
  },
  {
    type: 'flex-wrap',
    description: 'flex-wrap',
    category: 'FLEXBOX',
    rules: [
      {
        selector: '.flex-wrap',
        values: ['flexWrap: wrap'],
      },
      {
        selector: '.flex-wrap-reverse',
        values: ['flexWrap: wrap-reverse'],
      },
      {
        selector: '.flex-no-wrap',
        values: ['flexWrap: nowrap'],
      },
    ],
  },
  {
    type: 'align-items',
    description: 'align-items',
    category: 'FLEXBOX',
    rules: [
      {
        selector: '.items-start',
        values: ['alignItems: flex-start'],
      },
      {
        selector: '.items-end',
        values: ['alignItems: flex-end'],
      },
      {
        selector: '.items-center',
        values: ['alignItems: center'],
      },
      {
        selector: '.items-baseline',
        values: ['alignItems: baseline'],
      },
      {
        selector: '.items-stretch',
        values: ['alignItems: stretch'],
      },
    ],
  },
  {
    type: 'align-content',
    description: 'align-content',
    category: 'FLEXBOX',
    rules: [
      {
        selector: '.content-center',
        values: ['alignContent: center'],
      },
      {
        selector: '.content-start',
        values: ['alignContent: flex-start'],
      },
      {
        selector: '.content-end',
        values: ['alignContent: flex-end'],
      },
      {
        selector: '.content-between',
        values: ['alignContent: space-between'],
      },
      {
        selector: '.content-around',
        values: ['alignContent: space-around'],
      },
      {
        selector: '.content-evenly',
        values: ['alignContent: space-evenly'],
      },
    ],
  },
  {
    type: 'align-self',
    description: 'align-self',
    category: 'FLEXBOX',
    rules: [
      {
        selector: '.self-auto',
        values: ['alignSelf: auto'],
      },
      {
        selector: '.self-start',
        values: ['alignSelf: flex-start'],
      },
      {
        selector: '.self-end',
        values: ['alignSelf: flex-end'],
      },
      {
        selector: '.self-center',
        values: ['alignSelf: center'],
      },
      {
        selector: '.self-stretch',
        values: ['alignSelf: stretch'],
      },
    ],
  },
  {
    type: 'justify-content',
    description: 'justify-content',
    category: 'FLEXBOX',
    variantConfigKey: 'justifyContent',
    rules: [
      {
        selector: '.justify-start',
        values: ['justifyContent: flex-start'],
      },
      {
        selector: '.justify-end',
        values: ['justifyContent: flex-end'],
      },
      {
        selector: '.justify-center',
        values: ['justifyContent: center'],
      },
      {
        selector: '.justify-between',
        values: ['justifyContent: space-between'],
      },
      {
        selector: '.justify-around',
        values: ['justifyContent: space-around'],
      },
      {
        selector: '.justify-evenly',
        values: ['justifyContent: space-evenly'],
      },
    ],
  },
  {
    type: 'flex',
    description: 'flex',
    category: 'FLEXBOX',
    rules: [
      {
        selector: '.flex-1',
        values: ['flexGrow: 1', 'flexShrink: 1', 'flexBasis: 0%'],
      },
      {
        selector: '.flex-auto',
        values: ['flexGrow: 1', 'flexShrink: 1', 'flexBasis: auto'],
      },
      {
        selector: '.flex-initial',
        values: ['flexGrow: 0', 'flexShrink: 1', 'flexBasis: auto'],
      },
      {
        selector: '.flex-none',
        values: ['flexGrow: 0', 'flexShrink: 0', 'flexBasis: auto'],
      },
    ],
  },
  {
    type: 'flex-grow',
    description: 'flex-grow',
    category: 'FLEXBOX',
    variantConfigKey: 'flexGrow',
    rules: [
      {
        selector: '.flex-grow-0',
        values: ['flexGrow: 0'],
      },
      {
        selector: '.flex-grow',
        values: ['flexGrow: 1'],
      },
    ],
  },
  {
    type: 'flex-shrink',
    description: 'flex-shrink',
    category: 'FLEXBOX',
    rules: [
      {
        selector: '.flex-shrink-0',
        values: ['flexShrink: 0'],
      },
      {
        selector: '.flex-shrink',
        values: ['flexShrink: 1'],
      },
    ],
  },
  {
    type: 'order',
    description: 'Sets order of flex items',
    category: 'FLEXBOX',
    rules: [
      {
        selector: '.order-1',
        values: ['order: 1'],
      },
      {
        selector: '.order-2',
        values: ['order: 2'],
      },
      {
        selector: '.order-3',
        values: ['order: 3'],
      },
      {
        selector: '.order-4',
        values: ['order: 4'],
      },
      {
        selector: '.order-5',
        values: ['order: 5'],
      },
      {
        selector: '.order-6',
        values: ['order: 6'],
      },
      {
        selector: '.order-7',
        values: ['order: 7'],
      },
      {
        selector: '.order-8',
        values: ['order: 8'],
      },
      {
        selector: '.order-9',
        values: ['order: 9'],
      },
      {
        selector: '.order-10',
        values: ['order: 10'],
      },
      {
        selector: '.order-11',
        values: ['order: 11'],
      },
      {
        selector: '.order-12',
        values: ['order: 12'],
      },
      {
        selector: '.order-13',
        values: ['order: 13'],
      },
      {
        selector: '.order-14',
        values: ['order: 14'],
      },
      {
        selector: '.order-15',
        values: ['order: 15'],
      },
      {
        selector: '.order-16',
        values: ['order: 16'],
      },
      {
        selector: '.order-17',
        values: ['order: 17'],
      },
      {
        selector: '.order-18',
        values: ['order: 18'],
      },
      {
        selector: '.order-19',
        values: ['order: 19'],
      },
      {
        selector: '.order-20',
        values: ['order: 20'],
      },
      {
        selector: '.order-21',
        values: ['order: 21'],
      },
      {
        selector: '.order-22',
        values: ['order: 22'],
      },
      {
        selector: '.order-23',
        values: ['order: 23'],
      },
      {
        selector: '.order-24',
        values: ['order: 24'],
      },
      {
        selector: '.order-first',
        values: ['order: -9999'],
      },
      {
        selector: '.order-last',
        values: ['order: 9999'],
      },
      {
        selector: '.order-none',
        values: ['order: 0'],
      },
    ],
  },
  {
    type: 'background-color',
    description: '',
    category: 'BACKGROUND',
    variantConfigKey: 'themedBackgroundColor',
    rules: [
      {
        selector: '.bg-transparent',
        values: ['backgroundColor: transparent'],
      },
      {
        selector: '.spr-ui-01',
        values: ['backgroundColor: var(--spr-ui-01, #FFFFFF)'],
      },
      {
        selector: '.spr-ui-02',
        values: ['backgroundColor: var(--spr-ui-02, #F8F8FA)'],
      },
      {
        selector: '.spr-ui-03',
        values: ['backgroundColor: var(--spr-ui-03, #F2F2F4)'],
      },
      {
        selector: '.spr-ui-04',
        values: ['backgroundColor: var(--spr-ui-04, #0828CC)'],
      },
      {
        selector: '.spr-ui-05',
        values: ['backgroundColor: var(--spr-ui-05, #F2F2F4)'],
      },
      {
        selector: '.spr-ui-06',
        values: ['backgroundColor: var(--spr-ui-06, #E6E6E9)'],
      },
      {
        selector: '.spr-ui-focus',
        values: ['backgroundColor: var(--spr-ui-focus, rgba(8, 40, 204, 0.07))'],
      },
      {
        selector: '.spr-ui-focus-reverse',
        values: ['backgroundColor: var(--spr-ui-focus-reverse, rgba(255, 255, 255, 0.2))'],
      },
      {
        selector: '.spr-ui-hover',
        values: ['backgroundColor: var(--spr-ui-hover, rgba(8, 40, 204, 0.05))'],
      },
      {
        selector: '.spr-ui-hover-reverse',
        values: ['backgroundColor: var(--spr-ui-hover-reverse, rgba(255, 255, 255, 0.1))'],
      },
      {
        selector: '.spr-support-error',
        values: ['backgroundColor: var(--spr-support-error, #E44045)'],
      },
      {
        selector: '.spr-support-error-highlight',
        values: ['backgroundColor: var(--spr-support-error-highlight, rgba(255, 96, 96, 0.1))'],
      },
      {
        selector: '.spr-support-success',
        values: ['backgroundColor: var(--spr-support-success, #3fbf41)'],
      },
      {
        selector: '.spr-support-success-highlight',
        values: ['backgroundColor: var(--spr-support-success-highlight, rgba(63, 191, 65, 0.07))'],
      },
      {
        selector: '.spr-support-warning',
        values: ['backgroundColor: var(--spr-support-warning, #EEC202)'],
      },
      {
        selector: '.spr-support-warning-highlight',
        values: ['backgroundColor: var(--spr-support-warning-highlight, rgba(238, 194, 2, 0.1))'],
      },
      {
        selector: '.spr-clr-blue-highlight',
        values: ['backgroundColor: var(--spr-clr-blue-highlight, #E8F0FE)'],
      },
      {
        selector: '.spr-tag',
        values: ['backgroundColor: var(--spr-tag, #F2F2F4)'],
      },
      {
        selector: '.spr-tag-01',
        values: ['backgroundColor: var(--spr-tag-01, #F2F2F4)'],
      },
      {
        selector: '.spr-tag-02',
        values: ['backgroundColor: var(--spr-tag-02, rgba(8, 40, 204, 0.07))'],
      },
      {
        selector: '.spr-field',
        values: ['backgroundColor: var(--spr-field, #DBDBDB)'],
      },
      {
        selector: '.spr-popup',
        values: ['backgroundColor: var(--spr-popup, #FFFFFF)'],
      },
      {
        selector: '.spr-overlay',
        values: ['backgroundColor: var(--spr-overlay, rgba(10, 10, 20, 0.9))'],
      },
      {
        selector: '.spr-tooltip-01',
        values: ['backgroundColor: var(--spr-tooltip-01, #0A0A14)'],
      },
      {
        selector: '.spr-highlight',
        values: ['backgroundColor: var(--spr-highlight, rgba(255, 231, 173, 0.7))'],
      },
      {
        selector: '.spr-favourite',
        values: ['backgroundColor: var(--spr-favourite, #FF9F21)'],
      },
      {
        selector: '.spr-notification',
        values: ['backgroundColor: var(--spr-notification, #C6202B)'],
      },
      {
        selector: '.spr-interactive-01',
        values: ['backgroundColor: var(--spr-interactive-01, #0828CC)'],
      },
      {
        selector: '.spr-interactive-hover',
        values: ['backgroundColor: var(--spr-interactive-hover, #0729a0)'],
      },
      {
        selector: '.spr-interactive-disable',
        values: ['backgroundColor: var(--spr-interactive-disable, rgba(255, 255, 255, 0.8))'],
      },
      {
        selector: '.spr-interactive-02',
        values: ['backgroundColor: var(--spr-interactive-02, #646470)'],
      },
      {
        selector: '.spr-clr-blue',
        values: ['backgroundColor: var(--spr-clr-blue, #0AA2FF)'],
      },
      {
        selector: '.spr-clr-green',
        values: ['backgroundColor: var(--spr-clr-green, #20963a)'],
      },
      {
        selector: '.spr-clr-lavender',
        values: ['backgroundColor: var(--spr-clr-lavender, #7F36F6)'],
      },
      {
        selector: '.spr-clr-orange',
        values: ['backgroundColor: var(--spr-clr-orange, #F08C1A)'],
      },
      {
        selector: '.spr-clr-pink',
        values: ['backgroundColor: var(--spr-clr-pink, #DE456B)'],
      },
      {
        selector: '.spr-clr-red',
        values: ['backgroundColor: var(--spr-clr-red, #E44045)'],
      },
      {
        selector: '.spr-clr-sea',
        values: ['backgroundColor: var(--spr-clr-sea, #16AAD2)'],
      },
      {
        selector: '.spr-clr-teal',
        values: ['backgroundColor: var(--spr-clr-teal, #13C18D)'],
      },
      {
        selector: '.spr-clr-yellow',
        values: ['backgroundColor: var(--spr-clr-yellow, #DEAC09)'],
      },
      {
        selector: '.spr-clr-grey',
        values: ['backgroundColor: var(--spr-clr-grey, #D7D7DC)'],
      },
      {
        selector: '.spr-clr-purple',
        values: ['backgroundColor: var(--spr-clr-purple, #8C43FF)'],
      },
      {
        selector: '.spr-clr-lt-yellow',
        values: ['backgroundColor: var(--spr-clr-lt-yellow, #FFD04F)'],
      },
      {
        selector: '.spr-clr-darker-blue',
        values: ['backgroundColor: var(--spr-clr-darker-blue, #327AFD)'],
      },
      {
        selector: '.spr-secondary-yellow',
        values: ['backgroundColor: var(--spr-secondary-yellow, #FFC312)'],
      },
      {
        selector: '.spr-secondary-green',
        values: ['backgroundColor: var(--spr-secondary-green, #A3CB38)'],
      },
      {
        selector: '.spr-secondary-teal',
        values: ['backgroundColor: var(--spr-secondary-teal, #12CBC4)'],
      },
      {
        selector: '.spr-secondary-lt-pink',
        values: ['backgroundColor: var(--spr-secondary-lt-pink, #FDA7DF)'],
      },
      {
        selector: '.spr-secondary-pink',
        values: ['backgroundColor: var(--spr-secondary-pink, #ED4C67)'],
      },
      {
        selector: '.spr-secondary-maroon',
        values: ['backgroundColor: var(--spr-secondary-maroon, #B53471)'],
      },
      {
        selector: '.spr-secondary-orange',
        values: ['backgroundColor: var(--spr-secondary-orange, #F48749)'],
      },
      {
        selector: '.nav-ui-01',
        values: ['backgroundColor: var(--nav-ui-01, rgba(255, 255, 255, 0.2))'],
      },
      {
        selector: '.nav-ui-hover-01',
        values: ['backgroundColor: var(--nav-ui-hover-01, rgba(255, 255, 255, 0.3))'],
      },
    ],
  },
  {
    type: 'background-attachment',
    description: 'Sets behavior of background images when scrolling.',
    category: 'BACKGROUND',
    rules: [
      {
        selector: '.bg-fixed',
        values: ['backgroundAttachment: fixed'],
      },
      {
        selector: '.bg-local',
        values: ['backgroundAttachment: local'],
      },
      {
        selector: '.bg-scroll',
        values: ['backgroundAttachment: scroll'],
      },
    ],
  },
  {
    type: 'background-position',
    description: 'Sets position of a background image',
    category: 'BACKGROUND',
    rules: [
      {
        selector: '.bg-bottom',
        values: ['backgroundPosition: bottom'],
      },
      {
        selector: '.bg-center',
        values: ['backgroundPosition: center'],
      },
      {
        selector: '.bg-left',
        values: ['backgroundPosition: left'],
      },
      {
        selector: '.bg-left-bottom',
        values: ['backgroundPosition: left bottom'],
      },
      {
        selector: '.bg-left-top',
        values: ['backgroundPosition: left top'],
      },
      {
        selector: '.bg-right',
        values: ['backgroundPosition: right'],
      },
      {
        selector: '.bg-right-bottom',
        values: ['backgroundPosition: right bottom'],
      },
      {
        selector: '.bg-right-top',
        values: ['backgroundPosition: right top'],
      },
      {
        selector: '.bg-top',
        values: ['backgroundPosition: top'],
      },
    ],
  },
  {
    type: 'background-size',
    description: 'Sets background size of a background image',
    category: 'BACKGROUND',
    rules: [
      {
        selector: '.bg-auto',
        values: ['backgroundSize: auto'],
      },
      {
        selector: '.bg-cover',
        values: ['backgroundSize: cover'],
      },
      {
        selector: '.bg-contain',
        values: ['backgroundSize: contain'],
      },
    ],
  },
  {
    type: 'background-repeat',
    description: 'Sets background size of a background image',
    category: 'BACKGROUND',
    rules: [
      {
        selector: '.bg-repeat',
        values: ['backgroundRepeat: repeat'],
      },
      {
        selector: '.bg-no-repeat',
        values: ['backgroundRepeat: no-repeat'],
      },
      {
        selector: '.bg-repeat-x',
        values: ['backgroundRepeat: repeat-x'],
      },
      {
        selector: '.bg-repeat-y',
        values: ['backgroundRepeat: repeat-y'],
      },
      {
        selector: '.bg-repeat-round',
        values: ['backgroundRepeat: round'],
      },
      {
        selector: '.bg-repeat-space',
        values: ['backgroundRepeat: space'],
      },
    ],
  },
  {
    type: 'fill',
    description: 'Controls fill',
    category: 'BACKGROUND',
    rules: [
      {
        selector: '.fill-current',
        values: ['fill: currentColor'],
      },
      {
        selector: '.spr-icon-01',
        values: ['fill: var(--spr-icon-01, #0A0A14)'],
      },
      {
        selector: '.spr-icon-02',
        values: ['fill: var(--spr-icon-02, #646470)'],
      },
      {
        selector: '.spr-icon-03',
        values: ['fill: var(--spr-icon-03, #646470)'],
      },
      {
        selector: '.spr-icon-04',
        values: ['fill: var(--spr-icon-04, #0828CC)'],
      },
      {
        selector: '.spr-icon-05',
        values: ['fill: var(--spr-icon-05, #FFFFFF)'],
      },
      {
        selector: '.spr-icon-06',
        values: ['fill: var(--spr-icon-06, rgba(255, 255, 255, 0.6))'],
      },
      {
        selector: '.spr-icon-hover',
        values: ['fill: var(--spr-icon-hover, #0A0A14)'],
      },
      {
        selector: '.spr-icon-disable',
        values: ['fill: var(--spr-icon-disable, #D7D7DC)'],
      },
      {
        selector: '.spr-icon-hover-reverse',
        values: ['fill: var(--spr-icon-hover-reverse, #FFFFFF)'],
      },
      {
        selector: '.spr-icon-error',
        values: ['fill: var(--spr-icon-error, #FF6060)'],
      },
      {
        selector: '.nav-icon-01',
        values: ['fill: var(--nav-icon-01, rgba(255, 255, 255, 0.9))'],
      },
      {
        selector: '.nav-icon-focus-01',
        values: ['fill: var(--nav-icon-focus-01, #327AFD)'],
      },
    ],
  },
  {
    type: 'padding',
    description: 'Controls padding in 0.25rem increments',
    category: 'SPACING',
    variantConfigKey: 'padding',
    rules: [
      {
        selector: '.p-0',
        values: ['paddingTop: 0', 'paddingBottom: 0', 'paddingLeft: 0', 'paddingRight: 0'],
      },
      {
        selector: '.p-1',
        values: ['paddingTop: 0.4rem', 'paddingBottom: 0.4rem', 'paddingLeft: 0.4rem', 'paddingRight: 0.4rem'],
      },
      {
        selector: '.p-2',
        values: ['paddingTop: 0.8rem', 'paddingBottom: 0.8rem', 'paddingLeft: 0.8rem', 'paddingRight: 0.8rem'],
      },
      {
        selector: '.p-3',
        values: ['paddingTop: 1.2rem', 'paddingBottom: 1.2rem', 'paddingLeft: 1.2rem', 'paddingRight: 1.2rem'],
      },
      {
        selector: '.p-4',
        values: ['paddingTop: 1.6rem', 'paddingBottom: 1.6rem', 'paddingLeft: 1.6rem', 'paddingRight: 1.6rem'],
      },
      {
        selector: '.p-5',
        values: ['paddingTop: 2rem', 'paddingBottom: 2rem', 'paddingLeft: 2rem', 'paddingRight: 2rem'],
      },
      {
        selector: '.p-6',
        values: ['paddingTop: 2.4rem', 'paddingBottom: 2.4rem', 'paddingLeft: 2.4rem', 'paddingRight: 2.4rem'],
      },
      {
        selector: '.p-7',
        values: ['paddingTop: 2.8rem', 'paddingBottom: 2.8rem', 'paddingLeft: 2.8rem', 'paddingRight: 2.8rem'],
      },
      {
        selector: '.p-8',
        values: ['paddingTop: 3.2rem', 'paddingBottom: 3.2rem', 'paddingLeft: 3.2rem', 'paddingRight: 3.2rem'],
      },
      {
        selector: '.p-9',
        values: ['paddingTop: 3.6rem', 'paddingBottom: 3.6rem', 'paddingLeft: 3.6rem', 'paddingRight: 3.6rem'],
      },
      {
        selector: '.p-10',
        values: ['paddingTop: 4rem', 'paddingBottom: 4rem', 'paddingLeft: 4rem', 'paddingRight: 4rem'],
      },
      {
        selector: '.p-11',
        values: ['paddingTop: 4.4rem', 'paddingBottom: 4.4rem', 'paddingLeft: 4.4rem', 'paddingRight: 4.4rem'],
      },
      {
        selector: '.p-12',
        values: ['paddingTop: 4.8rem', 'paddingBottom: 4.8rem', 'paddingLeft: 4.8rem', 'paddingRight: 4.8rem'],
      },
      {
        selector: '.p-16',
        values: ['paddingTop: 6.4rem', 'paddingBottom: 6.4rem', 'paddingLeft: 6.4rem', 'paddingRight: 6.4rem'],
      },
      {
        selector: '.p-20',
        values: ['paddingTop: 8rem', 'paddingBottom: 8rem', 'paddingLeft: 8rem', 'paddingRight: 8rem'],
      },
      {
        selector: '.p-24',
        values: ['paddingTop: 9.6rem', 'paddingBottom: 9.6rem', 'paddingLeft: 9.6rem', 'paddingRight: 9.6rem'],
      },
      {
        selector: '.p-32',
        values: ['paddingTop: 12.8rem', 'paddingBottom: 12.8rem', 'paddingLeft: 12.8rem', 'paddingRight: 12.8rem'],
      },
      {
        selector: '.p-40',
        values: ['paddingTop: 16rem', 'paddingBottom: 16rem', 'paddingLeft: 16rem', 'paddingRight: 16rem'],
      },
      {
        selector: '.p-48',
        values: ['paddingTop: 19.2rem', 'paddingBottom: 19.2rem', 'paddingLeft: 19.2rem', 'paddingRight: 19.2rem'],
      },
      {
        selector: '.p-56',
        values: ['paddingTop: 22.4rem', 'paddingBottom: 22.4rem', 'paddingLeft: 22.4rem', 'paddingRight: 22.4rem'],
      },
      {
        selector: '.p-64',
        values: ['paddingTop: 25.6rem', 'paddingBottom: 25.6rem', 'paddingLeft: 25.6rem', 'paddingRight: 25.6rem'],
      },
      {
        selector: '.p-1.5',
        values: ['paddingTop: 0.6rem', 'paddingBottom: 0.6rem', 'paddingLeft: 0.6rem', 'paddingRight: 0.6rem'],
      },
      {
        selector: '.p-0.5',
        values: ['paddingTop: 0.2rem', 'paddingBottom: 0.2rem', 'paddingLeft: 0.2rem', 'paddingRight: 0.2rem'],
      },
      {
        selector: '.p-px',
        values: ['paddingTop: 1px', 'paddingBottom: 1px', 'paddingLeft: 1px', 'paddingRight: 1px'],
      },
      {
        selector: '.py-0',
        values: ['paddingTop: 0', 'paddingBottom: 0'],
      },
      {
        selector: '.px-0',
        values: ['paddingLeft: 0', 'paddingRight: 0'],
      },
      {
        selector: '.py-1',
        values: ['paddingTop: 0.4rem', 'paddingBottom: 0.4rem'],
      },
      {
        selector: '.px-1',
        values: ['paddingLeft: 0.4rem', 'paddingRight: 0.4rem'],
      },
      {
        selector: '.py-2',
        values: ['paddingTop: 0.8rem', 'paddingBottom: 0.8rem'],
      },
      {
        selector: '.px-2',
        values: ['paddingLeft: 0.8rem', 'paddingRight: 0.8rem'],
      },
      {
        selector: '.py-3',
        values: ['paddingTop: 1.2rem', 'paddingBottom: 1.2rem'],
      },
      {
        selector: '.px-3',
        values: ['paddingLeft: 1.2rem', 'paddingRight: 1.2rem'],
      },
      {
        selector: '.py-4',
        values: ['paddingTop: 1.6rem', 'paddingBottom: 1.6rem'],
      },
      {
        selector: '.px-4',
        values: ['paddingLeft: 1.6rem', 'paddingRight: 1.6rem'],
      },
      {
        selector: '.py-5',
        values: ['paddingTop: 2rem', 'paddingBottom: 2rem'],
      },
      {
        selector: '.px-5',
        values: ['paddingLeft: 2rem', 'paddingRight: 2rem'],
      },
      {
        selector: '.py-6',
        values: ['paddingTop: 2.4rem', 'paddingBottom: 2.4rem'],
      },
      {
        selector: '.px-6',
        values: ['paddingLeft: 2.4rem', 'paddingRight: 2.4rem'],
      },
      {
        selector: '.py-7',
        values: ['paddingTop: 2.8rem', 'paddingBottom: 2.8rem'],
      },
      {
        selector: '.px-7',
        values: ['paddingLeft: 2.8rem', 'paddingRight: 2.8rem'],
      },
      {
        selector: '.py-8',
        values: ['paddingTop: 3.2rem', 'paddingBottom: 3.2rem'],
      },
      {
        selector: '.px-8',
        values: ['paddingLeft: 3.2rem', 'paddingRight: 3.2rem'],
      },
      {
        selector: '.py-9',
        values: ['paddingTop: 3.6rem', 'paddingBottom: 3.6rem'],
      },
      {
        selector: '.px-9',
        values: ['paddingLeft: 3.6rem', 'paddingRight: 3.6rem'],
      },
      {
        selector: '.py-10',
        values: ['paddingTop: 4rem', 'paddingBottom: 4rem'],
      },
      {
        selector: '.px-10',
        values: ['paddingLeft: 4rem', 'paddingRight: 4rem'],
      },
      {
        selector: '.py-11',
        values: ['paddingTop: 4.4rem', 'paddingBottom: 4.4rem'],
      },
      {
        selector: '.px-11',
        values: ['paddingLeft: 4.4rem', 'paddingRight: 4.4rem'],
      },
      {
        selector: '.py-12',
        values: ['paddingTop: 4.8rem', 'paddingBottom: 4.8rem'],
      },
      {
        selector: '.px-12',
        values: ['paddingLeft: 4.8rem', 'paddingRight: 4.8rem'],
      },
      {
        selector: '.py-16',
        values: ['paddingTop: 6.4rem', 'paddingBottom: 6.4rem'],
      },
      {
        selector: '.px-16',
        values: ['paddingLeft: 6.4rem', 'paddingRight: 6.4rem'],
      },
      {
        selector: '.py-20',
        values: ['paddingTop: 8rem', 'paddingBottom: 8rem'],
      },
      {
        selector: '.px-20',
        values: ['paddingLeft: 8rem', 'paddingRight: 8rem'],
      },
      {
        selector: '.py-24',
        values: ['paddingTop: 9.6rem', 'paddingBottom: 9.6rem'],
      },
      {
        selector: '.px-24',
        values: ['paddingLeft: 9.6rem', 'paddingRight: 9.6rem'],
      },
      {
        selector: '.py-32',
        values: ['paddingTop: 12.8rem', 'paddingBottom: 12.8rem'],
      },
      {
        selector: '.px-32',
        values: ['paddingLeft: 12.8rem', 'paddingRight: 12.8rem'],
      },
      {
        selector: '.py-40',
        values: ['paddingTop: 16rem', 'paddingBottom: 16rem'],
      },
      {
        selector: '.px-40',
        values: ['paddingLeft: 16rem', 'paddingRight: 16rem'],
      },
      {
        selector: '.py-48',
        values: ['paddingTop: 19.2rem', 'paddingBottom: 19.2rem'],
      },
      {
        selector: '.px-48',
        values: ['paddingLeft: 19.2rem', 'paddingRight: 19.2rem'],
      },
      {
        selector: '.py-56',
        values: ['paddingTop: 22.4rem', 'paddingBottom: 22.4rem'],
      },
      {
        selector: '.px-56',
        values: ['paddingLeft: 22.4rem', 'paddingRight: 22.4rem'],
      },
      {
        selector: '.py-64',
        values: ['paddingTop: 25.6rem', 'paddingBottom: 25.6rem'],
      },
      {
        selector: '.px-64',
        values: ['paddingLeft: 25.6rem', 'paddingRight: 25.6rem'],
      },
      {
        selector: '.py-1.5',
        values: ['paddingTop: 0.6rem', 'paddingBottom: 0.6rem'],
      },
      {
        selector: '.px-1.5',
        values: ['paddingLeft: 0.6rem', 'paddingRight: 0.6rem'],
      },
      {
        selector: '.py-0.5',
        values: ['paddingTop: 0.2rem', 'paddingBottom: 0.2rem'],
      },
      {
        selector: '.px-0.5',
        values: ['paddingLeft: 0.2rem', 'paddingRight: 0.2rem'],
      },
      {
        selector: '.py-px',
        values: ['paddingTop: 1px', 'paddingBottom: 1px'],
      },
      {
        selector: '.px-px',
        values: ['paddingLeft: 1px', 'paddingRight: 1px'],
      },
      {
        selector: '.pt-0',
        values: ['paddingTop: 0'],
      },
      {
        selector: '.pr-0',
        values: ['paddingRight: 0'],
      },
      {
        selector: '.pb-0',
        values: ['paddingBottom: 0'],
      },
      {
        selector: '.pl-0',
        values: ['paddingLeft: 0'],
      },
      {
        selector: '.pt-1',
        values: ['paddingTop: 0.4rem'],
      },
      {
        selector: '.pr-1',
        values: ['paddingRight: 0.4rem'],
      },
      {
        selector: '.pb-1',
        values: ['paddingBottom: 0.4rem'],
      },
      {
        selector: '.pl-1',
        values: ['paddingLeft: 0.4rem'],
      },
      {
        selector: '.pt-2',
        values: ['paddingTop: 0.8rem'],
      },
      {
        selector: '.pr-2',
        values: ['paddingRight: 0.8rem'],
      },
      {
        selector: '.pb-2',
        values: ['paddingBottom: 0.8rem'],
      },
      {
        selector: '.pl-2',
        values: ['paddingLeft: 0.8rem'],
      },
      {
        selector: '.pt-3',
        values: ['paddingTop: 1.2rem'],
      },
      {
        selector: '.pr-3',
        values: ['paddingRight: 1.2rem'],
      },
      {
        selector: '.pb-3',
        values: ['paddingBottom: 1.2rem'],
      },
      {
        selector: '.pl-3',
        values: ['paddingLeft: 1.2rem'],
      },
      {
        selector: '.pt-4',
        values: ['paddingTop: 1.6rem'],
      },
      {
        selector: '.pr-4',
        values: ['paddingRight: 1.6rem'],
      },
      {
        selector: '.pb-4',
        values: ['paddingBottom: 1.6rem'],
      },
      {
        selector: '.pl-4',
        values: ['paddingLeft: 1.6rem'],
      },
      {
        selector: '.pt-5',
        values: ['paddingTop: 2rem'],
      },
      {
        selector: '.pr-5',
        values: ['paddingRight: 2rem'],
      },
      {
        selector: '.pb-5',
        values: ['paddingBottom: 2rem'],
      },
      {
        selector: '.pl-5',
        values: ['paddingLeft: 2rem'],
      },
      {
        selector: '.pt-6',
        values: ['paddingTop: 2.4rem'],
      },
      {
        selector: '.pr-6',
        values: ['paddingRight: 2.4rem'],
      },
      {
        selector: '.pb-6',
        values: ['paddingBottom: 2.4rem'],
      },
      {
        selector: '.pl-6',
        values: ['paddingLeft: 2.4rem'],
      },
      {
        selector: '.pt-7',
        values: ['paddingTop: 2.8rem'],
      },
      {
        selector: '.pr-7',
        values: ['paddingRight: 2.8rem'],
      },
      {
        selector: '.pb-7',
        values: ['paddingBottom: 2.8rem'],
      },
      {
        selector: '.pl-7',
        values: ['paddingLeft: 2.8rem'],
      },
      {
        selector: '.pt-8',
        values: ['paddingTop: 3.2rem'],
      },
      {
        selector: '.pr-8',
        values: ['paddingRight: 3.2rem'],
      },
      {
        selector: '.pb-8',
        values: ['paddingBottom: 3.2rem'],
      },
      {
        selector: '.pl-8',
        values: ['paddingLeft: 3.2rem'],
      },
      {
        selector: '.pt-9',
        values: ['paddingTop: 3.6rem'],
      },
      {
        selector: '.pr-9',
        values: ['paddingRight: 3.6rem'],
      },
      {
        selector: '.pb-9',
        values: ['paddingBottom: 3.6rem'],
      },
      {
        selector: '.pl-9',
        values: ['paddingLeft: 3.6rem'],
      },
      {
        selector: '.pt-10',
        values: ['paddingTop: 4rem'],
      },
      {
        selector: '.pr-10',
        values: ['paddingRight: 4rem'],
      },
      {
        selector: '.pb-10',
        values: ['paddingBottom: 4rem'],
      },
      {
        selector: '.pl-10',
        values: ['paddingLeft: 4rem'],
      },
      {
        selector: '.pt-11',
        values: ['paddingTop: 4.4rem'],
      },
      {
        selector: '.pr-11',
        values: ['paddingRight: 4.4rem'],
      },
      {
        selector: '.pb-11',
        values: ['paddingBottom: 4.4rem'],
      },
      {
        selector: '.pl-11',
        values: ['paddingLeft: 4.4rem'],
      },
      {
        selector: '.pt-12',
        values: ['paddingTop: 4.8rem'],
      },
      {
        selector: '.pr-12',
        values: ['paddingRight: 4.8rem'],
      },
      {
        selector: '.pb-12',
        values: ['paddingBottom: 4.8rem'],
      },
      {
        selector: '.pl-12',
        values: ['paddingLeft: 4.8rem'],
      },
      {
        selector: '.pt-16',
        values: ['paddingTop: 6.4rem'],
      },
      {
        selector: '.pr-16',
        values: ['paddingRight: 6.4rem'],
      },
      {
        selector: '.pb-16',
        values: ['paddingBottom: 6.4rem'],
      },
      {
        selector: '.pl-16',
        values: ['paddingLeft: 6.4rem'],
      },
      {
        selector: '.pt-20',
        values: ['paddingTop: 8rem'],
      },
      {
        selector: '.pr-20',
        values: ['paddingRight: 8rem'],
      },
      {
        selector: '.pb-20',
        values: ['paddingBottom: 8rem'],
      },
      {
        selector: '.pl-20',
        values: ['paddingLeft: 8rem'],
      },
      {
        selector: '.pt-24',
        values: ['paddingTop: 9.6rem'],
      },
      {
        selector: '.pr-24',
        values: ['paddingRight: 9.6rem'],
      },
      {
        selector: '.pb-24',
        values: ['paddingBottom: 9.6rem'],
      },
      {
        selector: '.pl-24',
        values: ['paddingLeft: 9.6rem'],
      },
      {
        selector: '.pt-32',
        values: ['paddingTop: 12.8rem'],
      },
      {
        selector: '.pr-32',
        values: ['paddingRight: 12.8rem'],
      },
      {
        selector: '.pb-32',
        values: ['paddingBottom: 12.8rem'],
      },
      {
        selector: '.pl-32',
        values: ['paddingLeft: 12.8rem'],
      },
      {
        selector: '.pt-40',
        values: ['paddingTop: 16rem'],
      },
      {
        selector: '.pr-40',
        values: ['paddingRight: 16rem'],
      },
      {
        selector: '.pb-40',
        values: ['paddingBottom: 16rem'],
      },
      {
        selector: '.pl-40',
        values: ['paddingLeft: 16rem'],
      },
      {
        selector: '.pt-48',
        values: ['paddingTop: 19.2rem'],
      },
      {
        selector: '.pr-48',
        values: ['paddingRight: 19.2rem'],
      },
      {
        selector: '.pb-48',
        values: ['paddingBottom: 19.2rem'],
      },
      {
        selector: '.pl-48',
        values: ['paddingLeft: 19.2rem'],
      },
      {
        selector: '.pt-56',
        values: ['paddingTop: 22.4rem'],
      },
      {
        selector: '.pr-56',
        values: ['paddingRight: 22.4rem'],
      },
      {
        selector: '.pb-56',
        values: ['paddingBottom: 22.4rem'],
      },
      {
        selector: '.pl-56',
        values: ['paddingLeft: 22.4rem'],
      },
      {
        selector: '.pt-64',
        values: ['paddingTop: 25.6rem'],
      },
      {
        selector: '.pr-64',
        values: ['paddingRight: 25.6rem'],
      },
      {
        selector: '.pb-64',
        values: ['paddingBottom: 25.6rem'],
      },
      {
        selector: '.pl-64',
        values: ['paddingLeft: 25.6rem'],
      },
      {
        selector: '.pt-1.5',
        values: ['paddingTop: 0.6rem'],
      },
      {
        selector: '.pr-1.5',
        values: ['paddingRight: 0.6rem'],
      },
      {
        selector: '.pb-1.5',
        values: ['paddingBottom: 0.6rem'],
      },
      {
        selector: '.pl-1.5',
        values: ['paddingLeft: 0.6rem'],
      },
      {
        selector: '.pt-0.5',
        values: ['paddingTop: 0.2rem'],
      },
      {
        selector: '.pr-0.5',
        values: ['paddingRight: 0.2rem'],
      },
      {
        selector: '.pb-0.5',
        values: ['paddingBottom: 0.2rem'],
      },
      {
        selector: '.pl-0.5',
        values: ['paddingLeft: 0.2rem'],
      },
      {
        selector: '.pt-px',
        values: ['paddingTop: 1px'],
      },
      {
        selector: '.pr-px',
        values: ['paddingRight: 1px'],
      },
      {
        selector: '.pb-px',
        values: ['paddingBottom: 1px'],
      },
      {
        selector: '.pl-px',
        values: ['paddingLeft: 1px'],
      },
    ],
  },
  {
    type: 'margin',
    description: 'Controls margin in 0.25rem increments',
    category: 'SPACING',
    rules: [
      {
        selector: '.m-0',
        values: ['marginTop: 0', 'marginBottom: 0', 'marginLeft: 0', 'marginRight: 0'],
      },
      {
        selector: '.m-1',
        values: ['marginTop: 0.4rem', 'marginBottom: 0.4rem', 'marginLeft: 0.4rem', 'marginRight: 0.4rem'],
      },
      {
        selector: '.m-2',
        values: ['marginTop: 0.8rem', 'marginBottom: 0.8rem', 'marginLeft: 0.8rem', 'marginRight: 0.8rem'],
      },
      {
        selector: '.m-3',
        values: ['marginTop: 1.2rem', 'marginBottom: 1.2rem', 'marginLeft: 1.2rem', 'marginRight: 1.2rem'],
      },
      {
        selector: '.m-4',
        values: ['marginTop: 1.6rem', 'marginBottom: 1.6rem', 'marginLeft: 1.6rem', 'marginRight: 1.6rem'],
      },
      {
        selector: '.m-5',
        values: ['marginTop: 2rem', 'marginBottom: 2rem', 'marginLeft: 2rem', 'marginRight: 2rem'],
      },
      {
        selector: '.m-6',
        values: ['marginTop: 2.4rem', 'marginBottom: 2.4rem', 'marginLeft: 2.4rem', 'marginRight: 2.4rem'],
      },
      {
        selector: '.m-7',
        values: ['marginTop: 2.8rem', 'marginBottom: 2.8rem', 'marginLeft: 2.8rem', 'marginRight: 2.8rem'],
      },
      {
        selector: '.m-8',
        values: ['marginTop: 3.2rem', 'marginBottom: 3.2rem', 'marginLeft: 3.2rem', 'marginRight: 3.2rem'],
      },
      {
        selector: '.m-9',
        values: ['marginTop: 3.6rem', 'marginBottom: 3.6rem', 'marginLeft: 3.6rem', 'marginRight: 3.6rem'],
      },
      {
        selector: '.m-10',
        values: ['marginTop: 4rem', 'marginBottom: 4rem', 'marginLeft: 4rem', 'marginRight: 4rem'],
      },
      {
        selector: '.m-11',
        values: ['marginTop: 4.4rem', 'marginBottom: 4.4rem', 'marginLeft: 4.4rem', 'marginRight: 4.4rem'],
      },
      {
        selector: '.m-12',
        values: ['marginTop: 4.8rem', 'marginBottom: 4.8rem', 'marginLeft: 4.8rem', 'marginRight: 4.8rem'],
      },
      {
        selector: '.m-16',
        values: ['marginTop: 6.4rem', 'marginBottom: 6.4rem', 'marginLeft: 6.4rem', 'marginRight: 6.4rem'],
      },
      {
        selector: '.m-20',
        values: ['marginTop: 8rem', 'marginBottom: 8rem', 'marginLeft: 8rem', 'marginRight: 8rem'],
      },
      {
        selector: '.m-24',
        values: ['marginTop: 9.6rem', 'marginBottom: 9.6rem', 'marginLeft: 9.6rem', 'marginRight: 9.6rem'],
      },
      {
        selector: '.m-32',
        values: ['marginTop: 12.8rem', 'marginBottom: 12.8rem', 'marginLeft: 12.8rem', 'marginRight: 12.8rem'],
      },
      {
        selector: '.m-40',
        values: ['marginTop: 16rem', 'marginBottom: 16rem', 'marginLeft: 16rem', 'marginRight: 16rem'],
      },
      {
        selector: '.m-48',
        values: ['marginTop: 19.2rem', 'marginBottom: 19.2rem', 'marginLeft: 19.2rem', 'marginRight: 19.2rem'],
      },
      {
        selector: '.m-56',
        values: ['marginTop: 22.4rem', 'marginBottom: 22.4rem', 'marginLeft: 22.4rem', 'marginRight: 22.4rem'],
      },
      {
        selector: '.m-64',
        values: ['marginTop: 25.6rem', 'marginBottom: 25.6rem', 'marginLeft: 25.6rem', 'marginRight: 25.6rem'],
      },
      {
        selector: '.m-auto',
        values: ['marginTop: auto', 'marginBottom: auto', 'marginLeft: auto', 'marginRight: auto'],
      },
      {
        selector: '.m-1.5',
        values: ['marginTop: 0.6rem', 'marginBottom: 0.6rem', 'marginLeft: 0.6rem', 'marginRight: 0.6rem'],
      },
      {
        selector: '.m-0.5',
        values: ['marginTop: 0.2rem', 'marginBottom: 0.2rem', 'marginLeft: 0.2rem', 'marginRight: 0.2rem'],
      },
      {
        selector: '.-m-1.5',
        values: ['marginTop: -0.6rem', 'marginBottom: -0.6rem', 'marginLeft: -0.6rem', 'marginRight: -0.6rem'],
      },
      {
        selector: '.-m-0.5',
        values: ['marginTop: -0.2rem', 'marginBottom: -0.2rem', 'marginLeft: -0.2rem', 'marginRight: -0.2rem'],
      },
      {
        selector: '.m-px',
        values: ['marginTop: 1px', 'marginBottom: 1px', 'marginLeft: 1px', 'marginRight: 1px'],
      },
      {
        selector: '.-m-1',
        values: ['marginTop: -0.4rem', 'marginBottom: -0.4rem', 'marginLeft: -0.4rem', 'marginRight: -0.4rem'],
      },
      {
        selector: '.-m-2',
        values: ['marginTop: -0.8rem', 'marginBottom: -0.8rem', 'marginLeft: -0.8rem', 'marginRight: -0.8rem'],
      },
      {
        selector: '.-m-3',
        values: ['marginTop: -1.2rem', 'marginBottom: -1.2rem', 'marginLeft: -1.2rem', 'marginRight: -1.2rem'],
      },
      {
        selector: '.-m-4',
        values: ['marginTop: -1.6rem', 'marginBottom: -1.6rem', 'marginLeft: -1.6rem', 'marginRight: -1.6rem'],
      },
      {
        selector: '.-m-5',
        values: ['marginTop: -2rem', 'marginBottom: -2rem', 'marginLeft: -2rem', 'marginRight: -2rem'],
      },
      {
        selector: '.-m-6',
        values: ['marginTop: -2.4rem', 'marginBottom: -2.4rem', 'marginLeft: -2.4rem', 'marginRight: -2.4rem'],
      },
      {
        selector: '.-m-7',
        values: ['marginTop: -2.8rem', 'marginBottom: -2.8rem', 'marginLeft: -2.8rem', 'marginRight: -2.8rem'],
      },
      {
        selector: '.-m-8',
        values: ['marginTop: -3.2rem', 'marginBottom: -3.2rem', 'marginLeft: -3.2rem', 'marginRight: -3.2rem'],
      },
      {
        selector: '.-m-9',
        values: ['marginTop: -3.6rem', 'marginBottom: -3.6rem', 'marginLeft: -3.6rem', 'marginRight: -3.6rem'],
      },
      {
        selector: '.-m-10',
        values: ['marginTop: -4rem', 'marginBottom: -4rem', 'marginLeft: -4rem', 'marginRight: -4rem'],
      },
      {
        selector: '.-m-11',
        values: ['marginTop: -4.4rem', 'marginBottom: -4.4rem', 'marginLeft: -4.4rem', 'marginRight: -4.4rem'],
      },
      {
        selector: '.-m-12',
        values: ['marginTop: -4.8rem', 'marginBottom: -4.8rem', 'marginLeft: -4.8rem', 'marginRight: -4.8rem'],
      },
      {
        selector: '.-m-16',
        values: ['marginTop: -6.4rem', 'marginBottom: -6.4rem', 'marginLeft: -6.4rem', 'marginRight: -6.4rem'],
      },
      {
        selector: '.-m-20',
        values: ['marginTop: -8rem', 'marginBottom: -8rem', 'marginLeft: -8rem', 'marginRight: -8rem'],
      },
      {
        selector: '.-m-24',
        values: ['marginTop: -9.6rem', 'marginBottom: -9.6rem', 'marginLeft: -9.6rem', 'marginRight: -9.6rem'],
      },
      {
        selector: '.-m-32',
        values: ['marginTop: -12.8rem', 'marginBottom: -12.8rem', 'marginLeft: -12.8rem', 'marginRight: -12.8rem'],
      },
      {
        selector: '.-m-40',
        values: ['marginTop: -16rem', 'marginBottom: -16rem', 'marginLeft: -16rem', 'marginRight: -16rem'],
      },
      {
        selector: '.-m-48',
        values: ['marginTop: -19.2rem', 'marginBottom: -19.2rem', 'marginLeft: -19.2rem', 'marginRight: -19.2rem'],
      },
      {
        selector: '.-m-56',
        values: ['marginTop: -22.4rem', 'marginBottom: -22.4rem', 'marginLeft: -22.4rem', 'marginRight: -22.4rem'],
      },
      {
        selector: '.-m-64',
        values: ['marginTop: -25.6rem', 'marginBottom: -25.6rem', 'marginLeft: -25.6rem', 'marginRight: -25.6rem'],
      },
      {
        selector: '.-m-px',
        values: ['marginTop: -1px', 'marginBottom: -1px', 'marginLeft: -1px', 'marginRight: -1px'],
      },
      {
        selector: '.my-0',
        values: ['marginTop: 0', 'marginBottom: 0'],
      },
      {
        selector: '.mx-0',
        values: ['marginLeft: 0', 'marginRight: 0'],
      },
      {
        selector: '.my-1',
        values: ['marginTop: 0.4rem', 'marginBottom: 0.4rem'],
      },
      {
        selector: '.mx-1',
        values: ['marginLeft: 0.4rem', 'marginRight: 0.4rem'],
      },
      {
        selector: '.my-2',
        values: ['marginTop: 0.8rem', 'marginBottom: 0.8rem'],
      },
      {
        selector: '.mx-2',
        values: ['marginLeft: 0.8rem', 'marginRight: 0.8rem'],
      },
      {
        selector: '.my-3',
        values: ['marginTop: 1.2rem', 'marginBottom: 1.2rem'],
      },
      {
        selector: '.mx-3',
        values: ['marginLeft: 1.2rem', 'marginRight: 1.2rem'],
      },
      {
        selector: '.my-4',
        values: ['marginTop: 1.6rem', 'marginBottom: 1.6rem'],
      },
      {
        selector: '.mx-4',
        values: ['marginLeft: 1.6rem', 'marginRight: 1.6rem'],
      },
      {
        selector: '.my-5',
        values: ['marginTop: 2rem', 'marginBottom: 2rem'],
      },
      {
        selector: '.mx-5',
        values: ['marginLeft: 2rem', 'marginRight: 2rem'],
      },
      {
        selector: '.my-6',
        values: ['marginTop: 2.4rem', 'marginBottom: 2.4rem'],
      },
      {
        selector: '.mx-6',
        values: ['marginLeft: 2.4rem', 'marginRight: 2.4rem'],
      },
      {
        selector: '.my-7',
        values: ['marginTop: 2.8rem', 'marginBottom: 2.8rem'],
      },
      {
        selector: '.mx-7',
        values: ['marginLeft: 2.8rem', 'marginRight: 2.8rem'],
      },
      {
        selector: '.my-8',
        values: ['marginTop: 3.2rem', 'marginBottom: 3.2rem'],
      },
      {
        selector: '.mx-8',
        values: ['marginLeft: 3.2rem', 'marginRight: 3.2rem'],
      },
      {
        selector: '.my-9',
        values: ['marginTop: 3.6rem', 'marginBottom: 3.6rem'],
      },
      {
        selector: '.mx-9',
        values: ['marginLeft: 3.6rem', 'marginRight: 3.6rem'],
      },
      {
        selector: '.my-10',
        values: ['marginTop: 4rem', 'marginBottom: 4rem'],
      },
      {
        selector: '.mx-10',
        values: ['marginLeft: 4rem', 'marginRight: 4rem'],
      },
      {
        selector: '.my-11',
        values: ['marginTop: 4.4rem', 'marginBottom: 4.4rem'],
      },
      {
        selector: '.mx-11',
        values: ['marginLeft: 4.4rem', 'marginRight: 4.4rem'],
      },
      {
        selector: '.my-12',
        values: ['marginTop: 4.8rem', 'marginBottom: 4.8rem'],
      },
      {
        selector: '.mx-12',
        values: ['marginLeft: 4.8rem', 'marginRight: 4.8rem'],
      },
      {
        selector: '.my-16',
        values: ['marginTop: 6.4rem', 'marginBottom: 6.4rem'],
      },
      {
        selector: '.mx-16',
        values: ['marginLeft: 6.4rem', 'marginRight: 6.4rem'],
      },
      {
        selector: '.my-20',
        values: ['marginTop: 8rem', 'marginBottom: 8rem'],
      },
      {
        selector: '.mx-20',
        values: ['marginLeft: 8rem', 'marginRight: 8rem'],
      },
      {
        selector: '.my-24',
        values: ['marginTop: 9.6rem', 'marginBottom: 9.6rem'],
      },
      {
        selector: '.mx-24',
        values: ['marginLeft: 9.6rem', 'marginRight: 9.6rem'],
      },
      {
        selector: '.my-32',
        values: ['marginTop: 12.8rem', 'marginBottom: 12.8rem'],
      },
      {
        selector: '.mx-32',
        values: ['marginLeft: 12.8rem', 'marginRight: 12.8rem'],
      },
      {
        selector: '.my-40',
        values: ['marginTop: 16rem', 'marginBottom: 16rem'],
      },
      {
        selector: '.mx-40',
        values: ['marginLeft: 16rem', 'marginRight: 16rem'],
      },
      {
        selector: '.my-48',
        values: ['marginTop: 19.2rem', 'marginBottom: 19.2rem'],
      },
      {
        selector: '.mx-48',
        values: ['marginLeft: 19.2rem', 'marginRight: 19.2rem'],
      },
      {
        selector: '.my-56',
        values: ['marginTop: 22.4rem', 'marginBottom: 22.4rem'],
      },
      {
        selector: '.mx-56',
        values: ['marginLeft: 22.4rem', 'marginRight: 22.4rem'],
      },
      {
        selector: '.my-64',
        values: ['marginTop: 25.6rem', 'marginBottom: 25.6rem'],
      },
      {
        selector: '.mx-64',
        values: ['marginLeft: 25.6rem', 'marginRight: 25.6rem'],
      },
      {
        selector: '.my-auto',
        values: ['marginTop: auto', 'marginBottom: auto'],
      },
      {
        selector: '.mx-auto',
        values: ['marginLeft: auto', 'marginRight: auto'],
      },
      {
        selector: '.my-1.5',
        values: ['marginTop: 0.6rem', 'marginBottom: 0.6rem'],
      },
      {
        selector: '.mx-1.5',
        values: ['marginLeft: 0.6rem', 'marginRight: 0.6rem'],
      },
      {
        selector: '.my-0.5',
        values: ['marginTop: 0.2rem', 'marginBottom: 0.2rem'],
      },
      {
        selector: '.mx-0.5',
        values: ['marginLeft: 0.2rem', 'marginRight: 0.2rem'],
      },
      {
        selector: '.-my-1.5',
        values: ['marginTop: -0.6rem', 'marginBottom: -0.6rem'],
      },
      {
        selector: '.-mx-1.5',
        values: ['marginLeft: -0.6rem', 'marginRight: -0.6rem'],
      },
      {
        selector: '.-my-0.5',
        values: ['marginTop: -0.2rem', 'marginBottom: -0.2rem'],
      },
      {
        selector: '.-mx-0.5',
        values: ['marginLeft: -0.2rem', 'marginRight: -0.2rem'],
      },
      {
        selector: '.my-px',
        values: ['marginTop: 1px', 'marginBottom: 1px'],
      },
      {
        selector: '.mx-px',
        values: ['marginLeft: 1px', 'marginRight: 1px'],
      },
      {
        selector: '.-my-1',
        values: ['marginTop: -0.4rem', 'marginBottom: -0.4rem'],
      },
      {
        selector: '.-mx-1',
        values: ['marginLeft: -0.4rem', 'marginRight: -0.4rem'],
      },
      {
        selector: '.-my-2',
        values: ['marginTop: -0.8rem', 'marginBottom: -0.8rem'],
      },
      {
        selector: '.-mx-2',
        values: ['marginLeft: -0.8rem', 'marginRight: -0.8rem'],
      },
      {
        selector: '.-my-3',
        values: ['marginTop: -1.2rem', 'marginBottom: -1.2rem'],
      },
      {
        selector: '.-mx-3',
        values: ['marginLeft: -1.2rem', 'marginRight: -1.2rem'],
      },
      {
        selector: '.-my-4',
        values: ['marginTop: -1.6rem', 'marginBottom: -1.6rem'],
      },
      {
        selector: '.-mx-4',
        values: ['marginLeft: -1.6rem', 'marginRight: -1.6rem'],
      },
      {
        selector: '.-my-5',
        values: ['marginTop: -2rem', 'marginBottom: -2rem'],
      },
      {
        selector: '.-mx-5',
        values: ['marginLeft: -2rem', 'marginRight: -2rem'],
      },
      {
        selector: '.-my-6',
        values: ['marginTop: -2.4rem', 'marginBottom: -2.4rem'],
      },
      {
        selector: '.-mx-6',
        values: ['marginLeft: -2.4rem', 'marginRight: -2.4rem'],
      },
      {
        selector: '.-my-7',
        values: ['marginTop: -2.8rem', 'marginBottom: -2.8rem'],
      },
      {
        selector: '.-mx-7',
        values: ['marginLeft: -2.8rem', 'marginRight: -2.8rem'],
      },
      {
        selector: '.-my-8',
        values: ['marginTop: -3.2rem', 'marginBottom: -3.2rem'],
      },
      {
        selector: '.-mx-8',
        values: ['marginLeft: -3.2rem', 'marginRight: -3.2rem'],
      },
      {
        selector: '.-my-9',
        values: ['marginTop: -3.6rem', 'marginBottom: -3.6rem'],
      },
      {
        selector: '.-mx-9',
        values: ['marginLeft: -3.6rem', 'marginRight: -3.6rem'],
      },
      {
        selector: '.-my-10',
        values: ['marginTop: -4rem', 'marginBottom: -4rem'],
      },
      {
        selector: '.-mx-10',
        values: ['marginLeft: -4rem', 'marginRight: -4rem'],
      },
      {
        selector: '.-my-11',
        values: ['marginTop: -4.4rem', 'marginBottom: -4.4rem'],
      },
      {
        selector: '.-mx-11',
        values: ['marginLeft: -4.4rem', 'marginRight: -4.4rem'],
      },
      {
        selector: '.-my-12',
        values: ['marginTop: -4.8rem', 'marginBottom: -4.8rem'],
      },
      {
        selector: '.-mx-12',
        values: ['marginLeft: -4.8rem', 'marginRight: -4.8rem'],
      },
      {
        selector: '.-my-16',
        values: ['marginTop: -6.4rem', 'marginBottom: -6.4rem'],
      },
      {
        selector: '.-mx-16',
        values: ['marginLeft: -6.4rem', 'marginRight: -6.4rem'],
      },
      {
        selector: '.-my-20',
        values: ['marginTop: -8rem', 'marginBottom: -8rem'],
      },
      {
        selector: '.-mx-20',
        values: ['marginLeft: -8rem', 'marginRight: -8rem'],
      },
      {
        selector: '.-my-24',
        values: ['marginTop: -9.6rem', 'marginBottom: -9.6rem'],
      },
      {
        selector: '.-mx-24',
        values: ['marginLeft: -9.6rem', 'marginRight: -9.6rem'],
      },
      {
        selector: '.-my-32',
        values: ['marginTop: -12.8rem', 'marginBottom: -12.8rem'],
      },
      {
        selector: '.-mx-32',
        values: ['marginLeft: -12.8rem', 'marginRight: -12.8rem'],
      },
      {
        selector: '.-my-40',
        values: ['marginTop: -16rem', 'marginBottom: -16rem'],
      },
      {
        selector: '.-mx-40',
        values: ['marginLeft: -16rem', 'marginRight: -16rem'],
      },
      {
        selector: '.-my-48',
        values: ['marginTop: -19.2rem', 'marginBottom: -19.2rem'],
      },
      {
        selector: '.-mx-48',
        values: ['marginLeft: -19.2rem', 'marginRight: -19.2rem'],
      },
      {
        selector: '.-my-56',
        values: ['marginTop: -22.4rem', 'marginBottom: -22.4rem'],
      },
      {
        selector: '.-mx-56',
        values: ['marginLeft: -22.4rem', 'marginRight: -22.4rem'],
      },
      {
        selector: '.-my-64',
        values: ['marginTop: -25.6rem', 'marginBottom: -25.6rem'],
      },
      {
        selector: '.-mx-64',
        values: ['marginLeft: -25.6rem', 'marginRight: -25.6rem'],
      },
      {
        selector: '.-my-px',
        values: ['marginTop: -1px', 'marginBottom: -1px'],
      },
      {
        selector: '.-mx-px',
        values: ['marginLeft: -1px', 'marginRight: -1px'],
      },
      {
        selector: '.mt-0',
        values: ['marginTop: 0'],
      },
      {
        selector: '.mr-0',
        values: ['marginRight: 0'],
      },
      {
        selector: '.mb-0',
        values: ['marginBottom: 0'],
      },
      {
        selector: '.ml-0',
        values: ['marginLeft: 0'],
      },
      {
        selector: '.mt-1',
        values: ['marginTop: 0.4rem'],
      },
      {
        selector: '.mr-1',
        values: ['marginRight: 0.4rem'],
      },
      {
        selector: '.mb-1',
        values: ['marginBottom: 0.4rem'],
      },
      {
        selector: '.ml-1',
        values: ['marginLeft: 0.4rem'],
      },
      {
        selector: '.mt-2',
        values: ['marginTop: 0.8rem'],
      },
      {
        selector: '.mr-2',
        values: ['marginRight: 0.8rem'],
      },
      {
        selector: '.mb-2',
        values: ['marginBottom: 0.8rem'],
      },
      {
        selector: '.ml-2',
        values: ['marginLeft: 0.8rem'],
      },
      {
        selector: '.mt-3',
        values: ['marginTop: 1.2rem'],
      },
      {
        selector: '.mr-3',
        values: ['marginRight: 1.2rem'],
      },
      {
        selector: '.mb-3',
        values: ['marginBottom: 1.2rem'],
      },
      {
        selector: '.ml-3',
        values: ['marginLeft: 1.2rem'],
      },
      {
        selector: '.mt-4',
        values: ['marginTop: 1.6rem'],
      },
      {
        selector: '.mr-4',
        values: ['marginRight: 1.6rem'],
      },
      {
        selector: '.mb-4',
        values: ['marginBottom: 1.6rem'],
      },
      {
        selector: '.ml-4',
        values: ['marginLeft: 1.6rem'],
      },
      {
        selector: '.mt-5',
        values: ['marginTop: 2rem'],
      },
      {
        selector: '.mr-5',
        values: ['marginRight: 2rem'],
      },
      {
        selector: '.mb-5',
        values: ['marginBottom: 2rem'],
      },
      {
        selector: '.ml-5',
        values: ['marginLeft: 2rem'],
      },
      {
        selector: '.mt-6',
        values: ['marginTop: 2.4rem'],
      },
      {
        selector: '.mr-6',
        values: ['marginRight: 2.4rem'],
      },
      {
        selector: '.mb-6',
        values: ['marginBottom: 2.4rem'],
      },
      {
        selector: '.ml-6',
        values: ['marginLeft: 2.4rem'],
      },
      {
        selector: '.mt-7',
        values: ['marginTop: 2.8rem'],
      },
      {
        selector: '.mr-7',
        values: ['marginRight: 2.8rem'],
      },
      {
        selector: '.mb-7',
        values: ['marginBottom: 2.8rem'],
      },
      {
        selector: '.ml-7',
        values: ['marginLeft: 2.8rem'],
      },
      {
        selector: '.mt-8',
        values: ['marginTop: 3.2rem'],
      },
      {
        selector: '.mr-8',
        values: ['marginRight: 3.2rem'],
      },
      {
        selector: '.mb-8',
        values: ['marginBottom: 3.2rem'],
      },
      {
        selector: '.ml-8',
        values: ['marginLeft: 3.2rem'],
      },
      {
        selector: '.mt-9',
        values: ['marginTop: 3.6rem'],
      },
      {
        selector: '.mr-9',
        values: ['marginRight: 3.6rem'],
      },
      {
        selector: '.mb-9',
        values: ['marginBottom: 3.6rem'],
      },
      {
        selector: '.ml-9',
        values: ['marginLeft: 3.6rem'],
      },
      {
        selector: '.mt-10',
        values: ['marginTop: 4rem'],
      },
      {
        selector: '.mr-10',
        values: ['marginRight: 4rem'],
      },
      {
        selector: '.mb-10',
        values: ['marginBottom: 4rem'],
      },
      {
        selector: '.ml-10',
        values: ['marginLeft: 4rem'],
      },
      {
        selector: '.mt-11',
        values: ['marginTop: 4.4rem'],
      },
      {
        selector: '.mr-11',
        values: ['marginRight: 4.4rem'],
      },
      {
        selector: '.mb-11',
        values: ['marginBottom: 4.4rem'],
      },
      {
        selector: '.ml-11',
        values: ['marginLeft: 4.4rem'],
      },
      {
        selector: '.mt-12',
        values: ['marginTop: 4.8rem'],
      },
      {
        selector: '.mr-12',
        values: ['marginRight: 4.8rem'],
      },
      {
        selector: '.mb-12',
        values: ['marginBottom: 4.8rem'],
      },
      {
        selector: '.ml-12',
        values: ['marginLeft: 4.8rem'],
      },
      {
        selector: '.mt-16',
        values: ['marginTop: 6.4rem'],
      },
      {
        selector: '.mr-16',
        values: ['marginRight: 6.4rem'],
      },
      {
        selector: '.mb-16',
        values: ['marginBottom: 6.4rem'],
      },
      {
        selector: '.ml-16',
        values: ['marginLeft: 6.4rem'],
      },
      {
        selector: '.mt-20',
        values: ['marginTop: 8rem'],
      },
      {
        selector: '.mr-20',
        values: ['marginRight: 8rem'],
      },
      {
        selector: '.mb-20',
        values: ['marginBottom: 8rem'],
      },
      {
        selector: '.ml-20',
        values: ['marginLeft: 8rem'],
      },
      {
        selector: '.mt-24',
        values: ['marginTop: 9.6rem'],
      },
      {
        selector: '.mr-24',
        values: ['marginRight: 9.6rem'],
      },
      {
        selector: '.mb-24',
        values: ['marginBottom: 9.6rem'],
      },
      {
        selector: '.ml-24',
        values: ['marginLeft: 9.6rem'],
      },
      {
        selector: '.mt-32',
        values: ['marginTop: 12.8rem'],
      },
      {
        selector: '.mr-32',
        values: ['marginRight: 12.8rem'],
      },
      {
        selector: '.mb-32',
        values: ['marginBottom: 12.8rem'],
      },
      {
        selector: '.ml-32',
        values: ['marginLeft: 12.8rem'],
      },
      {
        selector: '.mt-40',
        values: ['marginTop: 16rem'],
      },
      {
        selector: '.mr-40',
        values: ['marginRight: 16rem'],
      },
      {
        selector: '.mb-40',
        values: ['marginBottom: 16rem'],
      },
      {
        selector: '.ml-40',
        values: ['marginLeft: 16rem'],
      },
      {
        selector: '.mt-48',
        values: ['marginTop: 19.2rem'],
      },
      {
        selector: '.mr-48',
        values: ['marginRight: 19.2rem'],
      },
      {
        selector: '.mb-48',
        values: ['marginBottom: 19.2rem'],
      },
      {
        selector: '.ml-48',
        values: ['marginLeft: 19.2rem'],
      },
      {
        selector: '.mt-56',
        values: ['marginTop: 22.4rem'],
      },
      {
        selector: '.mr-56',
        values: ['marginRight: 22.4rem'],
      },
      {
        selector: '.mb-56',
        values: ['marginBottom: 22.4rem'],
      },
      {
        selector: '.ml-56',
        values: ['marginLeft: 22.4rem'],
      },
      {
        selector: '.mt-64',
        values: ['marginTop: 25.6rem'],
      },
      {
        selector: '.mr-64',
        values: ['marginRight: 25.6rem'],
      },
      {
        selector: '.mb-64',
        values: ['marginBottom: 25.6rem'],
      },
      {
        selector: '.ml-64',
        values: ['marginLeft: 25.6rem'],
      },
      {
        selector: '.mt-auto',
        values: ['marginTop: auto'],
      },
      {
        selector: '.mr-auto',
        values: ['marginRight: auto'],
      },
      {
        selector: '.mb-auto',
        values: ['marginBottom: auto'],
      },
      {
        selector: '.ml-auto',
        values: ['marginLeft: auto'],
      },
      {
        selector: '.mt-1.5',
        values: ['marginTop: 0.6rem'],
      },
      {
        selector: '.mr-1.5',
        values: ['marginRight: 0.6rem'],
      },
      {
        selector: '.mb-1.5',
        values: ['marginBottom: 0.6rem'],
      },
      {
        selector: '.ml-1.5',
        values: ['marginLeft: 0.6rem'],
      },
      {
        selector: '.mt-0.5',
        values: ['marginTop: 0.2rem'],
      },
      {
        selector: '.mr-0.5',
        values: ['marginRight: 0.2rem'],
      },
      {
        selector: '.mb-0.5',
        values: ['marginBottom: 0.2rem'],
      },
      {
        selector: '.ml-0.5',
        values: ['marginLeft: 0.2rem'],
      },
      {
        selector: '.-mt-1.5',
        values: ['marginTop: -0.6rem'],
      },
      {
        selector: '.-mr-1.5',
        values: ['marginRight: -0.6rem'],
      },
      {
        selector: '.-mb-1.5',
        values: ['marginBottom: -0.6rem'],
      },
      {
        selector: '.-ml-1.5',
        values: ['marginLeft: -0.6rem'],
      },
      {
        selector: '.-mt-0.5',
        values: ['marginTop: -0.2rem'],
      },
      {
        selector: '.-mr-0.5',
        values: ['marginRight: -0.2rem'],
      },
      {
        selector: '.-mb-0.5',
        values: ['marginBottom: -0.2rem'],
      },
      {
        selector: '.-ml-0.5',
        values: ['marginLeft: -0.2rem'],
      },
      {
        selector: '.mt-px',
        values: ['marginTop: 1px'],
      },
      {
        selector: '.mr-px',
        values: ['marginRight: 1px'],
      },
      {
        selector: '.mb-px',
        values: ['marginBottom: 1px'],
      },
      {
        selector: '.ml-px',
        values: ['marginLeft: 1px'],
      },
      {
        selector: '.-mt-1',
        values: ['marginTop: -0.4rem'],
      },
      {
        selector: '.-mr-1',
        values: ['marginRight: -0.4rem'],
      },
      {
        selector: '.-mb-1',
        values: ['marginBottom: -0.4rem'],
      },
      {
        selector: '.-ml-1',
        values: ['marginLeft: -0.4rem'],
      },
      {
        selector: '.-mt-2',
        values: ['marginTop: -0.8rem'],
      },
      {
        selector: '.-mr-2',
        values: ['marginRight: -0.8rem'],
      },
      {
        selector: '.-mb-2',
        values: ['marginBottom: -0.8rem'],
      },
      {
        selector: '.-ml-2',
        values: ['marginLeft: -0.8rem'],
      },
      {
        selector: '.-mt-3',
        values: ['marginTop: -1.2rem'],
      },
      {
        selector: '.-mr-3',
        values: ['marginRight: -1.2rem'],
      },
      {
        selector: '.-mb-3',
        values: ['marginBottom: -1.2rem'],
      },
      {
        selector: '.-ml-3',
        values: ['marginLeft: -1.2rem'],
      },
      {
        selector: '.-mt-4',
        values: ['marginTop: -1.6rem'],
      },
      {
        selector: '.-mr-4',
        values: ['marginRight: -1.6rem'],
      },
      {
        selector: '.-mb-4',
        values: ['marginBottom: -1.6rem'],
      },
      {
        selector: '.-ml-4',
        values: ['marginLeft: -1.6rem'],
      },
      {
        selector: '.-mt-5',
        values: ['marginTop: -2rem'],
      },
      {
        selector: '.-mr-5',
        values: ['marginRight: -2rem'],
      },
      {
        selector: '.-mb-5',
        values: ['marginBottom: -2rem'],
      },
      {
        selector: '.-ml-5',
        values: ['marginLeft: -2rem'],
      },
      {
        selector: '.-mt-6',
        values: ['marginTop: -2.4rem'],
      },
      {
        selector: '.-mr-6',
        values: ['marginRight: -2.4rem'],
      },
      {
        selector: '.-mb-6',
        values: ['marginBottom: -2.4rem'],
      },
      {
        selector: '.-ml-6',
        values: ['marginLeft: -2.4rem'],
      },
      {
        selector: '.-mt-7',
        values: ['marginTop: -2.8rem'],
      },
      {
        selector: '.-mr-7',
        values: ['marginRight: -2.8rem'],
      },
      {
        selector: '.-mb-7',
        values: ['marginBottom: -2.8rem'],
      },
      {
        selector: '.-ml-7',
        values: ['marginLeft: -2.8rem'],
      },
      {
        selector: '.-mt-8',
        values: ['marginTop: -3.2rem'],
      },
      {
        selector: '.-mr-8',
        values: ['marginRight: -3.2rem'],
      },
      {
        selector: '.-mb-8',
        values: ['marginBottom: -3.2rem'],
      },
      {
        selector: '.-ml-8',
        values: ['marginLeft: -3.2rem'],
      },
      {
        selector: '.-mt-9',
        values: ['marginTop: -3.6rem'],
      },
      {
        selector: '.-mr-9',
        values: ['marginRight: -3.6rem'],
      },
      {
        selector: '.-mb-9',
        values: ['marginBottom: -3.6rem'],
      },
      {
        selector: '.-ml-9',
        values: ['marginLeft: -3.6rem'],
      },
      {
        selector: '.-mt-10',
        values: ['marginTop: -4rem'],
      },
      {
        selector: '.-mr-10',
        values: ['marginRight: -4rem'],
      },
      {
        selector: '.-mb-10',
        values: ['marginBottom: -4rem'],
      },
      {
        selector: '.-ml-10',
        values: ['marginLeft: -4rem'],
      },
      {
        selector: '.-mt-11',
        values: ['marginTop: -4.4rem'],
      },
      {
        selector: '.-mr-11',
        values: ['marginRight: -4.4rem'],
      },
      {
        selector: '.-mb-11',
        values: ['marginBottom: -4.4rem'],
      },
      {
        selector: '.-ml-11',
        values: ['marginLeft: -4.4rem'],
      },
      {
        selector: '.-mt-12',
        values: ['marginTop: -4.8rem'],
      },
      {
        selector: '.-mr-12',
        values: ['marginRight: -4.8rem'],
      },
      {
        selector: '.-mb-12',
        values: ['marginBottom: -4.8rem'],
      },
      {
        selector: '.-ml-12',
        values: ['marginLeft: -4.8rem'],
      },
      {
        selector: '.-mt-16',
        values: ['marginTop: -6.4rem'],
      },
      {
        selector: '.-mr-16',
        values: ['marginRight: -6.4rem'],
      },
      {
        selector: '.-mb-16',
        values: ['marginBottom: -6.4rem'],
      },
      {
        selector: '.-ml-16',
        values: ['marginLeft: -6.4rem'],
      },
      {
        selector: '.-mt-20',
        values: ['marginTop: -8rem'],
      },
      {
        selector: '.-mr-20',
        values: ['marginRight: -8rem'],
      },
      {
        selector: '.-mb-20',
        values: ['marginBottom: -8rem'],
      },
      {
        selector: '.-ml-20',
        values: ['marginLeft: -8rem'],
      },
      {
        selector: '.-mt-24',
        values: ['marginTop: -9.6rem'],
      },
      {
        selector: '.-mr-24',
        values: ['marginRight: -9.6rem'],
      },
      {
        selector: '.-mb-24',
        values: ['marginBottom: -9.6rem'],
      },
      {
        selector: '.-ml-24',
        values: ['marginLeft: -9.6rem'],
      },
      {
        selector: '.-mt-32',
        values: ['marginTop: -12.8rem'],
      },
      {
        selector: '.-mr-32',
        values: ['marginRight: -12.8rem'],
      },
      {
        selector: '.-mb-32',
        values: ['marginBottom: -12.8rem'],
      },
      {
        selector: '.-ml-32',
        values: ['marginLeft: -12.8rem'],
      },
      {
        selector: '.-mt-40',
        values: ['marginTop: -16rem'],
      },
      {
        selector: '.-mr-40',
        values: ['marginRight: -16rem'],
      },
      {
        selector: '.-mb-40',
        values: ['marginBottom: -16rem'],
      },
      {
        selector: '.-ml-40',
        values: ['marginLeft: -16rem'],
      },
      {
        selector: '.-mt-48',
        values: ['marginTop: -19.2rem'],
      },
      {
        selector: '.-mr-48',
        values: ['marginRight: -19.2rem'],
      },
      {
        selector: '.-mb-48',
        values: ['marginBottom: -19.2rem'],
      },
      {
        selector: '.-ml-48',
        values: ['marginLeft: -19.2rem'],
      },
      {
        selector: '.-mt-56',
        values: ['marginTop: -22.4rem'],
      },
      {
        selector: '.-mr-56',
        values: ['marginRight: -22.4rem'],
      },
      {
        selector: '.-mb-56',
        values: ['marginBottom: -22.4rem'],
      },
      {
        selector: '.-ml-56',
        values: ['marginLeft: -22.4rem'],
      },
      {
        selector: '.-mt-64',
        values: ['marginTop: -25.6rem'],
      },
      {
        selector: '.-mr-64',
        values: ['marginRight: -25.6rem'],
      },
      {
        selector: '.-mb-64',
        values: ['marginBottom: -25.6rem'],
      },
      {
        selector: '.-ml-64',
        values: ['marginLeft: -25.6rem'],
      },
      {
        selector: '.-mt-px',
        values: ['marginTop: -1px'],
      },
      {
        selector: '.-mr-px',
        values: ['marginRight: -1px'],
      },
      {
        selector: '.-mb-px',
        values: ['marginBottom: -1px'],
      },
      {
        selector: '.-ml-px',
        values: ['marginLeft: -1px'],
      },
    ],
  },
  {
    type: 'width',
    description: 'Controls width',
    category: 'SIZING',
    rules: [
      {
        selector: '.w-0',
        values: ['width: 0'],
      },
      {
        selector: '.w-1',
        values: ['width: 0.4rem'],
      },
      {
        selector: '.w-2',
        values: ['width: 0.8rem'],
      },
      {
        selector: '.w-3',
        values: ['width: 1.2rem'],
      },
      {
        selector: '.w-4',
        values: ['width: 1.6rem'],
      },
      {
        selector: '.w-5',
        values: ['width: 2rem'],
      },
      {
        selector: '.w-6',
        values: ['width: 2.4rem'],
      },
      {
        selector: '.w-7',
        values: ['width: 2.8rem'],
      },
      {
        selector: '.w-8',
        values: ['width: 3.2rem'],
      },
      {
        selector: '.w-9',
        values: ['width: 3.6rem'],
      },
      {
        selector: '.w-10',
        values: ['width: 4rem'],
      },
      {
        selector: '.w-11',
        values: ['width: 4.4rem'],
      },
      {
        selector: '.w-12',
        values: ['width: 4.8rem'],
      },
      {
        selector: '.w-16',
        values: ['width: 6.4rem'],
      },
      {
        selector: '.w-20',
        values: ['width: 8rem'],
      },
      {
        selector: '.w-24',
        values: ['width: 9.6rem'],
      },
      {
        selector: '.w-32',
        values: ['width: 12.8rem'],
      },
      {
        selector: '.w-40',
        values: ['width: 16rem'],
      },
      {
        selector: '.w-48',
        values: ['width: 19.2rem'],
      },
      {
        selector: '.w-56',
        values: ['width: 22.4rem'],
      },
      {
        selector: '.w-64',
        values: ['width: 25.6rem'],
      },
      {
        selector: '.w-auto',
        values: ['width: auto'],
      },
      {
        selector: '.w-px',
        values: ['width: 1px'],
      },
      {
        selector: '.w-1/2',
        values: ['width: 50%'],
      },
      {
        selector: '.w-1/3',
        values: ['width: 33.333333%'],
      },
      {
        selector: '.w-1/4',
        values: ['width: 25%'],
      },
      {
        selector: '.w-2/3',
        values: ['width: 66.666667%'],
      },
      {
        selector: '.w-2/4',
        values: ['width: 50%'],
      },
      {
        selector: '.w-3/4',
        values: ['width: 75%'],
      },
      {
        selector: '.w-1/24',
        values: ['width: 4.166667%'],
      },
      {
        selector: '.w-2/24',
        values: ['width: 8.333333%'],
      },
      {
        selector: '.w-3/24',
        values: ['width: 12.5%'],
      },
      {
        selector: '.w-4/24',
        values: ['width: 16.666667%'],
      },
      {
        selector: '.w-5/24',
        values: ['width: 20.833333%'],
      },
      {
        selector: '.w-6/24',
        values: ['width: 25%'],
      },
      {
        selector: '.w-7/24',
        values: ['width: 29.166667%'],
      },
      {
        selector: '.w-8/24',
        values: ['width: 33.333333%'],
      },
      {
        selector: '.w-9/24',
        values: ['width: 37.5%'],
      },
      {
        selector: '.w-10/24',
        values: ['width: 41.666667%'],
      },
      {
        selector: '.w-11/24',
        values: ['width: 45.833333%'],
      },
      {
        selector: '.w-12/24',
        values: ['width: 50%'],
      },
      {
        selector: '.w-13/24',
        values: ['width: 54.166667%'],
      },
      {
        selector: '.w-14/24',
        values: ['width: 58.333333%'],
      },
      {
        selector: '.w-15/24',
        values: ['width: 62.5%'],
      },
      {
        selector: '.w-16/24',
        values: ['width: 66.666667%'],
      },
      {
        selector: '.w-17/24',
        values: ['width: 70.833333%'],
      },
      {
        selector: '.w-18/24',
        values: ['width: 75%'],
      },
      {
        selector: '.w-19/24',
        values: ['width: 79.166667%'],
      },
      {
        selector: '.w-20/24',
        values: ['width: 83.333333%'],
      },
      {
        selector: '.w-21/24',
        values: ['width: 87.5%'],
      },
      {
        selector: '.w-22/24',
        values: ['width: 91.666667%'],
      },
      {
        selector: '.w-23/24',
        values: ['width: 95.833333%'],
      },
      {
        selector: '.w-full',
        values: ['width: 100%'],
      },
    ],
  },
  {
    type: 'min-width',
    description: 'Controls width',
    category: 'SIZING',
    variantConfigKey: 'minWidth',
    rules: [
      {
        selector: '.min-w-0',
        values: ['minWidth: 0'],
      },
      {
        selector: '.min-w-full',
        values: ['minWidth: 100%'],
      },
    ],
  },
  {
    type: 'max-width',
    description: 'Controls width',
    category: 'SIZING',
    variantConfigKey: 'maxWidth',
    rules: [
      {
        selector: '.max-w-none',
        values: ['maxWidth: none'],
      },
      {
        selector: '.max-w-xs',
        values: ['maxWidth: 20rem'],
      },
      {
        selector: '.max-w-sm',
        values: ['maxWidth: 24rem'],
      },
      {
        selector: '.max-w-md',
        values: ['maxWidth: 28rem'],
      },
      {
        selector: '.max-w-lg',
        values: ['maxWidth: 32rem'],
      },
      {
        selector: '.max-w-xl',
        values: ['maxWidth: 36rem'],
      },
      {
        selector: '.max-w-2xl',
        values: ['maxWidth: 42rem'],
      },
      {
        selector: '.max-w-3xl',
        values: ['maxWidth: 48rem'],
      },
      {
        selector: '.max-w-4xl',
        values: ['maxWidth: 56rem'],
      },
      {
        selector: '.max-w-5xl',
        values: ['maxWidth: 64rem'],
      },
      {
        selector: '.max-w-6xl',
        values: ['maxWidth: 72rem'],
      },
      {
        selector: '.max-w-full',
        values: ['maxWidth: 100%'],
      },
      {
        selector: '.max-w-screen-sm',
        values: ['maxWidth: 640px'],
      },
      {
        selector: '.max-w-screen-md',
        values: ['maxWidth: 768px'],
      },
      {
        selector: '.max-w-screen-lg',
        values: ['maxWidth: 1024px'],
      },
      {
        selector: '.max-w-screen-xl',
        values: ['maxWidth: 1280px'],
      },
    ],
  },
  {
    type: 'height',
    description: 'Controls width',
    category: 'SIZING',
    rules: [
      {
        selector: '.h-0',
        values: ['height: 0'],
      },
      {
        selector: '.h-1',
        values: ['height: 0.4rem'],
      },
      {
        selector: '.h-2',
        values: ['height: 0.8rem'],
      },
      {
        selector: '.h-3',
        values: ['height: 1.2rem'],
      },
      {
        selector: '.h-4',
        values: ['height: 1.6rem'],
      },
      {
        selector: '.h-5',
        values: ['height: 2rem'],
      },
      {
        selector: '.h-6',
        values: ['height: 2.4rem'],
      },
      {
        selector: '.h-7',
        values: ['height: 2.8rem'],
      },
      {
        selector: '.h-8',
        values: ['height: 3.2rem'],
      },
      {
        selector: '.h-9',
        values: ['height: 3.6rem'],
      },
      {
        selector: '.h-10',
        values: ['height: 4rem'],
      },
      {
        selector: '.h-11',
        values: ['height: 4.4rem'],
      },
      {
        selector: '.h-12',
        values: ['height: 4.8rem'],
      },
      {
        selector: '.h-16',
        values: ['height: 6.4rem'],
      },
      {
        selector: '.h-20',
        values: ['height: 8rem'],
      },
      {
        selector: '.h-24',
        values: ['height: 9.6rem'],
      },
      {
        selector: '.h-32',
        values: ['height: 12.8rem'],
      },
      {
        selector: '.h-40',
        values: ['height: 16rem'],
      },
      {
        selector: '.h-48',
        values: ['height: 19.2rem'],
      },
      {
        selector: '.h-56',
        values: ['height: 22.4rem'],
      },
      {
        selector: '.h-64',
        values: ['height: 25.6rem'],
      },
      {
        selector: '.h-auto',
        values: ['height: auto'],
      },
      {
        selector: '.h-px',
        values: ['height: 1px'],
      },
      {
        selector: '.h-1/2',
        values: ['height: 50%'],
      },
      {
        selector: '.h-full',
        values: ['height: 100%'],
      },
      {
        selector: '.h-screen',
        values: ['height: 100vh'],
      },
    ],
  },
  {
    type: 'min-height',
    description: 'Controls width',
    category: 'SIZING',
    variantConfigKey: 'minHeight',
    rules: [
      {
        selector: '.min-h-0',
        values: ['minHeight: 0'],
      },
      {
        selector: '.min-h-full',
        values: ['minHeight: 100%'],
      },
      {
        selector: '.min-h-screen',
        values: ['minHeight: 100vh'],
      },
    ],
  },
  {
    type: 'max-height',
    description: 'Controls width',
    category: 'SIZING',
    variantConfigKey: 'maxHeight',
    rules: [
      {
        selector: '.max-h-full',
        values: ['maxHeight: 100%'],
      },
      {
        selector: '.max-h-screen',
        values: ['maxHeight: 100vh'],
      },
    ],
  },
  {
    type: 'cursor',
    description: '',
    category: 'INTERACTIVITY',
    rules: [
      {
        selector: '.cursor-auto',
        values: ['cursor: auto'],
      },
      {
        selector: '.cursor-default',
        values: ['cursor: default'],
      },
      {
        selector: '.cursor-pointer',
        values: ['cursor: pointer'],
      },
      {
        selector: '.cursor-wait',
        values: ['cursor: wait'],
      },
      {
        selector: '.cursor-text',
        values: ['cursor: text'],
      },
      {
        selector: '.cursor-move',
        values: ['cursor: move'],
      },
      {
        selector: '.cursor-not-allowed',
        values: ['cursor: not-allowed'],
      },
    ],
  },
  {
    type: 'pointer-events',
    description: '',
    category: 'INTERACTIVITY',
    rules: [
      {
        selector: '.pointer-events-none',
        values: ['pointerEvents: none'],
      },
      {
        selector: '.pointer-events-auto',
        values: ['pointerEvents: auto'],
      },
    ],
  },
  {
    type: 'appearance',
    description: '',
    category: 'INTERACTIVITY',
    rules: [
      {
        selector: '.appearance-none',
        values: ['appearance: none'],
      },
    ],
  },
  {
    type: 'resize',
    description: 'controls how an element can be resized',
    category: 'INTERACTIVITY',
    rules: [
      {
        selector: '.resize-none',
        values: ['resize: none'],
      },
      {
        selector: '.resize-y',
        values: ['resize: vertical'],
      },
      {
        selector: '.resize-x',
        values: ['resize: horizontal'],
      },
      {
        selector: '.resize',
        values: ['resize: both'],
      },
    ],
  },
  {
    type: 'box-shadow',
    description: 'Controls box-shadow',
    category: 'MISC',
    rules: [
      {
        selector: '.spr-shadow-01',
        values: ['boxShadow: var(--spr-shadow-01, 0 1px 4px 0 rgba(10,10,20,0.15))'],
      },
      {
        selector: '.spr-shadow-02',
        values: ['boxShadow: var(--spr-shadow-02, 0 2px 8px 0 rgba(10,10,20,0.20))'],
      },
      {
        selector: '.spr-shadow-03',
        values: ['boxShadow: var(--spr-shadow-03, -2px 9px 12px 0 rgba(10,10,20,0.60))'],
      },
      {
        selector: '.spr-shadow-04',
        values: ['boxShadow: var(--spr-shadow-04, 0px -2px 8px 0px rgba(10,10,20,0.2))'],
      },
      {
        selector: '.spr-shadow-05',
        values: ['boxShadow: var(--spr-shadow-05, 0px 3px 4px 0 rgba(0,0,0,0.1))'],
      },
      {
        selector: '.spr-shadow-06',
        values: ['boxShadow: var(--spr-shadow-06, 0px -3px 4px 0 rgba(0,0,0,0.1))'],
      },
    ],
  },
  {
    type: 'opacity',
    description: 'Controls opacity',
    category: 'MISC',
    rules: [
      {
        selector: '.opacity-0',
        values: ['opacity: 0'],
      },
      {
        selector: '.opacity-5',
        values: ['opacity: 0.05'],
      },
      {
        selector: '.opacity-10',
        values: ['opacity: 0.1'],
      },
      {
        selector: '.opacity-15',
        values: ['opacity: 0.15'],
      },
      {
        selector: '.opacity-20',
        values: ['opacity: 0.2'],
      },
      {
        selector: '.opacity-25',
        values: ['opacity: 0.25'],
      },
      {
        selector: '.opacity-30',
        values: ['opacity: 0.3'],
      },
      {
        selector: '.opacity-40',
        values: ['opacity: 0.4'],
      },
      {
        selector: '.opacity-50',
        values: ['opacity: 0.5'],
      },
      {
        selector: '.opacity-60',
        values: ['opacity: 0.6'],
      },
      {
        selector: '.opacity-70',
        values: ['opacity: 0.7'],
      },
      {
        selector: '.opacity-75',
        values: ['opacity: 0.75'],
      },
      {
        selector: '.opacity-80',
        values: ['opacity: 0.8'],
      },
      {
        selector: '.opacity-90',
        values: ['opacity: 0.9'],
      },
      {
        selector: '.opacity-100',
        values: ['opacity: 1'],
      },
    ],
  },
  {
    type: 'stroke',
    description: 'Controls stroke',
    category: 'MISC',
    rules: [
      {
        selector: '.stroke-current',
        values: ['stroke: currentColor'],
      },
    ],
  },
  {
    type: 'table-layout',
    description: 'Controls table-layout',
    category: 'MISC',
    rules: [
      {
        selector: '.table-auto',
        values: ['tableLayout: auto'],
      },
      {
        selector: '.table-fixed',
        values: ['tableLayout: fixed'],
      },
    ],
  },
  {
    type: 'visibility',
    description: '',
    category: 'MISC',
    rules: [
      {
        selector: '.visible',
        values: ['visibility: visible'],
      },
      {
        selector: '.invisible',
        values: ['visibility: hidden'],
      },
    ],
  },
  {
    type: 'stroke-width',
    description: '',
    category: 'MISC',
    rules: [
      {
        selector: '.stroke-0',
        values: ['strokeWidth: 0'],
      },
      {
        selector: '.stroke-1',
        values: ['strokeWidth: 1'],
      },
      {
        selector: '.stroke-2',
        values: ['strokeWidth: 2'],
      },
    ],
  },
  {
    type: 'outline',
    description: '',
    category: 'MISC',
    rules: [
      {
        selector: '.outline-01',
        values: ['outlineStyle: solid', 'outlineWidth: 2px', 'outlineColor: #0828CC', 'outlineOffset: 2px'],
      },
    ],
  },
  {
    type: 'outline-width',
    description: '',
    category: 'MISC',
    rules: [
      {
        selector: '.outline-width-1',
        values: ['outlineWidth: 1px'],
      },
      {
        selector: '.outline-width-2',
        values: ['outlineWidth: 2px'],
      },
    ],
  },
  {
    type: 'outline-style',
    description: '',
    category: 'MISC',
    rules: [
      {
        selector: '.outline-none',
        values: ['outlineStyle: none'],
      },
      {
        selector: '.outline-solid',
        values: ['outlineStyle: solid'],
      },
      {
        selector: '.outline-dashed',
        values: ['outlineStyle: dashed'],
      },
      {
        selector: '.outline-dotted',
        values: ['outlineStyle: dotted'],
      },
      {
        selector: '.outline-double',
        values: ['outlineStyle: double'],
      },
      {
        selector: '.outline-hidden',
        values: ['outlineStyle: hidden'],
      },
    ],
  },
  {
    type: 'outline-offset',
    description: '',
    category: 'MISC',
    rules: [
      {
        selector: '.outline-offset-0',
        values: ['outlineOffset: 0px'],
      },
      {
        selector: '.outline-offset-1',
        values: ['outlineOffset: 1px'],
      },
      {
        selector: '.outline-offset-2',
        values: ['outlineOffset: 2px'],
      },
      {
        selector: '.-outline-offset-2',
        values: ['outlineOffset: -2px'],
      },
      {
        selector: '.-outline-offset-1',
        values: ['outlineOffset: -1px'],
      },
    ],
  },
  {
    type: 'gap',
    description: 'add gap between cells',
    category: 'GRID',
    rules: [
      {
        selector: '.gap-0',
        values: ['gridGap: 0', 'gap: 0'],
      },
      {
        selector: '.gap-1',
        values: ['gridGap: 0.4rem', 'gap: 0.4rem'],
      },
      {
        selector: '.gap-2',
        values: ['gridGap: 0.8rem', 'gap: 0.8rem'],
      },
      {
        selector: '.gap-3',
        values: ['gridGap: 1.2rem', 'gap: 1.2rem'],
      },
      {
        selector: '.gap-4',
        values: ['gridGap: 1.6rem', 'gap: 1.6rem'],
      },
      {
        selector: '.gap-5',
        values: ['gridGap: 2rem', 'gap: 2rem'],
      },
      {
        selector: '.gap-6',
        values: ['gridGap: 2.4rem', 'gap: 2.4rem'],
      },
      {
        selector: '.gap-7',
        values: ['gridGap: 2.8rem', 'gap: 2.8rem'],
      },
      {
        selector: '.gap-8',
        values: ['gridGap: 3.2rem', 'gap: 3.2rem'],
      },
      {
        selector: '.gap-9',
        values: ['gridGap: 3.6rem', 'gap: 3.6rem'],
      },
      {
        selector: '.gap-10',
        values: ['gridGap: 4rem', 'gap: 4rem'],
      },
      {
        selector: '.gap-11',
        values: ['gridGap: 4.4rem', 'gap: 4.4rem'],
      },
      {
        selector: '.gap-12',
        values: ['gridGap: 4.8rem', 'gap: 4.8rem'],
      },
      {
        selector: '.gap-16',
        values: ['gridGap: 6.4rem', 'gap: 6.4rem'],
      },
      {
        selector: '.gap-20',
        values: ['gridGap: 8rem', 'gap: 8rem'],
      },
      {
        selector: '.gap-24',
        values: ['gridGap: 9.6rem', 'gap: 9.6rem'],
      },
      {
        selector: '.gap-32',
        values: ['gridGap: 12.8rem', 'gap: 12.8rem'],
      },
      {
        selector: '.gap-40',
        values: ['gridGap: 16rem', 'gap: 16rem'],
      },
      {
        selector: '.gap-48',
        values: ['gridGap: 19.2rem', 'gap: 19.2rem'],
      },
      {
        selector: '.gap-56',
        values: ['gridGap: 22.4rem', 'gap: 22.4rem'],
      },
      {
        selector: '.gap-64',
        values: ['gridGap: 25.6rem', 'gap: 25.6rem'],
      },
      {
        selector: '.gap-px',
        values: ['gridGap: 1px', 'gap: 1px'],
      },
    ],
  },
  {
    type: 'grid-column-gap',
    description: 'add gap between columns',
    category: 'GRID',
    path: 'gap',
    rules: [
      {
        selector: '.gap-x-0',
        values: ['gridColumnGap: 0', 'columnGap: 0'],
      },
      {
        selector: '.gap-x-1',
        values: ['gridColumnGap: 0.4rem', 'columnGap: 0.4rem'],
      },
      {
        selector: '.gap-x-2',
        values: ['gridColumnGap: 0.8rem', 'columnGap: 0.8rem'],
      },
      {
        selector: '.gap-x-3',
        values: ['gridColumnGap: 1.2rem', 'columnGap: 1.2rem'],
      },
      {
        selector: '.gap-x-4',
        values: ['gridColumnGap: 1.6rem', 'columnGap: 1.6rem'],
      },
      {
        selector: '.gap-x-5',
        values: ['gridColumnGap: 2rem', 'columnGap: 2rem'],
      },
      {
        selector: '.gap-x-6',
        values: ['gridColumnGap: 2.4rem', 'columnGap: 2.4rem'],
      },
      {
        selector: '.gap-x-7',
        values: ['gridColumnGap: 2.8rem', 'columnGap: 2.8rem'],
      },
      {
        selector: '.gap-x-8',
        values: ['gridColumnGap: 3.2rem', 'columnGap: 3.2rem'],
      },
      {
        selector: '.gap-x-9',
        values: ['gridColumnGap: 3.6rem', 'columnGap: 3.6rem'],
      },
      {
        selector: '.gap-x-10',
        values: ['gridColumnGap: 4rem', 'columnGap: 4rem'],
      },
      {
        selector: '.gap-x-11',
        values: ['gridColumnGap: 4.4rem', 'columnGap: 4.4rem'],
      },
      {
        selector: '.gap-x-12',
        values: ['gridColumnGap: 4.8rem', 'columnGap: 4.8rem'],
      },
      {
        selector: '.gap-x-16',
        values: ['gridColumnGap: 6.4rem', 'columnGap: 6.4rem'],
      },
      {
        selector: '.gap-x-20',
        values: ['gridColumnGap: 8rem', 'columnGap: 8rem'],
      },
      {
        selector: '.gap-x-24',
        values: ['gridColumnGap: 9.6rem', 'columnGap: 9.6rem'],
      },
      {
        selector: '.gap-x-32',
        values: ['gridColumnGap: 12.8rem', 'columnGap: 12.8rem'],
      },
      {
        selector: '.gap-x-40',
        values: ['gridColumnGap: 16rem', 'columnGap: 16rem'],
      },
      {
        selector: '.gap-x-48',
        values: ['gridColumnGap: 19.2rem', 'columnGap: 19.2rem'],
      },
      {
        selector: '.gap-x-56',
        values: ['gridColumnGap: 22.4rem', 'columnGap: 22.4rem'],
      },
      {
        selector: '.gap-x-64',
        values: ['gridColumnGap: 25.6rem', 'columnGap: 25.6rem'],
      },
      {
        selector: '.gap-x-px',
        values: ['gridColumnGap: 1px', 'columnGap: 1px'],
      },
    ],
  },
  {
    type: 'grid-row-gap',
    description: 'add gap between rows',
    category: 'GRID',
    path: 'gap',
    rules: [
      {
        selector: '.gap-y-0',
        values: ['gridRowGap: 0', 'rowGap: 0'],
      },
      {
        selector: '.gap-y-1',
        values: ['gridRowGap: 0.4rem', 'rowGap: 0.4rem'],
      },
      {
        selector: '.gap-y-2',
        values: ['gridRowGap: 0.8rem', 'rowGap: 0.8rem'],
      },
      {
        selector: '.gap-y-3',
        values: ['gridRowGap: 1.2rem', 'rowGap: 1.2rem'],
      },
      {
        selector: '.gap-y-4',
        values: ['gridRowGap: 1.6rem', 'rowGap: 1.6rem'],
      },
      {
        selector: '.gap-y-5',
        values: ['gridRowGap: 2rem', 'rowGap: 2rem'],
      },
      {
        selector: '.gap-y-6',
        values: ['gridRowGap: 2.4rem', 'rowGap: 2.4rem'],
      },
      {
        selector: '.gap-y-7',
        values: ['gridRowGap: 2.8rem', 'rowGap: 2.8rem'],
      },
      {
        selector: '.gap-y-8',
        values: ['gridRowGap: 3.2rem', 'rowGap: 3.2rem'],
      },
      {
        selector: '.gap-y-9',
        values: ['gridRowGap: 3.6rem', 'rowGap: 3.6rem'],
      },
      {
        selector: '.gap-y-10',
        values: ['gridRowGap: 4rem', 'rowGap: 4rem'],
      },
      {
        selector: '.gap-y-11',
        values: ['gridRowGap: 4.4rem', 'rowGap: 4.4rem'],
      },
      {
        selector: '.gap-y-12',
        values: ['gridRowGap: 4.8rem', 'rowGap: 4.8rem'],
      },
      {
        selector: '.gap-y-16',
        values: ['gridRowGap: 6.4rem', 'rowGap: 6.4rem'],
      },
      {
        selector: '.gap-y-20',
        values: ['gridRowGap: 8rem', 'rowGap: 8rem'],
      },
      {
        selector: '.gap-y-24',
        values: ['gridRowGap: 9.6rem', 'rowGap: 9.6rem'],
      },
      {
        selector: '.gap-y-32',
        values: ['gridRowGap: 12.8rem', 'rowGap: 12.8rem'],
      },
      {
        selector: '.gap-y-40',
        values: ['gridRowGap: 16rem', 'rowGap: 16rem'],
      },
      {
        selector: '.gap-y-48',
        values: ['gridRowGap: 19.2rem', 'rowGap: 19.2rem'],
      },
      {
        selector: '.gap-y-56',
        values: ['gridRowGap: 22.4rem', 'rowGap: 22.4rem'],
      },
      {
        selector: '.gap-y-64',
        values: ['gridRowGap: 25.6rem', 'rowGap: 25.6rem'],
      },
      {
        selector: '.gap-y-px',
        values: ['gridRowGap: 1px', 'rowGap: 1px'],
      },
    ],
  },
  {
    type: 'grid-template-columns',
    description: '',
    category: 'GRID',
    rules: [
      {
        selector: '.grid-cols-1',
        values: ['gridTemplateColumns: repeat(1, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-2',
        values: ['gridTemplateColumns: repeat(2, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-3',
        values: ['gridTemplateColumns: repeat(3, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-4',
        values: ['gridTemplateColumns: repeat(4, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-5',
        values: ['gridTemplateColumns: repeat(5, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-6',
        values: ['gridTemplateColumns: repeat(6, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-7',
        values: ['gridTemplateColumns: repeat(7, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-8',
        values: ['gridTemplateColumns: repeat(8, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-9',
        values: ['gridTemplateColumns: repeat(9, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-10',
        values: ['gridTemplateColumns: repeat(10, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-11',
        values: ['gridTemplateColumns: repeat(11, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-12',
        values: ['gridTemplateColumns: repeat(12, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-13',
        values: ['gridTemplateColumns: repeat(13, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-14',
        values: ['gridTemplateColumns: repeat(14, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-15',
        values: ['gridTemplateColumns: repeat(15, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-16',
        values: ['gridTemplateColumns: repeat(16, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-17',
        values: ['gridTemplateColumns: repeat(17, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-18',
        values: ['gridTemplateColumns: repeat(18, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-19',
        values: ['gridTemplateColumns: repeat(19, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-20',
        values: ['gridTemplateColumns: repeat(20, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-21',
        values: ['gridTemplateColumns: repeat(21, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-22',
        values: ['gridTemplateColumns: repeat(22, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-23',
        values: ['gridTemplateColumns: repeat(23, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-24',
        values: ['gridTemplateColumns: repeat(24, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-cols-none',
        values: ['gridTemplateColumns: none'],
      },
    ],
  },
  {
    type: 'col-span',
    description: 'Spans cell to given number of columns',
    category: 'GRID',
    path: 'grid-column',
    rules: [
      {
        selector: '.col-auto',
        values: ['gridColumn: auto'],
      },
      {
        selector: '.col-span-1',
        values: ['gridColumn: span 1 / span 1'],
      },
      {
        selector: '.col-span-2',
        values: ['gridColumn: span 2 / span 2'],
      },
      {
        selector: '.col-span-3',
        values: ['gridColumn: span 3 / span 3'],
      },
      {
        selector: '.col-span-4',
        values: ['gridColumn: span 4 / span 4'],
      },
      {
        selector: '.col-span-5',
        values: ['gridColumn: span 5 / span 5'],
      },
      {
        selector: '.col-span-6',
        values: ['gridColumn: span 6 / span 6'],
      },
      {
        selector: '.col-span-7',
        values: ['gridColumn: span 7 / span 7'],
      },
      {
        selector: '.col-span-8',
        values: ['gridColumn: span 8 / span 8'],
      },
      {
        selector: '.col-span-9',
        values: ['gridColumn: span 9 / span 9'],
      },
      {
        selector: '.col-span-10',
        values: ['gridColumn: span 10 / span 10'],
      },
      {
        selector: '.col-span-11',
        values: ['gridColumn: span 11 / span 11'],
      },
      {
        selector: '.col-span-12',
        values: ['gridColumn: span 12 / span 12'],
      },
      {
        selector: '.col-span-13',
        values: ['gridColumn: span 13 / span 13'],
      },
      {
        selector: '.col-span-14',
        values: ['gridColumn: span 14 / span 14'],
      },
      {
        selector: '.col-span-15',
        values: ['gridColumn: span 15 / span 15'],
      },
      {
        selector: '.col-span-16',
        values: ['gridColumn: span 16 / span 16'],
      },
      {
        selector: '.col-span-17',
        values: ['gridColumn: span 17 / span 17'],
      },
      {
        selector: '.col-span-18',
        values: ['gridColumn: span 18 / span 18'],
      },
      {
        selector: '.col-span-19',
        values: ['gridColumn: span 19 / span 19'],
      },
      {
        selector: '.col-span-20',
        values: ['gridColumn: span 20 / span 20'],
      },
      {
        selector: '.col-span-21',
        values: ['gridColumn: span 21 / span 21'],
      },
      {
        selector: '.col-span-22',
        values: ['gridColumn: span 22 / span 22'],
      },
      {
        selector: '.col-span-23',
        values: ['gridColumn: span 23 / span 23'],
      },
      {
        selector: '.col-span-24',
        values: ['gridColumn: span 24 / span 24'],
      },
    ],
  },
  {
    type: 'grid-column-start',
    description: 'Starts cell at given number of column',
    category: 'GRID',
    path: 'grid-column',
    rules: [
      {
        selector: '.col-start-1',
        values: ['gridColumnStart: 1'],
      },
      {
        selector: '.col-start-2',
        values: ['gridColumnStart: 2'],
      },
      {
        selector: '.col-start-3',
        values: ['gridColumnStart: 3'],
      },
      {
        selector: '.col-start-4',
        values: ['gridColumnStart: 4'],
      },
      {
        selector: '.col-start-5',
        values: ['gridColumnStart: 5'],
      },
      {
        selector: '.col-start-6',
        values: ['gridColumnStart: 6'],
      },
      {
        selector: '.col-start-7',
        values: ['gridColumnStart: 7'],
      },
      {
        selector: '.col-start-8',
        values: ['gridColumnStart: 8'],
      },
      {
        selector: '.col-start-9',
        values: ['gridColumnStart: 9'],
      },
      {
        selector: '.col-start-10',
        values: ['gridColumnStart: 10'],
      },
      {
        selector: '.col-start-11',
        values: ['gridColumnStart: 11'],
      },
      {
        selector: '.col-start-12',
        values: ['gridColumnStart: 12'],
      },
      {
        selector: '.col-start-13',
        values: ['gridColumnStart: 13'],
      },
      {
        selector: '.col-start-14',
        values: ['gridColumnStart: 14'],
      },
      {
        selector: '.col-start-15',
        values: ['gridColumnStart: 15'],
      },
      {
        selector: '.col-start-16',
        values: ['gridColumnStart: 16'],
      },
      {
        selector: '.col-start-17',
        values: ['gridColumnStart: 17'],
      },
      {
        selector: '.col-start-18',
        values: ['gridColumnStart: 18'],
      },
      {
        selector: '.col-start-19',
        values: ['gridColumnStart: 19'],
      },
      {
        selector: '.col-start-20',
        values: ['gridColumnStart: 20'],
      },
      {
        selector: '.col-start-21',
        values: ['gridColumnStart: 21'],
      },
      {
        selector: '.col-start-22',
        values: ['gridColumnStart: 22'],
      },
      {
        selector: '.col-start-23',
        values: ['gridColumnStart: 23'],
      },
      {
        selector: '.col-start-24',
        values: ['gridColumnStart: 24'],
      },
      {
        selector: '.col-start-auto',
        values: ['gridColumnStart: auto'],
      },
    ],
  },
  {
    type: 'grid-column-end',
    description: 'Ends cell at given number of column',
    category: 'GRID',
    path: 'grid-column',
    rules: [
      {
        selector: '.col-end-1',
        values: ['gridColumnEnd: 1'],
      },
      {
        selector: '.col-end-2',
        values: ['gridColumnEnd: 2'],
      },
      {
        selector: '.col-end-3',
        values: ['gridColumnEnd: 3'],
      },
      {
        selector: '.col-end-4',
        values: ['gridColumnEnd: 4'],
      },
      {
        selector: '.col-end-5',
        values: ['gridColumnEnd: 5'],
      },
      {
        selector: '.col-end-6',
        values: ['gridColumnEnd: 6'],
      },
      {
        selector: '.col-end-7',
        values: ['gridColumnEnd: 7'],
      },
      {
        selector: '.col-end-8',
        values: ['gridColumnEnd: 8'],
      },
      {
        selector: '.col-end-9',
        values: ['gridColumnEnd: 9'],
      },
      {
        selector: '.col-end-10',
        values: ['gridColumnEnd: 10'],
      },
      {
        selector: '.col-end-11',
        values: ['gridColumnEnd: 11'],
      },
      {
        selector: '.col-end-12',
        values: ['gridColumnEnd: 12'],
      },
      {
        selector: '.col-end-13',
        values: ['gridColumnEnd: 13'],
      },
      {
        selector: '.col-end-14',
        values: ['gridColumnEnd: 14'],
      },
      {
        selector: '.col-end-15',
        values: ['gridColumnEnd: 15'],
      },
      {
        selector: '.col-end-16',
        values: ['gridColumnEnd: 16'],
      },
      {
        selector: '.col-end-17',
        values: ['gridColumnEnd: 17'],
      },
      {
        selector: '.col-end-18',
        values: ['gridColumnEnd: 18'],
      },
      {
        selector: '.col-end-19',
        values: ['gridColumnEnd: 19'],
      },
      {
        selector: '.col-end-20',
        values: ['gridColumnEnd: 20'],
      },
      {
        selector: '.col-end-21',
        values: ['gridColumnEnd: 21'],
      },
      {
        selector: '.col-end-22',
        values: ['gridColumnEnd: 22'],
      },
      {
        selector: '.col-end-23',
        values: ['gridColumnEnd: 23'],
      },
      {
        selector: '.col-end-24',
        values: ['gridColumnEnd: 24'],
      },
      {
        selector: '.col-end-auto',
        values: ['gridColumnEnd: auto'],
      },
    ],
  },
  {
    type: 'grid-template-rows',
    description: '',
    category: 'GRID',
    rules: [
      {
        selector: '.grid-rows-1',
        values: ['gridTemplateRows: repeat(1, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-2',
        values: ['gridTemplateRows: repeat(2, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-3',
        values: ['gridTemplateRows: repeat(3, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-4',
        values: ['gridTemplateRows: repeat(4, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-5',
        values: ['gridTemplateRows: repeat(5, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-6',
        values: ['gridTemplateRows: repeat(6, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-7',
        values: ['gridTemplateRows: repeat(7, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-8',
        values: ['gridTemplateRows: repeat(8, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-9',
        values: ['gridTemplateRows: repeat(9, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-10',
        values: ['gridTemplateRows: repeat(10, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-11',
        values: ['gridTemplateRows: repeat(11, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-12',
        values: ['gridTemplateRows: repeat(12, minmax(0, 1fr))'],
      },
      {
        selector: '.grid-rows-none',
        values: ['gridTemplateRows: none'],
      },
    ],
  },
  {
    type: 'row-span',
    description: 'Spans cell to given number of rows',
    category: 'GRID',
    path: 'grid-row',
    rules: [
      {
        selector: '.row-auto',
        values: ['gridRow: auto'],
      },
      {
        selector: '.row-span-1',
        values: ['gridRow: span 1 / span 1'],
      },
      {
        selector: '.row-span-2',
        values: ['gridRow: span 2 / span 2'],
      },
      {
        selector: '.row-span-3',
        values: ['gridRow: span 3 / span 3'],
      },
      {
        selector: '.row-span-4',
        values: ['gridRow: span 4 / span 4'],
      },
      {
        selector: '.row-span-5',
        values: ['gridRow: span 5 / span 5'],
      },
      {
        selector: '.row-span-6',
        values: ['gridRow: span 6 / span 6'],
      },
      {
        selector: '.row-span-7',
        values: ['gridRow: span 7 / span 7'],
      },
      {
        selector: '.row-span-8',
        values: ['gridRow: span 8 / span 8'],
      },
      {
        selector: '.row-span-9',
        values: ['gridRow: span 9 / span 9'],
      },
      {
        selector: '.row-span-10',
        values: ['gridRow: span 10 / span 10'],
      },
      {
        selector: '.row-span-11',
        values: ['gridRow: span 11 / span 11'],
      },
      {
        selector: '.row-span-12',
        values: ['gridRow: span 12 / span 12'],
      },
    ],
  },
  {
    type: 'grid-row-start',
    description: 'Starts cell at given number of row',
    category: 'GRID',
    path: 'grid-row',
    rules: [
      {
        selector: '.row-start-1',
        values: ['gridRowStart: 1'],
      },
      {
        selector: '.row-start-2',
        values: ['gridRowStart: 2'],
      },
      {
        selector: '.row-start-3',
        values: ['gridRowStart: 3'],
      },
      {
        selector: '.row-start-4',
        values: ['gridRowStart: 4'],
      },
      {
        selector: '.row-start-5',
        values: ['gridRowStart: 5'],
      },
      {
        selector: '.row-start-6',
        values: ['gridRowStart: 6'],
      },
      {
        selector: '.row-start-7',
        values: ['gridRowStart: 7'],
      },
      {
        selector: '.row-start-8',
        values: ['gridRowStart: 8'],
      },
      {
        selector: '.row-start-9',
        values: ['gridRowStart: 9'],
      },
      {
        selector: '.row-start-10',
        values: ['gridRowStart: 10'],
      },
      {
        selector: '.row-start-11',
        values: ['gridRowStart: 11'],
      },
      {
        selector: '.row-start-12',
        values: ['gridRowStart: 12'],
      },
      {
        selector: '.row-start-13',
        values: ['gridRowStart: 13'],
      },
      {
        selector: '.row-start-auto',
        values: ['gridRowStart: auto'],
      },
    ],
  },
  {
    type: 'grid-row-end',
    description: 'Ends cell at given number of row',
    category: 'GRID',
    path: 'grid-row',
    rules: [
      {
        selector: '.row-end-1',
        values: ['gridRowEnd: 1'],
      },
      {
        selector: '.row-end-2',
        values: ['gridRowEnd: 2'],
      },
      {
        selector: '.row-end-3',
        values: ['gridRowEnd: 3'],
      },
      {
        selector: '.row-end-4',
        values: ['gridRowEnd: 4'],
      },
      {
        selector: '.row-end-5',
        values: ['gridRowEnd: 5'],
      },
      {
        selector: '.row-end-6',
        values: ['gridRowEnd: 6'],
      },
      {
        selector: '.row-end-7',
        values: ['gridRowEnd: 7'],
      },
      {
        selector: '.row-end-8',
        values: ['gridRowEnd: 8'],
      },
      {
        selector: '.row-end-9',
        values: ['gridRowEnd: 9'],
      },
      {
        selector: '.row-end-10',
        values: ['gridRowEnd: 10'],
      },
      {
        selector: '.row-end-11',
        values: ['gridRowEnd: 11'],
      },
      {
        selector: '.row-end-12',
        values: ['gridRowEnd: 12'],
      },
      {
        selector: '.row-end-13',
        values: ['gridRowEnd: 13'],
      },
      {
        selector: '.row-end-auto',
        values: ['gridRowEnd: auto'],
      },
    ],
  },
  {
    type: 'grid-auto-flow',
    description: 'sets placing of element in grid',
    category: 'GRID',
    rules: [
      {
        selector: '.grid-flow-row',
        values: ['gridAutoFlow: row'],
      },
      {
        selector: '.grid-flow-col',
        values: ['gridAutoFlow: column'],
      },
      {
        selector: '.grid-flow-row-dense',
        values: ['gridAutoFlow: row dense'],
      },
      {
        selector: '.grid-flow-col-dense',
        values: ['gridAutoFlow: column dense'],
      },
    ],
  },
  {
    type: 'transition-property',
    description: 'Adds transition effects',
    category: 'TRANSITIONS',
    rules: [
      {
        selector: '.transition-none',
        values: ['transitionProperty: none'],
      },
      {
        selector: '.transition-all',
        values: ['transitionProperty: all'],
      },
      {
        selector: '.transition',
        values: [
          'transitionProperty: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
        ],
      },
      {
        selector: '.transition-colors',
        values: ['transitionProperty: background-color, border-color, color, fill, stroke'],
      },
      {
        selector: '.transition-opacity',
        values: ['transitionProperty: opacity'],
      },
      {
        selector: '.transition-shadow',
        values: ['transitionProperty: box-shadow'],
      },
      {
        selector: '.transition-transform',
        values: ['transitionProperty: transform'],
      },
    ],
  },
  {
    type: 'transition-timing-function',
    description: 'Sets transition timing',
    category: 'TRANSITIONS',
    rules: [
      {
        selector: '.ease-linear',
        values: ['transitionTimingFunction: linear'],
      },
      {
        selector: '.ease-in',
        values: ['transitionTimingFunction: cubic-bezier(0.4, 0, 1, 1)'],
      },
      {
        selector: '.ease-out',
        values: ['transitionTimingFunction: cubic-bezier(0, 0, 0.2, 1)'],
      },
      {
        selector: '.ease-in-out',
        values: ['transitionTimingFunction: cubic-bezier(0.4, 0, 0.2, 1)'],
      },
    ],
  },
  {
    type: 'transition-duration',
    description: 'Sets transition duration',
    category: 'TRANSITIONS',
    rules: [
      {
        selector: '.duration-75',
        values: ['transitionDuration: 75ms'],
      },
      {
        selector: '.duration-100',
        values: ['transitionDuration: 100ms'],
      },
      {
        selector: '.duration-150',
        values: ['transitionDuration: 150ms'],
      },
      {
        selector: '.duration-200',
        values: ['transitionDuration: 200ms'],
      },
      {
        selector: '.duration-300',
        values: ['transitionDuration: 300ms'],
      },
      {
        selector: '.duration-500',
        values: ['transitionDuration: 500ms'],
      },
      {
        selector: '.duration-700',
        values: ['transitionDuration: 700ms'],
      },
      {
        selector: '.duration-1000',
        values: ['transitionDuration: 1000ms'],
      },
    ],
  },
  {
    type: 'transition-delay',
    description: 'Sets delay of transitions',
    category: 'TRANSITIONS',
    rules: [
      {
        selector: '.delay-75',
        values: ['transitionDelay: 75ms'],
      },
      {
        selector: '.delay-100',
        values: ['transitionDelay: 100ms'],
      },
      {
        selector: '.delay-150',
        values: ['transitionDelay: 150ms'],
      },
      {
        selector: '.delay-200',
        values: ['transitionDelay: 200ms'],
      },
      {
        selector: '.delay-300',
        values: ['transitionDelay: 300ms'],
      },
      {
        selector: '.delay-500',
        values: ['transitionDelay: 500ms'],
      },
      {
        selector: '.delay-700',
        values: ['transitionDelay: 700ms'],
      },
      {
        selector: '.delay-1000',
        values: ['transitionDelay: 1000ms'],
      },
    ],
  },
  {
    type: 'translate',
    description: 'translates elements with transfrom',
    category: 'TRANSFORM',
    rules: [
      {
        selector: '.translate-x-0',
        values: ['-TransformTranslateX: 0'],
      },
      {
        selector: '.translate-x-1',
        values: ['-TransformTranslateX: 0.4rem'],
      },
      {
        selector: '.translate-x-2',
        values: ['-TransformTranslateX: 0.8rem'],
      },
      {
        selector: '.translate-x-3',
        values: ['-TransformTranslateX: 1.2rem'],
      },
      {
        selector: '.translate-x-4',
        values: ['-TransformTranslateX: 1.6rem'],
      },
      {
        selector: '.translate-x-5',
        values: ['-TransformTranslateX: 2rem'],
      },
      {
        selector: '.translate-x-6',
        values: ['-TransformTranslateX: 2.4rem'],
      },
      {
        selector: '.translate-x-7',
        values: ['-TransformTranslateX: 2.8rem'],
      },
      {
        selector: '.translate-x-8',
        values: ['-TransformTranslateX: 3.2rem'],
      },
      {
        selector: '.translate-x-9',
        values: ['-TransformTranslateX: 3.6rem'],
      },
      {
        selector: '.translate-x-10',
        values: ['-TransformTranslateX: 4rem'],
      },
      {
        selector: '.translate-x-11',
        values: ['-TransformTranslateX: 4.4rem'],
      },
      {
        selector: '.translate-x-12',
        values: ['-TransformTranslateX: 4.8rem'],
      },
      {
        selector: '.translate-x-16',
        values: ['-TransformTranslateX: 6.4rem'],
      },
      {
        selector: '.translate-x-20',
        values: ['-TransformTranslateX: 8rem'],
      },
      {
        selector: '.translate-x-24',
        values: ['-TransformTranslateX: 9.6rem'],
      },
      {
        selector: '.translate-x-32',
        values: ['-TransformTranslateX: 12.8rem'],
      },
      {
        selector: '.translate-x-40',
        values: ['-TransformTranslateX: 16rem'],
      },
      {
        selector: '.translate-x-48',
        values: ['-TransformTranslateX: 19.2rem'],
      },
      {
        selector: '.translate-x-56',
        values: ['-TransformTranslateX: 22.4rem'],
      },
      {
        selector: '.translate-x-64',
        values: ['-TransformTranslateX: 25.6rem'],
      },
      {
        selector: '.translate-x-px',
        values: ['-TransformTranslateX: 1px'],
      },
      {
        selector: '.-translate-x-1',
        values: ['-TransformTranslateX: -0.4rem'],
      },
      {
        selector: '.-translate-x-2',
        values: ['-TransformTranslateX: -0.8rem'],
      },
      {
        selector: '.-translate-x-3',
        values: ['-TransformTranslateX: -1.2rem'],
      },
      {
        selector: '.-translate-x-4',
        values: ['-TransformTranslateX: -1.6rem'],
      },
      {
        selector: '.-translate-x-5',
        values: ['-TransformTranslateX: -2rem'],
      },
      {
        selector: '.-translate-x-6',
        values: ['-TransformTranslateX: -2.4rem'],
      },
      {
        selector: '.-translate-x-7',
        values: ['-TransformTranslateX: -2.8rem'],
      },
      {
        selector: '.-translate-x-8',
        values: ['-TransformTranslateX: -3.2rem'],
      },
      {
        selector: '.-translate-x-9',
        values: ['-TransformTranslateX: -3.6rem'],
      },
      {
        selector: '.-translate-x-10',
        values: ['-TransformTranslateX: -4rem'],
      },
      {
        selector: '.-translate-x-11',
        values: ['-TransformTranslateX: -4.4rem'],
      },
      {
        selector: '.-translate-x-12',
        values: ['-TransformTranslateX: -4.8rem'],
      },
      {
        selector: '.-translate-x-16',
        values: ['-TransformTranslateX: -6.4rem'],
      },
      {
        selector: '.-translate-x-20',
        values: ['-TransformTranslateX: -8rem'],
      },
      {
        selector: '.-translate-x-24',
        values: ['-TransformTranslateX: -9.6rem'],
      },
      {
        selector: '.-translate-x-32',
        values: ['-TransformTranslateX: -12.8rem'],
      },
      {
        selector: '.-translate-x-40',
        values: ['-TransformTranslateX: -16rem'],
      },
      {
        selector: '.-translate-x-48',
        values: ['-TransformTranslateX: -19.2rem'],
      },
      {
        selector: '.-translate-x-56',
        values: ['-TransformTranslateX: -22.4rem'],
      },
      {
        selector: '.-translate-x-64',
        values: ['-TransformTranslateX: -25.6rem'],
      },
      {
        selector: '.-translate-x-px',
        values: ['-TransformTranslateX: -1px'],
      },
      {
        selector: '.-translate-x-full',
        values: ['-TransformTranslateX: -100%'],
      },
      {
        selector: '.-translate-x-1/2',
        values: ['-TransformTranslateX: -50%'],
      },
      {
        selector: '.translate-x-1/2',
        values: ['-TransformTranslateX: 50%'],
      },
      {
        selector: '.translate-x-full',
        values: ['-TransformTranslateX: 100%'],
      },
      {
        selector: '.translate-y-0',
        values: ['-TransformTranslateY: 0'],
      },
      {
        selector: '.translate-y-1',
        values: ['-TransformTranslateY: 0.4rem'],
      },
      {
        selector: '.translate-y-2',
        values: ['-TransformTranslateY: 0.8rem'],
      },
      {
        selector: '.translate-y-3',
        values: ['-TransformTranslateY: 1.2rem'],
      },
      {
        selector: '.translate-y-4',
        values: ['-TransformTranslateY: 1.6rem'],
      },
      {
        selector: '.translate-y-5',
        values: ['-TransformTranslateY: 2rem'],
      },
      {
        selector: '.translate-y-6',
        values: ['-TransformTranslateY: 2.4rem'],
      },
      {
        selector: '.translate-y-7',
        values: ['-TransformTranslateY: 2.8rem'],
      },
      {
        selector: '.translate-y-8',
        values: ['-TransformTranslateY: 3.2rem'],
      },
      {
        selector: '.translate-y-9',
        values: ['-TransformTranslateY: 3.6rem'],
      },
      {
        selector: '.translate-y-10',
        values: ['-TransformTranslateY: 4rem'],
      },
      {
        selector: '.translate-y-11',
        values: ['-TransformTranslateY: 4.4rem'],
      },
      {
        selector: '.translate-y-12',
        values: ['-TransformTranslateY: 4.8rem'],
      },
      {
        selector: '.translate-y-16',
        values: ['-TransformTranslateY: 6.4rem'],
      },
      {
        selector: '.translate-y-20',
        values: ['-TransformTranslateY: 8rem'],
      },
      {
        selector: '.translate-y-24',
        values: ['-TransformTranslateY: 9.6rem'],
      },
      {
        selector: '.translate-y-32',
        values: ['-TransformTranslateY: 12.8rem'],
      },
      {
        selector: '.translate-y-40',
        values: ['-TransformTranslateY: 16rem'],
      },
      {
        selector: '.translate-y-48',
        values: ['-TransformTranslateY: 19.2rem'],
      },
      {
        selector: '.translate-y-56',
        values: ['-TransformTranslateY: 22.4rem'],
      },
      {
        selector: '.translate-y-64',
        values: ['-TransformTranslateY: 25.6rem'],
      },
      {
        selector: '.translate-y-px',
        values: ['-TransformTranslateY: 1px'],
      },
      {
        selector: '.-translate-y-1',
        values: ['-TransformTranslateY: -0.4rem'],
      },
      {
        selector: '.-translate-y-2',
        values: ['-TransformTranslateY: -0.8rem'],
      },
      {
        selector: '.-translate-y-3',
        values: ['-TransformTranslateY: -1.2rem'],
      },
      {
        selector: '.-translate-y-4',
        values: ['-TransformTranslateY: -1.6rem'],
      },
      {
        selector: '.-translate-y-5',
        values: ['-TransformTranslateY: -2rem'],
      },
      {
        selector: '.-translate-y-6',
        values: ['-TransformTranslateY: -2.4rem'],
      },
      {
        selector: '.-translate-y-7',
        values: ['-TransformTranslateY: -2.8rem'],
      },
      {
        selector: '.-translate-y-8',
        values: ['-TransformTranslateY: -3.2rem'],
      },
      {
        selector: '.-translate-y-9',
        values: ['-TransformTranslateY: -3.6rem'],
      },
      {
        selector: '.-translate-y-10',
        values: ['-TransformTranslateY: -4rem'],
      },
      {
        selector: '.-translate-y-11',
        values: ['-TransformTranslateY: -4.4rem'],
      },
      {
        selector: '.-translate-y-12',
        values: ['-TransformTranslateY: -4.8rem'],
      },
      {
        selector: '.-translate-y-16',
        values: ['-TransformTranslateY: -6.4rem'],
      },
      {
        selector: '.-translate-y-20',
        values: ['-TransformTranslateY: -8rem'],
      },
      {
        selector: '.-translate-y-24',
        values: ['-TransformTranslateY: -9.6rem'],
      },
      {
        selector: '.-translate-y-32',
        values: ['-TransformTranslateY: -12.8rem'],
      },
      {
        selector: '.-translate-y-40',
        values: ['-TransformTranslateY: -16rem'],
      },
      {
        selector: '.-translate-y-48',
        values: ['-TransformTranslateY: -19.2rem'],
      },
      {
        selector: '.-translate-y-56',
        values: ['-TransformTranslateY: -22.4rem'],
      },
      {
        selector: '.-translate-y-64',
        values: ['-TransformTranslateY: -25.6rem'],
      },
      {
        selector: '.-translate-y-px',
        values: ['-TransformTranslateY: -1px'],
      },
      {
        selector: '.-translate-y-full',
        values: ['-TransformTranslateY: -100%'],
      },
      {
        selector: '.-translate-y-1/2',
        values: ['-TransformTranslateY: -50%'],
      },
      {
        selector: '.translate-y-1/2',
        values: ['-TransformTranslateY: 50%'],
      },
      {
        selector: '.translate-y-full',
        values: ['-TransformTranslateY: 100%'],
      },
      {
        selector: '.transition-transform',
        values: ['transitionProperty: transform'],
      },
      {
        selector: '.transform',
        values: [
          '-TransformTranslateX: 0',
          '-TransformTranslateY: 0',
          '-TransformRotate: 0',
          '-TransformSkewX: 0',
          '-TransformSkewY: 0',
          '-TransformScaleX: 1',
          '-TransformScaleY: 1',
          'transform: translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))',
        ],
      },
      {
        selector: '.transform-none',
        values: ['transform: none'],
      },
    ],
  },
  {
    type: 'rotate',
    description: 'rotates elements',
    category: 'TRANSFORM',
    rules: [
      {
        selector: '.rotate-0',
        values: ['-TransformRotate: 0'],
      },
      {
        selector: '.rotate-45',
        values: ['-TransformRotate: 45deg'],
      },
      {
        selector: '.rotate-90',
        values: ['-TransformRotate: 90deg'],
      },
      {
        selector: '.rotate-180',
        values: ['-TransformRotate: 180deg'],
      },
      {
        selector: '.-rotate-180',
        values: ['-TransformRotate: -180deg'],
      },
      {
        selector: '.-rotate-90',
        values: ['-TransformRotate: -90deg'],
      },
      {
        selector: '.-rotate-45',
        values: ['-TransformRotate: -45deg'],
      },
    ],
  },
  {
    type: 'scale',
    description: 'scales elements',
    category: 'TRANSFORM',
    rules: [
      {
        selector: '.scale-0',
        values: ['-TransformScaleX: 0', '-TransformScaleY: 0'],
      },
      {
        selector: '.scale-50',
        values: ['-TransformScaleX: .5', '-TransformScaleY: .5'],
      },
      {
        selector: '.scale-75',
        values: ['-TransformScaleX: .75', '-TransformScaleY: .75'],
      },
      {
        selector: '.scale-90',
        values: ['-TransformScaleX: .9', '-TransformScaleY: .9'],
      },
      {
        selector: '.scale-95',
        values: ['-TransformScaleX: .95', '-TransformScaleY: .95'],
      },
      {
        selector: '.scale-100',
        values: ['-TransformScaleX: 1', '-TransformScaleY: 1'],
      },
      {
        selector: '.scale-105',
        values: ['-TransformScaleX: 1.05', '-TransformScaleY: 1.05'],
      },
      {
        selector: '.scale-110',
        values: ['-TransformScaleX: 1.1', '-TransformScaleY: 1.1'],
      },
      {
        selector: '.scale-125',
        values: ['-TransformScaleX: 1.25', '-TransformScaleY: 1.25'],
      },
      {
        selector: '.scale-150',
        values: ['-TransformScaleX: 1.5', '-TransformScaleY: 1.5'],
      },
      {
        selector: '.scale-x-0',
        values: ['-TransformScaleX: 0'],
      },
      {
        selector: '.scale-x-50',
        values: ['-TransformScaleX: .5'],
      },
      {
        selector: '.scale-x-75',
        values: ['-TransformScaleX: .75'],
      },
      {
        selector: '.scale-x-90',
        values: ['-TransformScaleX: .9'],
      },
      {
        selector: '.scale-x-95',
        values: ['-TransformScaleX: .95'],
      },
      {
        selector: '.scale-x-100',
        values: ['-TransformScaleX: 1'],
      },
      {
        selector: '.scale-x-105',
        values: ['-TransformScaleX: 1.05'],
      },
      {
        selector: '.scale-x-110',
        values: ['-TransformScaleX: 1.1'],
      },
      {
        selector: '.scale-x-125',
        values: ['-TransformScaleX: 1.25'],
      },
      {
        selector: '.scale-x-150',
        values: ['-TransformScaleX: 1.5'],
      },
      {
        selector: '.scale-y-0',
        values: ['-TransformScaleY: 0'],
      },
      {
        selector: '.scale-y-50',
        values: ['-TransformScaleY: .5'],
      },
      {
        selector: '.scale-y-75',
        values: ['-TransformScaleY: .75'],
      },
      {
        selector: '.scale-y-90',
        values: ['-TransformScaleY: .9'],
      },
      {
        selector: '.scale-y-95',
        values: ['-TransformScaleY: .95'],
      },
      {
        selector: '.scale-y-100',
        values: ['-TransformScaleY: 1'],
      },
      {
        selector: '.scale-y-105',
        values: ['-TransformScaleY: 1.05'],
      },
      {
        selector: '.scale-y-110',
        values: ['-TransformScaleY: 1.1'],
      },
      {
        selector: '.scale-y-125',
        values: ['-TransformScaleY: 1.25'],
      },
      {
        selector: '.scale-y-150',
        values: ['-TransformScaleY: 1.5'],
      },
      {
        selector: '.object-scale-down',
        values: ['objectFit: scale-down'],
      },
    ],
  },
  {
    type: 'skew',
    description: 'to skew elements',
    category: 'TRANSFORM',
    rules: [
      {
        selector: '.skew-x-0',
        values: ['-TransformSkewX: 0'],
      },
      {
        selector: '.skew-x-3',
        values: ['-TransformSkewX: 3deg'],
      },
      {
        selector: '.skew-x-6',
        values: ['-TransformSkewX: 6deg'],
      },
      {
        selector: '.skew-x-12',
        values: ['-TransformSkewX: 12deg'],
      },
      {
        selector: '.-skew-x-12',
        values: ['-TransformSkewX: -12deg'],
      },
      {
        selector: '.-skew-x-6',
        values: ['-TransformSkewX: -6deg'],
      },
      {
        selector: '.-skew-x-3',
        values: ['-TransformSkewX: -3deg'],
      },
      {
        selector: '.skew-y-0',
        values: ['-TransformSkewY: 0'],
      },
      {
        selector: '.skew-y-3',
        values: ['-TransformSkewY: 3deg'],
      },
      {
        selector: '.skew-y-6',
        values: ['-TransformSkewY: 6deg'],
      },
      {
        selector: '.skew-y-12',
        values: ['-TransformSkewY: 12deg'],
      },
      {
        selector: '.-skew-y-12',
        values: ['-TransformSkewY: -12deg'],
      },
      {
        selector: '.-skew-y-6',
        values: ['-TransformSkewY: -6deg'],
      },
      {
        selector: '.-skew-y-3',
        values: ['-TransformSkewY: -3deg'],
      },
    ],
  },
  {
    type: 'transform-origin',
    description: 'specifies origin of element for transformation',
    category: 'TRANSFORM',
    rules: [
      {
        selector: '.origin-center',
        values: ['transformOrigin: center'],
      },
      {
        selector: '.origin-top',
        values: ['transformOrigin: top'],
      },
      {
        selector: '.origin-top-right',
        values: ['transformOrigin: top right'],
      },
      {
        selector: '.origin-right',
        values: ['transformOrigin: right'],
      },
      {
        selector: '.origin-bottom-right',
        values: ['transformOrigin: bottom right'],
      },
      {
        selector: '.origin-bottom',
        values: ['transformOrigin: bottom'],
      },
      {
        selector: '.origin-bottom-left',
        values: ['transformOrigin: bottom left'],
      },
      {
        selector: '.origin-left',
        values: ['transformOrigin: left'],
      },
      {
        selector: '.origin-top-left',
        values: ['transformOrigin: top left'],
      },
    ],
  },
  {
    type: 'globals',
    description: 'globals',
    category: 'GLOBALS',
    rules: [
      {
        selector: '.spr-ui-01',
        values: ['backgroundColor: var(--spr-ui-01, #FFFFFF)'],
      },
      {
        selector: '.spr-ui-02',
        values: ['backgroundColor: var(--spr-ui-02, #F8F8FA)'],
      },
      {
        selector: '.spr-ui-03',
        values: ['backgroundColor: var(--spr-ui-03, #F2F2F4)'],
      },
      {
        selector: '.spr-ui-04',
        values: ['backgroundColor: var(--spr-ui-04, #0828CC)'],
      },
      {
        selector: '.spr-ui-05',
        values: ['backgroundColor: var(--spr-ui-05, #F2F2F4)'],
      },
      {
        selector: '.spr-ui-06',
        values: ['backgroundColor: var(--spr-ui-06, #E6E6E9)'],
      },
      {
        selector: '.spr-ui-focus',
        values: ['backgroundColor: var(--spr-ui-focus, rgba(8, 40, 204, 0.07))'],
      },
      {
        selector: '.spr-ui-focus-reverse',
        values: ['backgroundColor: var(--spr-ui-focus-reverse, rgba(255, 255, 255, 0.2))'],
      },
      {
        selector: '.spr-ui-hover',
        values: ['backgroundColor: var(--spr-ui-hover, rgba(8, 40, 204, 0.05))'],
      },
      {
        selector: '.spr-ui-hover-reverse',
        values: ['backgroundColor: var(--spr-ui-hover-reverse, rgba(255, 255, 255, 0.1))'],
      },
      {
        selector: '.spr-support-error',
        values: ['backgroundColor: var(--spr-support-error, #E44045)'],
      },
      {
        selector: '.spr-support-error-highlight',
        values: ['backgroundColor: var(--spr-support-error-highlight, rgba(255, 96, 96, 0.1))'],
      },
      {
        selector: '.spr-support-success',
        values: ['backgroundColor: var(--spr-support-success, #3fbf41)'],
      },
      {
        selector: '.spr-support-success-highlight',
        values: ['backgroundColor: var(--spr-support-success-highlight, rgba(63, 191, 65, 0.07))'],
      },
      {
        selector: '.spr-support-warning',
        values: ['backgroundColor: var(--spr-support-warning, #EEC202)'],
      },
      {
        selector: '.spr-support-warning-highlight',
        values: ['backgroundColor: var(--spr-support-warning-highlight, rgba(238, 194, 2, 0.1))'],
      },
      {
        selector: '.spr-clr-blue-highlight',
        values: ['backgroundColor: var(--spr-clr-blue-highlight, #E8F0FE)'],
      },
      {
        selector: '.spr-tag',
        values: ['backgroundColor: var(--spr-tag, #F2F2F4)'],
      },
      {
        selector: '.spr-tag-01',
        values: ['backgroundColor: var(--spr-tag-01, #F2F2F4)'],
      },
      {
        selector: '.spr-tag-02',
        values: ['backgroundColor: var(--spr-tag-02, rgba(8, 40, 204, 0.07))'],
      },
      {
        selector: '.spr-field',
        values: ['backgroundColor: var(--spr-field, #DBDBDB)'],
      },
      {
        selector: '.spr-popup',
        values: ['backgroundColor: var(--spr-popup, #FFFFFF)'],
      },
      {
        selector: '.spr-overlay',
        values: ['backgroundColor: var(--spr-overlay, rgba(10, 10, 20, 0.9))'],
      },
      {
        selector: '.spr-tooltip-01',
        values: ['backgroundColor: var(--spr-tooltip-01, #0A0A14)'],
      },
      {
        selector: '.spr-highlight',
        values: ['backgroundColor: var(--spr-highlight, rgba(255, 231, 173, 0.7))'],
      },
      {
        selector: '.spr-favourite',
        values: ['backgroundColor: var(--spr-favourite, #FF9F21)'],
      },
      {
        selector: '.spr-notification',
        values: ['backgroundColor: var(--spr-notification, #C6202B)'],
      },
      {
        selector: '.spr-interactive-01',
        values: ['backgroundColor: var(--spr-interactive-01, #0828CC)'],
      },
      {
        selector: '.spr-interactive-hover',
        values: ['backgroundColor: var(--spr-interactive-hover, #0729a0)'],
      },
      {
        selector: '.spr-interactive-disable',
        values: ['backgroundColor: var(--spr-interactive-disable, rgba(255, 255, 255, 0.8))'],
      },
      {
        selector: '.spr-interactive-02',
        values: ['backgroundColor: var(--spr-interactive-02, #646470)'],
      },
      {
        selector: '.spr-clr-blue',
        values: ['backgroundColor: var(--spr-clr-blue, #0AA2FF)'],
      },
      {
        selector: '.spr-clr-green',
        values: ['backgroundColor: var(--spr-clr-green, #20963a)'],
      },
      {
        selector: '.spr-clr-lavender',
        values: ['backgroundColor: var(--spr-clr-lavender, #7F36F6)'],
      },
      {
        selector: '.spr-clr-orange',
        values: ['backgroundColor: var(--spr-clr-orange, #F08C1A)'],
      },
      {
        selector: '.spr-clr-pink',
        values: ['backgroundColor: var(--spr-clr-pink, #DE456B)'],
      },
      {
        selector: '.spr-clr-red',
        values: ['backgroundColor: var(--spr-clr-red, #E44045)'],
      },
      {
        selector: '.spr-clr-sea',
        values: ['backgroundColor: var(--spr-clr-sea, #16AAD2)'],
      },
      {
        selector: '.spr-clr-teal',
        values: ['backgroundColor: var(--spr-clr-teal, #13C18D)'],
      },
      {
        selector: '.spr-clr-yellow',
        values: ['backgroundColor: var(--spr-clr-yellow, #DEAC09)'],
      },
      {
        selector: '.spr-clr-grey',
        values: ['backgroundColor: var(--spr-clr-grey, #D7D7DC)'],
      },
      {
        selector: '.spr-clr-purple',
        values: ['backgroundColor: var(--spr-clr-purple, #8C43FF)'],
      },
      {
        selector: '.spr-clr-lt-yellow',
        values: ['backgroundColor: var(--spr-clr-lt-yellow, #FFD04F)'],
      },
      {
        selector: '.spr-clr-darker-blue',
        values: ['backgroundColor: var(--spr-clr-darker-blue, #327AFD)'],
      },
      {
        selector: '.spr-secondary-yellow',
        values: ['backgroundColor: var(--spr-secondary-yellow, #FFC312)'],
      },
      {
        selector: '.spr-secondary-green',
        values: ['backgroundColor: var(--spr-secondary-green, #A3CB38)'],
      },
      {
        selector: '.spr-secondary-teal',
        values: ['backgroundColor: var(--spr-secondary-teal, #12CBC4)'],
      },
      {
        selector: '.spr-secondary-lt-pink',
        values: ['backgroundColor: var(--spr-secondary-lt-pink, #FDA7DF)'],
      },
      {
        selector: '.spr-secondary-pink',
        values: ['backgroundColor: var(--spr-secondary-pink, #ED4C67)'],
      },
      {
        selector: '.spr-secondary-maroon',
        values: ['backgroundColor: var(--spr-secondary-maroon, #B53471)'],
      },
      {
        selector: '.spr-secondary-orange',
        values: ['backgroundColor: var(--spr-secondary-orange, #F48749)'],
      },
      {
        selector: '.spr-hover',
        values: ['borderColor: var(--spr-hover, #0828CC)'],
      },
      {
        selector: '.spr-focus-01',
        values: ['borderColor: var(--spr-focus-01, #0828CC)'],
      },
      {
        selector: '.spr-border-01',
        values: ['borderColor: var(--spr-border-01, #F2F2F4)'],
      },
      {
        selector: '.spr-border-02',
        values: ['borderColor: var(--spr-border-02, #ECECEF)'],
      },
      {
        selector: '.spr-border-03',
        values: ['borderColor: var(--spr-border-03, #D7D7DC)'],
      },
      {
        selector: '.spr-border-04',
        values: ['borderColor: var(--spr-border-04, #A0A0A8)'],
      },
      {
        selector: '.spr-border-05',
        values: ['borderColor: var(--spr-border-05, #FFFFFF)'],
      },
      {
        selector: '.spr-border-06',
        values: ['borderColor: var(--spr-border-06, #0A0A14)'],
      },
      {
        selector: '.spr-card-border',
        values: ['borderColor: var(--spr-card-border, #ECECEF)'],
      },
      {
        selector: '.spr-popup-border',
        values: ['borderColor: var(--spr-popup-border, #D7D7DC)'],
      },
      {
        selector: '.spr-tooltip-border',
        values: ['borderColor: var(--spr-tooltip-border, #0A0A14)'],
      },
      {
        selector: '.spr-interactive-focus',
        values: ['borderColor: var(--spr-interactive-focus, #132a86)'],
      },
      {
        selector: '.spr-shadow-01',
        values: ['boxShadow: var(--spr-shadow-01, 0 1px 4px 0 rgba(10,10,20,0.15))'],
      },
      {
        selector: '.spr-shadow-02',
        values: ['boxShadow: var(--spr-shadow-02, 0 2px 8px 0 rgba(10,10,20,0.20))'],
      },
      {
        selector: '.spr-shadow-03',
        values: ['boxShadow: var(--spr-shadow-03, -2px 9px 12px 0 rgba(10,10,20,0.60))'],
      },
      {
        selector: '.spr-shadow-04',
        values: ['boxShadow: var(--spr-shadow-04, 0px -2px 8px 0px rgba(10,10,20,0.2))'],
      },
      {
        selector: '.spr-shadow-05',
        values: ['boxShadow: var(--spr-shadow-05, 0px 3px 4px 0 rgba(0,0,0,0.1))'],
      },
      {
        selector: '.spr-shadow-06',
        values: ['boxShadow: var(--spr-shadow-06, 0px -3px 4px 0 rgba(0,0,0,0.1))'],
      },
      {
        selector: '.spr-icon-01',
        values: ['fill: var(--spr-icon-01, #0A0A14)'],
      },
      {
        selector: '.spr-icon-02',
        values: ['fill: var(--spr-icon-02, #646470)'],
      },
      {
        selector: '.spr-icon-03',
        values: ['fill: var(--spr-icon-03, #646470)'],
      },
      {
        selector: '.spr-icon-04',
        values: ['fill: var(--spr-icon-04, #0828CC)'],
      },
      {
        selector: '.spr-icon-05',
        values: ['fill: var(--spr-icon-05, #FFFFFF)'],
      },
      {
        selector: '.spr-icon-06',
        values: ['fill: var(--spr-icon-06, rgba(255, 255, 255, 0.6))'],
      },
      {
        selector: '.spr-icon-hover',
        values: ['fill: var(--spr-icon-hover, #0A0A14)'],
      },
      {
        selector: '.spr-icon-disable',
        values: ['fill: var(--spr-icon-disable, #D7D7DC)'],
      },
      {
        selector: '.spr-icon-hover-reverse',
        values: ['fill: var(--spr-icon-hover-reverse, #FFFFFF)'],
      },
      {
        selector: '.spr-icon-error',
        values: ['fill: var(--spr-icon-error, #FF6060)'],
      },
      {
        selector: '.spr-link',
        values: ['color: var(--spr-link, #0828CC)'],
      },
      {
        selector: '.spr-text-01',
        values: ['color: var(--spr-text-01, #0A0A14)'],
      },
      {
        selector: '.spr-text-02',
        values: ['color: var(--spr-text-02, #434350)'],
      },
      {
        selector: '.spr-text-03',
        values: ['color: var(--spr-text-03, #646470)'],
      },
      {
        selector: '.spr-text-04',
        values: ['color: var(--spr-text-04, #0828CC)'],
      },
      {
        selector: '.spr-text-05',
        values: ['color: var(--spr-text-05, #FFFFFF)'],
      },
      {
        selector: '.spr-text-06',
        values: ['color: var(--spr-text-06, #FFFFFF)'],
      },
      {
        selector: '.spr-text-placeholder',
        values: ['color: var(--spr-text-placeholder, #646470)'],
      },
      {
        selector: '.spr-support-error-text',
        values: ['color: var(--spr-support-error-text, #C6202B)'],
      },
      {
        selector: '.spr-support-success-text',
        values: ['color: var(--spr-support-success-text, #20963a)'],
      },
      {
        selector: '.spr-support-warning-text',
        values: ['color: var(--spr-support-warning-text, #DEAC09)'],
      },
    ],
  },
];
