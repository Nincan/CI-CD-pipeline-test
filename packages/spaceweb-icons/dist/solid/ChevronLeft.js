"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidChevronLeft(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidChevronLeft" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.693 13.728a.931.931 0 00-.001-1.316L5.282 7l5.41-5.41A.93.93 0 009.379.271h-.001l-6.07 6.07a.931.931 0 000 1.316l6.069 6.07a.931.931 0 001.316 0z" }) })));
}
exports.default = SolidChevronLeft;
