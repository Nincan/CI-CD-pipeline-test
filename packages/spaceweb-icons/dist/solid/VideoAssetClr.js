"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidVideoAssetClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidVideoAssetClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#40A3F5", d: "M13.096 3.406L9.876.367A1.328 1.328 0 0 0 8.964 0H1.817c-.76 0-1.38.661-1.38 1.475v11.05c0 .814.62 1.475 1.38 1.475h10.366c.761 0 1.38-.661 1.38-1.474V4.512c0-.423-.17-.825-.467-1.106zm-3.99 4.282a.438.438 0 0 1-.108.108l-3.175 2.222a.438.438 0 0 1-.688-.358V5.215a.437.437 0 0 1 .688-.358l3.175 2.222a.438.438 0 0 1 .107.61z" }, void 0) }), void 0));
}
exports.default = SolidVideoAssetClr;
