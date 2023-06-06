"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidResume(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidResume" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.259 6.385l-7-6.125A1.069 1.069 0 005.556 0a.95.95 0 00-1 .875v12.25a.95.95 0 001 .875 1.068 1.068 0 00.703-.26l7-6.125a.786.786 0 000-1.23zM1.611 0C.973 0 .444.396.444.875v12.25c0 .478.529.875 1.167.875s1.167-.397 1.167-.875V.875C2.778.396 2.249 0 1.61 0z" }, void 0) }), void 0));
}
exports.default = SolidResume;
