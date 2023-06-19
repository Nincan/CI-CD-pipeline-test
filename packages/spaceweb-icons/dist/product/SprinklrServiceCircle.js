"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function ProductSprinklrServiceCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "ProductSprinklrServiceCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 0 0-7 7 7 7 0 0 0 14 0 7 7 0 0 0-7-7Zm3.99 6.582a5.368 5.368 0 0 1-2.102 3.44l-.377-.873a1.67 1.67 0 0 0-3.022 0l-.377.874a5.355 5.355 0 0 1-2.102-3.44A2.209 2.209 0 0 1 7 4.92a2.209 2.209 0 0 1 3.99 1.662Z" }), (0, jsx_runtime_1.jsx)("path", { d: "M7 5.97a.943.943 0 1 0 .943.942A.945.945 0 0 0 7 5.97Z" })] })));
}
exports.default = ProductSprinklrServiceCircle;
