"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandRenrenCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandRenrenCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#0B60AA", cx: "6.996", cy: "7", r: "7" }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M8.744 7.496S8.297 8.642 7.59 8.937c.336.2.728.313 1.147.313.4 0 .778-.104 1.104-.288-.095-.06-.928-.593-1.097-1.466zm.345-2.731v1.804s.215 1.128 1.402 1.847a2.258 2.258 0 00-1.402-3.65zm-.718 1.788L8.364 4.77A2.257 2.257 0 007 5.55c.32.389.51.886.51 1.428a2.25 2.25 0 01-.521 1.443l.002.004c.078-.046 1.322-.815 1.38-1.873zm-3.088.936s-.451 1.15-1.162 1.443c.333.194.72.304 1.133.304.4 0 .775-.104 1.1-.287-.068-.043-.9-.574-1.071-1.46z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.001 5.55a2.249 2.249 0 00-1.374-.797V6.56s.165 1.149 1.358 1.866h.001l.004-.004a2.24 2.24 0 01-.511-1.427c0-.55.196-1.053.522-1.444zm-2.091.996L4.901 4.75a2.256 2.256 0 00-1.345 3.718c.11-.073 1.295-.884 1.352-1.922z" })] }))] })));
}
exports.default = BrandRenrenCircleClr;
