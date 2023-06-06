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
    name: 'space-dark',
    htmlFontSize: '10px',
    typography: {
        h1: { fontSize: '3.2rem', lineHeight: '4rem', fontWeight: 600 },
        h2: { fontSize: '2.4rem', lineHeight: '3.2rem', fontWeight: 600 },
        h3: { fontSize: '2rem', lineHeight: '2.8rem', fontWeight: 600 },
        h4: { fontSize: '1.8rem', lineHeight: '2.4rem', fontWeight: 600 },
        h5: { fontSize: '1.6rem', lineHeight: '2.2rem', fontWeight: 600 },
        h6: { fontSize: '1.4rem', lineHeight: '2rem', fontWeight: 600 },
        h7: { fontSize: '1.3rem', lineHeight: '2.2rem', fontWeight: 600 },
        b1: { fontSize: '1.3rem', lineHeight: '1.8rem', fontWeight: 600 },
        b2: { fontSize: '1.2rem', lineHeight: '1.6rem', fontWeight: 600 },
        bl1: { fontSize: '1.4rem', lineHeight: '2.2rem', fontWeight: 400 },
        bl2: { fontSize: '1.3rem', lineHeight: '2rem', fontWeight: 400 },
        bl3: { fontSize: '1.2rem', lineHeight: '2rem', fontWeight: 400 },
        bs1: { fontSize: '1.4rem', lineHeight: '2rem', fontWeight: 400 },
        bs2: { fontSize: '1.3rem', lineHeight: '2rem', fontWeight: 400 },
        bs3: { fontSize: '1.2rem', lineHeight: '2rem', fontWeight: 400 },
        l1: { fontSize: '1.3rem', lineHeight: '1.8rem', fontWeight: 400 },
        l2: { fontSize: '1.2rem', lineHeight: '1.6rem', fontWeight: 400 },
        l3: { fontSize: '1.1rem', lineHeight: '1.6rem', fontWeight: 400 },
        l4: { fontSize: '1rem', lineHeight: '1.4rem', fontWeight: 400 }
    },
    popover: { borderRadius: '4px' },
    button: {
        borderRadius: '4px',
        variantSecondary: {
            color: 'var(--spr-text-02, #AEAEB2)',
            hoverBackgroundColor: 'var(--spr-ui-hover, rgba(255, 255, 255, 0.07))',
            activeBackgroundColor: 'var(--spr-ui-focus, rgba(255, 255, 255, 0.12))'
        },
        sizeXs: {
            minWidth: '60px',
            paddingY: '2px',
            paddingX: '12px',
            fontStyles: { fontSize: '12px', lineHeight: '14px', fontWeight: 600 }
        },
        sizeSm: {
            minWidth: '72px',
            paddingY: '3px',
            paddingX: '12px',
            fontStyles: { fontSize: '12px', lineHeight: '16px', fontWeight: 600 }
        },
        sizeMd: {
            minWidth: '80px',
            paddingY: '5px',
            paddingX: '12px',
            fontStyles: { fontSize: '12px', lineHeight: '16px', fontWeight: 600 }
        },
        sizeLg: {
            minWidth: '88px',
            paddingY: '6px',
            paddingX: '16px',
            fontStyles: { fontSize: '13px', lineHeight: '18px', fontWeight: 600 }
        },
        sizeXl: {
            minWidth: '96px',
            paddingY: '8px',
            paddingX: '20px',
            fontStyles: { fontSize: '13px', lineHeight: '18px', fontWeight: 600 }
        }
    },
    iconButton: {
        minWidth: '24px',
        sizeXxxs: { buttonSize: 16, iconSize: 8 },
        sizeXxs: { buttonSize: 24, iconSize: 10 },
        sizeXs: { buttonSize: 30, iconSize: 12 },
        sizeSm: { buttonSize: 32, iconSize: 14 },
        sizeMd: { buttonSize: 34, iconSize: 16 },
        sizeLg: { buttonSize: 36, iconSize: 20 },
        sizeXl: { buttonSize: 40, iconSize: 24 },
        shapeRound: {
            color: 'var(--spr-icon-02, #AEAEB2)',
            hoverColor: 'var(--spr-icon-hover, #FFFFFF)',
            activeColor: 'var(--spr-icon-04, #0AA2FF)',
            disabledColor: 'var(--spr-icon-disable, #646469)',
            backgroundColor: 'transparent',
            hoverBackgroundColor: 'var(--spr-ui-hover, rgba(255, 255, 255, 0.07))',
            activeBackgroundColor: 'var(--spr-ui-hover, rgba(255, 255, 255, 0.07))',
            disabledBackgroundColor: 'var(--spr-interactive-disable, rgba(44, 44, 47, 0.6))'
        },
        shapeRoundBordered: { backgroundColor: 'var(--spr-ui-01, #2C2C2F)', borderColor: 'var(--spr-border-02, #48484C)' },
        shapeSquare: {
            borderRadius: '4px',
            color: 'var(--spr-icon-02, #AEAEB2)',
            hoverColor: 'var(--spr-icon-hover, #FFFFFF)',
            activeColor: 'var(--spr-icon-04, #0AA2FF)',
            disabledColor: 'var(--spr-icon-disable, #646469)',
            backgroundColor: 'transparent',
            hoverBackgroundColor: 'var(--spr-ui-hover, rgba(255, 255, 255, 0.07))',
            activeBackgroundColor: 'var(--spr-ui-hover, rgba(255, 255, 255, 0.07))',
            disabledBackgroundColor: 'var(--spr-interactive-disable, rgba(44, 44, 47, 0.6))'
        },
        shapeSquareBordered: { backgroundColor: 'var(--spr-ui-01, #2C2C2F)', borderColor: 'var(--spr-border-02, #48484C)' }
    },
    input: {
        borderRadius: '0.4rem',
        disabledBorderColor: 'var(--spr-field, #48484C)',
        sizeSm: { paddingX: '1.2rem', paddingY: '0.8rem', fontSize: '1.2rem', lineHeight: '1.6rem' },
        sizeMd: { paddingX: '1.2rem', paddingY: '1rem', fontSize: '1.2rem', lineHeight: '1.6rem' },
        sizeLg: { paddingX: '1.2rem', paddingY: '1.2rem', fontSize: '1.3rem', lineHeight: '1.6rem' }
    },
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
            tagLineHeight: '16px'
        },
        sizeSm: { paddingY: '0px', tagHeight: '22px', tagMarginX: '2px', tagMarginY: '4px' },
        sizeMd: { paddingY: '0px', tagHeight: '22px', tagMarginX: '2px', tagMarginY: '6px' },
        sizeLg: { paddingY: '2px', tagHeight: '22px', tagMarginX: '2px', tagMarginY: '8px' }
    },
    link: { fontSize: '1.3rem', lineHeight: '1.5rem' },
    list: {
        selectedEnhancerBackground: 'var(--spr-focus-01, #0AA2FF)',
        hoverBackgroundColor: 'var(--spr-ui-hover, rgba(255, 255, 255, 0.07))'
    },
    tab: {
        variantDefault: {
            fontStyles: { fontSize: '1.3rem', lineHeight: '1.8rem', fontWeight: 400 },
            selectedStyles: { borderColor: 'var(--spr-focus-01, #0AA2FF)' },
            positionTopStyles: { marginLeft: '12px', marginRight: '12px', borderBottomWidth: '2px' },
            positionLeftStyles: { marginTop: '8px', marginBottom: '8px', borderLeftWidth: '2px' },
            positionRightStyles: { marginTop: '8px', marginBottom: '8px', borderRightWidth: '2px' }
        }
    },
    tag: {
        borderRadius: '24px',
        actionButtonBorderRadius: '50%',
        avatarMarginLeft: '0px',
        sizeSm: { height: '20px' },
        sizeLg: { height: '24px' }
    },
    app: {
        header: '#000',
        headerTab: 'rgba(44, 44, 47, 0.6)',
        headerTabHover: 'rgba(44, 44, 47, 0.8)',
        headerTabActive: '#2C2C2F',
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
        ui01: 'var(--spr-ui-01, #2C2C2F)',
        ui02: 'var(--spr-ui-02, #3A3A3E)',
        ui03: 'var(--spr-ui-03, #141416)',
        ui04: 'var(--spr-ui-04, #0AA2FF)',
        ui05: 'var(--spr-ui-05, #48484C)',
        ui06: 'var(--spr-ui-06, #212123)',
        uiFocus: 'var(--spr-ui-focus, rgba(255, 255, 255, 0.12))',
        uiFocusReverse: 'var(--spr-ui-focus-reverse, rgba(255, 255, 255, 0.2))',
        uiHover: 'var(--spr-ui-hover, rgba(255, 255, 255, 0.07))',
        uiHoverReverse: 'var(--spr-ui-hover-reverse, rgba(255, 255, 255, 0.1))',
        supportError: 'var(--spr-support-error, #C6202B)',
        supportErrorHighlight: 'var(--spr-support-error-highlight, rgba(228, 64, 69, 0.15))',
        supportSuccess: 'var(--spr-support-success, #20963a)',
        supportSuccessHighlight: 'var(--spr-support-success-highlight, rgba(32, 150, 58, 0.15))',
        supportWarning: 'var(--spr-support-warning, #DEAC09)',
        supportWarningHighlight: 'var(--spr-support-warning-highlight, rgba(222, 172, 9, 0.12))',
        clrBlueHighlight: 'var(--spr-clr-blue-highlight, #2B3343)',
        tag: 'var(--spr-tag, #48484C)',
        tag01: 'var(--spr-tag-01, #48484C)',
        tag02: 'var(--spr-tag-02, rgba(255, 255, 255, 0.1))',
        field: 'var(--spr-field, #48484C)',
        popup: 'var(--spr-popup, #2C2C2F)',
        overlay: 'var(--spr-overlay, rgba(28, 28, 31, 0.8))',
        tooltip01: 'var(--spr-tooltip-01, rgba(255, 255, 255, 0.9))',
        highlight: 'var(--spr-highlight, rgba(184, 144, 0, 0.6))',
        favourite: 'var(--spr-favourite, #FF9F21)',
        notification: 'var(--spr-notification, #C6202B)',
        interactive01: 'var(--spr-interactive-01, #0AA2FF)',
        interactiveHover: 'var(--spr-interactive-hover, #0A83D0)',
        interactiveDisable: 'var(--spr-interactive-disable, rgba(44, 44, 47, 0.6))',
        interactive02: 'var(--spr-interactive-02, #AEAEB2)',
        clrBlue: 'var(--spr-clr-blue, #006CD7)',
        clrGreen: 'var(--spr-clr-green, #3fbf41)',
        clrLavender: 'var(--spr-clr-lavender, #9C60FF)',
        clrOrange: 'var(--spr-clr-orange, #FF9F21)',
        clrPink: 'var(--spr-clr-pink, #FF668F)',
        clrRed: 'var(--spr-clr-red, #ff6060)',
        clrSea: 'var(--spr-clr-sea, #00C8FF)',
        clrTeal: 'var(--spr-clr-teal, #02D999)',
        clrYellow: 'var(--spr-clr-yellow, #EEC202)',
        clrGrey: 'var(--spr-clr-grey, #646469)',
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
        focus01: 'var(--spr-focus-01, #0AA2FF)',
        border01: 'var(--spr-border-01, #3A3A3E)',
        border02: 'var(--spr-border-02, #48484C)',
        border03: 'var(--spr-border-03, #48484C)',
        border04: 'var(--spr-border-04, #646469)',
        border05: 'var(--spr-border-05, #2C2C2F)',
        border06: 'var(--spr-border-06, #F1F1F1)',
        cardBorder: 'var(--spr-card-border, #3A3A3E)',
        popupBorder: 'var(--spr-popup-border, #1C1C1F)',
        tooltipBorder: 'var(--spr-tooltip-border, rgba(174, 174, 178, 0.2))',
        interactiveFocus: 'var(--spr-interactive-focus, #0A65A1)',
        shadow01: 'var(--spr-shadow-01, 0 1px 4px 0 rgba(10,10,20,0.3))',
        shadow02: 'var(--spr-shadow-02, 0 4px 10px 0 rgb(20,20,22))',
        shadow03: 'var(--spr-shadow-03, -2px 5px 12px 0 rgba(10,10,20,0.80))',
        shadow04: 'var(--spr-shadow-04, 0 -4px 10px 0px rgb(20,20,22))',
        shadow05: 'var(--spr-shadow-05, 0px 3px 4px 0 rgba(0,0,0,0.2))',
        shadow06: 'var(--spr-shadow-06, 0px -3px 4px 0 rgba(0,0,0,0.2))',
        icon01: 'var(--spr-icon-01, #FFFFFF)',
        icon02: 'var(--spr-icon-02, #AEAEB2)',
        icon03: 'var(--spr-icon-03, #AEAEB2)',
        icon04: 'var(--spr-icon-04, #0AA2FF)',
        icon05: 'var(--spr-icon-05, #FFFFFF)',
        icon06: 'var(--spr-icon-06, rgba(255, 255, 255, 0.6))',
        iconError: 'var(--spr-icon-error, #FF6060)',
        iconHover: 'var(--spr-icon-hover, #FFFFFF)',
        iconDisable: 'var(--spr-icon-disable, #646469)',
        iconHoverReverse: 'var(--spr-icon-hover-reverse, #FFFFFF)',
        link: 'var(--spr-link, #0AA2FF)',
        text01: 'var(--spr-text-01, #FFFFFF)',
        text02: 'var(--spr-text-02, #AEAEB2)',
        text03: 'var(--spr-text-03, #646469)',
        text04: 'var(--spr-text-04, #0AA2FF)',
        text05: 'var(--spr-text-05, #FFFFFF)',
        text06: 'var(--spr-text-06, #2C2C2F)',
        textPlaceholder: 'var(--spr-text-placeholder, #646469)',
        supportErrorText: 'var(--spr-support-error-text, #E44045)',
        supportSuccessText: 'var(--spr-support-success-text, #3fbf41)',
        supportWarningText: 'var(--spr-support-warning-text, #EEC202)'
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
