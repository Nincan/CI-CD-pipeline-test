export default {
  typography: {
    h1: {
      fontSize: '3.2rem',
      lineHeight: '4rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2.4rem',
      lineHeight: '3.2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      lineHeight: '2.8rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.8rem',
      lineHeight: '2.4rem',
      fontWeight: 600,
    },
    h5: {
      fontSize: '1.6rem',
      lineHeight: '2.2rem',
      fontWeight: 600,
    },
    h6: {
      fontSize: '1.4rem',
      lineHeight: '2rem',
      fontWeight: 600,
    },
    h7: {
      fontSize: '1.3rem',
      lineHeight: '2.2rem',
      fontWeight: 600,
    },
    b1: {
      fontSize: '1.3rem',
      lineHeight: '1.8rem',
      fontWeight: 600,
    },
    b2: {
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      fontWeight: 600,
    },
    bl1: {
      fontSize: '1.4rem',
      lineHeight: '2.2rem',
      fontWeight: 400,
    },
    bl2: {
      fontSize: '1.3rem',
      lineHeight: '2rem',
      fontWeight: 400,
    },
    bl3: {
      fontSize: '1.2rem',
      lineHeight: '2rem',
      fontWeight: 400,
    },
    bs1: {
      fontSize: '1.4rem',
      lineHeight: '2rem',
      fontWeight: 400,
    },
    bs2: {
      fontSize: '1.3rem',
      lineHeight: '2rem',
      fontWeight: 400,
    },
    bs3: {
      fontSize: '1.2rem',
      lineHeight: '2rem',
      fontWeight: 400,
    },
    l1: {
      fontSize: '1.3rem',
      lineHeight: '1.8rem',
      fontWeight: 400,
    },
    l2: {
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
      fontWeight: 400,
    },
    l3: {
      fontSize: '1.1rem',
      lineHeight: '1.6rem',
      fontWeight: 400,
    },
    l4: {
      fontSize: '1rem',
      lineHeight: '1.4rem',
      fontWeight: 400,
    },
  },
  popover: () => ({
    borderRadius: '4px',
  }),
  button: theme => ({
    borderRadius: '4px',
    variantSecondary: {
      color: theme('spr')['text-02'],
      hoverBackgroundColor: theme('spr')['ui-hover'],
      activeBackgroundColor: theme('spr')['ui-focus'],
    },
    sizeXs: {
      minWidth: '60px',
      paddingY: '2px',
      paddingX: '12px',
      fontStyles: {
        fontSize: '12px',
        lineHeight: '14px',
        fontWeight: 600,
      },
    },
    sizeSm: {
      minWidth: '72px',
      paddingY: '3px',
      paddingX: '12px',
      fontStyles: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600,
      },
    },
    sizeMd: {
      minWidth: '80px',
      paddingY: '5px',
      paddingX: '12px',
      fontStyles: {
        fontSize: '12px',
        lineHeight: '16px',
        fontWeight: 600,
      },
    },
    sizeLg: {
      minWidth: '88px',
      paddingY: '6px',
      paddingX: '16px',
      fontStyles: {
        fontSize: '13px',
        lineHeight: '18px',
        fontWeight: 600,
      },
    },
    sizeXl: {
      minWidth: '96px',
      paddingY: '8px',
      paddingX: '20px',
      fontStyles: {
        fontSize: '13px',
        lineHeight: '18px',
        fontWeight: 600,
      },
    },
  }),
  iconButton: theme => ({
    minWidth: '24px',
    sizeXxxs: {
      buttonSize: 16,
      iconSize: 8,
    },
    sizeXxs: {
      buttonSize: 24,
      iconSize: 10,
    },
    sizeXs: {
      buttonSize: 30,
      iconSize: 12,
    },
    sizeSm: {
      buttonSize: 32,
      iconSize: 14,
    },
    sizeMd: {
      buttonSize: 34,
      iconSize: 16,
    },
    sizeLg: {
      buttonSize: 36,
      iconSize: 20,
    },
    sizeXl: {
      buttonSize: 40,
      iconSize: 24,
    },
    shapeRound: {
      color: theme('spr')['icon-02'],
      hoverColor: theme('spr')['icon-hover'],
      activeColor: theme('spr')['icon-04'],
      disabledColor: theme('spr')['icon-disable'],

      backgroundColor: 'transparent',
      hoverBackgroundColor: theme('spr')['ui-hover'],
      activeBackgroundColor: theme('spr')['ui-hover'],
      disabledBackgroundColor: theme('spr')['interactive-disable'],
    },
    shapeRoundBordered: {
      backgroundColor: theme('spr')['ui-01'],
      borderColor: theme('spr')['border-02'],
    },
    shapeSquare: {
      borderRadius: '4px',

      color: theme('spr')['icon-02'],
      hoverColor: theme('spr')['icon-hover'],
      activeColor: theme('spr')['icon-04'],
      disabledColor: theme('spr')['icon-disable'],

      backgroundColor: 'transparent',
      hoverBackgroundColor: theme('spr')['ui-hover'],
      activeBackgroundColor: theme('spr')['ui-hover'],
      disabledBackgroundColor: theme('spr')['interactive-disable'],
    },
    shapeSquareBordered: {
      backgroundColor: theme('spr')['ui-01'],
      borderColor: theme('spr')['border-02'],
    },
  }),
  input: theme => ({
    borderRadius: '0.4rem',
    disabledBorderColor: theme('spr')['field'],
    sizeSm: {
      paddingX: '1.2rem',
      paddingY: '0.8rem',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
    },
    sizeMd: {
      paddingX: '1.2rem',
      paddingY: '1rem',
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
    },
    sizeLg: {
      paddingX: '1.2rem',
      paddingY: '1.2rem',
      fontSize: '1.3rem',
      lineHeight: '1.6rem',
    },
  }),
  multiSelect: {
    tagBorderRadius: '5px',
    tagFontSize: '14px',
    tagLineHeight: '18px',
    sizeXxs: {
      tagBorderRadius: '3px',
      paddingY: '0px',
      tagHeight: '18px',
      tagMarginX: '2px',
      tagMarginY: '2px',
      tagFontSize: '13px',
      tagLineHeight: '16px',
    },
    sizeSm: {
      paddingY: '0px',
      tagHeight: '22px',
      tagMarginX: '2px',
      tagMarginY: '4px',
    },
    sizeMd: {
      paddingY: '0px',
      tagHeight: '22px',
      tagMarginX: '2px',
      tagMarginY: '6px',
    },
    sizeLg: {
      paddingY: '2px',
      tagHeight: '22px',
      tagMarginX: '2px',
      tagMarginY: '8px',
    },
  },
  link: {
    fontSize: '1.3rem',
    lineHeight: '1.5rem',
  },
  list: theme => ({
    selectedEnhancerBackground: theme('spr')['focus-01'],
    hoverBackgroundColor: theme('spr')['ui-hover'],
  }),
  tab: theme => ({
    variantDefault: {
      fontStyles: {
        fontSize: '1.3rem',
        lineHeight: '1.8rem',
        fontWeight: 400,
      },
      selectedStyles: {
        borderColor: theme('spr')['focus-01'],
      },
      positionTopStyles: {
        marginLeft: '12px',
        marginRight: '12px',
        borderBottomWidth: '2px',
      },
      positionLeftStyles: {
        marginTop: '8px',
        marginBottom: '8px',
        borderLeftWidth: '2px',
      },
      positionRightStyles: {
        marginTop: '8px',
        marginBottom: '8px',
        borderRightWidth: '2px',
      },
    },
  }),
  tag: {
    borderRadius: '24px',
    actionButtonBorderRadius: '50%',
    avatarMarginLeft: '0px',
    sizeSm: {
      height: '20px',
    },
    sizeLg: {
      height: '24px',
    },
  },
};
