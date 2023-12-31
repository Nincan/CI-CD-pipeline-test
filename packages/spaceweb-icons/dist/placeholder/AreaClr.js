"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderAreaClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 45 28", "data-icon-name": "PlaceholderAreaClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M2 26s9.61-20.86 9.9-20.7c.29.16 7.26 8.91 7.26 8.91L28.4 3l8.28 7.34 4.92 4.2V26H2z" }), (0, jsx_runtime_1.jsx)("path", { d: "M42.65 12.5c-.82 0-1.52.46-1.88 1.13l-2.35-1.76a2.15 2.15 0 00-1.77-3.37 2.1 2.1 0 00-1.46.58l-4.97-4.97A2.15 2.15 0 1026.99 4l-6.13 7.88a2.13 2.13 0 00-2.96.53c-2.24-2.9-3.59-4.63-4.41-5.66a2.15 2.15 0 00-1.83-3.26c-1.19 0-2.16.97-2.16 2.16 0 .71.35 1.34.89 1.73a555.11 555.11 0 00-7.63 16.13l-.1-.01a2.15 2.15 0 102.15 2.15c0-.79-.44-1.48-1.08-1.85A864.95 864.95 0 0111.3 7.77a1.97 1.97 0 001.48-.29c1.2 1.52 3.1 3.95 4.73 6.08l-.01.1a2.15 2.15 0 104.04-1.01l6.24-8.03a2.13 2.13 0 001.58.06l5.27 5.26a2.14 2.14 0 003.02 2.61l2.85 2.14a2.15 2.15 0 102.15-2.19z" })] })));
}
exports.default = PlaceholderAreaClr;
