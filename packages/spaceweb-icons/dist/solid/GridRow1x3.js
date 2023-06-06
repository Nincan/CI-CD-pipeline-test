"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidGridRow1x3(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidGridRow1x3" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.409 4.429H.575a.5.5 0 00-.5.5l.004.015V9.28a.5.5 0 00.5.5h12.83a.5.5 0 00.5-.5V4.929a.5.5 0 00-.5-.5zm-4.61 1v3.35H5.277V5.43zm-7.72 0h3.199v3.35h-3.2zm8.72 3.35V5.43h3.11v3.35z" }, void 0) }), void 0));
}
exports.default = SolidGridRow1x3;
