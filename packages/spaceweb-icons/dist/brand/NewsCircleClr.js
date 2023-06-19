"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandNewsCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandNewsCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "7", fill: "#40a3f5" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.604 8.161h4.703v.753H4.603zm.024-2.869H7.12v2.187H4.628zm3.222 0h1.435v.706H7.849zm0 1.106h1.458V7.48H7.85z", fill: "#fff" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.72 10.28V3.926H7.696L8.85 2.773l-.532-.532L7 3.557 5.683 2.241l-.532.532 1.153 1.153H3.28v6.354h3.3v.727H5.31v.752H8.6v-.753H7.33v-.726zM3.95 4.595h6.104V9.61H3.947V4.595z", fill: "#fff" })] })));
}
exports.default = BrandNewsCircleClr;
