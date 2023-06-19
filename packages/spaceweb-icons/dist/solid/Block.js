"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidBlock(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidBlock" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 .021A6.979 6.979 0 1013.979 7 6.987 6.987 0 007 .021zm0 1.587a5.357 5.357 0 013.188 1.053l-7.523 7.533A5.382 5.382 0 017 1.608zm0 10.784a5.357 5.357 0 01-3.215-1.073l7.53-7.54A5.382 5.382 0 017 12.392z" }) })));
}
exports.default = SolidBlock;
