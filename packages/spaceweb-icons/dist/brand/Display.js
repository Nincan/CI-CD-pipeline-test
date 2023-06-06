"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandDisplay(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandDisplay" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.682.038H.318A.251.251 0 00.07.293v10.702c0 .14.111.255.248.255h5.196v1.722H3.783c-.137 0-.248.022-.248.05v.89c0 .028.11.05.248.05h6.434c.137 0 .248-.022.248-.05v-.89c0-.028-.11-.05-.248-.05h-1.73V11.25h5.195a.251.251 0 00.248-.255V.293a.25.25 0 00-.248-.255zM12.22 9.436c0 .1-.084.18-.187.18H1.968a.184.184 0 01-.187-.18V1.851c0-.1.084-.18.187-.18h10.064c.103 0 .187.08.187.18v7.585z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M9.37 6.569l-.932.735-2.143-3.617-2.36 4.952h6.697z" }, void 0), (0, jsx_runtime_1.jsx)("ellipse", { cx: "9.108", cy: "4.502", rx: ".757", ry: ".74" }, void 0)] }), void 0));
}
exports.default = BrandDisplay;
