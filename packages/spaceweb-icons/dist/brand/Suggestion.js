"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandSuggestion(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandSuggestion" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.097 0H.903A.906.906 0 0 0 0 .905v9.37a.817.817 0 0 0 .903.791h3.048L3.383 14 7 11.065h6.097a.816.816 0 0 0 .903-.79V.903A.905.905 0 0 0 13.097 0Zm-7 5.871A3.36 3.36 0 0 1 3.5 8.13c-.17-.01-.175.002-.338 0V7h.225c.615.005 1.102-.608 1.355-1.129h-2.71V2.936h4.065Zm5.87 0A3.36 3.36 0 0 1 9.372 8.13c-.17-.01-.175.002-.339 0V7h.226c.616.005 1.102-.608 1.355-1.129h-2.71V2.936h4.065Z" }, void 0) }), void 0));
}
exports.default = BrandSuggestion;
