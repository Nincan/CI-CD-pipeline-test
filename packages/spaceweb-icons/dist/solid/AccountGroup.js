"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = tslib_1.__importDefault(require("../icon"));
function SolidAccountGroup(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, tslib_1.__assign({ viewBox: "0 0 14 14", "data-icon-name": "SolidAccountGroup" }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M13.06 1.904H3.301a.923.923 0 00-.919.92v.18h8.315a1.92 1.92 0 011.919 1.919v5.074h.442a.917.917 0 00.92-.92V2.824a.917.917 0 00-.92-.92z" }), (0, jsx_runtime_1.jsx)("path", { d: "M10.698 4.003H.94a.923.923 0 00-.92.92v6.253a.923.923 0 00.92.92h9.757a.917.917 0 00.919-.92V4.923a.917.917 0 00-.92-.92zM3.504 5.858a.9.9 0 11-.9.9.9.9 0 01.9-.9zm1.734 4.144a.243.243 0 01-.244.243H2.006a.243.243 0 01-.244-.243v-.465a1.615 1.615 0 01.602-1.25l-.008-.004c.023-.018.049-.032.072-.05a1.94 1.94 0 01.1-.068 1.63 1.63 0 01.156-.085c.035-.017.069-.035.105-.05a1.604 1.604 0 01.204-.063c.028-.007.054-.017.081-.023a1.575 1.575 0 01.307-.031h.238a1.576 1.576 0 01.307.031c.027.006.053.016.08.023a1.603 1.603 0 01.205.063c.036.015.07.033.105.05a1.643 1.643 0 01.157.085c.034.022.067.045.1.069.023.017.048.031.07.05l-.007.002a1.616 1.616 0 01.602 1.25zm4.458-.957h-2.46a.414.414 0 010-.829h2.46a.414.414 0 110 .829zm.023-1.363H7.258a.414.414 0 010-.829h2.46a.414.414 0 010 .829z" })] })));
}
exports.default = SolidAccountGroup;
