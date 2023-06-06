"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidInstagramLike(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidInstagramLike" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.505.769A3.547 3.547 0 017 2.544 3.781 3.781 0 0110.495.769 3.942 3.942 0 0113.99 5.08c-.102 1.391-.362 2.664-3.254 5.328-1.337 1.23-2.282 2.041-2.896 2.539a1.306 1.306 0 01-1.68 0c-.614-.498-1.56-1.308-2.896-2.54C.372 7.746.112 6.474.01 5.082A3.933 3.933 0 013.505.77z" }, void 0) }), void 0));
}
exports.default = SolidInstagramLike;
