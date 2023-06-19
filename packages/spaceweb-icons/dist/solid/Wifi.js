"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidWifi(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidWifi" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.093 7.127a.943.943 0 00-.09 1.429.97.97 0 001.256.08 4.795 4.795 0 015.485 0A.97.97 0 0011 8.557a.952.952 0 00-.086-1.434 6.685 6.685 0 00-7.821.005zM.35 4.413a.96.96 0 00-.071 1.42.948.948 0 001.276.061 8.607 8.607 0 0110.883 0 .948.948 0 001.28-.057.966.966 0 00-.066-1.424 10.515 10.515 0 00-13.301 0z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "10.72", r: "1.237" })] })));
}
exports.default = SolidWifi;
