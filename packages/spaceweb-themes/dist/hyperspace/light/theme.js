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
    name: 'hyperspace-light',
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
            color: 'var(--spr-text-01, #0A0A14)',
            hoverBackgroundColor: 'var(--spr-ui-02, #F8F8FA)',
            activeBackgroundColor: 'var(--spr-ui-05, #EEF0F1)'
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
            color: 'var(--spr-icon-01, #0A0A14)',
            hoverColor: 'var(--spr-icon-01, #0A0A14)',
            activeColor: 'var(--spr-icon-04, #0E61F6)',
            disabledColor: 'var(--spr-icon-disable, #DBDBDB)',
            backgroundColor: 'transparent',
            hoverBackgroundColor: 'var(--spr-ui-05, #EEF0F1)',
            activeBackgroundColor: 'var(--spr-ui-05, #EEF0F1)',
            disabledBackgroundColor: 'transparent'
        },
        shapeRoundBordered: {
            hoverColor: 'var(--spr-icon-01, #0A0A14)',
            activeColor: 'var(--spr-icon-04, #0E61F6)',
            disabledColor: 'var(--spr-icon-disable, #DBDBDB)',
            backgroundColor: 'var(--spr-ui-01, #FFFFFF)',
            hoverBackgroundColor: 'var(--spr-ui-05, #EEF0F1)',
            activeBackgroundColor: 'var(--spr-ui-01, #FFFFFF)',
            disabledBackgroundColor: 'var(--spr-ui-01, #FFFFFF)',
            borderColor: 'var(--spr-border-03, #DBDBDB)',
            hoverBorderColor: 'var(--spr-border-06, #0A0A14)',
            activeBorderColor: 'var(--spr-focus-01, #0E61F6)',
            disabledBorderColor: 'var(--spr-border-03, #DBDBDB)'
        },
        shapeSquare: {
            borderRadius: '8px',
            color: 'var(--spr-icon-01, #0A0A14)',
            hoverColor: 'var(--spr-icon-01, #0A0A14)',
            activeColor: 'var(--spr-icon-04, #0E61F6)',
            disabledColor: 'var(--spr-icon-disable, #DBDBDB)',
            backgroundColor: 'transparent',
            hoverBackgroundColor: 'var(--spr-ui-05, #EEF0F1)',
            activeBackgroundColor: 'var(--spr-ui-05, #EEF0F1)',
            disabledBackgroundColor: 'transparent'
        },
        shapeSquareBordered: {
            hoverColor: 'var(--spr-icon-01, #0A0A14)',
            activeColor: 'var(--spr-icon-04, #0E61F6)',
            disabledColor: 'var(--spr-icon-disable, #DBDBDB)',
            backgroundColor: 'var(--spr-ui-01, #FFFFFF)',
            hoverBackgroundColor: 'var(--spr-ui-05, #EEF0F1)',
            activeBackgroundColor: 'var(--spr-ui-01, #FFFFFF)',
            disabledBackgroundColor: 'var(--spr-ui-01, #FFFFFF)',
            borderColor: 'var(--spr-border-03, #DBDBDB)',
            hoverBorderColor: 'var(--spr-border-06, #0A0A14)',
            activeBorderColor: 'var(--spr-focus-01, #0E61F6)',
            disabledBorderColor: 'var(--spr-border-03, #DBDBDB)'
        }
    },
    input: {
        borderRadius: '8px',
        disabledBorderColor: 'var(--spr-border-03, #DBDBDB)',
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
    list: { selectedEnhancerBackground: 'transparent', hoverBackgroundColor: 'var(--spr-ui-05, #EEF0F1)' },
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
        header: '#0A0A14',
        headerTab: 'rgba(255, 255, 255, 0.1)',
        headerTabHover: 'rgba(255, 255, 255, 0.2)',
        headerTabActive: '#EEEEEE',
        headerText: 'rgba(255, 255, 255, 0.6)',
        headerTextHover: '#FFFFFF'
    },
    cht: {
        bg: '#F3EAE1',
        border: '#E6D4CA',
        bubbleLeft: '#FFFFFF',
        bubbleRight: '#EBEBFF',
        bubbleSupportingText: '#646470',
        bubbleTextLeft: '#0A0A14',
        bubbleTextRight: '#0A0A14',
        bubbleBorder: '#C7D3F7',
        bubbleIcon1: '#646470',
        bubbleIcon2: '#D7D7DC',
        bubbleIcon3: '#0828CC',
        bubbleInsert: '#F8F8FA',
        bubbleLink: '#0828CC',
        bubbleText: '#646470',
        reply: '#FFFFFF',
        footer: '#F3EAE1',
        hover: 'rgba(100, 100, 112, 0.07)',
        read: '#006CD7',
        unread: '#A0A0A8'
    },
    spr: {
        ui01: 'var(--spr-ui-01, #FFFFFF)',
        ui02: 'var(--spr-ui-02, #F8F8FA)',
        ui03: 'var(--spr-ui-03, #DBDBDB)',
        ui04: 'var(--spr-ui-04, #0E61F6)',
        ui05: 'var(--spr-ui-05, #EEF0F1)',
        ui06: 'var(--spr-ui-06, #E6E6E9)',
        uiFocus: 'var(--spr-ui-focus, rgba(8, 40, 204, 0.07))',
        uiFocusReverse: 'var(--spr-ui-focus-reverse, rgba(255, 255, 255, 0.2))',
        uiHover: 'var(--spr-ui-hover, #F8F8FA)',
        uiHoverReverse: 'var(--spr-ui-hover-reverse, rgba(255, 255, 255, 0.1))',
        supportError: 'var(--spr-support-error, #C70F5C)',
        supportErrorHighlight: 'var(--spr-support-error-highlight, rgba(199, 15, 92, 0.2))',
        supportSuccess: 'var(--spr-support-success, #6AC96E)',
        supportSuccessHighlight: 'var(--spr-support-success-highlight, rgba(106, 201, 110, 0.2))',
        supportWarning: 'var(--spr-support-warning, #F3BF24)',
        supportWarningHighlight: 'var(--spr-support-warning-highlight, rgba(243, 191, 36, 0.2))',
        clrBlueHighlight: 'var(--spr-clr-blue-highlight, #E8F0FE)',
        tag: 'var(--spr-tag, #F2F2F4)',
        tag01: 'var(--spr-tag-01, #E6E6E9)',
        tag02: 'var(--spr-tag-02, rgba(8, 40, 204, 0.07))',
        field: 'var(--spr-field, #DBDBDB)',
        popup: 'var(--spr-popup, #FFFFFF)',
        overlay: 'var(--spr-overlay, rgba(10, 10, 20, 0.9))',
        tooltip01: 'var(--spr-tooltip-01, #0A0A14)',
        highlight: 'var(--spr-highlight, rgba(255, 231, 173, 0.7))',
        favourite: 'var(--spr-favourite, #FF9F21)',
        notification: 'var(--spr-notification, #DE336A)',
        interactive01: 'var(--spr-interactive-01, #0E61F6)',
        interactiveHover: 'var(--spr-interactive-hover, #1858CE)',
        interactiveDisable: 'var(--spr-interactive-disable, rgba(255, 255, 255, 0.6))',
        interactive02: 'var(--spr-interactive-02, #DBDBDB)',
        clrBlue: 'var(--spr-clr-blue, #2EA2FB)',
        clrGreen: 'var(--spr-clr-green, #33CC99)',
        clrLavender: 'var(--spr-clr-lavender, #7F36F6)',
        clrOrange: 'var(--spr-clr-orange, #F08C1A)',
        clrPink: 'var(--spr-clr-pink, #FFA1BE)',
        clrRed: 'var(--spr-clr-red, #E1245E)',
        clrSea: 'var(--spr-clr-sea, #16AAD2)',
        clrTeal: 'var(--spr-clr-teal, #13C18D)',
        clrYellow: 'var(--spr-clr-yellow, #ECAD00)',
        clrGrey: 'var(--spr-clr-grey, #D7D7DC)',
        interactiveFocus: 'var(--spr-interactive-focus, #132a86)',
        clrPurple: 'var(--spr-clr-purple, #8C43FF)',
        clrLtYellow: 'var(--spr-clr-lt-yellow, #FFD04F)',
        clrDarkerBlue: 'var(--spr-clr-darker-blue, #327AFD)',
        secondaryYellow: 'var(--spr-secondary-yellow, #FFC312)',
        secondaryGreen: 'var(--spr-secondary-green, #A3CB38)',
        secondaryTeal: 'var(--spr-secondary-teal, #12CBC4)',
        secondaryLtPink: 'var(--spr-secondary-lt-pink, #FDA7DF)',
        secondaryPink: 'var(--spr-secondary-pink, #ED4C67)',
        secondaryMaroon: 'var(--spr-secondary-maroon, #B53471)',
        secondaryOrange: 'var(--spr-secondary-orange, #F48749)',
        icon01: 'var(--spr-icon-01, #0A0A14)',
        icon02: 'var(--spr-icon-02, #646470)',
        icon03: 'var(--spr-icon-03, #818192)',
        icon04: 'var(--spr-icon-04, #0E61F6)',
        icon05: 'var(--spr-icon-05, #FFFFFF)',
        icon06: 'var(--spr-icon-06, rgba(255, 255, 255, 0.6))',
        iconHover: 'var(--spr-icon-hover, #0A0A14)',
        iconDisable: 'var(--spr-icon-disable, #DBDBDB)',
        iconHoverReverse: 'var(--spr-icon-hover-reverse, #FFFFFF)',
        iconError: 'var(--spr-icon-error, #C70F5C)',
        link: 'var(--spr-link, #0E61F6)',
        text01: 'var(--spr-text-01, #0A0A14)',
        text02: 'var(--spr-text-02, #434350)',
        text03: 'var(--spr-text-03, #646470)',
        text04: 'var(--spr-text-04, #0E61F6)',
        text05: 'var(--spr-text-05, #FFFFFF)',
        text06: 'var(--spr-text-06, #FFFFFF)',
        textPlaceholder: 'var(--spr-text-placeholder, #646470)',
        supportErrorText: 'var(--spr-support-error-text, #C70F5C)',
        supportSuccessText: 'var(--spr-support-success-text, #6AC96E)',
        supportWarningText: 'var(--spr-support-warning-text, #F3BF24)',
        hover: 'var(--spr-hover, #0729a0)',
        focus01: 'var(--spr-focus-01, #0E61F6)',
        border01: 'var(--spr-border-01, #EEEEEE)',
        border02: 'var(--spr-border-02, #E6E6E9)',
        border03: 'var(--spr-border-03, #DBDBDB)',
        border04: 'var(--spr-border-04, #818192)',
        border05: 'var(--spr-border-05, #FFFFFF)',
        border06: 'var(--spr-border-06, #0A0A14)',
        cardBorder: 'var(--spr-card-border, #ECECEF)',
        popupBorder: 'var(--spr-popup-border, #D7D7DC)',
        tooltipBorder: 'var(--spr-tooltip-border, #0A0A14)',
        focus02: 'var(--spr-focus-02, 1px solid #0E61F6)',
        shadow01: 'var(--spr-shadow-01, 0 1px 4px 0 rgba(10,10,20,0.15))',
        shadow02: 'var(--spr-shadow-02, 0 2px 8px 0 rgba(10,10,20,0.20))',
        shadow03: 'var(--spr-shadow-03, -2px 9px 12px 0 rgba(10,10,20,0.60))',
        shadow04: 'var(--spr-shadow-04, -2px 5px 12px -4px rgba(10,10,20,.20))',
        shadow05: 'var(--spr-shadow-05, 0px 3px 4px 0 rgba(0,0,0,0.1))',
        shadow06: 'var(--spr-shadow-06, 0px -3px 4px 0 rgba(0,0,0,0.1))'
    },
    nav: {
        ui01: 'var(--nav-ui-01, rgba(255, 255, 255, 0.2))',
        uiHover01: 'var(--nav-ui-hover-01, rgba(255, 255, 255, 0.3))',
        icon01: 'var(--nav-icon-01, rgba(255, 255, 255, 0.9))',
        iconFocus01: 'var(--nav-icon-focus-01, #0E61F6)',
        text01: 'var(--nav-text-01, rgba(255, 255, 255, 0.9))'
    }
};
exports["default"] = __assign(__assign({}, theme_1["default"]), theme);
