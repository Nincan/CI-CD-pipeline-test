import spaceCommon from './common';

module.exports = {
  name: 'space-dark',
  htmlFontSize: '10px',
  theme: {
    ...spaceCommon,
    app: {
      header: '#000',
      headerTab: 'rgba(44, 44, 47, 0.6)',
      headerTabHover: 'rgba(44, 44, 47, 0.8)',
      headerTabActive: '#2C2C2F',
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
        'ui-01': { value: '#2C2C2F', cssProperty: 'backgroundColor' },
        'ui-02': { value: '#3A3A3E', cssProperty: 'backgroundColor' },
        'ui-03': { value: '#141416', cssProperty: 'backgroundColor' },
        'ui-04': { value: '#0AA2FF', cssProperty: 'backgroundColor' },
        'ui-05': { value: '#48484C', cssProperty: 'backgroundColor' },
        'ui-06': { value: '#212123', cssProperty: 'backgroundColor' },
        'ui-focus': { value: 'rgba(255, 255, 255, 0.12)', cssProperty: 'backgroundColor' },
        'ui-focus-reverse': { value: 'rgba(255, 255, 255, 0.2)', cssProperty: 'backgroundColor' },
        'ui-hover': { value: 'rgba(255, 255, 255, 0.07)', cssProperty: 'backgroundColor' },
        'ui-hover-reverse': { value: 'rgba(255, 255, 255, 0.1)', cssProperty: 'backgroundColor' },
        'support-error': { value: '#C6202B', cssProperty: 'backgroundColor' },
        'support-error-highlight': { value: 'rgba(228, 64, 69, 0.15)', cssProperty: 'backgroundColor' },
        'support-success': { value: '#20963a', cssProperty: 'backgroundColor' },
        'support-success-highlight': { value: 'rgba(32, 150, 58, 0.15)', cssProperty: 'backgroundColor' },
        'support-warning': { value: '#DEAC09', cssProperty: 'backgroundColor' },
        'support-warning-highlight': { value: 'rgba(222, 172, 9, 0.12)', cssProperty: 'backgroundColor' },
        'clr-blue-highlight': { value: '#2B3343', cssProperty: 'backgroundColor' },
        tag: { value: '#48484C', cssProperty: 'backgroundColor' },
        'tag-01': { value: '#48484C', cssProperty: 'backgroundColor' },
        'tag-02': { value: 'rgba(255, 255, 255, 0.1)', cssProperty: 'backgroundColor' },
        field: { value: '#48484C', cssProperty: 'backgroundColor' },
        popup: { value: '#2C2C2F', cssProperty: 'backgroundColor' },
        overlay: { value: 'rgba(28, 28, 31, 0.8)', cssProperty: 'backgroundColor' },
        'tooltip-01': { value: 'rgba(255, 255, 255, 0.9)', cssProperty: 'backgroundColor' },
        highlight: { value: 'rgba(184, 144, 0, 0.6)', cssProperty: 'backgroundColor' },
        favourite: { value: '#FF9F21', cssProperty: 'backgroundColor' },
        notification: { value: '#C6202B', cssProperty: 'backgroundColor' },
        'interactive-01': { value: '#0AA2FF', cssProperty: 'backgroundColor' },
        'interactive-hover': { value: '#0A83D0', cssProperty: 'backgroundColor' },
        'interactive-disable': { value: 'rgba(44, 44, 47, 0.6)', cssProperty: 'backgroundColor' },
        'interactive-02': { value: '#AEAEB2', cssProperty: 'backgroundColor' },
        'clr-blue': { value: '#006CD7', cssProperty: 'backgroundColor' },
        'clr-green': { value: '#3fbf41', cssProperty: 'backgroundColor' },
        'clr-lavender': { value: '#9C60FF', cssProperty: 'backgroundColor' },
        'clr-orange': { value: '#FF9F21', cssProperty: 'backgroundColor' },
        'clr-pink': { value: '#FF668F', cssProperty: 'backgroundColor' },
        'clr-red': { value: '#ff6060', cssProperty: 'backgroundColor' },
        'clr-sea': { value: '#00C8FF', cssProperty: 'backgroundColor' },
        'clr-teal': { value: '#02D999', cssProperty: 'backgroundColor' },
        'clr-yellow': { value: '#EEC202', cssProperty: 'backgroundColor' },
        'clr-grey': { value: '#646469', cssProperty: 'backgroundColor' },
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
        'focus-01': { value: '#0AA2FF', cssProperty: 'borderColor' },
        'border-01': { value: '#3A3A3E', cssProperty: 'borderColor' },
        'border-02': { value: '#48484C', cssProperty: 'borderColor' },
        'border-03': { value: '#48484C', cssProperty: 'borderColor' },
        'border-04': { value: '#646469', cssProperty: 'borderColor' },
        'border-05': { value: '#2C2C2F', cssProperty: 'borderColor' },
        'border-06': { value: '#F1F1F1', cssProperty: 'borderColor' },
        'card-border': { value: '#3A3A3E', cssProperty: 'borderColor' },
        'popup-border': { value: '#1C1C1F', cssProperty: 'borderColor' },
        'tooltip-border': { value: 'rgba(174, 174, 178, 0.2)', cssProperty: 'borderColor' },
        'interactive-focus': { value: '#0A65A1', cssProperty: 'borderColor' },
        'shadow-01': { value: '0 1px 4px 0 rgba(10,10,20,0.3)', cssProperty: 'boxShadow' },
        'shadow-02': { value: '0 4px 10px 0 rgb(20,20,22)', cssProperty: 'boxShadow' },
        'shadow-03': { value: '-2px 5px 12px 0 rgba(10,10,20,0.80)', cssProperty: 'boxShadow' },
        'shadow-04': { value: '0 -4px 10px 0px rgb(20,20,22)', cssProperty: 'boxShadow' },
        'shadow-05': { value: '0px 3px 4px 0 rgba(0,0,0,0.2)', cssProperty: 'boxShadow' },
        'shadow-06': { value: '0px -3px 4px 0 rgba(0,0,0,0.2)', cssProperty: 'boxShadow' },
        'icon-01': { value: '#FFFFFF', cssProperty: 'fill' },
        'icon-02': { value: '#AEAEB2', cssProperty: 'fill' },
        'icon-03': { value: '#AEAEB2', cssProperty: 'fill' },
        'icon-04': { value: '#0AA2FF', cssProperty: 'fill' },
        'icon-05': { value: '#FFFFFF', cssProperty: 'fill' },
        'icon-06': { value: 'rgba(255, 255, 255, 0.6)', cssProperty: 'fill' },
        'icon-error': { value: '#FF6060', cssProperty: 'fill' },
        'icon-hover': { value: '#FFFFFF', cssProperty: 'fill' },
        'icon-disable': { value: '#646469', cssProperty: 'fill' },
        'icon-hover-reverse': { value: '#FFFFFF', cssProperty: 'fill' },
        link: { value: '#0AA2FF', cssProperty: 'color' },
        'text-01': { value: '#FFFFFF', cssProperty: 'color' },
        'text-02': { value: '#AEAEB2', cssProperty: 'color' },
        'text-03': { value: '#646469', cssProperty: 'color' },
        'text-04': { value: '#0AA2FF', cssProperty: 'color' },
        'text-05': { value: '#FFFFFF', cssProperty: 'color' },
        'text-06': { value: '#2C2C2F', cssProperty: 'color' },
        'text-placeholder': { value: '#646469', cssProperty: 'color' },
        'support-error-text': { value: '#E44045', cssProperty: 'color' },
        'support-success-text': { value: '#3fbf41', cssProperty: 'color' },
        'support-warning-text': { value: '#EEC202', cssProperty: 'color' },
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
      '01': { color: '#0AA2FF', width: '2px', offset: '2px', style: 'solid' },
    },
  },
};

const x = {};
