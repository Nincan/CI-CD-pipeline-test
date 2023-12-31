"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidScreenControlCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidScreenControlCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zm-.358 3.134a1.697 1.697 0 01.943 3.11V4.831a.943.943 0 10-1.886 0v1.411a1.697 1.697 0 01.943-3.109zm2.845 7.101a.746.746 0 01-.747.63H6.438a.78.78 0 01-.535-.212L4.39 9.183a.406.406 0 010-.58.434.434 0 01.388-.113l1.298.264V4.816a.566.566 0 011.132 0v2.2h.23a.763.763 0 01.336.077l1.54.744a.73.73 0 01.41.76z" }) })));
}
exports.default = SolidScreenControlCircle;
