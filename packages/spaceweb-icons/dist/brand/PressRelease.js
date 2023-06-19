"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandPressRelease(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandPressRelease" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.476.603a2.06 2.06 0 0 0-.593 1.245l2.267 2.267A2.064 2.064 0 1 0 10.476.602Zm-.305 6.813a.502.502 0 0 1-.707 0L6.538 4.49a.502.502 0 0 1 0-.707l2.018-2.018a.502.502 0 0 1 .707 0L12.19 4.69a.502.502 0 0 1 0 .707l-2.018 2.018ZM.001 12.638l7.106-7.107 1.364 1.364-7.107 7.107Z" }) })));
}
exports.default = BrandPressRelease;
