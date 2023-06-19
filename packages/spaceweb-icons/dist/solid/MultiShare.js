"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidMultiShare(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidMultiShare" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M11.288 9.65a2.076 2.076 0 00-1.475.636L4.76 7.587A2.084 2.084 0 004.855 7a1.94 1.94 0 00-.064-.44l5.016-2.85a2.083 2.083 0 001.482.639 2.16 2.16 0 002.144-2.175 2.145 2.145 0 10-4.29.001 1.755 1.755 0 00.033.283L4.078 5.354a2.095 2.095 0 00-1.368-.529 2.175 2.175 0 00.001 4.35 2.082 2.082 0 001.248-.429l5.214 2.785a2.215 2.215 0 00-.029.294 2.144 2.144 0 102.144-2.175z" }) })));
}
exports.default = SolidMultiShare;
