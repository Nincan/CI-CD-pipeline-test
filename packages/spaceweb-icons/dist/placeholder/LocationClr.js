"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderLocationClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 38 28", "data-icon-name": "PlaceholderLocationClr" }, props, { children: [(0, jsx_runtime_1.jsxs)("g", tslib_1.__assign({ opacity: ".5" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M15.31 12l.22.6c.17.46.35.86.52 1.24l.05.11.02.05h5.66l.02-.05c.22-.46.41-.9.6-1.35l.08-.17.18-.43h-7.35z" }), (0, jsx_runtime_1.jsx)("path", { d: "M37.85 26.48l-8.53-14a1 1 0 00-.85-.48h-2.6a53.62 53.62 0 01-.72 1.83l-.07.16h2.83l7.31 12H2.78l7.31-12h2.78c-.04-.1-.09-.19-.12-.29l-.36-.97c-.09-.25-.15-.49-.23-.74H9.53a.99.99 0 00-.85.48l-8.53 14A1.01 1.01 0 001 28h36c.36 0 .69-.2.87-.51a.99.99 0 00-.02-1.01z" })] })), (0, jsx_runtime_1.jsx)("path", { d: "M19.04 5.48h.02a2.9 2.9 0 012.78 2.56l.02.3a2.84 2.84 0 01-2.79 2.89h-.04a2.66 2.66 0 01-1.75-.65 2.93 2.93 0 01-1.02-2.2 2.84 2.84 0 012.78-2.9m3.7-2.19a5.62 5.62 0 00-3.19-1.26L19.43 2h-.75c-.42.07-.84.12-1.24.23a5.97 5.97 0 00-3.78 3.17 6.92 6.92 0 00-.51 4.46c.15.82.38 1.62.65 2.4l.34.93c.16.44.35.86.54 1.28l.06.11a45.32 45.32 0 004.04 7l.19.23h.15c.06-.07.14-.13.19-.21a62.11 62.11 0 003.86-7.02c.22-.45.42-.92.62-1.39l.1-.22.28-.71c.38-.98.71-1.99.85-3.05a6.12 6.12 0 00-2.28-5.92" })] })));
}
exports.default = PlaceholderLocationClr;
