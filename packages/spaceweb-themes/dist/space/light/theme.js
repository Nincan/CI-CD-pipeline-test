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
    name: 'space-light',
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
            color: 'var(--spr-text-02, #434350)',
            hoverBackgroundColor: 'var(--spr-ui-hover, rgba(8, 40, 204, 0.05))',
            activeBackgroundColor: 'var(--spr-ui-focus, rgba(8, 40, 204, 0.07))'
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
            color: 'var(--spr-icon-02, #646470)',
            hoverColor: 'var(--spr-icon-hover, #0A0A14)',
            activeColor: 'var(--spr-icon-04, #0828CC)',
            disabledColor: 'var(--spr-icon-disable, #D7D7DC)',
            backgroundColor: 'transparent',
            hoverBackgroundColor: 'var(--spr-ui-hover, rgba(8, 40, 204, 0.05))',
            activeBackgroundColor: 'var(--spr-ui-hover, rgba(8, 40, 204, 0.05))',
            disabledBackgroundColor: 'var(--spr-interactive-disable, rgba(255, 255, 255, 0.8))'
        },
        shapeRoundBordered: { backgroundColor: 'var(--spr-ui-01, #FFFFFF)', borderColor: 'var(--spr-border-02, #ECECEF)' },
        shapeSquare: {
            borderRadius: '4px',
            color: 'var(--spr-icon-02, #646470)',
            hoverColor: 'var(--spr-icon-hover, #0A0A14)',
            activeColor: 'var(--spr-icon-04, #0828CC)',
            disabledColor: 'var(--spr-icon-disable, #D7D7DC)',
            backgroundColor: 'transparent',
            hoverBackgroundColor: 'var(--spr-ui-hover, rgba(8, 40, 204, 0.05))',
            activeBackgroundColor: 'var(--spr-ui-hover, rgba(8, 40, 204, 0.05))',
            disabledBackgroundColor: 'var(--spr-interactive-disable, rgba(255, 255, 255, 0.8))'
        },
        shapeSquareBordered: { backgroundColor: 'var(--spr-ui-01, #FFFFFF)', borderColor: 'var(--spr-border-02, #ECECEF)' }
    },
    input: {
        borderRadius: '0.4rem',
        disabledBorderColor: 'var(--spr-field, #DBDBDB)',
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
        selectedEnhancerBackground: 'var(--spr-focus-01, #0828CC)',
        hoverBackgroundColor: 'var(--spr-ui-hover, rgba(8, 40, 204, 0.05))'
    },
    tab: {
        variantDefault: {
            fontStyles: { fontSize: '1.3rem', lineHeight: '1.8rem', fontWeight: 400 },
            selectedStyles: { borderColor: 'var(--spr-focus-01, #0828CC)' },
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
        header: '#0A0A14',
        headerTab: 'rgba(255, 255, 255, 0.1)',
        headerTabHover: 'rgba(255, 255, 255, 0.2)',
        headerTabActive: '#FFFFFF',
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
        ui03: 'var(--spr-ui-03, #F2F2F4)',
        ui04: 'var(--spr-ui-04, #0828CC)',
        ui05: 'var(--spr-ui-05, #F2F2F4)',
        ui06: 'var(--spr-ui-06, #E6E6E9)',
        uiFocus: 'var(--spr-ui-focus, rgba(8, 40, 204, 0.07))',
        uiFocusReverse: 'var(--spr-ui-focus-reverse, rgba(255, 255, 255, 0.2))',
        uiHover: 'var(--spr-ui-hover, rgba(8, 40, 204, 0.05))',
        uiHoverReverse: 'var(--spr-ui-hover-reverse, rgba(255, 255, 255, 0.1))',
        supportError: 'var(--spr-support-error, #E44045)',
        supportErrorHighlight: 'var(--spr-support-error-highlight, rgba(255, 96, 96, 0.1))',
        supportSuccess: 'var(--spr-support-success, #3fbf41)',
        supportSuccessHighlight: 'var(--spr-support-success-highlight, rgba(63, 191, 65, 0.07))',
        supportWarning: 'var(--spr-support-warning, #EEC202)',
        supportWarningHighlight: 'var(--spr-support-warning-highlight, rgba(238, 194, 2, 0.1))',
        clrBlueHighlight: 'var(--spr-clr-blue-highlight, #E8F0FE)',
        tag: 'var(--spr-tag, #F2F2F4)',
        tag01: 'var(--spr-tag-01, #F2F2F4)',
        tag02: 'var(--spr-tag-02, rgba(8, 40, 204, 0.07))',
        field: 'var(--spr-field, #DBDBDB)',
        popup: 'var(--spr-popup, #FFFFFF)',
        overlay: 'var(--spr-overlay, rgba(10, 10, 20, 0.9))',
        tooltip01: 'var(--spr-tooltip-01, #0A0A14)',
        highlight: 'var(--spr-highlight, rgba(255, 231, 173, 0.7))',
        favourite: 'var(--spr-favourite, #FF9F21)',
        notification: 'var(--spr-notification, #C6202B)',
        interactive01: 'var(--spr-interactive-01, #0828CC)',
        interactiveHover: 'var(--spr-interactive-hover, #0729a0)',
        interactiveDisable: 'var(--spr-interactive-disable, rgba(255, 255, 255, 0.8))',
        interactive02: 'var(--spr-interactive-02, #646470)',
        clrBlue: 'var(--spr-clr-blue, #0AA2FF)',
        clrGreen: 'var(--spr-clr-green, #20963a)',
        clrLavender: 'var(--spr-clr-lavender, #7F36F6)',
        clrOrange: 'var(--spr-clr-orange, #F08C1A)',
        clrPink: 'var(--spr-clr-pink, #DE456B)',
        clrRed: 'var(--spr-clr-red, #E44045)',
        clrSea: 'var(--spr-clr-sea, #16AAD2)',
        clrTeal: 'var(--spr-clr-teal, #13C18D)',
        clrYellow: 'var(--spr-clr-yellow, #DEAC09)',
        clrGrey: 'var(--spr-clr-grey, #D7D7DC)',
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
        hover: 'var(--spr-hover, #0828CC)',
        focus01: 'var(--spr-focus-01, #0828CC)',
        border01: 'var(--spr-border-01, #F2F2F4)',
        border02: 'var(--spr-border-02, #ECECEF)',
        border03: 'var(--spr-border-03, #D7D7DC)',
        border04: 'var(--spr-border-04, #A0A0A8)',
        border05: 'var(--spr-border-05, #FFFFFF)',
        border06: 'var(--spr-border-06, #0A0A14)',
        cardBorder: 'var(--spr-card-border, #ECECEF)',
        popupBorder: 'var(--spr-popup-border, #D7D7DC)',
        tooltipBorder: 'var(--spr-tooltip-border, #0A0A14)',
        interactiveFocus: 'var(--spr-interactive-focus, #132a86)',
        shadow01: 'var(--spr-shadow-01, 0 1px 4px 0 rgba(10,10,20,0.15))',
        shadow02: 'var(--spr-shadow-02, 0 2px 8px 0 rgba(10,10,20,0.20))',
        shadow03: 'var(--spr-shadow-03, -2px 9px 12px 0 rgba(10,10,20,0.60))',
        shadow04: 'var(--spr-shadow-04, 0px -2px 8px 0px rgba(10,10,20,0.2))',
        shadow05: 'var(--spr-shadow-05, 0px 3px 4px 0 rgba(0,0,0,0.1))',
        shadow06: 'var(--spr-shadow-06, 0px -3px 4px 0 rgba(0,0,0,0.1))',
        icon01: 'var(--spr-icon-01, #0A0A14)',
        icon02: 'var(--spr-icon-02, #646470)',
        icon03: 'var(--spr-icon-03, #646470)',
        icon04: 'var(--spr-icon-04, #0828CC)',
        icon05: 'var(--spr-icon-05, #FFFFFF)',
        icon06: 'var(--spr-icon-06, rgba(255, 255, 255, 0.6))',
        iconHover: 'var(--spr-icon-hover, #0A0A14)',
        iconDisable: 'var(--spr-icon-disable, #D7D7DC)',
        iconHoverReverse: 'var(--spr-icon-hover-reverse, #FFFFFF)',
        iconError: 'var(--spr-icon-error, #FF6060)',
        link: 'var(--spr-link, #0828CC)',
        text01: 'var(--spr-text-01, #0A0A14)',
        text02: 'var(--spr-text-02, #434350)',
        text03: 'var(--spr-text-03, #646470)',
        text04: 'var(--spr-text-04, #0828CC)',
        text05: 'var(--spr-text-05, #FFFFFF)',
        text06: 'var(--spr-text-06, #FFFFFF)',
        textPlaceholder: 'var(--spr-text-placeholder, #646470)',
        supportErrorText: 'var(--spr-support-error-text, #C6202B)',
        supportSuccessText: 'var(--spr-support-success-text, #20963a)',
        supportWarningText: 'var(--spr-support-warning-text, #DEAC09)'
    },
    nav: {
        ui01: 'var(--nav-ui-01, rgba(255, 255, 255, 0.2))',
        uiHover01: 'var(--nav-ui-hover-01, rgba(255, 255, 255, 0.3))',
        icon01: 'var(--nav-icon-01, rgba(255, 255, 255, 0.9))',
        iconFocus01: 'var(--nav-icon-focus-01, #327AFD)',
        text01: 'var(--nav-text-01, rgba(255, 255, 255, 0.9))'
    }
};
exports["default"] = __assign(__assign({}, theme_1["default"]), theme);
