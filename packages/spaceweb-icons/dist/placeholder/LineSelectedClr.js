"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderLineSelectedClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 39 29", "data-icon-name": "PlaceholderLineSelectedClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { fill: "#4CD2E0", d: "M36.5 17.5c-.16 0-.32.03-.47.06L26.1 6.42a2.2 2.2 0 00.81-1.7 2.21 2.21 0 00-4.42 0c0 .41.12.8.33 1.13l-4.38 3.5a2.2 2.2 0 00-1.74-.85c-.47 0-.9.15-1.26.4L4.8 3.38a2.19 2.19 0 00.11-.67 2.21 2.21 0 10-2.2 2.21 2.2 2.2 0 001.58-.68l10.47 5.44c-.17.3-.27.66-.27 1.03a2.21 2.21 0 104.38-.42l4.65-3.72a2.2 2.2 0 001.64.3l9.96 11.18a1.99 1.99 0 00-.63 1.45 2 2 0 102-2z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#CBD756", d: "M34.71 8.5a2.21 2.21 0 00-1.84 3.44L22.2 21.1a2.2 2.2 0 00-1.49-.59c-.91 0-1.7.56-2.04 1.35l-4.82-2.6a2.2 2.2 0 00.07-.54 2.21 2.21 0 00-4.42 0c0 .28.06.54.15.78l-5.87 5.3a2.19 2.19 0 00-1.07-.29 2.21 2.21 0 101.82.95l5.68-5.12a2.2 2.2 0 003.18-.19l5.13 2.76a2.2 2.2 0 002.2 2.02 2.21 2.21 0 002.05-3l10.85-9.3a2.21 2.21 0 101.1-4.12z" })] })));
}
exports.default = PlaceholderLineSelectedClr;
