"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidArrowDownCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidArrowDownCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm3.306 7.888L7.52 10.673a.698.698 0 0 1-.495.205c-.009 0-.017-.005-.026-.005-.01 0-.018.005-.027.005a.71.71 0 0 1-.494-.205L3.695 7.888a.7.7 0 1 1 .99-.99l1.589 1.59V3.822a.7.7 0 0 1 1.399 0v4.72l1.643-1.644a.7.7 0 1 1 .99.99Z" }, void 0) }), void 0));
}
exports.default = SolidArrowDownCircle;
