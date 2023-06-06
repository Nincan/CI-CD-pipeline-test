"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPlayCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPlayCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0zm2.215 7.59L5.967 9.492c-.557.326-1.009.07-1.009-.576v-3.83c0-.644.45-.903 1.01-.576l3.247 1.9c.557.327.56.854 0 1.182z" }, void 0) }), void 0));
}
exports.default = SolidPlayCircle;
