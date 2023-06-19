"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidSketchAssetClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidSketchAssetClr" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fill: "#F5A623", d: "M13.096 3.406L9.876.367A1.328 1.328 0 0 0 8.964 0H1.817c-.76 0-1.38.661-1.38 1.475v11.05c0 .814.62 1.475 1.38 1.475h10.366c.761 0 1.38-.661 1.38-1.474V4.512c0-.423-.17-.825-.467-1.106zm-2.638 3.28L7.476 10.63a.707.707 0 0 1-1.127 0L3.367 6.686a.707.707 0 0 1-.023-.82l.792-1.178a.707.707 0 0 1 .587-.313h4.38c.235 0 .455.117.586.313l.792 1.177c.168.251.16.58-.023.821z" }) })));
}
exports.default = SolidSketchAssetClr;
