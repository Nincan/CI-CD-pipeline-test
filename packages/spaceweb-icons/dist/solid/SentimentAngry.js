"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSentimentAngry(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSentimentAngry" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zM3.27 4a.5.5 0 01.62-.33l1.44.41a.5.5 0 01-.28.96l-1.43-.41A.5.5 0 013.27 4zm.21 2.49a1 1 0 111 .99 1 1 0 01-1-1zm5.98 3.82a.5.5 0 01-.7.1 3 3 0 00-1.86-.6 2.94 2.94 0 00-1.63.57.5.5 0 01-.59-.81 3.97 3.97 0 012.19-.76 4.03 4.03 0 012.5.8.5.5 0 01.1.7zm.07-2.83a1 1 0 11.99-1 1 1 0 01-1 1zm.85-2.84l-1.43.41a.5.5 0 01-.28-.96l1.44-.41a.5.5 0 01.27.96z" }) })));
}
exports.default = SolidSentimentAngry;
