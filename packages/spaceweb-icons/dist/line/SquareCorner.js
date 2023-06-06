"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineSquareCorner(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineSquareCorner" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M5.447 12.704H2.183a.801.801 0 0 1-.8-.8V8.642a.701.701 0 0 0-1.403 0v3.262a2.205 2.205 0 0 0 2.203 2.202h3.264a.7.7 0 1 0 0-1.402ZM11.777.106H8.51a.7.7 0 1 0 0 1.401h3.266a.801.801 0 0 1 .8.8V5.57a.701.701 0 0 0 1.403 0V2.307A2.205 2.205 0 0 0 11.777.106ZM13.279 7.941a.7.7 0 0 0-.701.7v3.263a.801.801 0 0 1-.801.8H8.51a.7.7 0 1 0 0 1.402h3.266a2.205 2.205 0 0 0 2.203-2.202V8.642a.7.7 0 0 0-.701-.7ZM5.447.106H2.183A2.205 2.205 0 0 0-.02 2.307V5.57a.701.701 0 0 0 1.402 0V2.307a.801.801 0 0 1 .801-.8h3.264a.7.7 0 1 0 0-1.401Z" }, void 0) }), void 0));
}
exports.default = LineSquareCorner;
