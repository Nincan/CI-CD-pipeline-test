"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidToolCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidToolCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0A7 7 0 0 0 .985 10.58l2.234-2.234a3.997 3.997 0 0 1 4.908-5.22.153.153 0 0 1 .06.252L5.932 5.633a.2.2 0 0 0 0 .284L7.994 7.98a.2.2 0 0 0 .284 0l2.256-2.255a.153.153 0 0 1 .252.06 3.997 3.997 0 0 1-5.215 4.91L3.315 12.95a6.963 6.963 0 0 0 3.475 1.046A7.093 7.093 0 0 0 14 7.11 7 7 0 0 0 7 0Z" }) })));
}
exports.default = SolidToolCircle;
