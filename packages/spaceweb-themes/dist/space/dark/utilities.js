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
var utilities_1 = require("../../common-theme/utilities");
var _a = utilities_1["default"].longhandUtils, borderRadius = _a.borderRadius, borderWidth = _a.borderWidth, margin = _a.margin, padding = _a.padding;
var utilities = {
    'typography-h1': { fontSize: '3.2rem', lineHeight: '4rem', fontWeight: '600' },
    'typography-h2': { fontSize: '2.4rem', lineHeight: '3.2rem', fontWeight: '600' },
    'typography-h3': { fontSize: '2rem', lineHeight: '2.8rem', fontWeight: '600' },
    'typography-h4': { fontSize: '1.8rem', lineHeight: '2.4rem', fontWeight: '600' },
    'typography-h5': { fontSize: '1.6rem', lineHeight: '2.2rem', fontWeight: '600' },
    'typography-h6': { fontSize: '1.4rem', lineHeight: '2rem', fontWeight: '600' },
    'typography-h7': { fontSize: '1.3rem', lineHeight: '2.2rem', fontWeight: '600' },
    'typography-b1': { fontSize: '1.3rem', lineHeight: '1.8rem', fontWeight: '600' },
    'typography-b2': { fontSize: '1.2rem', lineHeight: '1.6rem', fontWeight: '600' },
    'typography-bl1': { fontSize: '1.4rem', lineHeight: '2.2rem', fontWeight: '400' },
    'typography-bl2': { fontSize: '1.3rem', lineHeight: '2rem', fontWeight: '400' },
    'typography-bl3': { fontSize: '1.2rem', lineHeight: '2rem', fontWeight: '400' },
    'typography-bs1': { fontSize: '1.4rem', lineHeight: '2rem', fontWeight: '400' },
    'typography-bs2': { fontSize: '1.3rem', lineHeight: '2rem', fontWeight: '400' },
    'typography-bs3': { fontSize: '1.2rem', lineHeight: '2rem', fontWeight: '400' },
    'typography-l1': { fontSize: '1.3rem', lineHeight: '1.8rem', fontWeight: '400' },
    'typography-l2': { fontSize: '1.2rem', lineHeight: '1.6rem', fontWeight: '400' },
    'typography-l3': { fontSize: '1.1rem', lineHeight: '1.6rem', fontWeight: '400' },
    'typography-l4': { fontSize: '1rem', lineHeight: '1.4rem', fontWeight: '400' },
    'spr-ui-01': { backgroundColor: 'var(--spr-ui-01, #2C2C2F)' },
    'spr-ui-02': { backgroundColor: 'var(--spr-ui-02, #3A3A3E)' },
    'spr-ui-03': { backgroundColor: 'var(--spr-ui-03, #141416)' },
    'spr-ui-04': { backgroundColor: 'var(--spr-ui-04, #0AA2FF)' },
    'spr-ui-05': { backgroundColor: 'var(--spr-ui-05, #48484C)' },
    'spr-ui-06': { backgroundColor: 'var(--spr-ui-06, #212123)' },
    'spr-ui-focus': { backgroundColor: 'var(--spr-ui-focus, rgba(255, 255, 255, 0.12))' },
    'spr-ui-focus-reverse': { backgroundColor: 'var(--spr-ui-focus-reverse, rgba(255, 255, 255, 0.2))' },
    'spr-ui-hover': { backgroundColor: 'var(--spr-ui-hover, rgba(255, 255, 255, 0.07))' },
    'spr-ui-hover-reverse': { backgroundColor: 'var(--spr-ui-hover-reverse, rgba(255, 255, 255, 0.1))' },
    'spr-support-error': { backgroundColor: 'var(--spr-support-error, #C6202B)' },
    'spr-support-error-highlight': { backgroundColor: 'var(--spr-support-error-highlight, rgba(228, 64, 69, 0.15))' },
    'spr-support-success': { backgroundColor: 'var(--spr-support-success, #20963a)' },
    'spr-support-success-highlight': { backgroundColor: 'var(--spr-support-success-highlight, rgba(32, 150, 58, 0.15))' },
    'spr-support-warning': { backgroundColor: 'var(--spr-support-warning, #DEAC09)' },
    'spr-support-warning-highlight': { backgroundColor: 'var(--spr-support-warning-highlight, rgba(222, 172, 9, 0.12))' },
    'spr-clr-blue-highlight': { backgroundColor: 'var(--spr-clr-blue-highlight, #2B3343)' },
    'spr-tag': { backgroundColor: 'var(--spr-tag, #48484C)' },
    'spr-tag-01': { backgroundColor: 'var(--spr-tag-01, #48484C)' },
    'spr-tag-02': { backgroundColor: 'var(--spr-tag-02, rgba(255, 255, 255, 0.1))' },
    'spr-field': { backgroundColor: 'var(--spr-field, #48484C)' },
    'spr-popup': { backgroundColor: 'var(--spr-popup, #2C2C2F)' },
    'spr-overlay': { backgroundColor: 'var(--spr-overlay, rgba(28, 28, 31, 0.8))' },
    'spr-tooltip-01': { backgroundColor: 'var(--spr-tooltip-01, rgba(255, 255, 255, 0.9))' },
    'spr-highlight': { backgroundColor: 'var(--spr-highlight, rgba(184, 144, 0, 0.6))' },
    'spr-favourite': { backgroundColor: 'var(--spr-favourite, #FF9F21)' },
    'spr-notification': { backgroundColor: 'var(--spr-notification, #C6202B)' },
    'spr-interactive-01': { backgroundColor: 'var(--spr-interactive-01, #0AA2FF)' },
    'spr-interactive-hover': { backgroundColor: 'var(--spr-interactive-hover, #0A83D0)' },
    'spr-interactive-disable': { backgroundColor: 'var(--spr-interactive-disable, rgba(44, 44, 47, 0.6))' },
    'spr-interactive-02': { backgroundColor: 'var(--spr-interactive-02, #AEAEB2)' },
    'spr-clr-blue': { backgroundColor: 'var(--spr-clr-blue, #006CD7)' },
    'spr-clr-green': { backgroundColor: 'var(--spr-clr-green, #3fbf41)' },
    'spr-clr-lavender': { backgroundColor: 'var(--spr-clr-lavender, #9C60FF)' },
    'spr-clr-orange': { backgroundColor: 'var(--spr-clr-orange, #FF9F21)' },
    'spr-clr-pink': { backgroundColor: 'var(--spr-clr-pink, #FF668F)' },
    'spr-clr-red': { backgroundColor: 'var(--spr-clr-red, #ff6060)' },
    'spr-clr-sea': { backgroundColor: 'var(--spr-clr-sea, #00C8FF)' },
    'spr-clr-teal': { backgroundColor: 'var(--spr-clr-teal, #02D999)' },
    'spr-clr-yellow': { backgroundColor: 'var(--spr-clr-yellow, #EEC202)' },
    'spr-clr-grey': { backgroundColor: 'var(--spr-clr-grey, #646469)' },
    'spr-clr-purple': { backgroundColor: 'var(--spr-clr-purple, #763BD2)' },
    'spr-clr-lt-yellow': { backgroundColor: 'var(--spr-clr-lt-yellow, #846F35)' },
    'spr-clr-darker-blue': { backgroundColor: 'var(--spr-clr-darker-blue, #327AFD)' },
    'spr-secondary-yellow': { backgroundColor: 'var(--spr-secondary-yellow, #8D6F18)' },
    'spr-secondary-green': { backgroundColor: 'var(--spr-secondary-green, #5F732C)' },
    'spr-secondary-teal': { backgroundColor: 'var(--spr-secondary-teal, #168380)' },
    'spr-secondary-lt-pink': { backgroundColor: 'var(--spr-secondary-lt-pink, #956787)' },
    'spr-secondary-pink': { backgroundColor: 'var(--spr-secondary-pink, #B94055)' },
    'spr-secondary-maroon': { backgroundColor: 'var(--spr-secondary-maroon, #962F61)' },
    'spr-secondary-orange': { backgroundColor: 'var(--spr-secondary-orange, #A8623A)' },
    'spr-hover': { borderColor: 'var(--spr-hover, #0AA2FF)' },
    'spr-focus-01': { borderColor: 'var(--spr-focus-01, #0AA2FF)' },
    'spr-border-01': { borderColor: 'var(--spr-border-01, #3A3A3E)' },
    'spr-border-02': { borderColor: 'var(--spr-border-02, #48484C)' },
    'spr-border-03': { borderColor: 'var(--spr-border-03, #48484C)' },
    'spr-border-04': { borderColor: 'var(--spr-border-04, #646469)' },
    'spr-border-05': { borderColor: 'var(--spr-border-05, #2C2C2F)' },
    'spr-border-06': { borderColor: 'var(--spr-border-06, #F1F1F1)' },
    'spr-card-border': { borderColor: 'var(--spr-card-border, #3A3A3E)' },
    'spr-popup-border': { borderColor: 'var(--spr-popup-border, #1C1C1F)' },
    'spr-tooltip-border': { borderColor: 'var(--spr-tooltip-border, rgba(174, 174, 178, 0.2))' },
    'spr-interactive-focus': { borderColor: 'var(--spr-interactive-focus, #0A65A1)' },
    'spr-shadow-01': { boxShadow: 'var(--spr-shadow-01, 0 1px 4px 0 rgba(10,10,20,0.3))' },
    'spr-shadow-02': { boxShadow: 'var(--spr-shadow-02, 0 4px 10px 0 rgb(20,20,22))' },
    'spr-shadow-03': { boxShadow: 'var(--spr-shadow-03, -2px 5px 12px 0 rgba(10,10,20,0.80))' },
    'spr-shadow-04': { boxShadow: 'var(--spr-shadow-04, 0 -4px 10px 0px rgb(20,20,22))' },
    'spr-shadow-05': { boxShadow: 'var(--spr-shadow-05, 0px 3px 4px 0 rgba(0,0,0,0.2))' },
    'spr-shadow-06': { boxShadow: 'var(--spr-shadow-06, 0px -3px 4px 0 rgba(0,0,0,0.2))' },
    'spr-icon-01': { fill: 'var(--spr-icon-01, #FFFFFF)' },
    'spr-icon-02': { fill: 'var(--spr-icon-02, #AEAEB2)' },
    'spr-icon-03': { fill: 'var(--spr-icon-03, #AEAEB2)' },
    'spr-icon-04': { fill: 'var(--spr-icon-04, #0AA2FF)' },
    'spr-icon-05': { fill: 'var(--spr-icon-05, #FFFFFF)' },
    'spr-icon-06': { fill: 'var(--spr-icon-06, rgba(255, 255, 255, 0.6))' },
    'spr-icon-error': { fill: 'var(--spr-icon-error, #FF6060)' },
    'spr-icon-hover': { fill: 'var(--spr-icon-hover, #FFFFFF)' },
    'spr-icon-disable': { fill: 'var(--spr-icon-disable, #646469)' },
    'spr-icon-hover-reverse': { fill: 'var(--spr-icon-hover-reverse, #FFFFFF)' },
    'spr-link': { color: 'var(--spr-link, #0AA2FF)' },
    'spr-text-01': { color: 'var(--spr-text-01, #FFFFFF)' },
    'spr-text-02': { color: 'var(--spr-text-02, #AEAEB2)' },
    'spr-text-03': { color: 'var(--spr-text-03, #646469)' },
    'spr-text-04': { color: 'var(--spr-text-04, #0AA2FF)' },
    'spr-text-05': { color: 'var(--spr-text-05, #FFFFFF)' },
    'spr-text-06': { color: 'var(--spr-text-06, #2C2C2F)' },
    'spr-text-placeholder': { color: 'var(--spr-text-placeholder, #646469)' },
    'spr-support-error-text': { color: 'var(--spr-support-error-text, #E44045)' },
    'spr-support-success-text': { color: 'var(--spr-support-success-text, #3fbf41)' },
    'spr-support-warning-text': { color: 'var(--spr-support-warning-text, #EEC202)' },
    'nav-ui-01': { backgroundColor: 'var(--nav-ui-01, rgba(44, 44, 47, 0.7))' },
    'nav-ui-hover-01': { backgroundColor: 'var(--nav-ui-hover-01, rgba(44, 44, 47, 0.9))' },
    'nav-icon-01': { fill: 'var(--nav-icon-01, rgba(255, 255, 255, 0.6))' },
    'nav-icon-focus-01': { fill: 'var(--nav-icon-focus-01, #2E6BD9)' },
    'nav-text-01': { color: 'var(--nav-text-01, rgba(255, 255, 255, 0.6))' },
    'outline-01': { outlineStyle: 'solid', outlineWidth: '2px', outlineColor: '#0AA2FF', outlineOffset: '2px' }
};
exports["default"] = __assign(__assign({}, utilities_1["default"].utilities), utilities);