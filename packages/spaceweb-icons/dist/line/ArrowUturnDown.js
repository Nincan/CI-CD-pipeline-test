"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineArrowUturnDown(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineArrowUturnDown" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.68 10.14a.6.6 0 00-.85.02l-1.63 1.72.02-6C11.22 2.7 8.68 0 5.68 0S.14 2.7.14 5.88v4.5a.6.6 0 001.2 0v-4.5c0-2.49 2.03-4.67 4.34-4.67s4.34 2.18 4.34 4.67L10 11.96l-1.81-1.81a.6.6 0 10-.85.85l2.82 2.82a.6.6 0 00.42.17.6.6 0 00.44-.18l2.68-2.82a.6.6 0 00-.02-.85z" }) })));
}
exports.default = LineArrowUturnDown;
