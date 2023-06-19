"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function ProductSprinklrSocialCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "ProductSprinklrSocialCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7.449 8.148a1.445 1.445 0 0 0-2.878-.012v.02a2.032 2.032 0 0 0 2.88 0H7.45Z" }), (0, jsx_runtime_1.jsx)("circle", { cx: "6.013", cy: "5.768", r: ".751" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 0 0-7 7 7 7 0 0 0 14 0 7 7 0 0 0-7-7Zm3.611 4.991-.006.003a.861.861 0 0 1-1.056-.09l-.877.576a2.997 2.997 0 0 1-.141 3.053l.725.536a.864.864 0 1 1-.245.333l-.728-.538A3.011 3.011 0 1 1 8.46 5.13l.869-.572a.86.86 0 1 1 1.283.434Z" })] })));
}
exports.default = ProductSprinklrSocialCircle;
