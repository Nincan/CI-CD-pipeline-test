"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderCombinationClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 34 31", "data-icon-name": "PlaceholderCombinationClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10 15h6v16h-6zm16 2h6v14h-6z", opacity: ".5" }), (0, jsx_runtime_1.jsx)("path", { d: "M2 23h6v8H2zm16-3h6v11h-6zM30.88.5a2.39 2.39 0 00-2.38 2.38c0 .68.29 1.29.75 1.72l-6.92 7.41a2.35 2.35 0 00-3.26.35L12.9 8.09c.22-.36.35-.77.35-1.22 0-1.31-1.07-2.38-2.38-2.38S8.5 5.57 8.5 6.88c0 .74.35 1.39.88 1.83l-4.96 5.38A2.36 2.36 0 00.5 15.88a2.39 2.39 0 004.76 0c0-.35-.08-.68-.22-.98l5.27-5.72a2.3 2.3 0 001.91-.34l6.38 4.42a2.39 2.39 0 104.67.63c0-.4-.11-.76-.28-1.09l7.15-7.67a2.39 2.39 0 003.13-2.25A2.4 2.4 0 0030.88.5z" })] })));
}
exports.default = PlaceholderCombinationClr;
