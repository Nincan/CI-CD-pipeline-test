"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTemplateWrapText(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidTemplateWrapText" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M.698 1.4H13.3a.7.7 0 0 0 0-1.4H.698a.7.7 0 0 0 0 1.4ZM13.296 12.6H.739A.7.7 0 1 0 .734 14h12.562a.7.7 0 1 0 .005-1.4Z" }, void 0), (0, jsx_runtime_1.jsx)("rect", { x: ".037", y: "2.861", width: "13.94", height: "8.278", rx: "1" }, void 0)] }), void 0));
}
exports.default = SolidTemplateWrapText;
