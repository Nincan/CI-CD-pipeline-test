"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidApproval(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsx)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidApproval" }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: "M10 5.9l-3.2 4c-.1.2-.4.3-.6.3-.2 0-.4-.1-.6-.2L4.1 8.4c-.3-.4-.3-.9 0-1.2.3-.3.8-.3 1.1 0l1 1 2.6-3.3c.2-.3.7-.4 1.1-.1.3.3.4.8.1 1.1zm3.9.7l-.6-1c-.1-.1-.1-.3-.1-.4V4c0-.3-.2-.6-.4-.7l-1.1-.6-.3-.3-.6-1.1c-.1-.3-.4-.4-.7-.4H8.9c-.1 0-.3 0-.4-.1l-1-.6C7.2 0 6.8 0 6.6.1l-1 .6c-.2.1-.3.2-.5.2H3.9c-.3-.1-.6.1-.7.3l-.6 1.1c0 .1-.2.3-.3.3l-1.1.6c-.2.1-.4.4-.4.7v1.2c0 .2 0 .3-.1.4l-.6 1c-.1.3-.1.7 0 .9l.6 1c.1.1.1.3.1.4V10c0 .3.2.6.4.7l1.1.6.3.3.6 1.1c.1.3.4.4.7.4h1.2c.1 0 .3 0 .4.1l1 .6c.3.2.6.2.8 0l1-.6c.1-.1.3-.1.4-.1h1.2c.3 0 .6-.2.7-.4l.6-1.1.3-.3 1.1-.6c.3-.1.4-.4.4-.7V8.8c0-.2 0-.3.1-.4l.6-1c.3-.2.3-.6.2-.8z", fillRule: "evenodd", clipRule: "evenodd" }, void 0) }), void 0));
}
exports.default = SolidApproval;
