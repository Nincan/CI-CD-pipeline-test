"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var style_1 = require("@sprinklr/spaceweb/style");
var icon_1 = (0, tslib_1.__importDefault)(require("../icon"));
function BrandTwitchCircleClr(props) {
    var _a = (0, style_1.useStyle)(), theme = _a.theme, isRTL = _a.isRTL;
    return ((0, jsx_runtime_1.jsxs)(icon_1.default, (0, tslib_1.__assign)({ viewBox: "0 0 14 14", "data-icon-name": "BrandTwitchCircleClr" }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: "7", cy: "7", r: "7", fill: "#9146ff" }, void 0), (0, jsx_runtime_1.jsx)("path", { d: "M4.66 2.32L2.99 3.99v6.02h2v1.67l1.68-1.67H8L11.01 7V2.32zm5.68 4.35L9.01 8H7.67L6.5 9.17V8H5V3h5.34z", fill: "#fff" }, void 0), (0, jsx_runtime_1.jsx)("path", { fill: "#fff", d: "M8.67 4.16h.67v2.01h-.67zM6.83 4.16h.67v2.01h-.67z" }, void 0)] }), void 0));
}
exports.default = BrandTwitchCircleClr;
