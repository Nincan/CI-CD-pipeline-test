"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidVoiceCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidVoiceCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zM4.24 8.6a.32.32 0 01-.64 0V5.4a.32.32 0 01.64 0zm1.54 1.3a.32.32 0 01-.64 0V4.1a.32.32 0 01.64 0zm1.54-.64a.32.32 0 01-.64 0v-4.5A.32.32 0 017 4.43a.32.32 0 01.32.32zm1.54.64a.32.32 0 01-.64 0V4.1a.32.32 0 01.64 0zm1.54-1.3a.32.32 0 01-.64 0V5.4a.32.32 0 01.64 0z" }) })));
}
exports.default = SolidVoiceCircle;
