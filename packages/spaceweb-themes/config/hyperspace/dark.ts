import hyperspaceCommon from './common';

module.exports = {
  name: 'hyperspace-dark',
  htmlFontSize: '10px',
  theme: {
    ...hyperspaceCommon,
    app: {
      header: '#000',
      headerTab: 'rgba(44, 44, 47, 0.6)',
      headerTabHover: 'rgba(44, 44, 47, 0.8)',
      headerTabActive: '#3A3A3E',
      headerText: 'rgba(255, 255, 255, 0.6)',
      headerTextHover: '#FFFFFF',
    },
    cht: {
      bg: '#141416',
      border: '#2C2C2F',
      bubbleLeft: '#F8F8FA',
      bubbleRight: '#006CD7',
      bubbleSupportingText: 'rgba(255, 255, 255, 0.7)',
      bubbleTextLeft: '#0A0A14',
      bubbleTextRight: '#FFFFFF',
      bubbleBorder: '#006CD7',
      bubbleIcon1: 'rgba(255, 255, 255, 0.7)',
      bubbleIcon2: 'rgba(255, 255, 255, 0.3)',
      bubbleIcon3: '#FFFFFF',
      bubbleInsert: 'rgba(0, 0, 0, 0.2)',
      bubbleLink: '#3DF6BF',
      bubbleText: 'rgba(255, 255, 255, 0.7)',
      reply: '#141416',
      footer: '#2C2C2F',
      hover: '#1C1C1F',
      read: '#006CD7',
      unread: '#AEAEB2',
    },
    __tokens: {
      spr: {
        'ui-01': { value: '#1C1C1F', cssProperty: 'backgroundColor' },
        'ui-02': { value: '#212123', cssProperty: 'backgroundColor' },
        'ui-03': { value: '#48484C', cssProperty: 'backgroundColor' },
        'ui-04': { value: '#4B8AFC', cssProperty: 'backgroundColor' },
        'ui-05': { value: '#3A3A3E', cssProperty: 'backgroundColor' },
        'ui-06': { value: '#2C2C2F', cssProperty: 'backgroundColor' },
        'ui-focus': { value: 'rgba(255, 255, 255, 0.12)', cssProperty: 'backgroundColor' },
        'ui-focus-reverse': { value: 'rgba(255, 255, 255, 0.2)', cssProperty: 'backgroundColor' },
        'ui-hover': { value: '#212123', cssProperty: 'backgroundColor' },
        'ui-hover-reverse': { value: 'rgba(255, 255, 255, 0.1)', cssProperty: 'backgroundColor' },
        'support-error': { value: '#FA6274', cssProperty: 'backgroundColor' },
        'support-error-highlight': { value: 'rgba(250, 98, 116, 0.3)', cssProperty: 'backgroundColor' },
        'support-success': { value: '#6AC96E', cssProperty: 'backgroundColor' },
        'support-success-highlight': { value: 'rgba(106, 201, 110, 0.3)', cssProperty: 'backgroundColor' },
        'support-warning': { value: '#F3BF24', cssProperty: 'backgroundColor' },
        'support-warning-highlight': { value: 'rgba(243, 191, 36, 0.3)', cssProperty: 'backgroundColor' },
        'clr-blue-highlight': { value: '#2B3343', cssProperty: 'backgroundColor' },
        tag: { value: '#48484C', cssProperty: 'backgroundColor' },
        'tag-01': { value: '#48484C', cssProperty: 'backgroundColor' },
        'tag-02': { value: 'rgba(255, 255, 255, 0.1)', cssProperty: 'backgroundColor' },
        field: { value: '#48484C', cssProperty: 'backgroundColor' },
        popup: { value: '#1C1C1F', cssProperty: 'backgroundColor' },
        overlay: { value: 'rgba(28, 28, 31, 0.85)', cssProperty: 'backgroundColor' },
        'tooltip-01': { value: '#FFFFFF', cssProperty: 'backgroundColor' },
        highlight: { value: 'rgba(184, 144, 0, 0.6)', cssProperty: 'backgroundColor' },
        favourite: { value: '#FF9F21', cssProperty: 'backgroundColor' },
        notification: { value: '#FA6274', cssProperty: 'backgroundColor' },
        'interactive-01': { value: '#4B8AFC', cssProperty: 'backgroundColor' },
        'interactive-hover': { value: '#1858CE', cssProperty: 'backgroundColor' },
        'interactive-disable': { value: 'rgba(72,72,76,0.8)', cssProperty: 'backgroundColor' },
        'interactive-02': { value: '#48484C', cssProperty: 'backgroundColor' },
        'clr-blue': { value: '#297AB9', cssProperty: 'backgroundColor' },
        'clr-green': { value: '#097A4B', cssProperty: 'backgroundColor' },
        'clr-lavender': { value: '#9C60FF', cssProperty: 'backgroundColor' },
        'clr-orange': { value: '#FF9F21', cssProperty: 'backgroundColor' },
        'clr-pink': { value: '#FFA1BE', cssProperty: 'backgroundColor' },
        'clr-red': { value: '#DB334F', cssProperty: 'backgroundColor' },
        'clr-sea': { value: '#00C8FF', cssProperty: 'backgroundColor' },
        'clr-teal': { value: '#02D999', cssProperty: 'backgroundColor' },
        'clr-yellow': { value: '#95700D', cssProperty: 'backgroundColor' },
        'clr-grey': { value: '#646469', cssProperty: 'backgroundColor' },
        'interactive-focus': { value: '#0A65A1', cssProperty: 'borderColor' },
        'clr-purple': { value: '#763BD2', cssProperty: 'backgroundColor' },
        'clr-lt-yellow': { value: '#846F35', cssProperty: 'backgroundColor' },
        'clr-darker-blue': { value: '#327AFD', cssProperty: 'backgroundColor' },
        'secondary-yellow': { value: '#8D6F18', cssProperty: 'backgroundColor' },
        'secondary-green': { value: '#5F732C', cssProperty: 'backgroundColor' },
        'secondary-teal': { value: '#168380', cssProperty: 'backgroundColor' },
        'secondary-lt-pink': { value: '#956787', cssProperty: 'backgroundColor' },
        'secondary-pink': { value: '#B94055', cssProperty: 'backgroundColor' },
        'secondary-maroon': { value: '#962F61', cssProperty: 'backgroundColor' },
        'secondary-orange': { value: '#A8623A', cssProperty: 'backgroundColor' },
        hover: { value: '#0AA2FF', cssProperty: 'borderColor' },
        'focus-01': { value: '#4B8AFC', cssProperty: 'borderColor' },
        'focus-02': { value: '1px solid #1c62fd', cssProperty: 'outline' },
        'border-01': { value: '#3A3A3E', cssProperty: 'borderColor' },
        'border-02': { value: '#48484C', cssProperty: 'borderColor' },
        'border-03': { value: '#646469', cssProperty: 'borderColor' },
        'border-04': { value: '#A0A0A8', cssProperty: 'borderColor' },
        'border-05': { value: '#2C2C2F', cssProperty: 'borderColor' },
        'border-06': { value: '#F1F1F1', cssProperty: 'borderColor' },
        'card-border': { value: '#3A3A3E', cssProperty: 'borderColor' },
        'popup-border': { value: '#1C1C1F', cssProperty: 'borderColor' },
        'tooltip-border': { value: 'rgba(174, 174, 178, 0.2)', cssProperty: 'borderColor' },
        'shadow-01': { value: '0 1px 4px 0 rgba(10,10,20,0.3)', cssProperty: 'boxShadow' },
        'shadow-02': { value: '1px 1px 7px rgba(255, 255, 255, 0.1)', cssProperty: 'boxShadow' },
        'shadow-03': { value: '-2px 5px 12px 0 rgba(10,10,20,0.80)', cssProperty: 'boxShadow' },
        'shadow-04': { value: '-2px 5px 12px -4px rgba(0,0,0,1.0)', cssProperty: 'boxShadow' },
        'shadow-05': { value: '0px 3px 4px 0 rgba(0,0,0,0.2)', cssProperty: 'boxShadow' },
        'shadow-06': { value: '0px -3px 4px 0 rgba(0,0,0,0.2)', cssProperty: 'boxShadow' },
        'icon-01': { value: '#F1F1F1', cssProperty: 'fill' },
        'icon-02': { value: '#AEAEB2', cssProperty: 'fill' },
        'icon-03': { value: '#AEAEB2', cssProperty: 'fill' },
        'icon-04': { value: '#4B8AFC', cssProperty: 'fill' },
        'icon-05': { value: '#1C1C1F', cssProperty: 'fill' },
        'icon-06': { value: 'rgba(255, 255, 255, 0.6)', cssProperty: 'fill' },
        'icon-hover': { value: '#FFFFFF', cssProperty: 'fill' },
        'icon-disable': { value: '#DBDBDB', cssProperty: 'fill' },
        'icon-hover-reverse': { value: '#FFFFFF', cssProperty: 'fill' },
        'icon-error': { value: '#FA6274', cssProperty: 'fill' },
        link: { value: '#4B8AFC', cssProperty: 'color' },
        'text-01': { value: '#F1F1F1', cssProperty: 'color' },
        'text-02': { value: '#AEAEB2', cssProperty: 'color' },
        'text-03': { value: '#646469', cssProperty: 'color' },
        'text-04': { value: '#4B8AFC', cssProperty: 'color' },
        'text-05': { value: '#F1F1F1', cssProperty: 'color' },
        'text-06': { value: '#2C2C2F', cssProperty: 'color' },
        'text-placeholder': { value: '#646469', cssProperty: 'color' },
        'support-error-text': { value: '#FA6274', cssProperty: 'color' },
        'support-success-text': { value: '#6AC96E', cssProperty: 'color' },
        'support-warning-text': { value: '#F3BF24', cssProperty: 'color' },
      },
      nav: {
        'ui-01': { value: 'rgba(44, 44, 47, 0.7)', cssProperty: 'backgroundColor' },
        'ui-hover-01': { value: 'rgba(44, 44, 47, 0.9)', cssProperty: 'backgroundColor' },
        'icon-01': { value: 'rgba(255, 255, 255, 0.6)', cssProperty: 'fill' },
        'icon-focus-01': { value: '#2E6BD9', cssProperty: 'fill' },
        'text-01': { value: 'rgba(255, 255, 255, 0.6)', cssProperty: 'color' },
      },
    },
    outline: {
      '01': { color: '#4B8AFC', width: '2px', offset: '2px', style: 'solid' },
    },
  },
};

const x = {};
