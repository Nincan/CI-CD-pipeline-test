"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSuggestionCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSuggestionCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { width: "14", height: "14", rx: "7", fill: "#5e96d2" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.484 3.296H3.516A.518.518 0 0 0 3 3.812v5.355a.467.467 0 0 0 .516.452h1.742l-.325 1.676L7 9.62h3.484A.466.466 0 0 0 11 9.167V3.812a.517.517 0 0 0-.516-.516Zm-4 3.355A1.92 1.92 0 0 1 5 7.94c-.097-.005-.1.002-.193 0v-.645h.128c.352.003.63-.348.775-.645H4.161V4.973h2.323Zm3.355 0a1.92 1.92 0 0 1-1.484 1.29c-.098-.005-.1.002-.194 0v-.645h.129c.352.003.63-.348.775-.645H7.516V4.973h2.323Z", fill: "#fff" })] })));
}
exports.default = BrandSuggestionCircleClr;
