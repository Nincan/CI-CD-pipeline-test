"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSentimentGreySadClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSentimentGreySadClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#b3b3b3", d: "M7 14a7 7 0 10-7-7 7 7 0 007 7z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.7 3.98A2.48 2.48 0 002.62 5.3a.26.26 0 00.45.24A1.96 1.96 0 014.72 4.5a.26.26 0 10-.02-.52zm4.6 0a.26.26 0 10-.02.52 1.96 1.96 0 011.65 1.04.26.26 0 10.45-.24A2.48 2.48 0 009.3 3.98zm-.64 4.8a3.48 3.48 0 00-3.32 0 .26.26 0 00.27.44 3 3 0 012.78 0 .26.26 0 00.27-.44zM3.9 7.43a.96.96 0 10-.96-.96.96.96 0 00.96.96zm6.2 0a.96.96 0 10-.96-.96.96.96 0 00.96.96z" })] })));
}
exports.default = SolidSentimentGreySadClr;
