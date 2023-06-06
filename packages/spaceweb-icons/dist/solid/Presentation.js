"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPresentation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPresentation" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M11.607.611H2.393A2.065 2.065 0 00.306 2.7v5.988a2.065 2.065 0 002.087 2.088h3.902v.676a.65.65 0 01-.677.677h-.46a1.142 1.142 0 00-1.167 1.166v.461a.222.222 0 00.245.245h5.528a.221.221 0 00.245-.245v-.46a1.141 1.141 0 00-1.166-1.167h-.46a.65.65 0 01-.678-.676v-.677h3.902a2.065 2.065 0 002.087-2.088V2.7A2.065 2.065 0 0011.607.61zm-1.152 7.184h-6.91a.67.67 0 010-1.342h6.91a.67.67 0 110 1.342zm0-2.546h-6.91a.67.67 0 010-1.342h6.91a.67.67 0 110 1.342z" }, void 0) }), void 0));
}
exports.default = SolidPresentation;
