"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineSkipForward(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineSkipForward" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.79.272a.931.931 0 00-1.317 0 .931.931 0 00.001 1.316L6.884 7l-5.41 5.41a.93.93 0 001.314 1.319v-.001l6.07-6.07a.931.931 0 000-1.316zM11.898 0a.9.9 0 00-.9.9v12.167a.9.9 0 101.8 0V.9a.9.9 0 00-.9-.9z" }) })));
}
exports.default = LineSkipForward;
