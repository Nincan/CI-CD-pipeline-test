"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function LineAnnotation(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 15 13.8", "data-icon-name": "LineAnnotation" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M7.5 13.6c-.2 0-.3-.1-.4-.2l-1.4-2.1h-5c-.3 0-.5-.2-.5-.5V.7C.2.4.4.2.7.2h13.7c.3 0 .5.2.5.5v10.1c0 .3-.2.5-.5.5h-5L8 13.4c-.2.1-.4.2-.5.2zm-6.3-3.3h4.7c.2 0 .3.1.4.2l1.2 1.7 1.2-1.7c.1-.1.2-.2.4-.2h4.8V1.2H1.2v9.1z" }, void 0) }), void 0));
}
exports.default = LineAnnotation;
