"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderChordClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 40 27", "data-icon-name": "PlaceholderChordClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M17.98 17.14a32.71 32.71 0 01-7.5-6.34c1.11-.6 2.31-1.18 3.62-1.7a26.66 26.66 0 0014.57 4.19c5.54 0 9.52-1.54 9.61-1.58l-.37-.93c-.14.06-11.62 4.5-22.63-2.14a31.99 31.99 0 0121.47-.21l.32-.95a32.98 32.98 0 00-22.84.49 28.21 28.21 0 01-5.79-5.21l-.77.66a29.52 29.52 0 005.44 5.01c-1.17.5-2.25 1.03-3.26 1.58a18.37 18.37 0 01-3.11-5.9l-.96.29a19.54 19.54 0 003.17 6.11A34.39 34.39 0 001.5 16.2l.74.67c.06-.07 2.71-2.91 7.33-5.58a32.85 32.85 0 007.31 6.38c-.6.32-1.14.65-1.63.98-4.09 2.79-5.24 6.01-5.29 6.15l.94.33c.01-.03 1.12-3.1 4.97-5.69.57-.39 1.24-.77 1.98-1.14 6.63 4.11 13.44 6 13.94 6.14l.26-.96A58.82 58.82 0 0119 17.78c3.96-1.67 10.01-2.79 19.01-1.39l.15-.99c-9.68-1.5-16.08-.15-20.18 1.74z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3 13.57c0-1.39.27-2.73.81-3.99L1.04 8.41a13.28 13.28 0 0012.22 18.42v-3C7.6 23.83 3 19.23 3 13.57zm-.42-7.85L4.84 7.7c2.7-3.08 5.22-4.39 8.42-4.39v-3C8.01.31 4.8 3.2 2.58 5.72zM26.56.31v3a10.27 10.27 0 019.45 14.25l2.76 1.17A13.26 13.26 0 0026.56.31zm0 23.52v3c5.24 0 8.46-2.89 10.67-5.41l-2.25-1.98c-2.7 3.08-5.22 4.39-8.42 4.39z" })] })));
}
exports.default = PlaceholderChordClr;
