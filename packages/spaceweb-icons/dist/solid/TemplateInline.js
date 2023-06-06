"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTemplateInline(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTemplateInline" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M9.647 10.85h3.65a.7.7 0 0 0 0-1.4h-3.65a.7.7 0 0 0 0 1.4ZM9.647 7.7h3.65a.7.7 0 0 0 0-1.4h-3.65a.7.7 0 0 0 0 1.4ZM9.647 4.55h3.65a.7.7 0 0 0 0-1.4h-3.65a.7.7 0 0 0 0 1.4ZM2.709 1.4h10.593a.7.7 0 0 0 0-1.4H2.71a.7.7 0 0 0 0 1.4ZM13.297 12.6H2.362a.7.7 0 1 0-.005 1.4h10.94a.7.7 0 1 0 .005-1.4Z" }, void 0), (0, jsx_runtime_1.jsx)("rect", { x: ".038", y: "3.15", width: "7.968", height: "7.7", rx: "1" }, void 0)] }), void 0));
}
exports.default = SolidTemplateInline;
