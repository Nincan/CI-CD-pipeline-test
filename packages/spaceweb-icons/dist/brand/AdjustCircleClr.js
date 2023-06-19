"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandAdjustCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 24 24", "data-icon-name": "BrandAdjustCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "12", cy: "12", r: "12", fill: "#00b4d2" }), (0, jsx_runtime_1.jsx)("path", { d: "M7.957 15.998h1.539l.627-1.426-.656-1.482-.755 1.682s-4.247-5.359 1.026-2.48a35.617 35.617 0 0 1 3.207 1.938c.969.656 4.147 3.05 4.147 3.05l1.04-1.069-4.246-9.491h-1.597l-1.881 4.39s-4.65-2.614-4.539 1.061c.228 1.356.6 2.161 2.088 3.827z", fill: "#fff" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.745 11.92s4.245 2.816 4.46 3.018c-.161-.39-2.924-6.495-2.924-6.495z", fill: "#00b4d2" })] })));
}
exports.default = BrandAdjustCircleClr;
