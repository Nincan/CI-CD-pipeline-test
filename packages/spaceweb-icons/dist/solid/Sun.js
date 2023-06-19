"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSun(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSun" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 3.508A3.492 3.492 0 1010.492 7 3.493 3.493 0 007 3.508zM.636 7.636H1.91a.636.636 0 000-1.272H.636a.636.636 0 000 1.272zm11.455 0h1.273a.636.636 0 000-1.272H12.09a.636.636 0 000 1.272zm-5.727-7V1.91a.636.636 0 101.272 0V.636a.636.636 0 10-1.272 0zm0 11.455v1.273a.636.636 0 001.272 0V12.09a.636.636 0 00-1.272 0zM3.175 2.278a.634.634 0 00-.897.897l.675.675a.634.634 0 10.897-.897zm7.872 7.872a.634.634 0 00-.897.897l.675.675a.634.634 0 00.897-.897zm.675-6.975a.634.634 0 00-.897-.897l-.675.675a.634.634 0 10.897.897zM3.85 11.047a.634.634 0 10-.897-.897l-.675.675a.634.634 0 00.897.897z" }) })));
}
exports.default = SolidSun;
