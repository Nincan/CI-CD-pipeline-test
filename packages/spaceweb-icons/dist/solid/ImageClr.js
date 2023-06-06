"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidImageClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 52 37", "data-icon-name": "SolidImageClr" }, props, { children: [(0, jsx_runtime_1.jsxs)("linearGradient", (0, tslib_1.__assign)({ id: "image_clr__a", gradientUnits: "userSpaceOnUse", x1: "26", y1: "-86.3", x2: "26", y2: "70.3" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0", stopColor: "#a8cffc" }, void 0), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#f1f6fd" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("path", { fill: "url(#image_clr__a)", d: "M44 0H8a8 8 0 00-8 8v21a8 8 0 008 8h36a8 8 0 008-8V8a8 8 0 00-8-8z" }, void 0), (0, jsx_runtime_1.jsxs)("linearGradient", (0, tslib_1.__assign)({ id: "image_clr__b", gradientUnits: "userSpaceOnUse", x1: "26", y1: "7.9", x2: "26", y2: "48" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0", stopColor: "#0778fc" }, void 0), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#3f9dfc" }, void 0)] }), void 0), (0, jsx_runtime_1.jsx)("path", { fill: "url(#image_clr__b)", d: "M40.1 25l10.2 9.5a8 8 0 01-5.7 2.5h-36a8 8 0 01-7-4l17.8-16.7c.7-.6 1.7-.6 2.3.1l11.2 13.3 5-4.8c.7-.5 1.6-.5 2.2 0zM36 7.8c-2.6 0-4.6 2-4.6 4.3 0 2.5 2 4.4 4.6 4.4s4.6-2 4.6-4.4c0-2.4-2-4.3-4.6-4.3z" }, void 0)] }), void 0));
}
exports.default = SolidImageClr;
