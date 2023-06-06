"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidLoop(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidLoop" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.51 10.73a5.22 5.22 0 003.71 1.534l-.002 1.391a.328.328 0 00.561.228l1.992-1.988a.325.325 0 000-.464L7.783 9.44a.325.325 0 00-.557.231l-.001 1.28a3.919 3.919 0 01-3.702-5.248.623.623 0 00-.13-.66L3.31 4.96a.61.61 0 00-1.002.231 5.254 5.254 0 001.202 5.54zM6.667.162L4.676 2.15a.325.325 0 000 .464l1.988 1.992a.325.325 0 00.556-.232l.001-1.28a3.919 3.919 0 013.703 5.249.623.623 0 00.129.658l.083.084a.61.61 0 001.003-.231A5.237 5.237 0 007.227 1.78L7.228.39a.328.328 0 00-.561-.228z" }, void 0) }), void 0));
}
exports.default = SolidLoop;
