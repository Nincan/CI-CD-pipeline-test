"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function BrandHdfcCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "BrandHdfcCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("rect", { width: "14", height: "14", rx: "7", fill: "#004c8f" }), (0, jsx_runtime_1.jsx)("path", { d: "M3.535 3.535h6.93v6.93h-6.93z", fill: "#ed232a" }), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M10.465 6.654H9.253V4.748H7.346V3.535h-.692v1.213H4.748v1.906H3.535v.693h1.213v1.906h1.906v1.212h.692V9.253h1.907V7.347h1.212v-.693z" }), (0, jsx_runtime_1.jsx)("path", { d: "M5.96 5.96h2.08v2.08H5.96z", fill: "#004c8f" })] })));
}
exports.default = BrandHdfcCircleClr;
