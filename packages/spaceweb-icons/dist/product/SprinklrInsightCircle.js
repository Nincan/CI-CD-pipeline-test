"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function ProductSprinklrInsightCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "ProductSprinklrInsightCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M5.915 6.526a.851.851 0 1 0-.851-.85.852.852 0 0 0 .85.85ZM7.542 8.372a1.637 1.637 0 0 0-3.261-.013v.023a2.303 2.303 0 0 0 3.265 0h-.004Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 0 0-7 7 7 7 0 0 0 14 0 7 7 0 0 0-7-7Zm4.424 10.117-.069.111a.526.526 0 0 1-.717.17L8.547 9.116a3.441 3.441 0 1 1 .58-1.018L11.251 9.4h.003a.526.526 0 0 1 .17.717Z" }, void 0)] }), void 0));
}
exports.default = ProductSprinklrInsightCircle;
