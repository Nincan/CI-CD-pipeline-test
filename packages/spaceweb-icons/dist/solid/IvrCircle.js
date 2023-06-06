"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidIvrCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidIvrCircle" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7 0a7 7 0 107 7 7 7 0 00-7-7zM5.02 9a.61.61 0 11.6-.6.61.61 0 01-.6.6zm0-1.98a.61.61 0 11.6-.61.61.61 0 01-.6.61zm0-1.98a.61.61 0 11.6-.62.61.61 0 01-.6.62zM7 10.99a.61.61 0 11.61-.62A.61.61 0 017 11zM7 9a.61.61 0 11.61-.6A.61.61 0 017 9zm0-1.98a.61.61 0 11.61-.61.61.61 0 01-.61.61zm0-1.98a.61.61 0 11.61-.62.61.61 0 01-.61.62zM8.98 9a.61.61 0 11.62-.6.61.61 0 01-.62.6zm0-1.98a.61.61 0 11.62-.61.61.61 0 01-.62.61zm0-1.98a.61.61 0 11.62-.62.61.61 0 01-.62.62z" }, void 0) }), void 0));
}
exports.default = SolidIvrCircle;
