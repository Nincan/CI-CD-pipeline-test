"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidImage(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 18 14.35", "data-icon-name": "SolidImage" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.76 2.75a1.92 1.92 0 110 3.84 1.92 1.92 0 010-3.84zm10.32-1.47H1.92a.64.64 0 00-.64.64v8.32L3.4 8.12a.64.64 0 01.9 0l2.13 2.12 5.33-5.33a.64.64 0 01.91 0l4.05 4.05V1.92a.64.64 0 00-.64-.64zm0-1.28C17.13 0 18 .86 18 1.93v10.5c0 1.05-.86 1.92-1.93 1.92H1.93A1.93 1.93 0 010 12.42V1.92C0 .87.86 0 1.93 0h14.14z" }, void 0) }), void 0));
}
exports.default = SolidImage;
