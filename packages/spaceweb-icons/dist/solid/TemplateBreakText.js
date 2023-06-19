"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidTemplateBreakText(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidTemplateBreakText" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11.739 12.6H2.275A.7.7 0 1 0 2.27 14h9.469a.7.7 0 1 0 .005-1.4ZM11.739 0H2.275a.7.7 0 1 0-.005 1.4h9.469a.7.7 0 1 0 .005-1.4Z" }), (0, jsx_runtime_1.jsx)("rect", { x: ".037", y: "2.861", width: "13.94", height: "8.278", rx: "1" })] })));
}
exports.default = SolidTemplateBreakText;
