"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function PlaceholderStreamClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 26 30", "data-icon-name": "PlaceholderStreamClr" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M3.87 8.63h18.18v1H3.87zm0 3.17h13.82v1H3.87zm0 3.17h3.98v1H3.87zm0 8.66h18.18v1H3.87z", opacity: ".5" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M3.87 5.45h6.5v1h-6.5zm0 15h6.5v1h-6.5z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M22.5 0h-19C1.57 0 0 1.57 0 3.5v23C0 28.43 1.57 30 3.5 30h19c1.93 0 3.5-1.57 3.5-3.5v-23C26 1.57 24.43 0 22.5 0zM25 26.5a2.5 2.5 0 01-2.5 2.5h-19A2.5 2.5 0 011 26.5v-23A2.5 2.5 0 013.5 1h19A2.5 2.5 0 0125 3.5v23z" }, void 0)] }), void 0));
}
exports.default = PlaceholderStreamClr;
