"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderCombinationSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 34 31", "data-icon-name": "PlaceholderCombinationSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M2 23h6v8H2zm8-8h6v16h-6zm8 5h6v11h-6zm8-3h6v14h-6z", fill: "#CBD756" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M30.88.5a2.38 2.38 0 00-2.38 2.38c0 .67.29 1.28.74 1.72l-6.9 7.4a2.35 2.35 0 00-1.45-.5 2.36 2.36 0 00-1.82.86L12.9 8.09c.22-.35.35-.77.35-1.21a2.38 2.38 0 10-4.75 0c0 .74.35 1.39.88 1.83l-4.96 5.37a2.35 2.35 0 00-1.54-.58 2.38 2.38 0 102.37 2.38c0-.36-.08-.69-.22-.99l5.28-5.72a2.36 2.36 0 001.91-.34l6.37 4.42a2.35 2.35 0 00-.09.63 2.38 2.38 0 004.75 0c0-.4-.1-.77-.28-1.1l7.16-7.66c.23.08.48.13.75.13a2.38 2.38 0 000-4.75z" }, void 0)] }), void 0));
}
exports.default = PlaceholderCombinationSelectedClr;
