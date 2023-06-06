/**
 * @author Ivan Torres
 */

module.exports = {
  'sr-only': {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    borderWidth: '0',
  },
  'not-sr-only': {
    position: 'static',
    width: 'auto',
    height: 'auto',
    padding: '0',
    margin: '0',
    overflow: 'visible',
    clip: 'auto',
    whiteSpace: 'normal',
  },
  'appearance-none': {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
  },
  'bg-fixed': {
    backgroundAttachment: 'fixed',
  },
  'bg-local': {
    backgroundAttachment: 'local',
  },
  'bg-scroll': {
    backgroundAttachment: 'scroll',
  },
  'bg-anchor': {
    backgroundColor: '#73737D',
  },
  'bg-ash': {
    backgroundColor: '#D7D7E0',
  },
  'bg-azure': {
    backgroundColor: '#E6E9F9',
  },
  'bg-charcoal': {
    backgroundColor: '#0A0A14',
  },
  'bg-fossil': {
    backgroundColor: '#A9A9B2',
  },
  'bg-graphite': {
    backgroundColor: '#48484C',
  },
  'bg-lead': {
    backgroundColor: '#3A3A3E',
  },
  'bg-obsidian': {
    backgroundColor: '#2C2C2F',
  },
  'bg-pebble': {
    backgroundColor: '#AEAEB2',
  },
  'bg-powder': {
    backgroundColor: '#EFEFF8',
  },
  'bg-slate': {
    backgroundColor: '#646469',
  },
  'bg-smoke': {
    backgroundColor: '#1C1C1F',
  },
  'bg-space': {
    backgroundColor: '#0828CC',
  },
  'bg-stone': {
    backgroundColor: '#141416',
  },
  'bg-transparent': {
    backgroundColor: 'transparent',
  },
  'bg-water': {
    backgroundColor: '#F8F8FD',
  },
  'bg-white': {
    backgroundColor: '#fff',
  },
  'bg-bottom': {
    backgroundPosition: 'bottom',
  },
  'bg-center': {
    backgroundPosition: 'center',
  },
  'bg-left': {
    backgroundPosition: 'left',
  },
  'bg-left-bottom': {
    backgroundPosition: 'left bottom',
  },
  'bg-left-top': {
    backgroundPosition: 'left top',
  },
  'bg-right': {
    backgroundPosition: 'right',
  },
  'bg-right-bottom': {
    backgroundPosition: 'right bottom',
  },
  'bg-right-top': {
    backgroundPosition: 'right top',
  },
  'bg-top': {
    backgroundPosition: 'top',
  },
  'bg-repeat': {
    backgroundRepeat: 'repeat',
  },
  'bg-no-repeat': {
    backgroundRepeat: 'no-repeat',
  },
  'bg-repeat-x': {
    backgroundRepeat: 'repeat-x',
  },
  'bg-repeat-y': {
    backgroundRepeat: 'repeat-y',
  },
  'bg-repeat-round': {
    backgroundRepeat: 'round',
  },
  'bg-repeat-space': {
    backgroundRepeat: 'space',
  },
  'bg-auto': {
    backgroundSize: 'auto',
  },
  'bg-cover': {
    backgroundSize: 'cover',
  },
  'bg-contain': {
    backgroundSize: 'contain',
  },
  'border-collapse': {
    borderCollapse: 'collapse',
  },
  'border-separate': {
    borderCollapse: 'separate',
  },
  'border-anchor': {
    borderColor: '#73737D',
  },
  'border-ash': {
    borderColor: '#D7D7E0',
  },
  'border-azure': {
    borderColor: '#E6E9F9',
  },
  'border-charcoal': {
    borderColor: '#0A0A14',
  },
  'border-fossil': {
    borderColor: '#A9A9B2',
  },
  'border-graphite': {
    borderColor: '#48484C',
  },
  'border-lead': {
    borderColor: '#3A3A3E',
  },
  'border-obsidian': {
    borderColor: '#2C2C2F',
  },
  'border-pebble': {
    borderColor: '#AEAEB2',
  },
  'border-powder': {
    borderColor: '#EFEFF8',
  },
  'border-slate': {
    borderColor: '#646469',
  },
  'border-smoke': {
    borderColor: '#1C1C1F',
  },
  'border-space': {
    borderColor: '#0828CC',
  },
  'border-stone': {
    borderColor: '#141416',
  },
  'border-transparent': {
    borderColor: 'transparent',
  },
  'border-water': {
    borderColor: '#F8F8FD',
  },
  'border-white': {
    borderColor: '#fff',
  },
  'rounded-none': {
    borderRadius: '0',
  },
  'rounded-sm': {
    borderRadius: '0.125rem',
  },
  rounded: {
    borderRadius: '0.25rem',
  },
  'rounded-md': {
    borderRadius: '0.375rem',
  },
  'rounded-lg': {
    borderRadius: '0.5rem',
  },
  'rounded-full': {
    borderRadius: '9999px',
  },
  'rounded-t-none': {
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
  },
  'rounded-r-none': {
    borderTopRightRadius: '0',
    borderBottomRightRadius: '0',
  },
  'rounded-b-none': {
    borderBottomRightRadius: '0',
    borderBottomLeftRadius: '0',
  },
  'rounded-l-none': {
    borderTopLeftRadius: '0',
    borderBottomLeftRadius: '0',
  },
  'rounded-t-sm': {
    borderTopLeftRadius: '0.125rem',
    borderTopRightRadius: '0.125rem',
  },
  'rounded-r-sm': {
    borderTopRightRadius: '0.125rem',
    borderBottomRightRadius: '0.125rem',
  },
  'rounded-b-sm': {
    borderBottomRightRadius: '0.125rem',
    borderBottomLeftRadius: '0.125rem',
  },
  'rounded-l-sm': {
    borderTopLeftRadius: '0.125rem',
    borderBottomLeftRadius: '0.125rem',
  },
  'rounded-t': {
    borderTopLeftRadius: '0.25rem',
    borderTopRightRadius: '0.25rem',
  },
  'rounded-r': {
    borderTopRightRadius: '0.25rem',
    borderBottomRightRadius: '0.25rem',
  },
  'rounded-b': {
    borderBottomRightRadius: '0.25rem',
    borderBottomLeftRadius: '0.25rem',
  },
  'rounded-l': {
    borderTopLeftRadius: '0.25rem',
    borderBottomLeftRadius: '0.25rem',
  },
  'rounded-t-md': {
    borderTopLeftRadius: '0.375rem',
    borderTopRightRadius: '0.375rem',
  },
  'rounded-r-md': {
    borderTopRightRadius: '0.375rem',
    borderBottomRightRadius: '0.375rem',
  },
  'rounded-b-md': {
    borderBottomRightRadius: '0.375rem',
    borderBottomLeftRadius: '0.375rem',
  },
  'rounded-l-md': {
    borderTopLeftRadius: '0.375rem',
    borderBottomLeftRadius: '0.375rem',
  },
  'rounded-t-lg': {
    borderTopLeftRadius: '0.5rem',
    borderTopRightRadius: '0.5rem',
  },
  'rounded-r-lg': {
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
  },
  'rounded-b-lg': {
    borderBottomRightRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
  },
  'rounded-l-lg': {
    borderTopLeftRadius: '0.5rem',
    borderBottomLeftRadius: '0.5rem',
  },
  'rounded-t-full': {
    borderTopLeftRadius: '9999px',
    borderTopRightRadius: '9999px',
  },
  'rounded-r-full': {
    borderTopRightRadius: '9999px',
    borderBottomRightRadius: '9999px',
  },
  'rounded-b-full': {
    borderBottomRightRadius: '9999px',
    borderBottomLeftRadius: '9999px',
  },
  'rounded-l-full': {
    borderTopLeftRadius: '9999px',
    borderBottomLeftRadius: '9999px',
  },
  'rounded-tl-none': {
    borderTopLeftRadius: '0',
  },
  'rounded-tr-none': {
    borderTopRightRadius: '0',
  },
  'rounded-br-none': {
    borderBottomRightRadius: '0',
  },
  'rounded-bl-none': {
    borderBottomLeftRadius: '0',
  },
  'rounded-tl-sm': {
    borderTopLeftRadius: '0.125rem',
  },
  'rounded-tr-sm': {
    borderTopRightRadius: '0.125rem',
  },
  'rounded-br-sm': {
    borderBottomRightRadius: '0.125rem',
  },
  'rounded-bl-sm': {
    borderBottomLeftRadius: '0.125rem',
  },
  'rounded-tl': {
    borderTopLeftRadius: '0.25rem',
  },
  'rounded-tr': {
    borderTopRightRadius: '0.25rem',
  },
  'rounded-br': {
    borderBottomRightRadius: '0.25rem',
  },
  'rounded-bl': {
    borderBottomLeftRadius: '0.25rem',
  },
  'rounded-tl-md': {
    borderTopLeftRadius: '0.375rem',
  },
  'rounded-tr-md': {
    borderTopRightRadius: '0.375rem',
  },
  'rounded-br-md': {
    borderBottomRightRadius: '0.375rem',
  },
  'rounded-bl-md': {
    borderBottomLeftRadius: '0.375rem',
  },
  'rounded-tl-lg': {
    borderTopLeftRadius: '0.5rem',
  },
  'rounded-tr-lg': {
    borderTopRightRadius: '0.5rem',
  },
  'rounded-br-lg': {
    borderBottomRightRadius: '0.5rem',
  },
  'rounded-bl-lg': {
    borderBottomLeftRadius: '0.5rem',
  },
  'rounded-tl-full': {
    borderTopLeftRadius: '9999px',
  },
  'rounded-tr-full': {
    borderTopRightRadius: '9999px',
  },
  'rounded-br-full': {
    borderBottomRightRadius: '9999px',
  },
  'rounded-bl-full': {
    borderBottomLeftRadius: '9999px',
  },
  'border-solid': {
    borderStyle: 'solid',
  },
  'border-dashed': {
    borderStyle: 'dashed',
  },
  'border-dotted': {
    borderStyle: 'dotted',
  },
  'border-double': {
    borderStyle: 'double',
  },
  'border-none': {
    borderStyle: 'none',
  },
  'border-0': {
    borderWidth: '0',
  },
  'border-2': {
    borderWidth: '2px',
  },
  'border-4': {
    borderWidth: '4px',
  },
  'border-8': {
    borderWidth: '8px',
  },
  border: {
    borderWidth: '1px',
  },
  'border-t-0': {
    borderTopWidth: '0',
  },
  'border-r-0': {
    borderRightWidth: '0',
  },
  'border-b-0': {
    borderBottomWidth: '0',
  },
  'border-l-0': {
    borderLeftWidth: '0',
  },
  'border-t-2': {
    borderTopWidth: '2px',
  },
  'border-r-2': {
    borderRightWidth: '2px',
  },
  'border-b-2': {
    borderBottomWidth: '2px',
  },
  'border-l-2': {
    borderLeftWidth: '2px',
  },
  'border-t-4': {
    borderTopWidth: '4px',
  },
  'border-r-4': {
    borderRightWidth: '4px',
  },
  'border-b-4': {
    borderBottomWidth: '4px',
  },
  'border-l-4': {
    borderLeftWidth: '4px',
  },
  'border-t-8': {
    borderTopWidth: '8px',
  },
  'border-r-8': {
    borderRightWidth: '8px',
  },
  'border-b-8': {
    borderBottomWidth: '8px',
  },
  'border-l-8': {
    borderLeftWidth: '8px',
  },
  'border-t': {
    borderTopWidth: '1px',
  },
  'border-r': {
    borderRightWidth: '1px',
  },
  'border-b': {
    borderBottomWidth: '1px',
  },
  'border-l': {
    borderLeftWidth: '1px',
  },
  'box-border': {
    boxSizing: 'border-box',
  },
  'box-content': {
    boxSizing: 'content-box',
  },
  'cursor-auto': {
    cursor: 'auto',
  },
  'cursor-default': {
    cursor: 'default',
  },
  'cursor-pointer': {
    cursor: 'pointer',
  },
  'cursor-wait': {
    cursor: 'wait',
  },
  'cursor-text': {
    cursor: 'text',
  },
  'cursor-move': {
    cursor: 'move',
  },
  'cursor-not-allowed': {
    cursor: 'not-allowed',
  },
  block: {
    display: 'block',
  },
  'inline-block': {
    display: 'inline-block',
  },
  inline: {
    display: 'inline',
  },
  flex: {
    display: 'flex',
  },
  'inline-flex': {
    display: 'inline-flex',
  },
  grid: {
    display: 'grid',
  },
  table: {
    display: 'table',
  },
  'table-caption': {
    display: 'table-caption',
  },
  'table-cell': {
    display: 'table-cell',
  },
  'table-column': {
    display: 'table-column',
  },
  'table-column-group': {
    display: 'table-column-group',
  },
  'table-footer-group': {
    display: 'table-footer-group',
  },
  'table-header-group': {
    display: 'table-header-group',
  },
  'table-row-group': {
    display: 'table-row-group',
  },
  'table-row': {
    display: 'table-row',
  },
  hidden: {
    display: 'none',
  },
  'flex-row': {
    flexDirection: 'row',
  },
  'flex-row-reverse': {
    flexDirection: 'row-reverse',
  },
  'flex-col': {
    flexDirection: 'column',
  },
  'flex-col-reverse': {
    flexDirection: 'column-reverse',
  },
  'flex-wrap': {
    flexWrap: 'wrap',
  },
  'flex-wrap-reverse': {
    flexWrap: 'wrap-reverse',
  },
  'flex-no-wrap': {
    flexWrap: 'nowrap',
  },
  'items-start': {
    alignItems: 'flex-start',
  },
  'items-end': {
    alignItems: 'flex-end',
  },
  'items-center': {
    alignItems: 'center',
  },
  'items-baseline': {
    alignItems: 'baseline',
  },
  'items-stretch': {
    alignItems: 'stretch',
  },
  'self-auto': {
    alignSelf: 'auto',
  },
  'self-start': {
    alignSelf: 'flex-start',
  },
  'self-end': {
    alignSelf: 'flex-end',
  },
  'self-center': {
    alignSelf: 'center',
  },
  'self-stretch': {
    alignSelf: 'stretch',
  },
  'justify-start': {
    justifyContent: 'flex-start',
  },
  'justify-end': {
    justifyContent: 'flex-end',
  },
  'justify-center': {
    justifyContent: 'center',
  },
  'justify-between': {
    justifyContent: 'space-between',
  },
  'justify-around': {
    justifyContent: 'space-around',
  },
  'justify-evenly': {
    justifyContent: 'space-evenly',
  },
  'content-center': {
    alignContent: 'center',
  },
  'content-start': {
    alignContent: 'flex-start',
  },
  'content-end': {
    alignContent: 'flex-end',
  },
  'content-between': {
    alignContent: 'space-between',
  },
  'content-around': {
    alignContent: 'space-around',
  },
  'flex-1': {
    flex: '1 1 0%',
  },
  'flex-auto': {
    flex: '1 1 auto',
  },
  'flex-initial': {
    flex: '0 1 auto',
  },
  'flex-none': {
    flex: 'none',
  },
  'flex-grow-0': {
    flexGrow: '0',
  },
  'flex-grow': {
    flexGrow: '1',
  },
  'flex-shrink-0': {
    flexShrink: '0',
  },
  'flex-shrink': {
    flexShrink: '1',
  },
  'order-1': {
    order: '1',
  },
  'order-2': {
    order: '2',
  },
  'order-3': {
    order: '3',
  },
  'order-4': {
    order: '4',
  },
  'order-5': {
    order: '5',
  },
  'order-6': {
    order: '6',
  },
  'order-7': {
    order: '7',
  },
  'order-8': {
    order: '8',
  },
  'order-9': {
    order: '9',
  },
  'order-10': {
    order: '10',
  },
  'order-11': {
    order: '11',
  },
  'order-12': {
    order: '12',
  },
  'order-first': {
    order: '-9999',
  },
  'order-last': {
    order: '9999',
  },
  'order-none': {
    order: '0',
  },
  'float-right': {
    cssFloat: 'right',
  },
  'float-left': {
    cssFloat: 'left',
  },
  'float-none': {
    cssFloat: 'none',
  },
  'clearfix:after': {
    content: '""',
    display: 'table',
    clear: 'both',
  },
  'clear-left': {
    clear: 'left',
  },
  'clear-right': {
    clear: 'right',
  },
  'clear-both': {
    clear: 'both',
  },
  'font-sans': {
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  },
  'font-serif': {
    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
  },
  'font-mono': {
    fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  'font-hairline': {
    fontWeight: '100',
  },
  'font-thin': {
    fontWeight: '200',
  },
  'font-light': {
    fontWeight: '300',
  },
  'font-normal': {
    fontWeight: '400',
  },
  'font-medium': {
    fontWeight: '500',
  },
  'font-semibold': {
    fontWeight: '600',
  },
  'font-bold': {
    fontWeight: '700',
  },
  'font-extrabold': {
    fontWeight: '800',
  },
  'font-black': {
    fontWeight: '900',
  },
  'h-0': {
    height: '0',
  },
  'h-1': {
    height: '0.25rem',
  },
  'h-2': {
    height: '0.5rem',
  },
  'h-3': {
    height: '0.75rem',
  },
  'h-4': {
    height: '1rem',
  },
  'h-5': {
    height: '1.25rem',
  },
  'h-6': {
    height: '1.5rem',
  },
  'h-8': {
    height: '2rem',
  },
  'h-10': {
    height: '2.5rem',
  },
  'h-12': {
    height: '3rem',
  },
  'h-16': {
    height: '4rem',
  },
  'h-20': {
    height: '5rem',
  },
  'h-24': {
    height: '6rem',
  },
  'h-32': {
    height: '8rem',
  },
  'h-40': {
    height: '10rem',
  },
  'h-48': {
    height: '12rem',
  },
  'h-56': {
    height: '14rem',
  },
  'h-64': {
    height: '16rem',
  },
  'h-auto': {
    height: 'auto',
  },
  'h-px': {
    height: '1px',
  },
  'h-full': {
    height: '100%',
  },
  'h-screen': {
    height: '100vh',
  },
  'leading-3': {
    lineHeight: '.75rem',
  },
  'leading-4': {
    lineHeight: '1rem',
  },
  'leading-5': {
    lineHeight: '1.25rem',
  },
  'leading-6': {
    lineHeight: '1.5rem',
  },
  'leading-7': {
    lineHeight: '1.75rem',
  },
  'leading-8': {
    lineHeight: '2rem',
  },
  'leading-9': {
    lineHeight: '2.25rem',
  },
  'leading-10': {
    lineHeight: '2.5rem',
  },
  'leading-none': {
    lineHeight: '1',
  },
  'leading-tight': {
    lineHeight: '1.25',
  },
  'leading-snug': {
    lineHeight: '1.375',
  },
  'leading-normal': {
    lineHeight: '1.5',
  },
  'leading-relaxed': {
    lineHeight: '1.625',
  },
  'leading-loose': {
    lineHeight: '2',
  },
  'list-inside': {
    listStylePosition: 'inside',
  },
  'list-outside': {
    listStylePosition: 'outside',
  },
  'list-none': {
    listStyleType: 'none',
  },
  'list-disc': {
    listStyleType: 'disc',
  },
  'list-decimal': {
    listStyleType: 'decimal',
  },
  'm-0': {
    margin: '0',
  },
  'm-1': {
    margin: '0.25rem',
  },
  'm-2': {
    margin: '0.5rem',
  },
  'm-3': {
    margin: '0.75rem',
  },
  'm-4': {
    margin: '1rem',
  },
  'm-5': {
    margin: '1.25rem',
  },
  'm-6': {
    margin: '1.5rem',
  },
  'm-8': {
    margin: '2rem',
  },
  'm-10': {
    margin: '2.5rem',
  },
  'm-12': {
    margin: '3rem',
  },
  'm-16': {
    margin: '4rem',
  },
  'm-20': {
    margin: '5rem',
  },
  'm-24': {
    margin: '6rem',
  },
  'm-32': {
    margin: '8rem',
  },
  'm-40': {
    margin: '10rem',
  },
  'm-48': {
    margin: '12rem',
  },
  'm-56': {
    margin: '14rem',
  },
  'm-64': {
    margin: '16rem',
  },
  'm-auto': {
    margin: 'auto',
  },
  'm-px': {
    margin: '1px',
  },
  '-m-1': {
    margin: '-0.25rem',
  },
  '-m-2': {
    margin: '-0.5rem',
  },
  '-m-3': {
    margin: '-0.75rem',
  },
  '-m-4': {
    margin: '-1rem',
  },
  '-m-5': {
    margin: '-1.25rem',
  },
  '-m-6': {
    margin: '-1.5rem',
  },
  '-m-8': {
    margin: '-2rem',
  },
  '-m-10': {
    margin: '-2.5rem',
  },
  '-m-12': {
    margin: '-3rem',
  },
  '-m-16': {
    margin: '-4rem',
  },
  '-m-20': {
    margin: '-5rem',
  },
  '-m-24': {
    margin: '-6rem',
  },
  '-m-32': {
    margin: '-8rem',
  },
  '-m-40': {
    margin: '-10rem',
  },
  '-m-48': {
    margin: '-12rem',
  },
  '-m-56': {
    margin: '-14rem',
  },
  '-m-64': {
    margin: '-16rem',
  },
  '-m-px': {
    margin: '-1px',
  },
  'my-0': {
    marginTop: '0',
    marginBottom: '0',
  },
  'mx-0': {
    marginLeft: '0',
    marginRight: '0',
  },
  'my-1': {
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
  },
  'mx-1': {
    marginLeft: '0.25rem',
    marginRight: '0.25rem',
  },
  'my-2': {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  'mx-2': {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
  'my-3': {
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
  },
  'mx-3': {
    marginLeft: '0.75rem',
    marginRight: '0.75rem',
  },
  'my-4': {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  'mx-4': {
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  'my-5': {
    marginTop: '1.25rem',
    marginBottom: '1.25rem',
  },
  'mx-5': {
    marginLeft: '1.25rem',
    marginRight: '1.25rem',
  },
  'my-6': {
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
  },
  'mx-6': {
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
  },
  'my-8': {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  'mx-8': {
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  'my-10': {
    marginTop: '2.5rem',
    marginBottom: '2.5rem',
  },
  'mx-10': {
    marginLeft: '2.5rem',
    marginRight: '2.5rem',
  },
  'my-12': {
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  'mx-12': {
    marginLeft: '3rem',
    marginRight: '3rem',
  },
  'my-16': {
    marginTop: '4rem',
    marginBottom: '4rem',
  },
  'mx-16': {
    marginLeft: '4rem',
    marginRight: '4rem',
  },
  'my-20': {
    marginTop: '5rem',
    marginBottom: '5rem',
  },
  'mx-20': {
    marginLeft: '5rem',
    marginRight: '5rem',
  },
  'my-24': {
    marginTop: '6rem',
    marginBottom: '6rem',
  },
  'mx-24': {
    marginLeft: '6rem',
    marginRight: '6rem',
  },
  'my-32': {
    marginTop: '8rem',
    marginBottom: '8rem',
  },
  'mx-32': {
    marginLeft: '8rem',
    marginRight: '8rem',
  },
  'my-40': {
    marginTop: '10rem',
    marginBottom: '10rem',
  },
  'mx-40': {
    marginLeft: '10rem',
    marginRight: '10rem',
  },
  'my-48': {
    marginTop: '12rem',
    marginBottom: '12rem',
  },
  'mx-48': {
    marginLeft: '12rem',
    marginRight: '12rem',
  },
  'my-56': {
    marginTop: '14rem',
    marginBottom: '14rem',
  },
  'mx-56': {
    marginLeft: '14rem',
    marginRight: '14rem',
  },
  'my-64': {
    marginTop: '16rem',
    marginBottom: '16rem',
  },
  'mx-64': {
    marginLeft: '16rem',
    marginRight: '16rem',
  },
  'my-auto': {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  'mx-auto': {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  'my-px': {
    marginTop: '1px',
    marginBottom: '1px',
  },
  'mx-px': {
    marginLeft: '1px',
    marginRight: '1px',
  },
  '-my-1': {
    marginTop: '-0.25rem',
    marginBottom: '-0.25rem',
  },
  '-mx-1': {
    marginLeft: '-0.25rem',
    marginRight: '-0.25rem',
  },
  '-my-2': {
    marginTop: '-0.5rem',
    marginBottom: '-0.5rem',
  },
  '-mx-2': {
    marginLeft: '-0.5rem',
    marginRight: '-0.5rem',
  },
  '-my-3': {
    marginTop: '-0.75rem',
    marginBottom: '-0.75rem',
  },
  '-mx-3': {
    marginLeft: '-0.75rem',
    marginRight: '-0.75rem',
  },
  '-my-4': {
    marginTop: '-1rem',
    marginBottom: '-1rem',
  },
  '-mx-4': {
    marginLeft: '-1rem',
    marginRight: '-1rem',
  },
  '-my-5': {
    marginTop: '-1.25rem',
    marginBottom: '-1.25rem',
  },
  '-mx-5': {
    marginLeft: '-1.25rem',
    marginRight: '-1.25rem',
  },
  '-my-6': {
    marginTop: '-1.5rem',
    marginBottom: '-1.5rem',
  },
  '-mx-6': {
    marginLeft: '-1.5rem',
    marginRight: '-1.5rem',
  },
  '-my-8': {
    marginTop: '-2rem',
    marginBottom: '-2rem',
  },
  '-mx-8': {
    marginLeft: '-2rem',
    marginRight: '-2rem',
  },
  '-my-10': {
    marginTop: '-2.5rem',
    marginBottom: '-2.5rem',
  },
  '-mx-10': {
    marginLeft: '-2.5rem',
    marginRight: '-2.5rem',
  },
  '-my-12': {
    marginTop: '-3rem',
    marginBottom: '-3rem',
  },
  '-mx-12': {
    marginLeft: '-3rem',
    marginRight: '-3rem',
  },
  '-my-16': {
    marginTop: '-4rem',
    marginBottom: '-4rem',
  },
  '-mx-16': {
    marginLeft: '-4rem',
    marginRight: '-4rem',
  },
  '-my-20': {
    marginTop: '-5rem',
    marginBottom: '-5rem',
  },
  '-mx-20': {
    marginLeft: '-5rem',
    marginRight: '-5rem',
  },
  '-my-24': {
    marginTop: '-6rem',
    marginBottom: '-6rem',
  },
  '-mx-24': {
    marginLeft: '-6rem',
    marginRight: '-6rem',
  },
  '-my-32': {
    marginTop: '-8rem',
    marginBottom: '-8rem',
  },
  '-mx-32': {
    marginLeft: '-8rem',
    marginRight: '-8rem',
  },
  '-my-40': {
    marginTop: '-10rem',
    marginBottom: '-10rem',
  },
  '-mx-40': {
    marginLeft: '-10rem',
    marginRight: '-10rem',
  },
  '-my-48': {
    marginTop: '-12rem',
    marginBottom: '-12rem',
  },
  '-mx-48': {
    marginLeft: '-12rem',
    marginRight: '-12rem',
  },
  '-my-56': {
    marginTop: '-14rem',
    marginBottom: '-14rem',
  },
  '-mx-56': {
    marginLeft: '-14rem',
    marginRight: '-14rem',
  },
  '-my-64': {
    marginTop: '-16rem',
    marginBottom: '-16rem',
  },
  '-mx-64': {
    marginLeft: '-16rem',
    marginRight: '-16rem',
  },
  '-my-px': {
    marginTop: '-1px',
    marginBottom: '-1px',
  },
  '-mx-px': {
    marginLeft: '-1px',
    marginRight: '-1px',
  },
  'mt-0': {
    marginTop: '0',
  },
  'mr-0': {
    marginRight: '0',
  },
  'mb-0': {
    marginBottom: '0',
  },
  'ml-0': {
    marginLeft: '0',
  },
  'mt-1': {
    marginTop: '0.25rem',
  },
  'mr-1': {
    marginRight: '0.25rem',
  },
  'mb-1': {
    marginBottom: '0.25rem',
  },
  'ml-1': {
    marginLeft: '0.25rem',
  },
  'mt-2': {
    marginTop: '0.5rem',
  },
  'mr-2': {
    marginRight: '0.5rem',
  },
  'mb-2': {
    marginBottom: '0.5rem',
  },
  'ml-2': {
    marginLeft: '0.5rem',
  },
  'mt-3': {
    marginTop: '0.75rem',
  },
  'mr-3': {
    marginRight: '0.75rem',
  },
  'mb-3': {
    marginBottom: '0.75rem',
  },
  'ml-3': {
    marginLeft: '0.75rem',
  },
  'mt-4': {
    marginTop: '1rem',
  },
  'mr-4': {
    marginRight: '1rem',
  },
  'mb-4': {
    marginBottom: '1rem',
  },
  'ml-4': {
    marginLeft: '1rem',
  },
  'mt-5': {
    marginTop: '1.25rem',
  },
  'mr-5': {
    marginRight: '1.25rem',
  },
  'mb-5': {
    marginBottom: '1.25rem',
  },
  'ml-5': {
    marginLeft: '1.25rem',
  },
  'mt-6': {
    marginTop: '1.5rem',
  },
  'mr-6': {
    marginRight: '1.5rem',
  },
  'mb-6': {
    marginBottom: '1.5rem',
  },
  'ml-6': {
    marginLeft: '1.5rem',
  },
  'mt-8': {
    marginTop: '2rem',
  },
  'mr-8': {
    marginRight: '2rem',
  },
  'mb-8': {
    marginBottom: '2rem',
  },
  'ml-8': {
    marginLeft: '2rem',
  },
  'mt-10': {
    marginTop: '2.5rem',
  },
  'mr-10': {
    marginRight: '2.5rem',
  },
  'mb-10': {
    marginBottom: '2.5rem',
  },
  'ml-10': {
    marginLeft: '2.5rem',
  },
  'mt-12': {
    marginTop: '3rem',
  },
  'mr-12': {
    marginRight: '3rem',
  },
  'mb-12': {
    marginBottom: '3rem',
  },
  'ml-12': {
    marginLeft: '3rem',
  },
  'mt-16': {
    marginTop: '4rem',
  },
  'mr-16': {
    marginRight: '4rem',
  },
  'mb-16': {
    marginBottom: '4rem',
  },
  'ml-16': {
    marginLeft: '4rem',
  },
  'mt-20': {
    marginTop: '5rem',
  },
  'mr-20': {
    marginRight: '5rem',
  },
  'mb-20': {
    marginBottom: '5rem',
  },
  'ml-20': {
    marginLeft: '5rem',
  },
  'mt-24': {
    marginTop: '6rem',
  },
  'mr-24': {
    marginRight: '6rem',
  },
  'mb-24': {
    marginBottom: '6rem',
  },
  'ml-24': {
    marginLeft: '6rem',
  },
  'mt-32': {
    marginTop: '8rem',
  },
  'mr-32': {
    marginRight: '8rem',
  },
  'mb-32': {
    marginBottom: '8rem',
  },
  'ml-32': {
    marginLeft: '8rem',
  },
  'mt-40': {
    marginTop: '10rem',
  },
  'mr-40': {
    marginRight: '10rem',
  },
  'mb-40': {
    marginBottom: '10rem',
  },
  'ml-40': {
    marginLeft: '10rem',
  },
  'mt-48': {
    marginTop: '12rem',
  },
  'mr-48': {
    marginRight: '12rem',
  },
  'mb-48': {
    marginBottom: '12rem',
  },
  'ml-48': {
    marginLeft: '12rem',
  },
  'mt-56': {
    marginTop: '14rem',
  },
  'mr-56': {
    marginRight: '14rem',
  },
  'mb-56': {
    marginBottom: '14rem',
  },
  'ml-56': {
    marginLeft: '14rem',
  },
  'mt-64': {
    marginTop: '16rem',
  },
  'mr-64': {
    marginRight: '16rem',
  },
  'mb-64': {
    marginBottom: '16rem',
  },
  'ml-64': {
    marginLeft: '16rem',
  },
  'mt-auto': {
    marginTop: 'auto',
  },
  'mr-auto': {
    marginRight: 'auto',
  },
  'mb-auto': {
    marginBottom: 'auto',
  },
  'ml-auto': {
    marginLeft: 'auto',
  },
  'mt-px': {
    marginTop: '1px',
  },
  'mr-px': {
    marginRight: '1px',
  },
  'mb-px': {
    marginBottom: '1px',
  },
  'ml-px': {
    marginLeft: '1px',
  },
  '-mt-1': {
    marginTop: '-0.25rem',
  },
  '-mr-1': {
    marginRight: '-0.25rem',
  },
  '-mb-1': {
    marginBottom: '-0.25rem',
  },
  '-ml-1': {
    marginLeft: '-0.25rem',
  },
  '-mt-2': {
    marginTop: '-0.5rem',
  },
  '-mr-2': {
    marginRight: '-0.5rem',
  },
  '-mb-2': {
    marginBottom: '-0.5rem',
  },
  '-ml-2': {
    marginLeft: '-0.5rem',
  },
  '-mt-3': {
    marginTop: '-0.75rem',
  },
  '-mr-3': {
    marginRight: '-0.75rem',
  },
  '-mb-3': {
    marginBottom: '-0.75rem',
  },
  '-ml-3': {
    marginLeft: '-0.75rem',
  },
  '-mt-4': {
    marginTop: '-1rem',
  },
  '-mr-4': {
    marginRight: '-1rem',
  },
  '-mb-4': {
    marginBottom: '-1rem',
  },
  '-ml-4': {
    marginLeft: '-1rem',
  },
  '-mt-5': {
    marginTop: '-1.25rem',
  },
  '-mr-5': {
    marginRight: '-1.25rem',
  },
  '-mb-5': {
    marginBottom: '-1.25rem',
  },
  '-ml-5': {
    marginLeft: '-1.25rem',
  },
  '-mt-6': {
    marginTop: '-1.5rem',
  },
  '-mr-6': {
    marginRight: '-1.5rem',
  },
  '-mb-6': {
    marginBottom: '-1.5rem',
  },
  '-ml-6': {
    marginLeft: '-1.5rem',
  },
  '-mt-8': {
    marginTop: '-2rem',
  },
  '-mr-8': {
    marginRight: '-2rem',
  },
  '-mb-8': {
    marginBottom: '-2rem',
  },
  '-ml-8': {
    marginLeft: '-2rem',
  },
  '-mt-10': {
    marginTop: '-2.5rem',
  },
  '-mr-10': {
    marginRight: '-2.5rem',
  },
  '-mb-10': {
    marginBottom: '-2.5rem',
  },
  '-ml-10': {
    marginLeft: '-2.5rem',
  },
  '-mt-12': {
    marginTop: '-3rem',
  },
  '-mr-12': {
    marginRight: '-3rem',
  },
  '-mb-12': {
    marginBottom: '-3rem',
  },
  '-ml-12': {
    marginLeft: '-3rem',
  },
  '-mt-16': {
    marginTop: '-4rem',
  },
  '-mr-16': {
    marginRight: '-4rem',
  },
  '-mb-16': {
    marginBottom: '-4rem',
  },
  '-ml-16': {
    marginLeft: '-4rem',
  },
  '-mt-20': {
    marginTop: '-5rem',
  },
  '-mr-20': {
    marginRight: '-5rem',
  },
  '-mb-20': {
    marginBottom: '-5rem',
  },
  '-ml-20': {
    marginLeft: '-5rem',
  },
  '-mt-24': {
    marginTop: '-6rem',
  },
  '-mr-24': {
    marginRight: '-6rem',
  },
  '-mb-24': {
    marginBottom: '-6rem',
  },
  '-ml-24': {
    marginLeft: '-6rem',
  },
  '-mt-32': {
    marginTop: '-8rem',
  },
  '-mr-32': {
    marginRight: '-8rem',
  },
  '-mb-32': {
    marginBottom: '-8rem',
  },
  '-ml-32': {
    marginLeft: '-8rem',
  },
  '-mt-40': {
    marginTop: '-10rem',
  },
  '-mr-40': {
    marginRight: '-10rem',
  },
  '-mb-40': {
    marginBottom: '-10rem',
  },
  '-ml-40': {
    marginLeft: '-10rem',
  },
  '-mt-48': {
    marginTop: '-12rem',
  },
  '-mr-48': {
    marginRight: '-12rem',
  },
  '-mb-48': {
    marginBottom: '-12rem',
  },
  '-ml-48': {
    marginLeft: '-12rem',
  },
  '-mt-56': {
    marginTop: '-14rem',
  },
  '-mr-56': {
    marginRight: '-14rem',
  },
  '-mb-56': {
    marginBottom: '-14rem',
  },
  '-ml-56': {
    marginLeft: '-14rem',
  },
  '-mt-64': {
    marginTop: '-16rem',
  },
  '-mr-64': {
    marginRight: '-16rem',
  },
  '-mb-64': {
    marginBottom: '-16rem',
  },
  '-ml-64': {
    marginLeft: '-16rem',
  },
  '-mt-px': {
    marginTop: '-1px',
  },
  '-mr-px': {
    marginRight: '-1px',
  },
  '-mb-px': {
    marginBottom: '-1px',
  },
  '-ml-px': {
    marginLeft: '-1px',
  },
  'max-h-full': {
    maxHeight: '100%',
  },
  'max-h-screen': {
    maxHeight: '100vh',
  },
  'max-w-none': {
    maxWidth: 'none',
  },
  'max-w-xs': {
    maxWidth: '20rem',
  },
  'max-w-sm': {
    maxWidth: '24rem',
  },
  'max-w-md': {
    maxWidth: '28rem',
  },
  'max-w-lg': {
    maxWidth: '32rem',
  },
  'max-w-xl': {
    maxWidth: '36rem',
  },
  'max-w-2xl': {
    maxWidth: '42rem',
  },
  'max-w-3xl': {
    maxWidth: '48rem',
  },
  'max-w-4xl': {
    maxWidth: '56rem',
  },
  'max-w-5xl': {
    maxWidth: '64rem',
  },
  'max-w-6xl': {
    maxWidth: '72rem',
  },
  'max-w-full': {
    maxWidth: '100%',
  },
  'max-w-screen-sm': {
    maxWidth: '640px',
  },
  'max-w-screen-md': {
    maxWidth: '768px',
  },
  'max-w-screen-lg': {
    maxWidth: '1024px',
  },
  'max-w-screen-xl': {
    maxWidth: '1280px',
  },
  'min-h-0': {
    minHeight: '0',
  },
  'min-h-full': {
    minHeight: '100%',
  },
  'min-h-screen': {
    minHeight: '100vh',
  },
  'min-w-0': {
    minWidth: '0',
  },
  'min-w-full': {
    minWidth: '100%',
  },
  'object-contain': {
    OObjectFit: 'contain',
    objectFit: 'contain',
  },
  'object-cover': {
    OObjectFit: 'cover',
    objectFit: 'cover',
  },
  'object-fill': {
    OObjectFit: 'fill',
    objectFit: 'fill',
  },
  'object-none': {
    OObjectFit: 'none',
    objectFit: 'none',
  },
  'object-scale-down': {
    OObjectFit: 'scale-down',
    objectFit: 'scale-down',
  },
  'object-bottom': {
    OObjectPosition: 'bottom',
    objectPosition: 'bottom',
  },
  'object-center': {
    OObjectPosition: 'center',
    objectPosition: 'center',
  },
  'object-left': {
    OObjectPosition: 'left',
    objectPosition: 'left',
  },
  'object-left-bottom': {
    OObjectPosition: 'left bottom',
    objectPosition: 'left bottom',
  },
  'object-left-top': {
    OObjectPosition: 'left top',
    objectPosition: 'left top',
  },
  'object-right': {
    OObjectPosition: 'right',
    objectPosition: 'right',
  },
  'object-right-bottom': {
    OObjectPosition: 'right bottom',
    objectPosition: 'right bottom',
  },
  'object-right-top': {
    OObjectPosition: 'right top',
    objectPosition: 'right top',
  },
  'object-top': {
    OObjectPosition: 'top',
    objectPosition: 'top',
  },
  'opacity-0': {
    opacity: '0',
  },
  'opacity-25': {
    opacity: '0.25',
  },
  'opacity-50': {
    opacity: '0.5',
  },
  'opacity-75': {
    opacity: '0.75',
  },
  'opacity-100': {
    opacity: '1',
  },
  'outline-none': {
    outline: '0',
  },
  'overflow-auto': {
    overflow: 'auto',
  },
  'overflow-hidden': {
    overflow: 'hidden',
  },
  'overflow-visible': {
    overflow: 'visible',
  },
  'overflow-scroll': {
    overflow: 'scroll',
  },
  'overflow-x-auto': {
    overflowX: 'auto',
  },
  'overflow-y-auto': {
    overflowY: 'auto',
  },
  'overflow-x-hidden': {
    overflowX: 'hidden',
  },
  'overflow-y-hidden': {
    overflowY: 'hidden',
  },
  'overflow-x-visible': {
    overflowX: 'visible',
  },
  'overflow-y-visible': {
    overflowY: 'visible',
  },
  'overflow-x-scroll': {
    overflowX: 'scroll',
  },
  'overflow-y-scroll': {
    overflowY: 'scroll',
  },
  'scrolling-touch': {
    WebkitOverflowScrolling: 'touch',
  },
  'scrolling-auto': {
    WebkitOverflowScrolling: 'auto',
  },
  'p-0': {
    padding: '0',
  },
  'p-1': {
    padding: '0.25rem',
  },
  'p-2': {
    padding: '0.5rem',
  },
  'p-3': {
    padding: '0.75rem',
  },
  'p-4': {
    padding: '1rem',
  },
  'p-5': {
    padding: '1.25rem',
  },
  'p-6': {
    padding: '1.5rem',
  },
  'p-8': {
    padding: '2rem',
  },
  'p-10': {
    padding: '2.5rem',
  },
  'p-12': {
    padding: '3rem',
  },
  'p-16': {
    padding: '4rem',
  },
  'p-20': {
    padding: '5rem',
  },
  'p-24': {
    padding: '6rem',
  },
  'p-32': {
    padding: '8rem',
  },
  'p-40': {
    padding: '10rem',
  },
  'p-48': {
    padding: '12rem',
  },
  'p-56': {
    padding: '14rem',
  },
  'p-64': {
    padding: '16rem',
  },
  'p-px': {
    padding: '1px',
  },
  'py-0': {
    paddingTop: '0',
    paddingBottom: '0',
  },
  'px-0': {
    paddingLeft: '0',
    paddingRight: '0',
  },
  'py-1': {
    paddingTop: '0.25rem',
    paddingBottom: '0.25rem',
  },
  'px-1': {
    paddingLeft: '0.25rem',
    paddingRight: '0.25rem',
  },
  'py-2': {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
  },
  'px-2': {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
  'py-3': {
    paddingTop: '0.75rem',
    paddingBottom: '0.75rem',
  },
  'px-3': {
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',
  },
  'py-4': {
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  'px-4': {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  'py-5': {
    paddingTop: '1.25rem',
    paddingBottom: '1.25rem',
  },
  'px-5': {
    paddingLeft: '1.25rem',
    paddingRight: '1.25rem',
  },
  'py-6': {
    paddingTop: '1.5rem',
    paddingBottom: '1.5rem',
  },
  'px-6': {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
  'py-8': {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  'px-8': {
    paddingLeft: '2rem',
    paddingRight: '2rem',
  },
  'py-10': {
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
  },
  'px-10': {
    paddingLeft: '2.5rem',
    paddingRight: '2.5rem',
  },
  'py-12': {
    paddingTop: '3rem',
    paddingBottom: '3rem',
  },
  'px-12': {
    paddingLeft: '3rem',
    paddingRight: '3rem',
  },
  'py-16': {
    paddingTop: '4rem',
    paddingBottom: '4rem',
  },
  'px-16': {
    paddingLeft: '4rem',
    paddingRight: '4rem',
  },
  'py-20': {
    paddingTop: '5rem',
    paddingBottom: '5rem',
  },
  'px-20': {
    paddingLeft: '5rem',
    paddingRight: '5rem',
  },
  'py-24': {
    paddingTop: '6rem',
    paddingBottom: '6rem',
  },
  'px-24': {
    paddingLeft: '6rem',
    paddingRight: '6rem',
  },
  'py-32': {
    paddingTop: '8rem',
    paddingBottom: '8rem',
  },
  'px-32': {
    paddingLeft: '8rem',
    paddingRight: '8rem',
  },
  'py-40': {
    paddingTop: '10rem',
    paddingBottom: '10rem',
  },
  'px-40': {
    paddingLeft: '10rem',
    paddingRight: '10rem',
  },
  'py-48': {
    paddingTop: '12rem',
    paddingBottom: '12rem',
  },
  'px-48': {
    paddingLeft: '12rem',
    paddingRight: '12rem',
  },
  'py-56': {
    paddingTop: '14rem',
    paddingBottom: '14rem',
  },
  'px-56': {
    paddingLeft: '14rem',
    paddingRight: '14rem',
  },
  'py-64': {
    paddingTop: '16rem',
    paddingBottom: '16rem',
  },
  'px-64': {
    paddingLeft: '16rem',
    paddingRight: '16rem',
  },
  'py-px': {
    paddingTop: '1px',
    paddingBottom: '1px',
  },
  'px-px': {
    paddingLeft: '1px',
    paddingRight: '1px',
  },
  'pt-0': {
    paddingTop: '0',
  },
  'pr-0': {
    paddingRight: '0',
  },
  'pb-0': {
    paddingBottom: '0',
  },
  'pl-0': {
    paddingLeft: '0',
  },
  'pt-1': {
    paddingTop: '0.25rem',
  },
  'pr-1': {
    paddingRight: '0.25rem',
  },
  'pb-1': {
    paddingBottom: '0.25rem',
  },
  'pl-1': {
    paddingLeft: '0.25rem',
  },
  'pt-2': {
    paddingTop: '0.5rem',
  },
  'pr-2': {
    paddingRight: '0.5rem',
  },
  'pb-2': {
    paddingBottom: '0.5rem',
  },
  'pl-2': {
    paddingLeft: '0.5rem',
  },
  'pt-3': {
    paddingTop: '0.75rem',
  },
  'pr-3': {
    paddingRight: '0.75rem',
  },
  'pb-3': {
    paddingBottom: '0.75rem',
  },
  'pl-3': {
    paddingLeft: '0.75rem',
  },
  'pt-4': {
    paddingTop: '1rem',
  },
  'pr-4': {
    paddingRight: '1rem',
  },
  'pb-4': {
    paddingBottom: '1rem',
  },
  'pl-4': {
    paddingLeft: '1rem',
  },
  'pt-5': {
    paddingTop: '1.25rem',
  },
  'pr-5': {
    paddingRight: '1.25rem',
  },
  'pb-5': {
    paddingBottom: '1.25rem',
  },
  'pl-5': {
    paddingLeft: '1.25rem',
  },
  'pt-6': {
    paddingTop: '1.5rem',
  },
  'pr-6': {
    paddingRight: '1.5rem',
  },
  'pb-6': {
    paddingBottom: '1.5rem',
  },
  'pl-6': {
    paddingLeft: '1.5rem',
  },
  'pt-8': {
    paddingTop: '2rem',
  },
  'pr-8': {
    paddingRight: '2rem',
  },
  'pb-8': {
    paddingBottom: '2rem',
  },
  'pl-8': {
    paddingLeft: '2rem',
  },
  'pt-10': {
    paddingTop: '2.5rem',
  },
  'pr-10': {
    paddingRight: '2.5rem',
  },
  'pb-10': {
    paddingBottom: '2.5rem',
  },
  'pl-10': {
    paddingLeft: '2.5rem',
  },
  'pt-12': {
    paddingTop: '3rem',
  },
  'pr-12': {
    paddingRight: '3rem',
  },
  'pb-12': {
    paddingBottom: '3rem',
  },
  'pl-12': {
    paddingLeft: '3rem',
  },
  'pt-16': {
    paddingTop: '4rem',
  },
  'pr-16': {
    paddingRight: '4rem',
  },
  'pb-16': {
    paddingBottom: '4rem',
  },
  'pl-16': {
    paddingLeft: '4rem',
  },
  'pt-20': {
    paddingTop: '5rem',
  },
  'pr-20': {
    paddingRight: '5rem',
  },
  'pb-20': {
    paddingBottom: '5rem',
  },
  'pl-20': {
    paddingLeft: '5rem',
  },
  'pt-24': {
    paddingTop: '6rem',
  },
  'pr-24': {
    paddingRight: '6rem',
  },
  'pb-24': {
    paddingBottom: '6rem',
  },
  'pl-24': {
    paddingLeft: '6rem',
  },
  'pt-32': {
    paddingTop: '8rem',
  },
  'pr-32': {
    paddingRight: '8rem',
  },
  'pb-32': {
    paddingBottom: '8rem',
  },
  'pl-32': {
    paddingLeft: '8rem',
  },
  'pt-40': {
    paddingTop: '10rem',
  },
  'pr-40': {
    paddingRight: '10rem',
  },
  'pb-40': {
    paddingBottom: '10rem',
  },
  'pl-40': {
    paddingLeft: '10rem',
  },
  'pt-48': {
    paddingTop: '12rem',
  },
  'pr-48': {
    paddingRight: '12rem',
  },
  'pb-48': {
    paddingBottom: '12rem',
  },
  'pl-48': {
    paddingLeft: '12rem',
  },
  'pt-56': {
    paddingTop: '14rem',
  },
  'pr-56': {
    paddingRight: '14rem',
  },
  'pb-56': {
    paddingBottom: '14rem',
  },
  'pl-56': {
    paddingLeft: '14rem',
  },
  'pt-64': {
    paddingTop: '16rem',
  },
  'pr-64': {
    paddingRight: '16rem',
  },
  'pb-64': {
    paddingBottom: '16rem',
  },
  'pl-64': {
    paddingLeft: '16rem',
  },
  'pt-px': {
    paddingTop: '1px',
  },
  'pr-px': {
    paddingRight: '1px',
  },
  'pb-px': {
    paddingBottom: '1px',
  },
  'pl-px': {
    paddingLeft: '1px',
  },
  'placeholder-anchor::-webkit-input-placeholder': {
    color: '#73737D',
  },
  'placeholder-anchor::-moz-placeholder': {
    color: '#73737D',
  },
  'placeholder-anchor:-ms-input-placeholder': {
    color: '#73737D',
  },
  'placeholder-anchor::-ms-input-placeholder': {
    color: '#73737D',
  },
  'placeholder-anchor::placeholder': {
    color: '#73737D',
  },
  'placeholder-ash::-webkit-input-placeholder': {
    color: '#D7D7E0',
  },
  'placeholder-ash::-moz-placeholder': {
    color: '#D7D7E0',
  },
  'placeholder-ash:-ms-input-placeholder': {
    color: '#D7D7E0',
  },
  'placeholder-ash::-ms-input-placeholder': {
    color: '#D7D7E0',
  },
  'placeholder-ash::placeholder': {
    color: '#D7D7E0',
  },
  'placeholder-azure::-webkit-input-placeholder': {
    color: '#E6E9F9',
  },
  'placeholder-azure::-moz-placeholder': {
    color: '#E6E9F9',
  },
  'placeholder-azure:-ms-input-placeholder': {
    color: '#E6E9F9',
  },
  'placeholder-azure::-ms-input-placeholder': {
    color: '#E6E9F9',
  },
  'placeholder-azure::placeholder': {
    color: '#E6E9F9',
  },
  'placeholder-charcoal::-webkit-input-placeholder': {
    color: '#0A0A14',
  },
  'placeholder-charcoal::-moz-placeholder': {
    color: '#0A0A14',
  },
  'placeholder-charcoal:-ms-input-placeholder': {
    color: '#0A0A14',
  },
  'placeholder-charcoal::-ms-input-placeholder': {
    color: '#0A0A14',
  },
  'placeholder-charcoal::placeholder': {
    color: '#0A0A14',
  },
  'placeholder-fossil::-webkit-input-placeholder': {
    color: '#A9A9B2',
  },
  'placeholder-fossil::-moz-placeholder': {
    color: '#A9A9B2',
  },
  'placeholder-fossil:-ms-input-placeholder': {
    color: '#A9A9B2',
  },
  'placeholder-fossil::-ms-input-placeholder': {
    color: '#A9A9B2',
  },
  'placeholder-fossil::placeholder': {
    color: '#A9A9B2',
  },
  'placeholder-graphite::-webkit-input-placeholder': {
    color: '#48484C',
  },
  'placeholder-graphite::-moz-placeholder': {
    color: '#48484C',
  },
  'placeholder-graphite:-ms-input-placeholder': {
    color: '#48484C',
  },
  'placeholder-graphite::-ms-input-placeholder': {
    color: '#48484C',
  },
  'placeholder-graphite::placeholder': {
    color: '#48484C',
  },
  'placeholder-lead::-webkit-input-placeholder': {
    color: '#3A3A3E',
  },
  'placeholder-lead::-moz-placeholder': {
    color: '#3A3A3E',
  },
  'placeholder-lead:-ms-input-placeholder': {
    color: '#3A3A3E',
  },
  'placeholder-lead::-ms-input-placeholder': {
    color: '#3A3A3E',
  },
  'placeholder-lead::placeholder': {
    color: '#3A3A3E',
  },
  'placeholder-obsidian::-webkit-input-placeholder': {
    color: '#2C2C2F',
  },
  'placeholder-obsidian::-moz-placeholder': {
    color: '#2C2C2F',
  },
  'placeholder-obsidian:-ms-input-placeholder': {
    color: '#2C2C2F',
  },
  'placeholder-obsidian::-ms-input-placeholder': {
    color: '#2C2C2F',
  },
  'placeholder-obsidian::placeholder': {
    color: '#2C2C2F',
  },
  'placeholder-pebble::-webkit-input-placeholder': {
    color: '#AEAEB2',
  },
  'placeholder-pebble::-moz-placeholder': {
    color: '#AEAEB2',
  },
  'placeholder-pebble:-ms-input-placeholder': {
    color: '#AEAEB2',
  },
  'placeholder-pebble::-ms-input-placeholder': {
    color: '#AEAEB2',
  },
  'placeholder-pebble::placeholder': {
    color: '#AEAEB2',
  },
  'placeholder-powder::-webkit-input-placeholder': {
    color: '#EFEFF8',
  },
  'placeholder-powder::-moz-placeholder': {
    color: '#EFEFF8',
  },
  'placeholder-powder:-ms-input-placeholder': {
    color: '#EFEFF8',
  },
  'placeholder-powder::-ms-input-placeholder': {
    color: '#EFEFF8',
  },
  'placeholder-powder::placeholder': {
    color: '#EFEFF8',
  },
  'placeholder-slate::-webkit-input-placeholder': {
    color: '#646469',
  },
  'placeholder-slate::-moz-placeholder': {
    color: '#646469',
  },
  'placeholder-slate:-ms-input-placeholder': {
    color: '#646469',
  },
  'placeholder-slate::-ms-input-placeholder': {
    color: '#646469',
  },
  'placeholder-slate::placeholder': {
    color: '#646469',
  },
  'placeholder-smoke::-webkit-input-placeholder': {
    color: '#1C1C1F',
  },
  'placeholder-smoke::-moz-placeholder': {
    color: '#1C1C1F',
  },
  'placeholder-smoke:-ms-input-placeholder': {
    color: '#1C1C1F',
  },
  'placeholder-smoke::-ms-input-placeholder': {
    color: '#1C1C1F',
  },
  'placeholder-smoke::placeholder': {
    color: '#1C1C1F',
  },
  'placeholder-space::-webkit-input-placeholder': {
    color: '#0828CC',
  },
  'placeholder-space::-moz-placeholder': {
    color: '#0828CC',
  },
  'placeholder-space:-ms-input-placeholder': {
    color: '#0828CC',
  },
  'placeholder-space::-ms-input-placeholder': {
    color: '#0828CC',
  },
  'placeholder-space::placeholder': {
    color: '#0828CC',
  },
  'placeholder-stone::-webkit-input-placeholder': {
    color: '#141416',
  },
  'placeholder-stone::-moz-placeholder': {
    color: '#141416',
  },
  'placeholder-stone:-ms-input-placeholder': {
    color: '#141416',
  },
  'placeholder-stone::-ms-input-placeholder': {
    color: '#141416',
  },
  'placeholder-stone::placeholder': {
    color: '#141416',
  },
  'placeholder-transparent::-webkit-input-placeholder': {
    color: 'transparent',
  },
  'placeholder-transparent::-moz-placeholder': {
    color: 'transparent',
  },
  'placeholder-transparent:-ms-input-placeholder': {
    color: 'transparent',
  },
  'placeholder-transparent::-ms-input-placeholder': {
    color: 'transparent',
  },
  'placeholder-transparent::placeholder': {
    color: 'transparent',
  },
  'placeholder-water::-webkit-input-placeholder': {
    color: '#F8F8FD',
  },
  'placeholder-water::-moz-placeholder': {
    color: '#F8F8FD',
  },
  'placeholder-water:-ms-input-placeholder': {
    color: '#F8F8FD',
  },
  'placeholder-water::-ms-input-placeholder': {
    color: '#F8F8FD',
  },
  'placeholder-water::placeholder': {
    color: '#F8F8FD',
  },
  'placeholder-white::-webkit-input-placeholder': {
    color: '#fff',
  },
  'placeholder-white::-moz-placeholder': {
    color: '#fff',
  },
  'placeholder-white:-ms-input-placeholder': {
    color: '#fff',
  },
  'placeholder-white::-ms-input-placeholder': {
    color: '#fff',
  },
  'placeholder-white::placeholder': {
    color: '#fff',
  },
  'pointer-events-none': {
    pointerEvents: 'none',
  },
  'pointer-events-auto': {
    pointerEvents: 'auto',
  },
  static: {
    position: 'static',
  },
  fixed: {
    position: 'fixed',
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  sticky: {
    position: ['-webkit-sticky', 'sticky'],
  },
  'inset-0': {
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
  },
  'inset-auto': {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
  },
  'inset-y-0': {
    top: '0',
    bottom: '0',
  },
  'inset-x-0': {
    right: '0',
    left: '0',
  },
  'inset-y-auto': {
    top: 'auto',
    bottom: 'auto',
  },
  'inset-x-auto': {
    right: 'auto',
    left: 'auto',
  },
  'top-0': {
    top: '0',
  },
  'right-0': {
    right: '0',
  },
  'bottom-0': {
    bottom: '0',
  },
  'left-0': {
    left: '0',
  },
  'top-auto': {
    top: 'auto',
  },
  'right-auto': {
    right: 'auto',
  },
  'bottom-auto': {
    bottom: 'auto',
  },
  'left-auto': {
    left: 'auto',
  },
  'resize-none': {
    resize: 'none',
  },
  'resize-y': {
    resize: 'vertical',
  },
  'resize-x': {
    resize: 'horizontal',
  },
  resize: {
    resize: 'both',
  },
  'shadow-xs': {
    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  },
  'shadow-sm': {
    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  },
  shadow: {
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  },
  'shadow-md': {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  'shadow-lg': {
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  },
  'shadow-xl': {
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  'shadow-2xl': {
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },
  'shadow-inner': {
    boxShadow: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  },
  'shadow-outline': {
    boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  },
  'shadow-none': {
    boxShadow: 'none',
  },
  'fill-current': {
    fill: 'currentColor',
  },
  'stroke-current': {
    stroke: 'currentColor',
  },
  'stroke-0': {
    strokeWidth: '0',
  },
  'stroke-1': {
    strokeWidth: '1',
  },
  'stroke-2': {
    strokeWidth: '2',
  },
  'table-auto': {
    tableLayout: 'auto',
  },
  'table-fixed': {
    tableLayout: 'fixed',
  },
  'text-left': {
    textAlign: 'left',
  },
  'text-center': {
    textAlign: 'center',
  },
  'text-right': {
    textAlign: 'right',
  },
  'text-justify': {
    textAlign: 'justify',
  },
  'text-anchor': {
    color: '#73737D',
  },
  'text-ash': {
    color: '#D7D7E0',
  },
  'text-azure': {
    color: '#E6E9F9',
  },
  'text-charcoal': {
    color: '#0A0A14',
  },
  'text-fossil': {
    color: '#A9A9B2',
  },
  'text-graphite': {
    color: '#48484C',
  },
  'text-lead': {
    color: '#3A3A3E',
  },
  'text-obsidian': {
    color: '#2C2C2F',
  },
  'text-pebble': {
    color: '#AEAEB2',
  },
  'text-powder': {
    color: '#EFEFF8',
  },
  'text-slate': {
    color: '#646469',
  },
  'text-smoke': {
    color: '#1C1C1F',
  },
  'text-space': {
    color: '#0828CC',
  },
  'text-stone': {
    color: '#141416',
  },
  'text-transparent': {
    color: 'transparent',
  },
  'text-water': {
    color: '#F8F8FD',
  },
  'text-white': {
    color: '#fff',
  },
  'text-xs': {
    fontSize: '0.75rem',
  },
  'text-sm': {
    fontSize: '0.875rem',
  },
  'text-base': {
    fontSize: '1rem',
  },
  'text-lg': {
    fontSize: '1.125rem',
  },
  'text-xl': {
    fontSize: '1.25rem',
  },
  'text-2xl': {
    fontSize: '1.5rem',
  },
  'text-3xl': {
    fontSize: '1.875rem',
  },
  'text-4xl': {
    fontSize: '2.25rem',
  },
  'text-5xl': {
    fontSize: '3rem',
  },
  'text-6xl': {
    fontSize: '4rem',
  },
  italic: {
    fontStyle: 'italic',
  },
  'not-italic': {
    fontStyle: 'normal',
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  lowercase: {
    textTransform: 'lowercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
  'normal-case': {
    textTransform: 'none',
  },
  underline: {
    textDecoration: 'underline',
  },
  'line-through': {
    textDecoration: 'line-through',
  },
  'no-underline': {
    textDecoration: 'none',
  },
  antialiased: {
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  'subpixel-antialiased': {
    WebkitFontSmoothing: 'auto',
    MozOsxFontSmoothing: 'auto',
  },
  'tracking-tighter': {
    letterSpacing: '-0.05em',
  },
  'tracking-tight': {
    letterSpacing: '-0.025em',
  },
  'tracking-normal': {
    letterSpacing: '0',
  },
  'tracking-wide': {
    letterSpacing: '0.025em',
  },
  'tracking-wider': {
    letterSpacing: '0.05em',
  },
  'tracking-widest': {
    letterSpacing: '0.1em',
  },
  'select-none': {
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
  'select-text': {
    WebkitUserSelect: 'text',
    MozUserSelect: 'text',
    msUserSelect: 'text',
    userSelect: 'text',
  },
  'select-all': {
    WebkitUserSelect: 'all',
    MozUserSelect: 'all',
    msUserSelect: 'all',
    userSelect: 'all',
  },
  'select-auto': {
    WebkitUserSelect: 'auto',
    MozUserSelect: 'auto',
    msUserSelect: 'auto',
    userSelect: 'auto',
  },
  'align-baseline': {
    verticalAlign: 'baseline',
  },
  'align-top': {
    verticalAlign: 'top',
  },
  'align-middle': {
    verticalAlign: 'middle',
  },
  'align-bottom': {
    verticalAlign: 'bottom',
  },
  'align-text-top': {
    verticalAlign: 'text-top',
  },
  'align-text-bottom': {
    verticalAlign: 'text-bottom',
  },
  visible: {
    visibility: 'visible',
  },
  invisible: {
    visibility: 'hidden',
  },
  'whitespace-normal': {
    whiteSpace: 'normal',
  },
  'whitespace-no-wrap': {
    whiteSpace: 'nowrap',
  },
  'whitespace-pre': {
    whiteSpace: 'pre',
  },
  'whitespace-pre-line': {
    whiteSpace: 'pre-line',
  },
  'whitespace-pre-wrap': {
    whiteSpace: 'pre-wrap',
  },
  'break-normal': {
    overflowWrap: 'normal',
    wordBreak: 'normal',
  },
  'break-words': {
    overflowWrap: 'break-word',
  },
  'break-all': {
    wordBreak: 'break-all',
  },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  'w-0': {
    width: '0',
  },
  'w-1': {
    width: '0.25rem',
  },
  'w-2': {
    width: '0.5rem',
  },
  'w-3': {
    width: '0.75rem',
  },
  'w-4': {
    width: '1rem',
  },
  'w-5': {
    width: '1.25rem',
  },
  'w-6': {
    width: '1.5rem',
  },
  'w-8': {
    width: '2rem',
  },
  'w-10': {
    width: '2.5rem',
  },
  'w-12': {
    width: '3rem',
  },
  'w-16': {
    width: '4rem',
  },
  'w-20': {
    width: '5rem',
  },
  'w-24': {
    width: '6rem',
  },
  'w-32': {
    width: '8rem',
  },
  'w-40': {
    width: '10rem',
  },
  'w-48': {
    width: '12rem',
  },
  'w-56': {
    width: '14rem',
  },
  'w-64': {
    width: '16rem',
  },
  'w-auto': {
    width: 'auto',
  },
  'w-px': {
    width: '1px',
  },
  'w-1\\/2': {
    width: '50%',
  },
  'w-1\\/3': {
    width: '33.333333%',
  },
  'w-2\\/3': {
    width: '66.666667%',
  },
  'w-1\\/4': {
    width: '25%',
  },
  'w-2\\/4': {
    width: '50%',
  },
  'w-3\\/4': {
    width: '75%',
  },
  'w-1\\/5': {
    width: '20%',
  },
  'w-2\\/5': {
    width: '40%',
  },
  'w-3\\/5': {
    width: '60%',
  },
  'w-4\\/5': {
    width: '80%',
  },
  'w-1\\/6': {
    width: '16.666667%',
  },
  'w-2\\/6': {
    width: '33.333333%',
  },
  'w-3\\/6': {
    width: '50%',
  },
  'w-4\\/6': {
    width: '66.666667%',
  },
  'w-5\\/6': {
    width: '83.333333%',
  },
  'w-1\\/12': {
    width: '8.333333%',
  },
  'w-2\\/12': {
    width: '16.666667%',
  },
  'w-3\\/12': {
    width: '25%',
  },
  'w-4\\/12': {
    width: '33.333333%',
  },
  'w-5\\/12': {
    width: '41.666667%',
  },
  'w-6\\/12': {
    width: '50%',
  },
  'w-7\\/12': {
    width: '58.333333%',
  },
  'w-8\\/12': {
    width: '66.666667%',
  },
  'w-9\\/12': {
    width: '75%',
  },
  'w-10\\/12': {
    width: '83.333333%',
  },
  'w-11\\/12': {
    width: '91.666667%',
  },
  'w-full': {
    width: '100%',
  },
  'w-screen': {
    width: '100vw',
  },
  'z-0': {
    zIndex: '0',
  },
  'z-10': {
    zIndex: '10',
  },
  'z-20': {
    zIndex: '20',
  },
  'z-30': {
    zIndex: '30',
  },
  'z-40': {
    zIndex: '40',
  },
  'z-50': {
    zIndex: '50',
  },
  'z-auto': {
    zIndex: 'auto',
  },
  'gap-0': {
    gridGap: '0',
    gap: '0',
  },
  'gap-1': {
    gridGap: '0.25rem',
    gap: '0.25rem',
  },
  'gap-2': {
    gridGap: '0.5rem',
    gap: '0.5rem',
  },
  'gap-3': {
    gridGap: '0.75rem',
    gap: '0.75rem',
  },
  'gap-4': {
    gridGap: '1rem',
    gap: '1rem',
  },
  'gap-5': {
    gridGap: '1.25rem',
    gap: '1.25rem',
  },
  'gap-6': {
    gridGap: '1.5rem',
    gap: '1.5rem',
  },
  'gap-8': {
    gridGap: '2rem',
    gap: '2rem',
  },
  'gap-10': {
    gridGap: '2.5rem',
    gap: '2.5rem',
  },
  'gap-12': {
    gridGap: '3rem',
    gap: '3rem',
  },
  'gap-16': {
    gridGap: '4rem',
    gap: '4rem',
  },
  'gap-20': {
    gridGap: '5rem',
    gap: '5rem',
  },
  'gap-24': {
    gridGap: '6rem',
    gap: '6rem',
  },
  'gap-32': {
    gridGap: '8rem',
    gap: '8rem',
  },
  'gap-40': {
    gridGap: '10rem',
    gap: '10rem',
  },
  'gap-48': {
    gridGap: '12rem',
    gap: '12rem',
  },
  'gap-56': {
    gridGap: '14rem',
    gap: '14rem',
  },
  'gap-64': {
    gridGap: '16rem',
    gap: '16rem',
  },
  'gap-px': {
    gridGap: '1px',
    gap: '1px',
  },
  'col-gap-0': {
    gridColumnGap: '0',
    MozColumnGap: '0',
    columnGap: '0',
  },
  'col-gap-1': {
    gridColumnGap: '0.25rem',
    MozColumnGap: '0.25rem',
    columnGap: '0.25rem',
  },
  'col-gap-2': {
    gridColumnGap: '0.5rem',
    MozColumnGap: '0.5rem',
    columnGap: '0.5rem',
  },
  'col-gap-3': {
    gridColumnGap: '0.75rem',
    MozColumnGap: '0.75rem',
    columnGap: '0.75rem',
  },
  'col-gap-4': {
    gridColumnGap: '1rem',
    MozColumnGap: '1rem',
    columnGap: '1rem',
  },
  'col-gap-5': {
    gridColumnGap: '1.25rem',
    MozColumnGap: '1.25rem',
    columnGap: '1.25rem',
  },
  'col-gap-6': {
    gridColumnGap: '1.5rem',
    MozColumnGap: '1.5rem',
    columnGap: '1.5rem',
  },
  'col-gap-8': {
    gridColumnGap: '2rem',
    MozColumnGap: '2rem',
    columnGap: '2rem',
  },
  'col-gap-10': {
    gridColumnGap: '2.5rem',
    MozColumnGap: '2.5rem',
    columnGap: '2.5rem',
  },
  'col-gap-12': {
    gridColumnGap: '3rem',
    MozColumnGap: '3rem',
    columnGap: '3rem',
  },
  'col-gap-16': {
    gridColumnGap: '4rem',
    MozColumnGap: '4rem',
    columnGap: '4rem',
  },
  'col-gap-20': {
    gridColumnGap: '5rem',
    MozColumnGap: '5rem',
    columnGap: '5rem',
  },
  'col-gap-24': {
    gridColumnGap: '6rem',
    MozColumnGap: '6rem',
    columnGap: '6rem',
  },
  'col-gap-32': {
    gridColumnGap: '8rem',
    MozColumnGap: '8rem',
    columnGap: '8rem',
  },
  'col-gap-40': {
    gridColumnGap: '10rem',
    MozColumnGap: '10rem',
    columnGap: '10rem',
  },
  'col-gap-48': {
    gridColumnGap: '12rem',
    MozColumnGap: '12rem',
    columnGap: '12rem',
  },
  'col-gap-56': {
    gridColumnGap: '14rem',
    MozColumnGap: '14rem',
    columnGap: '14rem',
  },
  'col-gap-64': {
    gridColumnGap: '16rem',
    MozColumnGap: '16rem',
    columnGap: '16rem',
  },
  'col-gap-px': {
    gridColumnGap: '1px',
    MozColumnGap: '1px',
    columnGap: '1px',
  },
  'row-gap-0': {
    gridRowGap: '0',
    rowGap: '0',
  },
  'row-gap-1': {
    gridRowGap: '0.25rem',
    rowGap: '0.25rem',
  },
  'row-gap-2': {
    gridRowGap: '0.5rem',
    rowGap: '0.5rem',
  },
  'row-gap-3': {
    gridRowGap: '0.75rem',
    rowGap: '0.75rem',
  },
  'row-gap-4': {
    gridRowGap: '1rem',
    rowGap: '1rem',
  },
  'row-gap-5': {
    gridRowGap: '1.25rem',
    rowGap: '1.25rem',
  },
  'row-gap-6': {
    gridRowGap: '1.5rem',
    rowGap: '1.5rem',
  },
  'row-gap-8': {
    gridRowGap: '2rem',
    rowGap: '2rem',
  },
  'row-gap-10': {
    gridRowGap: '2.5rem',
    rowGap: '2.5rem',
  },
  'row-gap-12': {
    gridRowGap: '3rem',
    rowGap: '3rem',
  },
  'row-gap-16': {
    gridRowGap: '4rem',
    rowGap: '4rem',
  },
  'row-gap-20': {
    gridRowGap: '5rem',
    rowGap: '5rem',
  },
  'row-gap-24': {
    gridRowGap: '6rem',
    rowGap: '6rem',
  },
  'row-gap-32': {
    gridRowGap: '8rem',
    rowGap: '8rem',
  },
  'row-gap-40': {
    gridRowGap: '10rem',
    rowGap: '10rem',
  },
  'row-gap-48': {
    gridRowGap: '12rem',
    rowGap: '12rem',
  },
  'row-gap-56': {
    gridRowGap: '14rem',
    rowGap: '14rem',
  },
  'row-gap-64': {
    gridRowGap: '16rem',
    rowGap: '16rem',
  },
  'row-gap-px': {
    gridRowGap: '1px',
    rowGap: '1px',
  },
  'grid-flow-row': {
    gridAutoFlow: 'row',
  },
  'grid-flow-col': {
    gridAutoFlow: 'column',
  },
  'grid-flow-row-dense': {
    gridAutoFlow: 'row dense',
  },
  'grid-flow-col-dense': {
    gridAutoFlow: 'column dense',
  },
  'grid-cols-1': {
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  },
  'grid-cols-2': {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
  'grid-cols-3': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  },
  'grid-cols-4': {
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  },
  'grid-cols-5': {
    gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  },
  'grid-cols-6': {
    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
  },
  'grid-cols-7': {
    gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
  },
  'grid-cols-8': {
    gridTemplateColumns: 'repeat(8, minmax(0, 1fr))',
  },
  'grid-cols-9': {
    gridTemplateColumns: 'repeat(9, minmax(0, 1fr))',
  },
  'grid-cols-10': {
    gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
  },
  'grid-cols-11': {
    gridTemplateColumns: 'repeat(11, minmax(0, 1fr))',
  },
  'grid-cols-12': {
    gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
  },
  'grid-cols-none': {
    gridTemplateColumns: 'none',
  },
  'col-auto': {
    gridColumn: 'auto',
  },
  'col-span-1': {
    gridColumn: 'span 1 / span 1',
  },
  'col-span-2': {
    gridColumn: 'span 2 / span 2',
  },
  'col-span-3': {
    gridColumn: 'span 3 / span 3',
  },
  'col-span-4': {
    gridColumn: 'span 4 / span 4',
  },
  'col-span-5': {
    gridColumn: 'span 5 / span 5',
  },
  'col-span-6': {
    gridColumn: 'span 6 / span 6',
  },
  'col-span-7': {
    gridColumn: 'span 7 / span 7',
  },
  'col-span-8': {
    gridColumn: 'span 8 / span 8',
  },
  'col-span-9': {
    gridColumn: 'span 9 / span 9',
  },
  'col-span-10': {
    gridColumn: 'span 10 / span 10',
  },
  'col-span-11': {
    gridColumn: 'span 11 / span 11',
  },
  'col-span-12': {
    gridColumn: 'span 12 / span 12',
  },
  'col-start-1': {
    gridColumnStart: '1',
  },
  'col-start-2': {
    gridColumnStart: '2',
  },
  'col-start-3': {
    gridColumnStart: '3',
  },
  'col-start-4': {
    gridColumnStart: '4',
  },
  'col-start-5': {
    gridColumnStart: '5',
  },
  'col-start-6': {
    gridColumnStart: '6',
  },
  'col-start-7': {
    gridColumnStart: '7',
  },
  'col-start-8': {
    gridColumnStart: '8',
  },
  'col-start-9': {
    gridColumnStart: '9',
  },
  'col-start-10': {
    gridColumnStart: '10',
  },
  'col-start-11': {
    gridColumnStart: '11',
  },
  'col-start-12': {
    gridColumnStart: '12',
  },
  'col-start-13': {
    gridColumnStart: '13',
  },
  'col-start-auto': {
    gridColumnStart: 'auto',
  },
  'col-end-1': {
    gridColumnEnd: '1',
  },
  'col-end-2': {
    gridColumnEnd: '2',
  },
  'col-end-3': {
    gridColumnEnd: '3',
  },
  'col-end-4': {
    gridColumnEnd: '4',
  },
  'col-end-5': {
    gridColumnEnd: '5',
  },
  'col-end-6': {
    gridColumnEnd: '6',
  },
  'col-end-7': {
    gridColumnEnd: '7',
  },
  'col-end-8': {
    gridColumnEnd: '8',
  },
  'col-end-9': {
    gridColumnEnd: '9',
  },
  'col-end-10': {
    gridColumnEnd: '10',
  },
  'col-end-11': {
    gridColumnEnd: '11',
  },
  'col-end-12': {
    gridColumnEnd: '12',
  },
  'col-end-13': {
    gridColumnEnd: '13',
  },
  'col-end-auto': {
    gridColumnEnd: 'auto',
  },
  'grid-rows-1': {
    gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
  },
  'grid-rows-2': {
    gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
  },
  'grid-rows-3': {
    gridTemplateRows: 'repeat(3, minmax(0, 1fr))',
  },
  'grid-rows-4': {
    gridTemplateRows: 'repeat(4, minmax(0, 1fr))',
  },
  'grid-rows-5': {
    gridTemplateRows: 'repeat(5, minmax(0, 1fr))',
  },
  'grid-rows-6': {
    gridTemplateRows: 'repeat(6, minmax(0, 1fr))',
  },
  'grid-rows-none': {
    gridTemplateRows: 'none',
  },
  'row-auto': {
    gridRow: 'auto',
  },
  'row-span-1': {
    gridRow: 'span 1 / span 1',
  },
  'row-span-2': {
    gridRow: 'span 2 / span 2',
  },
  'row-span-3': {
    gridRow: 'span 3 / span 3',
  },
  'row-span-4': {
    gridRow: 'span 4 / span 4',
  },
  'row-span-5': {
    gridRow: 'span 5 / span 5',
  },
  'row-span-6': {
    gridRow: 'span 6 / span 6',
  },
  'row-start-1': {
    gridRowStart: '1',
  },
  'row-start-2': {
    gridRowStart: '2',
  },
  'row-start-3': {
    gridRowStart: '3',
  },
  'row-start-4': {
    gridRowStart: '4',
  },
  'row-start-5': {
    gridRowStart: '5',
  },
  'row-start-6': {
    gridRowStart: '6',
  },
  'row-start-7': {
    gridRowStart: '7',
  },
  'row-start-auto': {
    gridRowStart: 'auto',
  },
  'row-end-1': {
    gridRowEnd: '1',
  },
  'row-end-2': {
    gridRowEnd: '2',
  },
  'row-end-3': {
    gridRowEnd: '3',
  },
  'row-end-4': {
    gridRowEnd: '4',
  },
  'row-end-5': {
    gridRowEnd: '5',
  },
  'row-end-6': {
    gridRowEnd: '6',
  },
  'row-end-7': {
    gridRowEnd: '7',
  },
  'row-end-auto': {
    gridRowEnd: 'auto',
  },
  transform: {
    '-TransformTranslateX': '0',
    '-TransformTranslateY': '0',
    '-TransformRotate': '0',
    '-TransformSkewX': '0',
    '-TransformSkewY': '0',
    '-TransformScaleX': '1',
    '-TransformScaleY': '1',
    transform:
      'translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))',
  },
  'transform-none': {
    transform: 'none',
  },
  'origin-center': {
    transformOrigin: 'center',
  },
  'origin-top': {
    transformOrigin: 'top',
  },
  'origin-top-right': {
    transformOrigin: 'top right',
  },
  'origin-right': {
    transformOrigin: 'right',
  },
  'origin-bottom-right': {
    transformOrigin: 'bottom right',
  },
  'origin-bottom': {
    transformOrigin: 'bottom',
  },
  'origin-bottom-left': {
    transformOrigin: 'bottom left',
  },
  'origin-left': {
    transformOrigin: 'left',
  },
  'origin-top-left': {
    transformOrigin: 'top left',
  },
  'scale-0': {
    '-TransformScaleX': '0',
    '-TransformScaleY': '0',
  },
  'scale-50': {
    '-TransformScaleX': '.5',
    '-TransformScaleY': '.5',
  },
  'scale-75': {
    '-TransformScaleX': '.75',
    '-TransformScaleY': '.75',
  },
  'scale-90': {
    '-TransformScaleX': '.9',
    '-TransformScaleY': '.9',
  },
  'scale-95': {
    '-TransformScaleX': '.95',
    '-TransformScaleY': '.95',
  },
  'scale-100': {
    '-TransformScaleX': '1',
    '-TransformScaleY': '1',
  },
  'scale-105': {
    '-TransformScaleX': '1.05',
    '-TransformScaleY': '1.05',
  },
  'scale-110': {
    '-TransformScaleX': '1.1',
    '-TransformScaleY': '1.1',
  },
  'scale-125': {
    '-TransformScaleX': '1.25',
    '-TransformScaleY': '1.25',
  },
  'scale-150': {
    '-TransformScaleX': '1.5',
    '-TransformScaleY': '1.5',
  },
  'scale-x-0': {
    '-TransformScaleX': '0',
  },
  'scale-x-50': {
    '-TransformScaleX': '.5',
  },
  'scale-x-75': {
    '-TransformScaleX': '.75',
  },
  'scale-x-90': {
    '-TransformScaleX': '.9',
  },
  'scale-x-95': {
    '-TransformScaleX': '.95',
  },
  'scale-x-100': {
    '-TransformScaleX': '1',
  },
  'scale-x-105': {
    '-TransformScaleX': '1.05',
  },
  'scale-x-110': {
    '-TransformScaleX': '1.1',
  },
  'scale-x-125': {
    '-TransformScaleX': '1.25',
  },
  'scale-x-150': {
    '-TransformScaleX': '1.5',
  },
  'scale-y-0': {
    '-TransformScaleY': '0',
  },
  'scale-y-50': {
    '-TransformScaleY': '.5',
  },
  'scale-y-75': {
    '-TransformScaleY': '.75',
  },
  'scale-y-90': {
    '-TransformScaleY': '.9',
  },
  'scale-y-95': {
    '-TransformScaleY': '.95',
  },
  'scale-y-100': {
    '-TransformScaleY': '1',
  },
  'scale-y-105': {
    '-TransformScaleY': '1.05',
  },
  'scale-y-110': {
    '-TransformScaleY': '1.1',
  },
  'scale-y-125': {
    '-TransformScaleY': '1.25',
  },
  'scale-y-150': {
    '-TransformScaleY': '1.5',
  },
  'rotate-0': {
    '-TransformRotate': '0',
  },
  'rotate-45': {
    '-TransformRotate': '45deg',
  },
  'rotate-90': {
    '-TransformRotate': '90deg',
  },
  'rotate-180': {
    '-TransformRotate': '180deg',
  },
  '-rotate-180': {
    '-TransformRotate': '-180deg',
  },
  '-rotate-90': {
    '-TransformRotate': '-90deg',
  },
  '-rotate-45': {
    '-TransformRotate': '-45deg',
  },
  'translate-x-0': {
    '-TransformTranslateX': '0',
  },
  'translate-x-1': {
    '-TransformTranslateX': '0.25rem',
  },
  'translate-x-2': {
    '-TransformTranslateX': '0.5rem',
  },
  'translate-x-3': {
    '-TransformTranslateX': '0.75rem',
  },
  'translate-x-4': {
    '-TransformTranslateX': '1rem',
  },
  'translate-x-5': {
    '-TransformTranslateX': '1.25rem',
  },
  'translate-x-6': {
    '-TransformTranslateX': '1.5rem',
  },
  'translate-x-8': {
    '-TransformTranslateX': '2rem',
  },
  'translate-x-10': {
    '-TransformTranslateX': '2.5rem',
  },
  'translate-x-12': {
    '-TransformTranslateX': '3rem',
  },
  'translate-x-16': {
    '-TransformTranslateX': '4rem',
  },
  'translate-x-20': {
    '-TransformTranslateX': '5rem',
  },
  'translate-x-24': {
    '-TransformTranslateX': '6rem',
  },
  'translate-x-32': {
    '-TransformTranslateX': '8rem',
  },
  'translate-x-40': {
    '-TransformTranslateX': '10rem',
  },
  'translate-x-48': {
    '-TransformTranslateX': '12rem',
  },
  'translate-x-56': {
    '-TransformTranslateX': '14rem',
  },
  'translate-x-64': {
    '-TransformTranslateX': '16rem',
  },
  'translate-x-px': {
    '-TransformTranslateX': '1px',
  },
  '-translate-x-1': {
    '-TransformTranslateX': '-0.25rem',
  },
  '-translate-x-2': {
    '-TransformTranslateX': '-0.5rem',
  },
  '-translate-x-3': {
    '-TransformTranslateX': '-0.75rem',
  },
  '-translate-x-4': {
    '-TransformTranslateX': '-1rem',
  },
  '-translate-x-5': {
    '-TransformTranslateX': '-1.25rem',
  },
  '-translate-x-6': {
    '-TransformTranslateX': '-1.5rem',
  },
  '-translate-x-8': {
    '-TransformTranslateX': '-2rem',
  },
  '-translate-x-10': {
    '-TransformTranslateX': '-2.5rem',
  },
  '-translate-x-12': {
    '-TransformTranslateX': '-3rem',
  },
  '-translate-x-16': {
    '-TransformTranslateX': '-4rem',
  },
  '-translate-x-20': {
    '-TransformTranslateX': '-5rem',
  },
  '-translate-x-24': {
    '-TransformTranslateX': '-6rem',
  },
  '-translate-x-32': {
    '-TransformTranslateX': '-8rem',
  },
  '-translate-x-40': {
    '-TransformTranslateX': '-10rem',
  },
  '-translate-x-48': {
    '-TransformTranslateX': '-12rem',
  },
  '-translate-x-56': {
    '-TransformTranslateX': '-14rem',
  },
  '-translate-x-64': {
    '-TransformTranslateX': '-16rem',
  },
  '-translate-x-px': {
    '-TransformTranslateX': '-1px',
  },
  '-translate-x-full': {
    '-TransformTranslateX': '-100%',
  },
  '-translate-x-1\\/2': {
    '-TransformTranslateX': '-50%',
  },
  'translate-x-1\\/2': {
    '-TransformTranslateX': '50%',
  },
  'translate-x-full': {
    '-TransformTranslateX': '100%',
  },
  'translate-y-0': {
    '-TransformTranslateY': '0',
  },
  'translate-y-1': {
    '-TransformTranslateY': '0.25rem',
  },
  'translate-y-2': {
    '-TransformTranslateY': '0.5rem',
  },
  'translate-y-3': {
    '-TransformTranslateY': '0.75rem',
  },
  'translate-y-4': {
    '-TransformTranslateY': '1rem',
  },
  'translate-y-5': {
    '-TransformTranslateY': '1.25rem',
  },
  'translate-y-6': {
    '-TransformTranslateY': '1.5rem',
  },
  'translate-y-8': {
    '-TransformTranslateY': '2rem',
  },
  'translate-y-10': {
    '-TransformTranslateY': '2.5rem',
  },
  'translate-y-12': {
    '-TransformTranslateY': '3rem',
  },
  'translate-y-16': {
    '-TransformTranslateY': '4rem',
  },
  'translate-y-20': {
    '-TransformTranslateY': '5rem',
  },
  'translate-y-24': {
    '-TransformTranslateY': '6rem',
  },
  'translate-y-32': {
    '-TransformTranslateY': '8rem',
  },
  'translate-y-40': {
    '-TransformTranslateY': '10rem',
  },
  'translate-y-48': {
    '-TransformTranslateY': '12rem',
  },
  'translate-y-56': {
    '-TransformTranslateY': '14rem',
  },
  'translate-y-64': {
    '-TransformTranslateY': '16rem',
  },
  'translate-y-px': {
    '-TransformTranslateY': '1px',
  },
  '-translate-y-1': {
    '-TransformTranslateY': '-0.25rem',
  },
  '-translate-y-2': {
    '-TransformTranslateY': '-0.5rem',
  },
  '-translate-y-3': {
    '-TransformTranslateY': '-0.75rem',
  },
  '-translate-y-4': {
    '-TransformTranslateY': '-1rem',
  },
  '-translate-y-5': {
    '-TransformTranslateY': '-1.25rem',
  },
  '-translate-y-6': {
    '-TransformTranslateY': '-1.5rem',
  },
  '-translate-y-8': {
    '-TransformTranslateY': '-2rem',
  },
  '-translate-y-10': {
    '-TransformTranslateY': '-2.5rem',
  },
  '-translate-y-12': {
    '-TransformTranslateY': '-3rem',
  },
  '-translate-y-16': {
    '-TransformTranslateY': '-4rem',
  },
  '-translate-y-20': {
    '-TransformTranslateY': '-5rem',
  },
  '-translate-y-24': {
    '-TransformTranslateY': '-6rem',
  },
  '-translate-y-32': {
    '-TransformTranslateY': '-8rem',
  },
  '-translate-y-40': {
    '-TransformTranslateY': '-10rem',
  },
  '-translate-y-48': {
    '-TransformTranslateY': '-12rem',
  },
  '-translate-y-56': {
    '-TransformTranslateY': '-14rem',
  },
  '-translate-y-64': {
    '-TransformTranslateY': '-16rem',
  },
  '-translate-y-px': {
    '-TransformTranslateY': '-1px',
  },
  '-translate-y-full': {
    '-TransformTranslateY': '-100%',
  },
  '-translate-y-1\\/2': {
    '-TransformTranslateY': '-50%',
  },
  'translate-y-1\\/2': {
    '-TransformTranslateY': '50%',
  },
  'translate-y-full': {
    '-TransformTranslateY': '100%',
  },
  'skew-x-0': {
    '-TransformSkewX': '0',
  },
  'skew-x-3': {
    '-TransformSkewX': '3deg',
  },
  'skew-x-6': {
    '-TransformSkewX': '6deg',
  },
  'skew-x-12': {
    '-TransformSkewX': '12deg',
  },
  '-skew-x-12': {
    '-TransformSkewX': '-12deg',
  },
  '-skew-x-6': {
    '-TransformSkewX': '-6deg',
  },
  '-skew-x-3': {
    '-TransformSkewX': '-3deg',
  },
  'skew-y-0': {
    '-TransformSkewY': '0',
  },
  'skew-y-3': {
    '-TransformSkewY': '3deg',
  },
  'skew-y-6': {
    '-TransformSkewY': '6deg',
  },
  'skew-y-12': {
    '-TransformSkewY': '12deg',
  },
  '-skew-y-12': {
    '-TransformSkewY': '-12deg',
  },
  '-skew-y-6': {
    '-TransformSkewY': '-6deg',
  },
  '-skew-y-3': {
    '-TransformSkewY': '-3deg',
  },
  'transition-none': {
    transitionProperty: 'none',
  },
  'transition-all': {
    transitionProperty: 'all',
  },
  transition: {
    transitionProperty: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
  },
  'transition-colors': {
    transitionProperty: 'background-color, border-color, color, fill, stroke',
  },
  'transition-opacity': {
    transitionProperty: 'opacity',
  },
  'transition-shadow': {
    transitionProperty: 'box-shadow',
  },
  'transition-transform': {
    transitionProperty: 'transform',
  },
  'ease-linear': {
    transitionTimingFunction: 'linear',
  },
  'ease-in': {
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 1, 1)',
  },
  'ease-out': {
    transitionTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
  },
  'ease-in-out': {
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  'duration-75': {
    transitionDuration: '75ms',
  },
  'duration-100': {
    transitionDuration: '100ms',
  },
  'duration-150': {
    transitionDuration: '150ms',
  },
  'duration-200': {
    transitionDuration: '200ms',
  },
  'duration-300': {
    transitionDuration: '300ms',
  },
  'duration-500': {
    transitionDuration: '500ms',
  },
  'duration-700': {
    transitionDuration: '700ms',
  },
  'duration-1000': {
    transitionDuration: '1000ms',
  },
  'spr-ui-01': {
    backgroundColor: 'var(--spr-ui-01, #FFFFFF)',
  },
  'spr-ui-02': {
    backgroundColor: 'var(--spr-ui-02, #F8F8FD)',
  },
  'spr-ui-03': {
    backgroundColor: 'var(--spr-ui-03, #EFEFF8)',
  },
  'spr-ui-04': {
    backgroundColor: 'var(--spr-ui-04, #0828CC)',
  },
  'spr-ui-05': {
    backgroundColor: 'var(--spr-ui-05, #EFEFF8)',
  },
  'spr-ui-focus': {
    backgroundColor: 'var(--spr-ui-focus, rgba(8, 40, 204, 0.07))',
  },
  'spr-ui-focus-reverse': {
    backgroundColor: 'var(--spr-ui-focus-reverse, rgba(255, 255, 255, 0.2))',
  },
  'spr-ui-hover': {
    backgroundColor: 'var(--spr-ui-hover, rgba(8, 40, 204, 0.05))',
  },
  'spr-ui-hover-reverse': {
    backgroundColor: 'var(--spr-ui-hover-reverse, rgba(255, 255, 255, 0.1))',
  },
  'spr-support-error': {
    backgroundColor: 'var(--spr-support-error, #ff6060)',
  },
  'spr-support-error-highlight': {
    backgroundColor: 'var(--spr-support-error-highlight, rgba(255, 96, 96, 0.1))',
  },
  'spr-support-success': {
    backgroundColor: 'var(--spr-support-success, #3fbf41)',
  },
  'spr-support-success-highlight': {
    backgroundColor: 'var(--spr-support-success-highlight, rgba(63, 191, 65, 0.07))',
  },
  'spr-support-warning': {
    backgroundColor: 'var(--spr-support-warning, #EEC202)',
  },
  'spr-support-warning-highlight': {
    backgroundColor: 'var(--spr-support-warning-highlight, rgba(238, 194, 2, 0.1))',
  },
  'spr-tag': {
    backgroundColor: 'var(--spr-tag, #EFEFF8)',
  },
  'spr-tag-01': {
    backgroundColor: 'var(--spr-tag-01, #EFEFF8)',
  },
  'spr-tag-02': {
    backgroundColor: 'var(--spr-tag-02, rgba(8, 40, 204, 0.07))',
  },
  'spr-field': {
    backgroundColor: 'var(--spr-field, #D7D7E0)',
  },
  'spr-popup': {
    backgroundColor: 'var(--spr-popup, #FFFFFF)',
  },
  'spr-overlay': {
    backgroundColor: 'var(--spr-overlay, rgba(10, 10, 20, 0.9))',
  },
  'spr-tooltip-01': {
    backgroundColor: 'var(--spr-tooltip-01, #0A0A14)',
  },
  'spr-highlight': {
    backgroundColor: 'var(--spr-highlight, rgba(255, 231, 173, 0.7))',
  },
  'spr-favorite': {
    backgroundColor: 'var(--spr-favorite, #FF9F21)',
  },
  'spr-notification': {
    backgroundColor: 'var(--spr-notification, #E44045)',
  },
  'spr-clr-blue': {
    backgroundColor: 'var(--spr-clr-blue, #0AA2FF)',
  },
  'spr-clr-green': {
    backgroundColor: 'var(--spr-clr-green, #20963a)',
  },
  'spr-clr-lavender': {
    backgroundColor: 'var(--spr-clr-lavender, #7F36F6)',
  },
  'spr-clr-orange': {
    backgroundColor: 'var(--spr-clr-orange, #F08C1A)',
  },
  'spr-clr-pink': {
    backgroundColor: 'var(--spr-clr-pink, #DE456B)',
  },
  'spr-clr-red': {
    backgroundColor: 'var(--spr-clr-red, #E44045)',
  },
  'spr-clr-sea': {
    backgroundColor: 'var(--spr-clr-sea, #16AAD2)',
  },
  'spr-clr-teal': {
    backgroundColor: 'var(--spr-clr-teal, #13C18D)',
  },
  'spr-clr-yellow': {
    backgroundColor: 'var(--spr-clr-yellow, #DEAC09)',
  },
  'spr-clr-grey': {
    backgroundColor: 'var(--spr-clr-grey, #D7D7E0)',
  },
  'nav-ui-01': {
    backgroundColor: 'var(--nav-ui-01, rgba(255, 255, 255, 0.2))',
  },
  'nav-ui-hover-01': {
    backgroundColor: 'var(--nav-ui-hover-01, rgba(255, 255, 255, 0.3))',
  },
  'spr-link': {
    color: 'var(--spr-link, #0828CC)',
  },
  'spr-text-01': {
    color: 'var(--spr-text-01, #0A0A14)',
  },
  'spr-text-02': {
    color: 'var(--spr-text-02, #73737D)',
  },
  'spr-text-03': {
    color: 'var(--spr-text-03, #A9A9B2)',
  },
  'spr-text-04': {
    color: 'var(--spr-text-04, #0828CC)',
  },
  'spr-text-05': {
    color: 'var(--spr-text-05, #FFFFFF)',
  },
  'spr-text-06': {
    color: 'var(--spr-text-06, #FFFFFF)',
  },
  'spr-support-error-text': {
    color: 'var(--spr-support-error-text, #E44045)',
  },
  'spr-support-success-text': {
    color: 'var(--spr-support-success-text, #20963a)',
  },
  'spr-support-warning-text': {
    color: 'var(--spr-support-warning-text, #DEAC09)',
  },
  'nav-text-01': {
    color: 'var(--nav-text-01, rgba(255, 255, 255, 0.9))',
  },
  'spr-icon-01': {
    fill: 'var(--spr-icon-01, #0A0A14)',
  },
  'spr-icon-02': {
    fill: 'var(--spr-icon-02, #73737D)',
  },
  'spr-icon-03': {
    fill: 'var(--spr-icon-03, #A9A9B2)',
  },
  'spr-icon-04': {
    fill: 'var(--spr-icon-04, #0828CC)',
  },
  'spr-icon-05': {
    fill: 'var(--spr-icon-05, #FFFFFF)',
  },
  'spr-icon-06': {
    fill: 'var(--spr-icon-06, rgba(255, 255, 255, 0.6))',
  },
  'spr-icon-hover': {
    fill: 'var(--spr-icon-hover, #0A0A14)',
  },
  'spr-icon-disable': {
    fill: 'var(--spr-icon-disable, #D7D7E0)',
  },
  'spr-icon-hover-reverse': {
    fill: 'var(--spr-icon-hover-reverse, #FFFFFF)',
  },
  'nav-icon-01': {
    fill: 'var(--nav-icon-01, rgba(255, 255, 255, 0.9))',
  },
  'nav-icon-focus-01': {
    fill: 'var(--nav-icon-focus-01, #DE456B)',
  },
  'spr-hover': {
    borderColor: 'var(--spr-hover, #0828CC)',
  },
  'spr-focus-01': {
    borderColor: 'var(--spr-focus-01, #0828CC)',
  },
  'spr-focus-02': {
    borderColor: 'var(--spr-focus-02, 1.6px solid #1c62fd)',
  },
  'spr-border-01': {
    borderColor: 'var(--spr-border-01, #EFEFF8)',
  },
  'spr-border-02': {
    borderColor: 'var(--spr-border-02, #E6E9F9)',
  },
  'spr-border-03': {
    borderColor: 'var(--spr-border-03, #D7D7E0)',
  },
  'spr-border-04': {
    borderColor: 'var(--spr-border-04, #A9A9B2)',
  },
  'spr-border-05': {
    borderColor: 'var(--spr-border-05, #FFFFFF)',
  },
  'spr-card-border': {
    borderColor: 'var(--spr-card-border, #E6E9F9)',
  },
  'spr-popup-border': {
    borderColor: 'var(--spr-popup-border, #D7D7E0)',
  },
  'spr-tooltip-border': {
    borderColor: 'var(--spr-tooltip-border, #0A0A14)',
  },
  'spr-shadow-01': {
    boxShadow: 'var(--spr-shadow-01, 0 1px 4px 0 rgba(10,10,20,0.15))',
  },
  'spr-shadow-02': {
    boxShadow: 'var(--spr-shadow-02, 0 2px 8px 0 rgba(10,10,20,0.20))',
  },
  'spr-shadow-03': {
    boxShadow: 'var(--spr-shadow-03, -2px 9px 12px 0 rgba(10,10,20,0.60))',
  },
  'spr-shadow-04': {
    boxShadow: 'var(--spr-shadow-04, 0px -2px 8px 0px rgba(10,10,20,0.2))',
  },
  'spr-shadow-05': {
    boxShadow: 'var(--spr-shadow-05, 0px 3px 4px 0 rgba(0,0,0,0.1))',
  },
  'spr-shadow-06': {
    boxShadow: 'var(--spr-shadow-06, 0px -3px 4px 0 rgba(0,0,0,0.1))',
  },
};
