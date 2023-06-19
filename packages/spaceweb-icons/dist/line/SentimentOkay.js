"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
/**
 * @deprecated This icon is deprecated and will be removed in next major release. Use solid/SentimentNeutral.svg instead.
 */
function LineSentimentOkay(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineSentimentOkay" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 10.02 14.02A7 7 0 007 0zm0 12.85a5.85 5.85 0 11.01-11.71A5.85 5.85 0 017 12.84z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.36 8.42h7.28v1H3.36zm1.27-3.7C3.7 4.72 3 5.42 3 6.35v.13h1v-.13a.6.6 0 01.63-.62.6.6 0 01.63.62v.13h1v-.13c0-.97-.84-1.63-1.63-1.63zm4.74 0c-.79 0-1.63.66-1.63 1.63v.13h1v-.13a.6.6 0 01.63-.62.6.6 0 01.63.62v.13h1v-.13c0-.93-.7-1.63-1.63-1.63z" })] })));
}
exports.default = LineSentimentOkay;
