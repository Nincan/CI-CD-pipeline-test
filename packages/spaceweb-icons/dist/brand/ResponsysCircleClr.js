"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandResponsysCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 24 24", "data-icon-name": "BrandResponsysCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "12", fill: "#fd4036" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M9.525 7.333h2.756v1.718c.465-.537.859-1.253 1.539-1.575a6.128 6.128 0 011.61-.322c0 .966 0 1.933.036 2.899a3.073 3.073 0 00-2.827 1.646c-.645 1.79-.287 3.758-.394 5.619H9.489c0-3.329 0-6.657.036-9.985z" })] })));
}
exports.default = BrandResponsysCircleClr;
