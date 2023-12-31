"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSprinklrAlertsSquareClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSprinklrAlertsSquareClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#3c56cd", d: "M0 0h14v14H0z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.648 7.508h-1.2l-.933 2.802a.531.531 0 0 1-.503.361.525.525 0 0 1-.5-.36l-1.61-4.829-.554 1.665a.525.525 0 0 1-.5.361H3.266a.528.528 0 0 1 0-1.054h1.201l.936-2.803a.549.549 0 0 1 1 0l1.61 4.825.554-1.661a.527.527 0 0 1 .5-.361h1.583a.527.527 0 0 1 0 1.054", fill: "#fff", fillRule: "evenodd" })] })));
}
exports.default = BrandSprinklrAlertsSquareClr;
