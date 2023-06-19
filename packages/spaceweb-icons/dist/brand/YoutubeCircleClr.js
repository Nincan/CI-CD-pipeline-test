"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandYoutubeCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandYoutubeCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { width: "14", height: "14", rx: "7", fill: "red" }), (0, jsx_runtime_1.jsx)("path", { d: "M11.656 4.661a1.217 1.217 0 00-.86-.86A29.04 29.04 0 007 3.6a29.04 29.04 0 00-3.797.203 1.217 1.217 0 00-.859.859A12.646 12.646 0 002.141 7a12.646 12.646 0 00.203 2.339 1.217 1.217 0 00.86.86A29.04 29.04 0 007 10.4a29.04 29.04 0 003.797-.203 1.217 1.217 0 00.859-.859A12.646 12.646 0 0011.859 7a12.646 12.646 0 00-.203-2.339zM6.028 8.458V5.542L8.553 7z", fill: "#fff" })] })));
}
exports.default = BrandYoutubeCircleClr;
