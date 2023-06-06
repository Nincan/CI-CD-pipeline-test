"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderLanguageClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 33 29", "data-icon-name": "PlaceholderLanguageClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M11.25 4.1h10.39a1.12 1.12 0 110 2.24h-3.18c-.05 4.02-2.12 7.58-5.61 10.67a11.31 11.31 0 005.66 2.2 1.12 1.12 0 11-.18 2.24 13.65 13.65 0 01-7.28-2.98 34.5 34.5 0 01-4.83 3 32.55 32.55 0 01-2.26 1.05 1.13 1.13 0 01-1.46-.63c-.23-.58.06-1.23.63-1.46l.55-.23a32.86 32.86 0 005.66-3.26A17 17 0 014.67 6.35H2C.5 6.35.5 4.1 2 4.1h7V2a1.12 1.12 0 112.24 0v2.1zM6.92 6.35c.26 3.6 1.89 6.85 4.2 9.18 3.5-3.02 5.38-6.44 5.05-10.21l1.12 1.03H6.92z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M27.21 21.71l-8.4-.06-2.69 6.37a1.12 1.12 0 01-2.07-.87l7.82-18.56a1.13 1.13 0 012.07-.01l8.08 18.56a1.12 1.12 0 11-2.06.9l-2.75-6.33zm-.98-2.26l-3.3-7.57-3.17 7.53 6.47.04z" }, void 0)] }), void 0));
}
exports.default = PlaceholderLanguageClr;
