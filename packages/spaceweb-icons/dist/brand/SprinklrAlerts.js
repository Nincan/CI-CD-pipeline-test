"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandSprinklrAlerts(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandSprinklrAlerts" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 1 0 7 7 7 7 0 0 0-7-7Zm3.692 7.508H9.49l-.933 2.802a.53.53 0 0 1-.503.361.525.525 0 0 1-.5-.36l-1.61-4.829-.554 1.665a.525.525 0 0 1-.5.361H3.308a.528.528 0 0 1 0-1.054h1.201l.936-2.803a.549.549 0 0 1 1 0l1.609 4.825.555-1.661a.527.527 0 0 1 .5-.361h1.583a.527.527 0 0 1 0 1.054Z" }, void 0) }), void 0));
}
exports.default = BrandSprinklrAlerts;
