"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSplit(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSplit" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: (0, jsx_runtime_1.jsx)("path", { d: "M9.494.744l1.26 1.26-2.52 2.52 1.242 1.242 2.52-2.52 1.26 1.26A.437.437 0 0014 4.191V.438A.433.433 0 0013.562 0H9.81a.437.437 0 00-.315.744zM4.19 0H.438A.433.433 0 000 .438V4.19a.433.433 0 00.744.307l1.26-1.26L6.125 7.35v5.775a.875.875 0 001.75 0V7a.92.92 0 00-.254-.621L3.246 1.995l1.26-1.26A.432.432 0 004.191 0z" }) })));
}
exports.default = SolidSplit;
