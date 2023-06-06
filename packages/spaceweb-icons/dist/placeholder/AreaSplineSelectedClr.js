"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderAreaSplineSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 42 28", "data-icon-name": "PlaceholderAreaSplineSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M2.59 3.04s.68 10.91 9.55 10.91c8.86 0 6.77-6.13 14.31-6.13 7.55 0 12.96 12.95 12.96 12.95v6.82H2.59V3.05z", opacity: ".5" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M39.07 18.23l-.15.01C37.33 14.8 33.8 8.7 28.32 7.52v-.04a2.2 2.2 0 10-4.41 0v.06c-2.56.5-3.7 1.74-4.83 2.97-1.06 1.16-2.09 2.28-4.44 2.73a2.2 2.2 0 00-2.16-1.83 2.2 2.2 0 00-2.17 1.86c-4.76-.98-6.4-5.72-6.95-8.4A2.2 2.2 0 10.73 2.7a2.2 2.2 0 001.62 2.12c.59 2.9 2.44 8.51 8.04 9.49a2.2 2.2 0 002.09 1.5 2.2 2.2 0 002.1-1.54c2.84-.47 4.06-1.8 5.24-3.09 1.05-1.15 2.06-2.24 4.36-2.67a2.2 2.2 0 001.93 1.17 2.2 2.2 0 001.95-1.19c4.98 1.05 8.32 6.75 9.88 10.06a2.2 2.2 0 00-1.08 1.88 2.2 2.2 0 102.2-2.2z" }, void 0)] }), void 0));
}
exports.default = PlaceholderAreaSplineSelectedClr;
