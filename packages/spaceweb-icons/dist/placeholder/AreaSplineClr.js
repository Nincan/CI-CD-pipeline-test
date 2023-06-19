"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderAreaSplineClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 42 28", "data-icon-name": "PlaceholderAreaSplineClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M2.59 3.05s.68 10.91 9.55 10.91 6.77-6.14 14.32-6.14 12.95 12.95 12.95 12.95v6.82H2.59V3.05z" }), (0, jsx_runtime_1.jsx)("path", { d: "M39.07 18.23c-.05 0-.1.01-.15.02-1.58-3.45-5.11-9.56-10.6-10.72v-.04c0-1.22-.99-2.2-2.21-2.2s-2.2.99-2.2 2.2c0 .02.01.04.01.06-2.56.49-3.71 1.74-4.83 2.97-1.07 1.17-2.09 2.28-4.44 2.73a2.203 2.203 0 00-2.17-1.83c-1.1 0-2 .81-2.17 1.86-4.76-.98-6.4-5.72-6.95-8.4A2.2 2.2 0 002.94.52c-1.21 0-2.2.99-2.2 2.2 0 1.01.69 1.86 1.62 2.12.59 2.91 2.44 8.51 8.04 9.48a2.184 2.184 0 004.17-.04c2.85-.47 4.07-1.8 5.25-3.09 1.05-1.15 2.06-2.24 4.36-2.67.37.69 1.09 1.17 1.94 1.17.85 0 1.58-.49 1.95-1.19 4.98 1.05 8.32 6.75 9.88 10.06-.64.39-1.07 1.08-1.07 1.88 0 1.22.99 2.21 2.21 2.21s2.2-.99 2.2-2.21-1.01-2.21-2.22-2.21z" })] })));
}
exports.default = PlaceholderAreaSplineClr;
