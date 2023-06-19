"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function LineList(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "LineList" }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.36 11.24c.32 0 .59.23.63.54l.01.1c0 .34-.28.62-.64.62H.64a.63.63 0 110-1.26h12.72zm0-4.87c.32 0 .59.23.63.54L14 7c0 .35-.28.63-.64.63H.64a.63.63 0 110-1.26h12.72zm0-4.87c.32 0 .59.23.63.54l.01.09c0 .35-.28.63-.64.63H.64a.63.63 0 110-1.26h12.72z" }) })));
}
exports.default = LineList;
