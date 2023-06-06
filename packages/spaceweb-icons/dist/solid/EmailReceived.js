"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidEmailReceived(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidEmailReceived" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10.92 12.141a.677.677 0 01-.958 0l-1.44-1.44a.677.677 0 010-.959.677.677 0 01.957 0l.958.959 2.406-2.406a.677.677 0 01.958 0 .677.677 0 010 .958zm-4.057-.876h-5.49a1.363 1.363 0 01-1.36-1.36V1.752a1.363 1.363 0 011.36-1.36h10.872a1.363 1.363 0 011.36 1.359v4.54a4.751 4.751 0 00-6.796 4.294 4.51 4.51 0 00.054.68zM6.45 6.284a.687.687 0 00.72 0l4.804-3.004a.577.577 0 10-.611-.979L6.809 5.15 2.256 2.3a.577.577 0 10-.612.979z" }, void 0) }), void 0));
}
exports.default = SolidEmailReceived;
