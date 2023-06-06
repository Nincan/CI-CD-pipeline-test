"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidVoiceRecording(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidVoiceRecording" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.735 6.092a.908.908 0 10.909.908.91.91 0 00-.909-.908zM4.269 6.09a.909.909 0 10.909.91.91.91 0 00-.91-.91z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M12.063 0H1.937a1.5 1.5 0 00-1.5 1.5v11a1.5 1.5 0 001.5 1.5h10.126a1.5 1.5 0 001.5-1.5v-11a1.5 1.5 0 00-1.5-1.5zm-.883 8.443a2.029 2.029 0 01-1.445.601l-5.29.001H4.27a2.061 2.061 0 111.826-1.137H7.91a2.04 2.04 0 113.271.535z" }, void 0)] }), void 0));
}
exports.default = SolidVoiceRecording;
