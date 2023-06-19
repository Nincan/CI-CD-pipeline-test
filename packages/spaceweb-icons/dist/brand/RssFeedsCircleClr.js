"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandRssFeedsCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandRssFeedsCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#FF9A00", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.302 5.78v1.434c.931 0 1.805.363 2.462 1.024.658.66 1.02 1.54 1.02 2.477h1.433c0-2.721-2.205-4.936-4.915-4.936z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "4.255", cy: "9.754", r: "1.007" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.304 3.24v1.433c3.315 0 6.012 2.71 6.012 6.044h1.434c0-4.124-3.341-7.477-7.446-7.477z" })] }))] })));
}
exports.default = BrandRssFeedsCircleClr;
