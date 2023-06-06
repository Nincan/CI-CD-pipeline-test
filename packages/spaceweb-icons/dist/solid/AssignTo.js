"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidAssignTo(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidAssignTo" }, props, { className: isRTL ? [{ transform: 'scaleX(-1)' }, props.className] : props.className }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M.605 10.382h4.04l-1.13-1.12a.601.601 0 1 1 .85-.85l2.16 2.14a.576.576 0 0 1 .04.07.564.564 0 0 1 .09.59.599.599 0 0 1-.1.13.567.567 0 0 1-.03.06l-2.16 2.16a.601.601 0 0 1-.85-.85l1.13-1.13H.605a.6.6 0 0 1 0-1.2Z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M7.765 11.402a.61.61 0 0 0 0-.87l-2.6-2.6a4.47 4.47 0 0 1 3.72-2h.64a4.48 4.48 0 0 1 4.47 4.45v2.28a.67.67 0 0 1-.67.67h-7.5ZM9.205 5.222a2.48 2.48 0 1 1 2.48-2.48 2.48 2.48 0 0 1-2.48 2.48Z" }, void 0)] }), void 0));
}
exports.default = SolidAssignTo;
