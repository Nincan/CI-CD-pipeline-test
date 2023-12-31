"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidIncreaseCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidIncreaseCircle" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.47 4.57H8.49l-.09.03a.55.55 0 00-.38.52v.08l.03.09.03.08a.54.54 0 00.49.3h.55L7.47 7.32 6.29 6.14l-.06-.05-.1-.05a.55.55 0 00-.62.1L3.16 8.5l-.05.05-.05.1a.55.55 0 00.1.62l.06.05.08.05.1.04a.54.54 0 00.54-.14L5.9 7.31l1.18 1.18.06.05.09.05a.55.55 0 00.63-.1L9.9 6.44v.64l.03.09A.55.55 0 0011 7V5.04L10.98 5a.54.54 0 00-.15-.27.51.51 0 00-.12-.09l-.03-.02a.44.44 0 00-.05-.02h-.03l-.05-.02a.54.54 0 00-.1-.01zM7 0a7 7 0 11-7 7 7 7 0 017-7z", fillRule: "evenodd" }) })));
}
exports.default = SolidIncreaseCircle;
