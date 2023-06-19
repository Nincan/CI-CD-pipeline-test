"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineAddColumnLeft(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineAddColumnLeft" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.293.974h-2.045c-.008 0-.016-.005-.025-.005-.008 0-.015.005-.024.005H.707A.707.707 0 000 1.681v10.648a.707.707 0 00.707.706h12.586A.707.707 0 0014 12.33V1.68a.707.707 0 00-.707-.707zm-2.776 10.648H1.413V2.388h9.104z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.706 7.65H5.32v1.613a.645.645 0 001.29 0V7.65h1.614a.645.645 0 000-1.29H6.609V4.747a.645.645 0 10-1.289 0v1.615H3.706a.645.645 0 100 1.289z" })] })));
}
exports.default = LineAddColumnLeft;
