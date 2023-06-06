"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandBlogCommentCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandBlogCommentCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40a3f5", cx: "7", cy: "7", r: "7" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.8 4.4c-.1 0-.2-.1-.3-.1h-7c-.1 0-.2 0-.3.1l-.1.1c-.1.1-.1.2-.1.3v4.5c0 .1 0 .2.1.3l.1.1c.1 0 .2.1.3.1h2.4c.1 0 .2 0 .3.1L9 11.7c.1 0 .1 0 .1-.1V9.9c0-.1.1-.1.1-.1h1.2c.1 0 .2 0 .3-.1l.1-.1c.2-.1.2-.2.2-.3V4.8c0-.1 0-.2-.1-.3l-.1-.1z", fill: "#fff" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#40a3f5", d: "M4.7 5.8h1.4v1.4H4.7V5.8zm2.1 0h2.5v.4H6.8v-.4zm0 1h2.5v.4H6.8v-.4zM4.7 8.2v-.4h4.6v.4" }, void 0)] }), void 0));
}
exports.default = BrandBlogCommentCircleClr;
