"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandFreshdeskSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandFreshdeskSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#25c16f", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M9.98 3h-3a4.02 4.02 0 00-4 4.01 3.99 3.99 0 004 3.99H7a3.99 3.99 0 003.99-3.99V4a1 1 0 00-1.01-1zM8.8 7.85a.6.6 0 01-.46.6v.04a.73.73 0 01-.73.73h-.56a.1.1 0 01-.1-.1c0-.04.05-.07.1-.07h.55a.57.57 0 00.57-.56v-.02H7.7V7.04h.7v-.4a1.42 1.42 0 00-2.83 0v.4h.7v1.43h-.52a.62.62 0 01-.6-.61V6.6a1.83 1.83 0 011.82-1.83A1.8 1.8 0 018.8 6.64z" })] })));
}
exports.default = BrandFreshdeskSquareClr;
