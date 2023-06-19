"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidStarHalf(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidStarHalf" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.256 4.787l-3.959-.343L7.751.804a.818.818 0 00-1.505 0L4.7 4.452l-3.95.335A.816.816 0 00.284 6.22l3.001 2.6-.9 3.861a.816.816 0 001.22.883l3.394-2.044 3.394 2.053a.816.816 0 001.219-.884l-.9-3.868 3.002-2.601a.814.814 0 00-.458-1.432zM6.999 9.99V2.383l1.398 3.304 3.583.31-2.716 2.356.818 3.501z" }) })));
}
exports.default = SolidStarHalf;
