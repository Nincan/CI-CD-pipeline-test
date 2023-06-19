"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSentimentGreyHappyClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSentimentGreyHappyClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#b3b3b3", d: "M7 14a7 7 0 10-7-7 7 7 0 007 7z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.5 8.1a5 5 0 01-7 0 .3.3 0 00-.4.4 5.5 5.5 0 007.8 0 .3.3 0 10-.4-.4zM3.9 6.4a1 1 0 10-1-1 1 1 0 001 1zm6.2 0a1 1 0 10-1-1 1 1 0 001 1z" })] })));
}
exports.default = SolidSentimentGreyHappyClr;
