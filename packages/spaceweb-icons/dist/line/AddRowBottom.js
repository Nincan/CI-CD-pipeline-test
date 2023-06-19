"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineAddRowBottom(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineAddRowBottom" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.293.964H.707A.707.707 0 000 1.67v10.66a.707.707 0 00.707.706h12.586A.707.707 0 0014 12.33V1.67a.707.707 0 00-.707-.706zm-.707 10.659H1.414V4.617h11.173z" }), (0, jsx_runtime_1.jsx)("path", { d: "M4.74 8.765h1.614v1.613a.645.645 0 001.289 0V8.765h1.615a.645.645 0 000-1.29H7.643V5.862a.645.645 0 10-1.29 0v1.615H4.74a.645.645 0 100 1.289z" })] })));
}
exports.default = LineAddRowBottom;
