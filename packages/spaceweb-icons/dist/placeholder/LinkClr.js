"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function PlaceholderLinkClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 27 31", "data-icon-name": "PlaceholderLinkClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { opacity: ".5", d: "M.84 1.48h25.25v13.54H.84z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.87 22.63h18.18v1H3.87zm0 3.17h13.82v1H3.87zm0 3.17h3.98v1H3.87z" }), (0, jsx_runtime_1.jsx)("path", { d: "M24.68.55H2.24C1.19.55.34 1.47.34 2.6v28.35h1V2.6c0-.58.41-1.05.9-1.05h22.44c.5 0 .9.47.9 1.05v28.35h1V2.6c0-1.13-.85-2.05-1.9-2.05z" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.87 19.45h6.5v1h-6.5z" })] })));
}
exports.default = PlaceholderLinkClr;
