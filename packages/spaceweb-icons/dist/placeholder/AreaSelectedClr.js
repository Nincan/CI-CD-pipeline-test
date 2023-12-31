"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderAreaSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 45 28", "data-icon-name": "PlaceholderAreaSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { opacity: ".5", fill: "#CBD756", d: "M2 26s9.6-20.86 9.9-20.7 7.26 8.91 7.26 8.91L28.4 3l8.28 7.34 4.92 4.2V26H2z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M42.65 12.5c-.81 0-1.52.46-1.88 1.13l-2.35-1.76a2.15 2.15 0 00-3.23-2.79l-4.97-4.97A2.14 2.14 0 0028.65.5 2.14 2.14 0 0027 4l-6.13 7.88a2.14 2.14 0 00-2.96.53 406 406 0 00-4.42-5.65c.2-.33.32-.7.32-1.11a2.15 2.15 0 00-4.3 0c0 .71.35 1.34.89 1.73a574.84 574.84 0 00-7.63 16.13l-.11-.01a2.15 2.15 0 102.15 2.15c0-.8-.44-1.48-1.08-1.85 2.7-5.85 5.97-12.81 7.57-16.04.11.02.23.04.35.04a2.13 2.13 0 001.13-.33 623.52 623.52 0 014.73 6.08l-.01.1a2.15 2.15 0 004.3 0c0-.37-.1-.7-.26-1.01l6.24-8.03a2.13 2.13 0 001.58.06l5.27 5.26a2.15 2.15 0 002.02 2.87c.36 0 .7-.1 1-.26l2.85 2.14a2.15 2.15 0 002.15 2.12 2.15 2.15 0 000-4.3z" })] })));
}
exports.default = PlaceholderAreaSelectedClr;
