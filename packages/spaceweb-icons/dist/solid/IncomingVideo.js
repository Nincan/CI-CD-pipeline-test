"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidIncomingVideo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidIncomingVideo" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "m12.67 4.044-1.781 1.79V3.11a.78.78 0 0 0-.778-.778H.778A.78.78 0 0 0 0 3.111v7.778a.78.78 0 0 0 .778.778h9.333a.78.78 0 0 0 .778-.778V8.167l1.781 1.78A.78.78 0 0 0 14 9.397v-4.8a.78.78 0 0 0-1.33-.552ZM7.885 5.452 5.502 7.875l.652.643.006.01h.001a.644.644 0 0 1-.448 1.102l-2.225.014a.644.644 0 0 1-.647-.638L2.83 6.783V6.77a.648.648 0 0 1 .65-.645.635.635 0 0 1 .443.185c.012.012.017.029.028.041.008.007.018.01.026.017l.61.603L6.971 4.55l.003-.003a.642.642 0 0 1 .911.906Z" }) })));
}
exports.default = SolidIncomingVideo;
