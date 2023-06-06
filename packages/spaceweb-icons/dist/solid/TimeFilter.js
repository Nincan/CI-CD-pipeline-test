"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidTimeFilter(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 12 14", "data-icon-name": "SolidTimeFilter" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M6 2C2.7 2 0 4.7 0 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm.6 6.1V4.7c0-.3-.3-.6-.6-.6s-.6.3-.6.6v3.6c0 .2.1.3.2.4l1.7 1.7c.2.2.6.2.8 0 .2-.2.2-.6 0-.8L6.6 8.1zM4.2 1.2c-.3 0-.6-.3-.6-.6s.3-.6.6-.6h3.6c.3 0 .6.3.6.6s-.3.6-.6.6H4.2z", fillRule: "evenodd", clipRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidTimeFilter;
