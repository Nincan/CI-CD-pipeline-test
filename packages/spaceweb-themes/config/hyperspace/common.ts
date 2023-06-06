export default {
  typography: {
    // Heading in progress
    h1: {
      fontSize: '4.2rem',
      lineHeight: '4.8rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2.4rem',
      lineHeight: '2.9rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '2rem',
      lineHeight: '2.6rem',
      fontWeight: 600,
    },
    h4: {
      fontSize: '1.6rem',
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
      lineHeight: '2rem',
      fontWeight: 400,
    },
    bl2: {
      fontSize: '1.3rem',
      lineHeight: '2rem',
      fontWeight: 400,
    },
    bl3: {
      fontSize: '1.2rem',
      lineHeight: '1.8rem',
      fontWeight: 400,
    },
    bs1: {
      fontSize: '1.4rem',
      lineHeight: '2rem',
      fontWeight: 400,
    },
    bs2: {
      fontSize: '1.3rem',
      lineHeight: '1.8rem',
      fontWeight: 400,
    },
    bs3: {
      fontSize: '1.2rem',
      lineHeight: '1.6rem',
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

  // component themes
  popover: () => ({
    borderRadius: '8px',
  }),
  button: theme => ({
    borderRadius: '8px',
    variantSecondary: {
      color: theme('spr')['text-01'],
      hoverBackgroundColor: theme('spr')['ui-02'],
      activeBackgroundColor: theme('spr')['ui-05'],
    },
    sizeXxxs: {
      minWidth: '48px',
      paddingY: '4px',
      paddingX: '6px',
      borderRadius: '5px',
      fontStyles: {
        fontSize: '12px',
        lineHeight: '14px',
        fontWeight: 600,
      },
    },
    sizeXxs: {
      minWidth: '56px',
      paddingY: '6px',
      paddingX: '11px',
      borderRadius: '6px',
      fontStyles: {
        fontSize: '12px',
        lineHeight: '14px',
        fontWeight: 600,
      },
    },
    sizeXs: {
      minWidth: '72px',
      paddingY: '7px',
      paddingX: '11px',
      borderRadius: '7px',
      fontStyles: {
        fontSize: '13px',
        lineHeight: '16px',
        fontWeight: 600,
      },
    },
    sizeSm: {
      minWidth: '88px',
      paddingY: '9px',
      paddingX: '11px',
      fontStyles: {
        fontSize: '13px',
        lineHeight: '16px',
        fontWeight: 600,
      },
    },
    sizeMd: {
      minWidth: '100px',
      paddingY: '10px',
      paddingX: '15px',
      fontStyles: {
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: 600,
      },
    },
    sizeLg: {
      minWidth: '112px',
      paddingY: '12px',
      paddingX: '15px',
      fontStyles: {
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: 600,
      },
    },
    sizeXl: {
      minWidth: '112px',
      paddingY: '12px',
      paddingX: '15px',
      fontStyles: {
        fontSize: '14px',
        lineHeight: '18px',
        fontWeight: 600,
      },
    },
  }),
  iconButton: theme => ({
    minWidth: '0px',
    sizeXxxxs: {
      buttonSize: 16,
      iconSize: 8,
      squareBorderRadius: 3,
    },
    sizeXxxs: {
      buttonSize: 24,
      iconSize: 10,
      squareBorderRadius: 5,
    },
    sizeXxs: {
      buttonSize: 28,
      iconSize: 12,
      squareBorderRadius: 6,
    },
    sizeXs: {
      buttonSize: 32,
      iconSize: 12,
      squareBorderRadius: 7,
    },
    sizeSm: {
      buttonSize: 36,
      iconSize: 14,
    },
    sizeMd: {
      buttonSize: 40,
      iconSize: 16,
    },
    sizeLg: {
      buttonSize: 44,
      iconSize: 16,
    },
    sizeXl: {
      buttonSize: 44,
      iconSize: 16,
    },
    shapeRound: {
      color: theme('spr')['icon-01'],
      hoverColor: theme('spr')['icon-01'],
      activeColor: theme('spr')['icon-04'],
      disabledColor: theme('spr')['icon-disable'],

      backgroundColor: 'transparent',
      hoverBackgroundColor: theme('spr')['ui-05'],
      activeBackgroundColor: theme('spr')['ui-05'],
      disabledBackgroundColor: 'transparent',
    },
    shapeRoundBordered: {
      hoverColor: theme('spr')['icon-01'],
      activeColor: theme('spr')['icon-04'],
      disabledColor: theme('spr')['icon-disable'],

      backgroundColor: theme('spr')['ui-01'],
      hoverBackgroundColor: theme('spr')['ui-05'],
      activeBackgroundColor: theme('spr')['ui-01'],
      disabledBackgroundColor: theme('spr')['ui-01'],

      borderColor: theme('spr')['border-03'],
      hoverBorderColor: theme('spr')['border-06'],
      activeBorderColor: theme('spr')['focus-01'],
      disabledBorderColor: theme('spr')['border-03'],
    },
    shapeSquare: {
      borderRadius: '8px',

      color: theme('spr')['icon-01'],
      hoverColor: theme('spr')['icon-01'],
      activeColor: theme('spr')['icon-04'],
      disabledColor: theme('spr')['icon-disable'],

      backgroundColor: 'transparent',
      hoverBackgroundColor: theme('spr')['ui-05'],
      activeBackgroundColor: theme('spr')['ui-05'],
      disabledBackgroundColor: 'transparent',
    },
    shapeSquareBordered: {
      hoverColor: theme('spr')['icon-01'],
      activeColor: theme('spr')['icon-04'],
      disabledColor: theme('spr')['icon-disable'],

      backgroundColor: theme('spr')['ui-01'],
      hoverBackgroundColor: theme('spr')['ui-05'],
      activeBackgroundColor: theme('spr')['ui-01'],
      disabledBackgroundColor: theme('spr')['ui-01'],

      borderColor: theme('spr')['border-03'],
      hoverBorderColor: theme('spr')['border-06'],
      activeBorderColor: theme('spr')['focus-01'],
      disabledBorderColor: theme('spr')['border-03'],
    },
  }),
  input: theme => ({
    borderRadius: '8px',
    disabledBorderColor: theme('spr')['border-03'],
    sizeXxxs: {
      borderRadius: '5px',
      paddingX: '7px',
      paddingY: '3px',
      fontSize: '13px',
      lineHeight: '16px',
    },
    sizeXs: {
      borderRadius: '7px',
      paddingX: '11px',
      paddingY: '6px',
      fontSize: '14px',
      lineHeight: '18px',
    },
    sizeSm: {
      paddingX: '11px',
      paddingY: '8px',
      fontSize: '14px',
      lineHeight: '18px',
    },
    sizeMd: {
      paddingX: '11px',
      paddingY: '10px',
      fontSize: '14px',
      lineHeight: '18px',
    },
    sizeLg: {
      paddingX: '11px',
      paddingY: '10px',
      fontSize: '14px',
      lineHeight: '18px',
    },
  }),
  multiSelect: {
    sizeXxxs: {
      paddingX: '2px',
      paddingY: '1px',
      tagMarginX: '2px',
      tagMarginY: '1px',
    },
    sizeXs: {
      paddingX: '4px',
      paddingY: '2px',
      tagMarginY: '2px',
      tagMarginX: '4px',
    },
    sizeSm: {
      paddingX: '4px',
      paddingY: '4px',
      tagMarginY: '2px',
      tagMarginX: '4px',
    },
    sizeMd: {
      paddingX: '4px',
      paddingY: '6px',
      tagMarginY: '2px',
      tagMarginX: '4px',
    },
    sizeLg: {
      paddingX: '4px',
      paddingY: '6px',
      tagMarginY: '2px',
      tagMarginX: '4px',
    },
  },
  link: {
    fontSize: '16px',
    lineHeight: '15px',
  },
  list: theme => ({
    selectedEnhancerBackground: 'transparent',
    hoverBackgroundColor: theme('spr')['ui-05'],
  }),
  tab: {
    variantDefault: {
      fontStyles: {
        fontSize: '18px',
        lineHeight: '21px',
        fontWeight: 600,
      },
      positionTopStyles: {
        marginLeft: '16px',
        marginRight: '16px',
      },
      positionLeftStyles: {
        marginTop: '12px',
        marginBottom: '12px',
      },
      positionRightStyles: {
        marginTop: '12px',
        marginBottom: '12px',
      },
    },
  },
  tag: {
    actionButtonBorderRadius: '2px',
    avatarMarginLeft: '4px',
  },
};
