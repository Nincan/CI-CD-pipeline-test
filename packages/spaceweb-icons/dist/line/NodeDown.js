"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineNodeDown(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineNodeDown" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.8 9.86a.6.6 0 00-.86-.06l-1.05.92V4.76a.61.61 0 00-.61-.62H7.46l-.09.02c-.03-.13-.05-.25-.1-.39a3.7 3.7 0 10.19 1.6h3.2v5.35L9.62 9.8a.6.6 0 00-.86.06.6.6 0 00.06.86l2.07 1.8a.6.6 0 00.8 0l2.07-1.8a.6.6 0 00.2-.42.6.6 0 00-.14-.44zM6.13 5.9a2.5 2.5 0 11-2.32-3.4 2.5 2.5 0 012.34 1.67 2.48 2.48 0 01-.02 1.74z" }) })));
}
exports.default = LineNodeDown;
