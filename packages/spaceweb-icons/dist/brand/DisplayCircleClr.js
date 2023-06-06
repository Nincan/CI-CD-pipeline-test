"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandDisplayCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandDisplayCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { fill: "#40A3F5", cx: "7", cy: "7", r: "7" }, void 0), (0, jsx_runtime_1.jsxs)("g", (0, tslib_1.__assign)({ fill: "#FFF" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M10.863 3.285H3.137a.145.145 0 00-.143.147V9.62c0 .081.064.147.143.147H6.14v.996h-1c-.08 0-.143.013-.143.028v.515c0 .016.064.03.143.03h3.72c.08 0 .143-.014.143-.03v-.515c0-.015-.064-.028-.143-.028h-1v-.996h3.003c.08 0 .143-.066.143-.147V3.432a.145.145 0 00-.143-.147zm-.846 5.434a.106.106 0 01-.108.104H4.091a.106.106 0 01-.108-.104V4.334c0-.058.048-.105.108-.105h5.818c.06 0 .108.047.108.105v4.385z" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M8.37 7.06l-.538.426-1.24-2.091-1.365 2.863H9.1z" }, void 0), (0, jsx_runtime_1.jsx)("ellipse", { cx: "8.219", cy: "5.866", rx: ".438", ry: ".428" }, void 0)] }), void 0)] }), void 0));
}
exports.default = BrandDisplayCircleClr;
