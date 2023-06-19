"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidCarousel(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 18.36 12.39", "data-icon-name": "SolidCarousel" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M15.08 1.7v8.98c0 .94-.78 1.7-1.75 1.7h-8.3c-.97 0-1.75-.76-1.75-1.7V1.7C3.28.77 4.06 0 5.03 0h8.3c.97 0 1.75.77 1.75 1.7zm1.57.34v8.3c.94 0 1.71-.76 1.71-1.7V3.74c0-.94-.77-1.7-1.7-1.7zM0 3.75v4.88c0 .95.77 1.71 1.7 1.71v-8.3c-.93 0-1.7.77-1.7 1.71z" }) })));
}
exports.default = SolidCarousel;
