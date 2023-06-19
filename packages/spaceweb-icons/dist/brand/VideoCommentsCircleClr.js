"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandVideoCommentsCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandVideoCommentsCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40a3f5", cx: "7", cy: "7", r: "7" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.8 4.4c-.1 0-.2-.1-.3-.1h-7c-.1 0-.2 0-.3.1l-.1.1c-.1.1-.1.2-.1.3v4.5c0 .1 0 .2.1.3l.1.1c.1 0 .2.1.3.1h2.4c.1 0 .2 0 .3.1L9 11.7c.1 0 .1 0 .1-.1V9.9c0-.1.1-.1.1-.1h1.2c.1 0 .2 0 .3-.1l.1-.1c.2-.1.2-.2.2-.3V4.8c0-.1 0-.2-.1-.3l-.1-.1z", fill: "#fff" }), (0, jsx_runtime_1.jsx)("path", { fill: "#40a3f5", d: "M9.1 8.2s0 .1 0 0l-.8-.8s0-.1-.1-.1v-.8s0-.1.1-.1l.8-.8h.1c-.1 0-.1 2.6-.1 2.6zm-1.2-.1c0 .1-.1.2-.2.2H5c-.1 0-.2-.1-.2-.2V5.7c0-.1.1-.2.2-.2h2.7c.1 0 .2.1.2.2v2.4z" })] })));
}
exports.default = BrandVideoCommentsCircleClr;
