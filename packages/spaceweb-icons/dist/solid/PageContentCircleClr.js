"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function SolidPageContentCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "SolidPageContentCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "7", fill: "#5aa1ed" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M10.487 4.946L8.647 3.21A.759.759 0 008.126 3H4.042a.818.818 0 00-.789.843v6.314a.818.818 0 00.789.843h5.923a.818.818 0 00.789-.842v-4.58a.87.87 0 00-.267-.632zm-5.453.42h1.643a.341.341 0 010 .68H5.034a.341.341 0 010-.68zM8.32 9.264H5.034a.341.341 0 010-.68H8.32a.341.341 0 010 .68zm0-1.622H5.034a.341.341 0 010-.681H8.32a.341.341 0 010 .68z", fill: "#fff" }, void 0)] }), void 0));
}
exports.default = SolidPageContentCircleClr;
