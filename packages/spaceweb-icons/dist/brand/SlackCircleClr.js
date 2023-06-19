"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandSlackCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandSlackCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { width: "14", height: "14", fill: "#fff", rx: "7" }), (0, jsx_runtime_1.jsx)("path", { fill: "#36c5f0", fillRule: "evenodd", d: "M5.873 2.767a.846.846 0 000 1.693h.846v-.846a.846.846 0 00-.846-.847m0 2.258H3.621a.847.847 0 000 1.693h2.252a.847.847 0 000-1.693z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#2eb67d", fillRule: "evenodd", d: "M11.224 5.871a.845.845 0 10-1.69 0v.847h.845a.846.846 0 00.845-.847zm-2.253 0V3.614a.845.845 0 10-1.69 0V5.87a.845.845 0 101.69 0z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#ecb22e", fillRule: "evenodd", d: "M8.126 11.233a.846.846 0 000-1.693h-.845v.846a.846.846 0 00.845.847zm0-2.258h2.253a.847.847 0 000-1.693H8.128a.847.847 0 000 1.693z" }), (0, jsx_runtime_1.jsx)("path", { fill: "#e01e5a", fillRule: "evenodd", d: "M2.776 8.129a.845.845 0 101.69 0v-.847H3.62a.846.846 0 00-.845.847zm2.253 0v2.257a.845.845 0 101.69 0V8.13a.845.845 0 10-1.69 0" })] })));
}
exports.default = BrandSlackCircleClr;
