"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineAddColumnRight(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "LineAddColumnRight" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.293.967H.707A.707.707 0 000 1.674v10.648a.707.707 0 00.707.706H2.75c.009 0 .016.005.025.005.008 0 .015-.004.024-.005h10.493a.707.707 0 00.707-.706V1.674a.707.707 0 00-.707-.707zm-.706 10.648H3.482V2.381h9.105z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M5.776 7.65h1.613v1.614a.645.645 0 001.29 0V7.65h1.614a.645.645 0 100-1.29H8.68V4.747a.645.645 0 10-1.29 0v1.615H5.776a.645.645 0 000 1.289z" }, void 0)] }), void 0));
}
exports.default = LineAddColumnRight;
