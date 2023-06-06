"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function ProductSprinklrInsight(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "ProductSprinklrInsight" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M13.612 10.733 10.31 8.709a5.313 5.313 0 1 0-.903 1.583l3.252 1.993a.818.818 0 0 0 1.117-.263l.106-.173a.818.818 0 0 0-.264-1.116Zm-8.3-7.118a1.324 1.324 0 1 1-1.324 1.324 1.325 1.325 0 0 1 1.324-1.324ZM7.849 9.15a3.583 3.583 0 0 1-5.079 0v-.035a2.547 2.547 0 0 1 5.074.02v.015h.005Z" }, void 0) }), void 0));
}
exports.default = ProductSprinklrInsight;
