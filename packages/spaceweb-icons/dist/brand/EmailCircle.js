"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandEmailCircle(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandEmailCircle" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M7 0C3.1 0 0 3.1 0 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm4.1 9.3c0 .3-.2.5-.6.5h-7c-.1 0-.3-.1-.4-.2s-.2-.1-.2-.3V4.7c0-.3.2-.5.5-.5h7.1c.3 0 .6.2.6.5v4.6z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.1 5.4c0-.1 0-.1 0 0v-.3L10 5h-.3L7 7.2l-.7-.5-2.1-1.6H4c0-.1 0-.1 0 0l-.1.1c-.1 0 0 .2.1.2l1.9 1.5-2 1.7-.1.1V9h.3c.1 0 .1 0 .2-.1l2-1.7.6.5h.2l.7-.5L9.7 9h.2c.1 0 .1 0 .2-.1 0 0 .1-.1.1-.2s0-.1-.1-.2L8.2 6.9l1.9-1.5z" }, void 0)] }), void 0));
}
exports.default = BrandEmailCircle;
