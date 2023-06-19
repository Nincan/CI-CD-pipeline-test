"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidDarkMode(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidDarkMode" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.763 8.546A7.122 7.122 0 013.7.316 7.123 7.123 0 1014 8.42a5.92 5.92 0 01-.237.126z" }) })));
}
exports.default = SolidDarkMode;
