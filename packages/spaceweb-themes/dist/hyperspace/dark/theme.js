"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// THIS FILES IS GENERATED USING SCRIPT, DO NOT EDIT DIRECTLY
var theme_1 = require("../../common-theme/theme");
var theme = {
    name: 'hyperspace-dark',
    htmlFontSize: '10px',
    typography: {
        h1: { fontSize: '4.2rem', lineHeight: '4.8rem', fontWeight: 600 },
        h2: { fontSize: '2.4rem', lineHeight: '2.9rem', fontWeight: 600 },
        h3: { fontSize: '2rem', lineHeight: '2.6rem', fontWeight: 600 },
        h4: { fontSize: '1.6rem', lineHeight: '2.4rem', fontWeight: 600 },
        h5: { fontSize: '1.6rem', lineHeight: '2.2rem', fontWeight: 600 },
        h6: { fontSize: '1.4rem', lineHeight: '2rem', fontWeight: 600 },
        h7: { fontSize: '1.3rem', lineHeight: '2.2rem', fontWeight: 600 },
        b1: { fontSize: '1.3rem', lineHeight: '1.8rem', fontWeight: 600 },
        b2: { fontSize: '1.2rem', lineHeight: '1.6rem', fontWeight: 600 },
        bl1: { fontSize: '1.4rem', lineHeight: '2rem', fontWeight: 400 },
        bl2: { fontSize: '1.3rem', lineHeight: '2rem', fontWeight: 400 },
        bl3: { fontSize: '1.2rem', lineHeight: '1.8rem', fontWeight: 400 },
        bs1: { fontSize: '1.4rem', lineHeight: '2rem', fontWeight: 400 },
        bs2: { fontSize: '1.3rem', lineHeight: '1.8rem', fontWeight: 400 },
        bs3: { fontSize: '1.2rem', lineHeight: '1.6rem', fontWeight: 400 },
        l1: { fontSize: '1.3rem', lineHeight: '1.8rem', fontWeight: 400 },
        l2: { fontSize: '1.2rem', lineHeight: '1.6rem', fontWeight: 400 },
        l3: { fontSize: '1.1rem', lineHeight: '1.6rem', fontWeight: 400 },
        l4: { fontSize: '1rem', lineHeight: '1.4rem', fontWeight: 400 }
    },
    popover: { borderRadius: '8px' },
    button: {
        borderRadius: '8px',
        variantSecondary: {
            color: 'var(--spr-text-01, #F1F1F1)',
            hoverBackgroundColor: 'var(--spr-ui-02, #212123)',
            activeBackgroundColor: 'var(--spr-ui-05, #3A3A3E)'
        },
        sizeXxxs: {
            minWidth: '48px',
            paddingY: '4px',
            paddingX: '6px',
            borderRadius: '5px',
            fontStyles: { fontSize: '12px', lineHeight: '14px', fontWeight: 600 }
        },
        sizeXxs: {
            minWidth: '56px',
            paddingY: '6px',
            paddingX: '11px',
            borderRadius: '6px',
            fontStyles: { fontSize: '12px', lineHeight: '14px', fontWeight: 600 }
        },
        sizeXs: {
            minWidth: '72px',
            paddingY: '7px',
            paddingX: '11px',
            borderRadius: '7px',
            fontStyles: { fontSize: '13px', lineHeight: '16px', fontWeight: 600 }
        },
        sizeSm: {
            minWidth: '88px',
            paddingY: '9px',
            paddingX: '11px',
            fontStyles: { fontSize: '13px', lineHeight: '16px', fontWeight: 600 }
        },
        sizeMd: {
            minWidth: '100px',
            paddingY: '10px',
            paddingX: '15px',
            fontStyles: { fontSize: '14px', lineHeight: '18px', fontWeight: 600 }
        },
        sizeLg: {
            minWidth: '112px',
            paddingY: '12px',
            paddingX: '15px',
            fontStyles: { fontSize: '14px', lineHeight: '18px', fontWeight: 600 }
        },
        sizeXl: {
            minWidth: '112px',
            paddingY: '12px',
            paddingX: '15px',
            fontStyles: { fontSize: '14px', lineHeight: '18px', fontWeight: 600 }
        }
    },
    iconButton: {
        minWidth: '0px',
        sizeXxxxs: { buttonSize: 16, iconSize: 8, squareBorderRadius: 3 },
        sizeXxxs: { buttonSize: 24, iconSize: 10, squareBorderRadius: 5 },
        sizeXxs: { buttonSize: 28, iconSize: 12, squareBorderRadius: 6 },
        sizeXs: { buttonSize: 32, iconSize: 12, squareBorderRadius: 7 },
        sizeSm: { buttonSize: 36, iconSize: 14 },
        sizeMd: { buttonSize: 40, iconSize: 16 },
        sizeLg: { buttonSize: 44, iconSize: 16 },
        sizeXl: { buttonSize: 44, iconSize: 16 },
        shapeRound: {
            color: 'var(--spr-icon-01, #F1F1F1)',
            hoverColor: 'var(--spr-icon-01, #F1F1F1)',
            activeColor: 'var(--spr-icon-04, #4B8AFC)',
            disabledColor: 'var(--spr-icon-disable, #DBDBDB)',
            backgroundColor: 'transparent',
            hoverBackgroundColor: 'var(--spr-ui-05, #3A3A3E)',
            activeBackgroundColor: 'var(--spr-ui-05, #3A3A3E)',
            disabledBackgroundColor: 'transparent'
        },
        shapeRoundBordered: {
            hoverColor: 'var(--spr-icon-01, #F1F1F1)',
            activeColor: 'var(--spr-icon-04, #4B8AFC)',
            disabledColor: 'var(--spr-icon-disable, #DBDBDB)',
            backgroundColor: 'var(--spr-ui-01, #1C1C1F)',
            hoverBackgroundColor: 'var(--spr-ui-05, #3A3A3E)',
            activeBackgroundColor: 'var(--spr-ui-01, #1C1C1F)',
            disabledBackgroundColor: 'var(--spr-ui-01, #1C1C1F)',
            borderColor: 'var(--spr-border-03, #646469)',
            hoverBorderColor: 'var(--spr-border-06, #F1F1F1)',
            activeBorderColor: 'var(--spr-focus-01, #4B8AFC)',
            disabledBorderColor: 'var(--spr-border-03, #646469)'
        },
        shapeSquare: {
            borderRadius: '8px',
            color: 'var(--spr-icon-01, #F1F1F1)',
            hoverColor: 'var(--spr-icon-01, #F1F1F1)',
            activeColor: 'var(--spr-icon-04, #4B8AFC)',
            disabledColor: 'var(--spr-icon-disable, #DBDBDB)',
            backgroundColor: 'transparent',
            hoverBackgroundColor: 'var(--spr-ui-05, #3A3A3E)',
            activeBackgroundColor: 'var(--spr-ui-05, #3A3A3E)',
            disabledBackgroundColor: 'transparent'
        },
        shapeSquareBordered: {
            hoverColor: 'var(--spr-icon-01, #F1F1F1)',
            activeColor: 'var(--spr-icon-04, #4B8AFC)',
            disabledColor: 'var(--spr-icon-disable, #DBDBDB)',
            backgroundColor: 'var(--spr-ui-01, #1C1C1F)',
            hoverBackgroundColor: 'var(--spr-ui-05, #3A3A3E)',
            activeBackgroundColor: 'var(--spr-ui-01, #1C1C1F)',
            disabledBackgroundColor: 'var(--spr-ui-01, #1C1C1F)',
            borderColor: 'var(--spr-border-03, #646469)',
            hoverBorderColor: 'var(--spr-border-06, #F1F1F1)',
            activeBorderColor: 'var(--spr-focus-01, #4B8AFC)',
            disabledBorderColor: 'var(--spr-border-03, #646469)'
        }
    },
    input: {
        borderRadius: '8px',
        disabledBorderColor: 'var(--spr-border-03, #646469)',
        sizeXxxs: { borderRadius: '5px', paddingX: '7px', paddingY: '3px', fontSize: '13px', lineHeight: '16px' },
        sizeXs: { borderRadius: '7px', paddingX: '11px', paddingY: '6px', fontSize: '14px', lineHeight: '18px' },
        sizeSm: { paddingX: '11px', paddingY: '8px', fontSize: '14px', lineHeight: '18px' },
        sizeMd: { paddingX: '11px', paddingY: '10px', fontSize: '14px', lineHeight: '18px' },
        sizeLg: { paddingX: '11px', paddingY: '10px', fontSize: '14px', lineHeight: '18px' }
    },
    multiSelect: {
        sizeXxxs: { paddingX: '2px', paddingY: '1px', tagMarginX: '2px', tagMarginY: '1px' },
        sizeXs: { paddingX: '4px', paddingY: '2px', tagMarginY: '2px', tagMarginX: '4px' },
        sizeSm: { paddingX: '4px', paddingY: '4px', tagMarginY: '2px', tagMarginX: '4px' },
        sizeMd: { paddingX: '4px', paddingY: '6px', tagMarginY: '2px', tagMarginX: '4px' },
        sizeLg: { paddingX: '4px', paddingY: '6px', tagMarginY: '2px', tagMarginX: '4px' }
    },
    link: { fontSize: '16px', lineHeight: '15px' },
    list: { selectedEnhancerBackground: 'transparent', hoverBackgroundColor: 'var(--spr-ui-05, #3A3A3E)' },
    tab: {
        variantDefault: {
            fontStyles: { fontSize: '18px', lineHeight: '21px', fontWeight: 600 },
            positionTopStyles: { marginLeft: '16px', marginRight: '16px' },
            positionLeftStyles: { marginTop: '12px', marginBottom: '12px' },
            positionRightStyles: { marginTop: '12px', marginBottom: '12px' }
        }
    },
    tag: { actionButtonBorderRadius: '2px', avatarMarginLeft: '4px' },
    app: {
        header: '#000',
        headerTab: 'rgba(44, 44, 47, 0.6)',
        headerTabHover: 'rgba(44, 44, 47, 0.8)',
        headerTabActive: '#3A3A3E',
        headerText: 'rgba(255, 255, 255, 0.6)',
        headerTextHover: '#FFFFFF'
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
        unread: '#AEAEB2'
    },
    spr: {
        ui01: 'var(--spr-ui-01, #1C1C1F)',
        ui02: 'var(--spr-ui-02, #212123)',
        ui03: 'var(--spr-ui-03, #48484C)',
        ui04: 'var(--spr-ui-04, #4B8AFC)',
        ui05: 'var(--spr-ui-05, #3A3A3E)',
        ui06: 'var(--spr-ui-06, #2C2C2F)',
        uiFocus: 'var(--spr-ui-focus, rgba(255, 255, 255, 0.12))',
        uiFocusReverse: 'var(--spr-ui-focus-reverse, rgba(255, 255, 255, 0.2))',
        uiHover: 'var(--spr-ui-hover, #212123)',
        uiHoverReverse: 'var(--spr-ui-hover-reverse, rgba(255, 255, 255, 0.1))',
        supportError: 'var(--spr-support-error, #FA6274)',
        supportErrorHighlight: 'var(--spr-support-error-highlight, rgba(250, 98, 116, 0.3))',
        supportSuccess: 'var(--spr-support-success, #6AC96E)',
        supportSuccessHighlight: 'var(--spr-support-success-highlight, rgba(106, 201, 110, 0.3))',
        supportWarning: 'var(--spr-support-warning, #F3BF24)',
        supportWarningHighlight: 'var(--spr-support-warning-highlight, rgba(243, 191, 36, 0.3))',
        clrBlueHighlight: 'var(--spr-clr-blue-highlight, #2B3343)',
        tag: 'var(--spr-tag, #48484C)',
        tag01: 'var(--spr-tag-01, #48484C)',
        tag02: 'var(--spr-tag-02, rgba(255, 255, 255, 0.1))',
        field: 'var(--spr-field, #48484C)',
        popup: 'var(--spr-popup, #1C1C1F)',
        overlay: 'var(--spr-overlay, rgba(28, 28, 31, 0.85))',
        tooltip01: 'var(--spr-tooltip-01, #FFFFFF)',
        highlight: 'var(--spr-highlight, rgba(184, 144, 0, 0.6))',
        favourite: 'var(--spr-favourite, #FF9F21)',
        notification: 'var(--spr-notification, #FA6274)',
        interactive01: 'var(--spr-interactive-01, #4B8AFC)',
        interactiveHover: 'var(--spr-interactive-hover, #1858CE)',
        interactiveDisable: 'var(--spr-interactive-disable, rgba(72,72,76,0.8))',
        interactive02: 'var(--spr-interactive-02, #48484C)',
        clrBlue: 'var(--spr-clr-blue, #297AB9)',
        clrGreen: 'var(--spr-clr-green, #097A4B)',
        clrLavender: 'var(--spr-clr-lavender, #9C60FF)',
        clrOrange: 'var(--spr-clr-orange, #FF9F21)',
        clrPink: 'var(--spr-clr-pink, #FFA1BE)',
        clrRed: 'var(--spr-clr-red, #DB334F)',
        clrSea: 'var(--spr-clr-sea, #00C8FF)',
        clrTeal: 'var(--spr-clr-teal, #02D999)',
        clrYellow: 'var(--spr-clr-yellow, #95700D)',
        clrGrey: 'var(--spr-clr-grey, #646469)',
        interactiveFocus: 'var(--spr-interactive-focus, #0A65A1)',
        clrPurple: 'var(--spr-clr-purple, #763BD2)',
        clrLtYellow: 'var(--spr-clr-lt-yellow, #846F35)',
        clrDarkerBlue: 'var(--spr-clr-darker-blue, #327AFD)',
        secondaryYellow: 'var(--spr-secondary-yellow, #8D6F18)',
        secondaryGreen: 'var(--spr-secondary-green, #5F732C)',
        secondaryTeal: 'var(--spr-secondary-teal, #168380)',
        secondaryLtPink: 'var(--spr-secondary-lt-pink, #956787)',
        secondaryPink: 'var(--spr-secondary-pink, #B94055)',
        secondaryMaroon: 'var(--spr-secondary-maroon, #962F61)',
        secondaryOrange: 'var(--spr-secondary-orange, #A8623A)',
        hover: 'var(--spr-hover, #0AA2FF)',
        focus01: 'var(--spr-focus-01, #4B8AFC)',
        focus02: 'var(--spr-focus-02, 1px solid #1c62fd)',
        border01: 'var(--spr-border-01, #3A3A3E)',
        border02: 'var(--spr-border-02, #48484C)',
        border03: 'var(--spr-border-03, #646469)',
        border04: 'var(--spr-border-04, #A0A0A8)',
        border05: 'var(--spr-border-05, #2C2C2F)',
        border06: 'var(--spr-border-06, #F1F1F1)',
        cardBorder: 'var(--spr-card-border, #3A3A3E)',
        popupBorder: 'var(--spr-popup-border, #1C1C1F)',
        tooltipBorder: 'var(--spr-tooltip-border, rgba(174, 174, 178, 0.2))',
        shadow01: 'var(--spr-shadow-01, 0 1px 4px 0 rgba(10,10,20,0.3))',
        shadow02: 'var(--spr-shadow-02, 1px 1px 7px rgba(255, 255, 255, 0.1))',
        shadow03: 'var(--spr-shadow-03, -2px 5px 12px 0 rgba(10,10,20,0.80))',
        shadow04: 'var(--spr-shadow-04, -2px 5px 12px -4px rgba(0,0,0,1.0))',
        shadow05: 'var(--spr-shadow-05, 0px 3px 4px 0 rgba(0,0,0,0.2))',
        shadow06: 'var(--spr-shadow-06, 0px -3px 4px 0 rgba(0,0,0,0.2))',
        icon01: 'var(--spr-icon-01, #F1F1F1)',
        icon02: 'var(--spr-icon-02, #AEAEB2)',
        icon03: 'var(--spr-icon-03, #AEAEB2)',
        icon04: 'var(--spr-icon-04, #4B8AFC)',
        icon05: 'var(--spr-icon-05, #1C1C1F)',
        icon06: 'var(--spr-icon-06, rgba(255, 255, 255, 0.6))',
        iconHover: 'var(--spr-icon-hover, #FFFFFF)',
        iconDisable: 'var(--spr-icon-disable, #DBDBDB)',
        iconHoverReverse: 'var(--spr-icon-hover-reverse, #FFFFFF)',
        iconError: 'var(--spr-icon-error, #FA6274)',
        link: 'var(--spr-link, #4B8AFC)',
        text01: 'var(--spr-text-01, #F1F1F1)',
        text02: 'var(--spr-text-02, #AEAEB2)',
        text03: 'var(--spr-text-03, #646469)',
        text04: 'var(--spr-text-04, #4B8AFC)',
        text05: 'var(--spr-text-05, #F1F1F1)',
        text06: 'var(--spr-text-06, #2C2C2F)',
        textPlaceholder: 'var(--spr-text-placeholder, #646469)',
        supportErrorText: 'var(--spr-support-error-text, #FA6274)',
        supportSuccessText: 'var(--spr-support-success-text, #6AC96E)',
        supportWarningText: 'var(--spr-support-warning-text, #F3BF24)'
    },
    nav: {
        ui01: 'var(--nav-ui-01, rgba(44, 44, 47, 0.7))',
        uiHover01: 'var(--nav-ui-hover-01, rgba(44, 44, 47, 0.9))',
        icon01: 'var(--nav-icon-01, rgba(255, 255, 255, 0.6))',
        iconFocus01: 'var(--nav-icon-focus-01, #2E6BD9)',
        text01: 'var(--nav-text-01, rgba(255, 255, 255, 0.6))'
    }
};
exports["default"] = __assign(__assign({}, theme_1["default"]), theme);
