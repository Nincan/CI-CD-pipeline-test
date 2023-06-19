"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDismissAlarm(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDismissAlarm" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M1.43 3.078l2.16-1.8A.704.704 0 102.7.188l-2.169 1.8a.713.713 0 00-.09 1 .7.7 0 00.99.09zm12.039-1.09l-2.16-1.8a.71.71 0 10-.91 1.09l2.16 1.8a.71.71 0 10.91-1.09zM7 1.278a6.35 6.35 0 106.35 6.349A6.345 6.345 0 007 1.277zm2.587 7.945a.7.7 0 01-.99.99L7 8.617l-1.596 1.596a.7.7 0 01-.99-.99L6.01 7.627 4.414 6.031a.7.7 0 01.99-.99L7 6.637 8.597 5.04a.7.7 0 01.99.99L7.99 7.627z" }) })));
}
exports.default = SolidDismissAlarm;
