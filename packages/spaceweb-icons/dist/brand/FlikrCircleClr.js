"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use brand/FlickrCircleClr.svg instead.
 */
function BrandFlikrCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandFlikrCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#0E66D8", cx: "7", cy: "6.996", r: "7" }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fillRule: "evenodd", clipRule: "evenodd", fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "5.003", cy: "7.003", r: "1.753" }), (0, jsx_runtime_1.jsx)("circle", { cx: "8.997", cy: "6.997", r: "1.753" })] }))] })));
}
exports.default = BrandFlikrCircleClr;
