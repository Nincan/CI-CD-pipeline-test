"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandMonoprix(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandMonoprix" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M2.494 2.25a4.633 4.633 0 0 0-.747 2.278A4.923 4.923 0 0 0 2.29 7.03a5.283 5.283 0 0 0 4.555 2.297 2.873 2.873 0 0 1 .86.074.858.858 0 0 1 .26.971 5.042 5.042 0 0 1-1.157 1.98 9.852 9.852 0 0 1-1.176 1.157c-.206.15-.411.186-.243.41.15.187.467 0 .672-.074a9.714 9.714 0 0 0 5.47-5.396A8.238 8.238 0 0 0 12.26 5.2C12.222 1.802 9.925-.27 6.303.028A4.967 4.967 0 0 0 2.494 2.25Z" }, void 0) }), void 0));
}
exports.default = BrandMonoprix;
