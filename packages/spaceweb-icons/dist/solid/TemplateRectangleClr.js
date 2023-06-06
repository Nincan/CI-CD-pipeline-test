"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTemplateRectangleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTemplateRectangleClr" }, props, { children: [(0, jsx_runtime_1.jsxs)("defs", { children: [(0, jsx_runtime_1.jsxs)("linearGradient", (0, tslib_1.__assign)({ id: "lineTemplatesRectangle__a", x1: "7", y1: "13.87", x2: "7", y2: "4.01", gradientTransform: "matrix(1 0 0 -1 0 16)", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: "0", stopColor: "#f1f7fe" }, void 0), (0, jsx_runtime_1.jsx)("stop", { offset: "1", stopColor: "#a6c9ff" }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)("linearGradient", (0, tslib_1.__assign)({ id: "b", x1: "8.56", y1: "11.49", x2: "5.12", y2: "6.43", gradientTransform: "matrix(1 0 0 -1 0 16)", gradientUnits: "userSpaceOnUse" }, { children: [(0, jsx_runtime_1.jsx)("stop", { offset: ".08", stopColor: "#4eaffc" }, void 0), (0, jsx_runtime_1.jsx)("stop", { offset: ".87", stopColor: "#0d63ff" }, void 0)] }), void 0)] }, void 0), (0, jsx_runtime_1.jsx)("rect", { y: "2.13", width: "14", height: "9.86", rx: "2.55", fill: "url(#lineTemplatesRectangle__a)" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M4.7 4.67h.61a.1.1 0 01.1.1V9.3a.1.1 0 01-.1.1H4.7a.22.22 0 01-.24-.24V4.91a.22.22 0 01.24-.24zM9.12 6.1H5.98a.1.1 0 01-.1-.1V4.78a.1.1 0 01.1-.1h3a.22.22 0 01.25.24V6a.1.1 0 01-.1.1zm-3.15.48h1.24a.1.1 0 01.1.1V9.3a.1.1 0 01-.1.1H5.98a.1.1 0 01-.1-.1V6.66a.1.1 0 01.1-.1zm1.82.1V9.3a.1.1 0 00.1.1h1.09a.22.22 0 00.24-.24v-2.5a.1.1 0 00-.1-.1H7.9a.1.1 0 00-.1.1z", fillRule: "evenodd", fill: "url(#b)" }, void 0)] }), void 0));
}
exports.default = SolidTemplateRectangleClr;
