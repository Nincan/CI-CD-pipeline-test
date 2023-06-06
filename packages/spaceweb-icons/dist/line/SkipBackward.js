"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineSkipBackward(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineSkipBackward" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.115 7l5.41-5.41A.93.93 0 0011.212.271l-6.07 6.07a.93.93 0 000 1.316l6.068 6.07a.931.931 0 001.316 0 .931.931 0 000-1.316zM2.103.033a.9.9 0 00-.9.9V13.1a.9.9 0 101.8 0V.933a.9.9 0 00-.9-.9z" }, void 0) }), void 0));
}
exports.default = LineSkipBackward;
