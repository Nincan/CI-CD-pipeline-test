"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidBlockQuote(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidBlockQuote" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M3.033 11.584a1.227 1.227 0 001.1-.679l1.301-2.603a1.81 1.81 0 00.193-.816V3.333a.92.92 0 00-.917-.917H1.043a.92.92 0 00-.917.917V7a.92.92 0 00.917.917h1.834l-.945 1.888a1.227 1.227 0 001.1 1.779zm8.246 0a1.227 1.227 0 001.1-.679l1.302-2.603a1.81 1.81 0 00.193-.816V3.333a.92.92 0 00-.917-.917H9.29a.92.92 0 00-.917.917V7a.92.92 0 00.917.917h1.833l-.944 1.888a1.227 1.227 0 001.1 1.779z" }, void 0) }), void 0));
}
exports.default = SolidBlockQuote;
