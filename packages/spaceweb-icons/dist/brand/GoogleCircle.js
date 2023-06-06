"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandGoogleCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandGoogleCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.01 0a7 7 0 107 7 7 7 0 00-7-7zm2.746 10.053a3.882 3.882 0 01-2.654 1.014 4.06 4.06 0 01-3.654-2.265v-.003l-.001.002A4.066 4.066 0 013.03 7v-.017A4.067 4.067 0 019.788 3.95L8.603 5.133a2.358 2.358 0 00-1.5-.536 2.403 2.403 0 00-2.286 3.155l-.005.004h.006a2.4 2.4 0 002.285 1.647 2.52 2.52 0 001.353-.356 1.832 1.832 0 00.832-1.215H7.103V6.26h3.794a3.352 3.352 0 01.093.74 4.042 4.042 0 01-1.234 3.053z" }, void 0) }), void 0));
}
exports.default = BrandGoogleCircle;
