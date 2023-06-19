"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandWebSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandWebSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#5e96d2", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M9.67 6.578a1.226 1.226 0 0 0-.477-1.23 1.176 1.176 0 0 0-1.428.031v1.616h.746c.04 0 .11.038.056.095L7.36 8.717c-.025.035-.046.035-.07 0L6.081 7.09c-.038-.048-.035-.097.004-.095h.933V4.712c0-.017-.006-.076-.011-.143a1.844 1.844 0 0 0-1.831.013 1.817 1.817 0 0 0-.811 1.987 1.523 1.523 0 0 0-1.116 1.468 1.671 1.671 0 0 0 1.57 1.631h4.535a1.527 1.527 0 0 0 1.395-1.631 1.495 1.495 0 0 0-1.08-1.46Z", fill: "#fff" })] })));
}
exports.default = BrandWebSquareClr;
